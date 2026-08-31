from datetime import datetime, timezone
from sqlalchemy import Column, Integer, String, Text, DateTime, Boolean
from app.db.session import Base


class StudentProfile(Base):
    __tablename__ = "student_profiles"

    id = Column(Integer, primary_key=True, index=True)
    national_id = Column(String(64), unique=True, index=True, nullable=False)
    full_name = Column(String(128), nullable=False)
    channel = Column(String(32), default="web", nullable=False)  # 'web', 'telegram'
    telegram_chat_id = Column(String(64), nullable=True)
    total_escalations_count = Column(Integer, default=1, nullable=False)
    total_messages_sent = Column(Integer, default=0, nullable=False)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc), nullable=False)
    last_interaction_at = Column(DateTime, default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc), nullable=False)


class EscalatedSession(Base):
    __tablename__ = "escalated_sessions"

    id = Column(Integer, primary_key=True, index=True)
    session_id = Column(String(64), unique=True, index=True, nullable=False)
    full_name = Column(String(128), nullable=False)
    national_id = Column(String(64), nullable=False)
    channel = Column(String(32), default="web", nullable=False)  # 'web', 'telegram'
    telegram_chat_id = Column(String(64), nullable=True)
    initial_inquiry = Column(Text, nullable=True)
    status = Column(String(32), default="WAITING", nullable=False)  # 'WAITING', 'ACTIVE', 'RESOLVED'
    advisor_responded = Column(Boolean, default=False, nullable=False)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc), nullable=False)
    updated_at = Column(DateTime, default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc), nullable=False)
    resolved_at = Column(DateTime, nullable=True)


class LiveChatMessage(Base):
    __tablename__ = "live_chat_messages"

    id = Column(Integer, primary_key=True, index=True)
    session_id = Column(String(64), index=True, nullable=False)
    sender = Column(String(32), nullable=False)  # 'user', 'admin', 'system'
    sender_name = Column(String(128), nullable=True)
    message = Column(Text, nullable=False)
    timestamp = Column(DateTime, default=lambda: datetime.now(timezone.utc), nullable=False)


class SessionReview(Base):
    __tablename__ = "session_reviews"

    id = Column(Integer, primary_key=True, index=True)
    session_id = Column(String(64), index=True, nullable=False)
    national_id = Column(String(64), nullable=False)
    rating = Column(Integer, nullable=False)  # 1 to 5
    notes = Column(Text, nullable=True)
    created_at = Column(DateTime, default=lambda: datetime.now(timezone.utc), nullable=False)
