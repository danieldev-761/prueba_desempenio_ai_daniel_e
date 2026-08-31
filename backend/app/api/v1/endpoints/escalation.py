from datetime import datetime, timezone
import json
import re
from typing import List, Optional
from fastapi import APIRouter, Depends, HTTPException, Header, WebSocket, WebSocketDisconnect, status
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select

from app.db.session import get_db_session
from app.core.config import settings
from app.core.logging import get_logger
from app.models.escalation import EscalatedSession, LiveChatMessage, StudentProfile, SessionReview
from app.schemas.escalation import (
    EscalationStartRequest,
    EscalationStartResponse,
    EscalatedSessionResponse,
    TelegramReplyRequest,
    SessionReviewCreate,
    SessionReviewResponse,
    StudentProfileResponse,
    CRMSummaryResponse,
)
from app.services.connection_manager import manager
from app.services.telegram_service import send_telegram_message

logger = get_logger("escalation_router")
router = APIRouter()


def generate_deterministic_session_id(full_name: str, national_id: str) -> str:
    """
    Constructs deterministic session ID: [FirstName]_[Last4DigitsOfID].
    Example: 'Carlos Rodríguez', '1020491823' -> 'Carlos_1823'
    """
    clean_name = re.sub(r"[^\w\s]", "", full_name).strip()
    first_name = clean_name.split()[0].capitalize() if clean_name else "Student"
    digits = re.sub(r"\D", "", national_id)
    last_digits = digits[-4:] if len(digits) >= 4 else digits.zfill(4)
    return f"{first_name}_{last_digits}"


@router.post("/start", response_model=EscalationStartResponse, status_code=status.HTTP_201_CREATED)
async def start_escalation(
    payload: EscalationStartRequest,
    db: AsyncSession = Depends(get_db_session),
):
    """
    Initiates human escalation session by registering student full name and national ID.
    Generates deterministic session ID, updates StudentProfile CRM record, and initializes EscalatedSession.
    """
    session_id = generate_deterministic_session_id(payload.full_name, payload.national_id)

    # 1. Update or create StudentProfile CRM record
    stmt_prof = select(StudentProfile).where(StudentProfile.national_id == payload.national_id)
    res_prof = await db.execute(stmt_prof)
    profile = res_prof.scalars().first()

    now = datetime.now(timezone.utc)
    if profile:
        profile.full_name = payload.full_name
        profile.total_escalations_count += 1
        profile.last_interaction_at = now
        if payload.telegram_chat_id:
            profile.telegram_chat_id = payload.telegram_chat_id
    else:
        profile = StudentProfile(
            national_id=payload.national_id,
            full_name=payload.full_name,
            channel=payload.channel,
            telegram_chat_id=payload.telegram_chat_id,
            total_escalations_count=1,
            total_messages_sent=0,
            created_at=now,
            last_interaction_at=now,
        )
        db.add(profile)

    # 2. Check if session already exists
    stmt = select(EscalatedSession).where(EscalatedSession.session_id == session_id)
    result = await db.execute(stmt)
    existing_session = result.scalars().first()

    if existing_session:
        existing_session.status = "WAITING"
        existing_session.advisor_responded = False
        existing_session.initial_inquiry = payload.initial_inquiry or existing_session.initial_inquiry
        existing_session.resolved_at = None
        if payload.telegram_chat_id:
            existing_session.telegram_chat_id = payload.telegram_chat_id
        await db.commit()
    else:
        new_session = EscalatedSession(
            session_id=session_id,
            full_name=payload.full_name,
            national_id=payload.national_id,
            channel=payload.channel,
            telegram_chat_id=payload.telegram_chat_id,
            initial_inquiry=payload.initial_inquiry,
            status="WAITING",
            advisor_responded=False,
        )
        db.add(new_session)
        await db.commit()

    # 3. If an initial inquiry caused the escalation, persist it as the first user message in chat
    if payload.initial_inquiry and payload.initial_inquiry.strip():
        user_inquiry_msg = LiveChatMessage(
            session_id=session_id,
            sender="user",
            sender_name=payload.full_name,
            message=payload.initial_inquiry.strip(),
        )
        db.add(user_inquiry_msg)
        profile.total_messages_sent += 1

    # 4. Create initial system message in chat
    sys_msg = LiveChatMessage(
        session_id=session_id,
        sender="system",
        sender_name="Sistema de la Academia",
        message=f"Sesión establecida para {payload.full_name}. Un asesor académico se conectará en breve para atender tu consulta con mucho gusto.",
    )
    db.add(sys_msg)
    await db.commit()

    return EscalationStartResponse(
        session_id=session_id,
        full_name=payload.full_name,
        status="WAITING",
        message="Tu solicitud de asesoría personalizada ha sido registrada. Un asesor académico se conectará en breve.",
    )


