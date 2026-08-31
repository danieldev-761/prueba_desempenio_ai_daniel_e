import os
from typing import Optional
from langchain_core.language_models.chat_models import BaseChatModel
from langchain_core.embeddings import Embeddings
from app.core.config import settings
from app.core.logging import logger


def get_chat_model(
    provider: Optional[str] = None,
    temperature: float = 0.0,
) -> BaseChatModel:
    """
    Factory creating a chat model instance based on the specified or configured provider.
    Supports 'openai' and 'gemini'.
    """
    selected_provider = (provider or settings.LLM_PROVIDER).lower()

    if selected_provider == "gemini":
        api_key = settings.GEMINI_API_KEY or os.getenv("GEMINI_API_KEY", "")
        if not api_key:
            logger.warning("GEMINI_API_KEY is not set. Gemini chat model may fail if invoked without key.")
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
    api_key = settings.OPENAI_API_KEY or os.getenv("OPENAI_API_KEY", "")
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
        api_key = settings.GEMINI_API_KEY or os.getenv("GEMINI_API_KEY", "")
        if not api_key:
            logger.warning("GEMINI_API_KEY is not set. Gemini embeddings may fail if invoked without key.")
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
