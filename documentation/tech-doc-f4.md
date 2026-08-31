# Technical Documentation - Phase 4: Database, Telemetry & FastAPI REST Endpoints

## 1. Overview & Objectives
Phase 4 constructs the persistence, telemetry aggregation, REST controller layer, and live advisor communication infrastructure for the **Colombian Language Academy Intelligent Assistant**.

Key achievements in this phase include:
1. **Asynchronous Relational Database:** Configured SQLite with SQLAlchemy `asyncio` (`sqlite+aiosqlite:///./data/academy.db`) and automatic schema initialization on startup.
2. **Relational Models & Student CRM:** Modeled `telemetry_logs`, `student_profiles`, `escalated_sessions`, `live_chat_messages`, and `session_reviews`.
3. **Pydantic v2 DTO Contracts:** Strict schema validation across chat inquiries, source citations, telemetry metrics, and multi-channel escalation flows.
4. **FastAPI Modular Routers:** Implemented `/api/v1/chat`, `/api/v1/telegram/webhook`, `/api/v1/metrics`, `/health`, and `/api/v1/escalation/*`.
5. **Real-Time WebSockets & Bi-Directional Handover:** Built `ConnectionManager` routing live chat between students and academic advisors.
6. **Standalone Telegram Polling Worker:** Created `backend/scripts/telegram_worker.py` handling long-polling, conversational state transitions, escalation handover, and 1-5 star review collection without requiring external tunneling.

---

## 2. Database Schema & Models

### 2.1 `TelemetryLog` (`backend/app/models/telemetry.py`)
Tracks operational telemetry for all incoming queries across web, webhook, and Telegram channels:
* `id`, `session_id`, `timestamp`, `channel`, `user_query`, `bot_response`, `status`, `escalation_reason`, `latency_ms`, `prompt_tokens`, `completion_tokens`, `cost_usd`.

### 2.2 Escalation & CRM Entities (`backend/app/models/escalation.py`)
* `StudentProfile`: Stores unique students by `national_id`, legal name, interaction frequency, and Telegram chat association.
* `EscalatedSession`: Manages escalation lifecycle (`WAITING`, `ACTIVE`, `RESOLVED`), advisor response verification, and timestamps.
* `LiveChatMessage`: Stores bi-directional chat history between student, advisor, and automated system alerts.
* `SessionReview`: Captures 1-to-5 star student satisfaction ratings and qualitative feedback upon session closure.

---

## 3. API Endpoints Architecture

| Method | Endpoint | Access | Purpose |
| :--- | :--- | :--- | :--- |
| `POST` | `/api/v1/chat` | Public | Main conversational RAG endpoint. |
| `POST` | `/api/v1/telegram/webhook` | Telegram API | Ingestion webhook for Telegram updates. |
| `GET` | `/api/v1/metrics` | Admin (`X-Admin-Key`) | Aggregates volume, cache ratio, escalation rate, and costs. |
| `GET` | `/health` | Public | Service health, version, and uptime check. |
| `POST` | `/api/v1/escalation/start` | Public | Registers student identity and creates deterministic session (`[Name]_[Last4Digits]`). |
| `GET` | `/api/v1/escalation/sessions` | Admin | Lists all active and waiting escalation sessions. |
| `GET` | `/api/v1/escalation/sessions/{id}/messages` | Public | Retrieves chat history for an escalation session. |
| `POST` | `/api/v1/escalation/sessions/{id}/close` | Admin | Closes session (enforcing advisor response before closing). |
| `POST` | `/api/v1/escalation/sessions/{id}/review` | Public | Submits student satisfaction rating (1-5 stars). |
| `GET` | `/api/v1/escalation/crm/profiles` | Admin | Lists student CRM records. |
| `GET` | `/api/v1/escalation/crm/summary` | Admin | Returns CRM analytics and satisfaction distribution. |
| `POST` | `/api/v1/escalation/telegram/reply` | Admin | Sends direct Telegram reply from admin workspace. |
| `WS` | `/api/v1/escalation/ws/chat/{session_id}` | Public/Admin | Bi-directional live advisor chat WebSocket. |

---

## 4. Telegram Polling Worker (`telegram_worker.py`)
* Long-polling daemon supporting local development and testing.
* Handles conversational states:
  * Regular inquiries -> LangGraph RAG.
  * Escalated inquiries -> Requests `Nombre Completo, Cédula` -> creates `EscalatedSession`.
  * Active escalation -> Forwards student messages directly to staff workspace.
  * Post-resolution -> Collects 1-5 star review.

---

## 5. Verification & Compliance
* All endpoints and models tested against zero legacy keywords.
* Full compatibility with Pydantic v2 and async SQLAlchemy.
