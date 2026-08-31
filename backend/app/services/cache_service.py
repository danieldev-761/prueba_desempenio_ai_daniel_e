import json
from datetime import datetime, timezone
from pathlib import Path
from typing import Optional, Dict, Any, Tuple
import chromadb
from langchain_chroma import Chroma
from langchain_core.documents import Document
from langchain_core.embeddings import Embeddings
from app.core.config import settings
from app.core.logging import logger
from app.services.llm_factory import get_embeddings_model


import re
import unicodedata

def normalize_cache_key(text: str) -> str:
    """
    Normalizes Spanish query text for optimal semantic cache comparison.
    Strips diacritics, punctuation, question marks, and excessive whitespace.
    """
    if not text:
        return ""
    nfkd = unicodedata.normalize("NFKD", text)
    without_accents = "".join([c for c in nfkd if not unicodedata.combining(c)])
    cleaned = re.sub(r"[^a-zA-Z0-9\s]", " ", without_accents).lower()
    return " ".join(cleaned.split())


class SemanticCacheService:
    """
    Semantic Cache for frequently asked language academy questions.
    Uses ChromaDB cosine distance metric.
    Hit Criteria: cosine similarity >= CACHE_SIMILARITY_THRESHOLD (default 0.74, max_distance <= 0.26)
    """

    def __init__(
        self,
        persist_directory: Optional[str] = None,
        collection_name: Optional[str] = None,
        embeddings: Optional[Embeddings] = None,
        similarity_threshold: Optional[float] = None,
    ) -> None:
        self.persist_directory = str(Path(persist_directory or settings.CHROMA_PERSIST_DIR).resolve())
        self.collection_name = collection_name or settings.CACHE_COLLECTION_NAME
        self.embeddings = embeddings or get_embeddings_model()
        self.similarity_threshold = similarity_threshold or settings.CACHE_SIMILARITY_THRESHOLD
        # Cosine distance in Chroma: distance = 1 - cosine_similarity
        self.max_distance = round(1.0 - self.similarity_threshold, 4)

        Path(self.persist_directory).mkdir(parents=True, exist_ok=True)
        self._client = chromadb.PersistentClient(path=self.persist_directory)
        self._vector_store = Chroma(
            client=self._client,
            collection_name=self.collection_name,
            embedding_function=self.embeddings,
            collection_metadata={"hnsw:space": "cosine"},
        )
        logger.info(
            f"SemanticCacheService initialized: collection='{self.collection_name}', min_similarity={self.similarity_threshold} (max_distance={self.max_distance})"
        )

    @property
    def collection(self):
        return self._client.get_or_create_collection(
            name=self.collection_name,
            metadata={"hnsw:space": "cosine"},
        )

    def lookup(self, query: str) -> Optional[Dict[str, Any]]:
        """
        Check if an incoming query matches a previously cached query with >= threshold similarity.
        Returns cached payload dict if hit, else None.
        """
        try:
            if self.collection.count() == 0:
                return None
        except Exception:
            return None

        try:
            norm_q = normalize_cache_key(query)
            # Query vector store for nearest match with raw cosine distance
            results = self._vector_store.similarity_search_with_score(norm_q, k=1)
            if not results:
                return None

            doc, distance = results[0]
            # Robust similarity calculation:
            # In cosine space: distance = 1 - cosine_sim -> sim = 1 - distance
            dist_val = float(distance)
            col_space = (self.collection.metadata or {}).get("hnsw:space", "cosine")
            if col_space == "cosine":
                calculated_similarity = max(0.0, min(1.0, 1.0 - dist_val))
            else:
                calculated_similarity = max(0.0, min(1.0, 1.0 - (dist_val / 2.0)))

            # Match criteria: similarity >= threshold
            if calculated_similarity >= self.similarity_threshold or dist_val <= self.max_distance:
                metadata = doc.metadata or {}
                cached_response = metadata.get("response", "")
                sources = json.loads(metadata.get("sources_json", "[]"))

                logger.info(
                    f"Semantic Cache HIT for '{query[:40]}...' (Similarity: {calculated_similarity:.4f} >= {self.similarity_threshold})"
                )
                return {
                    "query": metadata.get("original_query", doc.page_content),
                    "response": cached_response,
                    "similarity_score": round(calculated_similarity, 4),
                    "sources": sources,
                    "cached_at": metadata.get("cached_at", ""),
                }
            else:
                logger.debug(
                    f"Semantic Cache MISS for '{query[:40]}...' (Top similarity: {calculated_similarity:.4f} < {self.similarity_threshold})"
                )
                return None
        except Exception as e:
            logger.warning(f"Error during semantic cache lookup: {e}")
            return None

    def store(
        self,
        query: str,
        response: str,
        sources: Optional[list] = None,
    ) -> None:
        """
        Store a resolved query-response pair in the semantic cache collection.
        """
        try:
            now_iso = datetime.now(timezone.utc).isoformat()
            norm_q = normalize_cache_key(query)
            metadata = {
                "original_query": query.strip(),
                "response": response,
                "sources_json": json.dumps(sources or []),
                "cached_at": now_iso,
            }
            doc = Document(page_content=norm_q, metadata=metadata)
            self._vector_store.add_documents([doc])
            logger.info(f"Cached response for query: '{query[:40]}...' (normalized: '{norm_q[:40]}...')")
        except Exception as e:
            logger.error(f"Failed to store entry in semantic cache: {e}")

    def get_cache_size(self) -> int:
        try:
            return self.collection.count()
        except Exception:
            return 0

    def clear(self) -> None:
        try:
            self._client.delete_collection(self.collection_name)
            self._vector_store = Chroma(
                client=self._client,
                collection_name=self.collection_name,
                embedding_function=self.embeddings,
                collection_metadata={"hnsw:space": "cosine"},
            )
            logger.info("Semantic cache cleared.")
        except Exception as e:
            logger.warning(f"Failed to clear semantic cache: {e}")
