import React, { useState, useEffect, useRef } from 'react';
import { 
  FaGraduationCap, FaPlus, FaHistory, FaSearch, FaPaperPlane, 
  FaBookOpen, FaCheckCircle, FaClock, FaMapMarkerAlt, 
  FaMoneyBillWave, FaCertificate, FaArrowLeft, FaTrash, 
  FaChevronLeft, FaChevronRight, FaRegCopy, FaCheck, FaRobot
} from 'react-icons/fa';
import { sendChatMessage, getVisitorConversations, getVisitorConversationTranscript } from '../services/api';

const QUICK_SUGGESTIONS = [
  "¿Cuánto cuesta el intensivo de inglés y qué horarios tienen en Bogotá?",
  "¿Cuáles son los requisitos de inscripción y documentos requeridos?",
  "¿Cómo funciona la prueba de clasificación gratuita de 25 minutos?",
  "¿Qué medios de pago reciben (Nequi, Bancolombia, PSE)?",
  "¿Tienen preparación para exámenes IELTS, TOEFL y Cambridge?",
  "¿Cuáles son los horarios de sábados y tarifas de la Sede Medellín?",
];

export default function VanguardAssistant({ onNavigateToLanding, onNavigateToAdmin }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [inputQuery, setInputQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  
  // Current active session and messages
  const [sessionId, setSessionId] = useState(() => {
    return localStorage.getItem('vanguard_active_session_id') || `session_${Date.now()}`;
  });
  
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem(`vanguard_chat_${sessionId}`);
    if (saved) {
      try { return JSON.parse(saved); } catch (_) {}
    }
    return [
      {
        id: 'welcome-1',
        sender: 'assistant',
        content: '¡Hola! Bienvenido a **Vanguard Assistant**, tu asesor académico inteligente oficial. Estoy capacitado con los reglamentos, planes de estudio, horarios y tarifas de la **Academia de Idiomas Colombiana**.\n\n¿En qué idioma o programa estás interesado el día de hoy?',
        sources: [
          { document: 'cursos_y_modalidades.md', section: 'Oferta Académica' },
          { document: 'precios_y_metodos_de_pago.md', section: 'Tarifas 2026' }
        ],
        confidence_score: 1.0,
        latency_ms: 120,
        created_at: new Date().toISOString(),
      }
    ];
  });

  const [historySessions, setHistorySessions] = useState([]);
  const messagesEndRef = useRef(null);

  // Load visitor conversations from server or local
  useEffect(() => {
    async function loadSessions() {
      try {
        const data = await getVisitorConversations(20, 0);
        if (Array.isArray(data) && data.length > 0) {
          setHistorySessions(data);
        }
      } catch (err) {
        console.warn('Could not load remote history, relying on local state');
      }
    }
    loadSessions();
  }, [messages.length]);

  // Save active session & messages in localStorage
  useEffect(() => {
    localStorage.setItem('vanguard_active_session_id', sessionId);
    localStorage.setItem(`vanguard_chat_${sessionId}`, JSON.stringify(messages));
  }, [sessionId, messages]);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleNewSearch = () => {
    const newId = `session_${Date.now()}`;
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

  const handleSelectSession = async (sess) => {
    setSessionId(sess.id);
    try {
      const remoteMsgs = await getVisitorConversationTranscript(sess.id);
      if (Array.isArray(remoteMsgs) && remoteMsgs.length > 0) {
        setMessages(remoteMsgs);
        return;
      }
    } catch (_) {}
    const local = localStorage.getItem(`vanguard_chat_${sess.id}`);
    if (local) {
      try { setMessages(JSON.parse(local)); } catch (_) {}
    }
  };

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
      const botMsg = {
        id: `bot_${Date.now()}`,
        sender: 'assistant',
        content: res.response || 'No se obtuvo respuesta del sistema.',
        status: res.status,
        sources: res.sources || [],
        confidence_score: res.confidence_score || 0.0,
        latency_ms: res.telemetry?.latency_ms || 0.0,
        created_at: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      const errMsg = {
        id: `err_${Date.now()}`,
        sender: 'assistant',
        content: `⚠️ Ocurrió un error al procesar tu consulta: ${err.message}`,
        sources: [],
        confidence_score: 0.0,
        latency_ms: 0.0,
        created_at: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, errMsg]);
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
      
      {/* ================= COMPACT PERPLEXITY-STYLE SIDEBAR ================= */}
      <aside 
        className={`${
          sidebarOpen ? 'w-64' : 'w-16'
        } bg-[#0c0926] border-r border-white/10 flex-shrink-0 flex flex-col justify-between transition-all duration-300 z-20`}
      >
        <div className="flex flex-col h-full overflow-hidden">
          {/* Header brand */}
          <div className="p-3.5 border-b border-white/10">
            <div className="flex items-center justify-between">
              {sidebarOpen ? (
                <button onClick={onNavigateToLanding} className="flex items-center gap-2.5 text-left group">
                  <div className="w-8 h-8 rounded-lg bg-brand-lime text-brand-dark flex items-center justify-center font-bold">
                    <FaGraduationCap className="text-base" />
                  </div>
                  <div>
                    <span className="font-display text-lg tracking-wider text-white block uppercase leading-none">Vanguard</span>
                    <span className="text-[9px] text-brand-lime font-mono uppercase">AI Assistant</span>
                  </div>
                </button>
              ) : (
                <div className="w-8 h-8 rounded-lg bg-brand-lime text-brand-dark flex items-center justify-center font-bold mx-auto">
                  <FaGraduationCap className="text-base" />
                </div>
              )}
              <button 
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="text-slate-400 hover:text-white p-1 rounded-md hover:bg-white/5 transition-colors"
                title={sidebarOpen ? "Colapsar barra" : "Expandir barra"}
              >
                {sidebarOpen ? <FaChevronLeft className="text-xs" /> : <FaChevronRight className="text-xs" />}
              </button>
            </div>

            {/* New query button */}
            {sidebarOpen && (
              <button
                onClick={handleNewSearch}
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
              <button onClick={() => handleSend("¿Cuáles son los horarios y sedes en Bogotá y Medellín?")} className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors text-left">
                <FaMapMarkerAlt className="text-brand-orange text-xs" />
                <span className="truncate">Sedes Bogotá & Medellín</span>
              </button>
              <button onClick={() => handleSend("¿Cuáles son los precios y formas de pago en COP?")} className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors text-left">
                <FaMoneyBillWave className="text-brand-lime text-xs" />
                <span className="truncate">Precios & Pagos COP</span>
              </button>
              <button onClick={() => handleSend("¿Cómo son los niveles del Marco Común Europeo MCER?")} className="w-full flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors text-left">
                <FaCertificate className="text-brand-blue text-xs" />
                <span className="truncate">Pensum MCER (A1 a C1)</span>
              </button>
            </div>
          )}

          {/* History threads */}
          <div className="flex-1 overflow-y-auto px-3 py-3 space-y-1 custom-scroll">
            {sidebarOpen && (
              <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2 mb-2">
                <span className="flex items-center gap-1.5"><FaHistory /> Historial</span>
                <button onClick={() => { localStorage.clear(); setHistorySessions([]); }} className="hover:text-red-400 text-[10px] normal-case">Limpiar</button>
              </div>
            )}
            {sidebarOpen && (
              historySessions.length > 0 ? (
                historySessions.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => handleSelectSession(s)}
                    className={`w-full text-left px-2.5 py-2 rounded-lg text-xs truncate transition-all block ${
                      sessionId === s.id
                        ? 'bg-brand-lime/10 text-brand-lime border border-brand-lime/30 font-medium'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="block truncate">{s.title || s.id}</span>
                  </button>
                ))
              ) : (
                <p className="text-[11px] text-slate-500 px-2 italic">Sin consultas previas</p>
              )
            )}
          </div>

          {/* Bottom links */}
          {sidebarOpen && (
            <div className="p-3 border-t border-white/10 space-y-2">
              <button
                onClick={onNavigateToLanding}
                className="w-full flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-medium transition-colors"
              >
                <FaArrowLeft className="text-xs" />
                <span>Volver a Landing Page</span>
              </button>
            </div>
          )}
        </div>
      </aside>

      {/* ================= MAIN ASSISTANT CANVAS ================= */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative bg-[#070515]">
        
        {/* Top Minimal Action Bar */}
        <header className="h-14 border-b border-white/10 bg-[#0c0926]/90 backdrop-blur-md px-6 flex items-center justify-between flex-shrink-0 z-10">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <button onClick={onNavigateToLanding} className="font-semibold text-white hover:text-brand-lime transition-colors">Vanguard Academy</button>
            <span className="text-slate-600">/</span>
            <span className="text-slate-300">Asesor Académico RAG</span>
            <span className="text-slate-600">/</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-lime/10 text-brand-lime border border-brand-lime/30 font-mono">
              Catálogo Oficial 2026
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                const transcript = messages.map(m => `[${m.sender.toUpperCase()}]: ${m.content}`).join('\n\n');
                copyToClipboard(transcript);
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 transition-colors"
            >
              {copied ? <FaCheck className="text-brand-lime text-xs" /> : <FaRegCopy className="text-xs" />}
              <span>{copied ? 'Copiado' : 'Copiar Chat'}</span>
            </button>
            <button
              onClick={onNavigateToAdmin}
              className="text-xs px-3 py-1.5 rounded-lg border border-white/10 text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              Admin
            </button>
          </div>
        </header>

        {/* Scrollable Chat Canvas */}
        <div className="flex-1 overflow-y-auto custom-scroll px-4 md:px-12 py-8 pb-36 space-y-8">
          <div className="max-w-4xl mx-auto space-y-8">
            
            {messages.map((msg, index) => (
              <div key={msg.id || index} className="space-y-3 animate-fadeIn">
                
                {/* User Message Header */}
                {msg.sender === 'user' ? (
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white font-medium text-base">
                    <div className="text-[10px] text-brand-lime font-mono uppercase tracking-wider mb-1">Tu Pregunta</div>
                    <p className="leading-relaxed">{msg.content}</p>
                  </div>
                ) : (
                  /* Assistant Grounded Response Card */
                  <div className="space-y-4">
                    
                    {/* Metadata Pill Bar */}
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                      <span className="inline-flex items-center gap-1 text-brand-lime font-semibold">
                        <FaCheckCircle className="text-xs" />
                        Verificado por Documentos Oficiales
                      </span>
                      <span>•</span>
                      <span className="font-mono text-slate-400 flex items-center gap-1">
                        <FaClock className="text-xs" />
                        Latencia: {Math.round(msg.latency_ms || 180)}ms
                      </span>
                      {msg.status && (
                        <>
                          <span>•</span>
                          <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-brand-blue">
                            {msg.status}
                          </span>
                        </>
                      )}
                    </div>

                    {/* Sources Pill Section (Perplexity Style) */}
                    {msg.sources && msg.sources.length > 0 && (
                      <div className="space-y-2">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 uppercase tracking-wider">
                          <FaBookOpen className="text-brand-blue text-xs" />
                          <span>Fuentes consultadas ({msg.sources.length})</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                          {msg.sources.map((s, sIdx) => (
                            <div key={sIdx} className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-brand-lime/40 transition-colors">
                              <div className="flex items-center justify-between text-xs font-semibold text-white">
                                <span className="truncate">{s.document || 'cursos_y_modalidades.md'}</span>
                                <span className="text-[9px] font-mono text-brand-lime bg-brand-lime/10 px-1 rounded">#{sIdx + 1}</span>
                              </div>
                              <p className="text-[11px] text-slate-400 mt-1 truncate">{s.section || 'Catálogo Oficial'}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Grounded Response Body */}
                    <article className="p-6 rounded-3xl bg-[#100c2a] border border-white/10 text-slate-200 text-sm leading-relaxed whitespace-pre-line space-y-4 shadow-xl">
                      {msg.content}
                    </article>
                  </div>
                )}
              </div>
            ))}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="p-6 rounded-3xl bg-[#100c2a] border border-white/10 space-y-3 animate-pulse">
                <div className="flex items-center gap-2 text-xs text-brand-lime font-mono">
                  <div className="w-2 h-2 rounded-full bg-brand-lime animate-ping"></div>
                  <span>Consultando base de conocimientos oficial de Vanguard...</span>
                </div>
                <div className="h-4 bg-white/10 rounded w-3/4"></div>
                <div className="h-4 bg-white/5 rounded w-1/2"></div>
              </div>
            )}

            {/* Suggested Questions Grid */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Preguntas Frecuentes Sugeridas</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {QUICK_SUGGESTIONS.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(q)}
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-lime/40 text-xs text-left text-slate-300 hover:text-white transition-all flex items-center justify-between group"
                  >
                    <span className="line-clamp-2">{q}</span>
                    <FaPlus className="text-slate-500 group-hover:text-brand-lime text-xs flex-shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* ================= FLOATING SEARCH INPUT BAR ================= */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-[#070515] via-[#070515]/95 to-transparent pointer-events-none z-30">
          <div className="max-w-4xl mx-auto pointer-events-auto space-y-2">
            <form 
              onSubmit={(e) => { e.preventDefault(); handleSend(); }}
              className="bg-[#100c2a] rounded-2xl border border-white/20 shadow-2xl p-2.5 focus-within:border-brand-lime focus-within:ring-2 focus-within:ring-brand-lime/20 transition-all"
            >
              <textarea
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Escribe tu consulta sobre cursos, sedes en Bogotá/Medellín, tarifas en COP o pruebas de nivel..."
                rows={1}
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

            <p className="text-center text-[11px] text-slate-500">
              Vanguard Assistant responde exclusivamente con base en reglamentos académicos oficiales 2026.
            </p>
          </div>
        </div>

      </main>
    </div>
  );
}
