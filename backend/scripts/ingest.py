import os
import re
import sys
from pathlib import Path
from typing import List, Dict, Any

# Ensure backend root directory is in sys.path for direct script execution
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from langchain_core.documents import Document
from langchain_text_splitters import RecursiveCharacterTextSplitter
from app.core.logging import logger
from app.services.vector_store import VectorStoreService

DATA_RAW_DIR = Path(__file__).resolve().parent.parent / "data" / "raw"
SEED_RAW_DIR = Path(__file__).resolve().parent.parent / "seed_data" / "raw"


def get_raw_dir() -> Path:
    """Returns data/raw if present and populated, otherwise falls back to seed_data/raw."""
    if DATA_RAW_DIR.exists() and list(DATA_RAW_DIR.glob("*.md")):
        return DATA_RAW_DIR
    if SEED_RAW_DIR.exists() and list(SEED_RAW_DIR.glob("*.md")):
        return SEED_RAW_DIR
    return DATA_RAW_DIR


def extract_sections_from_markdown(content: str, filename: str) -> List[Dict[str, Any]]:
    """
    Split markdown text by headers (# or ##) to preserve logical section hierarchy in metadata.
    """
    lines = content.splitlines()
    sections = []
    current_section = "General Overview"
    current_lines = []

    for line in lines:
        if line.startswith("# ") or line.startswith("## "):
            if current_lines:
                sections.append({
                    "section": current_section,
                    "text": "\n".join(current_lines).strip(),
                })
                current_lines = []
            current_section = re.sub(r"^[#\s]+", "", line).strip()
        current_lines.append(line)

    if current_lines:
        sections.append({
            "section": current_section,
            "text": "\n".join(current_lines).strip(),
        })

    return sections


def run_ingestion(reset: bool = True) -> int:
    """
    Reads all markdown files from backend/data/raw, chunks them using RecursiveCharacterTextSplitter,
    and indexes them into ChromaDB vector store.
    """
    raw_dir = get_raw_dir()
    if not raw_dir.exists():
        logger.error(f"Raw data directory does not exist: {raw_dir}")
        return 0

    markdown_files = list(raw_dir.glob("*.md"))
    if not markdown_files:
        logger.warning(f"No markdown documents found in {raw_dir}")
        return 0

    splitter = RecursiveCharacterTextSplitter(
        chunk_size=500,
        chunk_overlap=100,
        separators=["\n\n", "\n", "### ", "## ", "# ", ". ", " ", ""],
    )

    documents: List[Document] = []
    global_chunk_idx = 0

    for file_path in sorted(markdown_files):
        filename = file_path.name
        content = file_path.read_text(encoding="utf-8")
        sections = extract_sections_from_markdown(content, filename)

        for sec in sections:
            section_title = sec["section"]
            section_text = sec["text"]
            if not section_text.strip():
                continue

            chunks = splitter.split_text(section_text)
            for idx, chunk_text in enumerate(chunks):
                global_chunk_idx += 1
                chunk_id = f"{file_path.stem}_chunk_{idx + 1:03d}"
                doc = Document(
                    page_content=chunk_text,
                    metadata={
                        "source_file": filename,
                        "section": section_title,
                        "chunk_id": chunk_id,
                        "char_count": len(chunk_text),
                    },
                )
                documents.append(doc)

    logger.info(f"Prepared {len(documents)} document chunks across {len(markdown_files)} raw files.")

    vector_service = VectorStoreService()
    if reset:
        vector_service.reset_collection()

    vector_service.add_documents(documents)
    total_indexed = vector_service.get_collection_count()
    logger.info(f"Ingestion completed successfully! Total indexed chunks in ChromaDB: {total_indexed}")
    return total_indexed


if __name__ == "__main__":
    import sys
    count = run_ingestion(reset=True)
    print(f"\n[INGESTION FINISHED] Total indexed chunks: {count}")
    sys.exit(0 if count > 0 else 1)
