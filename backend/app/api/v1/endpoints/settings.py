import os
from typing import Optional, Dict, Any
from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel, Field
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select

from app.db.session import get_db_session
from app.models.admin_user import AdminUser, SystemSetting
from app.api.v1.endpoints.auth import get_current_admin
from app.services.llm_factory import set_runtime_llm_config, get_active_provider
from app.core.config import settings
from app.core.logging import logger

router = APIRouter(prefix="/settings", tags=["System Settings"])


class ProviderSettingsResponse(BaseModel):
    active_provider: str
    available_providers: list[str] = ["gemini", "groq", "openai"]
    providers: Dict[str, Dict[str, Any]]


class UpdateProviderSettingsRequest(BaseModel):
    active_provider: Optional[str] = Field(None, description="gemini, groq, or openai")
    gemini_api_key: Optional[str] = Field(None, description="Google Gemini API Key")
    groq_api_key: Optional[str] = Field(None, description="Groq API Key")
    openai_api_key: Optional[str] = Field(None, description="OpenAI API Key")


def mask_key(key: Optional[str]) -> str:
    if not key or len(key) < 8:
        return "••••••••" if key else ""
    return f"{key[:4]}••••••••{key[-4:]}"


async def verify_llm_provider(provider: str, api_key: str) -> tuple[bool, str]:
    """
    Performs a lightweight 1-token probe to verify whether the API key is active and responding.
    """
    if not api_key:
        return False, "Sin clave configurada"
    try:
        from langchain_core.messages import HumanMessage
        prov = provider.lower().strip()
        if prov == "gemini":
            from langchain_google_genai import ChatGoogleGenerativeAI
            m = ChatGoogleGenerativeAI(
                model=settings.GEMINI_CHAT_MODEL,
                google_api_key=api_key,
                temperature=0.0,
                max_output_tokens=2,
            )
            await m.ainvoke([HumanMessage(content="1")])
            return True, "Conexión exitosa y verificada con Google Gemini"
        elif prov == "groq":
            import httpx
            from langchain_groq import ChatGroq

            # 1. Query Groq models endpoint dynamically to detect active models
            detected_models = []
            try:
                async with httpx.AsyncClient(timeout=5.0) as client:
                    resp = await client.get(
                        "https://api.groq.com/openai/v1/models",
                        headers={"Authorization": f"Bearer {api_key}"}
                    )
                    if resp.status_code == 200:
                        data = resp.json().get("data", [])
                        # Filter for active chat/generation models (ignore whisper/audio/embeddings)
                        detected_models = [
                            m.get("id") for m in data 
                            if m.get("id") and not any(k in m.get("id").lower() for k in ["whisper", "guard", "embed"])
                        ]
            except Exception as e:
                logger.warning(f"Could not fetch Groq models dynamically: {e}")

            # 2. Preferred models ordered by Flash-Lite equivalency (lightweight, ultra-fast 560 t/s)
            priority_candidates = [
                "llama-3.1-8b-instant",       # Best Flash-Lite equivalent: 560 t/s, 131k context
                "llama-3.3-70b-versatile",    # 280 t/s, versatile reasoning
                "openai/gpt-oss-120b",
                "openai/gpt-oss-20b",
                settings.GROQ_CHAT_MODEL,
            ]

            # Build candidate list: prioritize matching detected models, then remaining detected, then fallbacks
            models_to_try = []
            for candidate in priority_candidates:
                if candidate and (not detected_models or candidate in detected_models):
                    models_to_try.append(candidate)
            
            for m_id in detected_models:
                if m_id not in models_to_try:
                    models_to_try.append(m_id)

            if not models_to_try:
                models_to_try = ["llama-3.1-8b-instant", "llama-3.3-70b-versatile"]

            models_to_try = list(dict.fromkeys(models_to_try))
            last_err = None

            for groq_model in models_to_try:
                try:
                    m = ChatGroq(
                        model=groq_model,
                        groq_api_key=api_key,
                        temperature=0.0,
                        max_tokens=2,
                    )
                    await m.ainvoke([HumanMessage(content="1")])
                    settings.GROQ_CHAT_MODEL = groq_model
                    return True, f"Conexión exitosa y verificada con Groq LPU ({groq_model})"
                except Exception as e:
                    last_err = e
                    if "model_not_found" in str(e) or "404" in str(e):
                        continue
                    raise e

            if last_err:
                raise last_err
            return True, "Conexión exitosa y verificada con Groq LPU"
        elif prov == "openai":
            from langchain_openai import ChatOpenAI
            m = ChatOpenAI(
                model=settings.OPENAI_CHAT_MODEL,
                api_key=api_key,
                temperature=0.0,
                max_tokens=2,
            )
            await m.ainvoke([HumanMessage(content="1")])
            return True, "Conexión exitosa y verificada con OpenAI"
        return False, "Proveedor no soportado"
    except Exception as e:
        err_str = str(e)
        logger.warning(f"Provider verification probe failed for {provider}: {e}")
        if "API_KEY_INVALID" in err_str or "invalid" in err_str.lower() or "401" in err_str:
            return False, "Clave de API inválida o revocada por el proveedor."
        if "429" in err_str or "quota" in err_str.lower() or "resource_exhausted" in err_str.lower():
            return False, "Cuota de API agotada (Rate Limit / Quota Exceeded)."
        return False, f"Fallo al conectar: {err_str[:75]}"


class TestProviderRequest(BaseModel):
    provider: str = Field(..., description="gemini, groq, or openai")
    api_key: Optional[str] = Field(None, description="Optional key to test before saving")


