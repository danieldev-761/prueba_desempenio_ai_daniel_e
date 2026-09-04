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


@router.get("/providers", response_model=ProviderSettingsResponse, summary="Get LLM Provider and API key status")
async def get_provider_settings(
    current_admin: AdminUser = Depends(get_current_admin),
    db: AsyncSession = Depends(get_db_session),
):
    # Fetch database settings if available
    stmt = select(SystemSetting)
    res = await db.execute(stmt)
    db_settings = {s.key: s.value for s in res.scalars().all()}

    active = db_settings.get("ACTIVE_LLM_PROVIDER") or get_active_provider()
    gemini_key = db_settings.get("GEMINI_API_KEY") or settings.GEMINI_API_KEY or os.getenv("GEMINI_API_KEY", "")
    groq_key = db_settings.get("GROQ_API_KEY") or settings.GROQ_API_KEY or os.getenv("GROQ_API_KEY", "")
    openai_key = db_settings.get("OPENAI_API_KEY") or settings.OPENAI_API_KEY or os.getenv("OPENAI_API_KEY", "")

    return ProviderSettingsResponse(
        active_provider=active,
        available_providers=["gemini", "groq", "openai"],
        providers={
            "gemini": {
                "name": "Google Gemini",
                "model": settings.GEMINI_CHAT_MODEL,
                "is_configured": bool(gemini_key),
                "masked_key": mask_key(gemini_key),
            },
            "groq": {
                "name": "Groq LPU (Ultra-Fast)",
                "model": settings.GROQ_CHAT_MODEL or "llama-3.3-70b-versatile",
                "is_configured": bool(groq_key),
                "masked_key": mask_key(groq_key),
            },
            "openai": {
                "name": "OpenAI",
                "model": settings.OPENAI_CHAT_MODEL,
                "is_configured": bool(openai_key),
                "masked_key": mask_key(openai_key),
            },
        },
    )


@router.post("/providers", summary="Update active LLM provider and/or API keys")
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

    return {
        "status": "success",
        "message": "Configuración de proveedores de IA actualizada exitosamente.",
        "active_provider": get_active_provider(),
    }
