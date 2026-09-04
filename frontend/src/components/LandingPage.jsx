import React, { useState, useEffect } from 'react';
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

const TELEGRAM_BOT_URL = 'https://t.me/CL_Academy_bot';

export default function LandingPage({ onNavigateToChat, onNavigateToAdmin }) {
  const [activeSection, setActiveSection] = useState('inicio');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    language: 'Inglés',
    modality: '100% Virtual en Vivo',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Dynamic active section observer on scroll
  useEffect(() => {
    const sectionIds = ['inicio', 'programas', 'modalidades', 'horarios', 'precios', 'placement-test'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-[#070515] text-slate-200 min-h-screen flex flex-col font-sans relative overflow-x-hidden selection:bg-brand-lime selection:text-brand-dark">
      
      {/* ================= TOP NAVIGATION ================= */}
      <header className="sticky top-0 z-50 w-full bg-[#070515]/90 backdrop-blur-md border-b border-white/10 transition-all">
        <div className="max-w-7xl mx-auto px-5 py-3.5 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-brand-lime text-brand-dark flex items-center justify-center font-bold shadow-lg shadow-brand-lime/20 group-hover:scale-105 transition-transform">
              <FaGraduationCap className="text-xl" />
            </div>
            <div>
              <span className="font-display text-2xl uppercase tracking-wider text-white block leading-none">Vanguard</span>
              <span className="text-[10px] text-brand-lime font-medium uppercase tracking-widest">Academia de Idiomas</span>
            </div>
          </a>

          {/* Nav links with active indicator */}
          <nav className="hidden lg:flex items-center gap-6 bg-white/5 px-6 py-2 rounded-full border border-white/10 text-sm font-medium">
            <a 
              href="#programas" 
              className={`transition-colors py-1 px-2.5 rounded-full ${
                activeSection === 'programas' ? 'text-brand-lime bg-brand-lime/10 font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              Idiomas & MCER
            </a>
            <a 
              href="#modalidades" 
              className={`transition-colors py-1 px-2.5 rounded-full ${
                activeSection === 'modalidades' ? 'text-brand-lime bg-brand-lime/10 font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              Sedes & Modalidades
            </a>
            <a 
              href="#horarios" 
              className={`transition-colors py-1 px-2.5 rounded-full ${
                activeSection === 'horarios' ? 'text-brand-lime bg-brand-lime/10 font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              Horarios
            </a>
            <a 
              href="#precios" 
              className={`transition-colors py-1 px-2.5 rounded-full ${
                activeSection === 'precios' ? 'text-brand-lime bg-brand-lime/10 font-bold' : 'text-slate-300 hover:text-white'
              }`}
            >
              Precios COP
            </a>
            <a 
              href="#placement-test" 
              className={`transition-colors py-1 px-2.5 rounded-full ${
                activeSection === 'placement-test' ? 'text-brand-lime bg-brand-lime/10 font-bold' : 'text-brand-lime/90 hover:text-brand-lime'
              }`}
            >
              Placement Test
            </a>
          </nav>

          {/* Action buttons including Telegram */}
          <div className="flex items-center gap-3">
            <a
              href={TELEGRAM_BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#229ED9] hover:bg-[#1e8ec3] text-white px-4 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all hover:scale-105 shadow-md shadow-[#229ED9]/20"
              title="Abrir Bot en Telegram"
            >
              <FaTelegramPlane className="text-base" />
              <span className="hidden sm:inline">Bot Telegram</span>
            </a>

            <button
              onClick={onNavigateToChat}
              className="flex items-center gap-2 bg-brand-lime hover:bg-[#b0f55c] text-brand-dark px-4 sm:px-5 py-2.5 rounded-full font-bold text-xs sm:text-sm transition-all hover:scale-105 shadow-md shadow-brand-lime/20"
            >
              <FaRobot className="text-base" />
              <span>Vanguard AI</span>
            </button>

            <button
              onClick={onNavigateToAdmin}
              className="text-xs px-3 py-2 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-colors"
            >
              Staff
            </button>
          </div>
        </div>
      </header>

      {/* ================= HERO SECTION WITH GHOSTCURSOR ================= */}
      <section id="inicio" className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-5 pt-12 pb-20 overflow-hidden bg-gradient-to-b from-[#070515] via-[#0c0926] to-[#070515]">
        <GhostCursor color="#c6ff7c" trailLength={36} inertia={0.68} brightness={1.6} />

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

            <a
              href={TELEGRAM_BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 bg-[#229ED9]/20 hover:bg-[#229ED9]/30 border border-[#229ED9]/40 text-[#229ED9] hover:text-white rounded-full font-bold text-base uppercase tracking-wide transition-colors flex items-center justify-center gap-3"
            >
              <FaTelegramPlane className="text-lg" />
              <span>Canal Telegram</span>
            </a>
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

      {/* ================= SECTION 1: IDIOMAS Y PENSUM MCER ================= */}
      <section id="programas" className="py-24 px-5 border-t border-white/10 bg-[#070515]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-lime bg-brand-lime/10 px-3.5 py-1 rounded-full border border-brand-lime/20">
              Oferta Curricular
            </span>
            <h2 className="font-display text-4xl sm:text-6xl uppercase text-white">
              5 Idiomas Globales • Marco Común Europeo (MCER)
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Todos nuestros cursos siguen los estándares internacionales de dominio lingüístico: desde el nivel introductorio A1 hasta el nivel avanzado operacional C1.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { code: 'EN', name: 'Inglés', desc: 'A1, A2, B1, B2, C1 con enfoque conversacional y preparación IELTS/TOEFL.', flag: '🇺🇸 / 🇬🇧', color: 'border-brand-lime/40' },
              { code: 'FR', name: 'Francés', desc: 'Preparación para certificaciones DELF/DALF. Enfoque profesional y cultural.', flag: '🇫🇷', color: 'border-brand-blue/40' },
              { code: 'DE', name: 'Alemán', desc: 'Desde A1 hasta B2 con preparación para exámenes oficiales Goethe-Zertifikat.', flag: '🇩🇪', color: 'border-brand-yellow/40' },
              { code: 'IT', name: 'Italiano', desc: 'Inmersión comunicativa y gramatical para negocios, turismo y ciudadanía CELI.', flag: '🇮🇹', color: 'border-brand-orange/40' },
              { code: 'PT', name: 'Portugués', desc: 'Portugués de Brasil y Portugal, preparación para examen internacional Celpe-Bras.', flag: '🇧🇷', color: 'border-brand-purple/40' },
            ].map((lang) => (
              <div 
                key={lang.code}
                className={`p-6 rounded-3xl bg-[#100c2a] border ${lang.color} hover:border-brand-lime transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl">{lang.flag}</span>
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-white/10 text-white">{lang.code}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{lang.name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{lang.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                  <span>Niveles A1 - C1</span>
                  <button onClick={onNavigateToChat} className="text-brand-lime font-bold hover:underline">Consultar</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: SEDES Y MODALIDADES ================= */}
      <section id="modalidades" className="py-24 px-5 border-t border-white/10 bg-[#0a0720]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-blue bg-brand-blue/10 px-3.5 py-1 rounded-full border border-brand-blue/20">
              Flexibilidad Total
            </span>
            <h2 className="font-display text-4xl sm:text-6xl uppercase text-white">
              Sedes Físicas & Modalidad Virtual en Vivo
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Estudia en nuestras modernas sedes en Bogotá y Medellín o conéctate desde cualquier lugar de Colombia con clases 100% en tiempo real.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-[#100c2a] border border-white/10 hover:border-brand-lime/50 transition-all space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-brand-lime/10 text-brand-lime flex items-center justify-center text-xl">
                <FaSchool />
              </div>
              <h3 className="text-2xl font-bold text-white">Presencial en Sede</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Aulas climatizadas, laboratorios multimedia y clubes de conversación presenciales.
              </p>
              <div className="space-y-2 text-xs text-slate-400 pt-2 border-t border-white/10">
                <div className="flex items-center gap-2"><FaMapMarkerAlt className="text-brand-lime" /> <strong>Bogotá:</strong> Sede Chapinero & Sede Calle 100</div>
                <div className="flex items-center gap-2"><FaMapMarkerAlt className="text-brand-lime" /> <strong>Medellín:</strong> Sede El Poblado & Sede Laureles</div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#100c2a] border border-white/10 hover:border-brand-blue/50 transition-all space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 text-brand-blue flex items-center justify-center text-xl">
                <FaLaptopHouse />
              </div>
              <h3 className="text-2xl font-bold text-white">100% Virtual en Vivo</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Clases interactivas en vivo con profesores en directo a través de Zoom & Google Meet. Acceso a plataforma 24/7.
              </p>
              <div className="flex items-center gap-4 text-xs text-slate-400 pt-2 border-t border-white/10">
                <span className="flex items-center gap-1.5"><SiZoom className="text-brand-blue" /> Zoom Pro</span>
                <span className="flex items-center gap-1.5"><SiGooglemeet className="text-brand-lime" /> Google Meet</span>
                <span className="flex items-center gap-1.5"><FaClock className="text-brand-yellow" /> Grabaciones 30 días</span>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#100c2a] border border-white/10 hover:border-brand-yellow/50 transition-all space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-brand-yellow/10 text-brand-yellow flex items-center justify-center text-xl">
                <FaGlobeAmericas />
              </div>
              <h3 className="text-2xl font-bold text-white">Modalidad Híbrida / Blended</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Alterna entre asistencia a sede física y sesiones virtuales según tu agenda laboral y académica semanal.
              </p>
              <div className="space-y-1.5 text-xs text-slate-400 pt-2 border-t border-white/10">
                <p>• Flexibilidad para ejecutivos y universitarios</p>
                <p>• Mismo avance curricular y certificación oficial</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: HORARIOS Y TURNOS ================= */}
      <section id="horarios" className="py-24 px-5 border-t border-white/10 bg-[#070515]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-yellow bg-brand-yellow/10 px-3.5 py-1 rounded-full border border-brand-yellow/20">
              Disponibilidad Horaria
            </span>
            <h2 className="font-display text-4xl sm:text-6xl uppercase text-white">
              Turnos Intensivos y Sabatinos
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Ajusta tu aprendizaje a tu estilo de vida con horarios matutinos, nocturnos o fines de semana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl bg-[#100c2a] border border-white/10 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FaClock className="text-2xl text-brand-lime" />
                  <h3 className="text-2xl font-bold text-white">Intensivo Lunes a Viernes</h3>
                </div>
                <span className="text-xs font-mono px-3 py-1 bg-brand-lime/10 text-brand-lime rounded-full border border-brand-lime/30">
                  40 horas / mes
                </span>
              </div>
              <p className="text-sm text-slate-300">2 horas diarias de clase interactiva:</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-slate-400 block">Mañana:</span>
                  <strong className="text-white">6:00 AM - 8:00 AM</strong>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-slate-400 block">Intermedio:</span>
                  <strong className="text-white">8:30 AM - 10:30 AM</strong>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-slate-400 block">Noche:</span>
                  <strong className="text-white">6:30 PM - 8:30 PM</strong>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#100c2a] border border-white/10 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FaCalendarAlt className="text-2xl text-brand-blue" />
                  <h3 className="text-2xl font-bold text-white">Sabatino Concentrado</h3>
                </div>
                <span className="text-xs font-mono px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-full border border-brand-blue/30">
                  20 horas / mes
                </span>
              </div>
              <p className="text-sm text-slate-300">Sesión única de fin de semana:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-slate-400 block">Sábados Mañana:</span>
                  <strong className="text-white">8:00 AM - 1:00 PM</strong>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-slate-400 block">Sábados Tarde:</span>
                  <strong className="text-white">1:30 PM - 6:30 PM</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: PRECIOS Y MEDIOS DE PAGO EN COP ================= */}
      <section id="precios" className="py-24 px-5 border-t border-white/10 bg-[#0a0720]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-lime bg-brand-lime/10 px-3.5 py-1 rounded-full border border-brand-lime/20">
              Tarifas Transparentes en COP
            </span>
            <h2 className="font-display text-4xl sm:text-6xl uppercase text-white">
              Inversión Mensual & Descuentos
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Precios oficiales sin costos ocultos. Todos los programas incluyen acceso a la plataforma digital y material de estudio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-3xl bg-[#100c2a] border border-white/10 hover:border-brand-lime transition-all space-y-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase text-slate-400">Programa Sabatino</span>
                <h3 className="text-2xl font-bold text-white mt-1">Sabatino Standard</h3>
                <div className="my-6">
                  <span className="text-4xl font-display text-white">$520.000</span>
                  <span className="text-slate-400 text-xs ml-2">COP / módulo</span>
                </div>
                <ul className="space-y-3 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-brand-lime" /> 20 horas académicas al mes</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-brand-lime" /> Plataforma interactiva 24/7</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-brand-lime" /> Clubes de conversación virtuales</li>
                </ul>
              </div>
              <button onClick={onNavigateToChat} className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition-colors">
                Consultar con Asistente
              </button>
            </div>

            <div className="p-8 rounded-3xl bg-[#130f35] border-2 border-brand-lime shadow-xl shadow-brand-lime/10 space-y-6 flex flex-col justify-between relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-lime text-brand-dark rounded-full text-[11px] font-bold uppercase tracking-widest">
                Más Popular
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-brand-lime">Programa Intensivo</span>
                <h3 className="text-2xl font-bold text-white mt-1">Intensivo L-V</h3>
                <div className="my-6">
                  <span className="text-4xl font-display text-white">$650.000</span>
                  <span className="text-slate-400 text-xs ml-2">COP / módulo</span>
                </div>
                <ul className="space-y-3 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-brand-lime" /> 40 horas al mes (2h diarias)</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-brand-lime" /> 10% de descuento por pronto pago ($585.000 COP)</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-brand-lime" /> Simulacros de exámenes internacionales</li>
                </ul>
              </div>
              <button onClick={onNavigateToChat} className="w-full py-3 rounded-xl bg-brand-lime hover:bg-[#b0f55c] text-brand-dark font-bold text-xs uppercase tracking-wider transition-transform hover:scale-105">
                Iniciar Asesoría IA
              </button>
            </div>

            <div className="p-8 rounded-3xl bg-[#100c2a] border border-white/10 hover:border-brand-purple transition-all space-y-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase text-slate-400">Exámenes Internacionales</span>
                <h3 className="text-2xl font-bold text-white mt-1">Prep IELTS / TOEFL</h3>
                <div className="my-6">
                  <span className="text-4xl font-display text-white">$780.000</span>
                  <span className="text-slate-400 text-xs ml-2">COP / módulo</span>
                </div>
                <ul className="space-y-3 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-brand-lime" /> 40 horas especializadas en técnicas de examen</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-brand-lime" /> Simulacros oficiales con retroalimentación</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-brand-lime" /> Material de preparación Cambridge/ETS</li>
                </ul>
              </div>
              <button onClick={onNavigateToChat} className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition-colors">
                Consultar con Asistente
              </button>
            </div>
          </div>

          {/* Payment methods pill banner */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <FaCreditCard className="text-xl text-brand-lime" />
              <span><strong>Medios de Pago Habilitados:</strong> PSE, Transferencia Bancolombia, Nequi, Tarjetas Débito/Crédito y Financiación Directa sin Intereses.</span>
            </div>
            <span className="text-slate-400 font-mono">Matrícula anual: $120.000 COP</span>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: PLACEMENT TEST / INSCRIPCIÓN ================= */}
      <section id="placement-test" className="py-24 px-5 border-t border-white/10 bg-[#070515]">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-r from-[#120d36] to-[#18114a] border border-brand-lime/30 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
            <div className="space-y-5">
              <span className="text-xs font-mono uppercase tracking-widest text-brand-lime bg-brand-lime/10 px-3 py-1 rounded-full border border-brand-lime/30">
                100% Gratuita • 25 Minutos
              </span>
              <h2 className="font-display text-4xl sm:text-5xl uppercase text-white">
                Prueba de Clasificación de Nivel
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Descubre tu nivel exacto según el marco MCER (A1 a C1). Evaluación gramatical, de comprensión auditiva y entrevista diagnóstica.
              </p>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2"><FaCheckCircle className="text-brand-lime" /> Sin costo de presentación</div>
                <div className="flex items-center gap-2"><FaCheckCircle className="text-brand-lime" /> Resultados inmediatos y recomendación de curso</div>
                <div className="flex items-center gap-2"><FaCheckCircle className="text-brand-lime" /> Asesoría directa con nuestro Asistente Inteligente</div>
              </div>
            </div>

            <div className="bg-[#0c0926]/90 p-6 rounded-2xl border border-white/10">
              {formSubmitted ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-12 h-12 rounded-full bg-brand-lime/20 text-brand-lime flex items-center justify-center mx-auto text-xl">
                    <FaCheckCircle />
                  </div>
                  <h3 className="text-lg font-bold text-white">¡Solicitud Recibida!</h3>
                  <p className="text-xs text-slate-300">
                    Te enviaremos el enlace para tu prueba de clasificación a tu correo electrónico. Puedes consultar detalles con nuestro Asistente IA.
                  </p>
                  <button onClick={onNavigateToChat} className="mt-4 px-6 py-2.5 rounded-full bg-brand-lime text-brand-dark font-bold text-xs uppercase">
                    Abrir Asistente IA
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <h3 className="text-base font-bold text-white mb-2">Solicita tu Prueba Online</h3>
                  <div>
                    <label className="text-[11px] text-slate-400 block mb-1">Nombre Completo</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Laura Gómez"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-lime"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[11px] text-slate-400 block mb-1">Teléfono / WhatsApp</label>
                      <input
                        type="tel"
                        required
                        placeholder="Ej. 310 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-lime"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-slate-400 block mb-1">Idioma de Interés</label>
                      <select
                        value={formData.language}
                        onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                        className="w-full px-3.5 py-2 rounded-xl bg-[#141038] border border-white/10 text-xs text-white focus:outline-none focus:border-brand-lime"
                      >
                        <option>Inglés</option>
                        <option>Francés</option>
                        <option>Alemán</option>
                        <option>Italiano</option>
                        <option>Portugués</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="text-[11px] text-slate-400 block mb-1">Correo Electrónico</label>
                    <input
                      type="email"
                      required
                      placeholder="Ej. laura@correo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-lime"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-brand-lime hover:bg-[#b0f55c] text-brand-dark font-bold text-xs uppercase tracking-wide transition-all shadow-md mt-2"
                  >
                    Agendar Prueba Gratuita
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-12 px-5 border-t border-white/10 bg-[#050310] text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-brand-lime text-brand-dark flex items-center justify-center font-bold">
              <FaGraduationCap className="text-base" />
            </div>
            <div>
              <strong className="text-white block font-display uppercase tracking-wider">Vanguard Language Academy</strong>
              <span className="text-[10px] text-slate-500">Acreditación Oficial • Colombia 2026</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <a href="#programas" className="hover:text-white transition-colors">Programas</a>
            <a href="#precios" className="hover:text-white transition-colors">Tarifas COP</a>
            <a href={TELEGRAM_BOT_URL} target="_blank" rel="noopener noreferrer" className="hover:text-[#229ED9] transition-colors flex items-center gap-1">
              <FaTelegramPlane /> Telegram Bot
            </a>
            <button onClick={onNavigateToChat} className="hover:text-brand-lime transition-colors flex items-center gap-1">
              <FaRobot /> Asistente IA
            </button>
            <button onClick={onNavigateToAdmin} className="hover:text-white transition-colors">
              Portal Staff
            </button>
          </div>

          <p className="text-[11px] text-slate-500">
            © 2026 Academia de Idiomas Colombiana. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
