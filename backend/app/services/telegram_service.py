from typing import Optional, Union
import httpx
from app.core.config import settings
from app.core.logging import logger


async def send_telegram_message(
    chat_id: Union[int, str],
    text: str,
    token: Optional[str] = None,
) -> bool:
    bot_token = token or settings.TELEGRAM_BOT_TOKEN
    if not bot_token:
        logger.warning("TELEGRAM_BOT_TOKEN is not configured. Telegram message delivery skipped.")
        return False

    url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
    payload = {
        "chat_id": chat_id,
        "text": text,
        "parse_mode": "Markdown",
    }

    try:
        async with httpx.AsyncClient(timeout=10.0) as client:
            resp = await client.post(url, json=payload)
            if resp.status_code == 200:
                return True
            else:
                # If markdown parsing fails, fallback to plain text
                payload.pop("parse_mode", None)
                fallback_resp = await client.post(url, json=payload)
                if fallback_resp.status_code == 200:
                    return True
                logger.error(f"Telegram API error ({fallback_resp.status_code}): {fallback_resp.text}")
                return False
    except Exception as e:
        logger.error(f"Exception while sending Telegram message: {e}")
        return False
