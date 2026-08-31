# Technical Documentation - Phase 3: LangGraph Orchestration & Prompt Engineering

## 1. Overview & Objectives
Phase 3 implements the intelligent reasoning and orchestration brain of the **Colombian Language Academy Intelligent Assistant**.

Key accomplishments in this phase include:
1. **Zero-Hallucination Prompt Architecture:** (`backend/app/core/prompts.py`) defining the persona of *Asesor Académico Virtual de la Academia de Idiomas Colombiana*, strictly enforcing the Closed-World Assumption in Spanish with `[[ESCALATE]]` fallback tokens.
2. **Culturally Grounded Few-Shot Exemplars:** Comprehensive examples handling in-scope schedule/pricing queries, out-of-scope sworn legal translation requests, and high-volume corporate training requests.
3. **Deterministic State Machine (LangGraph):** (`backend/app/services/graph_workflow.py`) structured as a compiled Directed Acyclic Graph (DAG) managing semantic cache lookups, vector retrievals, relevance scoring, LLM generation, grounding verification, and escalation routing.
4. **Token Telemetry & Cost Accounting:** Real-time token extraction and cost estimation calculating input/output token usage.

---

## 2. Prompt Engineering & Guardrail Design

### 2.1 Persona & Role Definition
The virtual assistant acts as a senior academic advisor for the academy:
* **Tone:** Professional, welcoming, concise, and culturally warm (*"con mucho gusto"*).
* **Language:** 100% Spanish for end-user conversational interactions.
* **Closed-World Constraint:** Grounded exclusively on context chunks from `cursos_y_modalidades.md`, `precios_y_metodos_de_pago.md`, and `inscripciones_y_certificaciones.md`.
* **Escalation Protocol:** The model must emit `[[ESCALATE]]` whenever facts are missing or an inquiry falls into out-of-scope categories.

---

## 3. LangGraph State Machine Architecture (`AcademyGraphWorkflow`)

```text
               [ Incoming User Query ]
                          │
                          ▼
                  [ check_cache ]
                     │         │
             (Hit)   │         │  (Miss)
                     ▼         ▼
                  [ END ]   [ retrieve ]
                               │
                               ▼
                       < route_relevance_gate >
                               │
               (Score >= 0.45) │  (Score < 0.45)
                               ├──────────────┐
                               ▼              ▼
                          [ generate ]   [ escalate ] ──► [ END ]
                               │
                               ▼
                      [ verify_grounding ]
                               │
            (No [[ESCALATE]])  │  ([[ESCALATE]] Present)
                               ├──────────────┐
                               ▼              ▼
                          [ finalize ]   [ escalate ] ──► [ END ]
                               │
                               ▼
                            [ END ]
```

### 3.1 `AgentState` Schema
```python
class AgentState(TypedDict):
    query: str
    session_id: str
    channel: str
    cache_hit: bool
    documents: List[Document]
    relevance_score: float
    generation: str
    status: str  # RESOLVED_BY_CACHE | RESOLVED_BY_RAG | ESCALATED_TO_HUMAN
    is_escalated: bool
    escalation_reason: Optional[str]
    sources: List[Dict[str, Any]]
    start_time: float
    latency_ms: float
    token_metrics: Dict[str, Any]
```

### 3.2 Discrete Node Functions
1. **`node_check_cache`**: Queries `SemanticCacheService`. If a hit occurs, bypasses LLM inference, sets `status="RESOLVED_BY_CACHE"`, and terminates.
2. **`node_retrieve`**: Performs similarity search against `academy_docs`.
3. **`node_generate`**: Injects formatted chunks into `SYSTEM_PROMPT` along with few-shot exemplars and the student's query. Calls `ChatOpenAI` or `ChatGoogleGenerativeAI` at `temperature=0.0`.
4. **`node_verify_grounding`**: Scans LLM output for `[[ESCALATE]]`. Strips the token, populates the escalation reason, and routes to human handover.
5. **`node_escalate`**: Sets `ESCALATION_HUMAN_MESSAGE`, marks `is_escalated=True`, and resets citations.
6. **`node_cache_and_finalize`**: Stores successful non-escalated answers in `semantic_cache`.

---

## 4. Verification & Compliance
* **Zero Legacy References:** Verified that no old project identifiers exist in prompts, workflow nodes, or state structures.
* **Deterministic Behavior:** Fully reproducible state transitions verified via LangGraph `StateGraph`.
