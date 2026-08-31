import React, { useRef, useEffect, useState } from 'react';
import MessageBubble from './MessageBubble';
import { Bot, Loader2, Clock, CheckCircle, AlertCircle, Star, Send } from 'lucide-react';
import { submitSessionReview } from '../services/api';

export default function ChatContainer({
  messages,
  isLoading,
  onTriggerEscalation,
  onSendMessage,
  onInactivityResolved,
  pendingReviewSession,
  onClearReviewSession,
}) {
  const scrollRef = useRef(null);
  const [showInactivityCheck, setShowInactivityCheck] = useState(false);
  const inactivityTimerRef = useRef(null);
  const [isSessionResolved, setIsSessionResolved] = useState(() => {
    return sessionStorage.getItem('academy_triage_resolved') === 'true';
  });

  // Review Card Local State
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewNotes, setReviewNotes] = useState('');
  const [isSubmittingReview, setIsSubmittingReview] = useState(false);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  // Auto-scroll on new messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading, showInactivityCheck, pendingReviewSession]);

  // Check if student has reached at least Tier 1 in the deterministic triage funnel
  const hasReachedTriageTier1 = messages.some(
    (m) =>
      m.role === 'assistant' &&
      (m.status === 'RESOLVED_BY_FAQ_TRIAGE' ||
        m.sources?.some((s) => s.document?.includes('frequent_issues')))
  );

  // 2-Minute Inactivity Follow-Up Timer (Strictly Gated to Triage Tier >= 1)
  useEffect(() => {
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
      inactivityTimerRef.current = null;
    }

    // Only arm if user reached at least Tier 1 of triage, session is not resolved, and not loading
    if (isLoading || messages.length <= 1 || isSessionResolved || !hasReachedTriageTier1) {
      setShowInactivityCheck(false);
      return;
    }

    const lastMsg = messages[messages.length - 1];
    // Only arm timer if the last message is from the assistant and not escalated
    if (lastMsg && lastMsg.role === 'assistant' && !lastMsg.escalated && lastMsg.status !== 'ESCALATED_TO_HUMAN') {
      // 2 minutes = 120,000 ms
      inactivityTimerRef.current = setTimeout(() => {
        setShowInactivityCheck(true);
      }, 120000);
    } else {
      setShowInactivityCheck(false);
    }

    return () => {
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }
    };
  }, [messages, isLoading, isSessionResolved, hasReachedTriageTier1]);

  const handleInactivityResolved = () => {
    setShowInactivityCheck(false);
    setIsSessionResolved(true);
    sessionStorage.setItem('academy_triage_resolved', 'true');
    if (onInactivityResolved) {
      onInactivityResolved();
    }
  };

  const handleInactivityUnresolved = () => {
    setShowInactivityCheck(false);
    if (onSendMessage) {
      onSendMessage('No pude solucionar, el problema continúa.');
    }
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (!pendingReviewSession?.sessionId || isSubmittingReview) return;

    setIsSubmittingReview(true);
    try {
      await submitSessionReview(pendingReviewSession.sessionId, rating, reviewNotes.trim());
      setReviewSubmitted(true);
      setTimeout(() => {
        if (onClearReviewSession) onClearReviewSession();
      }, 3500);
    } catch (err) {
      console.error('Error submitting review:', err);
    } finally {
      setIsSubmittingReview(false);
    }
  };

  return (
    <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 max-w-4xl mx-auto w-full">
      {/* Welcome Card if chat empty */}
      {messages.length === 0 && (
        <div className="my-8 p-6 bg-white border border-slate-200 rounded-2xl shadow-sm text-center space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 mx-auto flex items-center justify-center">
            <Bot className="w-6 h-6" />
          </div>
          <h2 className="text-lg font-bold text-slate-900">¿En qué te podemos colaborar hoy con tus estudios de idiomas?</h2>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            Nuestro asesor virtual responde tus dudas basándose exclusivamente en los documentos oficiales de la academia. Selecciona una sugerencia o escribe tu consulta.
          </p>
        </div>
      )}

      {/* Messages Stream */}
      {messages.map((msg, index) => {
        let triggerUserQuery = '';
        if (msg.role === 'assistant') {
          for (let i = index - 1; i >= 0; i--) {
            if (messages[i].role === 'user') {
              triggerUserQuery = messages[i].content;
              break;
            }
          }
        } else {
          triggerUserQuery = msg.content;
        }

        return (
          <MessageBubble
            key={index}
            message={msg}
            onTriggerEscalation={() => onTriggerEscalation(triggerUserQuery)}
          />
        );
      })}

      {/* 2-Minute Inactivity Automated Follow-Up Card */}
      {showInactivityCheck && (
        <div className="my-4 p-4 bg-amber-50/90 border border-amber-200/90 rounded-2xl shadow-sm text-center animate-fadeIn space-y-2.5">
          <div className="flex items-center justify-center gap-1.5 text-amber-900 font-bold text-xs">
            <Clock className="w-4 h-4 text-amber-600" />
            <span>Seguimiento Automático de Atención</span>
          </div>
          <p className="text-xs text-slate-700 max-w-md mx-auto">
            Han pasado 2 minutos desde nuestra última respuesta. ¿Pudiste solucionar tu consulta o necesitas apoyo adicional?
          </p>
          <div className="flex items-center justify-center gap-3 pt-1">
            <button
              onClick={handleInactivityResolved}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors shadow-xs cursor-pointer"
            >
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Sí, solucionado</span>
            </button>
            <button
              onClick={handleInactivityUnresolved}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold transition-colors shadow-xs cursor-pointer"
            >
              <AlertCircle className="w-3.5 h-3.5" />
              <span>No, el problema continúa</span>
            </button>
          </div>
        </div>
      )}

      {/* Web Star Rating & Feedback Card for Finalized Escalated Sessions */}
      {pendingReviewSession && (
        <div className="my-4 p-5 bg-gradient-to-br from-slate-900 to-indigo-950 text-white border border-indigo-500/40 rounded-2xl shadow-xl animate-fadeIn">
          {reviewSubmitted ? (
            <div className="text-center py-4 space-y-2">
              <div className="w-10 h-10 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white">¡Gracias por tu retroalimentación!</h4>
              <p className="text-xs text-slate-300">Tu calificación ha sido registrada en el CRM institucional.</p>
            </div>
          ) : (
            <form onSubmit={handleReviewSubmit} className="space-y-3.5 text-center">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-extrabold tracking-wider bg-indigo-500/30 text-indigo-200 border border-indigo-400/40 px-2 py-0.5 rounded-full">
                  Atención Finalizada
                </span>
                <h4 className="text-sm font-bold text-white mt-1">¿Cómo calificarías la atención de tu Asesor Académico?</h4>
                <p className="text-xs text-slate-300">Sesión de {pendingReviewSession.fullName || 'Estudiante'} finalizada por el asesor.</p>
              </div>

              {/* Star Rating Picker */}
              <div className="flex items-center justify-center gap-2 py-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="p-1 focus:outline-none transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-7 h-7 transition-colors ${
                        (hoverRating || rating) >= star
                          ? 'text-amber-400 fill-amber-400'
                          : 'text-slate-600'
                      }`}
                    />
                  </button>
                ))}
              </div>

              {/* Notes Input */}
              <input
                type="text"
                placeholder="Observaciones o comentarios opcionales..."
                value={reviewNotes}
                onChange={(e) => setReviewNotes(e.target.value)}
                className="w-full max-w-md mx-auto block px-3 py-2 text-xs bg-slate-800/80 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-indigo-400"
              />

              <button
                type="submit"
                disabled={isSubmittingReview}
                className="inline-flex items-center gap-1.5 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-colors shadow-md disabled:opacity-50 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{isSubmittingReview ? 'Enviando Calificación...' : 'Enviar Calificación'}</span>
              </button>
            </form>
          )}
        </div>
      )}

      {/* Typing Indicator */}
      {isLoading && (
        <div className="flex items-center gap-3 my-3 animate-fadeIn">
          <div className="w-8 h-8 rounded-full bg-slate-900 text-blue-400 border border-slate-700 flex items-center justify-center">
            <Loader2 className="w-4 h-4 animate-spin text-blue-400" />
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm text-xs text-slate-500 flex items-center gap-2">
            <span>Consultando la base de conocimiento oficial de la academia...</span>
          </div>
        </div>
      )}
    </div>
  );
}
