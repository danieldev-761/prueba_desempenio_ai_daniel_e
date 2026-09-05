function getApiBaseUrl() {
  if (typeof window !== 'undefined') {
    const host = window.location.hostname;
    if (host !== 'localhost' && host !== '127.0.0.1') {
      return '/api/v1';
    }
  }
  return import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';
}

const API_BASE_URL = getApiBaseUrl();

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

export async function adminLogin(username, password) {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: username.trim(),
      password,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.detail || 'Usuario o contraseña incorrectos.');
  }

  return response.json();
}

function getAuthHeaders(adminKeyOrToken) {
  const headers = {
    'Content-Type': 'application/json',
  };
  if (adminKeyOrToken) {
    headers['Authorization'] = `Bearer ${adminKeyOrToken}`;
    headers['X-Admin-Key'] = adminKeyOrToken;
  }
  return headers;
}

export async function getProviderSettings(adminKey) {
  const response = await fetch(`${API_BASE_URL}/settings/providers`, {
    method: 'GET',
    headers: getAuthHeaders(adminKey),
  });

  if (!response.ok) {
    throw new Error('Error al cargar configuración de proveedores.');
  }

  return response.json();
}

export async function updateProviderSettings(adminKey, settingsPayload) {
  const response = await fetch(`${API_BASE_URL}/settings/providers`, {
    method: 'POST',
    headers: getAuthHeaders(adminKey),
    body: JSON.stringify(settingsPayload),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.detail || 'Error al actualizar configuración.');
  }

  return response.json();
}

export async function testProviderConnection(adminKey, provider, apiKey = null) {
  const response = await fetch(`${API_BASE_URL}/settings/providers/test`, {
    method: 'POST',
    headers: getAuthHeaders(adminKey),
    body: JSON.stringify({
      provider,
      api_key: apiKey || null,
    }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err.detail || 'Fallo al verificar proveedor.');
  }

  return response.json();
}

export async function getAdminMetrics(adminKey) {
  const response = await fetch(`${API_BASE_URL}/metrics`, {
    method: 'GET',
    headers: getAuthHeaders(adminKey),
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
    headers: getAuthHeaders(adminKey),
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
    headers: getAuthHeaders(adminKey),
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
    headers: getAuthHeaders(adminKey),
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
    headers: getAuthHeaders(adminKey),
  });
  if (!response.ok) throw new Error('Error al cargar perfiles CRM');
  return response.json();
}

export async function getCRMReviews(adminKey) {
  const response = await fetch(`${API_BASE_URL}/escalation/crm/reviews`, {
    headers: getAuthHeaders(adminKey),
  });
  if (!response.ok) throw new Error('Error al cargar reseñas CRM');
  return response.json();
}

export async function getCRMSummary(adminKey) {
  const response = await fetch(`${API_BASE_URL}/escalation/crm/summary`, {
    headers: getAuthHeaders(adminKey),
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
