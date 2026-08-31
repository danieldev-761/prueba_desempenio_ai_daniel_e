import pytest
from unittest.mock import patch, AsyncMock
from httpx import AsyncClient, ASGITransport
from app.main import app


@pytest.mark.asyncio
async def test_telegram_webhook_empty_payload():
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as ac:
        response = await ac.post("/api/v1/telegram/webhook", json={})
        assert response.status_code == 200
        data = response.json()
        assert data["ok"] is True


@pytest.mark.asyncio
async def test_telegram_webhook_start_command():
    payload = {
        "update_id": 10001,
        "message": {
            "message_id": 1,
            "from": {"id": 99887766, "first_name": "Estudiante"},
            "chat": {"id": 99887766, "type": "private"},
            "text": "/start",
        },
    }

    with patch("app.api.v1.endpoints.telegram.send_telegram_message", new_callable=AsyncMock) as mock_send:
        mock_send.return_value = True
        async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as ac:
            response = await ac.post("/api/v1/telegram/webhook", json=payload)
            assert response.status_code == 200
            assert response.json()["ok"] is True
            mock_send.assert_called_once()
            # Verify Spanish welcome text in sent message
            called_text = mock_send.call_args.kwargs.get("text") or mock_send.call_args.args[1]
            assert "Academia de Idiomas Colombiana" in called_text
