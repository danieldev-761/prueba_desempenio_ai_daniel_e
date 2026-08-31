import shutil
import tempfile
import pytest
from langchain_core.documents import Document
from langchain_core.messages import AIMessage
from tests.mock_embeddings import DeterministicMockEmbeddings
from app.services.vector_store import VectorStoreService
from app.services.cache_service import SemanticCacheService
from app.services.graph_workflow import AcademyGraphWorkflow


class MockChatModel:
    """Mock Chat Model returning canned answers or [[ESCALATE]] tokens."""
    def __init__(self, canned_response: str = "El curso intensivo de inglés cuesta $650.000 COP al mes."):
        self.canned_response = canned_response

    def invoke(self, messages):
        return AIMessage(content=self.canned_response)


@pytest.fixture
def academy_test_environment():
    temp_dir = tempfile.mkdtemp()
    mock_embeddings = DeterministicMockEmbeddings()

    vector_service = VectorStoreService(
        persist_directory=temp_dir,
        collection_name="test_academy_docs_graph",
        embeddings=mock_embeddings,
    )
    cache_service = SemanticCacheService(
        persist_directory=temp_dir,
        collection_name="test_academy_cache_graph",
        embeddings=mock_embeddings,
        similarity_threshold=0.82,
    )

    # Pre-populate vector store with official academy chunks
    docs = [
        Document(
            page_content="El módulo intensivo de inglés (40 horas mensuales) tiene un costo de $650.000 COP.",
            metadata={"source_file": "precios_y_metodos_de_pago.md", "section": "Tarifas de Cursos", "chunk_id": "c1"},
        ),
        Document(
            page_content="Los horarios disponibles son mañana (06:00-08:00 COT), tarde (14:00-16:00 COT) y noche (18:30-20:30 COT).",
            metadata={"source_file": "cursos_y_modalidades.md", "section": "Franjas Horarias", "chunk_id": "c2"},
        ),
    ]
    vector_service.add_documents(docs)

    yield {
        "temp_dir": temp_dir,
        "vector_service": vector_service,
        "cache_service": cache_service,
    }

    shutil.rmtree(temp_dir, ignore_errors=True)


def test_graph_in_scope_rag_resolution(academy_test_environment):
    vector_service = academy_test_environment["vector_service"]
    cache_service = academy_test_environment["cache_service"]
    mock_llm = MockChatModel(canned_response="El módulo intensivo de inglés tiene un costo de $650.000 COP.")

    workflow = AcademyGraphWorkflow(
        vector_store_service=vector_service,
        cache_service=cache_service,
        chat_model=mock_llm,
    )

    result = workflow.invoke(
        query="El módulo intensivo de inglés (40 horas mensuales) tiene un costo de $650.000 COP.",
        session_id="session_test_001",
    )

    assert result["status"] == "RESOLVED_BY_RAG"
    assert result["is_escalated"] is False
    assert result["cache_hit"] is False
    assert len(result["sources"]) > 0
    assert "650.000" in result["generation"]
    assert result["latency_ms"] < 2500.0  # SLA SLA < 2.5s


def test_graph_semantic_cache_resolution(academy_test_environment):
    vector_service = academy_test_environment["vector_service"]
    cache_service = academy_test_environment["cache_service"]
    mock_llm = MockChatModel()

    workflow = AcademyGraphWorkflow(
        vector_store_service=vector_service,
        cache_service=cache_service,
        chat_model=mock_llm,
    )

    query = "El módulo intensivo de inglés (40 horas mensuales) tiene un costo de $650.000 COP."
    # 1st call -> RAG resolution and caching
    workflow.invoke(query=query, session_id="s1")

    # 2nd call -> Semantic cache hit
    result2 = workflow.invoke(query=query, session_id="s2")
    assert result2["status"] == "RESOLVED_BY_CACHE"
    assert result2["cache_hit"] is True
    assert result2["is_escalated"] is False
    assert result2["token_metrics"]["cost_usd"] == 0.0


def test_graph_ungrounded_escalation_token(academy_test_environment):
    vector_service = academy_test_environment["vector_service"]
    cache_service = academy_test_environment["cache_service"]
    # LLM returns [[ESCALATE]] due to out-of-scope query
    mock_llm = MockChatModel(
        canned_response="No emitimos traducciones oficiales juramentadas. [[ESCALATE]]"
    )

    workflow = AcademyGraphWorkflow(
        vector_store_service=vector_service,
        cache_service=cache_service,
        chat_model=mock_llm,
    )

    result = workflow.invoke(
        query="El módulo intensivo de inglés traducción juramentada ministerial",
        session_id="session_test_003",
    )

    assert result["status"] == "ESCALATED_TO_HUMAN"
    assert result["is_escalated"] is True
    assert result["escalation_reason"] == "UNGROUNDED_OR_OUT_OF_SCOPE"
    assert "[[ESCALATE]]" not in result["generation"]
