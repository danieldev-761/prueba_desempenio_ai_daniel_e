import React, { useState, useEffect, useRef } from 'react';
import {
  Shield,
  Activity,
  Users,
  Send,
  MessageSquare,
  DollarSign,
  Zap,
  TrendingUp,
  Clock,
  Circle,
  RefreshCw,
  LogOut,
  ChevronRight,
  ChevronDown,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Star,
  UserCheck,
  Award,
  Layers,
  HeartHandshake
} from 'lucide-react';
import {
  getAdminMetrics,
  getEscalatedSessions,
  getSessionMessages,
  replyTelegramStudent,
  closeEscalationSession,
  getWebSocketChatUrl,
  getCRMProfiles,
  getCRMReviews,
  getCRMSummary,
} from '../services/api';

export default function AdminPortal({ adminKey, onLogout }) {
  const [activeTab, setActiveTab] = useState('escalation'); // 'escalation' | 'metrics'
  const [metricsSubTab, setMetricsSubTab] = useState('rag'); // 'rag' | 'crm'

  const [sessions, setSessions] = useState([]);
  const [selectedSessionId, setSelectedSessionId] = useState(null);
  const [sessionMessages, setSessionMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [telegramReplyText, setTelegramReplyText] = useState('');
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(false);
  const [telegramStatus, setTelegramStatus] = useState('');

  // Collapsible state for resolved sessions
  const [isResolvedExpanded, setIsResolvedExpanded] = useState(false);

  // CRM Data State
  const [crmProfiles, setCrmProfiles] = useState([]);
  const [crmReviews, setCrmReviews] = useState([]);
  const [crmSummary, setCrmSummary] = useState(null);
  const [loadingCrm, setLoadingCrm] = useState(false);

  // Confirmation modal state for closing session
  const [isCloseModalOpen, setIsCloseModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [closeError, setCloseError] = useState('');

  const wsRef = useRef(null);
  const chatBottomRef = useRef(null);

  // Fetch initial sessions & metrics
  const fetchData = async () => {
    setLoading(true);
    try {
      const [sessionsData, metricsData] = await Promise.all([
        getEscalatedSessions(adminKey).catch(() => []),
        getAdminMetrics(adminKey).catch(() => null),
      ]);
      setSessions(sessionsData);
      setMetrics(metricsData);

      // Stable session selection: only select initial session if none chosen
      if (sessionsData.length > 0) {
        setSelectedSessionId((prevId) => {
          if (!prevId) {
            return sessionsData[0].session_id;
          }
          // If previous session exists in current list, retain it
          const exists = sessionsData.some((s) => s.session_id === prevId);
          return exists ? prevId : sessionsData[0].session_id;
        });
      }
    } catch (err) {
      console.error('Error fetching admin data:', err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch CRM telemetry
  const fetchCRMData = async () => {
    setLoadingCrm(true);
    try {
      const [profiles, reviews, summary] = await Promise.all([
        getCRMProfiles(adminKey).catch(() => []),
        getCRMReviews(adminKey).catch(() => []),
        getCRMSummary(adminKey).catch(() => null),
      ]);
      setCrmProfiles(profiles);
      setCrmReviews(reviews);
      setCrmSummary(summary);
    } catch (err) {
      console.error('Error fetching CRM data:', err);
    } finally {
      setLoadingCrm(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 10000); // Polling every 10s for new sessions
    return () => clearInterval(interval);
  }, [adminKey]);

  useEffect(() => {
    if (activeTab === 'metrics' && metricsSubTab === 'crm') {
      fetchCRMData();
    }
  }, [activeTab, metricsSubTab, adminKey]);

  // Derive active session from selectedSessionId
  const selectedSession = sessions.find((s) => s.session_id === selectedSessionId) || null;

  // Load chat messages when selectedSessionId changes
  useEffect(() => {
    if (!selectedSessionId) return;

    async function loadChat() {
      try {
        const msgs = await getSessionMessages(selectedSessionId);
        setSessionMessages(msgs);
      } catch (err) {
        console.error('Error loading session messages:', err);
      }
    }
    loadChat();

    // Connect WebSocket as Admin if session is web
    if (selectedSession?.channel === 'web') {
      const wsUrl = getWebSocketChatUrl(selectedSessionId);
      const ws = new WebSocket(wsUrl);
      wsRef.current = ws;

      ws.onmessage = (event) => {
        try {
          const msg = JSON.parse(event.data);
          if (msg.type === 'SESSION_CLOSED') {
            fetchData();
            return;
          }
          // Only append if not already in list (prevent duplication)
          setSessionMessages((prev) => {
            if (msg.id && prev.some((m) => m.id === msg.id)) return prev;
            const isDuplicate = prev.some(
              (m) =>
                m.sender === msg.sender &&
                m.message === msg.message &&
                Math.abs(new Date(m.timestamp || Date.now()) - new Date(msg.timestamp || Date.now())) < 4000
            );
            if (isDuplicate) return prev;
            return [...prev, msg];
          });
        } catch (e) {
          console.error(e);
        }
      };

      return () => {
        if (ws.readyState === WebSocket.OPEN) {
          ws.close();
        }
      };
    }
  }, [selectedSessionId, selectedSession?.channel]);

  // Auto-scroll chat
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [sessionMessages]);

  const handleSendAdminWebMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim() || !wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) return;

    const payload = {
      sender: 'admin',
      sender_name: 'Asesor Académico',
      message: inputMessage.trim(),
    };
    wsRef.current.send(JSON.stringify(payload));
    setInputMessage('');
  };

  const handleSendTelegramReply = async (e) => {
    e.preventDefault();
    if (!telegramReplyText.trim() || !selectedSession?.telegram_chat_id) return;
    setTelegramStatus('Enviando a Telegram...');

    try {
      await replyTelegramStudent(
        adminKey,
        selectedSession.telegram_chat_id,
        telegramReplyText.trim(),
        selectedSession.session_id
      );
      setTelegramStatus('¡Mensaje entregado en Telegram con éxito!');
      setTelegramReplyText('');
      // Reload messages
      const msgs = await getSessionMessages(selectedSession.session_id);
      setSessionMessages(msgs);
      setTimeout(() => setTelegramStatus(''), 3000);
      fetchData();
    } catch (err) {
      setTelegramStatus(`Error: ${err.message}`);
    }
  };

  // Check if advisor has responded in this session
  const hasAdvisorResponded = sessionMessages.some((m) => m.sender === 'admin') || selectedSession?.advisor_responded;

  const handleConfirmCloseSession = async () => {
    if (!selectedSession || !hasAdvisorResponded) return;
    setIsClosing(true);
    setCloseError('');

    try {
      await closeEscalationSession(adminKey, selectedSession.session_id);
      setIsCloseModalOpen(false);
      await fetchData();
      const msgs = await getSessionMessages(selectedSession.session_id);
      setSessionMessages(msgs);
    } catch (err) {
      setCloseError(err.message || 'Error al finalizar la sesión.');
    } finally {
      setIsClosing(false);
    }
  };

  // Partition sessions into active/waiting and resolved
  const pendingSessions = sessions.filter((s) => s.status !== 'RESOLVED');
  const resolvedSessions = sessions.filter((s) => s.status === 'RESOLVED');

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      {/* Top Navbar */}
      <header className="bg-slate-800/80 border-b border-slate-700/80 backdrop-blur-md px-6 py-4 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-600 rounded-xl shadow-md shadow-indigo-600/30">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold text-white tracking-tight">Portal Administrativo Académico</h1>
              <span className="text-[10px] uppercase tracking-wider font-extrabold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 px-2 py-0.5 rounded-full">
                Staff Control
              </span>
            </div>
            <p className="text-xs text-slate-400">Mesa de Ayuda en Vivo, Enrutamiento Multi-Canal y Telemetría</p>
          </div>
        </div>

        {/* Tab switcher & actions */}
        <div className="flex items-center gap-4">
          <div className="bg-slate-900/60 p-1 rounded-xl border border-slate-700 flex items-center gap-1">
            <button
              onClick={() => setActiveTab('escalation')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'escalation'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Users className="w-4 h-4" />
              Mesa de Escalación
              {sessions.filter((s) => s.status === 'WAITING').length > 0 && (
                <span className="bg-rose-500 text-white text-[10px] px-1.5 py-0.2 rounded-full font-bold animate-pulse">
                  {sessions.filter((s) => s.status === 'WAITING').length}
                </span>
              )}
            </button>
            <button
              onClick={() => setActiveTab('metrics')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'metrics'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Activity className="w-4 h-4" />
              Métricas & CRM
            </button>
          </div>

          <button
            onClick={() => {
              fetchData();
              if (activeTab === 'metrics' && metricsSubTab === 'crm') fetchCRMData();
            }}
            className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl border border-slate-700 transition-colors"
            title="Actualizar datos"
          >
            <RefreshCw className={`w-4 h-4 ${loading || loadingCrm ? 'animate-spin' : ''}`} />
          </button>

          <button
            onClick={onLogout}
            className="px-3.5 py-2 text-xs font-bold text-rose-400 hover:text-rose-300 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/30 rounded-xl transition-colors flex items-center gap-1.5"
          >
            <LogOut className="w-4 h-4" />
            Salir
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 p-6 max-w-7xl w-full mx-auto">
        {activeTab === 'escalation' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-140px)]">
            {/* Left Column: Sessions List (4 cols) */}
            <div className="lg:col-span-4 bg-slate-800/60 border border-slate-700/80 rounded-2xl p-4 flex flex-col overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-slate-700 mb-3">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Users className="w-4 h-4 text-indigo-400" />
                  Mesa de Atención ({pendingSessions.length} Activas)
                </h3>
                <span className="text-xs font-semibold text-slate-400">
                  {sessions.length} total
                </span>
              </div>

              <div className="flex-1 overflow-y-auto space-y-3 pr-1">
                {/* Active / Waiting Sessions */}
                <div className="space-y-2">
                  {pendingSessions.length === 0 ? (
                    <div className="text-center py-8 text-slate-500 text-xs bg-slate-900/30 rounded-xl border border-dashed border-slate-800 p-4">
                      No hay solicitudes de escalación pendientes en este momento.
                    </div>
                  ) : (
                    pendingSessions.map((s) => {
                      const isSelected = selectedSessionId === s.session_id;
                      const isWaiting = s.status === 'WAITING';

                      return (
                        <div
                          key={s.id}
                          onClick={() => setSelectedSessionId(s.session_id)}
                          className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-md'
                              : 'bg-slate-800/40 border-slate-700/60 text-slate-300 hover:bg-slate-800 hover:border-slate-600'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-white">{s.full_name}</span>
                              <span className="text-[10px] font-mono text-slate-400">({s.national_id})</span>
                            </div>
                            <span
                              className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                                isWaiting
                                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                                  : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                              }`}
                            >
                              {s.status}
                            </span>
                          </div>

                          <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2">
                            <span className="font-mono bg-slate-900/60 px-2 py-0.5 rounded text-indigo-300 border border-slate-700">
                              {s.session_id}
                            </span>
                            <span className="capitalize font-semibold text-slate-300">
                              Canal: {s.channel}
                            </span>
                          </div>

                          {s.initial_inquiry && (
                            <p className="text-xs text-slate-400 mt-2 line-clamp-2 italic bg-slate-900/40 p-2 rounded-lg border border-slate-800">
                              "{s.initial_inquiry}"
                            </p>
                          )}
                        </div>
                      );
                    })
                  )}
                </div>

                {/* Collapsible Section for Resolved Sessions */}
                {resolvedSessions.length > 0 && (
                  <div className="pt-2 border-t border-slate-700/60">
                    <button
                      type="button"
                      onClick={() => setIsResolvedExpanded((prev) => !prev)}
                      className="w-full py-2 px-3 bg-slate-900/70 hover:bg-slate-900 rounded-xl border border-slate-700 flex items-center justify-between text-xs font-bold text-slate-400 hover:text-slate-200 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        Historial de Atenciones Finalizadas ({resolvedSessions.length})
                      </span>
                      {isResolvedExpanded ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                    </button>

                    {isResolvedExpanded && (
                      <div className="space-y-2 mt-2 pl-1 animate-fadeIn">
                        {resolvedSessions.map((s) => {
                          const isSelected = selectedSessionId === s.session_id;

                          return (
                            <div
                              key={s.id}
                              onClick={() => setSelectedSessionId(s.session_id)}
                              className={`p-3 rounded-xl border cursor-pointer transition-all opacity-80 hover:opacity-100 ${
                                isSelected
                                  ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-md'
                                  : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:bg-slate-800 hover:border-slate-700'
                              }`}
                            >
                              <div className="flex items-center justify-between mb-1">
                                <div className="flex items-center gap-2">
                                  <span className="text-xs font-bold text-slate-200">{s.full_name}</span>
                                  <span className="text-[10px] font-mono text-slate-500">({s.national_id})</span>
                                </div>
                                <span className="text-[9px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider bg-slate-700/50 text-slate-400 border border-slate-600">
                                  RESUELTA
                                </span>
                              </div>
                              <div className="flex items-center justify-between text-[10px] text-slate-500 mt-1">
                                <span className="font-mono">{s.session_id}</span>
                                <span className="capitalize">{s.channel}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Live Chat Workspace (8 cols) */}
            <div className="lg:col-span-8 bg-slate-800/60 border border-slate-700/80 rounded-2xl flex flex-col overflow-hidden">
              {selectedSession ? (
                <>
                  {/* Chat Top Header */}
                  <div className="bg-slate-800 px-6 py-4 border-b border-slate-700 flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <h3 className="text-base font-bold text-white">{selectedSession.full_name}</h3>
                        <span className="text-xs font-mono text-indigo-300 bg-indigo-950/80 border border-indigo-700/50 px-2 py-0.5 rounded-md">
                          ID: {selectedSession.session_id}
                        </span>
                        <span className="text-xs font-semibold text-slate-400">
                          Doc: {selectedSession.national_id}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Canal: <strong className="text-slate-200 capitalize">{selectedSession.channel}</strong>
                        {selectedSession.telegram_chat_id && (
                          <span className="ml-2 font-mono text-cyan-300">
                            (Telegram Chat ID: {selectedSession.telegram_chat_id})
                          </span>
                        )}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className={`flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-xl border ${
                        selectedSession.status === 'RESOLVED'
                          ? 'bg-slate-700/50 text-slate-300 border-slate-600'
                          : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                      }`}>
                        <Circle className="w-2.5 h-2.5 fill-current" />
                        {selectedSession.status === 'RESOLVED' ? 'Atención Finalizada' : 'Sala Activa'}
                      </span>

                      {/* Terminate Session Button with Safeguards */}
                      {selectedSession.status !== 'RESOLVED' && (
                        <div className="relative group">
                          <button
                            onClick={() => {
                              if (hasAdvisorResponded) {
                                setIsCloseModalOpen(true);
                              }
                            }}
                            disabled={!hasAdvisorResponded}
                            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                              hasAdvisorResponded
                                ? 'bg-rose-600/90 hover:bg-rose-600 text-white shadow-md shadow-rose-600/20 cursor-pointer'
                                : 'bg-slate-700 text-slate-400 cursor-not-allowed opacity-60'
                            }`}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            Finalizar Atención
                          </button>
                          {!hasAdvisorResponded && (
                            <div className="absolute right-0 top-full mt-1.5 hidden group-hover:block z-50 bg-slate-950 text-amber-300 text-[11px] font-medium px-3 py-1.5 rounded-lg border border-amber-500/30 whitespace-nowrap shadow-xl">
                              ⚠️ Debes responder al menos una vez al usuario para poder finalizar la sesión.
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Initial Inquiry Trigger Banner */}
                  {selectedSession.initial_inquiry && (
                    <div className="bg-amber-950/40 border-b border-amber-900/50 px-6 py-2.5 flex items-center gap-3">
                      <span className="text-[10px] uppercase tracking-wider font-extrabold bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-md flex-shrink-0">
                        Motivo de Escalación
                      </span>
                      <p className="text-xs text-amber-100 font-medium truncate">
                        "{selectedSession.initial_inquiry}"
                      </p>
                    </div>
                  )}

                  {/* Messages Feed */}
                  <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-slate-900/60">
                    {sessionMessages.length === 0 ? (
                      <div className="text-center py-20 text-slate-500 text-xs">
                        No hay mensajes registrados en esta sesión.
                      </div>
                    ) : (
                      sessionMessages.map((m, index) => {
                        const isAdmin = m.sender === 'admin';
                        const isSystem = m.sender === 'system';

                        if (isSystem) {
                          return (
                            <div key={index} className="text-center my-2">
                              <span className="text-[11px] font-medium text-slate-400 bg-slate-800/80 border border-slate-700 px-3.5 py-1 rounded-full inline-block">
                                {m.message}
                              </span>
                            </div>
                          );
                        }

                        return (
                          <div
                            key={index}
                            className={`flex flex-col ${isAdmin ? 'items-end' : 'items-start'}`}
                          >
                            <span className="text-[10px] font-bold text-slate-400 mb-1 px-1">
                              {isAdmin ? 'Tú (Asesor Académico)' : (m.sender_name || selectedSession.full_name)}
                            </span>
                            <div
                              className={`max-w-[75%] rounded-2xl px-4 py-3 text-xs leading-relaxed shadow-sm ${
                                isAdmin
                                  ? 'bg-indigo-600 text-white rounded-br-none'
                                  : 'bg-slate-800 text-slate-100 border border-slate-700 rounded-bl-none'
                              }`}
                            >
                              {m.message}
                            </div>
                          </div>
                        );
                      })
                    )}
                    <div ref={chatBottomRef} />
                  </div>

                  {/* Input Response Controls */}
                  {selectedSession.status === 'RESOLVED' ? (
                    <div className="p-4 bg-slate-800 border-t border-slate-700 text-center text-xs text-slate-400">
                      Esta sesión ha sido finalizada y evaluada.
                    </div>
                  ) : selectedSession.channel === 'telegram' && selectedSession.telegram_chat_id ? (
                    /* Telegram Responder Form */
                    <div className="p-4 bg-slate-800 border-t border-slate-700 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-cyan-400 flex items-center gap-1.5">
                          <ExternalLink className="w-3.5 h-3.5" />
                          Respuesta Directa a Telegram Bot
                        </span>
                        {telegramStatus && (
                          <span className="text-xs font-semibold text-emerald-400">{telegramStatus}</span>
                        )}
                      </div>
                      <form onSubmit={handleSendTelegramReply} className="flex items-center gap-3">
                        <input
                          type="text"
                          placeholder={`Escribe mensaje para enviar a Telegram (${selectedSession.telegram_chat_id})...`}
                          value={telegramReplyText}
                          onChange={(e) => setTelegramReplyText(e.target.value)}
                          className="flex-1 px-4 py-2.5 text-xs rounded-xl bg-slate-900 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500 text-white font-medium"
                        />
                        <button
                          type="submit"
                          disabled={!telegramReplyText.trim()}
                          className="px-5 py-2.5 bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5 disabled:opacity-50"
                        >
                          <Send className="w-3.5 h-3.5" />
                          Enviar a Telegram
                        </button>
                      </form>
                    </div>
                  ) : (
                    /* Web WebSocket Live Responder */
                    <form onSubmit={handleSendAdminWebMessage} className="p-4 bg-slate-800 border-t border-slate-700 flex items-center gap-3">
                      <input
                        type="text"
                        placeholder={`Escribir respuesta en tiempo real a ${selectedSession.full_name}...`}
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        className="flex-1 px-4 py-2.5 text-xs rounded-xl bg-slate-900 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-500 text-white font-medium"
                      />
                      <button
                        type="submit"
                        disabled={!inputMessage.trim()}
                        className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center gap-1.5 disabled:opacity-50"
                      >
                        <Send className="w-3.5 h-3.5" />
                        Enviar
                      </button>
                    </form>
                  )}
                </>
              ) : (
                <div className="flex-1 flex items-center justify-center text-slate-500 text-sm">
                  Selecciona una sesión de escalación para abrir el canal de comunicación.
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Metrics & Analytics Tab with CRM Explorer */
          <div className="space-y-6 animate-fadeIn">
            {/* Sub-tab Navigation for Metrics */}
            <div className="flex items-center justify-between bg-slate-800/80 p-2 rounded-2xl border border-slate-700">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setMetricsSubTab('rag')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    metricsSubTab === 'rag'
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Activity className="w-4 h-4" />
                  Telemetría RAG & Rendimiento
                </button>
                <button
                  type="button"
                  onClick={() => setMetricsSubTab('crm')}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                    metricsSubTab === 'crm'
                      ? 'bg-amber-600 text-white shadow-md'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <HeartHandshake className="w-4 h-4" />
                  Gestión CRM & Reseñas de Atención
                </button>
              </div>

              <span className="text-xs text-slate-400 font-mono pr-2">
                {metricsSubTab === 'rag' ? 'Motor LangGraph RAG' : 'Base Relacional SQLite CRM'}
              </span>
            </div>

            {metricsSubTab === 'rag' ? (
              /* RAG Metrics Subtab */
              metrics ? (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 shadow-lg">
                      <div className="flex items-center justify-between text-slate-400 mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider">Total Consultas</span>
                        <MessageSquare className="w-5 h-5 text-indigo-400" />
                      </div>
                      <div className="text-3xl font-extrabold text-white">
                        {metrics.total_queries_processed}
                      </div>
                      <p className="text-[11px] text-slate-400 mt-2">Inquiries procesadas por el sistema</p>
                    </div>

                    <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 shadow-lg">
                      <div className="flex items-center justify-between text-slate-400 mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider">Resueltas por Caché</span>
                        <Zap className="w-5 h-5 text-amber-400" />
                      </div>
                      <div className="text-3xl font-extrabold text-amber-400">
                        {metrics.resolved_by_cache}
                      </div>
                      <p className="text-[11px] text-slate-400 mt-2">Respuestas en sub-segundo ($0 USD)</p>
                    </div>

                    <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 shadow-lg">
                      <div className="flex items-center justify-between text-slate-400 mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider">Tasa de Escalación</span>
                        <TrendingUp className="w-5 h-5 text-rose-400" />
                      </div>
                      <div className="text-3xl font-extrabold text-rose-400">
                        {metrics.escalation_rate_pct.toFixed(1)}%
                      </div>
                      <p className="text-[11px] text-slate-400 mt-2">{metrics.escalated_to_human} escalaciones humanas</p>
                    </div>

                    <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 shadow-lg">
                      <div className="flex items-center justify-between text-slate-400 mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider">Latencia Promedio</span>
                        <Clock className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div className="text-3xl font-extrabold text-emerald-400">
                        {metrics.average_latency_ms.toFixed(0)} ms
                      </div>
                      <p className="text-[11px] text-slate-400 mt-2">Costo total: ${metrics.total_cost_usd.toFixed(4)} USD</p>
                    </div>
                  </div>

                  {/* Additional Telemetry Details */}
                  <div className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-6 shadow-lg">
                    <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                      <Activity className="w-5 h-5 text-indigo-400" />
                      Distribución Operativa del Pipeline RAG
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-700/60">
                        <span className="text-xs text-slate-400 font-semibold">Resueltas por RAG (IA)</span>
                        <p className="text-xl font-bold text-white mt-1">{metrics.resolved_by_rag}</p>
                      </div>
                      <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-700/60">
                        <span className="text-xs text-slate-400 font-semibold">Tokens Consumidos</span>
                        <p className="text-xl font-bold text-white mt-1">
                          {(typeof metrics.total_tokens_consumed === 'object'
                            ? metrics.total_tokens_consumed?.total || (metrics.total_tokens_consumed?.prompt_tokens + metrics.total_tokens_consumed?.completion_tokens) || 0
                            : Number(metrics.total_tokens_consumed || 0)
                          ).toLocaleString()}
                        </p>
                        {typeof metrics.total_tokens_consumed === 'object' && metrics.total_tokens_consumed && (
                          <p className="text-[10px] text-slate-400 mt-1">
                            Prompt: {metrics.total_tokens_consumed.prompt_tokens?.toLocaleString() || 0} | Completion: {metrics.total_tokens_consumed.completion_tokens?.toLocaleString() || 0}
                          </p>
                        )}
                      </div>
                      <div className="p-4 bg-slate-900/60 rounded-xl border border-slate-700/60">
                        <span className="text-xs text-slate-400 font-semibold">Costo Acumulado</span>
                        <p className="text-xl font-bold text-emerald-400 mt-1">${metrics.total_cost_usd.toFixed(5)} USD</p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-20 text-slate-500">Cargando métricas del sistema...</div>
              )
            ) : (
              /* CRM & Reviews Subtab */
              <div className="space-y-6 animate-fadeIn">
                {/* CRM Summary KPI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 shadow-lg">
                    <div className="flex items-center justify-between text-slate-400 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider">Calificación Promedio (CSAT)</span>
                      <Award className="w-5 h-5 text-amber-400" />
                    </div>
                    <div className="flex items-baseline gap-3">
                      <div className="text-3xl font-extrabold text-amber-400">
                        {crmSummary?.average_rating ? crmSummary.average_rating.toFixed(1) : '0.0'}
                      </div>
                      <div className="flex items-center text-amber-400">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star
                            key={s}
                            className={`w-4 h-4 ${
                              s <= Math.round(crmSummary?.average_rating || 0)
                                ? 'fill-amber-400 text-amber-400'
                                : 'text-slate-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-2">
                      Basado en {crmSummary?.total_reviews || 0} reseñas de aspirantes
                    </p>
                  </div>

                  <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 shadow-lg">
                    <div className="flex items-center justify-between text-slate-400 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider">Aspirantes en CRM</span>
                      <UserCheck className="w-5 h-5 text-indigo-400" />
                    </div>
                    <div className="text-3xl font-extrabold text-indigo-400">
                      {crmSummary?.total_profiles || crmProfiles.length}
                    </div>
                    <p className="text-[11px] text-slate-400 mt-2">Perfiles únicos identificados con documento</p>
                  </div>

                  <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5 shadow-lg">
                    <div className="flex items-center justify-between text-slate-400 mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider">Desglose de Calificaciones</span>
                      <Star className="w-5 h-5 text-amber-400" />
                    </div>
                    <div className="flex items-center justify-between text-xs font-mono pt-1">
                      <span className="text-emerald-400">5★: {crmSummary?.rating_distribution?.['5'] || 0}</span>
                      <span className="text-lime-400">4★: {crmSummary?.rating_distribution?.['4'] || 0}</span>
                      <span className="text-amber-400">3★: {crmSummary?.rating_distribution?.['3'] || 0}</span>
                      <span className="text-orange-400">2★: {crmSummary?.rating_distribution?.['2'] || 0}</span>
                      <span className="text-rose-400">1★: {crmSummary?.rating_distribution?.['1'] || 0}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-2">Distribución de satisfacción estudiantil</p>
                  </div>
                </div>

                {/* Reviews List & Feedback Comments */}
                <div className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-6 shadow-lg space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      <Star className="w-5 h-5 text-amber-400" />
                      Reseñas y Retroalimentación de Aspirantes
                    </h3>
                    <span className="text-xs text-slate-400">{crmReviews.length} registradas</span>
                  </div>

                  <div className="overflow-x-auto">
                    {crmReviews.length === 0 ? (
                      <div className="text-center py-10 text-slate-500 text-xs">
                        Aún no se han registrado reseñas de atención personalizada.
                      </div>
                    ) : (
                      <table className="w-full text-left text-xs text-slate-300">
                        <thead className="bg-slate-900/60 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-700">
                          <tr>
                            <th className="py-3 px-4">Sesión ID</th>
                            <th className="py-3 px-4">Documento</th>
                            <th className="py-3 px-4">Calificación</th>
                            <th className="py-3 px-4">Comentarios / Notas</th>
                            <th className="py-3 px-4">Fecha</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800 font-medium">
                          {crmReviews.map((r) => (
                            <tr key={r.id} className="hover:bg-slate-800/40">
                              <td className="py-3 px-4 font-mono text-indigo-300">{r.session_id}</td>
                              <td className="py-3 px-4 font-mono text-slate-400">{r.national_id}</td>
                              <td className="py-3 px-4">
                                <span className="inline-flex items-center gap-1 bg-amber-500/10 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-md font-bold">
                                  {r.rating} ★
                                </span>
                              </td>
                              <td className="py-3 px-4 italic text-slate-300 max-w-xs truncate">
                                {r.notes || <span className="text-slate-600 not-italic">Sin comentarios adicionales</span>}
                              </td>
                              <td className="py-3 px-4 text-slate-500 text-[11px]">
                                {new Date(r.created_at).toLocaleString()}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                </div>

                {/* Profiles Table */}
                <div className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-6 shadow-lg space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      <UserCheck className="w-5 h-5 text-indigo-400" />
                      Directorio de Perfiles de Aspirantes (CRM)
                    </h3>
                    <span className="text-xs text-slate-400">{crmProfiles.length} perfiles</span>
                  </div>

                  <div className="overflow-x-auto">
                    {crmProfiles.length === 0 ? (
                      <div className="text-center py-10 text-slate-500 text-xs">
                        No hay perfiles de aspirantes registrados en el CRM.
                      </div>
                    ) : (
                      <table className="w-full text-left text-xs text-slate-300">
                        <thead className="bg-slate-900/60 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-700">
                          <tr>
                            <th className="py-3 px-4">Aspirante</th>
                            <th className="py-3 px-4">Cédula / Documento</th>
                            <th className="py-3 px-4">Canal</th>
                            <th className="py-3 px-4 text-center">Escalaciones</th>
                            <th className="py-3 px-4 text-center">Mensajes Enviados</th>
                            <th className="py-3 px-4">Última Interacción</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800 font-medium">
                          {crmProfiles.map((p) => (
                            <tr key={p.id} className="hover:bg-slate-800/40">
                              <td className="py-3 px-4 font-bold text-white">{p.full_name}</td>
                              <td className="py-3 px-4 font-mono text-slate-400">{p.national_id}</td>
                              <td className="py-3 px-4 capitalize">
                                <span className="bg-slate-800 px-2 py-0.5 rounded text-indigo-300 border border-slate-700">
                                  {p.channel}
                                </span>
                              </td>
                              <td className="py-3 px-4 text-center font-bold text-amber-400">
                                {p.total_escalations_count}
                              </td>
                              <td className="py-3 px-4 text-center font-bold text-emerald-400">
                                {p.total_messages_sent}
                              </td>
                              <td className="py-3 px-4 text-slate-500 text-[11px]">
                                {new Date(p.last_interaction_at).toLocaleString()}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Confirmation Modal for Ending Session */}
      {isCloseModalOpen && selectedSession && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl max-w-md w-full p-6 text-slate-100 shadow-2xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-rose-500/20 text-rose-400 border border-rose-500/30 rounded-xl">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">¿Finalizar Atención Personalizada?</h4>
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
                className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleConfirmCloseSession}
                disabled={isClosing}
                className="px-5 py-2 text-xs font-bold text-white bg-rose-600 hover:bg-rose-700 rounded-xl shadow-md transition-all disabled:opacity-50"
              >
                {isClosing ? 'Finalizando...' : 'Sí, Finalizar Atención'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
