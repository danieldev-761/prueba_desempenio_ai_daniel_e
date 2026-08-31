# Technical Documentation - Phase 6: Containerization & Cloud Deployment

## 1. Overview & Objectives
Phase 6 delivers the production containerization, reverse proxying, and multi-service orchestration architecture for the **Colombian Language Academy Intelligent Assistant**.

Key accomplishments in this phase include:
1. **Hardened Multi-Stage Backend Container:** (`backend/Dockerfile`) utilizing Astral `uv` for sub-minute dependency installation, compiling into an unprivileged non-root runtime environment (`appuser:appgroup`, UID 1001).
2. **Cold Boot Ingestion Daemon:** (`backend/scripts/run.sh`) dynamically detecting uninitialized vector collections and triggering idempotent Markdown ingestion before binding Uvicorn.
3. **Optimized Frontend Alpine Container:** (`frontend/Dockerfile`) compiling React assets via Vite in Node 20 and serving through lightweight Nginx Alpine.
4. **Nginx Reverse Proxy with WebSocket Upgrades:** (`frontend/nginx.conf`) routing `/api/*` and `/health` to the backend service while preserving persistent WebSocket handshakes for real-time live advisor chat.
5. **Multi-Container Orchestration:** (`docker-compose.yml`) coordinating frontend and backend containers with healthchecks and persistent local storage volumes (`academy_data`).

---

## 2. Container Specifications

### 2.1 Backend Container Architecture
* **Base Image:** `python:3.11-slim`
* **Builder Image:** Astral `uv` binary (`ghcr.io/astral-sh/uv:latest`) resolving dependencies into `/opt/venv`.
* **Security:** Runs as non-root `appuser` (UID 1001) with restricted filesystem permissions.
* **Cold Boot Script (`backend/scripts/run.sh`):**
  1. Inspects `/app/data/chroma_db`.
  2. If empty or absent, executes `python /app/scripts/ingest.py`.
  3. Launches FastAPI with Uvicorn on port 8000.
* **Healthcheck:** `curl -f http://localhost:8000/health || exit 1`.

### 2.2 Frontend Container Architecture
* **Base Image:** `node:20-alpine` (builder) and `nginx:alpine` (runtime).
* **Nginx Features:**
  * HTTP/1.1 reverse proxying to `http://backend:8000/api/`.
  * WebSocket tunneling (`Upgrade` / `Connection "upgrade"`).
  * Gzip compression for CSS, JS, and JSON assets.
  * SPA client fallback (`try_files $uri $uri/ /index.html`).

---

## 3. Orchestration & Local Deployment

### 3.1 Docker Compose Services
```yaml
services:
  backend:
    build: ./backend
    ports: ["8000:8000"]
    volumes: [academy_data:/app/data]
    healthcheck: curl http://localhost:8000/health
  frontend:
    build: ./frontend
    ports: ["3000:80"]
    depends_on:
      backend:
        condition: service_healthy
```

### 3.2 Running the Stack Locally
```bash
docker compose up --build -d
```
* **Frontend Web App:** `http://localhost:3000`
* **Backend REST Docs:** `http://localhost:8000/api/v1/docs`
* **Healthcheck:** `http://localhost:8000/health`
