# Technical Documentation - Phase 2: Vector Store, Ingestion & Semantic Cache Pipeline

## 1. Overview & Objectives
Phase 2 implements the storage, vector search, and semantic optimization layers of the **Colombian Language Academy Intelligent Assistant**.

Key accomplishments in this phase include:
1. **Agnostic LLM & Embeddings Provider Factory:** (`backend/app/services/llm_factory.py`) supporting seamless runtime switching between OpenAI (`text-embedding-3-small` / `gpt-4o-mini`) and Google Gemini (`models/text-embedding-004` / `gemini-3.1-flash-lite`).
2. **Persistent Vector Store Service:** (`backend/app/services/vector_store.py`) encapsulating ChromaDB `PersistentClient` targeting the `academy_docs` collection with distance scoring and relevance filtering.
3. **Idempotent Ingestion Pipeline:** (`backend/scripts/ingest.py`) parsing raw markdown documents, extracting structured section headers, applying `RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=100)`, and enriching chunk metadata (`source_file`, `section`, `chunk_id`, `char_count`).
4. **Semantic Cache Engine:** (`backend/app/services/cache_service.py`) leveraging ChromaDB cosine similarity threshold ($\ge 82\%$) to resolve repeated and paraphrased queries with sub-second latency and $0 LLM API cost.

---

## 2. Component Architecture & Class Specifications

### 2.1 LLM & Embeddings Factory (`llm_factory.py`)
Provides decoupled instantiation functions:
* `get_chat_model(provider: Optional[str], temperature: float = 0.0) -> BaseChatModel`
* `get_embeddings_model(provider: Optional[str]) -> Embeddings`
Validates environment API keys and outputs contextual warning logs if credentials are not detected.

### 2.2 Vector Store Manager (`vector_store.py`)
* **ChromaDB Client:** `chromadb.PersistentClient` initialized at `settings.CHROMA_PERSIST_DIR` (`./data/chroma_db`).
* **Collection:** `academy_docs`.
* **Methods:**
  * `add_documents(documents: List[Document]) -> List[str]`
  * `similarity_search_with_relevance_scores(query: str, k: int = 4, score_threshold: Optional[float]) -> List[Tuple[Document, float]]`
  * `get_collection_count() -> int`
  * `reset_collection() -> None`

### 2.3 Semantic Cache Service (`cache_service.py`)
* **Collection:** `semantic_cache` with HNSW cosine distance metric space (`hnsw:space = "cosine"`).
* **Threshold Contract:** Query cosine distance $\le (1 - \text{threshold})$ maps to similarity $\ge 82\%$.
* **Data Flow:**
  * `lookup(query: str) -> Optional[Dict[str, Any]]`: Returns cached response, similarity score, source citations, and timestamp.
  * `store(query: str, response: str, sources: Optional[list]) -> None`: Ingests verified resolved answers.
  * `get_cache_size() -> int` / `clear() -> None`: Operational cache maintenance.

### 2.4 Document Ingestion Script (`ingest.py`)
* Ingests official academy documents from `backend/data/raw/`:
  * `cursos_y_modalidades.md`
  * `precios_y_metodos_de_pago.md`
  * `inscripciones_y_certificaciones.md`
* Preserves Markdown section headers (`# ` and `## `) as metadata attributes so generative models can cite precise sections.

---

## 3. Verification & Compliance
* **Zero Legacy References:** Code and metadata verified with zero traces of previous project terminology.
* **Storage Independence:** Fully operational locally in embedded SQLite/ChromaDB mode without external container dependencies.
* **Document Integrity:** Complete alignment with `docs/ARCHITECTURE.md`, `docs/DATABASE.md`, and `docs/RULES.md`.
