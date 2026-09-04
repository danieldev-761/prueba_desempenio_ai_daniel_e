from datetime import datetime, timezone
from sqlalchemy import Column, Integer, String, Text, Float, DateTime, ForeignKey
from sqlalchemy.orm import relationship
from app.db.session import Base


class ChatSessionRecord(Base):
    """
    Visitor conversational session record.
    """
    __tablename__ = "chat_sessions"

    id = Column(String(64), primary_key=True, index=True)
    title = Column(String(256), nullable=False, default="Nueva Consulta")
    channel = Column(String(32), nullable=False, default="web")
    created_at = Column(DateTime, nullable=False, default=lambda: datetime.now(timezone.utc))
    updated_at = Column(DateTime, nullable=False, default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))

    messages = relationship("ChatMessageRecord", back_populates="session", cascade="all, delete-orphan", order_by="ChatMessageRecord.created_at")

    def __repr__(self) -> str:
        return f"<ChatSessionRecord(id='{self.id}', title='{self.title}', channel='{self.channel}')>"


class ChatMessageRecord(Base):
    """
    Individual message trace within a visitor chat session.
    """
    __tablename__ = "chat_messages"

    id = Column(Integer, primary_key=True, autoincrement=True, index=True)
    session_id = Column(String(64), ForeignKey("chat_sessions.id", ondelete="CASCADE"), nullable=False, index=True)
    sender = Column(String(16), nullable=False)  # "user" or "assistant"
    content = Column(Text, nullable=False)
    status = Column(String(32), nullable=True)  # RESOLVED_BY_FAQ_TRIAGE, RESOLVED_BY_CACHE, RESOLVED_BY_RAG, ESCALATED_TO_HUMAN
    sources_json = Column(Text, nullable=True)  # JSON serialization of source citations
    confidence_score = Column(Float, nullable=False, default=0.0)
    latency_ms = Column(Float, nullable=False, default=0.0)
    created_at = Column(DateTime, nullable=False, default=lambda: datetime.now(timezone.utc))

    session = relationship("ChatSessionRecord", back_populates="messages")

    def __repr__(self) -> str:
        return f"<ChatMessageRecord(id={self.id}, session='{self.session_id}', sender='{self.sender}')>"
