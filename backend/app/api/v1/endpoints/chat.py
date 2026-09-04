import uuid
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession
from app.db.session import get_db_session
from app.models.telemetry import TelemetryLog
from app.schemas.chat import ChatRequest, ChatResponse, SourceCitation, ChatTelemetry
from app.services.graph_workflow import AcademyGraphWorkflow
from app.core.logging import logger

router = APIRouter(tags=["Chat"])

# Global workflow graph instance
_workflow_instance = None


def get_workflow() -> AcademyGraphWorkflow:
    global _workflow_instance
    if _workflow_instance is None:
        _workflow_instance = AcademyGraphWorkflow()
    return _workflow_instance


import re

def sanitize_response_text(text: str) -> str:
    """
    Cleans raw internal tokens, control characters, raw asterisks, and formatting leaks from the final response.
    """
    if not text:
        return ""
    cleaned = text.replace("[[ESCALATE]]", "").replace("[NO_INFO]", "")
    # Remove bold/italic markdown asterisks (**text** -> text, *text* -> text, ***text*** -> text)
    cleaned = re.sub(r"\*{1,3}([^*\n]+)\*{1,3}", r"\1", cleaned)
    # Convert markdown bullet asterisks to clean bullet points
    cleaned = re.sub(r"^\s*\*\s+", r"• ", cleaned, flags=re.MULTILINE)
    # Remove any remaining lone asterisks
    cleaned = cleaned.replace("*", "")
    # Remove unwanted ASCII control characters but keep standard whitespaces
    cleaned = "".join(ch for ch in cleaned if ch == "\n" or ch == "\t" or ch == "\r" or ord(ch) >= 32)
    return cleaned.strip()


@router.post(
    "/chat",
    response_model=ChatResponse,
    status_code=status.HTTP_200_OK,
    summary="Process user inquiry via LangGraph RAG pipeline",
)
async def chat_completion(
    payload: ChatRequest,
    db: AsyncSession = Depends(get_db_session),
    workflow: AcademyGraphWorkflow = Depends(get_workflow),
):
    session_id = payload.session_id or f"session_{uuid.uuid4().hex[:12]}"
    channel = payload.channel or "web"

    try:
        # Execute LangGraph state machine
        state = await workflow.ainvoke(
            query=payload.query,
            session_id=session_id,
            channel=channel,
        )

        raw_generation = state.get("generation", "")
        clean_generation = sanitize_response_text(raw_generation)

        sources = [
            SourceCitation(
                document=s.get("document", "cursos_y_modalidades.md"),
                section=s.get("section", "General"),
                chunk_id=s.get("chunk_id"),
            )
            for s in state.get("sources", [])
        ]

        token_metrics = state.get("token_metrics", {})
        prompt_tokens = token_metrics.get("prompt_tokens", 0)
        comp_tokens = token_metrics.get("completion_tokens", 0)
        cost_usd = token_metrics.get("cost_usd", 0.0)
        latency_ms = state.get("latency_ms", 0.0)

        # Persist TelemetryLog record
        telemetry_entry = TelemetryLog(
            session_id=session_id,
            channel=channel,
            user_query=payload.query,
            bot_response=clean_generation,
            status=state.get("status", "RESOLVED_BY_RAG"),
            escalation_reason=state.get("escalation_reason"),
            latency_ms=latency_ms,
            prompt_tokens=prompt_tokens,
            completion_tokens=comp_tokens,
            cost_usd=cost_usd,
        )
        db.add(telemetry_entry)

        # Persist Visitor Chat Session & History
        import json
        from sqlalchemy.future import select
        from app.models.conversation import ChatSessionRecord, ChatMessageRecord

        sess_stmt = select(ChatSessionRecord).where(ChatSessionRecord.id == session_id)
        sess_res = await db.execute(sess_stmt)
        chat_sess = sess_res.scalars().first()
        if not chat_sess:
            title_text = payload.query.strip()
            if len(title_text) > 40:
                title_text = title_text[:37] + "..."
            chat_sess = ChatSessionRecord(
                id=session_id,
                title=title_text or "Nueva Consulta",
                channel=channel,
            )
            db.add(chat_sess)
            await db.flush()

        # Add user message
        db.add(ChatMessageRecord(
            session_id=session_id,
            sender="user",
            content=payload.query,
            confidence_score=1.0,
            latency_ms=0.0,
        ))

        # Add assistant message
        sources_data = [s.model_dump() for s in sources]
        db.add(ChatMessageRecord(
            session_id=session_id,
            sender="assistant",
            content=clean_generation,
            status=state.get("status", "RESOLVED_BY_RAG"),
            sources_json=json.dumps(sources_data, ensure_ascii=False) if sources_data else None,
            confidence_score=state.get("relevance_score", 0.0),
            latency_ms=latency_ms,
        ))

        await db.commit()

        return ChatResponse(
            response=clean_generation,
            status=state.get("status", "RESOLVED_BY_RAG"),
            confidence_score=state.get("relevance_score", 0.0),
            sources=sources,
            escalated=state.get("is_escalated", False),
            telemetry=ChatTelemetry(
                latency_ms=latency_ms,
                cost_usd=cost_usd,
            ),
        )
    except Exception as e:
        logger.error(f"Error executing chat completion: {e}", exc_info=True)
        # Graceful fallback without leaking technical DB or collection traces
        fallback_msg = (
            "En este momento estamos experimentando una breve intermitencia en el servicio de consulta. "
            "Por favor intenta de nuevo con tu pregunta o solicita conexión con un asesor humano para ayudarte de inmediato."
        )
        return ChatResponse(
            response=fallback_msg,
            status="ERROR_FALLBACK",
            confidence_score=0.0,
            sources=[],
            escalated=False,
            telemetry=ChatTelemetry(
                latency_ms=0.0,
                cost_usd=0.0,
            ),
        )
