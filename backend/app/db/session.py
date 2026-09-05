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
            admin_user_seed = settings.ADMIN_DEFAULT_USER.strip()
            admin_stmt = select(AdminUser).where(AdminUser.username == admin_user_seed)
            res = await session.execute(admin_stmt)
            existing_admin = res.scalars().first()
            if not existing_admin:
                new_admin = AdminUser(
                    username=admin_user_seed,
                    password_hash=get_password_hash(settings.ADMIN_DEFAULT_PASSWORD),
                    full_name="Vanguard Administrator",
                    is_active=True,
                )
                session.add(new_admin)
                logger.info(f"Default admin user '{admin_user_seed}' seeded into database from environment settings.")
            elif settings.ADMIN_FORCE_PASSWORD_SYNC:
                existing_admin.password_hash = get_password_hash(settings.ADMIN_DEFAULT_PASSWORD)
                existing_admin.is_active = True
                logger.info(f"Admin password hash synced for '{admin_user_seed}' via ADMIN_FORCE_PASSWORD_SYNC flag.")

            # Seed LLM Provider settings if not present
            provider_stmt = select(SystemSetting).where(SystemSetting.key == "ACTIVE_LLM_PROVIDER")
            res_p = await session.execute(provider_stmt)
            prov_setting = res_p.scalars().first()
            if not prov_setting:
                session.add(SystemSetting(
                    key="ACTIVE_LLM_PROVIDER",
                    value="gemini",
                    description="Active LLM provider (gemini, groq, openai)",
                    is_secret=False
                ))
            elif prov_setting.value != "gemini" and bool(settings.GEMINI_API_KEY or settings.GOOGLE_API_KEY):
                prov_setting.value = "gemini"

            # Check and seed GEMINI_API_KEY if present in environment
            gemini_key = settings.GEMINI_API_KEY or settings.GOOGLE_API_KEY
            if gemini_key:
                gkey_stmt = select(SystemSetting).where(SystemSetting.key == "GEMINI_API_KEY")
                res_g = await session.execute(gkey_stmt)
                if not res_g.scalars().first():
                    session.add(SystemSetting(
                        key="GEMINI_API_KEY",
                        value=gemini_key,
                        description="Google Gemini API Key from environment",
                        is_secret=True
                    ))

            await session.commit()
        except Exception as e:
            logger.warning(f"Database seeding check warning: {e}")
            await session.rollback()

