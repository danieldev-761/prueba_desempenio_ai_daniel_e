import React, { useState } from 'react';
import { User, Bot, BookOpen, AlertTriangle, Zap, CheckCircle2, ChevronDown, ChevronUp, UserCheck } from 'lucide-react';

function renderFormattedMessage(text) {
  if (!text) return null;
  const lines = text.split('\n');

  return lines.map((line, lineIdx) => {
    // Trim line
    const trimmed = line.trim();
    if (!trimmed) {
      return <div key={lineIdx} className="h-2" />;
    }

    // Bullet point check
    const isBullet = trimmed.startsWith('* ') || trimmed.startsWith('- ');
    const contentToParse = isBullet ? trimmed.substring(2) : line;

    // Split on **bold**
    const parts = contentToParse.split(/(\*\*.*?\*\*)/g);
    const parsedLine = parts.map((part, pIdx) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={pIdx} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
      }
      return <span key={pIdx}>{part}</span>;
    });

    if (isBullet) {
      return (
        <div key={lineIdx} className="flex items-start gap-2 my-1 pl-2">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
          <div className="flex-1 text-slate-800">{parsedLine}</div>
        </div>
      );
    }

    return (
      <p key={lineIdx} className="my-1 text-slate-800 leading-relaxed">
        {parsedLine}
      </p>
    );
  });
}

export default function MessageBubble({ message, onTriggerEscalation }) {
  const [sourcesOpen, setSourcesOpen] = useState(false);
  const isUser = message.role === 'user';
  const isEscalated = message.escalated || message.status === 'ESCALATED_TO_HUMAN';
  const isTriage = message.status === 'RESOLVED_BY_FAQ_TRIAGE';
  const isCache = message.status === 'RESOLVED_BY_CACHE';

  if (isUser) {
    return (
      <div className="flex justify-end items-start gap-3 my-3">
        <div className="max-w-2xl bg-blue-600 text-white rounded-2xl rounded-tr-none px-4 py-3 shadow-sm text-sm leading-relaxed">
          {message.content}
        </div>
        <div className="w-8 h-8 rounded-full bg-blue-700 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">
          <User className="w-4 h-4" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start items-start gap-3 my-3">
      {/* Bot Icon */}
      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ${
        isEscalated ? 'bg-amber-600 text-white' : isTriage ? 'bg-purple-600 text-white' : 'bg-slate-900 text-blue-400 border border-slate-700'
      }`}>
        {isEscalated ? <AlertTriangle className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
      </div>

      {/* Message Content Body */}
      <div className="max-w-3xl space-y-2">
        {/* Status Pill */}
        <div className="flex items-center gap-2">
          {isTriage && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-purple-50 text-purple-800 border border-purple-200">
              <Zap className="w-2.5 h-2.5 text-purple-600" /> Guía de Autodiagnóstico Oficial
            </span>
          )}

          {isCache && !isTriage && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
              <Zap className="w-2.5 h-2.5" /> Respuesta Verificada Inmediata
            </span>
          )}

          {!isCache && !isTriage && !isEscalated && message.confidence_score > 0 && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-blue-50 text-blue-800 border border-blue-200">
              <CheckCircle2 className="w-2.5 h-2.5 text-blue-600" />
              Coincidencia Verificada ({(message.confidence_score * 100).toFixed(0)}%)
            </span>
          )}

          {isEscalated && (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-100 text-amber-900 border border-amber-300">
              <AlertTriangle className="w-2.5 h-2.5 text-amber-700" />
              Transferencia a Asesor Humano
            </span>
          )}
        </div>

        {/* Text Container with Markdown Formatting */}
        <div className={`rounded-2xl rounded-tl-none p-4 shadow-sm text-sm leading-relaxed ${
          isEscalated
            ? 'bg-amber-50/80 border border-amber-200 text-slate-800'
            : 'bg-white border border-slate-200 text-slate-800'
        }`}>
          {renderFormattedMessage(message.content)}

          {/* Escalation Alert Badge */}
          {isEscalated && (
            <div className="flex items-center justify-between p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs text-amber-800 mb-3">
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span className="font-semibold">Esta consulta requiere atención personalizada.</span>
              </div>
              {onTriggerEscalation && (
                <button
                  onClick={() => onTriggerEscalation()}
                  className="px-3 py-1 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-bold text-[11px] transition-colors shadow-sm ml-2 cursor-pointer"
                >
                  Hablar con Asesor
                </button>
              )}
            </div>
          )}

          {/* Escalated Support Banner */}
          {isEscalated && (
            <div className="mt-3 pt-3 border-t border-amber-200 text-xs text-amber-900 space-y-1.5">
              <p className="font-semibold flex items-center gap-1.5">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                Atención Especializada Disponible:
              </p>
              <p className="text-slate-600">
                Puedes contactar a nuestro equipo académico al correo <span className="font-medium text-slate-900">contacto@academiadeidiomas.co</span> o llamando al <span className="font-medium text-slate-900">+57 (601) 745-8900</span>.
              </p>
            </div>
          )}
        </div>

        {/* Official Source Citations */}
        {message.sources && message.sources.length > 0 && (
          <div className="text-xs">
            <button
              onClick={() => setSourcesOpen(!sourcesOpen)}
              className="inline-flex items-center gap-1.5 text-slate-500 hover:text-blue-700 font-medium py-1 cursor-pointer transition-colors duration-150"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Fuentes Oficiales ({message.sources.length})</span>
              {sourcesOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>

            {sourcesOpen && (
              <div className="mt-1.5 p-2.5 bg-slate-100 rounded-lg border border-slate-200 space-y-1.5 animate-fadeIn">
                {message.sources.map((src, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-700">
                    <span className="font-semibold text-blue-800">[{src.document || 'Documento Oficial'}]</span>
                    <span>{src.section || 'Lineamientos Generales'}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
