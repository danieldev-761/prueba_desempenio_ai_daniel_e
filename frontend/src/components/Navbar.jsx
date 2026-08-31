import React from 'react';
import { BookOpen, Send, ShieldCheck, ExternalLink, MessageSquare, PhoneCall } from 'lucide-react';

export default function Navbar({ onOpenAdminModal, onOpenContactModal, onOpenEscalationModal }) {
  return (
    <header className="sticky top-0 z-30 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Academy Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-md shadow-blue-500/20">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-base tracking-tight text-white">Academia de Idiomas Colombiana</span>
              <span className="text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-1.5 py-0.5 rounded-full">
                Matrículas Abiertas 2026
              </span>
            </div>
            <p className="text-xs text-slate-400">Atención Académica y Admisiones 24/7</p>
          </div>
        </div>

        {/* Action Channels */}
        <div className="flex items-center gap-3">
          {/* Telegram Channel Button */}
          <a
            href="https://t.me/AcademiaIdiomasCol_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-blue-200 bg-blue-950/60 border border-blue-800/80 rounded-lg hover:bg-blue-900/80 hover:text-white transition-colors duration-200 cursor-pointer"
          >
            <Send className="w-3.5 h-3.5 text-sky-400" />
            <span>@AcademiaIdiomasCol_bot</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>

          {/* Live Human Advisor Button */}
          <button
            onClick={onOpenEscalationModal}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-amber-200 bg-amber-950/60 hover:bg-amber-900/80 border border-amber-800/80 rounded-lg transition-colors duration-200 cursor-pointer shadow-sm"
          >
            <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
            <span>Asesor en Vivo</span>
          </button>

          {/* Contact / Webhook Inquiry Form Button */}
          <button
            onClick={onOpenContactModal}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors duration-200 cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
            <span>Formulario</span>
          </button>

          {/* Staff / Admin Portal Access Link */}
          <button
            onClick={onOpenAdminModal}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-medium text-slate-400 hover:text-blue-300 hover:bg-slate-800/60 rounded-lg transition-colors duration-200 cursor-pointer"
            title="Portal de Gestión Académica y Métricas"
          >
            <ShieldCheck className="w-4 h-4 text-slate-400 hover:text-blue-400" />
            <span className="hidden md:inline">Portal Staff</span>
          </button>
        </div>
      </div>
    </header>
  );
}