@router.get("/sessions", response_model=List[EscalatedSessionResponse])
async def list_escalated_sessions(
    x_admin_key: Optional[str] = Header(None, alias="X-Admin-Key"),
    db: AsyncSession = Depends(get_db_session),
):
    """Admin endpoint to retrieve all active and pending escalation sessions."""
    if not x_admin_key or x_admin_key != settings.ADMIN_API_KEY:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Credenciales administrativas inválidas (X-Admin-Key).",
        )

    stmt = select(EscalatedSession).order_by(EscalatedSession.created_at.desc())
    result = await db.execute(stmt)
    sessions = result.scalars().all()
    return sessions


@router.get("/sessions/{session_id}/messages")
async def get_session_messages(
    session_id: str,
    db: AsyncSession = Depends(get_db_session),
):
    """Retrieve chat history for a specific session."""
    stmt = select(LiveChatMessage).where(LiveChatMessage.session_id == session_id).order_by(LiveChatMessage.timestamp.asc())
    result = await db.execute(stmt)
    messages = result.scalars().all()
    return [
        {
            "id": m.id,
            "session_id": m.session_id,
            "sender": m.sender,
            "sender_name": m.sender_name,
            "message": m.message,
            "timestamp": m.timestamp.isoformat(),
        }
        for m in messages
    ]


@router.post("/sessions/{session_id}/close")
async def close_escalated_session(
    session_id: str,
    x_admin_key: Optional[str] = Header(None, alias="X-Admin-Key"),
    db: AsyncSession = Depends(get_db_session),
):
    """
    Terminates an escalation session.
    Strict Rule: Only allowed if the advisor has sent at least one response in the session.
    """
    if not x_admin_key or x_admin_key != settings.ADMIN_API_KEY:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Credenciales administrativas inválidas (X-Admin-Key).",
        )

    stmt = select(EscalatedSession).where(EscalatedSession.session_id == session_id)
    result = await db.execute(stmt)
    session_record = result.scalars().first()

    if not session_record:
        raise HTTPException(status_code=404, detail=f"Sesión {session_id} no encontrada.")

    # Verify that advisor has responded (must have at least one message from admin)
    stmt_msgs = select(LiveChatMessage).where(
        LiveChatMessage.session_id == session_id,
        LiveChatMessage.sender == "admin"
    )
    res_msgs = await db.execute(stmt_msgs)
    admin_messages = res_msgs.scalars().all()

    if len(admin_messages) == 0:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="No puedes finalizar la sesión hasta haber enviado al menos una respuesta al usuario."
        )

    now = datetime.now(timezone.utc)
    session_record.status = "RESOLVED"
    session_record.resolved_at = now
    session_record.advisor_responded = True

    # Add system closed notification message
    sys_msg = LiveChatMessage(
        session_id=session_id,
        sender="system",
        sender_name="Sistema de la Academia",
        message="La sesión de atención personalizada ha sido finalizada por el asesor académico.",
        timestamp=now,
    )
    db.add(sys_msg)
    await db.commit()

    # Broadcast session closed event over WebSocket to trigger rating screen
    await manager.broadcast_to_session(session_id, {
        "type": "SESSION_CLOSED",
        "session_id": session_id,
        "message": "Session resolved by advisor."
    })

    # If telegram session, send review prompt
    if session_record.channel == "telegram" and session_record.telegram_chat_id:
        tg_review_prompt = (
            "✅ *Tu consulta con el asesor académico ha finalizado.*\n\n"
            "Por favor califica nuestro servicio respondiendo con un número del *1 al 5* (donde 5 es Excelente)."
        )
        await send_telegram_message(
            int(session_record.telegram_chat_id) if session_record.telegram_chat_id.lstrip('-').isdigit() else 0,
            tg_review_prompt
        )

    return {"status": "RESOLVED", "session_id": session_id, "resolved_at": now.isoformat()}


