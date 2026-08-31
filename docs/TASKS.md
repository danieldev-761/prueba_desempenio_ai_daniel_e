# Detailed Implementation Task Breakdown (TASKS.md)
## Project: Colombian Language Academy Intelligent Assistant (RAG Pipeline)

---

## Phase 1: Environment Setup, Configuration & Business Documents
- [x] **TASK-1.1:** Initialize monorepo directory layout (`backend/`, `frontend/`, `backend/data/`).
- [x] **TASK-1.2:** Implement synthetic business data generator script (`backend/scripts/generate_academy_data.py`) to programmatically create and populate the 3 official academy markdown documents in `backend/data/raw/`:
  - `cursos_y_modalidades.md`: Programs (English, French, German, Italian, Portuguese), CEFR levels (A1-C1), modalities (Virtual, In-Person Sedes Bogotá/Medellín, Hybrid), daily schedules and shift hours.
  - `precios_y_metodos_de_pago.md`: Tuition fees in COP/USD per module, enrollment fee, accepted payment methods (PSE, Bancolombia, Nequi, Credit Card), early-bird discounts, refund rules.
  - `inscripciones_y_certificaciones.md`: Registration requirements, ID documents (Cédula, Tarjeta de Identidad, Pasaporte), placement test procedure, academy diplomas, and international exam prep (IELTS, TOEFL, Cambridge, DELF, Goethe).
- [x] **TASK-1.3:** Setup backend dependency manifest (`backend/requirements.txt`) with locked versions (FastAPI, LangGraph, LangChain, ChromaDB, SQLAlchemy, Aiosqlite, Pydantic-Settings, Uvicorn, etc.).
- [x] **TASK-1.4:** Create environment templates:
  - `backend/.env.example`: `LLM_PROVIDER`, `OPENAI_API_KEY`, `GEMINI_API_KEY`, `DATABASE_URL`, `CHROMA_PERSIST_DIR`, `TELEGRAM_BOT_TOKEN`, `ADMIN_API_KEY`, `PORT`.
  - `frontend/.env.example`: `VITE_API_URL`.
- [x] **TASK-1.5:** Configure logging, CORS settings, and application configuration via Pydantic `BaseSettings` (`backend/app/core/config.py`).

---

## Phase 2: Vector Store, Ingestion & Semantic Cache Pipeline
- [x] **TASK-2.1:** Implement LLM & Embeddings Provider Factory (`backend/app/services/llm_factory.py`) supporting dynamic switching between OpenAI (`gpt-4o-mini` + `text-embedding-3-small`) and Gemini (`gemini-3.1-flash-lite` + `text-embedding-004`).
- [x] **TASK-2.2:** Build vector store manager (`backend/app/services/vector_store.py`) encapsulating ChromaDB `PersistentClient` for the `academy_docs` collection.
- [x] **TASK-2.3:** Write idempotent data ingestion script (`backend/scripts/ingest.py`) parsing raw markdown documents with `RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=100)` and attaching structured metadata (`source_file`, `section`, `chunk_id`).
- [x] **TASK-2.4:** Build Semantic Cache service (`backend/app/services/cache_service.py`) using ChromaDB `semantic_cache` collection with cosine distance threshold $\le 0.08$ ($\ge 92\%$ similarity) for $0-cost immediate query hits.

---

## Phase 3: LangGraph Orchestration & Prompt Engineering
- [x] **TASK-3.1:** Author strict system prompts (`backend/app/core/prompts.py`) defining role, tone, refusal/escalation trigger tokens (`[[ESCALATE]]`), and 3 complete few-shot examples (in-scope RAG query, out-of-scope query, partial info query).
- [x] **TASK-3.2:** Define LangGraph `AgentState` TypedDict structure tracking `query`, `session_id`, `cache_hit`, `context_chunks`, `similarity_score`, `raw_response`, `escalated`, `escalation_reason`, `latency_ms`, and `token_metrics`.
- [x] **TASK-3.3:** Build discrete workflow nodes in `backend/app/services/graph_workflow.py`:
  - `node_check_cache`: Semantic lookup.
  - `node_retrieve`: Similarity search over document vectors.
  - `node_relevance_gate`: Evaluates if maximum chunk similarity $\ge 0.70$.
  - `node_generate`: Invokes LLM with retrieved context at `temperature=0.0`.
  - `node_verify_grounding`: Detects hallucination or missing info flags.
  - `node_escalate`: Prepares structured human ticket payload.
  - `node_persist_and_telemetry`: Records execution trace to DB and cache.
