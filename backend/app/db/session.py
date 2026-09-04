from pathlib import Path
from typing import AsyncGenerator
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession, async_sessionmaker
from sqlalchemy.orm import declarative_base
from app.core.config import settings
from app.core.logging import logger

Base = declarative_base()

# Ensure local data directory exists
if settings.DATABASE_URL.startswith("sqlite"):
    db_path = settings.DATABASE_URL.replace("sqlite+aiosqlite:///", "").replace("./", "")
    Path(db_path).parent.mkdir(parents=True, exist_ok=True)

engine = create_async_engine(
    settings.DATABASE_URL,
    echo=settings.DEBUG,
    future=True,
)

AsyncSessionLocal = async_sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False,
    autocommit=False,
    autoflush=False,
)


async def get_db_session() -> AsyncGenerator[AsyncSession, None]:
    async with AsyncSessionLocal() as session:
        try:
            yield session
            await session.commit()
        except Exception:
            await session.rollback()
            raise
        finally:
            await session.close()


async def init_db() -> None:
    """Creates database tables if they do not exist and seeds initial admin and settings."""
    import app.models  # noqa: F401 - Register all models with Base.metadata
    from sqlalchemy.future import select
    from app.models.admin_user import AdminUser, SystemSetting
    from app.core.security import get_password_hash

    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    logger.info("Relational database tables initialized.")

    # Seed default admin user and initial system settings
    async with AsyncSessionLocal() as session:
        try:
            admin_stmt = select(AdminUser).where(AdminUser.username == "admin")
            res = await session.execute(admin_stmt)
            existing_admin = res.scalars().first()
            if not existing_admin:
                default_password = settings.ADMIN_API_KEY if settings.ADMIN_API_KEY and settings.ADMIN_API_KEY != "admin" else "admin12345"
                new_admin = AdminUser(
                    username="admin",
                    password_hash=get_password_hash(default_password),
                    full_name="Vanguard Administrator",
                    is_active=True,
                )
                session.add(new_admin)
                logger.info(f"Default admin user seeded (username: 'admin').")

            # Seed LLM Provider settings if not present
            provider_stmt = select(SystemSetting).where(SystemSetting.key == "ACTIVE_LLM_PROVIDER")
            res_p = await session.execute(provider_stmt)
            if not res_p.scalars().first():
                session.add(SystemSetting(
                    key="ACTIVE_LLM_PROVIDER",
                    value=settings.LLM_PROVIDER or "gemini",
                    description="Active LLM provider (gemini, groq, openai)",
                    is_secret=False
                ))

            await session.commit()
        except Exception as e:
            logger.warning(f"Database seeding check warning: {e}")
            await session.rollback()

