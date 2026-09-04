import pytest
from unittest.mock import AsyncMock, patch, MagicMock
import httpx
from scripts.telegram_worker import poll_batch


@pytest.mark.asyncio
async def test_poll_batch_success():
    mock_client = AsyncMock()
    mock_response = MagicMock()
    mock_response.status_code = 200
    mock_response.json.return_value = {
        "ok": True,
        "result": [
            {"update_id": 101, "message": {"text": "hola", "chat": {"id": 123}}},
            {"update_id": 102, "message": {"text": "precios", "chat": {"id": 123}}},
        ]
    }
    mock_client.get.return_value = mock_response

    new_offset, updates = await poll_batch(mock_client, "https://api.telegram.org/bot123", 100)
    assert new_offset == 103
    assert len(updates) == 2


@pytest.mark.asyncio
async def test_poll_batch_409_conflict_handling():
    mock_client = AsyncMock()
    mock_response = MagicMock()
    mock_response.status_code = 409
    mock_response.text = "Conflict: terminated by other getUpdates request"
    mock_client.get.return_value = mock_response

    with patch("asyncio.sleep", new_callable=AsyncMock) as mock_sleep:
        new_offset, updates = await poll_batch(mock_client, "https://api.telegram.org/bot123", 100)
        assert new_offset == 100
        assert len(updates) == 0
        mock_sleep.assert_called_with(10)


@pytest.mark.asyncio
async def test_poll_batch_429_rate_limit_handling():
    mock_client = AsyncMock()
    mock_response = MagicMock()
    mock_response.status_code = 429
    mock_response.headers = {"Retry-After": "15"}
    mock_client.get.return_value = mock_response

    with patch("asyncio.sleep", new_callable=AsyncMock) as mock_sleep:
        new_offset, updates = await poll_batch(mock_client, "https://api.telegram.org/bot123", 100)
        assert new_offset == 100
        assert len(updates) == 0
        mock_sleep.assert_called_with(15)
