# Technical Documentation - Phase 9: Dynamic LLM Routing, JWT Admin Security, Supervisor-Resilient Telegram Bot & Vanguard UI/UX Evolution

## 1. Overview & Objectives
Phase 9 accomplishes key enterprise upgrades requested for the **Vanguard Language Academy** platform:
1. **Dynamic Multi-LLM Routing & Groq LPU Integration:**
   * Full runtime support for **Groq LPU** (`llama-3.3-70b-versatile`), **Google Gemini** (`gemini-2.5-flash`), and **OpenAI** (`gpt-4o-mini`).
   * Dynamic in-memory configuration overrides via `set_runtime_llm_config` in `backend/app/services/llm_factory.py`.
   * Persistent SQLite database storage in table `system_settings` storing active provider and masked API keys without requiring server restarts.
2. **Enterprise Admin Authentication & JWT Bearer Sessions:**
   * Transitioned away from static environment variable string comparison to SQLite table `admin_users` with **bcrypt** password hashing.
   * Signed `HS256` JWT Bearer access token generation with expiration and role-based FastAPI dependency `get_current_admin`.
   * Auto-seeding default administrator credentials (`admin` / `admin12345`) on database initialization.
3. **Visitor Conversation History & Auditing:**
   * Relational persistence of all visitor interactions in `chat_session_records` and `chat_message_records`.
   * Endpoints `GET /api/v1/conversations` and `GET /api/v1/conversations/{session_id}` for admin inspection and auditing.
4. **Resilient Long-Running Telegram Polling Worker:**
   * Root-cause fix for 3-day worker downtime in Railway container deployments.
   * Dynamic HTTP client recycling upon network drops and exponential backoff retry logic.
   * Auto-healing subprocess supervisor loop in `backend/scripts/run.sh`: `(while true; do python /app/scripts/telegram_worker.py; sleep 5; done) &`.
5. **Vanguard Academy UI/UX Revolution (`ui-ux-pro-max`):**
   * **Hero Section:** WebGL Three.js interactive particle trail (`GhostCursor.jsx`).
   * **Landing Page:** Editorial layout with official CEFR programs, Bogotá & Medellín campuses, COP pricing tables, and free placement test CTA.
   * **Perplexity-style Assistant:** Citations pill cards, verification badges, collapsible search history, and instant question chips.
   * **No Human Advisor Contact Leaks:** Complete compliance with strict business rules directing all user interactions to the AI Assistant.
   * **Dedicated Admin Management Portal:** Real-time KPI telemetry, visitor transcript inspector, and visual API Key / LLM provider switcher.

---

## 2. API Endpoints Reference

### Authentication & Admin Security
* `POST /api/v1/auth/login`: Authenticates administrator credentials and returns JWT Bearer token.
* `GET /api/v1/auth/me`: Validates JWT token and retrieves admin profile.

### Provider & LLM Key Management
* `GET /api/v1/settings/providers`: Retrieves active provider and masked keys (Requires JWT or Admin Key).
* `POST /api/v1/settings/providers`: Updates active provider and registers custom API keys in runtime.

### Conversation Auditing & History
* `GET /api/v1/conversations`: Returns paginated list of visitor chat sessions.
* `GET /api/v1/conversations/{session_id}`: Returns complete message transcript for specified session.

---

## 3. Database Schema Extensions

### `admin_users`
* `id` (INTEGER, PK, Auto Increment)
* `username` (VARCHAR(64), Unique, Indexed)
* `hashed_password` (VARCHAR(256))
* `role` (VARCHAR(32), Default 'admin')
* `is_active` (BOOLEAN, Default True)
* `created_at` (DATETIME)
* `last_login` (DATETIME, Nullable)

### `system_settings`
* `id` (INTEGER, PK, Auto Increment)
* `key` (VARCHAR(64), Unique, Indexed)
* `value` (TEXT)
* `description` (VARCHAR(255), Nullable)
* `updated_at` (DATETIME)

### `chat_session_records`
* `id` (INTEGER, PK, Auto Increment)
* `session_id` (VARCHAR(64), Unique, Indexed)
* `channel` (VARCHAR(32), Default 'web')
* `student_name` (VARCHAR(128), Nullable)
* `created_at` (DATETIME)
* `updated_at` (DATETIME)
* `total_messages` (INTEGER, Default 0)

### `chat_message_records`
* `id` (INTEGER, PK, Auto Increment)
* `session_id` (VARCHAR(64), Indexed)
* `role` (VARCHAR(32))
* `content` (TEXT)
* `status` (VARCHAR(32), Nullable)
* `confidence_score` (FLOAT, Nullable)
* `cost_usd` (FLOAT, Nullable)
* `latency_ms` (FLOAT, Nullable)
* `sources` (TEXT, Nullable)
* `created_at` (DATETIME)

---

## 4. Test Suite Verification Summary

```text
======================= 44 passed, 22 warnings in 6.90s =======================
```

| Test File | Tests | Focus Area | Result |
|---|---|---|---|
| `backend/tests/integration/test_auth_and_settings.py` | 5 | Admin login, JWT tokens, provider settings GET/POST, metrics protection | PASS |
| `backend/tests/unit/test_telegram_resilience.py` | 2 | Exponential backoff, HTTP client recycling, 409/429 error resilience | PASS |
| `backend/tests/integration/test_chat_endpoints.py` | 3 | `/health`, `/api/v1/chat`, `/api/v1/metrics` | PASS |
| `backend/tests/integration/test_telegram_webhook.py` | 2 | Telegram webhook command responses and payload processing | PASS |
| `backend/tests/unit/test_frequent_issues.py` | 18 | Triage matching, 9 operational categories, exhaustion triggers | PASS |
| `backend/tests/unit/test_cache.py` | 6 | Semantic cache cosine similarity, normalization, threshold matching | PASS |
| `backend/tests/unit/test_rag_pipeline.py` | 5 | StateGraph workflow, relevance gates, grounding verification | PASS |
| `backend/tests/unit/test_prompts.py` | 3 | Zero-hallucination prompt formatting and refusal triggers | PASS |
