# System Architecture Specification
## Project: Colombian Language Academy Intelligent Assistant (RAG Pipeline)

---

## 1. High-Level Architectural Overview

The solution follows a modern, decoupled **Layered / Clean Architecture** pattern designed for high cohesion, low coupling, cost efficiency, and ease of deployment. It integrates a lightweight asynchronous Python backend with vector search capabilities, deterministic graph orchestration (LangGraph), semantic caching, relational telemetry logging, and a responsive customer-facing user interface.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                                     CLIENT LAYER                                       │
│                                                                                        │
│   ┌──────────────────────────────┐    ┌─────────────────┐    ┌─────────────────────┐   │
│   │ React + Vite + Tailwind (Web)│    │  Telegram Bot   │    │ Third-Party Webhook │   │
│   │    (Railway Container / Web) │    │ (Webhook/Poll)  │    │  (Contact Inquiry)  │   │
│   └──────────────┬───────────────┘    └────────┬────────┘    └──────────┬──────────┘   │
└──────────────────┼─────────────────────────────┼────────────────────────┼──────────────┘
                   │                             │                        │
                   ▼                             ▼                        ▼
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        CONTAINERIZED APPLICATION LAYER (DOCKER)                        │
│                                                                                        │
│   ┌────────────────────────────────────────────────────────────────────────────────┐   │
│   │                         FASTAPI GATEWAY / CONTROLLERS                          │   │
│   │        /api/v1/chat    •    /api/v1/telegram    •    /api/v1/metrics           │   │
│   │        /api/v1/escalations   •   /api/v1/ws/chat/{session_id}                  │   │
│   └───────────────────────────────────────┬────────────────────────────────────────┘   │
│                                           │                                            │
│   ┌───────────────────────────────────────▼────────────────────────────────────────┐   │
│   │                           LANGGRAPH ORCHESTRATOR                               │   │
│   │                                                                                │   │
│   │  [Inquiry] ──► [Semantic Cache Check] ──(Miss)──► [Vector Retrieval (Top-K)]   │   │
│   │                         │                                  │                   │   │
│   │                       (Hit)                                │                   │   │
│   │                         │                     (Score < 0.70)   (Score >= 0.70) │   │
│   │                         │                            │                 │       │   │
│   │                         │                            │                 ▼       │   │
│   │                         │                            │      [LLM Grounded Gen] │   │
│   │                         │                            │                 │       │   │
│   │                         │                            ▼                 ▼       │   │
│   │                         └────────────────────► [Escalation?] ◄───[Ungrounded?] │   │
│   │                                                      │                         │   │
│   │                                                      ▼                         │   │
│   │                                              [Telemetry Hook]                  │   │
│   └──────────────────────┬───────────────────────────────┬─────────────────────────┘   │
│                          │                               │                             │
│   ┌──────────────────────▼────────┐             ┌────────▼─────────────────────────┐   │
│   │      LLM FACTORY PROVIDER     │             │        DATA & STORAGE LAYER      │   │
│   │  • OpenAI (GPT-4o-mini)       │             │  • ChromaDB (Docs & Cache)       │   │
│   │  • Google Gemini (3.1 Flash)  │             │  • SQLite via SQLAlchemy (Async) │   │
│   └───────────────────────────────┘             └──────────────────────────────────┘   │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Component Breakdown & Layer Responsibilities

### 2.1 API & Presentation Layer (`backend/app/api/`)
* **Framework:** FastAPI with asynchronous event loops (`async`/`await`).
* **Endpoints:**
  * `POST /api/v1/chat`: Ingests user questions regarding academy courses, pricing, schedules, or admissions, returning answers, escalation status, confidence scores, and source citations.
  * `POST /api/v1/telegram/webhook`: Ingests and responds to Telegram bot updates.
  * `GET /api/v1/metrics`: Provides real-time operational metrics (total queries, escalation rate, token usage, estimated costs).
  * `GET /health`: Health-check endpoint for container orchestration and uptime monitoring.
  * `POST /api/v1/escalations/start`: Initiates human advisor handover with applicant identification (`[Name]_[Last4Digits]`).
  * `GET /api/v1/escalations/sessions`: Lists active escalation sessions for academic advisors.
  * `WebSocket /api/v1/ws/chat/{session_id}`: Real-time bi-directional messaging between student and human advisor.
* **Schema Validation:** Strict Pydantic v2 models for request parsing and response contracts.

