import React, { useState, useEffect } from 'react';
import { 
  FaShieldAlt, FaChartBar, FaKey, FaComments, FaSignOutAlt, 
  FaSync, FaCheckCircle, FaExclamationTriangle, FaClock, 
  FaDollarSign, FaBolt, FaLayerGroup, FaEye, FaLock, FaUser,
  FaGoogle, FaRobot
} from 'react-icons/fa';
import { 
  adminLogin, getAdminMetrics, getProviderSettings, 
  updateProviderSettings, getVisitorConversations, 
  getVisitorConversationTranscript 
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

  // Active portal tab: 'metrics' | 'conversations' | 'settings'
  const [activeTab, setActiveTab] = useState('metrics');

  // Metrics state
  const [metrics, setMetrics] = useState(null);
  const [metricsLoading, setMetricsLoading] = useState(false);

  // Conversations state
  const [conversations, setConversations] = useState([]);
  const [selectedSessionId, setSelectedSessionId] = useState(null);
  const [transcript, setTranscript] = useState([]);
  const [transcriptLoading, setTranscriptLoading] = useState(false);

  // Provider settings state
  const [providerSettings, setProviderSettings] = useState(null);
  const [activeProvider, setActiveProvider] = useState('gemini');
  const [geminiKeyInput, setGeminiKeyInput] = useState('');
  const [groqKeyInput, setGroqKeyInput] = useState('');
  const [openaiKeyInput, setOpenaiKeyInput] = useState('');
  const [settingsFeedback, setSettingsFeedback] = useState({ type: '', text: '' });
  const [savingSettings, setSavingSettings] = useState(false);

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
      setLoginError(err.message || 'Error al iniciar sesión');
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

  // Load metrics
  const fetchMetrics = async () => {
    if (!token) return;
    setMetricsLoading(true);
    try {
      const data = await getAdminMetrics(token);
      setMetrics(data);
    } catch (err) {
      if (err.message.includes('No autorizado')) {
        handleLogout();
      }
    } finally {
      setMetricsLoading(false);
    }
  };

  // Load conversations
  const fetchConversations = async () => {
    try {
      const data = await getVisitorConversations(50, 0);
      setConversations(data || []);
    } catch (err) {
      console.error(err);
    }
  };

  // Load transcript for session
  const handleViewTranscript = async (sessId) => {
    setSelectedSessionId(sessId);
    setTranscriptLoading(true);
    try {
      const msgs = await getVisitorConversationTranscript(sessId);
      setTranscript(msgs || []);
    } catch (err) {
      console.error(err);
    } finally {
      setTranscriptLoading(false);
    }
  };

  // Load provider settings
  const fetchProviderSettings = async () => {
    if (!token) return;
    try {
      const data = await getProviderSettings(token);
      setProviderSettings(data);
      if (data.active_provider) {
        setActiveProvider(data.active_provider);
      }
    } catch (err) {
      console.error(err);
    }
  };

  // Save provider settings
  const handleSaveProviders = async (e) => {
    e.preventDefault();
    setSavingSettings(true);
    setSettingsFeedback({ type: '', text: '' });
    try {
      const payload = { active_provider: activeProvider };
      if (geminiKeyInput.trim()) payload.gemini_api_key = geminiKeyInput.trim();
      if (groqKeyInput.trim()) payload.groq_api_key = groqKeyInput.trim();
      if (openaiKeyInput.trim()) payload.openai_api_key = openaiKeyInput.trim();

      const res = await updateProviderSettings(token, payload);
      setSettingsFeedback({ type: 'success', text: res.message || 'Configuración guardada exitosamente.' });
      setGeminiKeyInput('');
      setGroqKeyInput('');
      setOpenaiKeyInput('');
      fetchProviderSettings();
    } catch (err) {
      setSettingsFeedback({ type: 'error', text: err.message || 'Error al actualizar configuración.' });
    } finally {
      setSavingSettings(false);
    }
  };

  useEffect(() => {
    if (token) {
      fetchMetrics();
      fetchConversations();
      fetchProviderSettings();
    }
  }, [token]);

  // If not logged in, render Secure Login view
  if (!token) {
    return (
      <div className="min-h-screen bg-[#070515] text-slate-100 flex items-center justify-center p-5 relative">
        <div className="max-w-md w-full p-8 sm:p-10 rounded-3xl bg-[#100c2a] border border-white/10 shadow-2xl space-y-6">
          <div className="text-center space-y-2">
            <div className="w-14 h-14 rounded-2xl bg-brand-lime text-brand-dark flex items-center justify-center text-2xl mx-auto font-bold shadow-lg shadow-brand-lime/20">
              <FaShieldAlt />
            </div>
            <h2 className="font-display text-3xl uppercase text-white tracking-wide">Vanguard Staff</h2>
            <p className="text-xs text-slate-400">Autenticación segura para panel de control y métricas</p>
          </div>

          {loginError && (
            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
              <FaExclamationTriangle />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-xs font-bold uppercase text-slate-400 block mb-1 flex items-center gap-1.5">
                <FaUser className="text-[10px]" /> Usuario Administrador
              </label>
              <input
                type="text"
                required
                value={loginUsername}
                onChange={(e) => setLoginUsername(e.target.value)}
                placeholder="admin"
                className="w-full px-4 py-3 bg-white/5 rounded-xl border border-white/10 focus:border-brand-lime focus:outline-none text-white text-sm"
              />
            </div>

            <div>
              <label className="text-xs font-bold uppercase text-slate-400 block mb-1 flex items-center gap-1.5">
                <FaLock className="text-[10px]" /> Contraseña
              </label>
              <input
                type="password"
                required
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-white/5 rounded-xl border border-white/10 focus:border-brand-lime focus:outline-none text-white text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={isLoggingIn}
              className="w-full py-3.5 bg-brand-lime hover:bg-[#b0f55c] text-brand-dark font-bold uppercase text-sm rounded-xl transition-all shadow-lg shadow-brand-lime/20 cursor-pointer"
            >
              {isLoggingIn ? 'Verificando...' : 'Iniciar Sesión'}
            </button>
          </form>

          <div className="text-center pt-2">
            <button onClick={onNavigateToLanding} className="text-xs text-slate-400 hover:text-white transition-colors">
              ← Volver a la página principal
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070515] text-slate-100 font-sans flex flex-col">
      
      {/* ================= ADMIN TOPBAR ================= */}
      <header className="h-16 bg-[#0c0926] border-b border-white/10 px-6 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-brand-lime text-brand-dark flex items-center justify-center font-bold">
            <FaShieldAlt />
          </div>
          <div>
            <span className="font-display text-xl uppercase tracking-wider text-white leading-none block">Vanguard Control</span>
            <span className="text-[10px] text-slate-400 font-mono">Admin: {currentUser?.username || 'admin'}</span>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('metrics')}
            className={`px-3.5 py-1.5 rounded-lg flex items-center gap-2 transition-colors ${
              activeTab === 'metrics' ? 'bg-brand-lime text-brand-dark' : 'text-slate-300 hover:text-white'
            }`}
          >
            <FaChartBar />
            <span>Métricas & KPIs</span>
          </button>
          <button
            onClick={() => { setActiveTab('conversations'); fetchConversations(); }}
            className={`px-3.5 py-1.5 rounded-lg flex items-center gap-2 transition-colors ${
              activeTab === 'conversations' ? 'bg-brand-lime text-brand-dark' : 'text-slate-300 hover:text-white'
            }`}
          >
            <FaComments />
            <span>Conversaciones ({conversations.length})</span>
          </button>
          <button
            onClick={() => { setActiveTab('settings'); fetchProviderSettings(); }}
            className={`px-3.5 py-1.5 rounded-lg flex items-center gap-2 transition-colors ${
              activeTab === 'settings' ? 'bg-brand-lime text-brand-dark' : 'text-slate-300 hover:text-white'
            }`}
          >
            <FaKey />
            <span>Switching de API Keys</span>
          </button>
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onNavigateToChat}
            className="text-xs px-3 py-1.5 rounded-lg border border-white/10 text-slate-300 hover:text-white hover:bg-white/5"
          >
            Abrir Asistente
          </button>
          <button
            onClick={handleLogout}
            className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-500/10 border border-red-500/20"
          >
            <FaSignOutAlt />
            <span>Salir</span>
          </button>
        </div>
      </header>

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full space-y-8">
        
        {/* TAB 1: METRICS */}
        {activeTab === 'metrics' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-display text-3xl uppercase text-white tracking-wide">Métricas Operativas en Tiempo Real</h2>
                <p className="text-xs text-slate-400">Telemetría calculada sobre todas las consultas procesadas</p>
              </div>
              <button
                onClick={fetchMetrics}
                disabled={metricsLoading}
                className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 text-xs font-semibold flex items-center gap-2"
              >
                <FaSync className={metricsLoading ? 'animate-spin' : ''} />
                <span>Actualizar</span>
              </button>
            </div>

            {metrics && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-6 rounded-3xl bg-[#100c2a] border border-white/10 space-y-2">
                  <span className="text-xs text-slate-400 uppercase font-bold flex items-center gap-1.5"><FaLayerGroup /> Total Consultas</span>
                  <div className="text-3xl font-display text-white">{metrics.total_queries_processed}</div>
                  <p className="text-[11px] text-slate-400">Tráfico global acumulado</p>
                </div>
                <div className="p-6 rounded-3xl bg-[#100c2a] border border-white/10 space-y-2">
                  <span className="text-xs text-brand-lime uppercase font-bold flex items-center gap-1.5"><FaBolt /> Triage Determinista</span>
                  <div className="text-3xl font-display text-brand-lime">{metrics.resolved_by_faq_triage}</div>
                  <p className="text-[11px] text-slate-400">$0 USD • 0 tokens consumidos</p>
                </div>
                <div className="p-6 rounded-3xl bg-[#100c2a] border border-white/10 space-y-2">
                  <span className="text-xs text-brand-blue uppercase font-bold flex items-center gap-1.5"><FaClock /> Latencia Promedio</span>
                  <div className="text-3xl font-display text-brand-blue">{metrics.average_latency_ms} ms</div>
                  <p className="text-[11px] text-slate-400">Tiempo de respuesta RAG</p>
                </div>
                <div className="p-6 rounded-3xl bg-[#100c2a] border border-white/10 space-y-2">
                  <span className="text-xs text-brand-yellow uppercase font-bold flex items-center gap-1.5"><FaDollarSign /> Costo Estimado</span>
                  <div className="text-3xl font-display text-brand-yellow">${metrics.total_cost_usd} USD</div>
                  <p className="text-[11px] text-slate-400">Tokens: {metrics.total_tokens_consumed?.total || 0}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB 2: CONVERSATIONS */}
        {activeTab === 'conversations' && (
          <div className="space-y-6">
            <div>
              <h2 className="font-display text-3xl uppercase text-white tracking-wide">Registro de Conversaciones de Visitantes</h2>
              <p className="text-xs text-slate-400">Historial completo de auditoría y transcripciones de cada usuario</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Session list */}
              <div className="lg:col-span-1 p-4 rounded-3xl bg-[#100c2a] border border-white/10 space-y-2 max-h-[600px] overflow-y-auto">
                <div className="text-xs font-bold uppercase text-slate-400 px-2 mb-2">Sesiones Recientes</div>
                {conversations.length > 0 ? (
                  conversations.map((sess) => (
                    <button
                      key={sess.id}
                      onClick={() => handleViewTranscript(sess.id)}
                      className={`w-full text-left p-3 rounded-2xl border transition-all block ${
                        selectedSessionId === sess.id
                          ? 'bg-brand-lime/10 border-brand-lime/40 text-brand-lime'
                          : 'bg-white/5 border-white/5 hover:border-white/20 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-bold mb-1">
                        <span className="truncate">{sess.title || sess.id}</span>
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-white">{sess.channel}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 truncate">{sess.last_message || 'Sin mensajes'}</p>
                      <div className="flex items-center justify-between text-[10px] text-slate-500 mt-2">
                        <span>{sess.message_count} mensajes</span>
                        <span>{new Date(sess.updated_at).toLocaleDateString()}</span>
                      </div>
                    </button>
                  ))
                ) : (
                  <p className="text-xs text-slate-500 p-4">No hay conversaciones registradas.</p>
                )}
              </div>

              {/* Transcript Viewer */}
              <div className="lg:col-span-2 p-6 rounded-3xl bg-[#100c2a] border border-white/10 space-y-4 max-h-[600px] overflow-y-auto">
                <div className="text-xs font-bold uppercase text-slate-400 pb-2 border-b border-white/10">
                  {selectedSessionId ? `Transcripción: ${selectedSessionId}` : 'Selecciona una conversación'}
                </div>

                {transcriptLoading ? (
                  <div className="text-center py-12 text-slate-400 text-xs">Cargando mensajes...</div>
                ) : transcript.length > 0 ? (
                  <div className="space-y-4">
                    {transcript.map((m, idx) => (
                      <div key={idx} className={`p-4 rounded-2xl text-xs space-y-1.5 ${
                        m.sender === 'user' ? 'bg-white/10 border border-white/20' : 'bg-[#18133d] border border-white/10'
                      }`}>
                        <div className="flex items-center justify-between text-[10px] font-mono">
                          <span className={`font-bold uppercase ${m.sender === 'user' ? 'text-brand-lime' : 'text-brand-blue'}`}>
                            {m.sender === 'user' ? 'Usuario' : 'Vanguard Assistant'}
                          </span>
                          <span className="text-slate-400">{new Date(m.created_at).toLocaleTimeString()}</span>
                        </div>
                        <p className="text-slate-200 leading-relaxed whitespace-pre-line">{m.content}</p>
                        {m.latency_ms > 0 && (
                          <div className="text-[10px] text-slate-500 font-mono pt-1">
                            Latencia: {Math.round(m.latency_ms)}ms • Score: {m.confidence_score}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 text-slate-500 text-xs">
                    {selectedSessionId ? 'Esta conversación no contiene mensajes.' : 'Haz clic en una sesión a la izquierda para inspeccionar los mensajes.'}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: API KEY & PROVIDER SWITCHING */}
        {activeTab === 'settings' && (
          <div className="space-y-6 max-w-4xl">
            <div>
              <h2 className="font-display text-3xl uppercase text-white tracking-wide">Configuración de Proveedores LLM & API Keys</h2>
              <p className="text-xs text-slate-400">Conmutación dinámica en caliente sin reiniciar el servidor</p>
            </div>

            {settingsFeedback.text && (
              <div className={`p-4 rounded-2xl text-xs flex items-center gap-2 ${
                settingsFeedback.type === 'success' 
                  ? 'bg-brand-lime/10 border border-brand-lime/30 text-brand-lime' 
                  : 'bg-red-500/10 border border-red-500/30 text-red-300'
              }`}>
                {settingsFeedback.type === 'success' ? <FaCheckCircle /> : <FaExclamationTriangle />}
                <span>{settingsFeedback.text}</span>
              </div>
            )}

            <form onSubmit={handleSaveProviders} className="p-8 rounded-3xl bg-[#100c2a] border border-white/10 space-y-6">
              {/* Active Provider Selector */}
              <div>
                <label className="text-xs font-bold uppercase text-slate-400 block mb-3">Proveedor LLM Activo</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: 'gemini', name: 'Google Gemini', desc: 'gemini-2.5-flash', icon: <FaGoogle className="text-xl text-[#4285F4]" /> },
                    { id: 'groq', name: 'Groq LPU (Ultra-Fast)', desc: 'llama-3.3-70b', icon: <FaBolt className="text-xl text-brand-lime" /> },
                    { id: 'openai', name: 'OpenAI', desc: 'gpt-4o-mini', icon: <FaRobot className="text-xl text-brand-blue" /> },
                  ].map((p) => (
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
                      <div className="flex items-center justify-between mb-2">
                        {p.icon}
                        {activeProvider === p.id && <span className="text-[10px] font-bold bg-brand-lime text-brand-dark px-2 py-0.5 rounded-full uppercase">Activo</span>}
                      </div>
                      <span className="font-bold text-sm text-white block">{p.name}</span>
                      <span className="text-[11px] font-mono text-slate-400">{p.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* API Keys Inputs */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider">Claves de API Personalizadas</h3>
                
                {/* Gemini */}
                <div>
                  <label className="text-xs text-slate-300 block mb-1 font-medium">Google Gemini API Key</label>
                  <input
                    type="password"
                    value={geminiKeyInput}
                    onChange={(e) => setGeminiKeyInput(e.target.value)}
                    placeholder={providerSettings?.providers?.gemini?.masked_key || "AIzaSy..."}
                    className="w-full px-4 py-3 bg-white/5 rounded-xl border border-white/10 focus:border-brand-lime focus:outline-none text-white text-xs font-mono"
                  />
                </div>

                {/* Groq */}
                <div>
                  <label className="text-xs text-slate-300 block mb-1 font-medium">Groq API Key (LPU Inference)</label>
                  <input
                    type="password"
                    value={groqKeyInput}
                    onChange={(e) => setGroqKeyInput(e.target.value)}
                    placeholder={providerSettings?.providers?.groq?.masked_key || "gsk_..."}
                    className="w-full px-4 py-3 bg-white/5 rounded-xl border border-white/10 focus:border-brand-lime focus:outline-none text-white text-xs font-mono"
                  />
                </div>

                {/* OpenAI */}
                <div>
                  <label className="text-xs text-slate-300 block mb-1 font-medium">OpenAI API Key</label>
                  <input
                    type="password"
                    value={openaiKeyInput}
                    onChange={(e) => setOpenaiKeyInput(e.target.value)}
                    placeholder={providerSettings?.providers?.openai?.masked_key || "sk-..."}
                    className="w-full px-4 py-3 bg-white/5 rounded-xl border border-white/10 focus:border-brand-lime focus:outline-none text-white text-xs font-mono"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={savingSettings}
                className="w-full py-3.5 bg-brand-lime hover:bg-[#b0f55c] text-brand-dark font-bold uppercase text-sm rounded-xl transition-all shadow-lg shadow-brand-lime/20 cursor-pointer"
              >
                {savingSettings ? 'Guardando cambios...' : 'Guardar y Aplicar Proveedor'}
              </button>
            </form>
          </div>
        )}

      </main>
    </div>
  );
}
