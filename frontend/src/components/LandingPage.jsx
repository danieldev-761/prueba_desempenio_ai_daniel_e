import React, { useState } from 'react';
import { 
  FaGlobeAmericas, FaMapMarkerAlt, FaCreditCard, FaGraduationCap, 
  FaClock, FaCheckCircle, FaLaptopHouse, FaSchool, FaCertificate, 
  FaRocket, FaShieldAlt, FaArrowRight, FaTelegramPlane, FaWhatsapp,
  FaAward, FaCalendarAlt, FaRobot
} from 'react-icons/fa';
import { 
  SiZoom, SiGooglemeet 
} from 'react-icons/si';
import GhostCursor from './GhostCursor';

export default function LandingPage({ onNavigateToChat, onNavigateToAdmin }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    language: 'Inglés',
    modality: '100% Virtual en Vivo',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-[#070515] text-slate-200 min-h-screen flex flex-col font-sans relative overflow-x-hidden selection:bg-brand-lime selection:text-brand-dark">
      
      {/* ================= TOP NAVIGATION ================= */}
      <header className="sticky top-0 z-50 w-full bg-[#070515]/85 backdrop-blur-md border-b border-white/10 transition-all">
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-brand-lime text-brand-dark flex items-center justify-center font-bold shadow-lg shadow-brand-lime/20 group-hover:scale-105 transition-transform">
              <FaGraduationCap className="text-xl" />
            </div>
            <div>
              <span className="font-display text-2xl uppercase tracking-wider text-white block leading-none">Vanguard</span>
              <span className="text-[10px] text-brand-lime font-medium uppercase tracking-widest">Academia de Idiomas</span>
            </div>
          </a>

          {/* Nav links */}
          <nav className="hidden lg:flex items-center gap-8 bg-white/5 px-6 py-2 rounded-full border border-white/10 text-sm font-medium">
            <a href="#programas" className="hover:text-brand-lime transition-colors">Idiomas & MCER</a>
            <a href="#modalidades" className="hover:text-brand-lime transition-colors">Sedes & Modalidades</a>
            <a href="#horarios" className="hover:text-brand-lime transition-colors">Horarios</a>
            <a href="#precios" className="hover:text-brand-lime transition-colors">Precios COP</a>
            <a href="#placement-test" className="hover:text-brand-lime transition-colors text-brand-lime">Placement Test</a>
          </nav>

          {/* Action buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={onNavigateToChat}
              className="flex items-center gap-2 bg-brand-lime hover:bg-[#b0f55c] text-brand-dark px-5 py-2.5 rounded-full font-bold text-sm transition-all hover:scale-105 shadow-md shadow-brand-lime/20"
            >
              <FaRobot className="text-base" />
              <span>Vanguard Assistant</span>
            </button>
            <button
              onClick={onNavigateToAdmin}
              className="text-xs px-3.5 py-2 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-colors"
            >
              Staff Portal
            </button>
          </div>
        </div>
      </header>

      {/* ================= HERO SECTION WITH GHOSTCURSOR ================= */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-5 pt-12 pb-20 overflow-hidden bg-gradient-to-b from-[#070515] via-[#0c0926] to-[#070515]">
        <GhostCursor color="#c6ff7c" trailLength={45} inertia={0.65} brightness={1.6} />

        {/* Floating pill tags */}
        <div className="relative z-10 max-w-5xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-lime/10 border border-brand-lime/30 text-brand-lime text-xs font-semibold uppercase tracking-widest animate-pulse">
            <FaAward className="text-sm" />
            <span>Acreditación Oficial MCER (A1 a C1) • Sedes Bogotá & Medellín</span>
          </div>

          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl uppercase tracking-tight text-white leading-[1.05]">
            Aprende idiomas con <span className="text-brand-lime">Fluidez Real</span> y Tecnología <span className="text-brand-blue">Inteligente</span>
          </h1>

          <p className="text-slate-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Formación inmersiva en <strong className="text-white">Inglés, Francés, Alemán, Italiano y Portugués</strong>. Clases presenciales en sedes exclusivas o 100% virtual en vivo con tutores certificados y asistencia 24/7.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#placement-test"
              className="w-full sm:w-auto px-8 py-4 bg-brand-lime hover:bg-[#b5f85e] text-brand-dark rounded-full font-bold text-base uppercase tracking-wide transition-transform hover:scale-105 shadow-xl shadow-brand-lime/20 flex items-center justify-center gap-3"
            >
              <span>Prueba de Nivel Gratuita</span>
              <FaArrowRight className="text-sm" />
            </a>
            <button
              onClick={onNavigateToChat}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white rounded-full font-bold text-base uppercase tracking-wide transition-colors flex items-center justify-center gap-3"
            >
              <FaRobot className="text-brand-blue text-lg" />
              <span>Consultar al Asistente IA</span>
            </button>
          </div>

          {/* Live quick proof pills */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-10 text-left">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-xs text-brand-lime font-mono block">Matrículas 2026</span>
              <span className="text-white font-bold text-sm">Ciclos Abiertos</span>
              <p className="text-slate-400 text-xs mt-0.5">Intensivos y Sabatinos</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-xs text-brand-blue font-mono block">Tarifas en COP</span>
              <span className="text-white font-bold text-sm">Desde $520.000</span>
              <p className="text-slate-400 text-xs mt-0.5">10% de dcto por pronto pago</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-xs text-brand-yellow font-mono block">Sedes Físicas</span>
              <span className="text-white font-bold text-sm">Bogotá & Medellín</span>
              <p className="text-slate-400 text-xs mt-0.5">Chapinero, Cl 100, Poblado</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-xs text-brand-purple font-mono block">Certificaciones</span>
              <span className="text-white font-bold text-sm">IELTS / TOEFL / DELF</span>
              <p className="text-slate-400 text-xs mt-0.5">Simulacros evaluados</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROGRAMAS E IDIOMAS ================= */}
      <section id="programas" className="py-24 px-5 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-orange uppercase font-bold text-xs tracking-widest">Catálogo Académico Oficial</span>
          <h2 className="font-display text-4xl sm:text-6xl uppercase text-white tracking-tight">
            5 Idiomas Estructurados en el <span className="text-brand-lime">Marco Europeo (MCER)</span>
          </h2>
          <p className="text-slate-400 text-base">
            Cada nivel consta de módulos de 40 horas académicas con docentes nativos o bilingües C1/C2 certificados, plataforma digital interactiva 24/7 y laboratorios de conversación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { name: 'Inglés', desc: 'General & Negocios. Niveles A1 hasta C1. Preparación IELTS/TOEFL.', flag: '🇬🇧 🇺🇸', color: 'from-blue-600/30 to-blue-900/10', border: 'border-blue-500/30' },
            { name: 'Francés', desc: 'Enfoque comunicativo. Niveles A1 hasta B2. Preparación DELF/DALF.', flag: '🇫🇷', color: 'from-indigo-600/30 to-indigo-900/10', border: 'border-indigo-500/30' },
            { name: 'Alemán', desc: 'Precisión técnica y gramatical. Niveles A1 hasta B2. Goethe-Zertifikat.', flag: '🇩🇪', color: 'from-amber-600/30 to-amber-900/10', border: 'border-amber-500/30' },
            { name: 'Italiano', desc: 'Inmersión cultural y fluidez. Niveles A1 hasta B2. Certificación CILS.', flag: '🇮🇹', color: 'from-emerald-600/30 to-emerald-900/10', border: 'border-emerald-500/30' },
            { name: 'Portugués', desc: 'Portugués Brasileño práctico y corporativo. Niveles A1 hasta B2.', flag: '🇧🇷', color: 'from-teal-600/30 to-teal-900/10', border: 'border-teal-500/30' },
          ].map((lang, idx) => (
            <div key={idx} className={`p-6 rounded-3xl bg-gradient-to-b ${lang.color} border ${lang.border} flex flex-col justify-between hover:scale-105 transition-transform shadow-lg`}>
              <div>
                <div className="text-3xl mb-3">{lang.flag}</div>
                <h3 className="font-display text-2xl text-white uppercase mb-2">{lang.name}</h3>
                <p className="text-slate-300 text-xs leading-relaxed">{lang.desc}</p>
              </div>
              <div className="pt-6 border-t border-white/10 mt-4 flex items-center justify-between text-xs text-brand-lime font-semibold">
                <span>Módulos de 40h</span>
                <span>MCER A1-C1</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MODALIDADES & SEDES ================= */}
      <section id="modalidades" className="py-24 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-brand-lime uppercase font-bold text-xs tracking-widest">Flexibilidad Total</span>
              <h2 className="font-display text-4xl sm:text-5xl uppercase text-white tracking-tight leading-tight">
                Elige cómo y dónde estudiar
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Nuestras instalaciones cuentan con aulas inteligentes, climatizadas, pantallas interactivas táctiles y zonas de inmersión conversacional (Language Coffee Lounges).
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <FaCheckCircle className="text-brand-lime flex-shrink-0" />
                  <span>Sede Bogotá Chapinero: Cra. 7 # 54 - 20 (Estación Calle 57)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <FaCheckCircle className="text-brand-lime flex-shrink-0" />
                  <span>Sede Bogotá Calle 100: Cl. 100 # 15 - 30 (Chicó Norte)</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <FaCheckCircle className="text-brand-lime flex-shrink-0" />
                  <span>Sede Medellín El Poblado: Cra. 43A # 5A - 113 (Parque del Poblado)</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 rounded-3xl bg-[#100c2a] border border-white/10 space-y-4 hover:border-brand-lime transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-brand-lime text-brand-dark flex items-center justify-center text-xl">
                  <FaLaptopHouse />
                </div>
                <h3 className="font-display text-2xl uppercase text-white">100% Virtual en Vivo</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Clases sincrónicas en tiempo real por Zoom HD y Meet, grabaciones completas en plataforma LMS disponible 24/7 y grupos reducidos de máximo 10 a 12 alumnos.
                </p>
                <div className="flex gap-2 text-xs font-mono text-brand-blue pt-2">
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">Zoom HD</span>
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">LMS 24/7</span>
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">Max 12 Alumnos</span>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-[#100c2a] border border-white/10 space-y-4 hover:border-brand-orange transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-brand-orange text-white flex items-center justify-center text-xl">
                  <FaSchool />
                </div>
                <h3 className="font-display text-2xl uppercase text-white">Presencial en Sede</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Aulas inteligentes climatizadas, zonas de café de inmersión conversacional y acceso directo a laboratorios presenciales en Bogotá y Medellín.
                </p>
                <div className="flex gap-2 text-xs font-mono text-brand-orange pt-2">
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">Bogotá</span>
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">Medellín</span>
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10">Language Lounge</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= HORARIOS OFICIALES ================= */}
      <section id="horarios" className="py-24 px-5 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-brand-blue uppercase font-bold text-xs tracking-widest">Franjas Sincrónicas COT (GMT-5)</span>
          <h2 className="font-display text-4xl sm:text-6xl uppercase text-white tracking-tight">
            Horarios Adaptados a tu Rutina
          </h2>
          <p className="text-slate-400 text-base">
            Todos los horarios programados en hora oficial de Colombia para estudiantes nacionales e internacionales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-3">
            <span className="text-xs font-mono text-brand-yellow font-bold uppercase">Madrugador</span>
            <h3 className="font-display text-2xl text-white">06:00 – 08:00 COT</h3>
            <p className="text-slate-300 text-xs">Lunes a Viernes (2h diarias / 40h mes). Ideal para profesionales antes de la jornada laboral.</p>
          </div>
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-3">
            <span className="text-xs font-mono text-brand-lime font-bold uppercase">Mañana & Tarde</span>
            <h3 className="font-display text-2xl text-white">09:00–11:00 / 14:00–16:00</h3>
            <p className="text-slate-300 text-xs">Lunes a Viernes. Franjas regulares presenciales y virtuales con clubes conversacionales.</p>
          </div>
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-3">
            <span className="text-xs font-mono text-brand-purple font-bold uppercase">Noche Prime</span>
            <h3 className="font-display text-2xl text-white">18:30 – 20:30 COT</h3>
            <p className="text-slate-300 text-xs">Lunes a Viernes (opción 20:30–22:30 virtual). Máxima concentración después del trabajo.</p>
          </div>
          <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-3">
            <span className="text-xs font-mono text-brand-orange font-bold uppercase">Sabatino Concentrado</span>
            <h3 className="font-display text-2xl text-white">08:00 – 13:00 COT</h3>
            <p className="text-slate-300 text-xs">Sábados intensivos (5h continuas con receso de 25 min). Presencial en sede y virtual.</p>
          </div>
        </div>
      </section>

      {/* ================= PRECIOS Y TARIFAS COP ================= */}
      <section id="precios" className="py-24 bg-gradient-to-b from-[#070515] via-[#100c2a] to-[#070515] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-brand-lime uppercase font-bold text-xs tracking-widest">Tarifas Transparentes 2026</span>
            <h2 className="font-display text-4xl sm:text-6xl uppercase text-white tracking-tight">
              Planes de Inversión en <span className="text-brand-lime">Pesos Colombianos (COP)</span>
            </h2>
            <p className="text-slate-300 text-sm">
              Sin cobros ocultos. Facturación electrónica DIAN. Aceptamos PSE, Bancolombia, Nequi y Tarjetas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Plan 1 */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-between space-y-6 hover:border-white/30 transition-all">
              <div>
                <span className="text-xs text-slate-400 font-mono uppercase">Lunes a Viernes</span>
                <h3 className="font-display text-3xl uppercase text-white mt-1">Módulo Intensivo</h3>
                <p className="text-slate-300 text-xs mt-2">40 horas académicas al mes. Incluye clubes de conversación.</p>
                <div className="text-4xl font-display text-brand-orange my-6">$650.000 <span className="text-sm font-sans text-slate-400">COP/mes</span></div>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-brand-lime" /> Clases en vivo + grabaciones</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-brand-lime" /> Licencia digital de plataforma</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-brand-lime" /> Certificado de asistencia</li>
                </ul>
              </div>
              <a href="#placement-test" className="w-full py-3.5 text-center rounded-full border border-white/20 hover:bg-white text-white hover:text-brand-dark font-bold text-sm uppercase tracking-wider transition-colors">
                Inscribirme
              </a>
            </div>

            {/* Plan 2: Destacado */}
            <div className="p-8 rounded-3xl bg-gradient-to-b from-[#1c1448] to-[#100c2a] border-2 border-brand-lime flex flex-col justify-between space-y-6 shadow-2xl shadow-brand-lime/10 relative scale-105">
              <div className="absolute -top-3.5 right-6 bg-brand-lime text-brand-dark text-[10px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider">
                Más Elegido
              </div>
              <div>
                <span className="text-xs text-brand-lime font-mono uppercase">Fin de Semana</span>
                <h3 className="font-display text-3xl uppercase text-white mt-1">Módulo Sabatino</h3>
                <p className="text-slate-300 text-xs mt-2">Sábados 8:00 AM – 1:00 PM. 20 horas académicas al mes.</p>
                <div className="text-4xl font-display text-brand-lime my-6">$520.000 <span className="text-sm font-sans text-slate-400">COP/mes</span></div>
                <ul className="space-y-2.5 text-xs text-slate-200">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-brand-lime" /> 10% dcto adicional por pronto pago ($468.000 COP)</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-brand-lime" /> Acceso a LMS 24/7 y laboratorios</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-brand-lime" /> Disponible en Sedes y Virtual</li>
                </ul>
              </div>
              <a href="#placement-test" className="w-full py-3.5 text-center rounded-full bg-brand-lime hover:bg-[#b5f85e] text-brand-dark font-bold text-sm uppercase tracking-wider transition-colors shadow-lg shadow-brand-lime/20">
                Inscribirme
              </a>
            </div>

            {/* Plan 3 */}
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-between space-y-6 hover:border-white/30 transition-all">
              <div>
                <span className="text-xs text-slate-400 font-mono uppercase">Personalizado</span>
                <h3 className="font-display text-3xl uppercase text-white mt-1">Tutoría VIP 1-a-1</h3>
                <p className="text-slate-300 text-xs mt-2">Clases particulares adaptadas a tus metas profesionales.</p>
                <div className="text-4xl font-display text-brand-blue my-6">$75.000 <span className="text-sm font-sans text-slate-400">COP/hora</span></div>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-brand-lime" /> Paquetes desde 10h ($700.000 COP)</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-brand-lime" /> Reprogramación con 24h de aviso</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-brand-lime" /> Preparación de entrevistas y viajes</li>
                </ul>
              </div>
              <a href="#placement-test" className="w-full py-3.5 text-center rounded-full border border-white/20 hover:bg-white text-white hover:text-brand-dark font-bold text-sm uppercase tracking-wider transition-colors">
                Cotizar Paquete
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PLACEMENT TEST & CONTACT FORM ================= */}
      <section id="placement-test" className="py-24 px-5 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-brand-orange uppercase font-bold text-xs tracking-widest">Sin Costo</span>
            <h2 className="font-display text-4xl sm:text-6xl uppercase text-white tracking-tight leading-none">
              Presenta tu <span className="text-brand-orange">Placement Test</span> en 25 Minutos
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Diagnostica tu nivel en el Marco Común Europeo (A1 a C1). Si eres principiante absoluto (A1), comienzas directamente sin presentar la prueba.
            </p>
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-brand-lime font-semibold text-sm">
                <FaCheckCircle />
                <span>Requisitos de Matrícula Básicos:</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Cédula de Ciudadanía, Tarjeta de Identidad (jóvenes 10-17 años) o Pasaporte/Cédula de Extranjería. Edad mínima: 14 años (programa adultos) o 10 años (programa Teens).
              </p>
            </div>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-[#100c2a] border border-white/10 shadow-2xl">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-brand-lime text-brand-dark flex items-center justify-center text-3xl mx-auto">
                  <FaCheckCircle />
                </div>
                <h3 className="font-display text-3xl uppercase text-white">¡Solicitud Recibida!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Te hemos enviado las instrucciones y el enlace para tu prueba de clasificación a tu correo electrónico.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-6 py-2 rounded-full border border-white/20 text-xs text-white hover:bg-white/10"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-display text-2xl uppercase text-white mb-2">Solicitar Admisión & Test</h3>
                
                <div>
                  <label className="text-xs uppercase font-bold text-slate-400 block mb-1">Nombre Completo</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej. Camila Morales"
                    className="w-full px-4 py-3 bg-white/5 rounded-xl border border-white/10 focus:border-brand-lime focus:outline-none text-white text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase font-bold text-slate-400 block mb-1">WhatsApp / Teléfono</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Ej. 310 123 4567"
                      className="w-full px-4 py-3 bg-white/5 rounded-xl border border-white/10 focus:border-brand-lime focus:outline-none text-white text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-xs uppercase font-bold text-slate-400 block mb-1">Correo Electrónico</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="camila@correo.com"
                      className="w-full px-4 py-3 bg-white/5 rounded-xl border border-white/10 focus:border-brand-lime focus:outline-none text-white text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase font-bold text-slate-400 block mb-1">Idioma</label>
                    <select
                      value={formData.language}
                      onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                      className="w-full px-4 py-3 bg-[#18133d] rounded-xl border border-white/10 focus:border-brand-lime focus:outline-none text-white text-sm"
                    >
                      <option value="Inglés">Inglés</option>
                      <option value="Francés">Francés</option>
                      <option value="Alemán">Alemán</option>
                      <option value="Italiano">Italiano</option>
                      <option value="Portugués">Portugués</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs uppercase font-bold text-slate-400 block mb-1">Modalidad de Interés</label>
                    <select
                      value={formData.modality}
                      onChange={(e) => setFormData({ ...formData, modality: e.target.value })}
                      className="w-full px-4 py-3 bg-[#18133d] rounded-xl border border-white/10 focus:border-brand-lime focus:outline-none text-white text-sm"
                    >
                      <option value="100% Virtual en Vivo">100% Virtual en Vivo</option>
                      <option value="Presencial Bogotá (Chapinero)">Presencial Bogotá (Chapinero)</option>
                      <option value="Presencial Bogotá (Calle 100)">Presencial Bogotá (Calle 100)</option>
                      <option value="Presencial Medellín (El Poblado)">Presencial Medellín (El Poblado)</option>
                      <option value="Híbrido">Híbrido</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-brand-lime hover:bg-[#b5f85e] text-brand-dark font-bold uppercase tracking-wider rounded-xl transition-transform hover:scale-[1.02] shadow-lg shadow-brand-lime/20 text-sm mt-4"
                >
                  Agendar Mi Test Gratuito
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#050310] border-t border-white/10 pt-16 pb-8 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-brand-lime text-brand-dark flex items-center justify-center font-bold">
                <FaGraduationCap />
              </div>
              <span className="font-display text-xl uppercase text-white tracking-wider">Vanguard</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Academia de Idiomas Colombiana. Registro de Educación para el Trabajo y Desarrollo Humano.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-3">Sedes Físicas</h4>
            <p className="space-y-1 leading-relaxed text-slate-400">
              <strong className="text-slate-300">Bogotá Chapinero:</strong> Cra. 7 # 54-20<br/>
              <strong className="text-slate-300">Bogotá Calle 100:</strong> Cl. 100 # 15-30<br/>
              <strong className="text-slate-300">Medellín:</strong> Cra. 43A # 5A-113 (El Poblado)
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-3">Medios de Pago</h4>
            <p className="leading-relaxed text-slate-400">
              PSE, Bancolombia, Nequi, Daviplata, Tarjetas de Crédito y Débito. Factura Electrónica DIAN.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase text-xs tracking-wider mb-3">Canales de Soporte</h4>
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-slate-300">
                <FaTelegramPlane className="text-brand-blue" />
                <span>@CL_Academy_bot (Telegram)</span>
              </p>
              <button
                onClick={onNavigateToChat}
                className="text-brand-lime hover:underline font-semibold block text-left"
              >
                Abrir Vanguard Assistant 24/7 →
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-5 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p>© 2026 Vanguard Language Academy Colombia. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <button onClick={onNavigateToAdmin} className="hover:text-white transition-colors">Administración</button>
            <a href="#placement-test" className="hover:text-white transition-colors">Admisiones</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
