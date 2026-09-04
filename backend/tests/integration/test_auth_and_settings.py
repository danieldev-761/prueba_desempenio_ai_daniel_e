import pytest
import pytest_asyncio
from httpx import AsyncClient, ASGITransport
from app.main import app
from app.db.session import init_db
from app.core.config import settings


@pytest_asyncio.fixture(autouse=True)
async def init_db_fixture():
    await init_db()


@pytest.mark.asyncio
async def test_admin_login_invalid_password():
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as ac:
        response = await ac.post("/api/v1/auth/login", json={"username": "admin", "password": "wrongpassword"})
        assert response.status_code == 401


@pytest.mark.asyncio
async def test_admin_login_success():
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as ac:
        # Default password is admin123 or ADMIN_API_KEY
        password = settings.ADMIN_API_KEY if settings.ADMIN_API_KEY and settings.ADMIN_API_KEY != "admin" else "admin12345"
        response = await ac.post("/api/v1/auth/login", json={"username": "admin", "password": password})
        assert response.status_code == 200
        data = response.json()
        assert "access_token" in data
        assert data["token_type"] == "bearer"
        assert data["user"]["username"] == "admin"


@pytest.mark.asyncio
async def test_settings_provider_switching_with_jwt():
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as ac:
        password = settings.ADMIN_API_KEY if settings.ADMIN_API_KEY and settings.ADMIN_API_KEY != "admin" else "admin12345"
        login_res = await ac.post("/api/v1/auth/login", json={"username": "admin", "password": password})
        token = login_res.json()["access_token"]
        headers = {"Authorization": f"Bearer {token}"}

        # GET providers
        get_res = await ac.get("/api/v1/settings/providers", headers=headers)
        assert get_res.status_code == 200
        data = get_res.json()
        assert "active_provider" in data
        assert "groq" in data["providers"]
        assert "gemini" in data["providers"]

        # POST update provider
        update_res = await ac.post(
            "/api/v1/settings/providers",
            headers=headers,
            json={
                "active_provider": "groq",
                "groq_api_key": "gsk_test1234567890abcdef",
            },
        )
        assert update_res.status_code == 200
        assert update_res.json()["active_provider"] == "groq"


@pytest.mark.asyncio
async def test_conversations_endpoint():
    async with AsyncClient(transport=ASGITransport(app=app), base_url="http://test") as ac:
        response = await ac.get("/api/v1/conversations")
        assert response.status_code == 200
        assert isinstance(response.json(), list)
