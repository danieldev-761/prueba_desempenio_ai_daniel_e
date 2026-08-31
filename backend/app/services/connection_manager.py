import json
from typing import Dict, Set
from fastapi import WebSocket
from app.core.logging import get_logger

logger = get_logger("websocket_manager")


class ConnectionManager:
    """
    Manages active WebSocket connections grouped by session_id.
    Broadcasts live messages between students and connected advisors.
    """

    def __init__(self):
        # Map session_id -> Set of active WebSockets (student and/or admin)
        self.active_connections: Dict[str, Set[WebSocket]] = {}
        # Set of global admin sockets listening to all sessions
        self.admin_connections: Set[WebSocket] = set()

    async def connect(self, websocket: WebSocket, session_id: str, is_admin: bool = False):
        await websocket.accept()
        if session_id not in self.active_connections:
            self.active_connections[session_id] = set()
        self.active_connections[session_id].add(websocket)
        if is_admin:
            self.admin_connections.add(websocket)
        logger.info(f"WebSocket connected for session '{session_id}' (admin={is_admin}). Active in session: {len(self.active_connections[session_id])}")

    def disconnect(self, websocket: WebSocket, session_id: str):
        if session_id in self.active_connections:
            self.active_connections[session_id].discard(websocket)
            if not self.active_connections[session_id]:
                del self.active_connections[session_id]
        self.admin_connections.discard(websocket)
        logger.info(f"WebSocket disconnected from session '{session_id}'")

    async def broadcast_to_session(self, session_id: str, message_data: dict):
        """Sends a JSON message to all clients connected to this specific session."""
        payload = json.dumps(message_data)
        if session_id in self.active_connections:
            dead_sockets = set()
            for connection in self.active_connections[session_id]:
                try:
                    await connection.send_text(payload)
                except Exception as e:
                    logger.warning(f"Error sending message to socket in session {session_id}: {e}")
                    dead_sockets.add(connection)
            for dead in dead_sockets:
                self.active_connections[session_id].discard(dead)


manager = ConnectionManager()
