from datetime import datetime, timezone
from sqlalchemy import Column, Integer, String, Text, Float, DateTime
from app.db.session import Base


class TelemetryLog(Base):
    """
    Relational Telemetry Model storing interaction traces, status flags, and cost metrics.
    """
    __tablename__ = "telemetry_logs"

    id = Column(Integer, primary_key=True, autoincrement=True, index=True)
    session_id = Column(String(64), nullable=False, index=True)
    timestamp = Column(DateTime, nullable=False, default=lambda: datetime.now(timezone.utc))
    channel = Column(String(32), nullable=False, default="web")
    user_query = Column(Text, nullable=False)
    bot_response = Column(Text, nullable=False)
    status = Column(String(32), nullable=False, index=True)  # RESOLVED_BY_CACHE, RESOLVED_BY_RAG, ESCALATED_TO_HUMAN
    escalation_reason = Column(String(64), nullable=True)
    latency_ms = Column(Float, nullable=False, default=0.0)
    prompt_tokens = Column(Integer, nullable=False, default=0)
    completion_tokens = Column(Integer, nullable=False, default=0)
    cost_usd = Column(Float, nullable=False, default=0.0)

    def __repr__(self) -> str:
        return f"<TelemetryLog(id={self.id}, session={self.session_id}, status={self.status}, cost=${self.cost_usd:.6f})>"
