from fastapi import APIRouter, Depends, Header, HTTPException, status
from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession
from app.core.config import settings
from app.db.session import get_db_session
from app.models.telemetry import TelemetryLog
from app.schemas.metrics import MetricsSummary, TokensConsumed

router = APIRouter(tags=["Metrics"])


async def verify_admin_key(x_admin_key: str = Header(..., alias="X-Admin-Key")):
    if x_admin_key != settings.ADMIN_API_KEY:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid or missing Administrator Key (X-Admin-Key).",
        )
    return x_admin_key


@router.get(
    "/metrics",
    response_model=MetricsSummary,
    status_code=status.HTTP_200_OK,
    summary="Retrieve real-time operational, cost, and escalation telemetry (Admin Only)",
)
async def get_metrics(
    db: AsyncSession = Depends(get_db_session),
    _admin_auth: str = Depends(verify_admin_key),
):
    # Total count
    total_q = await db.scalar(select(func.count(TelemetryLog.id))) or 0

    if total_q == 0:
        return MetricsSummary(
            total_queries_processed=0,
            resolved_by_cache=0,
            resolved_by_rag=0,
            escalated_to_human=0,
            escalation_rate_pct=0.0,
            total_tokens_consumed=TokensConsumed(prompt_tokens=0, completion_tokens=0, total=0),
            total_cost_usd=0.0,
            average_latency_ms=0.0,
        )

    # Counts by status
    triage_q = await db.scalar(select(func.count(TelemetryLog.id)).where(TelemetryLog.status == "RESOLVED_BY_FAQ_TRIAGE")) or 0
    cache_q = await db.scalar(select(func.count(TelemetryLog.id)).where(TelemetryLog.status == "RESOLVED_BY_CACHE")) or 0
    rag_q = await db.scalar(select(func.count(TelemetryLog.id)).where(TelemetryLog.status == "RESOLVED_BY_RAG")) or 0
    escalated_q = await db.scalar(select(func.count(TelemetryLog.id)).where(TelemetryLog.status == "ESCALATED_TO_HUMAN")) or 0

    # Token & cost aggregations
    sum_prompt = await db.scalar(select(func.sum(TelemetryLog.prompt_tokens))) or 0
    sum_comp = await db.scalar(select(func.sum(TelemetryLog.completion_tokens))) or 0
    sum_cost = await db.scalar(select(func.sum(TelemetryLog.cost_usd))) or 0.0
    avg_latency = await db.scalar(select(func.avg(TelemetryLog.latency_ms))) or 0.0

    escalation_rate = round((escalated_q / total_q) * 100.0, 2)

    return MetricsSummary(
        total_queries_processed=total_q,
        resolved_by_faq_triage=triage_q,
        resolved_by_cache=cache_q,
        resolved_by_rag=rag_q,
        escalated_to_human=escalated_q,
        escalation_rate_pct=escalation_rate,
        total_tokens_consumed=TokensConsumed(
            prompt_tokens=int(sum_prompt),
            completion_tokens=int(sum_comp),
            total=int(sum_prompt + sum_comp),
        ),
        total_cost_usd=round(float(sum_cost), 4),
        average_latency_ms=round(float(avg_latency), 2),
    )
