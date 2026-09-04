import os
from typing import Optional
from langchain_core.language_models.chat_models import BaseChatModel
from langchain_core.embeddings import Embeddings
from app.core.config import settings
from app.core.logging import logger


# In-memory runtime overrides (can be set by admin panel)
RUNTIME_OVERRIDES = {
    "provider": None,
    "gemini_api_key": None,
    "groq_api_key": None,
    "openai_api_key": None,
}


def set_runtime_llm_config(
    provider: Optional[str] = None,
    gemini_api_key: Optional[str] = None,
    groq_api_key: Optional[str] = None,
    openai_api_key: Optional[str] = None,
) -> None:
    if provider:
        RUNTIME_OVERRIDES["provider"] = provider.lower()
    if gemini_api_key is not None:
        RUNTIME_OVERRIDES["gemini_api_key"] = gemini_api_key
    if groq_api_key is not None:
        RUNTIME_OVERRIDES["groq_api_key"] = groq_api_key
    if openai_api_key is not None:
        RUNTIME_OVERRIDES["openai_api_key"] = openai_api_key
    logger.info(f"LLM factory runtime overrides updated: provider={RUNTIME_OVERRIDES['provider']}")


def get_active_provider() -> str:
    return RUNTIME_OVERRIDES["provider"] or settings.LLM_PROVIDER.lower()


def get_chat_model(
    provider: Optional[str] = None,
    temperature: float = 0.0,
    api_key_override: Optional[str] = None,
) -> BaseChatModel:
    """
    Factory creating a chat model instance based on the specified or configured provider.
    Supports 'gemini', 'groq', and 'openai'.
    """
    selected_provider = (provider or get_active_provider()).lower()

    if selected_provider == "groq":
        api_key = (
            api_key_override
            or RUNTIME_OVERRIDES["groq_api_key"]
            or settings.GROQ_API_KEY
            or os.getenv("GROQ_API_KEY", "")
        )
        if not api_key:
            raise ValueError(
                "La clave GROQ_API_KEY no está configurada.\n"
                "Por favor configúrala desde el panel de administración o en backend/.env."
            )
        try:
            from langchain_groq import ChatGroq
            return ChatGroq(
                model=settings.GROQ_CHAT_MODEL or "llama-3.3-70b-versatile",
                groq_api_key=api_key,
                temperature=temperature,
            )
        except Exception as e:
            logger.error(f"Failed to initialize ChatGroq: {e}")
            raise

    if selected_provider == "gemini":
        api_key = (
            api_key_override
            or RUNTIME_OVERRIDES["gemini_api_key"]
            or settings.GEMINI_API_KEY
            or settings.GOOGLE_API_KEY
            or os.getenv("GEMINI_API_KEY", "")
            or os.getenv("GOOGLE_API_KEY", "")
        )
        if not api_key:
            raise ValueError(
                "La clave GEMINI_API_KEY o GOOGLE_API_KEY no está configurada.\n"
                "Por favor configúrala desde el panel de administración o en backend/.env."
            )
        try:
            from langchain_google_genai import ChatGoogleGenerativeAI
            return ChatGoogleGenerativeAI(
                model=settings.GEMINI_CHAT_MODEL,
                google_api_key=api_key,
                temperature=temperature,
            )
        except Exception as e:
            logger.error(f"Failed to initialize ChatGoogleGenerativeAI: {e}")
            raise

    # Default to OpenAI
    api_key = (
        api_key_override
        or RUNTIME_OVERRIDES["openai_api_key"]
        or settings.OPENAI_API_KEY
        or os.getenv("OPENAI_API_KEY", "")
    )
    if not api_key:
        logger.warning("OPENAI_API_KEY is not set. OpenAI chat model may fail if invoked without key.")
    try:
        from langchain_openai import ChatOpenAI
        return ChatOpenAI(
            model=settings.OPENAI_CHAT_MODEL,
            api_key=api_key,
            temperature=temperature,
        )
    except Exception as e:
        logger.error(f"Failed to initialize ChatOpenAI: {e}")
        raise



def get_embeddings_model(
    provider: Optional[str] = None,
) -> Embeddings:
    """
    Factory creating an embeddings model instance based on the specified or configured provider.
    Supports 'openai' and 'gemini'.
    """
    selected_provider = (provider or settings.LLM_PROVIDER).lower()

    if selected_provider == "gemini":
        api_key = (
            settings.GEMINI_API_KEY
            or settings.GOOGLE_API_KEY
            or os.getenv("GEMINI_API_KEY", "")
            or os.getenv("GOOGLE_API_KEY", "")
        )
        if not api_key:
            raise ValueError(
                "La clave GEMINI_API_KEY o GOOGLE_API_KEY no está configurada o está vacía en backend/.env.\n"
                "Por favor edita tu archivo backend/.env y define:\n"
                "GEMINI_API_KEY=AIzaSy..."
            )
        try:
            from langchain_google_genai import GoogleGenerativeAIEmbeddings
            return GoogleGenerativeAIEmbeddings(
                model=settings.GEMINI_EMBEDDING_MODEL,
                google_api_key=api_key,
            )
        except Exception as e:
            logger.error(f"Failed to initialize GoogleGenerativeAIEmbeddings: {e}")
            raise

    # Default to OpenAI
    api_key = settings.OPENAI_API_KEY or os.getenv("OPENAI_API_KEY", "")
    if not api_key:
        logger.warning("OPENAI_API_KEY is not set. OpenAI embeddings may fail if invoked without key.")
    try:
        from langchain_openai import OpenAIEmbeddings
        return OpenAIEmbeddings(
            model=settings.OPENAI_EMBEDDING_MODEL,
            api_key=api_key,
        )
    except Exception as e:
        logger.error(f"Failed to initialize OpenAIEmbeddings: {e}")
        raise
