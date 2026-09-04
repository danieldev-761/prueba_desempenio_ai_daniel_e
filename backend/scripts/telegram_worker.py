import asyncio
import sys
import time
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

                        if text.startswith("/start"):
                            USER_TELEGRAM_STATES.pop(str_chat_id, None)
                            welcome = (
                                "👋 **¡Bienvenido a Vanguard - Academia de Idiomas!**\n\n"
                                "Soy Vanguard Assistant, tu asesor académico virtual 24/7. Puedes consultarme con mucho gusto sobre cursos de idiomas (Inglés, Francés, Alemán, Italiano, Portugués), horarios, tarifas en COP, sedes en Bogotá y Medellín, certificaciones y proceso de matrícula."
                            )
                            await send_telegram_message(chat_id=chat_id, text=welcome)
                            continue

                        # 1. Check if user is in AWAITING_RATING state (Post-Session Review)
                        user_flow = USER_TELEGRAM_STATES.get(str_chat_id)

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

                        # 2. Process query via LangGraph RAG
                        state = await workflow.ainvoke(
                            query=text,
                            session_id=f"tg_{chat_id}",
                            channel="telegram",
                        )
                        reply = state.get("generation", "")

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
            logger.error(f"Telegram poller outer exception (auto-recovering in 5s): {e}", exc_info=True)
            await asyncio.sleep(5)


if __name__ == "__main__":
    asyncio.run(run_telegram_poller())
