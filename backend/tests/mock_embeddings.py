from typing import List
from langchain_core.embeddings import Embeddings


class DeterministicMockEmbeddings(Embeddings):
    """
    Deterministic mock embeddings for offline unit testing without requiring an active external API key.
    Generates a 64-dimensional normalized bag-of-words pseudo-embedding.
    """

    def __init__(self, dimensions: int = 64) -> None:
        self.dimensions = dimensions

    def _embed_text(self, text: str) -> List[float]:
        vec = [0.0] * self.dimensions
        words = text.lower().replace("?", "").replace(",", "").replace(".", "").split()
        for i, word in enumerate(words):
            hash_val = sum(ord(c) for c in word)
            idx = hash_val % self.dimensions
            vec[idx] += 1.0

        # Normalize
        norm = sum(x * x for x in vec) ** 0.5
        if norm > 0:
            vec = [x / norm for x in vec]
        return vec

    def embed_documents(self, texts: List[str]) -> List[List[float]]:
        return [self._embed_text(t) for t in texts]

    def embed_query(self, text: str) -> List[float]:
        return self._embed_text(text)
