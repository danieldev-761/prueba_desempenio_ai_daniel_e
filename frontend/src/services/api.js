const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';

export async function sendChatMessage(query, sessionId, channel = 'web') {
  const response = await fetch(`${API_BASE_URL}/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      session_id: sessionId,
      channel,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.detail || `Server error (${response.status})`);
  }

  return response.json();
}

export async function getAdminMetrics(adminKey) {
  const response = await fetch(`${API_BASE_URL}/metrics`, {
    method: 'GET',
    headers: {
      'X-Admin-Key': adminKey,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    if (response.status === 401 || response.status === 422) {
      throw new Error('Clave de Administrador inválida. Acceso Denegado.');
    }
    throw new Error(`Error al obtener métricas (${response.status})`);
  }

  return response.json();
}

export async function startEscalationSession(fullName, nationalId, initialInquiry = '', channel = 'web', telegramChatId = null) {
  const response = await fetch(`${API_BASE_URL}/escalation/start`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      full_name: fullName,
      national_id: nationalId,
      initial_inquiry: initialInquiry,
      channel,
      telegram_chat_id: telegramChatId,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.detail || 'Error al iniciar sesión con asesor');
  }

  return response.json();
}

export async function getEscalatedSessions(adminKey) {
  const response = await fetch(`${API_BASE_URL}/escalation/sessions`, {
    method: 'GET',
    headers: {
      'X-Admin-Key': adminKey,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('No autorizado para ver sesiones de escalación');
  }

  return response.json();
}

export async function getSessionMessages(sessionId) {
  const response = await fetch(`${API_BASE_URL}/escalation/sessions/${sessionId}/messages`);
  if (!response.ok) {
    throw new Error('Error al cargar mensajes');
  }
  return response.json();
}

export async function replyTelegramStudent(adminKey, telegramChatId, message, sessionId = null) {
  const response = await fetch(`${API_BASE_URL}/escalation/telegram/reply`, {
    method: 'POST',
    headers: {
      'X-Admin-Key': adminKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      telegram_chat_id: telegramChatId,
      message,
      session_id: sessionId,
    }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.detail || 'Error al enviar mensaje a Telegram');
  }

  return response.json();
}

export async function closeEscalationSession(adminKey, sessionId) {
  const response = await fetch(`${API_BASE_URL}/escalation/sessions/${sessionId}/close`, {
    method: 'POST',
    headers: {
      'X-Admin-Key': adminKey,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.detail || 'Error al finalizar la sesión');
  }

  return response.json();
}

export async function submitSessionReview(sessionId, rating, notes = '') {
  const response = await fetch(`${API_BASE_URL}/escalation/sessions/${sessionId}/review`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      rating: Number(rating),
      notes: notes.trim(),
    }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.detail || 'Error al enviar la calificación');
  }

  return response.json();
}

export async function getCRMProfiles(adminKey) {
  const response = await fetch(`${API_BASE_URL}/escalation/crm/profiles`, {
    headers: {
      'X-Admin-Key': adminKey,
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) throw new Error('Error al cargar perfiles CRM');
  return response.json();
}

export async function getCRMReviews(adminKey) {
  const response = await fetch(`${API_BASE_URL}/escalation/crm/reviews`, {
    headers: {
      'X-Admin-Key': adminKey,
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) throw new Error('Error al cargar reseñas CRM');
  return response.json();
}

export async function getCRMSummary(adminKey) {
  const response = await fetch(`${API_BASE_URL}/escalation/crm/summary`, {
    headers: {
      'X-Admin-Key': adminKey,
      'Content-Type': 'application/json',
    },
  });
  if (!response.ok) throw new Error('Error al cargar resumen CRM');
  return response.json();
}

export async function getSystemHealth() {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    return response.ok;
  } catch {
    return false;
  }
}

export function getWebSocketChatUrl(sessionId) {
  const wsProto = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
  // Default to localhost:8000 if in local dev
  const host = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1' 
    ? '127.0.0.1:8000' 
    : window.location.host;
  return `${wsProto}//${host}/api/v1/escalation/ws/chat/${sessionId}`;
}