- [x] **TASK-3.4:** Assemble StateGraph edges and compile the executable workflow graph.

---

## Phase 4: Database, Telemetry & FastAPI REST Endpoints
- [x] **TASK-4.1:** Configure async SQLAlchemy engine and session factory (`backend/app/db/session.py`).
- [x] **TASK-4.2:** Build ORM entities (`backend/app/models/telemetry.py`, `backend/app/models/escalation.py`) for `telemetry_logs`, `escalated_sessions`, `live_chat_messages`, `student_profiles`, and `session_reviews`.
- [x] **TASK-4.3:** Create request and response DTO schemas with Pydantic v2 (`backend/app/schemas/chat.py`, `backend/app/schemas/metrics.py`, `backend/app/schemas/escalation.py`).
- [x] **TASK-4.4:** Implement API controllers:
  - `POST /api/v1/chat`: Main RAG conversational endpoint.
  - `POST /api/v1/telegram/webhook`: Webhook handler for Telegram bot interactions.
  - `GET /api/v1/metrics`: Analytics endpoint exposing query volume, escalation rate (%), latency, and cost calculations.
  - `GET /health`: Uptime and readiness healthcheck.
  - `POST /api/v1/escalation/start`: Initiation of human advisor session.
  - `GET /api/v1/escalation/sessions`: Active sessions list for advisors.
  - `WebSocket /api/v1/escalation/ws/chat/{session_id}`: Real-time live advisor chat.
- [x] **TASK-4.5:** Build standalone Telegram polling worker option (`backend/scripts/telegram_worker.py`) for local development without tunneling.

---

## Phase 5: Frontend Development (React + Vite + Tailwind CSS)
- [x] **TASK-5.1:** Initialize frontend application with Vite (`React`, JavaScript/TypeScript, Tailwind CSS, Lucide icons).
- [x] **TASK-5.2:** Build API client service (`frontend/src/services/api.js`) consuming backend endpoints with error handling.
- [x] **TASK-5.3:** Create UI layout and modular components:
  - `Navbar.jsx`: Academy branding, status indicators, Telegram link, and Staff portal button.
  - `ChatContainer.jsx`: Scrollable message stream with responsive typing indicator.
  - `MessageBubble.jsx`: Distinct styles for Student, Assistant, and Escalated Human Handover state (highlighting sources and confidence badges).
  - `InputBar.jsx`: Text input with character limits, loading spinner, and quick question chips (e.g., "Intensive English Prices", "Schedules", "Placement Test").
  - `AdminMetricsModal.jsx`: Protected administrator dashboard drawer/modal (requires Admin Key) displaying total queries by channel, cache hits, escalation rate (%), token consumption, and latency fetched from `/api/v1/metrics`.
  - `InquiryForm.jsx`: Structured contact form processing inquiries via webhook channel.
  - `EscalationModal.jsx`: Student identification modal generating `[Name]_[ID4Digits]` session IDs.
  - `LiveAdvisorChat.jsx`: Real-time floating live advisor chat window.
- [x] **TASK-5.4:** Implement session persistence in browser storage (`sessionStorage`) for conversational continuity.
- [x] **TASK-5.5:** Configure production build and Vercel configuration (`frontend/vercel.json`).

---

## Phase 6: Containerization & Cloud Deployment
- [ ] **TASK-6.1:** Author multi-stage, non-root `backend/Dockerfile` using `python:3.11-slim`.
- [ ] **TASK-6.2:** Create root `docker-compose.yml` linking backend and persistent volumes (`./backend/data:/app/data`).
- [ ] **TASK-6.3:** Write automated startup script (`backend/scripts/run.sh`) to run migrations/ingest on cold boot.
- [ ] **TASK-6.4:** Configure deployment parameters for Railway/Render and Vercel.

---

## Phase 7: Automated Testing, Documentation & Packaging
- [ ] **TASK-7.1:** Write unit tests for chunking, embedding generation, and semantic cache (`backend/tests/test_vector_store.py`).
- [ ] **TASK-7.2:** Write integration tests for LangGraph flow covering in-scope, out-of-scope, and cache hit scenarios (`backend/tests/test_rag_pipeline.py`).
- [ ] **TASK-7.3:** Write API endpoint tests using `httpx.AsyncClient` (`backend/tests/test_api.py`).
- [ ] **TASK-7.4:** Write production-ready `README.md` in English with architecture diagram, local setup instructions, Docker commands, API documentation, and test execution.
- [ ] **TASK-7.5:** Package deliverable into clean `.zip` archive complying with all criteria.
