# API Specification & Contracts
## Project: Colombian Language Academy Intelligent Assistant (RAG Pipeline)

Base URL: `http://localhost:8000/api/v1`

---

## 1. Chat Completion Endpoint

### `POST /chat`
Processes user questions through the LangGraph RAG pipeline (Semantic Cache $\rightarrow$ Vector Store $\rightarrow$ Relevance Gate $\rightarrow$ LLM $\rightarrow$ Grounding Verifier $\rightarrow$ Escalation Fallback).

#### Request Headers
* `Content-Type: application/json`

#### Request Body Schema
```json
{
  "query": "What are the schedules and prices for the B2 intensive English course?",
  "session_id": "std_session_4918a",
  "channel": "web"
}
```

| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `query` | `string` | Yes | The user's question or message (min length: 2). |
| `session_id` | `string` | No | Identifier for tracing conversation threads. |
| `channel` | `string` | No | Origin of inquiry (`web`, `telegram`, `webhook`). Default: `web`. |

#### Response Body Schema (Success - Grounded / Cached)
```json
{
  "response": "The B2 Intensive English course runs 2 hours daily from Monday to Friday (available in Morning 6:00-8:00 AM COT or Evening 6:30-8:30 PM COT). Each 40-hour module costs $650,000 COP. A 10% early-bird discount applies if registered 10 business days prior to cohort start.",
  "status": "RESOLVED_BY_RAG",
  "confidence_score": 0.94,
  "sources": [
    {
      "document": "cursos_y_modalidades.md",
      "section": "Turno Intensivo de Lunes a Viernes"
    },
    {
      "document": "precios_y_metodos_de_pago.md",
      "section": "Tarifas Oficiales de Matrícula y Programas"
    }
  ],
  "escalated": false,
  "telemetry": {
    "latency_ms": 782.4,
    "cost_usd": 0.00018
  }
}
```

#### Response Body Schema (Escalated to Human)
```json
{
  "response": "I cannot find verified information regarding official sworn court translations in our official academy guidelines. Your request has been escalated to our Academic Advisory Team. An advisor will assist you directly.",
  "status": "ESCALATED_TO_HUMAN",
  "confidence_score": 0.41,
  "sources": [],
  "escalated": true,
  "telemetry": {
    "latency_ms": 310.1,
    "cost_usd": 0.00000
  }
}
```

---

## 2. Telegram Webhook Endpoint

### `POST /telegram/webhook`
Receives inbound JSON updates forwarded by Telegram Bot API webhooks and responds asynchronously to language academy students.

#### Request Body
* Standard Telegram `Update` object containing `message.text` and `message.chat.id`.

#### Response
* `200 OK` with `{ "ok": true }`.

---

## 3. Metrics & Telemetry Endpoint (Admin Restricted)

### `GET /metrics`
Returns aggregated operational metrics, token consumption, and cost telemetry. Requires Administrator Key authentication.

#### Request Headers
* `X-Admin-Key: string` (Required: Matches server `ADMIN_API_KEY`)

#### Response Body Schema
```json
{
  "total_queries_processed": 340,
  "resolved_by_cache": 120,
  "resolved_by_rag": 185,
  "escalated_to_human": 35,
  "escalation_rate_pct": 10.29,
  "total_tokens_consumed": {
    "prompt_tokens": 142050,
    "completion_tokens": 28400,
    "total": 170450
  },
  "estimated_total_cost_usd": 0.0465,
  "average_latency_ms": 624.8,
  "channel_breakdown": {
    "web": 210,
    "telegram": 110,
    "webhook": 20
  }
}
```

---

## 4. Human Escalation & Live Advisor Endpoints

### `POST /escalations/start`
Registers a student seeking live human assistance, creating an escalated session.

#### Request Body Schema
```json
{
  "full_name": "Carlos Rodríguez",
  "national_id": "1020491823",
  "channel": "web",
  "initial_inquiry": "Need debt refinancing for German B1 course."
}
```

#### Response Body Schema
```json
{
  "session_id": "CarlosRodriguez_1823",
  "status": "WAITING",
  "message": "Your escalation ticket has been created. An academic advisor will connect shortly."
}
```

### `GET /escalations/sessions`
Returns active and waiting escalation sessions for staff. Requires `X-Admin-Key`.

### `WebSocket /ws/chat/{session_id}`
Establishes a bi-directional WebSocket connection between student and advisor for real-time consultation.
