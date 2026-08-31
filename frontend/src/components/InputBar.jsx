import React, { useState } from 'react';
import { Send, Sparkles, Loader2, CheckCircle2, PlusCircle } from 'lucide-react';

const QUICK_PROMPTS = [
  "¿Cuánto cuesta el curso intensivo de inglés?",
  "¿Cuáles son los horarios y franjas disponibles?",
  "¿Cómo funciona la prueba de clasificación?",
  "¿Tienen descuento por pronto pago?",
  "¿Qué modalidades y sedes ofrecen?",
  "¿Qué pasa si pierdo un módulo por inasistencias?",
];

export default function InputBar({
  onSendMessage,
  isLoading,
  isSessionResolved,
  onStartNewSession,
}) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading || isSessionResolved) return;
    onSendMessage(input.trim());
    setInput('');
  };

  const handleChipClick = (promptText) => {
    if (isLoading || isSessionResolved) return;
    onSendMessage(promptText);
  };

  return (
    <div className="bg-white border-t border-slate-200/90 p-3 sm:p-4 z-10 flex-shrink-0">
      <div className="max-w-4xl mx-auto space-y-2.5">
        {/* If session is officially resolved: show dedicated completion card with new session CTA */}
        {isSessionResolved ? (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 bg-gradient-to-r from-emerald-50 via-teal-50/60 to-emerald-50 border border-emerald-200/90 rounded-2xl animate-fadeIn shadow-xs">
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-xs">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-emerald-950">Consulta Finalizada con Éxito</h4>
                <p className="text-[11px] text-emerald-700">Tu inquietud fue resuelta satisfactoriamente. ¿Deseas hacer una nueva consulta?</p>
              </div>
            </div>
            <button
              onClick={onStartNewSession}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm hover:shadow-md cursor-pointer whitespace-nowrap active:scale-95"
            >
              <PlusCircle className="w-3.5 h-3.5" />
              <span>Iniciar Nueva Consulta</span>
            </button>
          </div>
        ) : (
          <>
            {/* Quick Question Chips */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
              <span className="text-slate-400 font-medium flex items-center gap-1 flex-shrink-0 text-[11px]">
                <Sparkles className="w-3 h-3 text-amber-500" /> Sugerencias:
              </span>
              {QUICK_PROMPTS.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleChipClick(prompt)}
                  disabled={isLoading}
                  className="flex-shrink-0 px-2.5 py-1 rounded-full bg-slate-100/90 hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200/80 hover:border-blue-300 transition-colors duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-[11px]"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu consulta sobre cursos, horarios, precios, niveles o inscripciones..."
                disabled={isLoading}
                className="flex-1 px-4 py-2.5 text-xs sm:text-sm bg-slate-50/80 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white text-slate-800 placeholder-slate-400 transition-all duration-200 disabled:opacity-60"
              />

              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="px-4 sm:px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-medium text-xs sm:text-sm flex items-center gap-2 shadow-sm transition-colors duration-200 cursor-pointer disabled:cursor-not-allowed flex-shrink-0"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                ) : (
                  <Send className="w-4 h-4 text-white" />
                )}
                <span className="hidden sm:inline">Enviar</span>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
