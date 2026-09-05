from pathlib import Path
from typing import List, Union
from pydantic import Field, field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    PROJECT_NAME: str = "Colombian Language Academy Intelligent Assistant"
    VERSION: str = "1.0.0"
    API_V1_PREFIX: str = "/api/v1"
    DEBUG: bool = False

    # Server Network
    PORT: int = 8000
    HOST: str = "0.0.0.0"

    # LLM Provider Configuration (Gemini is Primary Default)
    LLM_PROVIDER: str = Field(default="gemini", description="Primary LLM provider: 'gemini' or 'openai'")

    # OpenAI Settings
    OPENAI_API_KEY: str = Field(default="", description="OpenAI API Secret Key")
    OPENAI_CHAT_MODEL: str = "gpt-4o-mini"
    OPENAI_EMBEDDING_MODEL: str = "text-embedding-3-small"

    # Google Gemini Settings (Primary Provider)
    GOOGLE_API_KEY: str = Field(default="", description="Google API Key alias")
    GEMINI_API_KEY: str = Field(default="", description="Google Gemini API Key")
    GEMINI_CHAT_MODEL: str = "gemini-3.1-flash-lite"
    GEMINI_EMBEDDING_MODEL: str = "gemini-embedding-001"

    # Groq Settings
    GROQ_API_KEY: str = Field(default="", description="Groq API Key")
    GROQ_CHAT_MODEL: str = "llama-3.1-8b-instant"

    # Vector Database & Caching
    CHROMA_PERSIST_DIR: str = str(Path(__file__).resolve().parent.parent.parent / "data" / "chroma_db")
    ACADEMY_COLLECTION_NAME: str = "academy_docs"
    CACHE_COLLECTION_NAME: str = "semantic_cache"
    CACHE_SIMILARITY_THRESHOLD: float = 0.74  # Cosine similarity >= 0.74 (Distance <= 0.26)
    RETRIEVAL_SIMILARITY_THRESHOLD: float = 0.50

    # Relational Database / Telemetry
    DATABASE_URL: str = f"sqlite+aiosqlite:///{str(Path(__file__).resolve().parent.parent.parent / 'data' / 'academy.db')}"

    # Security & Admin Access
    ADMIN_API_KEY: str = Field(default="admin123", description="Secret key required to access /metrics and admin dashboard")
    JWT_SECRET: str = Field(default="vanguard-secret-key-32-chars-long-2026", description="JWT Signing Secret Key")


    # Telegram Integration
    TELEGRAM_BOT_TOKEN: str = Field(default="", description="Telegram Bot token")
    TELEGRAM_BOT_NAME: str = Field(default="Vanguard_academy_bot", description="Telegram Bot Username")

    # CORS
    CORS_ORIGINS: Union[List[str], str] = ["http://localhost:5173", "http://127.0.0.1:5173", "http://localhost:3000"]

    @field_validator("CORS_ORIGINS", mode="before")
    @classmethod
    def assemble_cors_origins(cls, v: Union[str, List[str]]) -> List[str]:
        if isinstance(v, str) and not v.startswith("["):
            return [i.strip() for i in v.split(",")]
        elif isinstance(v, list):
            return v
        import json
        try:
            return json.loads(v)
        except Exception:
            return ["*"]

    model_config = SettingsConfigDict(
        env_file=[
            str(Path(__file__).resolve().parent.parent.parent / ".env"),
            str(Path(__file__).resolve().parent.parent.parent.parent / ".env"),
            ".env",
        ],
        env_file_encoding="utf-8",
        extra="ignore",
        case_sensitive=True,
    )


settings = Settings()
