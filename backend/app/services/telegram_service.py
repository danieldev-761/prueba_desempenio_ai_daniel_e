from typing import Optional, Union
import re
import httpx
from app.core.config import settings
from app.core.logging import logger


def clean_telegram_text(text: str) -> str:
    """
    Sanitizes text for Telegram delivery by removing raw asterisks.
    - Converts bullet lines (* Item or - Item) into clean bullet characters (• Item).
    - Removes bold/italic asterisks (**word** or *word*) leaving clean text.
    - Strips any remaining stray asterisks.
    """
    if not text:
        return ""
    # Convert bullet points: lines starting with '* ' or '- ' into '• '
    cleaned = re.sub(r"(?m)^\s*[\*\-]\s+", "• ", text)
    # Remove all asterisks
    cleaned = cleaned.replace("**", "").replace("*", "")
    return cleaned.strip()


async def send_telegram_message(
    chat_id: Union[int, str],
    text: str,
    token: Optional[str] = None,
) -> bool:
    bot_token = token or settings.TELEGRAM_BOT_TOKEN
    if not bot_token:
        logger.warning("TELEGRAM_BOT_TOKEN is not configured. Telegram message delivery skipped.")
        return False

    cleaned_text = clean_telegram_text(text)
    url = f"https://api.telegram.org/bot{bot_token}/sendMessage"
    payload = {
        "chat_id": chat_id,
        "text": cleaned_text,
    }

    try:
        async with httpx.AsyncClient(timeout=10.0) as client:
            resp = await client.post(url, json=payload)
            if resp.status_code == 200:
                return True
            logger.error(f"Telegram API error ({resp.status_code}): {resp.text}")
            return False
    except Exception as e:
        logger.error(f"Exception while sending Telegram message: {e}")
        return False
