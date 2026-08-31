# Development Standards & Coding Rules (RULES.md)
## Project: Colombian Language Academy Intelligent Assistant (RAG Pipeline)

---

## 1. Code Standards & Typing
* **Language & Syntax:** Python 3.11+. Standard PEP 8 conventions strictly enforced.
* **Type Hinting:** Mandatory type annotations across all function signatures, parameters, and return types.
* **Async by Default:** All FastAPI controllers, database I/O operations, and LLM calls must use `async`/`await`.
* **Package & Dependency Management:** `uv` is the official package and project manager for the Python backend (`uv add <package>`, `uv sync`, `uv run`). `pnpm` is the official and exclusive package manager for the React frontend (`pnpm install`, `pnpm dev`, `pnpm build`).
* **Single Responsibility:** Each file must have a single clear domain responsibility. Business logic strictly resides in `services/`, never inside controller endpoints.

---

## 2. Zero-Hallucination & Prompt Guardrails
* **Closed-World Assumption:** The system prompt must enforce answering exclusively from supplied retrieved chunks.
* **Strict Refusal:** If context is insufficient or missing, the LLM must return the designated fallback token `[[ESCALATE]]` rather than extrapolating or guessing.
* **Deterministic Temperature:** Hardcoded to `0.0` to maximize determinism and factual consistency.
* **Bilingual Flexibility:** The assistant answers queries in the language the student used (Spanish or English), while drawing grounding facts from the academy documents.

---

## 3. Security & Environment Configuration
* **No Hardcoded Secrets:** API keys, tokens, and database paths must only be read from `backend/app/core/config.py` using `pydantic-settings`.
* **Safe Defaults:** `.env.example` must contain placeholder keys (`your_openai_api_key_here`) and must never expose live secrets.
* **CORS Policy:** FastAPI CORS middleware configured to allow communication from local dev and frontend deployment origins.

---

## 4. Deliverable Requirements & Governance Rules
* **Language Consistency:** All markdown docs, docstrings, system prompts, API contracts, and commit messages must be in **English**. Customer-facing responses serve the student's language (Spanish/English).
* **Zero Critical Dependencies:** The solution must run completely offline/local without mandatory cloud Redis or PostgreSQL servers.
* **Verifiable Execution:** The backend must spin up seamlessly using `docker-compose up` or `uv run uvicorn app.main:app` (alternatively `pip install -r requirements.txt`).
* **Document Attention & Change Notification:** Always strictly follow the specifications in `docs/` (`ARCHITECTURE.md`, `ADR.md`, `API.md`, `DATABASE.md`, `TASKS.md`, `RULES.md`, `business_doc.md`). Any deviation, extra files, or architectural additions must be explicitly reported to the user and documented in the ADR/changelog.
* **Daily Changelog Rule:** Record every single modification in `documentation/changelog/[DD]-[MM]-[YYYY]-changelog.md` following the format:
  `- [Day]-[DD/MM/YYYY]-[HH:MM] : [Change Description]`
* **Git Auto-Commit:** Stage and commit all changes immediately using conventional commit format (`feat:`, `fix:`, `docs:`, `chore:`, `refactor:`, etc.).
* **Phase-by-Phase Technical Documentation:** Every completed phase must conclude with an exhaustive technical documentation report authored under `documentation/tech-doc-f[N].md` covering architecture, contracts, design patterns, and test results.
