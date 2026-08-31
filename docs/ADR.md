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

---

## ADR-010: Transition to gemini-embedding-001 for Google GenAI v1beta Compatibility

### Context
During vector ingestion with Google Gemini, requests utilizing `models/text-embedding-004` failed with a `404 NOT_FOUND` error (`models/text-embedding-004 is not found for API version v1beta, or is not supported for embedContent`). Inspection via the Google GenAI SDK revealed that Google's active API endpoints under `v1beta` designate `models/gemini-embedding-001` as the official, supported model for `embedContent` operations.

### Decision
Update the default Google GenAI embeddings model from `text-embedding-004` to `gemini-embedding-001` across:
1. `backend/app/core/config.py` (`GEMINI_EMBEDDING_MODEL = "gemini-embedding-001"`).
2. `backend/.env.example`.
3. Architecture Decision Records and environment templates.

### Status
Accepted.

### Consequences
* **Pros:** Restores 100% operational compatibility with Google AI Studio `v1beta` API, generates stable 3072-dimensional dense vector representations, and resolves the 404 NOT_FOUND exception during ChromaDB ingestion.
* **Cons:** Embedding dimension is 3072, requiring fresh ChromaDB collection initialization (`reset=True`) upon first ingestion.

---

## ADR-011: Exhaustive Catalog Negation and Alternative Routing Strategy

### Context
Under the strict Closed-World Assumption previously defined, any inquiry asking about an item not explicitly cited in the context (such as an unlisted language like "Russian", "Japanese", or "Mandarin", or unlisted payment methods like "Bitcoin") triggered the `[[ESCALATE]]` token. This overwhelmed human advisors with routine inquiries that can be resolved autonomously by logical deduction: since the official documents define an exhaustive, closed catalog of offered programs (English, French, German, Italian, Portuguese), the absence of a requested program constitutes verified evidence of non-availability.

### Decision
Refine the system prompt and few-shot reasoning exemplars to distinguish between **indeterminate inquiries** (requiring human escalation) and **exhaustive closed-catalog inquiries** (requiring authoritative negation with alternatives):
1. **Authoritative Negation with Alternatives:** If the student asks for a language, schedule, or modality that does not appear in the context, but the context explicitly enumerates the academy's official offerings, the assistant must state clearly and politely that the requested item is not offered, immediately propose the official available alternatives, and **refrain from emitting `[[ESCALATE]]`**.
2. **Escalation Scope Limitation:** The `[[ESCALATE]]` token is strictly reserved for:
   - Services explicitly flagged as requiring human direction (e.g. corporate agreements over 15 people, debt renegotiations, exceptional force majeure).
   - Legal, sworn, or certified translation services outside the academy's scope.
   - Student issues requiring manual database access, grievance handling, or personalized academic coordination.

### Status
Accepted.

### Consequences
* **Pros:** Prevents false-positive escalations, dramatically reduces advisor workload, provides instant customer satisfaction, and preserves commercial conversion opportunities by redirecting student interest to available courses.
* **Cons:** Requires clear delineation in prompt engineering between catalog boundaries and unanswerable business policies.

---

## ADR-012: Deterministic Pre-LLM FAQ & Issue Triage Engine

### Context
To dramatically optimize token consumption, eliminate cloud inference costs, and deliver sub-millisecond round-trip responses for predictable operational requests, the academy requires a pre-LLM deterministic triage layer. Repetitive student inquiries (such as payment failures, virtual campus login issues, certificate requests, placement tests, course freeze policies, schedule changes, book access codes, and exam preparation inquiries) do not require vector embedding calculations or generative LLM computation; they are best served with authoritative step-by-step diagnostic checklists.

### Decision
Implement a zero-token deterministic triage layer prior to semantic caching and RAG in LangGraph:
1. Maintain a structured JSON knowledge base (`backend/app/core/frequent_issues.json`) containing comprehensive operational categories with normalized keywords, regex patterns, diagnostic checklists, and quick-action pathways in Spanish.
2. Implement `FrequentIssuesService` to perform microsecond pattern matching on incoming student queries without calling embedding models or LLMs.
3. Insert `node_deterministic_triage` as the first node in `AcademyGraphWorkflow`. If a predictable issue matches, the node returns the self-help checklist with `status="RESOLVED_BY_FAQ_TRIAGE"`, `prompt_tokens=0`, `completion_tokens=0`, and `cost_usd=0.0`.
4. If no pattern matches, the workflow transitions seamlessly to the semantic cache and vector retrieval stages.
5. Track `resolved_by_faq_triage` in telemetry logs and expose token/cost savings in administrative analytics.

### Status
Accepted.

### Consequences
* **Pros:** Eliminates 100% of LLM API costs and token usage for recurring technical and administrative issues, slashes response latency from ~2s to <5ms, delivers standardized troubleshooting steps to students, and reserves AI resources for genuinely complex academic inquiries.
* **Cons:** The keyword and regex catalog must be maintained as new institutional procedures arise.

---

## ADR-013: 3-Tier Progressive Triage Funnel, Inactivity Follow-up, and Gated Human Handover

### Context
Allowing arbitrary or premature human advisor escalation buttons in customer interfaces bypasses self-service mechanisms, saturates human staff, and incurs unnecessary support costs. Conversely, repeating identical canned responses when an issue persists leads to student frustration. A structured, multi-tier containment strategy is required across all operational and technical categories (payments, virtual campus, certificates, placement tests, schedules, freezes, textbook codes, and exam prep), coupled with an automated inactivity follow-up and strictly gated human handover.

