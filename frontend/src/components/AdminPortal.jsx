import React, { useState, useEffect, useRef } from 'react';
import { 
  FaShieldAlt, FaChartBar, FaKey, FaComments, FaSignOutAlt, 
  FaSync, FaCheckCircle, FaExclamationTriangle, FaClock, 
  FaDollarSign, FaBolt, FaLayerGroup, FaEye, FaLock, FaUser,
  FaGoogle, FaRobot, FaStar, FaUserCheck, FaPaperPlane, FaTelegramPlane,
  FaArrowLeft, FaCheck
} from 'react-icons/fa';
import { 
  adminLogin, getAdminMetrics, getProviderSettings, 
  updateProviderSettings, getEscalatedSessions,
  getSessionMessages, replyTelegramStudent, closeEscalationSession,
  getCRMProfiles, getCRMReviews, getCRMSummary, getWebSocketChatUrl,
  testProviderConnection
} from '../services/api';

export default function AdminPortal({ onNavigateToLanding, onNavigateToChat }) {
  const [token, setToken] = useState(() => localStorage.getItem('vanguard_admin_jwt') || '');
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem('vanguard_admin_user');
    return saved ? JSON.parse(saved) : null;
  });

  // Login form state
  const [loginUsername, setLoginUsername] = useState('admin');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Active portal tab: 'escalations' | 'metrics' | 'crm' | 'settings'
  const [activeTab, setActiveTab] = useState('escalations');

  // Escalated sessions state
  const [escalatedSessions, setEscalatedSessions] = useState([]);
  const [sessionsLoading, setSessionsLoading] = useState(false);
  const [selectedSession, setSelectedSession] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);
  const [replyText, setReplyText] = useState('');
  const [isSendingReply, setIsSendingReply] = useState(false);
  const [isCloseModalOpen, setIsCloseModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [closeError, setCloseError] = useState('');
  const wsRef = useRef(null);
  const messagesEndRef = useRef(null);

  // Metrics state
  const [metrics, setMetrics] = useState(null);
  const [metricsLoading, setMetricsLoading] = useState(false);

  // CRM state
  const [crmProfiles, setCrmProfiles] = useState([]);
  const [crmReviews, setCrmReviews] = useState([]);
  const [crmSummary, setCrmSummary] = useState(null);
  const [crmLoading, setCrmLoading] = useState(false);

  // Provider settings state
  const [providerSettings, setProviderSettings] = useState(null);
  const [activeProvider, setActiveProvider] = useState('gemini');
  const [geminiKeyInput, setGeminiKeyInput] = useState('');
  const [groqKeyInput, setGroqKeyInput] = useState('');
  const [openaiKeyInput, setOpenaiKeyInput] = useState('');
  const [settingsFeedback, setSettingsFeedback] = useState({ type: '', text: '' });
  const [savingSettings, setSavingSettings] = useState(false);
  const [testingProvider, setTestingProvider] = useState(null);
  const [testResults, setTestResults] = useState({});

  const handleTestProvider = async (providerId, customKey) => {
    setTestingProvider(providerId);
    try {
      const res = await testProviderConnection(token, providerId, customKey || null);
      setTestResults((prev) => ({
        ...prev,
        [providerId]: {
          status: res.status, // 'verified' | 'error' | 'not_configured'
          message: res.message,
        },
      }));
    } catch (err) {
      setTestResults((prev) => ({
        ...prev,
        [providerId]: {
          status: 'error',
          message: err.message || 'Fallo de conexión.',
        },
      }));
    } finally {
      setTestingProvider(null);
    }
  };

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError('');
    setIsLoggingIn(true);
    try {
      const data = await adminLogin(loginUsername, loginPassword);
      setToken(data.access_token);
      setCurrentUser(data.user);
      localStorage.setItem('vanguard_admin_jwt', data.access_token);
      localStorage.setItem('vanguard_admin_user', JSON.stringify(data.user));
    } catch (err) {
      setLoginError(err.message || 'Credenciales inválidas.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = () => {
    setToken('');
    setCurrentUser(null);
    localStorage.removeItem('vanguard_admin_jwt');
    localStorage.removeItem('vanguard_admin_user');
  };

  // Load Escalated Sessions
  const loadEscalations = async () => {
    if (!token) return;
    setSessionsLoading(true);
    try {
      const data = await getEscalatedSessions(token);
      setEscalatedSessions(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Error loading escalated sessions:', err);
    } finally {
      setSessionsLoading(false);
    }
  };

  // Load Metrics
  const loadMetrics = async () => {
    if (!token) return;
    setMetricsLoading(true);
    try {
      const data = await getAdminMetrics(token);
      setMetrics(data);
    } catch (err) {
      console.error('Error loading metrics:', err);
    } finally {
      setMetricsLoading(false);
    }
  };

  // Load CRM data
  const loadCRM = async () => {
    if (!token) return;
    setCrmLoading(true);
    try {
      const [profiles, reviews, summary] = await Promise.all([
        getCRMProfiles(token).catch(() => []),
        getCRMReviews(token).catch(() => []),
        getCRMSummary(token).catch(() => null),
      ]);
      setCrmProfiles(profiles);
      setCrmReviews(reviews);
      setCrmSummary(summary);
    } catch (err) {
      console.error('Error loading CRM:', err);
    } finally {
      setCrmLoading(false);
    }
  };

  // Load Provider Settings
  const loadSettings = async () => {
    if (!token) return;
    try {
      const data = await getProviderSettings(token);
      setProviderSettings(data);
      if (data.active_provider) setActiveProvider(data.active_provider);
    } catch (err) {
      console.error('Error loading provider settings:', err);
    }
  };

  // Tab switching effect
  useEffect(() => {
    if (!token) return;
    if (activeTab === 'escalations') loadEscalations();
    if (activeTab === 'metrics') loadMetrics();
    if (activeTab === 'crm') loadCRM();
    if (activeTab === 'settings') loadSettings();
  }, [token, activeTab]);

  // Connect WebSocket when an escalated session is selected
  useEffect(() => {
    if (!selectedSession) {
      if (wsRef.current) wsRef.current.close();
      return;
    }

    async function loadHistory() {
      try {
        const history = await getSessionMessages(selectedSession.session_id);
        setChatMessages(history);
      } catch (err) {
        console.error('Failed to load session history:', err);
      }
    }
    loadHistory();

    const wsUrl = getWebSocketChatUrl(selectedSession.session_id);
    const ws = new WebSocket(wsUrl);
    wsRef.current = ws;

    ws.onmessage = (event) => {
      try {
        const msg = JSON.parse(event.data);
        setChatMessages((prev) => {
          if (msg.id && prev.some((m) => m.id === msg.id)) return prev;
          const isDup = prev.some(
            (m) => m.sender === msg.sender && m.message === msg.message && Math.abs(new Date(m.timestamp || Date.now()) - new Date(msg.timestamp || Date.now())) < 4000
          );
          if (isDup) return prev;
          return [...prev, msg];
        });
      } catch (err) {
        console.error('WS parse error:', err);
      }
    };

    return () => {
      if (ws.readyState === WebSocket.OPEN) ws.close();
    };
  }, [selectedSession]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  // Handle Send Live Advisor Message
  const handleSendAdvisorMessage = async (e) => {
    e.preventDefault();
    if (!replyText.trim() || !selectedSession) return;
    setIsSendingReply(true);

    const text = replyText.trim();
    setReplyText('');

    if (selectedSession.channel === 'telegram' && selectedSession.telegram_chat_id) {
      try {
        await replyTelegramStudent(token, selectedSession.telegram_chat_id, text, selectedSession.session_id);
        setChatMessages((prev) => [
          ...prev,
          {
            id: `admin_${Date.now()}`,
            session_id: selectedSession.session_id,
            sender: 'admin',
            sender_name: currentUser?.full_name || 'Asesor Académico',
            message: text,
            timestamp: new Date().toISOString(),
          }
        ]);
      } catch (err) {
        alert(`Error al enviar a Telegram: ${err.message}`);
      } finally {
        setIsSendingReply(false);
      }
      return;
    }

    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      const payload = {
        sender: 'admin',
        sender_name: currentUser?.full_name || 'Asesor Académico',
        message: text,
      };
      wsRef.current.send(JSON.stringify(payload));
    }
    setIsSendingReply(false);
  };

  // Handle Close Session
  const handleConfirmCloseSession = async () => {
    if (!selectedSession) return;
    setIsClosing(true);
    setCloseError('');
    try {
      await closeEscalationSession(token, selectedSession.session_id);
      setIsCloseModalOpen(false);
      setSelectedSession(null);
      loadEscalations();
    } catch (err) {
      setCloseError(err.message || 'Error al finalizar la sesión.');
    } finally {
      setIsClosing(false);
    }
  };

  // Handle Save Provider Settings
  const handleSaveProviders = async (e) => {
    e.preventDefault();
    setSavingSettings(true);
    setSettingsFeedback({ type: '', text: '' });
    try {
      const payload = {
        active_provider: activeProvider,
        gemini_api_key: geminiKeyInput.trim() || undefined,
        groq_api_key: groqKeyInput.trim() || undefined,
        openai_api_key: openaiKeyInput.trim() || undefined,
      };
      const res = await updateProviderSettings(token, payload);
      setProviderSettings(res);
      if (res.active_provider) setActiveProvider(res.active_provider);
      setSettingsFeedback({ type: 'success', text: '¡Configuración de proveedores actualizada exitosamente!' });
      setGeminiKeyInput('');
      setGroqKeyInput('');
      setOpenaiKeyInput('');
    } catch (err) {
      setSettingsFeedback({ type: 'error', text: err.message || 'Error al actualizar proveedores' });
    } finally {
      setSavingSettings(false);
    }
  };

  // -------------------------------------------------------------
  // If Not Authenticated -> Render Login Form in Landing Style
  // -------------------------------------------------------------
  if (!token) {
    return (
      <div className="min-h-screen bg-[#070515] flex flex-col items-center justify-center p-5 font-sans relative selection:bg-brand-lime selection:text-brand-dark">
        <div className="max-w-md w-full p-8 rounded-3xl bg-[#100c2a] border border-white/10 shadow-2xl space-y-6 relative z-10">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-brand-lime text-brand-dark flex items-center justify-center font-bold mx-auto text-xl shadow-lg shadow-brand-lime/20">
              <FaShieldAlt />
            </div>
            <h2 className="font-display text-2xl uppercase tracking-wider text-white">Staff Management Portal</h2>
            <p className="text-xs text-slate-400">Acceso seguro para Asesores Académicos y Administradores</p>
          </div>

          {loginError && (
            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
              <FaExclamationTriangle />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-xs font-bold uppercase text-slate-400 block mb-1.5">Usuario Administrador</label>
              <div className="relative">
                <FaUser className="absolute left-3.5 top-3.5 text-slate-500 text-xs" />
                <input
                  type="text"
                  required
                  placeholder="admin"
                  value={loginUsername}
                  onChange={(e) => setLoginUsername(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-brand-lime font-mono"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase text-slate-400 block mb-1.5">Contraseña</label>
              <div className="relative">
                <FaLock className="absolute left-3.5 top-3.5 text-slate-500 text-xs" />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white text-xs focus:outline-none focus:border-brand-lime"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full py-3 rounded-xl bg-brand-lime hover:bg-[#b0f55c] disabled:opacity-50 text-brand-dark font-bold text-xs uppercase tracking-wider shadow-lg shadow-brand-lime/20 transition-all hover:scale-[1.02] cursor-pointer mt-2"
            >
              {isLoggingIn ? 'Verificando credenciales...' : 'Iniciar Sesión'}
            </button>
          </form>

          <div className="pt-4 border-t border-white/10 text-center">
            <button
              onClick={onNavigateToLanding}
              className="text-xs text-slate-400 hover:text-white transition-colors"
            >
              ← Volver a la Landing Page
            </button>
          </div>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // Authenticated Portal Dashboard in Landing Style
  // -------------------------------------------------------------
  return (
    <div className="min-h-screen bg-[#070515] text-slate-100 flex flex-col font-sans selection:bg-brand-lime selection:text-brand-dark">
      
      {/* Top Header Bar */}
      <header className="h-16 border-b border-white/10 bg-[#0c0926]/90 backdrop-blur-md px-6 flex items-center justify-between flex-shrink-0 z-20">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand-lime text-brand-dark flex items-center justify-center font-bold shadow-md shadow-brand-lime/20">
              <FaShieldAlt className="text-base" />
            </div>
            <div>
              <span className="font-display text-lg tracking-wider text-white uppercase block leading-none">Vanguard</span>
              <span className="text-[9px] text-brand-lime font-mono uppercase">Staff Administration</span>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-2 ml-8 bg-white/5 p-1 rounded-xl border border-white/10 text-xs">
            <button
              onClick={() => setActiveTab('escalations')}
              className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'escalations' ? 'bg-brand-lime text-brand-dark shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              <FaComments />
              <span>Casos Escalados</span>
              {escalatedSessions.filter((s) => s.status === 'WAITING').length > 0 && (
                <span className="bg-rose-500 text-white text-[9px] px-1.5 py-0.2 rounded-full font-mono">
                  {escalatedSessions.filter((s) => s.status === 'WAITING').length}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('metrics')}
              className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'metrics' ? 'bg-brand-lime text-brand-dark shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              <FaChartBar />
              <span>Métricas KPI</span>
            </button>

            <button
              onClick={() => setActiveTab('crm')}
              className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'crm' ? 'bg-brand-lime text-brand-dark shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              <FaUserCheck />
              <span>CRM & Reseñas</span>
            </button>

            <button
              onClick={() => setActiveTab('settings')}
              className={`px-3.5 py-1.5 rounded-lg font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'settings' ? 'bg-brand-lime text-brand-dark shadow-sm' : 'text-slate-400 hover:text-white'
              }`}
            >
              <FaKey />
              <span>Proveedores & Keys</span>
            </button>
          </nav>
        </div>

        {/* User profile & Actions */}
        <div className="flex items-center gap-3 text-xs">
          <button onClick={onNavigateToChat} className="hidden sm:flex items-center gap-1.5 text-slate-400 hover:text-white px-3 py-1.5 rounded-lg border border-white/10 hover:bg-white/5 transition-colors">
            <FaRobot />
            <span>Asistente IA</span>
          </button>
          <div className="flex items-center gap-2 pl-2 border-l border-white/10">
            <span className="font-mono text-slate-300 font-bold hidden sm:inline">{currentUser?.username || 'admin'}</span>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 font-semibold border border-red-500/30 transition-colors"
            >
              <FaSignOutAlt />
              <span>Salir</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Workspace Body */}
      <main className="flex-1 overflow-y-auto p-6 max-w-7xl w-full mx-auto space-y-6">
        
        {/* ================= TAB 1: ESCALATED SESSIONS & LIVE CHAT ================= */}
        {activeTab === 'escalations' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-140px)]">
            
            {/* Sessions List */}
            <div className="lg:col-span-1 bg-[#100c2a] border border-white/10 rounded-3xl p-5 flex flex-col overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <FaComments className="text-brand-lime" />
                  <h3 className="font-bold text-sm text-white">Casos de Asesoría en Vivo</h3>
                </div>
                <button onClick={loadEscalations} className="text-slate-400 hover:text-white p-1 rounded hover:bg-white/5 transition-colors" title="Actualizar">
                  <FaSync className={`text-xs ${sessionsLoading ? 'animate-spin' : ''}`} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto pt-3 space-y-2 custom-scroll">
                {escalatedSessions.length === 0 ? (
                  <p className="text-xs text-slate-500 italic text-center py-12">No hay casos escalados pendientes.</p>
                ) : (
                  escalatedSessions.map((sess) => {
                    const isSelected = selectedSession?.session_id === sess.session_id;
                    const isWaiting = sess.status === 'WAITING';
                    return (
                      <button
                        key={sess.id}
                        onClick={() => setSelectedSession(sess)}
                        className={`w-full text-left p-3.5 rounded-2xl border transition-all block relative ${
                          isSelected
                            ? 'bg-brand-lime/15 border-brand-lime text-white shadow-md'
                            : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-xs truncate max-w-[140px] text-white">{sess.full_name}</span>
                          <span className={`text-[9px] px-2 py-0.5 rounded-full font-mono font-bold uppercase ${
                            isWaiting ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 animate-pulse' : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          }`}>
                            {sess.status}
                          </span>
                        </div>
                        <p className="text-[11px] font-mono text-slate-400 truncate">ID: {sess.session_id} • Cédula: {sess.national_id}</p>
                        {sess.initial_inquiry && (
                          <p className="text-[11px] text-slate-400 line-clamp-1 italic mt-1">"{sess.initial_inquiry}"</p>
                        )}
                        <span className="text-[9px] text-slate-500 block mt-1">{new Date(sess.created_at).toLocaleTimeString()}</span>
                      </button>
                    );
                  })
                )}
              </div>
            </div>

            {/* Selected Session Live Chat Workspace */}
            <div className="lg:col-span-2 bg-[#100c2a] border border-white/10 rounded-3xl flex flex-col overflow-hidden">
              {selectedSession ? (
                <>
                  {/* Chat Top Banner */}
                  <div className="p-4 border-b border-white/10 bg-[#141038] flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-sm text-white">{selectedSession.full_name}</h4>
                        <span className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded text-brand-lime">
                          {selectedSession.channel.toUpperCase()}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 font-mono">Sesión: {selectedSession.session_id} • Doc: {selectedSession.national_id}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setIsCloseModalOpen(true)}
                        className="px-3.5 py-1.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/40 text-rose-300 text-xs font-bold transition-all"
                      >
                        Finalizar Atención
                      </button>
                    </div>
                  </div>

                  {/* Messages Feed */}
                  <div className="flex-1 overflow-y-auto p-5 space-y-3 bg-[#0c0926]/50 custom-scroll">
                    {chatMessages.length === 0 ? (
                      <p className="text-xs text-slate-500 text-center py-12">No hay mensajes previos en esta sesión.</p>
                    ) : (
                      chatMessages.map((m, idx) => {
                        const isAdvisor = m.sender === 'admin';
                        const isSystem = m.sender === 'system';
                        if (isSystem) {
                          return (
                            <div key={idx} className="text-center my-2">
                              <span className="text-[10px] bg-white/5 px-3 py-1 rounded-full text-slate-400 border border-white/10">
                                {m.message}
                              </span>
                            </div>
                          );
                        }
                        return (
                          <div key={idx} className={`flex flex-col ${isAdvisor ? 'items-end' : 'items-start'}`}>
                            <span className="text-[10px] text-slate-400 px-1 mb-0.5">{isAdvisor ? 'Tú (Asesor)' : selectedSession.full_name}</span>
                            <div className={`max-w-[75%] p-3 rounded-2xl text-xs leading-relaxed ${
                              isAdvisor
                                ? 'bg-brand-lime text-brand-dark font-medium rounded-br-none'
                                : 'bg-white/10 text-white border border-white/10 rounded-bl-none'
                            }`}>
                              {m.message}
                            </div>
                          </div>
                        );
                      })
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Advisor Input Bar */}
                  <form onSubmit={handleSendAdvisorMessage} className="p-3 bg-[#141038] border-t border-white/10 flex items-center gap-2">
                    <input
                      type="text"
                      placeholder={`Escribir respuesta a ${selectedSession.full_name}...`}
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      className="flex-1 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-brand-lime"
                    />
                    <button
                      type="submit"
                      disabled={!replyText.trim() || isSendingReply}
                      className="px-5 py-2.5 rounded-xl bg-brand-lime hover:bg-[#b0f55c] disabled:opacity-40 text-brand-dark font-bold text-xs flex items-center gap-2 transition-transform active:scale-95"
                    >
                      <FaPaperPlane className="text-xs" />
                      <span>Responder</span>
                    </button>
                  </form>
                </>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-8 space-y-3 text-slate-500">
                  <FaComments className="text-4xl text-slate-600" />
                  <p className="text-sm">Selecciona una sesión de la lista para atender la consulta en tiempo real.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ================= TAB 2: METRICS & KPI TELEMETRY ================= */}
        {activeTab === 'metrics' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">Telemetría Operacional & Métricas RAG</h3>
                <p className="text-xs text-slate-400">Consumo de tokens, latencias y tasas de resolución de la Academia</p>
              </div>
              <button onClick={loadMetrics} className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10">
                <FaSync className={`text-xs ${metricsLoading ? 'animate-spin' : ''}`} />
                <span>Actualizar Métricas</span>
              </button>
            </div>

            {metrics && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-5 rounded-2xl bg-[#100c2a] border border-white/10 space-y-2">
                  <span className="text-xs text-slate-400 font-mono uppercase block">Total Consultas</span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-4xl text-white">{metrics.total_queries_processed}</span>
                    <span className="text-xs text-brand-lime font-mono">100%</span>
                  </div>
                  <p className="text-[11px] text-slate-500">Inquiries procesadas por todos los canales</p>
                </div>

                <div className="p-5 rounded-2xl bg-[#100c2a] border border-white/10 space-y-2">
                  <span className="text-xs text-slate-400 font-mono uppercase block">Triage & Cache Hits</span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-4xl text-brand-lime">
                      {(metrics.resolved_by_faq_triage || 0) + (metrics.resolved_by_cache || 0)}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">$0 Costo</span>
                  </div>
                  <p className="text-[11px] text-slate-500">Resueltos sin consumo de tokens de generación</p>
                </div>

                <div className="p-5 rounded-2xl bg-[#100c2a] border border-white/10 space-y-2">
                  <span className="text-xs text-slate-400 font-mono uppercase block">Tasa de Escalamiento</span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-4xl text-amber-400">{metrics.escalation_rate_pct}%</span>
                    <span className="text-xs text-slate-400 font-mono">{metrics.escalated_to_human} casos</span>
                  </div>
                  <p className="text-[11px] text-slate-500">Transferencias a asesores académicos</p>
                </div>

                <div className="p-5 rounded-2xl bg-[#100c2a] border border-white/10 space-y-2">
                  <span className="text-xs text-slate-400 font-mono uppercase block">Costo Estimado USD</span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-4xl text-brand-blue">${(metrics.total_cost_usd || metrics.estimated_total_cost_usd || 0).toFixed(4)}</span>
                  </div>
                  <p className="text-[11px] text-slate-500">Latencia promedio: {(metrics.average_latency_ms || 0).toFixed(0)} ms</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ================= TAB 3: CRM DIRECTORY & REVIEWS ================= */}
        {activeTab === 'crm' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-white">Directorio CRM & Reseñas de Aspirantes</h3>
                <p className="text-xs text-slate-400">Historial de calificaciones y perfiles de estudiantes atendidos</p>
              </div>
              <button onClick={loadCRM} className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-slate-300 border border-white/10">
                <FaSync className={`text-xs ${crmLoading ? 'animate-spin' : ''}`} />
                <span>Actualizar CRM</span>
              </button>
            </div>

            {/* Satisfaction Summary */}
            {crmSummary && (
              <div className="p-5 rounded-2xl bg-[#100c2a] border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-xl font-bold">
                    <FaStar />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">Calificación Promedio de Atención</h4>
                    <p className="text-xs text-slate-400">{crmSummary.total_reviews} reseñas de satisfacción enviadas</p>
                  </div>
                </div>
                <div className="font-display text-4xl text-amber-400">
                  {crmSummary.average_rating} / 5.0
                </div>
              </div>
            )}

            {/* Profiles & Reviews Tables */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Profiles */}
              <div className="p-6 rounded-3xl bg-[#100c2a] border border-white/10 space-y-4">
                <h4 className="font-bold text-sm text-white flex items-center gap-2">
                  <FaUserCheck className="text-brand-lime" />
                  <span>Perfiles Registrados en CRM</span>
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-slate-300">
                    <thead className="bg-white/5 text-slate-400 uppercase text-[10px] border-b border-white/10">
                      <tr>
                        <th className="p-3">Nombre</th>
                        <th className="p-3">Cédula</th>
                        <th className="p-3">Canal</th>
                        <th className="p-3 text-center">Escalaciones</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {crmProfiles.length === 0 ? (
                        <tr><td colSpan="4" className="text-center py-6 text-slate-500">Sin perfiles registrados</td></tr>
                      ) : (
                        crmProfiles.map((p) => (
                          <tr key={p.id}>
                            <td className="p-3 font-bold text-white">{p.full_name}</td>
                            <td className="p-3 font-mono text-slate-400">{p.national_id}</td>
                            <td className="p-3 uppercase font-mono text-[10px] text-brand-lime">{p.channel}</td>
                            <td className="p-3 text-center font-bold text-amber-400">{p.total_escalations_count}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Reviews */}
              <div className="p-6 rounded-3xl bg-[#100c2a] border border-white/10 space-y-4">
                <h4 className="font-bold text-sm text-white flex items-center gap-2">
                  <FaStar className="text-amber-400" />
                  <span>Últimas Reseñas Recibidas</span>
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-slate-300">
                    <thead className="bg-white/5 text-slate-400 uppercase text-[10px] border-b border-white/10">
                      <tr>
                        <th className="p-3">Sesión</th>
                        <th className="p-3">Calificación</th>
                        <th className="p-3">Comentarios</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {crmReviews.length === 0 ? (
                        <tr><td colSpan="3" className="text-center py-6 text-slate-500">Sin reseñas enviadas</td></tr>
                      ) : (
                        crmReviews.map((r) => (
                          <tr key={r.id}>
                            <td className="p-3 font-mono text-brand-lime">{r.session_id}</td>
                            <td className="p-3 text-amber-400 font-bold">{r.rating} ★</td>
                            <td className="p-3 italic text-slate-400 max-w-[200px] truncate">{r.notes || 'Sin notas'}</td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 4: PROVIDER SETTINGS & API KEYS ================= */}
        {activeTab === 'settings' && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white">Configuración de Proveedores LLM & API Keys</h3>
              <p className="text-xs text-slate-400">Alterna en tiempo de ejecución entre Google Gemini, Groq LPU y OpenAI sin reiniciar el servidor.</p>
            </div>

            {settingsFeedback.text && (
              <div className={`p-4 rounded-2xl text-xs flex items-center gap-2 ${
                settingsFeedback.type === 'success' ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300' : 'bg-red-500/10 border border-red-500/30 text-red-400'
              }`}>
                {settingsFeedback.type === 'success' ? <FaCheckCircle /> : <FaExclamationTriangle />}
                <span>{settingsFeedback.text}</span>
              </div>
            )}

            <form onSubmit={handleSaveProviders} className="p-8 rounded-3xl bg-[#100c2a] border border-white/10 space-y-6">
              <div>
                <label className="text-xs font-bold uppercase text-slate-400 block mb-3">Proveedor LLM Activo</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'gemini', name: 'Google Gemini', defaultModel: 'gemini-3.1-flash-lite', icon: <FaGoogle className="text-xl text-[#4285F4]" /> },
                    { id: 'groq', name: 'Groq LPU (Ultra-Fast)', defaultModel: 'llama-3.1-8b-instant', icon: <FaBolt className="text-xl text-brand-lime" /> },
                    { id: 'openai', name: 'OpenAI', defaultModel: 'gpt-4o-mini', icon: <FaRobot className="text-xl text-brand-blue" /> },
                  ].map((p) => {
                    const provInfo = providerSettings?.providers?.[p.id] || providerSettings?.[p.id];
                    const activeModelName = provInfo?.model || p.defaultModel;
                    return (
                      <button
                        type="button"
                        key={p.id}
                        onClick={() => setActiveProvider(p.id)}
                        className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                          activeProvider === p.id
                            ? 'bg-brand-lime/10 border-brand-lime text-white shadow-lg shadow-brand-lime/10'
                            : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/30'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          {p.icon}
                          {activeProvider === p.id && <FaCheck className="text-brand-lime text-xs" />}
                        </div>
                        <div>
                          <strong className="text-sm block text-white">{p.name}</strong>
                          <span className="text-[11px] font-mono text-brand-lime/80 font-medium">{activeModelName}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* API Keys Configuration */}
              <div className="space-y-5 pt-4 border-t border-white/10">
                {/* Gemini */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <FaGoogle className="text-sm text-[#4285F4]" />
                      <label className="text-xs font-bold uppercase text-slate-300">Google Gemini API Key</label>
                    </div>
                    <div className="flex items-center gap-2">
                      {testResults['gemini'] ? (
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium flex items-center gap-1 ${
                          testResults['gemini'].status === 'verified'
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            : 'bg-red-500/20 text-red-300 border border-red-500/30'
                        }`}>
                          {testResults['gemini'].status === 'verified' ? <FaCheckCircle className="text-[9px]" /> : <FaExclamationTriangle className="text-[9px]" />}
                          {testResults['gemini'].message}
                        </span>
                      ) : (
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                          (providerSettings?.providers?.gemini?.is_configured ?? providerSettings?.gemini?.is_configured)
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : 'bg-slate-800 text-slate-500'
                        }`}>
                          {(providerSettings?.providers?.gemini?.is_configured ?? providerSettings?.gemini?.is_configured)
                            ? `Configurada (${providerSettings?.providers?.gemini?.masked_key || providerSettings?.gemini?.masked_key || 'Activa'})`
                            : 'No configurada'}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="password"
                      placeholder="AIzaSy... (Deja en blanco para conservar actual)"
                      value={geminiKeyInput}
                      onChange={(e) => setGeminiKeyInput(e.target.value)}
                      className="flex-1 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-lime font-mono"
                    />
                    <button
                      type="button"
                      disabled={testingProvider === 'gemini' || (!(providerSettings?.providers?.gemini?.is_configured ?? providerSettings?.gemini?.is_configured) && !geminiKeyInput.trim())}
                      onClick={() => handleTestProvider('gemini', geminiKeyInput)}
                      className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-40 text-white text-[11px] font-semibold transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      {testingProvider === 'gemini' ? <FaSync className="animate-spin text-xs" /> : <FaBolt className="text-brand-lime text-xs" />}
                      <span>{testingProvider === 'gemini' ? 'Probando...' : 'Probar'}</span>
                    </button>
                  </div>
                </div>

                {/* Groq */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <FaBolt className="text-sm text-brand-lime" />
                      <label className="text-xs font-bold uppercase text-slate-300">Groq API Key</label>
                    </div>
                    <div className="flex items-center gap-2">
                      {testResults['groq'] ? (
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium flex items-center gap-1 ${
                          testResults['groq'].status === 'verified'
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            : 'bg-red-500/20 text-red-300 border border-red-500/30'
                        }`}>
                          {testResults['groq'].status === 'verified' ? <FaCheckCircle className="text-[9px]" /> : <FaExclamationTriangle className="text-[9px]" />}
                          {testResults['groq'].message}
                        </span>
                      ) : (
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                          (providerSettings?.providers?.groq?.is_configured ?? providerSettings?.groq?.is_configured)
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : 'bg-slate-800 text-slate-500'
                        }`}>
                          {(providerSettings?.providers?.groq?.is_configured ?? providerSettings?.groq?.is_configured)
                            ? `Configurada (${providerSettings?.providers?.groq?.masked_key || providerSettings?.groq?.masked_key || 'Activa'})`
                            : 'No configurada'}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="password"
                      placeholder="gsk_... (Deja en blanco para conservar actual)"
                      value={groqKeyInput}
                      onChange={(e) => setGroqKeyInput(e.target.value)}
                      className="flex-1 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-lime font-mono"
                    />
                    <button
                      type="button"
                      disabled={testingProvider === 'groq' || (!(providerSettings?.providers?.groq?.is_configured ?? providerSettings?.groq?.is_configured) && !groqKeyInput.trim())}
                      onClick={() => handleTestProvider('groq', groqKeyInput)}
                      className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-40 text-white text-[11px] font-semibold transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      {testingProvider === 'groq' ? <FaSync className="animate-spin text-xs" /> : <FaBolt className="text-brand-lime text-xs" />}
                      <span>{testingProvider === 'groq' ? 'Probando...' : 'Probar'}</span>
                    </button>
                  </div>
                </div>

                {/* OpenAI */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <FaRobot className="text-sm text-brand-blue" />
                      <label className="text-xs font-bold uppercase text-slate-300">OpenAI API Key</label>
                    </div>
                    <div className="flex items-center gap-2">
                      {testResults['openai'] ? (
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium flex items-center gap-1 ${
                          testResults['openai'].status === 'verified'
                            ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                            : 'bg-red-500/20 text-red-300 border border-red-500/30'
                        }`}>
                          {testResults['openai'].status === 'verified' ? <FaCheckCircle className="text-[9px]" /> : <FaExclamationTriangle className="text-[9px]" />}
                          {testResults['openai'].message}
                        </span>
                      ) : (
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-mono ${
                          (providerSettings?.providers?.openai?.is_configured ?? providerSettings?.openai?.is_configured)
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : 'bg-slate-800 text-slate-500'
                        }`}>
                          {(providerSettings?.providers?.openai?.is_configured ?? providerSettings?.openai?.is_configured)
                            ? `Configurada (${providerSettings?.providers?.openai?.masked_key || providerSettings?.openai?.masked_key || 'Activa'})`
                            : 'No configurada'}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="password"
                      placeholder="sk-proj-... (Deja en blanco para conservar actual)"
                      value={openaiKeyInput}
                      onChange={(e) => setOpenaiKeyInput(e.target.value)}
                      className="flex-1 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-lime font-mono"
                    />
                    <button
                      type="button"
                      disabled={testingProvider === 'openai' || (!(providerSettings?.providers?.openai?.is_configured ?? providerSettings?.openai?.is_configured) && !openaiKeyInput.trim())}
                      onClick={() => handleTestProvider('openai', openaiKeyInput)}
                      className="px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-40 text-white text-[11px] font-semibold transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      {testingProvider === 'openai' ? <FaSync className="animate-spin text-xs" /> : <FaBolt className="text-brand-lime text-xs" />}
                      <span>{testingProvider === 'openai' ? 'Probando...' : 'Probar'}</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end pt-4 border-t border-white/10">
                <button
                  type="submit"
                  disabled={savingSettings}
                  className="px-6 py-3 rounded-xl bg-brand-lime hover:bg-[#b0f55c] disabled:opacity-50 text-brand-dark font-bold text-xs uppercase tracking-wider shadow-lg shadow-brand-lime/20 transition-all hover:scale-105 cursor-pointer"
                >
                  {savingSettings ? 'Guardando ajustes...' : 'Guardar Configuración'}
                </button>
              </div>
            </form>
          </div>
        )}
      </main>

      {/* Confirmation Modal for Closing Session */}
      {isCloseModalOpen && selectedSession && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#100c2a] border border-white/20 rounded-3xl max-w-md w-full p-6 text-white shadow-2xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-rose-500/20 text-rose-400 border border-rose-500/30 rounded-xl">
                <FaExclamationTriangle className="text-xl" />
              </div>
              <div>
                <h4 className="text-base font-bold">¿Finalizar Atención Personalizada?</h4>
                <p className="text-xs text-slate-400">Sesión: {selectedSession.session_id}</p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              ¿Estás seguro de dar por concluida la asesoría con <strong className="text-white">{selectedSession.full_name}</strong>? Se notificará al aspirante y se le solicitará calificar el servicio del 1 al 5.
            </p>

            {closeError && (
              <div className="p-3 bg-rose-500/20 border border-rose-500/40 rounded-xl text-xs text-rose-300">
                {closeError}
              </div>
            )}

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setIsCloseModalOpen(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-colors"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleConfirmCloseSession}
                disabled={isClosing}
                className="px-5 py-2 text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 rounded-xl shadow-md transition-all disabled:opacity-50"
              >
                {isClosing ? 'Finalizando...' : 'Sí, Finalizar'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