@router.post("/sessions/{session_id}/review", response_model=SessionReviewResponse, status_code=status.HTTP_201_CREATED)
async def submit_session_review(
    session_id: str,
    payload: SessionReviewCreate,
    db: AsyncSession = Depends(get_db_session),
):
    """
    Submits student feedback (1-5 stars + optional notes) for an escalation session.
    """
    stmt = select(EscalatedSession).where(EscalatedSession.session_id == session_id)
    result = await db.execute(stmt)
    session_record = result.scalars().first()

    if not session_record:
        raise HTTPException(status_code=404, detail=f"Sesión {session_id} no encontrada.")

    review = SessionReview(
        session_id=session_id,
        national_id=session_record.national_id,
        rating=payload.rating,
        notes=payload.notes,
        created_at=datetime.now(timezone.utc),
    )
    db.add(review)
    await db.commit()
    await db.refresh(review)

    return review


@router.get("/crm/profiles", response_model=List[StudentProfileResponse])
async def list_crm_profiles(
    x_admin_key: Optional[str] = Header(None, alias="X-Admin-Key"),
    db: AsyncSession = Depends(get_db_session),
):
    """Admin endpoint to retrieve all student profiles tracked in CRM."""
    if not x_admin_key or x_admin_key != settings.ADMIN_API_KEY:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Credenciales administrativas inválidas (X-Admin-Key).",
        )

    stmt = select(StudentProfile).order_by(StudentProfile.last_interaction_at.desc())
    res = await db.execute(stmt)
    return res.scalars().all()


@router.get("/crm/reviews", response_model=List[SessionReviewResponse])
async def list_crm_reviews(
    x_admin_key: Optional[str] = Header(None, alias="X-Admin-Key"),
    db: AsyncSession = Depends(get_db_session),
):
    """Admin endpoint to retrieve all customer service reviews."""
    if not x_admin_key or x_admin_key != settings.ADMIN_API_KEY:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Credenciales administrativas inválidas (X-Admin-Key).",
        )

    stmt = select(SessionReview).order_by(SessionReview.created_at.desc())
    res = await db.execute(stmt)
    return res.scalars().all()


@router.get("/crm/summary", response_model=CRMSummaryResponse)
async def get_crm_summary(
    x_admin_key: Optional[str] = Header(None, alias="X-Admin-Key"),
    db: AsyncSession = Depends(get_db_session),
):
    """Admin endpoint to retrieve CRM & Satisfaction metrics summary."""
    if not x_admin_key or x_admin_key != settings.ADMIN_API_KEY:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Credenciales administrativas inválidas (X-Admin-Key).",
        )

    # Count profiles
    stmt_prof = select(StudentProfile)
    res_prof = await db.execute(stmt_prof)
    profiles = res_prof.scalars().all()
    total_profiles = len(profiles)

    # Reviews and distribution
    stmt_rev = select(SessionReview)
    res_rev = await db.execute(stmt_rev)
    reviews = res_rev.scalars().all()
    total_reviews = len(reviews)

    dist = {"1": 0, "2": 0, "3": 0, "4": 0, "5": 0}
    for r in reviews:
        s_key = str(r.rating)
        if s_key in dist:
            dist[s_key] += 1

    avg_rating = round(sum(r.rating for r in reviews) / total_reviews, 2) if total_reviews > 0 else 0.0

    return CRMSummaryResponse(
        total_profiles=total_profiles,
        total_reviews=total_reviews,
        average_rating=avg_rating,
        rating_distribution=dist,
    )


