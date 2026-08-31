import React from 'react';
import { ShieldCheck, Mail, Phone } from 'lucide-react';

export default function Footer({ onOpenAdminModal }) {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs py-8 px-4 sm:px-6 lg:px-8 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left accreditation info */}
        <div className="space-y-1 text-center sm:text-left">
          <p className="font-semibold text-slate-300">Academia de Idiomas Colombiana</p>
          <p className="text-[11px] text-slate-500">
            Formación en Inglés, Francés, Alemán, Italiano y Portugués alineada al MCER (A1 - C1).
          </p>
        </div>

        {/* Center contact quick info */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-[11px]">
          <span className="flex items-center gap-1">
            <Mail className="w-3.5 h-3.5 text-slate-500" /> contacto@academiadeidiomas.co
          </span>
          <span className="flex items-center gap-1">
            <Phone className="w-3.5 h-3.5 text-slate-500" /> +57 (601) 745-8900
          </span>
        </div>

        {/* Right Admin link */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenAdminModal}
            className="flex items-center gap-1 text-[11px] text-slate-500 hover:text-blue-400 transition-colors cursor-pointer"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Acceso Portal Administrativo</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
