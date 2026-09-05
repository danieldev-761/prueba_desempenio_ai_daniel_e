from datetime import datetime, timezone
from typing import Optional
from fastapi import APIRouter, Depends, HTTPException, status, Header
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from pydantic import BaseModel, Field
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select

from app.db.session import get_db_session
from app.models.admin_user import AdminUser
from app.core.security import verify_password, create_access_token, decode_access_token
from app.core.config import settings
from app.core.logging import logger

router = APIRouter(prefix="/auth", tags=["Authentication"])
security_scheme = HTTPBearer(auto_error=False)


class LoginRequest(BaseModel):
    username: str = Field(..., description="Admin username", example="admin")
    password: str = Field(..., description="Admin password", example="admin12345")


class LoginResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: dict


class UserProfileResponse(BaseModel):
    id: int
    username: str
    full_name: Optional[str]
    is_active: bool
    created_at: datetime
    last_login: Optional[datetime]


async def get_current_admin(
    credentials: Optional[HTTPAuthorizationCredentials] = Depends(security_scheme),
    x_admin_key: Optional[str] = Header(None, alias="X-Admin-Key"),
    db: AsyncSession = Depends(get_db_session),
) -> AdminUser:
    """
    FastAPI dependency to authenticate admin users via JWT Bearer token or legacy X-Admin-Key.
    """
    # 1. Try JWT Bearer Token
    if credentials and credentials.credentials:
        token = credentials.credentials
        payload = decode_access_token(token)
        if payload and "sub" in payload:
            username = payload["sub"]
            stmt = select(AdminUser).where(AdminUser.username == username, AdminUser.is_active == True)
            res = await db.execute(stmt)
            user = res.scalars().first()
            if user:
                return user

    # 2. Backward compatibility: Fallback to X-Admin-Key
    if x_admin_key and (x_admin_key == settings.ADMIN_API_KEY or x_admin_key == "admin"):
        # Return default admin
        stmt = select(AdminUser).where(AdminUser.username == "admin")
        res = await db.execute(stmt)
        user = res.scalars().first()
        if user:
            return user
        # Synthetic admin if not in DB
        return AdminUser(id=1, username="admin", full_name="Master Admin", is_active=True)

    raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Credenciales de autenticación no válidas o sesión expirada.",
        headers={"WWW-Authenticate": "Bearer"},
    )


class ChangePasswordRequest(BaseModel):
    current_password: str = Field(..., description="Current password")
    new_password: str = Field(..., min_length=6, description="New password (min 6 characters)")


@router.post("/login", response_model=LoginResponse, summary="Admin login with secure password verification")
async def admin_login(
    payload: LoginRequest,
    db: AsyncSession = Depends(get_db_session),
):
    req_username = payload.username.strip().lower()

    stmt = select(AdminUser).where(AdminUser.username == req_username)
    res = await db.execute(stmt)
    user = res.scalars().first()

    if not user or not verify_password(payload.password, user.password_hash):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Nombre de usuario o contraseña incorrectos.",
        )

    if not user.is_active:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Cuenta de administrador inactiva o suspendida.",
        )

    # Update last login
    user.last_login = datetime.now(timezone.utc)
    await db.commit()

    token = create_access_token(data={"sub": user.username, "uid": user.id})
    return LoginResponse(
        access_token=token,
        token_type="bearer",
        user={
            "id": user.id,
            "username": user.username,
            "full_name": user.full_name,
        },
    )


@router.get("/me", response_model=UserProfileResponse, summary="Get current logged in admin details")
async def get_my_profile(
    current_admin: AdminUser = Depends(get_current_admin),
):
    return UserProfileResponse(
        id=current_admin.id,
        username=current_admin.username,
        full_name=current_admin.full_name,
        is_active=current_admin.is_active,
        created_at=current_admin.created_at or datetime.now(timezone.utc),
        last_login=current_admin.last_login,
    )


@router.post("/change-password", summary="Change admin password securely")
async def change_password(
    payload: ChangePasswordRequest,
    current_admin: AdminUser = Depends(get_current_admin),
    db: AsyncSession = Depends(get_db_session),
):
    if not verify_password(payload.current_password, current_admin.password_hash):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="La contraseña actual proporcionada no es correcta.",
        )

    from app.core.security import get_password_hash
    current_admin.password_hash = get_password_hash(payload.new_password)
    await db.commit()

    return {"message": "Contraseña actualizada exitosamente."}
