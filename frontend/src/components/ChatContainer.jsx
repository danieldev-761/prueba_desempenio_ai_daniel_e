import React, { useRef, useEffect } from 'react';
import MessageBubble from './MessageBubble';
import { Bot, Loader2 } from 'lucide-react';

export default function ChatContainer({ messages, isLoading, onTriggerEscalation }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

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
        // Find preceding user query if this message is a bot response
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