class TestProviderResponse(BaseModel):
    provider: str
    is_valid: bool
    status: str
    message: str


@router.post("/providers/test", response_model=TestProviderResponse, summary="Test connectivity for an LLM provider key")
async def test_provider_connection(
    payload: TestProviderRequest,
    current_admin: AdminUser = Depends(get_current_admin),
    db: AsyncSession = Depends(get_db_session),
):
    prov = payload.provider.lower().strip()
    key_to_test = payload.api_key

    if not key_to_test:
        # Fetch from DB or environment
        stmt = select(SystemSetting).where(SystemSetting.key == f"{prov.upper()}_API_KEY")
        res = await db.execute(stmt)
        s = res.scalars().first()
        if s and s.value:
            key_to_test = s.value
        elif prov == "gemini":
            key_to_test = settings.GEMINI_API_KEY or settings.GOOGLE_API_KEY or os.getenv("GEMINI_API_KEY", "")
        elif prov == "groq":
            key_to_test = settings.GROQ_API_KEY or os.getenv("GROQ_API_KEY", "")
        elif prov == "openai":
            key_to_test = settings.OPENAI_API_KEY or os.getenv("OPENAI_API_KEY", "")

    if not key_to_test:
        return TestProviderResponse(
            provider=prov,
            is_valid=False,
            status="not_configured",
            message="No hay ninguna clave ingresada para probar.",
        )

    is_ok, msg = await verify_llm_provider(prov, key_to_test)
    return TestProviderResponse(
        provider=prov,
        is_valid=is_ok,
        status="verified" if is_ok else "error",
        message=msg,
    )


@router.get("/providers", response_model=ProviderSettingsResponse, summary="Get LLM Provider and API key status")
async def get_provider_settings(
    current_admin: AdminUser = Depends(get_current_admin),
    db: AsyncSession = Depends(get_db_session),
):
    # Fetch database settings if available
    stmt = select(SystemSetting)
    res = await db.execute(stmt)
    db_settings = {s.key: s.value for s in res.scalars().all()}

    gemini_key = (
        db_settings.get("GEMINI_API_KEY")
        or settings.GEMINI_API_KEY
        or settings.GOOGLE_API_KEY
        or os.getenv("GEMINI_API_KEY", "")
        or os.getenv("GOOGLE_API_KEY", "")
    )
    groq_key = db_settings.get("GROQ_API_KEY") or settings.GROQ_API_KEY or os.getenv("GROQ_API_KEY", "")
    openai_key = db_settings.get("OPENAI_API_KEY") or settings.OPENAI_API_KEY or os.getenv("OPENAI_API_KEY", "")

    # Default to Gemini as active provider
    active = db_settings.get("ACTIVE_LLM_PROVIDER") or get_active_provider() or "gemini"

    return ProviderSettingsResponse(
        active_provider=active,
        available_providers=["gemini", "groq", "openai"],
        providers={
            "gemini": {
                "name": "Google Gemini",
                "model": settings.GEMINI_CHAT_MODEL,
                "is_configured": bool(gemini_key),
                "is_active": active == "gemini",
                "masked_key": mask_key(gemini_key),
            },
            "groq": {
                "name": "Groq LPU (Ultra-Fast)",
                "model": settings.GROQ_CHAT_MODEL or "llama-3.1-8b-instant",
                "is_configured": bool(groq_key),
                "is_active": active == "groq",
                "masked_key": mask_key(groq_key),
            },
            "openai": {
                "name": "OpenAI",
                "model": settings.OPENAI_CHAT_MODEL,
                "is_configured": bool(openai_key),
                "is_active": active == "openai",
                "masked_key": mask_key(openai_key),
            },
        },
    )


@router.post("/providers", response_model=ProviderSettingsResponse, summary="Update active LLM provider and/or API keys")
async def update_provider_settings(
    payload: UpdateProviderSettingsRequest,
    current_admin: AdminUser = Depends(get_current_admin),
    db: AsyncSession = Depends(get_db_session),
):
    updates = {}
    if payload.active_provider:
        prov = payload.active_provider.lower().strip()
        if prov not in ["gemini", "groq", "openai"]:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Proveedor no soportado. Usa 'gemini', 'groq' o 'openai'.",
            )
        updates["ACTIVE_LLM_PROVIDER"] = prov

    if payload.gemini_api_key is not None and payload.gemini_api_key.strip():
        updates["GEMINI_API_KEY"] = payload.gemini_api_key.strip()
    if payload.groq_api_key is not None and payload.groq_api_key.strip():
        updates["GROQ_API_KEY"] = payload.groq_api_key.strip()
    if payload.openai_api_key is not None and payload.openai_api_key.strip():
        updates["OPENAI_API_KEY"] = payload.openai_api_key.strip()

    for key, val in updates.items():
        stmt = select(SystemSetting).where(SystemSetting.key == key)
        res = await db.execute(stmt)
        setting = res.scalars().first()
        if setting:
            setting.value = val
        else:
            db.add(SystemSetting(key=key, value=val, is_secret="KEY" in key))

    await db.commit()

    # Update runtime memory
    set_runtime_llm_config(
        provider=updates.get("ACTIVE_LLM_PROVIDER"),
        gemini_api_key=updates.get("GEMINI_API_KEY"),
        groq_api_key=updates.get("GROQ_API_KEY"),
        openai_api_key=updates.get("OPENAI_API_KEY"),
    )

    return await get_provider_settings(current_admin=current_admin, db=db)
