import asyncio
import re
import sys
import time
from datetime import datetime, timezone
from pathlib import Path

# Add backend directory to path
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

import httpx
from sqlalchemy.future import select
from app.core.config import settings
from app.core.logging import logger
from app.services.graph_workflow import AcademyGraphWorkflow
from app.services.telegram_service import send_telegram_message
from app.db.session import AsyncSessionLocal, init_db
from app.models.telemetry import TelemetryLog
from app.models.escalation import EscalatedSession, LiveChatMessage, StudentProfile, SessionReview
from app.api.v1.endpoints.escalation import generate_deterministic_session_id


USER_TELEGRAM_STATES = {}


async def poll_batch(client: httpx.AsyncClient, base_url: str, offset: int) -> tuple[int, list]:
    """Polls Telegram for new updates with robust status code handling."""
    resp = await client.get(f"{base_url}/getUpdates", params={"offset": offset, "timeout": 25})
    if resp.status_code == 200:
        data = resp.json()
        updates = data.get("result", [])
        new_offset = offset
        if updates:
            new_offset = max(u["update_id"] for u in updates) + 1
        return new_offset, updates
    elif resp.status_code == 409:
        logger.warning("Telegram getUpdates conflict (409): another instance might be active. Backing off 10s.")
        await asyncio.sleep(10)
        return offset, []
    elif resp.status_code == 429:
        retry_after = int(resp.headers.get("Retry-After", 10))
        logger.warning(f"Telegram Rate Limit (429): sleeping for {retry_after}s.")
        await asyncio.sleep(retry_after)
        return offset, []
    else:
        logger.warning(f"Telegram getUpdates returned HTTP {resp.status_code}: {resp.text}")
        await asyncio.sleep(5)
        return offset, []


def parse_name_and_id(text: str) -> tuple[str | None, str | None]:
    """
    Parses full name and national ID (cédula) from student responses.
    Handles formats like:
    - [Carlos Rodríguez, 1020491823]
    - Carlos Rodríguez, 1020491823
    - Carlos Rodríguez - 1020491823
    - Carlos Rodríguez 1020491823
    """
    cleaned = text.strip().strip("[]()")
    
    # 1. Try comma, dash, semicolon, pipe separation
    for sep in [",", "-", ";", "|"]:
        if sep in cleaned:
            parts = [p.strip() for p in cleaned.split(sep) if p.strip()]
            if len(parts) >= 2:
                p0_digits = "".join(filter(str.isdigit, parts[0]))
                p1_digits = "".join(filter(str.isdigit, parts[1]))
                if len(p1_digits) >= 4 and len(p0_digits) < len(p1_digits):
                    return parts[0], p1_digits
                elif len(p0_digits) >= 4 and len(p1_digits) < len(p0_digits):
                    return parts[1], p0_digits
                else:
                    return parts[0], parts[1]

    # 2. Try regex separating letters and digits: "Carlos Rodriguez 1020491823"
    match = re.search(r"^([a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+)\s+([0-9A-Za-z\-]+)$", cleaned)
    if match:
        name_part = match.group(1).strip()
        id_part = match.group(2).strip()
        if len(name_part) >= 2 and len(id_part) >= 4:
            return name_part, id_part

    # 3. Find any numeric sequence of 4-12 digits
    digits = re.findall(r"\b\d{4,12}\b", cleaned)
    if digits:
        nat_id = digits[0]
        name_cand = cleaned.replace(nat_id, "").strip(" ,-;|[]()")
        if len(name_cand) >= 2:
            return name_cand, nat_id

    return None, None


