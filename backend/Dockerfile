# Multi-stage production Dockerfile for Colombian Language Academy Assistant Backend
# Build Stage: Dependency Resolution & Environment Construction
FROM python:3.11-slim AS builder

WORKDIR /build

# Install uv for fast dependency resolution
COPY --from=ghcr.io/astral-sh/uv:latest /uv /bin/uv

# Copy dependency specifications
COPY requirements.txt ./

# Install dependencies into virtual environment
ENV VIRTUAL_ENV="/opt/venv"
ENV PATH="/opt/venv/bin:$PATH"
RUN uv venv /opt/venv && \
    uv pip install --no-cache --python /opt/venv/bin/python -r requirements.txt

# ----------------------------------------------------------------------
# Final Runtime Stage: Secure, Non-Root Container
# ----------------------------------------------------------------------
FROM python:3.11-slim AS runtime

# System runtime dependencies (curl for healthchecks)
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Create unprivileged system group and user
RUN groupadd -g 1001 appgroup && \
    useradd -u 1001 -g appgroup -s /bin/bash -m appuser

WORKDIR /app

# Copy virtual environment from builder stage
COPY --from=builder /opt/venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

# Copy application source code, scripts and raw knowledge base
COPY --chown=appuser:appgroup app /app/app
COPY --chown=appuser:appgroup scripts /app/scripts
COPY --chown=appuser:appgroup data/raw /app/data/raw

# Prepare persistent data directory with proper ownership
RUN mkdir -p /app/data/chroma_db && chown -R appuser:appgroup /app/data /app

# Ensure shell scripts have execution rights
RUN chmod +x /app/scripts/run.sh || true

# Switch to unprivileged non-root user
USER appuser

# Expose FastAPI service port
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

# Default container entrypoint
CMD ["/bin/bash", "/app/scripts/run.sh"]
