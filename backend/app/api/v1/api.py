from fastapi import APIRouter
from app.api.v1.endpoints import chat, metrics, telegram, health, escalation

api_router = APIRouter()
api_router.include_router(health.router)
api_router.include_router(chat.router)
api_router.include_router(metrics.router)
api_router.include_router(telegram.router)
api_router.include_router(escalation.router, prefix="/escalation", tags=["escalation"])