async def run_telegram_poller():
    token = settings.TELEGRAM_BOT_TOKEN
    if not token or token == "your_telegram_bot_token_here":
        print("[ERROR] TELEGRAM_BOT_TOKEN is not configured in .env. Exiting worker.")
        sys.exit(1)

    print(f"[*] Initializing Vanguard Academy Telegram Polling Worker (Resilient Mode)...")
    await init_db()
    workflow = AcademyGraphWorkflow()
    offset = 0
    base_url = f"https://api.telegram.org/bot{token}"
    processed_update_ids = set()
    last_heartbeat = time.time()

    print("[OK] Telegram Worker is live! Resilient polling active...")

    while True:
        try:
            # Create a fresh client periodically or upon network reset to prevent stale connections
            async with httpx.AsyncClient(timeout=35.0) as client:
                consecutive_errors = 0
                while consecutive_errors < 10:
                    # Heartbeat log every 30 minutes
                    if time.time() - last_heartbeat > 1800:
                        logger.info("Telegram Polling Worker Heartbeat: Healthy and active.")
                        last_heartbeat = time.time()

                    try:
                        offset, updates = await poll_batch(client, base_url, offset)
                        consecutive_errors = 0
                    except (httpx.TimeoutException, httpx.NetworkError, httpx.ConnectError) as net_err:
                        consecutive_errors += 1
                        logger.warning(f"Telegram network exception (retrying in 5s): {net_err}")
                        await asyncio.sleep(5)
                        if consecutive_errors >= 5:
                            break  # Break inner loop to recycle client
                        continue

                    for update in updates:
                        update_id = update["update_id"]
                        if update_id in processed_update_ids:
                            continue
                        processed_update_ids.add(update_id)
                        if len(processed_update_ids) > 5000:
                            processed_update_ids.clear()

                        message = update.get("message")
                        if not message:
                            continue

                        text = message.get("text", "").strip()
                        chat_id = message.get("chat", {}).get("id")
                        if not text or not chat_id:
                            continue

                        str_chat_id = str(chat_id)
                        user_first_name = message.get("from", {}).get("first_name", "Usuario de Telegram")
                        print(f"\n[RECEIVED] Telegram from chat {chat_id} ({user_first_name}): '{text}'")

                        if text.startswith("/start") or text.lower() in ["/reset", "reiniciar", "menu"]:
                            USER_TELEGRAM_STATES.pop(str_chat_id, None)
                            welcome = (
                                "👋 **¡Bienvenido a Vanguard - Academia de Idiomas!**\n\n"
                                "Soy Vanguard Assistant, tu asesor académico virtual 24/7. Puedes consultarme sobre cursos de idiomas (Inglés, Francés, Alemán, Italiano, Portugués), horarios, tarifas en COP, sedes en Bogotá y Medellín, certificaciones y matrículas."
                            )
                            await send_telegram_message(chat_id=chat_id, text=welcome)
                            continue

                        user_flow = USER_TELEGRAM_STATES.get(str_chat_id)

                        # 1. State: AWAITING_RATING (or receiving 1-5 rating)
                        last_resolved_session = None
                        if text in ["1", "2", "3", "4", "5"]:
                            async with AsyncSessionLocal() as session:
                                stmt = (
                                    select(EscalatedSession)
                                    .where(
                                        EscalatedSession.telegram_chat_id == str_chat_id,
                                        EscalatedSession.status == "RESOLVED"
                                    )
                                    .order_by(EscalatedSession.resolved_at.desc())
                                )
                                res = await session.execute(stmt)
                                last_resolved_session = res.scalars().first()

                        if (user_flow and user_flow.get("state") == "AWAITING_RATING") or (last_resolved_session and text in ["1", "2", "3", "4", "5"]):
                            if text in ["1", "2", "3", "4", "5"]:
                                rating_num = int(text)
                                sess_id = (user_flow and user_flow.get("session_id")) or (last_resolved_session and last_resolved_session.session_id) or f"tg_{chat_id}"
                                nat_id = (user_flow and user_flow.get("national_id")) or (last_resolved_session and last_resolved_session.national_id) or f"TG-{chat_id}"

                                async with AsyncSessionLocal() as session:
                                    review = SessionReview(
                                        session_id=sess_id,
                                        national_id=nat_id,
                                        rating=rating_num,
                                        notes="Calificación enviada vía Telegram Bot",
                                    )
                                    session.add(review)
                                    await session.commit()

                                USER_TELEGRAM_STATES.pop(str_chat_id, None)
                                farewell = (
                                    f"⭐️ **¡Muchas gracias por calificar nuestro servicio con {rating_num}/5 estrellas!**\n\n"
                                    "Tu opinión es muy valiosa para Vanguard. Si deseas realizar otra consulta sobre nuestros cursos de idiomas, estaré aquí para ayudarte en cualquier momento. ¡Que tengas un excelente día!"
                                )
                                await send_telegram_message(chat_id=chat_id, text=farewell)
                                continue

                        # 2. State: AWAITING_STUDENT_DATA ([Nombre, Cédula])
                        if user_flow and user_flow.get("state") == "AWAITING_STUDENT_DATA":
                            full_name, national_id = parse_name_and_id(text)
                            if not full_name or not national_id:
                                prompt_retry = (
                                    "Por favor indícanos tu **Nombre Completo y Número de Cédula** separados por coma para abrir tu sesión.\n\n"
                                    "📌 *Ejemplo:* `Carlos Rodríguez, 1020491823`"
                                )
                                await send_telegram_message(chat_id=chat_id, text=prompt_retry)
                                continue

                            session_id = generate_deterministic_session_id(full_name, national_id)
                            initial_inquiry = user_flow.get("inquiry", "")

                            async with AsyncSessionLocal() as db:
                                # Update or create StudentProfile
                                stmt_p = select(StudentProfile).where(StudentProfile.national_id == national_id)
                                res_p = await db.execute(stmt_p)
                                profile = res_p.scalars().first()
                                if profile:
                                    profile.full_name = full_name
                                    profile.telegram_chat_id = str_chat_id
                                    profile.total_escalations_count += 1
                                    profile.last_interaction_at = datetime.now(timezone.utc)
                                else:
                                    profile = StudentProfile(
                                        national_id=national_id,
                                        full_name=full_name,
                                        channel="telegram",
                                        telegram_chat_id=str_chat_id,
                                        total_escalations_count=1,
                                        total_messages_sent=1,
                                    )
                                    db.add(profile)

                                # Create or update EscalatedSession
                                stmt_s = select(EscalatedSession).where(EscalatedSession.session_id == session_id)
                                res_s = await db.execute(stmt_s)
                                active_s = res_s.scalars().first()
                                if active_s:
                                    active_s.status = "WAITING"
                                    active_s.advisor_responded = False
                                    active_s.telegram_chat_id = str_chat_id
                                    active_s.initial_inquiry = initial_inquiry or active_s.initial_inquiry
                                    active_s.resolved_at = None
                                else:
                                    active_s = EscalatedSession(
                                        session_id=session_id,
                                        full_name=full_name,
                                        national_id=national_id,
                                        channel="telegram",
                                        telegram_chat_id=str_chat_id,
                                        initial_inquiry=initial_inquiry,
                                        status="WAITING",
                                        advisor_responded=False,
                                    )
                                    db.add(active_s)

                                # Add initial message from student
                                if initial_inquiry:
                                    db.add(LiveChatMessage(
                                        session_id=session_id,
                                        sender="user",
                                        sender_name=full_name,
                                        message=initial_inquiry,
                                    ))

                                # Add system connection message
                                db.add(LiveChatMessage(
                                    session_id=session_id,
                                    sender="system",
                                    sender_name="Sistema Vanguard",
                                    message=f"Sesión establecida para {full_name} ({national_id}) vía Telegram.",
                                ))
                                await db.commit()

                            USER_TELEGRAM_STATES[str_chat_id] = {
                                "state": "IN_HUMAN_SESSION",
                                "session_id": session_id,
                                "full_name": full_name,
                                "national_id": national_id,
                            }

                            confirm_msg = (
                                f"✅ **¡Gracias, {full_name}! Tu sesión con soporte humano ha sido iniciada.**\n\n"
                                f"🆔 *Sesión:* `{session_id}`\n"
                                "Un Asesor Académico de Vanguard atenderá tu consulta en este chat en breve. Por favor aguarda un momento."
                            )
                            await send_telegram_message(chat_id=chat_id, text=confirm_msg)
                            continue

                        # 3. State: IN_HUMAN_SESSION (Live Advisor Chat)
                        if user_flow and user_flow.get("state") == "IN_HUMAN_SESSION":
                            sess_id = user_flow.get("session_id")
                            f_name = user_flow.get("full_name", user_first_name)

                            async with AsyncSessionLocal() as db:
                                stmt_chk = select(EscalatedSession).where(EscalatedSession.session_id == sess_id)
                                res_chk = await db.execute(stmt_chk)
                                cur_sess = res_chk.scalars().first()

                                if cur_sess and cur_sess.status in ["WAITING", "IN_PROGRESS", "ACTIVE"]:
                                    # Forward message to advisor chat in Admin Portal
                                    db.add(LiveChatMessage(
                                        session_id=sess_id,
                                        sender="user",
                                        sender_name=f_name,
                                        message=text,
                                    ))
                                    await db.commit()
                                    print(f"[FORWARDED TO ADVISOR] Message from {f_name}: '{text}'")
                                    continue
                                else:
                                    # Session was resolved or closed by advisor
                                    USER_TELEGRAM_STATES[str_chat_id] = {
                                        "state": "AWAITING_RATING",
                                        "session_id": sess_id,
                                        "national_id": user_flow.get("national_id"),
                                    }

                        # 4. Standard AI Query Processing via LangGraph
                        state = await workflow.ainvoke(
                            query=text,
                            session_id=f"tg_{chat_id}",
                            channel="telegram",
                        )
                        reply = state.get("generation", "")
                        is_escalated = state.get("is_escalated", False) or state.get("status") == "ESCALATED_TO_HUMAN"

                        # Log to database
                        async with AsyncSessionLocal() as session:
                            token_metrics = state.get("token_metrics", {})
                            entry = TelemetryLog(
                                session_id=f"tg_{chat_id}",
                                channel="telegram",
                                user_query=text,
                                bot_response=reply,
                                status=state.get("status", "RESOLVED_BY_RAG"),
                                escalation_reason=state.get("escalation_reason"),
                                latency_ms=state.get("latency_ms", 0.0),
                                prompt_tokens=token_metrics.get("prompt_tokens", 0),
                                completion_tokens=token_metrics.get("completion_tokens", 0),
                                cost_usd=token_metrics.get("cost_usd", 0.0),
                            )
                            session.add(entry)
                            await session.commit()

                        if is_escalated:
                            USER_TELEGRAM_STATES[str_chat_id] = {
                                "state": "AWAITING_STUDENT_DATA",
                                "inquiry": text,
                            }
                            escalation_prompt = (
                                f"{reply}\n\n"
                                "👤 **Para conectarte con un Asesor Académico en tiempo real, por favor indícame tu [Nombre Completo, Cédula]:**\n"
                                "📌 *Ejemplo:* `Carlos Rodríguez, 1020491823`"
                            )
                            await send_telegram_message(chat_id=chat_id, text=escalation_prompt)
                            print(f"[ESCALATION INTAKE] Prompted user {chat_id} for [Nombre, Cédula]")
                        else:
                            await send_telegram_message(chat_id=chat_id, text=reply)
                            print(f"[REPLIED] Sent answer to chat {chat_id} ({state.get('status')})")

        except asyncio.CancelledError:
            break
        except Exception as e:
            logger.error(f"Telegram poller outer exception (auto-recovering in 5s): {e}", exc_info=True)
            await asyncio.sleep(5)


if __name__ == "__main__":
    asyncio.run(run_telegram_poller())
