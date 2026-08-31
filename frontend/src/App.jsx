import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import ChatContainer from './components/ChatContainer';
import InputBar from './components/InputBar';
import InquiryForm from './components/InquiryForm';
import AdminLoginModal from './components/AdminLoginModal';
import AdminPortal from './components/AdminPortal';
import EscalationModal from './components/EscalationModal';
import LiveAdvisorChat from './components/LiveAdvisorChat';
import Footer from './components/Footer';
import { sendChatMessage } from './services/api';

const SESSION_STORAGE_KEY = 'academy_session_id';
const MESSAGES_STORAGE_KEY = 'academy_messages_history';
const ADMIN_AUTH_KEY = 'academy_admin_token';
const PENDING_REVIEW_KEY = 'academy_pending_review';
const TRIAGE_RESOLVED_KEY = 'academy_triage_resolved';

const DEFAULT_WELCOME_MESSAGE = {
  role: 'assistant',
  content: "👋 **¡Te damos la bienvenida a la Academia de Idiomas Colombiana!**\n\nSoy tu Asesor Académico Virtual 24/7. Con mucho gusto te puedo ayudar con información oficial sobre:\n• **Cursos y Modalidades:** Inglés, Francés, Alemán, Italiano y Portugués (Presencial, Virtual en Vivo e Híbrido)\n• **Precios en COP y Facilidades de Pago:** Cuotas mensuales sin intereses y convenios\n• **Descuentos:** 10% por pronto pago matriculando 10 días hábiles antes del inicio\n• **Inscripciones y Prueba de Clasificación:** Gratuita en línea o presencial\n\n¿En qué te podemos colaborar hoy con tus estudios de idiomas?",
  status: 'RESOLVED_BY_CACHE',
  confidence_score: 1.0,
  sources: [],
  escalated: false,
  timestamp: new Date().toISOString(),
};

