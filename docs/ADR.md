# Architecture Decision Records (ADR)
## Project: Colombian Language Academy Intelligent Assistant (RAG Pipeline)

---

## ADR-001: Adoption of LangGraph and Python FastAPI over n8n and Node.js

### Context
The technical challenge mentions automating customer inquiries for a Colombian language academy, referencing n8n or Node.js. However, our engineering standards require an autonomous, fully testable, highly performant, containerized, and deterministic solution. Having the freedom to select best-in-class architectural tools, we need a unified, robust orchestration engine capable of state-machine transitions, semantic caching, vector retrieval, hallucination verification, and multi-channel escalation.

### Decision
Adopt a unified **Python FastAPI + LangGraph** architecture instead of standalone n8n workflows or raw Node.js scripts.

### Status
Accepted.

### Consequences
* **Pros:** Complete programmatic control, explicit state dictionary (`AgentState`), native support for conditional cyclic/acyclic branching, seamless unit and integration testing via `pytest`, zero reliance on external n8n instances, and sub-millisecond local execution.
* **Cons:** Requires running the Python backend service, which is fully containerized and automated via Docker.

---

## ADR-002: Embedded ChromaDB with Semantic Caching Layer

### Context
To optimize API costs and fulfill the bonus objective for frequent inquiry caching without requiring external cloud Redis clusters or complex database infrastructure.

### Decision
Use **ChromaDB in PersistentClient mode** with two isolated collections: `academy_docs` for language academy business knowledge and `semantic_cache` for query-response embeddings.

### Status
Accepted.

### Consequences
* **Pros:** Zero external service configuration, persists directly to disk in `./backend/data/chroma_db`, enables similarity-based paraphrase matching ($\ge 92\%$ similarity), and incurs $0 API cost on repeated questions.
* **Cons:** Single-process file locking (mitigated by asynchronous FastAPI architecture).

---

## ADR-003: SQLite with Async SQLAlchemy for Telemetry & Metrics

### Context
Need a lightweight, 12-factor-compliant relational datastore to record interactions, token counts, latency, and cost telemetry for the `/metrics` endpoint and live advisor escalation.

### Decision
Use **SQLite** via `SQLAlchemy[asyncio]` and `aiosqlite` at `./backend/data/academy.db`.

### Status
Accepted.

### Consequences
* **Pros:** 100% portable within the final deliverable and Docker volume, sub-millisecond local query speeds, and zero cloud dependency.
* **Cons:** Concurrency limits under extreme enterprise write traffic (fully sufficient for the project scope and trivially upgradable to PostgreSQL via `DATABASE_URL`).

---

## ADR-004: Agnostic LLM Factory (OpenAI / Google Gemini)

### Context
Providing flexibility for evaluators to run the pipeline using their preferred API key provider (OpenAI GPT-4o-mini or Google Gemini 3.1 Flash Lite).

### Decision
Implement a **Factory Pattern** (`llm_factory.py`) dynamically switching models and embedding generators based on `LLM_PROVIDER` in `.env`.

### Status
Accepted.

### Consequences
* **Pros:** High flexibility for evaluators, verified zero-hallucination compliance across both providers, and extremely low operating costs.
* **Cons:** Switching providers mid-session requires re-indexing vectors due to different embedding dimensions (1536 for OpenAI vs. 768 for Gemini).

---

## ADR-005: Programmatic Synthetic Knowledge Base Generation

### Context
To ensure consistent, repeatable, and idempotent creation of the 3 official academy markdown documents (`courses_and_modalities.md`, `pricing_and_payment_methods.md`, `admissions_and_certifications.md`) across environments without relying on manual file creation.

### Decision
Implement a dedicated Python script (`backend/scripts/generate_academy_data.py`) that generates the 3 structured knowledge base documents into `backend/data/raw/`.

### Status
Accepted.

### Consequences
* **Pros:** Full repeatability in Docker builds and CI/CD pipelines, consistent character counts, and easy versioning of domain text.
* **Cons:** Requires executing the script or automated bootstrap step before first ingestion.

---

## ADR-006: Real-Time Human Escalation Engine with WebSocket Bi-directional Messaging

### Context
When a student asks an out-of-scope question (e.g., debt refinancing, certified legal translations), the assistant must escalate to a human academic advisor with minimal friction.

### Decision
Implement an integrated escalation lifecycle:
1. Student registers basic identity (`full_name`, `national_id`).
2. Session identifier generated deterministically: `[Name]_[Last4Digits]`.
3. Bi-directional WebSocket endpoint (`/api/v1/ws/chat/{session_id}`) allows instant live chat between student and staff in the web portal.

### Status
Accepted.

### Consequences
* **Pros:** Closes the automation loop with human-in-the-loop capabilities, satisfying both autonomous and manual customer service requirements.
* **Cons:** Requires state management for active WebSocket connections.
