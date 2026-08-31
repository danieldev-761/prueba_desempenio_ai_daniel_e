from typing import Optional, List
from datetime import datetime
from pydantic import BaseModel, Field


class EscalationStartRequest(BaseModel):
    full_name: str = Field(..., min_length=2, max_length=128, description="Student full name", json_schema_extra={"example": "Carlos Rodríguez"})
    national_id: str = Field(..., min_length=4, max_length=64, description="National ID, cédula or passport", json_schema_extra={"example": "1020491823"})
    initial_inquiry: Optional[str] = Field(default=None, description="Initial query that triggered escalation", json_schema_extra={"example": "Necesito información de descuentos corporativos"})
    channel: str = Field(default="web", description="Origin channel: 'web' or 'telegram'", json_schema_extra={"example": "web"})
    telegram_chat_id: Optional[str] = Field(default=None, description="Telegram chat ID if from telegram bot")


class EscalationStartResponse(BaseModel):
    session_id: str = Field(..., description="Deterministic session identifier (e.g. Carlos_1823)")
    full_name: str
    status: str
    message: str


class LiveMessagePayload(BaseModel):
    session_id: str
    sender: str  # 'user', 'admin', 'system'
    sender_name: Optional[str] = None
    message: str
    timestamp: datetime


class EscalatedSessionResponse(BaseModel):
    id: int
    session_id: str
    full_name: str
    national_id: str
    channel: str
    telegram_chat_id: Optional[str] = None
    initial_inquiry: Optional[str] = None
    status: str
    advisor_responded: bool = False
    created_at: datetime
    updated_at: datetime
    resolved_at: Optional[datetime] = None


class TelegramReplyRequest(BaseModel):
    telegram_chat_id: str = Field(..., description="Target Telegram chat ID")
    message: str = Field(..., min_length=1, description="Message to send to student")
    session_id: Optional[str] = Field(default=None, description="Associated session ID")


class SessionReviewCreate(BaseModel):
    rating: int = Field(..., ge=1, le=5, description="Star rating from 1 to 5")
    notes: Optional[str] = Field(default=None, max_length=1000, description="Optional qualitative comments")


class SessionReviewResponse(BaseModel):
    id: int
    session_id: str
    national_id: str
    rating: int
    notes: Optional[str] = None
    created_at: datetime


class StudentProfileResponse(BaseModel):
    id: int
    national_id: str
    full_name: str
    channel: str
    telegram_chat_id: Optional[str] = None
    total_escalations_count: int
    total_messages_sent: int
    created_at: datetime
    last_interaction_at: datetime


class CRMSummaryResponse(BaseModel):
    total_profiles: int
    total_reviews: int
    average_rating: float
    rating_distribution: dict
