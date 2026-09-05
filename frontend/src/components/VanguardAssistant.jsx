import React, { useState, useEffect, useRef } from 'react';
import { 
  FaGraduationCap, FaPlus, FaHistory, FaSearch, FaPaperPlane, 
  FaBookOpen, FaCheckCircle, FaClock, FaMapMarkerAlt, 
  FaMoneyBillWave, FaCertificate, FaArrowLeft, FaTrash, 
  FaChevronLeft, FaChevronRight, FaRegCopy, FaCheck, FaRobot,
  FaTelegramPlane, FaUserCheck, FaExclamationTriangle, FaBars
} from 'react-icons/fa';
import { sendChatMessage } from '../services/api';
import EscalationModal from './EscalationModal';
import LiveAdvisorChat from './LiveAdvisorChat';
import VanguardLogo from './VanguardLogo';

const TELEGRAM_BOT_NAME = import.meta.env.VITE_TELEGRAM_BOT_NAME || 'Vanguard_academy_bot';
const TELEGRAM_BOT_URL = `https://t.me/${TELEGRAM_BOT_NAME}`;

const QUICK_SUGGESTIONS = [
  "¿Cuánto cuesta el intensivo de inglés y qué horarios tienen en Bogotá?",
  "¿Cuáles son los requisitos de inscripción y documentos requeridos?",
  "¿Cómo funciona la prueba de clasificación gratuita de 25 minutos?",
  "¿Qué medios de pago reciben (Nequi, Bancolombia, PSE)?",
  "¿Tienen preparación para exámenes IELTS, TOEFL y Cambridge?",
  "¿Cuáles son los horarios de sábados y tarifas de la Sede Medellín?",
];

const DEFAULT_WELCOME_MSG = {
  id: 'welcome_init',
  sender: 'assistant',
  content: '¡Hola! Bienvenido a **Vanguard Assistant**, tu asesor académico inteligente oficial. Estoy capacitado con los reglamentos, planes de estudio, horarios y tarifas de la **Academia de Idiomas Colombiana**.\n\n¿En qué idioma o programa estás interesado el día de hoy?',
  sources: [
    { document: 'cursos_y_modalidades.md', section: 'Oferta Académica' },
    { document: 'precios_y_metodos_de_pago.md', section: 'Tarifas 2026' }
  ],
  confidence_score: 1.0,
  latency_ms: 120,
  created_at: new Date().toISOString(),
};

