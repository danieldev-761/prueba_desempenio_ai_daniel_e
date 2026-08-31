import React, { useState } from 'react';
import { Send, Sparkles, Loader2 } from 'lucide-react';

const QUICK_PROMPTS = [
  "¿Cuánto cuesta el curso intensivo de inglés?",
  "¿Cuáles son los horarios y franjas disponibles?",
  "¿Cómo funciona la prueba de clasificación?",
  "¿Tienen descuento por pronto pago?",
  "¿Qué modalidades y sedes ofrecen?",
  "¿Ofrecen preparación para TOEFL o IELTS?",
];

export default function InputBar({ onSendMessage, isLoading }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    onSendMessage(input.trim());
    setInput('');
  };

  const handleChipClick = (promptText) => {
    if (isLoading) return;
    onSendMessage(promptText);
  };

  return (
    <div className="bg-white border-t border-slate-200 p-4 sticky bottom-0 z-20">
      <div className="max-w-4xl mx-auto space-y-3">
        {/* Quick Question Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 scrollbar-none text-xs">
          <span className="text-slate-400 font-medium flex items-center gap-1 flex-shrink-0">
            <Sparkles className="w-3 h-3 text-amber-500" /> Sugerencias:
          </span>
          {QUICK_PROMPTS.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleChipClick(prompt)}
              disabled={isLoading}
              className="flex-shrink-0 px-2.5 py-1 rounded-full bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 border border-slate-200 hover:border-blue-300 transition-colors duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
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
            className="flex-1 px-4 py-3 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white text-slate-800 placeholder-slate-400 transition-all duration-200 disabled:opacity-60"
          />

          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white font-medium text-sm flex items-center gap-2 shadow-sm transition-colors duration-200 cursor-pointer disabled:cursor-not-allowed flex-shrink-0"
          >
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin text-white" />
            ) : (
              <Send className="w-4 h-4 text-white" />
            )}
            <span className="hidden sm:inline">Enviar</span>
          </button>
        </form>
      </div>
    </div>
  );
}
