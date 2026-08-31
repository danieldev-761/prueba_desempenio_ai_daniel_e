import React, { useState, useEffect, useRef } from 'react';
import { Send, UserCheck, Minimize2, Maximize2, X, Circle, Star, CheckCircle, MessageSquare } from 'lucide-react';
import { getWebSocketChatUrl, getSessionMessages, submitSessionReview } from '../services/api';

export default function LiveAdvisorChat({ sessionInfo, onClose }) {
  const { sessionId, fullName } = sessionInfo;
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isSessionClosed, setIsSessionClosed] = useState(false);
  
  // Rating State
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewNotes, setReviewNotes] = useState('');
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [isSubmittingReview, setIsSubmittingReview] = useState(false);

  const wsRef = useRef(null);
  const messagesEndRef = useRef(null);

  // Load existing chat history
  useEffect(() => {
    async function loadHistory() {
      try {
        const history = await getSessionMessages(sessionId);
        setMessages(history);
        if (history.some((m) => m.sender === 'system' && (m.message.includes('finalizada') || m.message.includes('cerrada')))) {
          setIsSessionClosed(true);
        }
      } catch (err) {
        console.error('Failed to load chat history:', err);
      }
    }
    loadHistory();
  }, [sessionId]);

  // Connect WebSocket
  useEffect(() => {
    const wsUrl = getWebSocketChatUrl(sessionId);
    const ws = new WebSocket(wsUrl);
    wsRef.current = ws;

    ws.onopen = () => {
      setIsConnected(true);
    };

    ws.onmessage = (event) => {
      try {
        const msg = JSON.parse(event.data);
        if (msg.type === 'SESSION_CLOSED') {
          setIsSessionClosed(true);
          return;
        }
        setMessages((prev) => {
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
        console.error('Error parsing live WS message:', e);
      }
    };

    ws.onclose = () => {
      setIsConnected(false);
    };

    ws.onerror = () => {
      setIsConnected(false);
    };

    return () => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.close();
      }
    };
  }, [sessionId]);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isSessionClosed]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim() || !wsRef.current || wsRef.current.readyState !== WebSocket.OPEN) {
      return;
    }

    const payload = {
      sender: 'user',
      sender_name: fullName,
      message: inputText.trim(),
    };

    wsRef.current.send(JSON.stringify(payload));
    setInputText('');
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    setIsSubmittingReview(true);
    try {
      await submitSessionReview(sessionId, rating, reviewNotes);
      setReviewSubmitted(true);
    } catch (err) {
      console.error('Error submitting review:', err);
    } finally {
      setIsSubmittingReview(false);
    }
  };

  if (isMinimized) {
    return (
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 border border-amber-500 font-semibold text-sm transition-all hover:scale-105"
        >
          <div className="relative">
            <UserCheck className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping"></span>
          </div>
          <span>Chat Asesor Humano ({sessionId})</span>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 w-96 sm:w-[420px] h-[540px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-slideUp">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-700 px-4 py-3 text-white flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 bg-white/20 rounded-lg">
            <UserCheck className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h4 className="text-sm font-bold leading-none">Asesor Académico</h4>
              <span className={`inline-flex items-center gap-1 text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                isSessionClosed
                  ? 'bg-slate-500/30 text-slate-100'
                  : isConnected
                  ? 'bg-emerald-500/20 text-emerald-100'
                  : 'bg-rose-500/20 text-rose-100'
              }`}>
                <Circle className={`w-2 h-2 fill-current ${
                  isSessionClosed ? 'text-slate-300' : isConnected ? 'text-emerald-400' : 'text-rose-400'
                }`} />
                {isSessionClosed ? 'Finalizada' : isConnected ? 'En Línea' : 'Desconectado'}
              </span>
            </div>
            <p className="text-[11px] text-amber-100 font-mono mt-0.5">Sesión: {sessionId}</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={() => setIsMinimized(true)}
            className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            title="Minimizar"
          >
            <Minimize2 className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            title="Cerrar chat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Content: Messages Feed or Post-Session Star Rating Screen */}
      {isSessionClosed ? (
        <div className="flex-1 p-6 bg-slate-50 flex flex-col items-center justify-center text-center animate-fadeIn">
          {reviewSubmitted ? (
            <div className="space-y-3 py-6">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-slate-800">¡Gracias por tu retroalimentación!</h4>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Tu calificación nos permite seguir elevando la calidad de atención de la Academia de Idiomas.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-5 py-2 text-xs font-bold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-100 transition-colors"
              >
                Cerrar Ventana
              </button>
            </div>
          ) : (
            <form onSubmit={handleReviewSubmit} className="w-full space-y-4">
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-slate-800">Atención Finalizada</h4>
                <p className="text-xs text-slate-500">¿Cómo calificarías la atención recibida por tu asesor?</p>
              </div>

              {/* Interactive Star Picker */}
              <div className="flex items-center justify-center gap-1.5 py-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="p-1 text-slate-300 hover:text-amber-400 focus:outline-none transition-colors"
                  >
                    <Star
                      className={`w-7 h-7 transition-transform duration-150 ${
                        (hoverRating || rating) >= star
                          ? 'fill-amber-400 text-amber-400 scale-110'
                          : 'fill-slate-100 text-slate-300'
                      }`}
                    />
                  </button>
                ))}
              </div>
              <span className="text-xs font-bold text-amber-700 block">
                {rating === 5 && '⭐️⭐️⭐️⭐️⭐️ Excelente'}
                {rating === 4 && '⭐️⭐️⭐️⭐️ Muy Buena'}
                {rating === 3 && '⭐️⭐️⭐️ Buena'}
                {rating === 2 && '⭐️⭐️ Regular'}
                {rating === 1 && '⭐️ Deficiente'}
              </span>

              {/* Optional Notes */}
              <div>
                <textarea
                  rows={3}
                  placeholder="Comentarios adicionales opcionales..."
                  value={reviewNotes}
                  onChange={(e) => setReviewNotes(e.target.value)}
                  className="w-full p-3 text-xs rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 font-medium text-slate-700 resize-none"
                />
              </div>

              <div className="flex items-center justify-center gap-2 pt-1">
                <button
                  type="submit"
                  disabled={isSubmittingReview}
                  className="w-full py-2.5 text-xs font-bold text-white bg-amber-600 hover:bg-amber-700 rounded-xl shadow-md transition-all disabled:opacity-50"
                >
                  {isSubmittingReview ? 'Enviando...' : 'Enviar Calificación'}
                </button>
              </div>
            </form>
          )}
        </div>
      ) : (
        <>
          {/* Messages Feed */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50">
            {messages.map((m, index) => {
              const isMe = m.sender === 'user';
              const isSystem = m.sender === 'system';

              if (isSystem) {
                return (
                  <div key={index} className="text-center my-2">
                    <span className="text-[11px] font-medium text-slate-500 bg-slate-200/60 px-3 py-1 rounded-full inline-block">
                      {m.message}
                    </span>
                  </div>
                );
              }

              return (
                <div
                  key={index}
                  className={`flex flex-col ${isMe ? 'items-end' : 'items-start'}`}
                >
                  <span className="text-[10px] font-bold text-slate-400 mb-1 px-1">
                    {isMe ? 'Tú' : (m.sender_name || 'Asesor Académico')}
                  </span>
                  <div
                    className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed shadow-sm ${
                      isMe
                        ? 'bg-amber-600 text-white rounded-br-none'
                        : 'bg-white text-slate-800 border border-slate-200/80 rounded-bl-none'
                    }`}
                  >
                    {m.message}
                  </div>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>

          {/* Input bar */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-100 flex items-center gap-2">
            <input
              type="text"
              placeholder={isConnected ? 'Escribe a tu asesor humano...' : 'Conectando al servidor...'}
              disabled={!isConnected}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 px-3.5 py-2 text-xs rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 font-medium text-slate-800 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || !isConnected}
              className="p-2 bg-amber-600 hover:bg-amber-700 text-white rounded-xl shadow-sm transition-all disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </>
      )}
    </div>
  );
}
