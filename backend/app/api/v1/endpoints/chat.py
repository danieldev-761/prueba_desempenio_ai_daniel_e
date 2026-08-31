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
            bot_response=state.get("generation", ""),
            status=state.get("status", "RESOLVED_BY_RAG"),
            escalation_reason=state.get("escalation_reason"),
            latency_ms=latency_ms,
            prompt_tokens=prompt_tokens,
            completion_tokens=comp_tokens,
            cost_usd=cost_usd,
        )
        db.add(telemetry_entry)
        await db.commit()

        return ChatResponse(
            response=state.get("generation", ""),
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
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to process inquiry: {str(e)}",
        )
