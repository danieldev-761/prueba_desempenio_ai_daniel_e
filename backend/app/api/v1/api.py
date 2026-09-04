from fastapi import APIRouter
from app.api.v1.endpoints import chat, metrics, telegram, health, escalation, auth, settings, conversations

api_router = APIRouter()
api_router.include_router(health.router)
api_router.include_router(auth.router)
api_router.include_router(settings.router)
api_router.include_router(conversations.router)
api_router.include_router(chat.router)
api_router.include_router(metrics.router)
api_router.include_router(telegram.router)
api_router.include_router(escalation.router, prefix="/escalation", tags=["escalation"])

