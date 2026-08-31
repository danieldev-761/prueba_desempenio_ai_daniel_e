from typing import Dict, Any
from fastapi import APIRouter, Depends, Request, status
from sqlalchemy.ext.asyncio import AsyncSession
from app.db.session import get_db_session
from app.models.telemetry import TelemetryLog
from app.services.graph_workflow import AcademyGraphWorkflow
from app.services.telegram_service import send_telegram_message
from app.api.v1.endpoints.chat import get_workflow
from app.core.logging import logger

router = APIRouter(tags=["Telegram"])


@router.post(
    "/telegram/webhook",
    status_code=status.HTTP_200_OK,
    summary="Inbound Telegram Webhook Receiver",
)
async def telegram_webhook(
    request: Request,
    db: AsyncSession = Depends(get_db_session),
    workflow: AcademyGraphWorkflow = Depends(get_workflow),
):
    try:
        update: Dict[str, Any] = await request.json()
        message = update.get("message") or update.get("edited_message")
        if not message:
            return {"ok": True, "detail": "No message in update"}

        text = message.get("text", "").strip()
        chat = message.get("chat", {})
        chat_id = chat.get("id")

        if not text or not chat_id:
            return {"ok": True, "detail": "Empty text or chat_id"}

        # Handle Telegram start command
        if text.startswith("/start"):
            welcome_msg = (
                "👋 ¡Hola! Te damos la bienvenida a la Academia de Idiomas Colombiana.\n\n"
                "Soy tu Asesor Académico Virtual. Con mucho gusto te ayudo con información oficial sobre horarios, precios en COP, niveles MCER, inscripciones, modalidades y certificaciones.\n\n"
                "¿Qué información te gustaría consultar hoy?"
            )
            await send_telegram_message(chat_id=chat_id, text=welcome_msg)
            return {"ok": True}

        session_id = f"tg_{chat_id}"

        # Execute LangGraph RAG
        state = await workflow.ainvoke(
            query=text,
            session_id=session_id,
            channel="telegram",
        )

        bot_reply = state.get("generation", "")
        token_metrics = state.get("token_metrics", {})

        # Persist telemetry
        telemetry_entry = TelemetryLog(
            session_id=session_id,
            channel="telegram",
            user_query=text,
            bot_response=bot_reply,
            status=state.get("status", "RESOLVED_BY_RAG"),
            escalation_reason=state.get("escalation_reason"),
            latency_ms=state.get("latency_ms", 0.0),
            prompt_tokens=token_metrics.get("prompt_tokens", 0),
            completion_tokens=token_metrics.get("completion_tokens", 0),
            cost_usd=token_metrics.get("cost_usd", 0.0),
        )
        db.add(telemetry_entry)
        await db.commit()

        # Send response to Telegram user
        await send_telegram_message(chat_id=chat_id, text=bot_reply)

        return {"ok": True}
    except Exception as e:
        logger.error(f"Error handling Telegram webhook update: {e}", exc_info=True)
        return {"ok": False, "error": str(e)}
