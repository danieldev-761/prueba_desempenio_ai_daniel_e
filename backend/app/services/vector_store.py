from pathlib import Path
from typing import List, Tuple, Optional
import chromadb
from langchain_chroma import Chroma
from langchain_core.documents import Document
from langchain_core.embeddings import Embeddings
from app.core.config import settings
from app.core.logging import logger
from app.services.llm_factory import get_embeddings_model


class VectorStoreService:
    def __init__(
        self,
        persist_directory: Optional[str] = None,
        collection_name: Optional[str] = None,
        embeddings: Optional[Embeddings] = None,
    ) -> None:
        self.persist_directory = str(Path(persist_directory or settings.CHROMA_PERSIST_DIR).resolve())
        self.collection_name = collection_name or settings.ACADEMY_COLLECTION_NAME
        self.embeddings = embeddings or get_embeddings_model()

        Path(self.persist_directory).mkdir(parents=True, exist_ok=True)
        self._client = chromadb.PersistentClient(path=self.persist_directory)
        self._vector_store = Chroma(
            client=self._client,
            collection_name=self.collection_name,
            embedding_function=self.embeddings,
        )
        logger.info(
            f"VectorStoreService initialized: collection='{self.collection_name}' at '{self.persist_directory}'"
        )

    def add_documents(self, documents: List[Document]) -> List[str]:
        if not documents:
            return []
        ids = self._vector_store.add_documents(documents)
        logger.info(f"Added {len(documents)} documents to '{self.collection_name}'")
        return ids

    def similarity_search_with_relevance_scores(
        self,
        query: str,
        k: int = 4,
        score_threshold: Optional[float] = None,
    ) -> List[Tuple[Document, float]]:
        threshold = score_threshold if score_threshold is not None else settings.RETRIEVAL_SIMILARITY_THRESHOLD
        results = self._vector_store.similarity_search_with_relevance_scores(query, k=k)
        
        # Filter by threshold if requested
        filtered_results = [
            (doc, score) for doc, score in results if score >= threshold
        ]
        logger.debug(
            f"Query '{query[:40]}...': {len(results)} found, {len(filtered_results)} >= {threshold}"
        )
        return filtered_results

    def get_collection_count(self) -> int:
        try:
            collection = self._client.get_collection(self.collection_name)
            return collection.count()
        except Exception:
            return 0

    def reset_collection(self) -> None:
        try:
            self._client.delete_collection(self.collection_name)
            self._vector_store = Chroma(
                client=self._client,
                collection_name=self.collection_name,
                embedding_function=self.embeddings,
            )
            logger.info(f"Collection '{self.collection_name}' reset.")
        except Exception as e:
            logger.warning(f"Failed to reset collection '{self.collection_name}': {e}")
