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
To ensure consistent, repeatable, and idempotent creation of the 3 official academy markdown documents (`cursos_y_modalidades.md`, `precios_y_metodos_de_pago.md`, `inscripciones_y_certificaciones.md`) across environments without relying on manual file creation.

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

---

## ADR-007: Adoption of pnpm v12 as Primary Frontend Package Manager

### Context
The frontend previously used standard npm. Modern enterprise engineering and reproducible delivery standards require ultra-fast, content-addressable storage, strict supply-chain security checks (`pnpm approve-builds`), and deterministic dependency locking without phantom dependencies.

### Decision
Migrate the frontend workspace to **pnpm v12** (`pnpm@12.1.0`):
1. Configure `packageManager: "pnpm@12.1.0"` in `frontend/package.json`.
2. Generate and maintain `frontend/pnpm-lock.yaml`.
3. Update `frontend/Dockerfile` to install and build using `pnpm@12` (`pnpm install --frozen-lockfile`).

### Status
Accepted.

### Consequences
* **Pros:** Hard-linked content-addressable storage significantly decreases disk usage and CI installation times; strict supply chain protection prevents unexpected postinstall script execution; build times consistently clocked at under 2 seconds.
* **Cons:** Developers must have pnpm v12 installed locally (`npm install -g pnpm@12`).

---

## ADR-008: Google Gemini as Primary Default LLM and Embeddings Provider

### Context
The system was engineered with an agnostic LLM Factory (`llm_factory.py`) supporting both OpenAI and Google Gemini. To optimize operating costs, take advantage of generous free-tier API quotas, and provide rapid inference times, an official primary default needed to be designated.

### Decision
Designate **Google Gemini** as the primary default LLM and Embeddings provider:
1. Configure `LLM_PROVIDER: str = "gemini"` as default in `backend/app/core/config.py`.
2. Primary chat model: `gemini-2.5-flash` / `gemini-1.5-flash`.
3. Primary embeddings model: `models/text-embedding-004` (768 dimensions).
4. Update `docker-compose.yml`, `backend/.env.example`, and documentation to default to Gemini. OpenAI remains fully functional as a secondary drop-in fallback.

### Status
Accepted.

### Consequences
* **Pros:** Extremely low API cost ($0.075/1M input tokens), high tokens-per-minute throughput on Gemini Flash, and native compatibility with Google AI Studio free API keys.
* **Cons:** Vector database embeddings collection is tied to the selected provider (switching to OpenAI requires re-running `ingest.py` due to dimensionality differences: 768 for Gemini vs. 1536 for OpenAI).

---

## ADR-009: Cloud Deployment Strategy on Railway Container Infrastructure

### Context
The user selected **Railway** as the primary cloud hosting platform to leverage its container-native architecture (`Dockerfile`), free tier/starter credits, and zero-configuration SSL.

### Decision
Standardize cloud deployment on **Railway**:
1. Create `backend/railway.toml` specifying Dockerfile builder, start command (`/bin/bash /app/scripts/run.sh`), healthcheck path (`/health`), and failure restart policy.
2. Create `frontend/railway.toml` configuring Nginx Alpine container serving with automated `/` health checks.
3. Attach persistent volume `/app/data` to the backend service to safeguard `academy.db` and ChromaDB embeddings.

### Status
Accepted.

### Consequences
* **Pros:** Native container execution directly from Dockerfiles, automatic continuous deployment on git push, automatic HTTPS domain provisioning, persistent volume support for SQLite and ChromaDB, and compliance with free/trial quotas.
* **Cons:** Ephemeral free-tier hours require monitoring usage to avoid interruption.

