import shutil
import tempfile
import pytest
from tests.mock_embeddings import DeterministicMockEmbeddings
from app.services.cache_service import SemanticCacheService


@pytest.fixture
def cache_test_env():
    temp_dir = tempfile.mkdtemp()
    mock_embeddings = DeterministicMockEmbeddings()
    service = SemanticCacheService(
        persist_directory=temp_dir,
        collection_name="test_unit_semantic_cache",
        embeddings=mock_embeddings,
        similarity_threshold=0.74,
    )
    yield service
    shutil.rmtree(temp_dir, ignore_errors=True)


def test_cache_miss_on_empty(cache_test_env):
    service = cache_test_env
    res = service.lookup("¿Cuánto cuesta el curso intensivo de inglés?")
    assert res is None
    assert service.get_cache_size() == 0


def test_cache_store_and_hit(cache_test_env):
    service = cache_test_env
    query = "¿Cuánto cuesta el curso intensivo de inglés?"
    response = "El curso intensivo de inglés cuesta $650.000 COP al mes."
    sources = [{"document": "precios_y_metodos_de_pago.md", "section": "Tarifas"}]

    service.store(query=query, response=response, sources=sources)
    assert service.get_cache_size() == 1

    # Exact query hit
    hit = service.lookup(query)
    assert hit is not None
    assert hit["response"] == response
    assert hit["similarity_score"] >= 0.74
    assert len(hit["sources"]) == 1

    # Normalized paraphrase query hit
    paraphrase = "cuanto cuesta el curso intensivo de ingles"
    hit_para = service.lookup(paraphrase)
    assert hit_para is not None
    assert hit_para["response"] == response
    assert hit_para["similarity_score"] >= 0.74


def test_cache_clear(cache_test_env):
    service = cache_test_env
    service.store("query test", "response test")
    assert service.get_cache_size() >= 1
    service.clear()
    assert service.get_cache_size() == 0
