# ======================================================================
# Multi-stage Production Dockerfile: Unified Fullstack Container
# Serves: React Frontend + FastAPI Backend + WebSockets + Telegram Bot
# ======================================================================

# ----------------------------------------------------------------------
# Stage 1: Frontend Build (Node.js + pnpm)
# ----------------------------------------------------------------------
FROM node:20-slim AS frontend-builder
WORKDIR /frontend

# Enable corepack for pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy package descriptors and install dependencies
COPY frontend/package.json frontend/pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy frontend source code and compile production bundle
COPY frontend/ ./
RUN pnpm build

# ----------------------------------------------------------------------
# Stage 2: Backend Dependencies (Python + uv)
# ----------------------------------------------------------------------
FROM python:3.11-slim AS backend-builder
WORKDIR /build

COPY --from=ghcr.io/astral-sh/uv:latest /uv /bin/uv
COPY backend/requirements.txt ./requirements.txt

ENV VIRTUAL_ENV="/opt/venv"
ENV PATH="/opt/venv/bin:$PATH"
RUN uv venv /opt/venv && \
    uv pip install --no-cache --python /opt/venv/bin/python -r requirements.txt

# ----------------------------------------------------------------------
# Stage 3: Final Production Runtime Container
# ----------------------------------------------------------------------
FROM python:3.11-slim AS runtime

# Runtime system utilities (curl for container healthcheck)
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Create unprivileged system group and user
RUN groupadd -g 1001 appgroup && \
    useradd -u 1001 -g appgroup -s /bin/bash -m appuser

WORKDIR /app

# Copy Python virtual environment from Stage 2
COPY --from=backend-builder /opt/venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

# Copy backend application source code, operational scripts, and raw markdown knowledge base
COPY --chown=appuser:appgroup backend/app /app/app
COPY --chown=appuser:appgroup backend/scripts /app/scripts
COPY --chown=appuser:appgroup backend/data/raw /app/data/raw

# Copy compiled React frontend bundle from Stage 1 into /app/dist
COPY --chown=appuser:appgroup --from=frontend-builder /frontend/dist /app/dist

# Prepare persistent data directory with proper ownership
RUN mkdir -p /app/data/chroma_db && chown -R appuser:appgroup /app/data /app

# Ensure operational scripts have execution rights
RUN chmod +x /app/scripts/run.sh || true

# Switch to unprivileged non-root user
USER appuser

# Expose default HTTP service port
EXPOSE 8000

# Environment defaults
ENV PORT=8000 \
    HOST=0.0.0.0 \
    PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    CHROMA_PERSIST_DIR=/app/data/chroma_db \
    DATABASE_URL=sqlite+aiosqlite:////app/data/academy.db

# Health check probing the /health endpoint
HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
    CMD curl -f http://localhost:8000/health || exit 1

# Default container entrypoint (launches Telegram worker in background if token set + FastAPI)
CMD ["/bin/bash", "/app/scripts/run.sh"]