@router.post("/telegram/reply")
async def reply_telegram_student(
    payload: TelegramReplyRequest,
    x_admin_key: Optional[str] = Header(None, alias="X-Admin-Key"),
    db: AsyncSession = Depends(get_db_session),
):
    """Allows staff to send direct message to a Telegram student chat ID from the Admin Portal."""
    if not x_admin_key or x_admin_key != settings.ADMIN_API_KEY:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Credenciales administrativas inválidas (X-Admin-Key).",
        )

    if payload.session_id:
        chat_msg = LiveChatMessage(
            session_id=payload.session_id,
            sender="admin",
            sender_name="Asesor Académico",
            message=payload.message,
        )
        db.add(chat_msg)

        # Mark advisor responded on the session
        stmt = select(EscalatedSession).where(EscalatedSession.session_id == payload.session_id)
        res = await db.execute(stmt)
        sess = res.scalars().first()
        if sess:
            sess.advisor_responded = True
            sess.status = "ACTIVE"

        await db.commit()

    prefix_msg = f"🎓 *Mensaje de tu Asesor de la Academia de Idiomas:*\n\n{payload.message}"
    delivered = await send_telegram_message(int(payload.telegram_chat_id) if payload.telegram_chat_id.lstrip('-').isdigit() else 0, prefix_msg)
    if not delivered and not payload.telegram_chat_id == "123456":
        raise HTTPException(status_code=502, detail="Failed to deliver message to Telegram bot API.")

    return {"status": "DELIVERED", "telegram_chat_id": payload.telegram_chat_id}


@router.websocket("/ws/chat/{session_id}")
async def websocket_chat_endpoint(
    websocket: WebSocket,
    session_id: str,
    db: AsyncSession = Depends(get_db_session),
):
    """
    Bi-directional WebSocket connection for live human advisor chat.
    """
    await manager.connect(websocket, session_id)
    try:
        while True:
            data_text = await websocket.receive_text()
            try:
                data = json.loads(data_text)
            except Exception:
                data = {"message": data_text, "sender": "user", "sender_name": "Usuario"}

            sender = data.get("sender", "user")
            sender_name = data.get("sender_name", "Estudiante" if sender == "user" else "Asesor")
            text_content = data.get("message", "").strip()

            if not text_content:
                continue

            now = datetime.now(timezone.utc)
            # Persist message in database
            chat_record = LiveChatMessage(
                session_id=session_id,
                sender=sender,
                sender_name=sender_name,
                message=text_content,
                timestamp=now,
            )
            db.add(chat_record)

            # Update session status & CRM message counts
            stmt = select(EscalatedSession).where(EscalatedSession.session_id == session_id)
            res = await db.execute(stmt)
            session_record = res.scalars().first()
            if session_record:
                if sender == "admin":
                    session_record.advisor_responded = True
                    session_record.status = "ACTIVE"
                elif sender == "user":
                    # Update student profile total message count
                    stmt_prof = select(StudentProfile).where(StudentProfile.national_id == session_record.national_id)
                    res_prof = await db.execute(stmt_prof)
                    prof = res_prof.scalars().first()
                    if prof:
                        prof.total_messages_sent += 1
                        prof.last_interaction_at = now

            await db.commit()
            await db.refresh(chat_record)

            # Broadcast to all connected parties on this session
            broadcast_payload = {
                "id": chat_record.id,
                "session_id": session_id,
                "sender": sender,
                "sender_name": sender_name,
                "message": text_content,
                "timestamp": now.isoformat(),
            }
            await manager.broadcast_to_session(session_id, broadcast_payload)

    except WebSocketDisconnect:
        manager.disconnect(websocket, session_id)
    except Exception as e:
        logger.error(f"WebSocket error in session {session_id}: {e}")
        manager.disconnect(websocket, session_id)
