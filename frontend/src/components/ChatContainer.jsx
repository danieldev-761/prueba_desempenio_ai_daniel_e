import React, { useRef, useEffect, useState } from 'react';
import MessageBubble from './MessageBubble';
import { Bot, Loader2, Clock, CheckCircle, AlertCircle, Star, Send, RotateCcw, ShieldCheck } from 'lucide-react';
import { submitSessionReview } from '../services/api';

export default function ChatContainer({
  messages,
  isLoading,
  onTriggerEscalation,
  onSendMessage,
  onInactivityResolved,
  pendingReviewSession,
  onClearReviewSession,
  onStartNewSession,
  isSessionResolved,
}) {
  const scrollRef = useRef(null);
  const [showInactivityCheck, setShowInactivityCheck] = useState(false);
  const inactivityTimerRef = useRef(null);

  // Review Card Local State
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewNotes, setReviewNotes] = useState('');
  const [isSubmittingReview, setIsSubmittingReview] = useState(false);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  // Smooth auto-scroll on new messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth',
      });
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
    <div className="flex flex-col h-[580px] sm:h-[620px] bg-white relative">
      {/* Sticky Academic Header with Status Badge and Actions */}
      <div className="px-4 sm:px-6 py-3 border-b border-slate-200/80 bg-slate-50/80 backdrop-blur-xs flex items-center justify-between flex-shrink-0 z-10">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-xs">
              <Bot className="w-5 h-5" />
            </div>
            {/* Live pulsating dot */}
            <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border-2 border-white"></span>
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-none">Asesor Académico Virtual</h3>
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full border border-emerald-200">
                En línea 24/7
              </span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-blue-600" />
              <span>Base oficial de la Academia Colombiana de Idiomas</span>
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <span className="hidden md:inline-block text-[11px] text-slate-400 font-medium bg-slate-100 px-2.5 py-1 rounded-lg">
            {messages.length} {messages.length === 1 ? 'mensaje' : 'mensajes'}
          </span>
          <button
            onClick={onStartNewSession}
            title="Iniciar nueva sesión y limpiar historial actual"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-blue-700 bg-white hover:bg-blue-50/80 border border-slate-200 hover:border-blue-200 rounded-xl transition-all shadow-xs cursor-pointer active:scale-95"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Nueva Consulta</span>
          </button>
        </div>
      </div>

      {/* Internal Scrollable Messages Container */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 scroll-smooth scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-50/50"
      >
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
        {showInactivityCheck && !isSessionResolved && (
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
                className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors shadow-xs cursor-pointer active:scale-95"
              >
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Sí, solucionado</span>
              </button>
              <button
                onClick={handleInactivityUnresolved}
                className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-bold transition-colors shadow-xs cursor-pointer active:scale-95"
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
                      className="p-1 focus:outline-none transition-transform hover:scale-110 cursor-pointer"
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
                  className="inline-flex items-center gap-1.5 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-colors shadow-md disabled:opacity-50 cursor-pointer active:scale-95"
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
            <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none px-4 py-2.5 shadow-xs text-xs text-slate-600 flex items-center gap-2">
              <span>Consultando la base de conocimiento oficial de la academia...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