export default function App() {
  const [sessionId, setSessionId] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSessionResolved, setIsSessionResolved] = useState(false);
  
  // Modals & Portal views
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false);
  const [adminKey, setAdminKey] = useState(localStorage.getItem(ADMIN_AUTH_KEY) || '');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isEscalationModalOpen, setIsEscalationModalOpen] = useState(false);
  const [escalationQueryContext, setEscalationQueryContext] = useState('');
  
  // Live Human Advisor Floating Chat State
  const [liveChatSession, setLiveChatSession] = useState(null);

  // Web Review State for Finalized Escalation Sessions
  const [pendingReviewSession, setPendingReviewSession] = useState(() => {
    try {
      const saved = localStorage.getItem(PENDING_REVIEW_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Initialize or restore session ID and messages from localStorage
  useEffect(() => {
    let currentSession = localStorage.getItem(SESSION_STORAGE_KEY);
    if (!currentSession) {
      currentSession = `web_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
      localStorage.setItem(SESSION_STORAGE_KEY, currentSession);
    }
    setSessionId(currentSession);

    // Restore resolved state
    const resolvedFlag = localStorage.getItem(TRIAGE_RESOLVED_KEY) === 'true';
    setIsSessionResolved(resolvedFlag);

    const savedMessages = localStorage.getItem(MESSAGES_STORAGE_KEY);
    if (savedMessages) {
      try {
        const parsed = JSON.parse(savedMessages);
        setMessages(parsed.length > 0 ? parsed : [DEFAULT_WELCOME_MESSAGE]);
      } catch {
        setMessages([DEFAULT_WELCOME_MESSAGE]);
      }
    } else {
      setMessages([DEFAULT_WELCOME_MESSAGE]);
      localStorage.setItem(MESSAGES_STORAGE_KEY, JSON.stringify([DEFAULT_WELCOME_MESSAGE]));
    }
  }, []);

  // Sync messages with localStorage
  const updateMessages = (newMessages) => {
    setMessages(newMessages);
    localStorage.setItem(MESSAGES_STORAGE_KEY, JSON.stringify(newMessages));
  };

  const handleSendMessage = async (queryText) => {
    if (!queryText.trim() || isLoading || isSessionResolved) return;

    const userMessage = {
      role: 'user',
      content: queryText,
      timestamp: new Date().toISOString(),
    };

    const updatedWithUser = [...messages, userMessage];
    updateMessages(updatedWithUser);
    setIsLoading(true);

    try {
      const data = await sendChatMessage(queryText, sessionId, 'web');

      const botMessage = {
        role: 'assistant',
        content: data.response,
        status: data.status,
        confidence_score: data.confidence_score,
        sources: data.sources || [],
        escalated: data.escalated || false,
        telemetry: data.telemetry || {},
        timestamp: new Date().toISOString(),
      };

      updateMessages([...updatedWithUser, botMessage]);

      // If escalated (e.g. Tier 3 exhaustion or ungrounded inquiry), open identification modal automatically
      if (data.escalated || data.status === 'ESCALATED_TO_HUMAN') {
        setEscalationQueryContext(queryText);
        setTimeout(() => {
          setIsEscalationModalOpen(true);
        }, 750);
      }
    } catch (err) {
      const errorMessage = {
        role: 'assistant',
        content: `Se presentó una intermitencia al conectar con el asistente académico: ${err.message}. Por favor intenta nuevamente o comunícate con nosotros a contacto@academiadeidiomas.co.`,
        status: 'ESCALATED_TO_HUMAN',
        confidence_score: 0,
        sources: [],
        escalated: true,
        timestamp: new Date().toISOString(),
      };
      updateMessages([...updatedWithUser, errorMessage]);
      setEscalationQueryContext(queryText);
      setTimeout(() => {
        setIsEscalationModalOpen(true);
      }, 750);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInactivityResolved = () => {
    setIsSessionResolved(true);
    localStorage.setItem(TRIAGE_RESOLVED_KEY, 'true');

    const farewellMessage = {
      role: 'assistant',
      content:
        '✅ **¡Nos alegra haberte ayudado a resolver tu inconveniente!**\n\nDamos por concluida con éxito esta consulta. Recuerda que ante cualquier duda sobre nuestros programas de idiomas o trámites académicos, nuestro canal virtual está siempre a tu disposición.\n\n¡Te deseamos muchos éxitos en tu aprendizaje!',
      status: 'RESOLVED_BY_FAQ_TRIAGE',
      confidence_score: 1.0,
      sources: [],
      escalated: false,
      timestamp: new Date().toISOString(),
    };
    updateMessages([...messages, farewellMessage]);
  };

  const handleStartNewSession = () => {
    const newSession = `web_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
    setSessionId(newSession);
    localStorage.setItem(SESSION_STORAGE_KEY, newSession);

    setIsSessionResolved(false);
    localStorage.removeItem(TRIAGE_RESOLVED_KEY);

    const freshMessages = [DEFAULT_WELCOME_MESSAGE];
    updateMessages(freshMessages);

    setLiveChatSession(null);
  };

  const handleAdminLoginSuccess = (token) => {
    setAdminKey(token);
    localStorage.setItem(ADMIN_AUTH_KEY, token);
  };

  const handleAdminLogout = () => {
    setAdminKey('');
    localStorage.removeItem(ADMIN_AUTH_KEY);
  };

  const handleCloseLiveChat = () => {
    if (liveChatSession) {
      setPendingReviewSession(liveChatSession);
      localStorage.setItem(PENDING_REVIEW_KEY, JSON.stringify(liveChatSession));
    }
    setLiveChatSession(null);
  };

  const handleClearReviewSession = () => {
    setPendingReviewSession(null);
    localStorage.removeItem(PENDING_REVIEW_KEY);
  };

  // If Admin is logged in, render the Dedicated Full-Page Admin Portal view
  if (adminKey) {
    return <AdminPortal adminKey={adminKey} onLogout={handleAdminLogout} />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-100/70 text-slate-900">
      {/* Navigation Bar */}
      <Navbar
        onOpenAdminModal={() => setIsAdminLoginOpen(true)}
        onOpenContactModal={() => setIsContactModalOpen(true)}
      />

      {/* Hero Welcome Banner */}
      <HeroBanner onSelectTopic={handleSendMessage} />

      {/* Main Contained Interactive Chat Section with Fixed Height & Internal Scroll */}
      <main className="flex-1 flex flex-col max-w-4xl w-full mx-auto my-4 sm:my-6 px-3 sm:px-4">
        <div className="w-full bg-white rounded-3xl border border-slate-200/90 shadow-lg overflow-hidden flex flex-col">
          <ChatContainer
            messages={messages}
            isLoading={isLoading}
            onTriggerEscalation={(contextMsg) => {
              setEscalationQueryContext(contextMsg);
              setIsEscalationModalOpen(true);
            }}
            onSendMessage={handleSendMessage}
            onInactivityResolved={handleInactivityResolved}
            pendingReviewSession={pendingReviewSession}
            onClearReviewSession={handleClearReviewSession}
            onStartNewSession={handleStartNewSession}
            isSessionResolved={isSessionResolved}
          />
          <InputBar
            onSendMessage={handleSendMessage}
            isLoading={isLoading}
            isSessionResolved={isSessionResolved}
            onStartNewSession={handleStartNewSession}
          />
        </div>
      </main>

      {/* Institutional Footer */}
      <Footer onOpenAdminModal={() => setIsAdminLoginOpen(true)} />

      {/* Contact / Webhook Inquiry Modal */}
      <InquiryForm
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      {/* Admin Login Dialog */}
      <AdminLoginModal
        isOpen={isAdminLoginOpen}
        onClose={() => setIsAdminLoginOpen(false)}
        onLoginSuccess={handleAdminLoginSuccess}
      />

      {/* Human Escalation Identification Form Modal (Strictly Gated by System) */}
      <EscalationModal
        isOpen={isEscalationModalOpen}
        initialQuery={escalationQueryContext}
        onClose={() => setIsEscalationModalOpen(false)}
        onStartLiveChat={(info) => {
          setLiveChatSession(info);
        }}
      />

      {/* Floating Live Human Advisor WebSocket Chat Window */}
      {liveChatSession && (
        <LiveAdvisorChat
          sessionInfo={liveChatSession}
          onClose={handleCloseLiveChat}
        />
      )}
    </div>
  );
}
