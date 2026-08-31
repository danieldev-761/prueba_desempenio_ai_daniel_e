# Technical Documentation - Phase 1: Environment Setup, Configuration & Knowledge Base

## 1. Overview & Objectives
Phase 1 establishes the foundational infrastructure, dependency contracts, configuration management, and the official business knowledge base for the **Colombian Language Academy Intelligent Assistant**.

The primary objectives achieved in this phase include:
1. Setting up the monorepo directory layout for backend, frontend, and persistent data layers.
2. Programmatically authoring and generating the 3 official business knowledge base markdown documents in Spanish covering schedules, pricing in COP, CEFR levels, registration steps, certifications, and modalities.
3. Defining the Python backend dependency manifest with pinned version ranges.
4. Implementing environment variable templates (`.env.example`) with zero hardcoded credentials.
5. Centralizing configuration management with Pydantic `BaseSettings` supporting dynamic CORS parsing and multi-provider selection.

---

## 2. Directory Architecture & Layout
```text
.
├── backend/
│   ├── app/
│   │   ├── api/v1/endpoints/  # API routers for chat, telegram, metrics, escalations
│   │   ├── core/              # Settings, security, prompt engineering
│   │   ├── db/                # Async database engine and session factory
│   │   ├── models/            # SQLAlchemy relational models
│   │   ├── schemas/           # Pydantic v2 DTO request/response contracts
│   │   └── services/          # LangGraph orchestration, vector store, cache, LLM factory
│   ├── data/
│   │   ├── raw/               # Official generated markdown business documents
│   │   └── chroma_db/         # ChromaDB vector store directory
│   ├── scripts/               # Ingestion, synthetic data generation, telegram worker
│   ├── tests/                 # Unit and integration test suites
│   ├── .env.example           # Environment template with zero live credentials
│   └── requirements.txt       # Production and test Python dependencies
├── frontend/
│   └── .env.example           # Client-side API URL template
├── docs/                      # Architectural specifications and standards
├── documentation/
│   ├── changelog/             # Daily audit trails
│   └── tech-doc-f1.md         # Phase 1 technical deliverable report
└── .gitignore                 # Exclusion rules for local agent configs and artifacts
```

---

## 3. Business Knowledge Base Specification
The official knowledge base for the Colombian Language Academy is programmatically generated via `backend/scripts/generate_academy_data.py` into `backend/data/raw/`:

| Document | Character Count | Core Topics Covered |
| :--- | :--- | :--- |
| `cursos_y_modalidades.md` | 6,852 chars | English, French, German, Italian, Portuguese; CEFR levels (A1 to C1); 100% Virtual, Sedes Bogotá (Chapinero, Calle 100) & Medellín (El Poblado), Hybrid; Daily shift hours in COT (GMT-5); Free Placement Test structure. |
| `precios_y_metodos_de_pago.md` | 5,284 chars | Intensive module ($650,000 COP), Saturday regular ($520,000 COP), Teens ($580,000 COP), Private 1-on-1 ($75,000 COP/hr); Annual registration fee ($80,000 COP); Payment via PSE, Bancolombia QR/transfer, Nequi, Credit Cards; 10% early-bird discount; Refund policies. |
| `inscripciones_y_certificaciones.md` | 6,456 chars | 4-step registration procedure; Required IDs (Cédula, TI, Pasaporte); Official CEFR completion diplomas with QR verification; International exam preparation (IELTS, TOEFL, Cambridge, DELF, Goethe); Human escalation matrix. |

---

## 4. Configuration & Security Management
Application settings are validated via `backend/app/core/config.py` using `pydantic-settings`:
* **Agnostic LLM Provider:** Configurable between `openai` and `gemini`.
* **Zero Hardcoded Secrets:** Default values for secret keys are empty strings (`""`), requiring `.env` ingestion.
* **Vector Store Persistence:** Configured path `./data/chroma_db` with distinct collections `academy_docs` and `semantic_cache`.
* **Database URL:** Asynchronous SQLite connection string (`sqlite+aiosqlite:///./data/academy.db`).
* **CORS Flexibility:** Validator parsing JSON strings or comma-separated lists of origins with secure defaults.

---

## 5. Verification & Compliance
* **Data Generator Execution:** Executed `python3 backend/scripts/generate_academy_data.py` successfully. All 3 files generated and verified under `backend/data/raw/`.
* **Standards Adherence:** Strict compliance with `docs/RULES.md` and `docs/business_doc.md`.