export default function VanguardAssistant({ onNavigateToLanding, onNavigateToAdmin }) {
  const [sidebarOpen, setSidebarOpen] = useState(() => typeof window !== 'undefined' ? window.innerWidth >= 1024 : false);
  const [inputQuery, setInputQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  // Escalation & Live Chat Modal State
  const [isEscalationModalOpen, setIsEscalationModalOpen] = useState(false);
  const [escalationContext, setEscalationContext] = useState('');
  const [liveChatSession, setLiveChatSession] = useState(null);

  // Active Session & Local Threads
  const [sessionId, setSessionId] = useState(() => {
    return localStorage.getItem('vanguard_active_session_id') || `sess_${Date.now()}`;
  });

  const [savedSessions, setSavedSessions] = useState(() => {
    try {
      const stored = localStorage.getItem('vanguard_sessions_index');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [messages, setMessages] = useState(() => {
    const local = localStorage.getItem(`vanguard_chat_${sessionId}`);
    if (local) {
      try { return JSON.parse(local); } catch (_) {}
    }
    return [DEFAULT_WELCOME_MSG];
  });

  const messagesEndRef = useRef(null);

  // Sync messages & sessions index
  useEffect(() => {
    localStorage.setItem('vanguard_active_session_id', sessionId);
    localStorage.setItem(`vanguard_chat_${sessionId}`, JSON.stringify(messages));

    // Update sessions index
    setSavedSessions((prev) => {
      const firstUserMsg = messages.find((m) => m.sender === 'user');
      const title = firstUserMsg ? firstUserMsg.content.slice(0, 36) + '...' : 'Nueva Consulta';
      const exists = prev.find((s) => s.id === sessionId);
      let updated;
      if (exists) {
        updated = prev.map((s) => (s.id === sessionId ? { ...s, title, updatedAt: Date.now() } : s));
      } else {
        updated = [{ id: sessionId, title, updatedAt: Date.now() }, ...prev];
      }
      localStorage.setItem('vanguard_sessions_index', JSON.stringify(updated));
      return updated;
    });
  }, [sessionId, messages]);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // Handle New Query Thread
  const handleNewSearch = () => {
    const newId = `sess_${Date.now()}`;
    setSessionId(newId);
    setMessages([
      {
        id: `welcome_${Date.now()}`,
        sender: 'assistant',
        content: 'Nueva consulta iniciada. Puedes preguntarme sobre programas de **Inglés, Francés, Alemán, Italiano o Portugués**, sedes en Bogotá y Medellín, tarifas en COP o pruebas de nivelación.',
        sources: [{ document: 'cursos_y_modalidades.md', section: 'General' }],
        confidence_score: 1.0,
        latency_ms: 85,
        created_at: new Date().toISOString(),
      }
    ]);
  };

  // Switch to existing session
  const handleSelectSession = (sessId) => {
    setSessionId(sessId);
    const local = localStorage.getItem(`vanguard_chat_${sessId}`);
    if (local) {
      try {
        setMessages(JSON.parse(local));
      } catch (_) {
        setMessages([DEFAULT_WELCOME_MSG]);
      }
    }
  };

  // Clear all local conversations
  const handleClearAllHistory = () => {
    savedSessions.forEach((s) => localStorage.removeItem(`vanguard_chat_${s.id}`));
    localStorage.removeItem('vanguard_sessions_index');
    localStorage.removeItem(`vanguard_chat_${sessionId}`);
    setSavedSessions([]);
    const freshId = `sess_${Date.now()}`;
    setSessionId(freshId);
    setMessages([DEFAULT_WELCOME_MSG]);
  };

  // Sanitize text before rendering to user
  const cleanDisplayContent = (text) => {
    if (!text) return '';
    let cleaned = String(text)
      .replace(/\[\[ESCALATE\]\]/g, '')
      .replace(/\[NO_INFO\]/g, '')
      .replace(/Failed to process inquiry:[^.]*\./gi, '')
      .replace(/Error getting collection:[^.]*\./gi, '')
      .replace(/Collection \[[a-f0-9-]+\] does not exist\.?/gi, '')
      .replace(/\*{1,3}([^*\n]+)\*{1,3}/g, '$1')
      .replace(/^\s*\*\s+/gm, '• ')
      .replace(/\*/g, '')
      .replace(/\s{2,}/g, ' ')
      .trim();
    return cleaned;
  };

  // Send Message
  const handleSend = async (queryText) => {
    const q = (queryText || inputQuery).trim();
    if (!q || isLoading) return;

    setInputQuery('');
    const userMsg = {
      id: `user_${Date.now()}`,
      sender: 'user',
      content: q,
      created_at: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsLoading(true);

    try {
      const res = await sendChatMessage(q, sessionId, 'web');
      const isEscalated = res.escalated || res.status === 'ESCALATED_TO_HUMAN';

      const botMsg = {
        id: `bot_${Date.now()}`,
        sender: 'assistant',
        content: cleanDisplayContent(res.response) || 'No se obtuvo información para esta consulta.',
        status: res.status,
        sources: res.sources || [],
        confidence_score: res.confidence_score || 0.0,
        latency_ms: res.telemetry?.latency_ms || 0.0,
        escalated: isEscalated,
        created_at: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, botMsg]);

      // If escalated (Tier 3 exhaustion or ungrounded), open identification modal
      if (isEscalated) {
        setEscalationContext(q);
        setTimeout(() => {
          setIsEscalationModalOpen(true);
        }, 600);
      }
    } catch (err) {
      const errMsg = {
        id: `err_${Date.now()}`,
        sender: 'assistant',
        content: 'En este momento estamos experimentando una breve intermitencia técnica en el servicio. Si deseas atención inmediata, puedes solicitar conexión con un asesor académico.',
        sources: [],
        confidence_score: 0.0,
        latency_ms: 0.0,
        escalated: true,
        created_at: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, errMsg]);
      setEscalationContext(q);
      setTimeout(() => {
        setIsEscalationModalOpen(true);
      }, 600);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex h-screen bg-[#070515] text-slate-100 font-sans overflow-hidden antialiased">
      
      {/* Mobile Drawer Backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/75 backdrop-blur-sm lg:hidden transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ================= COMPACT PERPLEXITY-STYLE SIDEBAR ================= */}
      <aside 
        className={`fixed lg:relative inset-y-0 left-0 z-50 lg:z-20 w-72 lg:${
          sidebarOpen ? 'w-64' : 'w-16'
        } bg-[#0c0926] border-r border-white/10 flex-shrink-0 flex flex-col justify-between transition-transform lg:transition-all duration-300 shadow-2xl lg:shadow-none ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full overflow-hidden">
          {/* Header brand */}
          <div className="p-3.5 border-b border-white/10">
            <div className="flex items-center justify-between">
              {sidebarOpen ? (
                <button onClick={onNavigateToLanding} className="flex items-center gap-2.5 text-left group hover:opacity-90 transition-opacity">
                  <VanguardLogo size="sm" subtitle="AI Assistant" />
                </button>
              ) : (
                <button onClick={onNavigateToLanding} className="mx-auto block hover:opacity-90 transition-opacity" title="Vanguard AI Assistant">
                  <VanguardLogo size="sm" showText={false} />
                </button>
              )}
              <button 
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-white/5 transition-colors"
                title={sidebarOpen ? "Cerrar panel" : "Expandir panel"}
              >
                {sidebarOpen ? <FaChevronLeft className="text-xs" /> : <FaChevronRight className="text-xs" />}
              </button>
            </div>

            {/* New query button */}
            {sidebarOpen && (
              <button
                onClick={() => {
                  handleNewSearch();
                  if (typeof window !== 'undefined' && window.innerWidth < 1024) setSidebarOpen(false);
                }}
                className="mt-3 w-full flex items-center justify-between px-3 py-2 rounded-xl bg-brand-lime/10 border border-brand-lime/30 hover:bg-brand-lime/20 text-xs font-semibold text-brand-lime transition-all group"
              >
                <div className="flex items-center gap-2">
                  <FaPlus className="text-xs" />
                  <span>Nueva Consulta</span>
                </div>
                <span className="text-[10px] bg-brand-lime/20 px-1.5 py-0.5 rounded font-mono">RAG</span>
              </button>
            )}
          </div>

          {/* Nav quick topics */}
          {sidebarOpen && (
            <div className="p-2.5 space-y-1 text-xs border-b border-white/5">
              <button 
                onClick={() => {
                  handleSend("¿Cuáles son los horarios y sedes en Bogotá y Medellín?");
                  if (typeof window !== 'undefined' && window.innerWidth < 1024) setSidebarOpen(false);
                }} 
                className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors text-left"
              >
                <FaMapMarkerAlt className="text-brand-orange text-xs flex-shrink-0" />
                <span className="truncate">Sedes Bogotá & Medellín</span>
              </button>
              <button 
                onClick={() => {
                  handleSend("¿Cuáles son los precios y formas de pago en COP?");
                  if (typeof window !== 'undefined' && window.innerWidth < 1024) setSidebarOpen(false);
                }} 
                className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors text-left"
              >
                <FaMoneyBillWave className="text-brand-lime text-xs flex-shrink-0" />
                <span className="truncate">Precios & Pagos COP</span>
              </button>
              <button 
                onClick={() => {
                  handleSend("¿Cómo son los niveles del Marco Común Europeo MCER?");
                  if (typeof window !== 'undefined' && window.innerWidth < 1024) setSidebarOpen(false);
                }} 
                className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors text-left"
              >
                <FaCertificate className="text-brand-blue text-xs flex-shrink-0" />
                <span className="truncate">Pensum MCER (A1 a C1)</span>
              </button>
            </div>
          )}

          {/* Real user history threads */}
          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-1 custom-scroll">
            {sidebarOpen && (
              <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 mb-2">
                <span className="flex items-center gap-1.5"><FaHistory /> Historial</span>
                {savedSessions.length > 0 && (
                  <button onClick={handleClearAllHistory} className="hover:text-red-400 text-[10px] normal-case transition-colors">
                    Limpiar
                  </button>
                )}
              </div>
            )}
            {sidebarOpen && (
              savedSessions.length > 0 ? (
                savedSessions.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      handleSelectSession(s.id);
                      if (typeof window !== 'undefined' && window.innerWidth < 1024) setSidebarOpen(false);
                    }}
                    className={`w-full text-left px-2.5 py-2 rounded-lg text-xs truncate transition-all block ${
                      sessionId === s.id
                        ? 'bg-brand-lime/10 text-brand-lime border border-brand-lime/30 font-medium'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="block truncate">{s.title}</span>
                  </button>
                ))
              ) : (
                sidebarOpen && <p className="text-[11px] text-slate-500 px-2 italic">Sin consultas previas</p>
              )
            )}
          </div>

          {/* Bottom links */}
          {sidebarOpen && (
            <div className="p-3 border-t border-white/10 space-y-2">
              <a
                href={TELEGRAM_BOT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between px-3 py-2 rounded-xl bg-[#229ED9]/10 hover:bg-[#229ED9]/20 border border-[#229ED9]/30 text-[#229ED9] text-xs font-semibold transition-colors"
              >
                <div className="flex items-center gap-2">
                  <FaTelegramPlane />
                  <span>Bot Telegram</span>
                </div>
                <span className="text-[10px] bg-[#229ED9]/20 px-1.5 py-0.5 rounded font-mono">24/7</span>
              </a>

              <button
                onClick={onNavigateToLanding}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-medium transition-colors"
              >
                <FaArrowLeft className="text-xs" />
                <span>Volver a la Landing</span>
              </button>
            </div>
          )}
        </div>
      </aside>

      {/* ================= MAIN ASSISTANT CANVAS ================= */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative bg-[#070515]">
        
        {/* Top Action Bar - fully responsive */}
        <header className="h-14 border-b border-white/10 bg-[#0c0926]/90 backdrop-blur-md px-3 sm:px-6 flex items-center justify-between flex-shrink-0 z-10">
          <div className="flex items-center gap-2">
            {/* Mobile menu toggle button */}
            <button
              type="button"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Abrir panel lateral"
              title="Panel lateral"
            >
              <FaBars className="text-sm" />
            </button>

            {/* Back to landing */}
            <button
              type="button"
              onClick={onNavigateToLanding}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              title="Volver a la Landing"
            >
              <FaArrowLeft className="text-xs" />
            </button>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="w-2 h-2 rounded-full bg-brand-lime animate-ping flex-shrink-0"></span>
              <span className="text-slate-200 font-semibold text-xs truncate max-w-[130px] sm:max-w-none">
                Vanguard Assistant
              </span>
              <span className="text-slate-500 hidden sm:inline">•</span>
              <span className="font-mono text-[11px] text-slate-400 hidden md:inline truncate max-w-[110px]">
                {sessionId}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={TELEGRAM_BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 h-8 px-2.5 sm:px-3 rounded-full bg-[#229ED9]/15 hover:bg-[#229ED9]/25 border border-[#229ED9]/30 text-[#229ED9] text-xs font-bold transition-all whitespace-nowrap"
              title="Abrir en Telegram"
            >
              <FaTelegramPlane className="text-xs flex-shrink-0" />
              <span className="hidden sm:inline">Telegram</span>
            </a>

            <button
              onClick={onNavigateToAdmin}
              className="inline-flex items-center justify-center h-8 text-xs text-slate-400 hover:text-white px-2.5 sm:px-3 rounded-full border border-white/10 hover:border-white/30 transition-colors whitespace-nowrap"
            >
              Staff
            </button>
          </div>
        </header>

        {/* Scrollable Chat Feed Area */}
        <div className="flex-1 overflow-y-auto px-3 sm:px-6 md:px-12 py-4 sm:py-6 max-w-4xl w-full mx-auto space-y-4 sm:space-y-6 custom-scroll">
          
          {messages.map((m) => {
            const isUser = m.sender === 'user';
            const isEscalated = m.escalated || m.status === 'ESCALATED_TO_HUMAN';

            if (isUser) {
              return (
                <div key={m.id} className="flex justify-end animate-fadeIn">
                  <div className="bg-[#1e1948] text-white px-5 py-3.5 rounded-3xl rounded-br-md max-w-2xl text-sm leading-relaxed border border-white/10 shadow-lg">
                    {m.content}
                  </div>
                </div>
              );
            }

            return (
              <div key={m.id} className="space-y-3 animate-fadeIn">
                {/* Assistant response header */}
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <div className="w-6 h-6 rounded-lg bg-brand-lime text-brand-dark flex items-center justify-center font-bold text-xs">
                    <FaRobot />
                  </div>
                  <span className="font-bold text-white">Vanguard Assistant</span>
                  <span className="text-slate-600">•</span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-brand-lime">
                    <FaCheckCircle className="text-[10px]" />
                    {isEscalated ? 'Escalamiento Asesor' : 'Verificado por Documentos Oficiales'}
                  </span>
                  {m.latency_ms > 0 && (
                    <>
                      <span className="text-slate-600">•</span>
                      <span className="text-[10px] font-mono text-slate-500">Latencia: {m.latency_ms.toFixed(0)}ms</span>
                    </>
                  )}
                </div>

                {/* Main message card */}
                <div className={`p-6 rounded-3xl border shadow-xl leading-relaxed text-sm ${
                  isEscalated 
                    ? 'bg-amber-950/20 border-amber-500/40 text-slate-100' 
                    : 'bg-[#100c2a] border-white/10 text-slate-200'
                }`}>
                  <div className="prose prose-invert max-w-none text-sm leading-relaxed whitespace-pre-wrap">
                    {cleanDisplayContent(m.content)}
                  </div>

                  {/* If Escalated -> Render Human Advisor Handover Button */}
                  {isEscalated && (
                    <div className="mt-5 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5 text-amber-300 text-xs font-semibold">
                        <FaUserCheck className="text-base" />
                        <span>¿Deseas atención personalizada en vivo con un asesor?</span>
                      </div>
                      <button
                        onClick={() => {
                          setEscalationContext(m.content);
                          setIsEscalationModalOpen(true);
                        }}
                        className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all hover:scale-105 cursor-pointer"
                      >
                        Conectar con Asesor
                      </button>
                    </div>
                  )}

                  {/* Sources Pill Citations */}
                  {m.sources && m.sources.length > 0 && (
                    <div className="mt-5 pt-4 border-t border-white/10 space-y-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block">
                        Fuentes Citadas:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {m.sources.map((s, sIdx) => (
                          <div 
                            key={sIdx}
                            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/5 border border-white/10 text-xs text-brand-lime font-mono"
                          >
                            <FaBookOpen className="text-[10px]" />
                            <span>{s.document}</span>
                            <span className="text-slate-500">•</span>
                            <span className="text-slate-300">{s.section}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Actions bar (Copy) */}
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                    <span className="text-[10px] font-mono text-slate-500">
                      Estado: {m.status || 'RESOLVED_BY_RAG'}
                    </span>
                    <button
                      onClick={() => copyToClipboard(m.content)}
                      className="flex items-center gap-1 hover:text-white transition-colors text-[11px]"
                    >
                      {copied ? <FaCheck className="text-brand-lime" /> : <FaRegCopy />}
                      <span>{copied ? 'Copiado' : 'Copiar respuesta'}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Loading Indicator */}
          {isLoading && (
            <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#100c2a] border border-white/10 text-xs text-slate-400 animate-pulse max-w-md">
              <FaRobot className="text-brand-lime text-base animate-bounce" />
              <span>Consultando documentos oficiales y sintetizando respuesta...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-3 sm:px-6 py-2 border-t border-white/5 bg-[#070515] flex-shrink-0">
          <div className="max-w-4xl mx-auto flex items-center gap-2 overflow-x-auto pb-1 text-xs no-scrollbar">
            <span className="text-slate-500 font-mono text-[10px] whitespace-nowrap">Sugerencias:</span>
            {QUICK_SUGGESTIONS.map((sug, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(sug)}
                className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs whitespace-nowrap transition-colors flex-shrink-0"
              >
                {sug}
              </button>
            ))}
          </div>
        </div>

        {/* Floating Centered Input Container */}
        <div className="p-3 sm:p-4 md:px-12 bg-[#0c0926]/95 border-t border-white/10 flex-shrink-0">
          <div className="max-w-4xl mx-auto">
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              className="relative rounded-2xl bg-[#141038] border border-white/15 focus-within:border-brand-lime shadow-2xl p-2 transition-colors"
            >
              <textarea
                rows={2}
                placeholder="Pregunta sobre programas, sedes Bogotá/Medellín, precios COP o pruebas de clasificación..."
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                className="w-full bg-transparent border-0 focus:ring-0 text-sm text-white placeholder:text-slate-500 resize-none outline-none px-3 py-1 block"
              />

              <div className="flex items-center justify-between pt-2 border-t border-white/10 px-2">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="inline-flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-md text-[11px] font-mono text-brand-lime border border-white/10">
                    <FaRobot className="text-xs" />
                    Cero Alucinaciones
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={!inputQuery.trim() || isLoading}
                  className="w-9 h-9 rounded-xl bg-brand-lime hover:bg-[#b0f55c] disabled:opacity-30 disabled:hover:bg-brand-lime text-brand-dark flex items-center justify-center font-bold shadow-md transition-transform active:scale-95 cursor-pointer"
                >
                  <FaPaperPlane className="text-xs" />
                </button>
              </div>
            </form>

            <p className="text-[10px] text-center text-slate-500 mt-2">
              Vanguard Assistant responde únicamente con base en documentos oficiales institucionales.
            </p>
          </div>
        </div>
      </main>

      {/* Human Escalation Identification Form Modal */}
      <EscalationModal
        isOpen={isEscalationModalOpen}
        initialQuery={escalationContext}
        onClose={() => setIsEscalationModalOpen(false)}
        onStartLiveChat={(info) => {
          setLiveChatSession(info);
        }}
      />

      {/* Floating Live Human Advisor WebSocket Chat Window */}
      {liveChatSession && (
        <LiveAdvisorChat
          sessionInfo={liveChatSession}
          onClose={() => setLiveChatSession(null)}
        />
      )}
    </div>
  );
}
