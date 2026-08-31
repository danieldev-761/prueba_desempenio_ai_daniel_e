#!/usr/bin/env bash
set -e

echo "================================================================"
echo " Starting Colombian Language Academy Assistant Container"
echo "================================================================"

# Verify data directory existence
mkdir -p /app/data

# Run Vector Ingestion on cold boot if ChromaDB collection is empty or uninitialized
if [ ! -d "/app/data/chroma_db" ] || [ -z "$(ls -A /app/data/chroma_db 2>/dev/null)" ]; then
    echo "[*] Cold boot detected: Initializing knowledge base embeddings..."
    python /app/scripts/ingest.py || echo "[WARN] Ingestion completed with non-fatal status."
else
    echo "[✓] Persistent ChromaDB vector index found at /app/data/chroma_db."
fi

# Launch Uvicorn production server
echo "[*] Launching FastAPI production server on http://0.0.0.0:8000..."
exec uvicorn app.main:app --host 0.0.0.0 --port "${PORT:-8000}"