### 2.2 Orchestration Engine: LangGraph (`backend/app/services/graph_workflow.py`)
Replaces linear automations with a state-aware Directed Acyclic Graph (DAG):
1. **State Dictionary (`AgentState`):** Carries `query`, `session_id`, `triage_hit`, `cache_hit`, `documents`, `relevance_score`, `generation`, `status`, `is_escalated`, `escalation_reason`, and `token_metrics`.
2. **Conditional Routing:**
   * **Node 0 (`node_deterministic_triage` - ADR-012):** Evaluates incoming queries against `backend/app/core/frequent_issues.json` (8 operational categories: payments, platform, certificates, placement, schedules, freezes, textbooks, exams). If matched, returns diagnostic checklist with $0\text{ tokens}$ and $< 5\text{ ms}$ latency (`status="RESOLVED_BY_FAQ_TRIAGE"`), bypassing cache and RAG.
   * **Node 1 (`check_cache`):** Queries the semantic cache collection with normalized cosine distance ($1 - d$). If similarity $\ge 0.82$, routes directly to completion (`status="RESOLVED_BY_CACHE"`).
   * **Node 2 (`retrieve`):** Performs vector similarity search across chunked academy business documents.
   * **Conditional Gate:** If top similarity $< 0.45$, routes to `escalate`.
   * **Node 3 (`generate`):** Invokes the selected LLM using zero-hallucination, token-efficient system prompt with few-shot examples and closed-catalog negation logic (ADR-011).
   * **Node 4 (`verify_grounding`):** Validates if the answer acknowledged missing data or returned `[[ESCALATE]]`. If ungrounded or out of scope, routes to `escalate`.
   * **Node 5 (`finalize`):** Stores valid grounded answers in semantic cache and returns the client payload.

### 2.3 LLM & Embeddings Abstraction (`backend/app/services/llm_factory.py`)
Uses the **Factory Pattern** driven by environment variables (`LLM_PROVIDER=openai` or `LLM_PROVIDER=gemini`):
* **Gemini (Primary Provider):** `ChatGoogleGenerativeAI(model="gemini-2.5-flash")` + `GoogleGenerativeAIEmbeddings(model="models/gemini-embedding-001")` (3072 dimensions, ADR-010).
* **OpenAI (Secondary Provider):** `ChatOpenAI(model="gpt-4o-mini", temperature=0.0)` + `OpenAIEmbeddings(model="text-embedding-3-small")`.

### 2.4 Vector Engine & Semantic Cache (`backend/app/services/vector_store.py`)
* **Engine:** ChromaDB in persistent client mode stored at `./backend/data/chroma_db` with `hnsw:space="cosine"`.
* **Collections:**
  1. `academy_docs`: Ingests 3 core business documents (`cursos_y_modalidades.md`, `precios_y_metodos_de_pago.md`, `inscripciones_y_certificaciones.md`) chunked via `RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=100)`.
  2. `semantic_cache`: Stores previously resolved queries and answers. Hit criteria: Cosine similarity $\ge 0.82$ (Cosine distance $\le 0.18$).

### 2.5 Relational Telemetry & Persistence (`backend/app/models/` & `backend/app/db/`)
* **Engine:** SQLite with asynchronous I/O via **SQLAlchemy** (`sqlite+aiosqlite:///./backend/data/academy.db`).
* **Entities:**
  * `TelemetryLog`: `id`, `session_id`, `timestamp`, `channel`, `query`, `response`, `status` (`RESOLVED_BY_FAQ_TRIAGE`, `RESOLVED_BY_CACHE`, `RESOLVED_BY_RAG`, `ESCALATED_TO_HUMAN`), `latency_ms`, `prompt_tokens`, `completion_tokens`, `cost_usd`.
  * `EscalatedSession`: `id`, `session_id`, `full_name`, `national_id`, `channel`, `status`, `created_at`.
  * `LiveChatMessage`: `id`, `session_id`, `sender`, `message`, `timestamp`.
  * `StudentProfile`: `id`, `national_id`, `full_name`, `total_escalations_count`, `last_interaction_at`.
  * `SessionReview`: `id`, `session_id`, `national_id`, `rating`, `notes`, `created_at`.

---

## 3. Containerization & Deployment Strategy

* **Docker:** Multi-stage, non-root container (`backend/Dockerfile`) with automated startup entrypoint (`run.sh`) that ingests documents on boot if the database is unpopulated.
* **Frontend:** React + Vite + Tailwind CSS containerized with Nginx Alpine (`frontend/Dockerfile`) deployed on Railway or locally served.
* **Backend:** Deployable on Railway or Docker Compose with persistent data volume mounted at `/app/data`.
* **Platform:** Standardized exclusively on **Railway** container infrastructure under the Starter / Trial plan.