### Decision
Implement a 3-tier progressive triage funnel across all 8 operational categories:
1. **Tier 1 (Initial Self-Help Checklist):** Immediate, zero-token basic diagnostic checklist delivered upon first problem detection.
2. **Tier 2 (Deep Technical Troubleshooting):** Triggered when the student indicates persistence or re-queries within the same category. Provides deeper technical checks (network stability, VPN/proxy disablement, bank limits, browser cache/incognito, alternative workflows) with empathetic recognition of the persistent issue.
3. **Automated 2-Minute Inactivity Follow-Up:** If the student remains inactive for 2 minutes after a triage response, the client displays an automated verification check: *"¿Pudiste solucionar tu inconveniente o necesitas ayuda adicional? [Sí, resuelto] [No, continúa el problema]"*.
4. **Tier 3 (Gated Human Handover - Last Resort):** Only when the student confirms that Tier 2 troubleshooting has failed (or responds "No" to the follow-up after completing previous tiers), the system recognizes that automated means are exhausted and initiates human advisor handover (`[[ESCALATE]]` / escalation form). All manual, ungated "Hablar con Asesor" buttons are removed.
5. **Universal Web Review Experience:** Ensure web chat students receive the 1-to-5 star rating and feedback card upon advisor session resolution, matching the Telegram review workflow and synchronizing directly with the CRM.

### Status
Accepted.

### Consequences
* **Pros:** Minimizes advisor saturation, guarantees thorough self-service troubleshooting across all operational domains, provides empathetic progressive support without token consumption, and ensures equitable review collection across all communication channels.
* **Cons:** Requires client-side timer management and state tracking per session.

---

## ADR-014: Semantic Cache Normalization, Exhaustion Variants, and Academic Absence Containment

### Context
Rigid cosine similarity thresholds (0.82) on high-dimensional (3072) dense vectors caused false cache misses when students phrased identical questions with minor syntactic variations, regional phrasing (e.g. "cuáles son las sedes" vs "cuáles son las sedes de la academia"), or minor typos. Furthermore, the Tier 3 triage exhaustion check failed when students expressed failure using colloquial Spanish expressions beyond the exact string "No pude solucionar". Finally, inquiries regarding failed academic modules and attendance limits represented a frequent student concern lacking deterministic containment.

### Decision
1. **Semantic Cache Optimization:** Implement pre-embedding text normalization (`normalize_cache_key`) stripping diacritics, punctuation, and extra whitespace, and calibrate the cache cosine similarity threshold to `0.74` (`max_distance = 0.26`).
2. **Exhaustion Pattern Expansion:** Expand `EXHAUSTION_PATTERNS` to cover all natural Spanish expressions of failure ("sigue igual", "no me sirvió", "no me funcionó", "ya intenté todo y nada", "no pude", "todavía no") and treat short negative affirmations in Tier 2 as immediate Tier 3 triggers.
3. **9th Deterministic Category (`perdida_modulo_inasistencias`):** Establish a 3-tier containment workflow for module failure (<3.8 GPA), 20% attendance caps, single habilitación exams ($60.000 COP), and 50% discount module repetition policies.

### Status
Accepted.

### Consequences
* **Pros:** Dramatically increases semantic cache hit rates across natural conversational paraphrases, ensures seamless Tier 3 human handover regardless of exact phrasing, and resolves academic grading/absence questions with zero tokens.
* **Cons:** Cache threshold 0.74 must continue to be monitored against false-positive crossover across distinct academic programs.

---

## ADR-015: Monorepo Multi-Stage Docker Containerization and Production Railway Deployment

### Context
In a monorepo containing both `backend/` and `frontend/`, default cloud container builders (such as Railway Railpack or BuildKit) analyze the repository root (`./`). Without an explicit root `Dockerfile` and proper `.dockerignore`, dependency paths fail, and local database files or uncommitted knowledge base directories cause build failure (`"/data/raw": not found`). Furthermore, modern Python packaging tools (`uv`) require explicit virtual environment targeting (`VIRTUAL_ENV="/opt/venv"` and `--python /opt/venv/bin/python`) in non-root multi-stage containers.

### Decision
1. **Root Multi-Stage Production Dockerfile:** Maintain a dedicated root `Dockerfile` that specifies explicit paths relative to the monorepo root (`backend/requirements.txt`, `backend/app`, `backend/scripts`, `backend/data/raw`).
2. **Explicit `.dockerignore` Configuration:** Exclude local sqlite files (`*.db`, `*.sqlite`, `*.sqlite3`), virtual environments, and caches, while explicitly guaranteeing that `backend/data/raw/*.md` is tracked and included.
3. **Dedicated `VIRTUAL_ENV` Injection:** Declare `ENV VIRTUAL_ENV="/opt/venv"` and `ENV PATH="/opt/venv/bin:$PATH"`, invoking `uv pip install --no-cache --python /opt/venv/bin/python -r requirements.txt` to guarantee clean installation in unprivileged containers.
4. **Declarative Railway Blueprint (`railway.toml`):** Configure `builder = "DOCKERFILE"` pointing to `Dockerfile`, with healthchecks at `/health`.
5. **Background Process Orchestration (`run.sh`):** Launch the Telegram polling worker in the background alongside the Uvicorn ASGI server when `TELEGRAM_BOT_TOKEN` is present in production environment variables.

### Status
Accepted.

### Consequences
* **Pros:** Guarantees predictable, fast, reproducible builds in any cloud container environment (Railway, Render, Fly.io, Kubernetes) without path ambiguity.
* **Cons:** Dockerfile modifications at root must keep paths synchronized with any structural directory renames in `backend/`.







