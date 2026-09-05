# Technical Documentation - Phase 10: Production Hardening, Persistent Storage Architecture, Zero-Secret Compliance & UI Theme Integrity

## 1. Executive Summary & Context
During deployment and testing on the cloud production environment (Railway PaaS), three critical operational challenges were identified and permanently resolved:
1. **Database and Vector Store Reset on Redeployments:** Container restarts recreated the filesystem in an ephemeral state, erasing SQLite telemetry (`academy.db`) and requiring cold re-ingestion of ChromaDB vectors.
2. **Missing Vanguard Brand Theme in Production:** Vite + Tailwind CSS tree-shaking purged custom brand classes (`bg-brand-lime`, `text-brand-lime`, `bg-brand-dark`, `font-display`) because they were omitted from the formal theme definition, resulting in a colorless UI.
3. **HTTP Cache Stagnation & Mobile Layout Overflow:** Browsers retained stale CSS bundle hashes, and the navbar Staff Portal button superimposed over container borders on smaller viewports.

---

## 2. Architectural Implementations

### 2.1 Resilient Persistent Volume Architecture (`/app/data`)
* **Problem:** Mounting a Railway Volume directly to `/app/data` placed a blank volume over the container's directory, masking the pre-packaged knowledge base (`backend/data/raw/*.md`) and breaking cold-boot ingestion.
* **Solution:**
  1. **Dual-Layer Image Baking:** In `Dockerfile` and `backend/Dockerfile`, raw markdown documents are copied to both `/app/data/raw` and a protected seed path `/app/seed_data/raw`.
  2. **Automated Seed Hydration (`run.sh`):**
     ```bash
     mkdir -p /app/data/raw /app/data/chroma_db
     if [ -d "/app/seed_data/raw" ] && [ -z "$(ls -A /app/data/raw 2>/dev/null)" ]; then
         echo "[*] Populating initial knowledge base documents into persistent volume..."
         cp -rn /app/seed_data/raw/* /app/data/raw/ 2>/dev/null || true
     fi
     ```
  3. **Tolerant Ingestion Script (`ingest.py`):** `get_raw_dir()` inspects `/app/data/raw` and automatically falls back to `/app/seed_data/raw` if the volume is unpopulated.
* **Outcome:** SQLite database (`academy.db`) and ChromaDB collections (`chroma_db`) survive all cloud redeployments without administrative intervention.

### 2.2 Complete Vanguard Palette in Tailwind Configuration
* **Problem:** Classes such as `bg-brand-lime` (`#bdf052`), `bg-brand-dark` (`#070515`), and `font-display` (`Syne`) were styled in JSX without being declared in `frontend/tailwind.config.js`. During `vite build`, Tailwind's purge engine stripped them as unknown classes.
* **Solution:**
  * Updated `frontend/tailwind.config.js`:
    ```javascript
    colors: {
      brand: {
        lime: '#bdf052',
        dark: '#070515',
        navy: '#0c0926',
        blue: '#38bdf8',
        yellow: '#facc15',
        purple: '#c084fc',
        orange: '#fb923c',
        // ...
      }
    },
    fontFamily: {
      sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      display: ['Syne', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
    }
    ```
  * Injected Google Font `Syne` into `frontend/index.html` and configured native dark background `#070515` on `body`.
  * Configured dark scrollbar with `#1e1948` track and `#bdf052` thumb hover in `frontend/src/index.css`.
* **Outcome:** 100% visual parity between local development and cloud production.

### 2.3 Anti-Cache Headers on Single Page Application Delivery
* **Problem:** Users experienced stale bundle hashes due to intermediate browser caching of `index.html`.
* **Solution:** In `backend/app/main.py`, the SPA static fallback handler injects:
  * `Cache-Control: no-cache, no-store, must-revalidate`
  * `Pragma: no-cache`
  * `Expires: 0`
* **Outcome:** Any new bundle hashes compiled in `dist/assets/` are immediately fetched on page reload.

### 2.4 Secure Admin Password Synchronization (`ADMIN_FORCE_PASSWORD_SYNC`)
* **Problem:** In persistent database setups, changing `ADMIN_DEFAULT_PASSWORD` in environment variables did not update the already-seeded hash in `admin_users`.
* **Solution:** In `backend/app/db/session.py`, an explicit flag `ADMIN_FORCE_PASSWORD_SYNC` (default `False`) allows administrators to re-hash and sync credentials securely from Railway environment variables without exposing plaintext credentials in code.

---

## 3. Verification & Automated Test Results
* **Test Suite:** `backend/tests/` (unit and integration tests).
* **Execution Command:** `backend/.venv/Scripts/python -m pytest backend/tests`
* **Results:** **44 passed, 0 failures, 22 warnings** (Pydantic V2 migration notices).
* **Coverage:**
  * Dynamic LLM key verification & routing: PASS
  * JWT authentication & password hashing: PASS
  * RAG zero-hallucination refusal & confidence scoring: PASS
  * Semantic cache cosine similarity retrieval: PASS
  * Telegram worker supervisor polling: PASS
