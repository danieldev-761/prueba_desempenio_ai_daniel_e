import asyncio
import sys
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


# In-memory dictionary tracking Telegram conversational states:
# chat_id -> {"state": "AWAITING_ID" | "AWAITING_RATING", "pending_query": "...", "session_id": "...", "national_id": "..."}
USER_TELEGRAM_STATES = {}


async def run_telegram_poller():
    token = settings.TELEGRAM_BOT_TOKEN
    if not token or token == "your_telegram_bot_token_here":
        print("[ERROR] TELEGRAM_BOT_TOKEN is not configured in .env. Exiting worker.")
        sys.exit(1)

    print(f"[*] Initializing Colombian Language Academy Telegram Polling Worker...")
    await init_db()
    workflow = AcademyGraphWorkflow()
    offset = 0
    base_url = f"https://api.telegram.org/bot{token}"

    print("[OK] Telegram Worker is live! Waiting for student messages...")

    async with httpx.AsyncClient(timeout=35.0) as client:
        while True:
            try:
                resp = await client.get(f"{base_url}/getUpdates", params={"offset": offset, "timeout": 30})
                if resp.status_code != 200:
                    await asyncio.sleep(5)
                    continue

                data = resp.json()
                for update in data.get("result", []):
                    offset = update["update_id"] + 1
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

                    if text.startswith("/start"):
                        USER_TELEGRAM_STATES.pop(str_chat_id, None)
                        welcome = (
                            "👋 **¡Bienvenido a la Academia de Idiomas Colombiana!**\n\n"
                            "Soy tu asesor académico virtual 24/7. Puedes consultarme con mucho gusto sobre cursos de idiomas (Inglés, Francés, Alemán, Italiano, Portugués), horarios, tarifas en COP, sedes en Bogotá y Medellín, certificaciones y proceso de matrícula.\n"
                            "Si en algún momento requieres atención personalizada, te transferiré con un asesor humano."
                        )
                        await send_telegram_message(chat_id=chat_id, text=welcome)
                        continue

                    # 1. Check if user is in AWAITING_RATING state (Post-Session Review)
                    user_flow = USER_TELEGRAM_STATES.get(str_chat_id)

                    # Also check DB if user has a recently resolved session that lacks a review
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
                                    notes="Submitted via Telegram Bot",
                                )
                                session.add(review)
                                await session.commit()

                            USER_TELEGRAM_STATES.pop(str_chat_id, None)
                            await send_telegram_message(
                                chat_id=chat_id,
                                text=f"⭐️ ¡Muchas gracias por calificar nuestro servicio con {rating_num}/5 estrellas! Tu opinión nos ayuda a mejorar continuamente."
                            )
                            continue
                        elif user_flow and user_flow.get("state") == "AWAITING_RATING":
                            await send_telegram_message(
                                chat_id=chat_id,
                                text="Por favor ingresa un número del 1 al 5 para registrar tu calificación de la asesoría (ejemplo: 5)."
                            )
                            continue

                    # 2. Check if user is in AWAITING_ID state (Collecting Name and National ID)
                    if user_flow and user_flow.get("state") == "AWAITING_ID":
                        # Expected format: "Full Name, National ID" or "Full Name - National ID"
                        raw_parts = [p.strip() for p in text.replace("-", ",").split(",") if p.strip()]
                        if len(raw_parts) >= 2 and any(char.isdigit() for char in raw_parts[-1]):
                            full_name = " ".join(raw_parts[:-1])
                            national_id = raw_parts[-1]
                            initial_query = user_flow.get("pending_query", "Consulta remitida desde Telegram")

                            # Generate deterministic session ID: [Name]_[Last4Digits]
                            session_id = generate_deterministic_session_id(full_name, national_id)

                            async with AsyncSessionLocal() as session:
                                # Create/Update CRM Profile
                                stmt_prof = select(StudentProfile).where(StudentProfile.national_id == national_id)
                                res_prof = await session.execute(stmt_prof)
                                profile = res_prof.scalars().first()
                                if profile:
                                    profile.full_name = full_name
                                    profile.telegram_chat_id = str_chat_id
                                    profile.total_escalations_count += 1
                                else:
                                    profile = StudentProfile(
                                        national_id=national_id,
                                        full_name=full_name,
                                        channel="telegram",
                                        telegram_chat_id=str_chat_id,
                                        total_escalations_count=1,
                                    )
                                    session.add(profile)

                                # Create or activate EscalatedSession
                                stmt_sess = select(EscalatedSession).where(EscalatedSession.session_id == session_id)
                                res_sess = await session.execute(stmt_sess)
                                sess_rec = res_sess.scalars().first()
                                if not sess_rec:
                                    sess_rec = EscalatedSession(
                                        session_id=session_id,
                                        full_name=full_name,
                                        national_id=national_id,
                                        channel="telegram",
                                        telegram_chat_id=str_chat_id,
                                        initial_inquiry=initial_query,
                                        status="WAITING",
                                        advisor_responded=False,
                                    )
                                    session.add(sess_rec)
                                else:
                                    sess_rec.status = "WAITING"
                                    sess_rec.advisor_responded = False
                                    sess_rec.initial_inquiry = initial_query
                                    sess_rec.telegram_chat_id = str_chat_id

                                # Add initial user inquiry message
                                user_msg = LiveChatMessage(
                                    session_id=session_id,
                                    sender="user",
                                    sender_name=full_name,
                                    message=initial_query,
                                )
                                session.add(user_msg)

                                sys_msg = LiveChatMessage(
                                    session_id=session_id,
                                    sender="system",
                                    sender_name="Sistema de la Academia",
                                    message=f"Sesión establecida para {full_name} ({national_id}). Canal: Telegram.",
                                )
                                session.add(sys_msg)
                                await session.commit()

                            USER_TELEGRAM_STATES.pop(str_chat_id, None)
                            confirm_msg = (
                                f"✅ **Datos registrados con éxito.**\n\n"
                                f"👤 **Estudiante:** {full_name}\n"
                                f"🆔 **Sesión:** `{session_id}`\n\n"
                                f"Has sido transferido a la **Mesa de Asesoría Académica en Vivo**. El asesor responderá tus mensajes directamente en este chat."
                            )
                            await send_telegram_message(chat_id=chat_id, text=confirm_msg)
                            continue
                        else:
                            await send_telegram_message(
                                chat_id=chat_id,
                                text="⚠️ Por favor ingresa tus datos en el formato: `Nombre Completo, Cédula`\nEjemplo: `Carlos Rodríguez, 1020491823`"
                            )
                            continue

                    # 3. Check if session is already in active escalation with an advisor
                    async with AsyncSessionLocal() as session:
                        stmt = select(EscalatedSession).where(
                            EscalatedSession.telegram_chat_id == str_chat_id,
                            EscalatedSession.status.in_(["WAITING", "ACTIVE"])
                        )
                        res = await session.execute(stmt)
                        active_escalation = res.scalars().first()

                    if active_escalation:
                        # Forward user message directly to live chat messages for the human advisor
                        async with AsyncSessionLocal() as session:
                            user_msg = LiveChatMessage(
                                session_id=active_escalation.session_id,
                                sender="user",
                                sender_name=active_escalation.full_name,
                                message=text,
                            )
                            session.add(user_msg)

                            # Update CRM message count
                            stmt_prof = select(StudentProfile).where(StudentProfile.national_id == active_escalation.national_id)
                            res_prof = await session.execute(stmt_prof)
                            prof = res_prof.scalars().first()
                            if prof:
                                prof.total_messages_sent += 1

                            await session.commit()

                        print(f"[ESCALATED CHAT] Forwarded message from {active_escalation.full_name} ({chat_id}) to Admin Desk ({active_escalation.session_id})")
                        continue

                    # 4. Otherwise, process query via LangGraph RAG
                    state = await workflow.ainvoke(
                        query=text,
                        session_id=f"tg_{chat_id}",
                        channel="telegram",
                    )
                    reply = state.get("generation", "")
                    is_escalated = state.get("is_escalated", False) or state.get("status") == "ESCALATED_TO_HUMAN"

                    # 5. If RAG escalated to human, prompt user for Full Name + National ID
                    if is_escalated:
                        USER_TELEGRAM_STATES[str_chat_id] = {
                            "state": "AWAITING_ID",
                            "pending_query": text,
                        }
                        id_prompt = (
                            f"{reply}\n\n"
                            "🤝 **Transferencia a Asesor Académico:**\n"
                            "Para conectarte con un asesor en vivo, por favor responde a este mensaje con tu **Nombre Completo y Número de Documento/Cédula** separados por coma.\n\n"
                            "📝 *Ejemplo:* `Carlos Rodríguez, 1020491823`"
                        )
                        reply = id_prompt

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

                    await send_telegram_message(chat_id=chat_id, text=reply)
                    print(f"[REPLIED] Sent answer to chat {chat_id} ({state.get('status')})")

            except asyncio.CancelledError:
                break
            except Exception as e:
                logger.error(f"Telegram polling loop error: {e}")
                await asyncio.sleep(3)


if __name__ == "__main__":
    asyncio.run(run_telegram_poller())
