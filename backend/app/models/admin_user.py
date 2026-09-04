from datetime import datetime, timezone
from sqlalchemy import Column, Integer, String, Text, Boolean, DateTime
from app.db.session import Base


class AdminUser(Base):
    """
    Admin user model for secure authentication with hashed passwords.
    """
    __tablename__ = "admin_users"

    id = Column(Integer, primary_key=True, autoincrement=True, index=True)
    username = Column(String(64), unique=True, nullable=False, index=True)
    password_hash = Column(String(256), nullable=False)
    full_name = Column(String(128), nullable=True, default="Vanguard Administrator")
    is_active = Column(Boolean, default=True, nullable=False)
    created_at = Column(DateTime, nullable=False, default=lambda: datetime.now(timezone.utc))
    last_login = Column(DateTime, nullable=True)

    def __repr__(self) -> str:
        return f"<AdminUser(id={self.id}, username='{self.username}', is_active={self.is_active})>"


class SystemSetting(Base):
    """
    Dynamic system configuration key-value storage (API keys, active provider, etc.).
    """
    __tablename__ = "system_settings"

    key = Column(String(64), primary_key=True, index=True)
    value = Column(Text, nullable=False)
    description = Column(String(256), nullable=True)
    is_secret = Column(Boolean, default=False, nullable=False)
    updated_at = Column(DateTime, nullable=False, default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc))

    def __repr__(self) -> str:
        return f"<SystemSetting(key='{self.key}', is_secret={self.is_secret})>"
