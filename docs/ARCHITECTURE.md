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
│   │     (Deployed on Vercel)     │    │ (Webhook/Poll)  │    │  (Contact Inquiry)  │   │
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
1. **State Dictionary (`AgentState`):** Carries `query`, `session_id`, `cache_hit`, `documents`, `relevance_score`, `generation`, `is_escalated`, `escalation_reason`, and `token_metrics`.
2. **Conditional Routing:**
   * **Node 1 (`check_cache`):** Queries the semantic cache collection. If cosine distance $\le 0.08$ ($\ge 92\%$ similarity), routes directly to completion.
   * **Node 2 (`retrieve_context`):** Performs vector similarity search across chunked academy business documents.
   * **Conditional Gate:** If top similarity $< 0.70$, routes to `escalate_human`.
   * **Node 3 (`generate_answer`):** Invokes the selected LLM using zero-hallucination system prompt with 3 few-shot examples.
   * **Node 4 (`grounding_verifier`):** Validates if the answer acknowledged missing data or returned `[[ESCALATE]]`. If ungrounded, routes to `escalate_human`.
   * **Node 5 (`log_telemetry`):** Records interaction details into SQLite and returns the client payload.

### 2.3 LLM & Embeddings Abstraction (`backend/app/services/llm_factory.py`)
Uses the **Factory Pattern** driven by environment variables (`LLM_PROVIDER=openai` or `LLM_PROVIDER=gemini`):
* **OpenAI:** `ChatOpenAI(model="gpt-4o-mini", temperature=0.0)` + `OpenAIEmbeddings(model="text-embedding-3-small")`.
* **Gemini:** `ChatGoogleGenerativeAI(model="gemini-3.1-flash-lite", temperature=0.0)` + `GoogleGenerativeAIEmbeddings(model="models/text-embedding-004")`.

### 2.4 Vector Engine & Semantic Cache (`backend/app/services/vector_store.py`)
* **Engine:** ChromaDB in persistent client mode stored at `./backend/data/chroma_db`.
* **Collections:**
  1. `academy_docs`: Ingests 3 core business documents (`courses_and_modalities.md`, `pricing_and_payment_methods.md`, `admissions_and_certifications.md`) chunked via `RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=100)`.
  2. `semantic_cache`: Stores previous resolved queries and answers. Hit criteria: Cosine distance $\le 0.08$ ($\ge 92\%$ semantic similarity).

### 2.5 Relational Telemetry & Persistence (`backend/app/models/` & `backend/app/db/`)
* **Engine:** SQLite with asynchronous I/O via **SQLAlchemy** (`sqlite+aiosqlite:///./backend/data/academy.db`).
* **Entities:**
  * `TelemetryLog`: `id`, `session_id`, `timestamp`, `channel`, `query`, `response`, `status` (`RESOLVED_BY_CACHE`, `RESOLVED_BY_RAG`, `ESCALATED_TO_HUMAN`), `latency_ms`, `prompt_tokens`, `completion_tokens`, `cost_usd`.
  * `EscalatedSession`: `id`, `session_id`, `full_name`, `national_id`, `channel`, `status`, `created_at`.
  * `LiveChatMessage`: `id`, `session_id`, `sender`, `message`, `timestamp`.
  * `StudentProfile`: `id`, `national_id`, `full_name`, `total_escalations_count`, `last_interaction_at`.
  * `SessionReview`: `id`, `session_id`, `national_id`, `rating`, `notes`, `created_at`.

---

## 3. Containerization & Deployment Strategy

* **Docker:** Multi-stage, non-root container (`backend/Dockerfile`) with automated startup entrypoint (`run.sh`) that ingests documents on boot if the database is unpopulated.
* **Frontend:** React + Vite + Tailwind CSS deployed on Vercel or locally served.
* **Backend:** Deployable on Railway, Render, or Docker Compose.
