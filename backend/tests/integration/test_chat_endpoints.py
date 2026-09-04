import shutil
import tempfile
import pytest
import pytest_asyncio
from httpx import AsyncClient, ASGITransport
from langchain_core.documents import Document
from langchain_core.messages import AIMessage

from app.main import app
from app.api.v1.endpoints.chat import get_workflow
from app.services.graph_workflow import AcademyGraphWorkflow
from app.services.vector_store import VectorStoreService
from app.services.cache_service import SemanticCacheService
from tests.mock_embeddings import DeterministicMockEmbeddings


class MockChatModel:
    def __init__(self, response_text: str = "El curso intensivo de inglés cuesta $650.000 COP al mes."):
        self.response_text = response_text

    def invoke(self, messages):
        return AIMessage(content=self.response_text)


@pytest_asyncio.fixture(autouse=True)
async def initialize_test_db():
    from app.db.session import init_db
    await init_db()


@pytest.fixture
def mock_academy_workflow_fixture():
    temp_dir = tempfile.mkdtemp()
    mock_embeddings = DeterministicMockEmbeddings()

    vector_service = VectorStoreService(
        persist_directory=temp_dir,
        collection_name="api_test_academy_docs",
        embeddings=mock_embeddings,
    )
    cache_service = SemanticCacheService(
        persist_directory=temp_dir,
        collection_name="api_test_academy_cache",
        embeddings=mock_embeddings,
        similarity_threshold=0.82,
    )

    docs = [
        Document(
            page_content="El módulo intensivo de inglés (40 horas al mes) tiene un costo de $650.000 COP.",
            metadata={"source_file": "precios_y_metodos_de_pago.md", "section": "Tarifas", "chunk_id": "c1"},
        ),
    ]
    vector_service.add_documents(docs)
    mock_llm = MockChatModel()

    workflow = AcademyGraphWorkflow(
        vector_store_service=vector_service,
        cache_service=cache_service,
        chat_model=mock_llm,
    )

    yield workflow
    shutil.rmtree(temp_dir, ignore_errors=True)


@pytest.mark.asyncio
async def test_health_endpoint():
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as ac:
        response = await ac.get("/health")
        assert response.status_code == 200
        data = response.json()
        assert data["status"] == "healthy"
        assert "version" in data


@pytest.mark.asyncio
async def test_chat_endpoint_rag_resolution(mock_academy_workflow_fixture):
    # Override workflow dependency
    app.dependency_overrides[get_workflow] = lambda: mock_academy_workflow_fixture

    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as ac:
        payload = {
            "query": "El módulo intensivo de inglés (40 horas al mes) tiene un costo de $650.000 COP.",
            "session_id": "api_test_session_01",
            "channel": "web",
        }
        response = await ac.post("/api/v1/chat", json=payload)
        assert response.status_code == 200
        data = response.json()
        assert data["status"] in ["RESOLVED_BY_RAG", "RESOLVED_BY_CACHE"]
        assert "response" in data
        assert "telemetry" in data
        assert isinstance(data["sources"], list)

    app.dependency_overrides.clear()


@pytest.mark.asyncio
async def test_metrics_endpoint_unauthorized():
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as ac:
        response = await ac.get("/api/v1/metrics")
        assert response.status_code in [401, 422]


@pytest.mark.asyncio
async def test_metrics_endpoint_authorized():
    from app.core.config import settings
    headers = {"X-Admin-Key": settings.ADMIN_API_KEY}
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as ac:
        response = await ac.get("/api/v1/metrics", headers=headers)
        assert response.status_code == 200
        data = response.json()
        assert "total_queries_processed" in data
        assert "escalation_rate_pct" in data
        assert "total_tokens_consumed" in data
        assert "total_cost_usd" in data
        assert "average_latency_ms" in data
