import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function HeroBanner({ onSelectTopic }) {
  return (
    <div className="bg-gradient-to-b from-slate-900 to-slate-800 text-white pt-8 pb-10 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/20">
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          <span>Asistente Inteligente de Atención al Estudiante</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
          Aprende Idiomas con la <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-300">Academia de Idiomas Colombiana</span>
        </h1>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Consulta al instante información oficial sobre cursos de idiomas, horarios flexibles, tarifas en COP, descuentos por pronto pago, certificaciones internacionales y sedes en Bogotá y Medellín.
        </p>

        {/* Key Academic Badges */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-300">
          <button
            onClick={() => onSelectTopic("¿Qué cursos de idiomas y modalidades ofrecen?")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-blue-500/50 transition-colors duration-200 cursor-pointer"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Cursos y Modalidades</span>
          </button>

          <button
            onClick={() => onSelectTopic("¿Cuáles son los precios, formas de pago y descuentos disponibles?")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-blue-500/50 transition-colors duration-200 cursor-pointer"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Precios y Métodos de Pago</span>
          </button>

          <button
            onClick={() => onSelectTopic("¿Cómo es el proceso de inscripción y la prueba de clasificación?")}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-blue-500/50 transition-colors duration-200 cursor-pointer"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Inscripciones y Clasificación</span>
          </button>
        </div>
      </div>
    </div>
  );
}
