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

export default function App() {
  const [sessionId, setSessionId] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  // Modals & Portal views
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false);
  const [adminKey, setAdminKey] = useState(sessionStorage.getItem(ADMIN_AUTH_KEY) || '');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isEscalationModalOpen, setIsEscalationModalOpen] = useState(false);
  const [escalationQueryContext, setEscalationQueryContext] = useState('');
  
  // Live Human Advisor Floating Chat State
  const [liveChatSession, setLiveChatSession] = useState(null);

  // Web Review State for Finalized Escalation Sessions
  const [pendingReviewSession, setPendingReviewSession] = useState(() => {
    try {
      const saved = sessionStorage.getItem(PENDING_REVIEW_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  // Initialize or restore session ID and messages from sessionStorage
  useEffect(() => {
    let currentSession = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (!currentSession) {
      currentSession = `web_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
      sessionStorage.setItem(SESSION_STORAGE_KEY, currentSession);
    }
    setSessionId(currentSession);

    const savedMessages = sessionStorage.getItem(MESSAGES_STORAGE_KEY);
    if (savedMessages) {
      try {
        setMessages(JSON.parse(savedMessages));
      } catch {
        setMessages([]);
      }
    } else {
      // Default institutional welcome message in Spanish
      const defaultWelcome = {
        role: 'assistant',
        content: "👋 **¡Te damos la bienvenida a la Academia de Idiomas Colombiana!**\n\nSoy tu Asesor Académico Virtual 24/7. Con mucho gusto te puedo ayudar con información oficial sobre:\n* **Cursos y Modalidades:** Inglés, Francés, Alemán, Italiano y Portugués (Presencial, Virtual en Vivo e Híbrido)\n* **Precios en COP y Facilidades de Pago:** Cuotas mensuales sin intereses y convenios\n* **Descuentos:** 10% por pronto pago matriculando 10 días hábiles antes del inicio\n* **Inscripciones y Prueba de Clasificación:** Gratuita en línea o presencial\n\n¿En qué te podemos colaborar hoy con tus estudios de idiomas?",
        status: 'RESOLVED_BY_CACHE',
        confidence_score: 1.0,
        sources: [],
        escalated: false,
        timestamp: new Date().toISOString(),
      };
      setMessages([defaultWelcome]);
      sessionStorage.setItem(MESSAGES_STORAGE_KEY, JSON.stringify([defaultWelcome]));
    }
  }, []);

  // Sync messages with sessionStorage
  const updateMessages = (newMessages) => {
    setMessages(newMessages);
    sessionStorage.setItem(MESSAGES_STORAGE_KEY, JSON.stringify(newMessages));
  };

  const handleSendMessage = async (queryText) => {
    if (!queryText.trim() || isLoading) return;

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

  const handleAdminLoginSuccess = (token) => {
    setAdminKey(token);
    sessionStorage.setItem(ADMIN_AUTH_KEY, token);
  };

  const handleAdminLogout = () => {
    setAdminKey('');
    sessionStorage.removeItem(ADMIN_AUTH_KEY);
  };

  const handleCloseLiveChat = () => {
    if (liveChatSession) {
      setPendingReviewSession(liveChatSession);
      sessionStorage.setItem(PENDING_REVIEW_KEY, JSON.stringify(liveChatSession));
    }
    setLiveChatSession(null);
  };

  const handleInactivityResolved = () => {
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

  const handleClearReviewSession = () => {
    setPendingReviewSession(null);
    sessionStorage.removeItem(PENDING_REVIEW_KEY);
  };

  // If Admin is logged in, render the Dedicated Full-Page Admin Portal view
  if (adminKey) {
    return <AdminPortal adminKey={adminKey} onLogout={handleAdminLogout} />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900">
      {/* Navigation Bar without ungated escalation button */}
      <Navbar
        onOpenAdminModal={() => setIsAdminLoginOpen(true)}
        onOpenContactModal={() => setIsContactModalOpen(true)}
      />

      {/* Hero Welcome & Quick Topics */}
      <HeroBanner onSelectTopic={handleSendMessage} />

      {/* Main Interactive Chat Section */}
      <main className="flex-1 flex flex-col max-w-5xl w-full mx-auto shadow-sm my-4 bg-slate-50/50 rounded-2xl border border-slate-200/80 overflow-hidden">
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
        />
        <InputBar onSendMessage={handleSendMessage} isLoading={isLoading} />
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
