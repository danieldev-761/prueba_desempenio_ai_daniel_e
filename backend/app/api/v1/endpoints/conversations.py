import json
from datetime import datetime
from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, status, Query
from pydantic import BaseModel
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy.orm import selectinload

from app.db.session import get_db_session
from app.models.conversation import ChatSessionRecord, ChatMessageRecord
from app.api.v1.endpoints.auth import get_current_admin
from app.models.admin_user import AdminUser

router = APIRouter(prefix="/conversations", tags=["Conversations History"])


class ChatMessageDTO(BaseModel):
    id: int
    session_id: str
    sender: str
    content: str
    status: Optional[str] = None
    sources: Optional[List[dict]] = None
    confidence_score: float = 0.0
    latency_ms: float = 0.0
    created_at: datetime


class ChatSessionDTO(BaseModel):
    id: str
    title: str
    channel: str
    message_count: int
    created_at: datetime
    updated_at: datetime
    last_message: Optional[str] = None


@router.get("", response_model=List[ChatSessionDTO], summary="List all visitor chat sessions")
async def list_conversations(
    limit: int = Query(50, ge=1, le=200),
    offset: int = Query(0, ge=0),
    db: AsyncSession = Depends(get_db_session),
):
    stmt = (
        select(ChatSessionRecord)
        .options(selectinload(ChatSessionRecord.messages))
        .order_by(ChatSessionRecord.updated_at.desc())
        .offset(offset)
        .limit(limit)
    )
    res = await db.execute(stmt)
    sessions = res.scalars().all()

    result = []
    for s in sessions:
        msgs = s.messages or []
        last_text = msgs[-1].content if msgs else ""
        if len(last_text) > 100:
            last_text = last_text[:97] + "..."
        result.append(
            ChatSessionDTO(
                id=s.id,
                title=s.title or "Nueva Consulta",
                channel=s.channel,
                message_count=len(msgs),
                created_at=s.created_at,
                updated_at=s.updated_at,
                last_message=last_text,
            )
        )
    return result


@router.get("/{session_id}", response_model=List[ChatMessageDTO], summary="Get message transcript for a session")
async def get_conversation_messages(
    session_id: str,
    db: AsyncSession = Depends(get_db_session),
):
    stmt = (
        select(ChatMessageRecord)
        .where(ChatMessageRecord.session_id == session_id)
        .order_by(ChatMessageRecord.created_at.asc())
    )
    res = await db.execute(stmt)
    messages = res.scalars().all()

    result = []
    for m in messages:
        sources_list = []
        if m.sources_json:
            try:
                sources_list = json.loads(m.sources_json)
            except Exception:
                sources_list = []
        result.append(
            ChatMessageDTO(
                id=m.id,
                session_id=m.session_id,
                sender=m.sender,
                content=m.content,
                status=m.status,
                sources=sources_list,
                confidence_score=m.confidence_score,
                latency_ms=m.latency_ms,
                created_at=m.created_at,
            )
        )
    return result
