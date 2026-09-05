import React, { useState, useEffect } from 'react';
import { 
  FaGlobeAmericas, FaMapMarkerAlt, FaCreditCard, 
  FaClock, FaCheckCircle, FaLaptopHouse, FaSchool, FaCertificate, 
  FaRocket, FaShieldAlt, FaArrowRight, FaTelegramPlane, FaWhatsapp,
  FaAward, FaCalendarAlt, FaRobot, FaArrowUp, FaHome
} from 'react-icons/fa';
import { 
  SiZoom, SiGooglemeet 
} from 'react-icons/si';
import GhostCursor from './GhostCursor';
import VanguardLogo from './VanguardLogo';

const TELEGRAM_BOT_NAME = import.meta.env.VITE_TELEGRAM_BOT_NAME || 'Vanguard_academy_bot';
const TELEGRAM_BOT_URL = `https://t.me/${TELEGRAM_BOT_NAME}`;

export default function LandingPage({ onNavigateToChat, onNavigateToAdmin }) {
  const [activeSection, setActiveSection] = useState('inicio');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    language: 'Inglés',
    modality: '100% Virtual en Vivo',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Dynamic active section observer in real time
  useEffect(() => {
    const sectionIds = ['inicio', 'programas', 'modalidades', 'horarios', 'precios', 'placement-test'];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 40);
      setShowBackToTop(scrollY > 280);

      // 1. If at or near top of the page, unconditionally activate 'inicio'
      if (scrollY < 180) {
        setActiveSection('inicio');
        return;
      }

      // 2. If scrolled to the bottom of the page, activate the last section ('placement-test')
      if ((window.innerHeight + Math.ceil(scrollY)) >= document.documentElement.scrollHeight - 60) {
        setActiveSection('placement-test');
        return;
      }

      // 3. Viewport intersection: find the section containing the trigger line (200px from top)
      const targetPoint = 200;
      let matchedSection = 'inicio';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= targetPoint && rect.bottom > targetPoint) {
            matchedSection = id;
            break;
          }
        }
      }

      setActiveSection(matchedSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToHome = (e) => {
    if (e) e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('inicio');
  };

  const scrollToSection = (e, sectionId) => {
    if (e) e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      const navOffset = isScrolled ? 76 : 84;
      const elementPosition = el.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = Math.max(0, elementPosition - navOffset);
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-[#070515] text-slate-200 min-h-screen flex flex-col font-sans relative overflow-x-hidden selection:bg-brand-lime selection:text-brand-dark">
      
      {/* ================= TOP DIFFUSION & BLUR FEATHERING VEIL ================= */}
      <div 
        className={`fixed top-0 inset-x-0 h-28 sm:h-32 z-40 pointer-events-none transition-opacity duration-500 ${
          isScrolled ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'linear-gradient(to bottom, rgba(7, 5, 21, 0.95) 0%, rgba(7, 5, 21, 0.7) 40%, rgba(7, 5, 21, 0.25) 75%, transparent 100%)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
        }}
      />

      {/* ================= TOP FLOATING NAVIGATION DOCK ================= */}
      <header 
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-out pointer-events-none ${
          isScrolled ? 'pt-3 sm:pt-4 px-3 sm:px-6' : 'pt-0 px-0'
        }`}
      >
        <div 
          className={`mx-auto pointer-events-auto transition-all duration-500 ease-out flex items-center justify-between ${
            isScrolled 
              ? 'max-w-6xl border border-white/15 rounded-full px-4 sm:px-6 py-2.5 shadow-[0_16px_40px_-6px_rgba(0,0,0,0.9),0_0_24px_rgba(189,240,82,0.06)] ring-1 ring-white/10' 
              : 'max-w-7xl border-b border-white/10 px-5 sm:px-6 py-3.5'
          }`}
          style={{
            backgroundColor: isScrolled ? 'rgba(10, 7, 34, 0.75)' : 'rgba(7, 5, 21, 0.70)',
            backdropFilter: 'blur(28px) saturate(190%)',
            WebkitBackdropFilter: 'blur(28px) saturate(190%)',
          }}
        >
          
          {/* Brand Logo with Smooth Home Click */}
          <a 
            href="#inicio" 
            onClick={scrollToHome}
            className="group transition-transform hover:opacity-95"
            title="Vanguard Academia de Idiomas - Ir al Inicio"
          >
            <VanguardLogo size="md" />
          </a>

          {/* Nav links with real-time active indicator */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-white/5 p-1 rounded-full border border-white/10 text-xs font-medium">
            <a 
              href="#inicio" 
              onClick={scrollToHome}
              className={`transition-all py-1 px-3 rounded-full flex items-center gap-1.5 ${
                activeSection === 'inicio' 
                  ? 'text-brand-lime bg-brand-lime/15 font-bold shadow-sm' 
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              <FaHome className="text-xs" />
              <span>Inicio</span>
            </a>

            <a 
              href="#programas" 
              onClick={(e) => scrollToSection(e, 'programas')}
              className={`transition-all py-1 px-3 rounded-full ${
                activeSection === 'programas' 
                  ? 'text-brand-lime bg-brand-lime/15 font-bold shadow-sm' 
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Idiomas & MCER
            </a>

            <a 
              href="#modalidades" 
              onClick={(e) => scrollToSection(e, 'modalidades')}
              className={`transition-all py-1 px-3 rounded-full ${
                activeSection === 'modalidades' 
                  ? 'text-brand-lime bg-brand-lime/15 font-bold shadow-sm' 
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Sedes & Modalidades
            </a>

            <a 
              href="#horarios" 
              onClick={(e) => scrollToSection(e, 'horarios')}
              className={`transition-all py-1 px-3 rounded-full ${
                activeSection === 'horarios' 
                  ? 'text-brand-lime bg-brand-lime/15 font-bold shadow-sm' 
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Horarios
            </a>

            <a 
              href="#precios" 
              onClick={(e) => scrollToSection(e, 'precios')}
              className={`transition-all py-1 px-3 rounded-full ${
                activeSection === 'precios' 
                  ? 'text-brand-lime bg-brand-lime/15 font-bold shadow-sm' 
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              Precios COP
            </a>

            <a 
              href="#placement-test" 
              onClick={(e) => scrollToSection(e, 'placement-test')}
              className={`transition-all py-1 px-3.5 rounded-full ${
                activeSection === 'placement-test' 
                  ? 'text-brand-lime bg-brand-lime/15 font-bold shadow-sm' 
                  : 'text-brand-lime/90 hover:text-brand-lime hover:bg-white/5'
              }`}
            >
              Placement Test
            </a>
          </nav>

          {/* Action buttons */}
          <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
            <a
              href={TELEGRAM_BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-[#229ED9] hover:bg-[#1e8ec3] text-white px-3 py-1.5 rounded-full font-bold text-xs transition-all hover:scale-105 shadow-md shadow-[#229ED9]/20 flex-shrink-0"
              title="Abrir Bot Oficial en Telegram"
            >
              <FaTelegramPlane className="text-sm" />
              <span className="hidden sm:inline">Bot Telegram</span>
            </a>

            <button
              onClick={onNavigateToChat}
              className="flex items-center gap-1.5 bg-brand-lime hover:bg-[#b0f55c] text-brand-dark px-3.5 sm:px-4 py-1.5 rounded-full font-bold text-xs transition-all hover:scale-105 shadow-md shadow-brand-lime/20 flex-shrink-0"
            >
              <FaRobot className="text-sm" />
              <span>Vanguard AI</span>
            </button>

            <button
              onClick={onNavigateToAdmin}
              className="text-xs px-2.5 py-1.5 rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-colors flex-shrink-0"
            >
              Staff
            </button>
          </div>
        </div>
      </header>

      {/* ================= HERO SECTION WITH GHOSTCURSOR ================= */}
      <section id="inicio" className="relative min-h-[85vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 pt-24 sm:pt-28 pb-16 overflow-hidden bg-gradient-to-b from-[#070515] via-[#0c0926] to-[#070515]">
        <GhostCursor color="#bdf052" trailLength={24} inertia={0.74} brightness={0.80} zIndex={0} className="opacity-55 pointer-events-none" />

        {/* Floating pill tags */}
        <div className="relative z-10 max-w-4xl mx-auto space-y-5 pointer-events-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-lime/10 border border-brand-lime/30 text-brand-lime text-[11px] font-semibold uppercase tracking-widest animate-pulse">
            <FaAward className="text-xs" />
            <span>Acreditación Oficial MCER (A1 a C1) • Sedes Bogotá & Medellín</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-[1.08]">
            Aprende idiomas con <span className="text-brand-lime">Fluidez Real</span> y Tecnología <span className="text-brand-blue">Inteligente</span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Formación inmersiva en <strong className="text-white">Inglés, Francés, Alemán, Italiano y Portugués</strong>. Clases presenciales en sedes exclusivas o 100% virtual en vivo con tutores certificados y asistencia 24/7.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href="#placement-test"
              onClick={(e) => scrollToSection(e, 'placement-test')}
              className="w-full sm:w-auto px-6 py-3 bg-brand-lime hover:bg-[#b5f85e] text-brand-dark rounded-full font-bold text-sm uppercase tracking-wide transition-transform hover:scale-105 shadow-lg shadow-brand-lime/20 flex items-center justify-center gap-2.5"
            >
              <span>Prueba de Nivel Gratuita</span>
              <FaArrowRight className="text-xs" />
            </a>

            <button
              onClick={onNavigateToChat}
              className="w-full sm:w-auto px-6 py-3 bg-white/10 hover:bg-white/15 border border-white/20 text-white rounded-full font-bold text-sm uppercase tracking-wide transition-colors flex items-center justify-center gap-2.5"
            >
              <FaRobot className="text-brand-blue text-base" />
              <span>Consultar al Asistente IA</span>
            </button>

            <a
              href={TELEGRAM_BOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 bg-[#229ED9]/20 hover:bg-[#229ED9]/30 border border-[#229ED9]/40 text-[#229ED9] hover:text-white rounded-full font-bold text-sm uppercase tracking-wide transition-colors flex items-center justify-center gap-2.5"
            >
              <FaTelegramPlane className="text-base" />
              <span>Canal Telegram</span>
            </a>
          </div>

          {/* Live quick proof pills */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 pt-6 text-left">
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-[11px] text-brand-lime font-mono block">Matrículas 2026</span>
              <span className="text-white font-bold text-xs sm:text-sm">Ciclos Abiertos</span>
              <p className="text-slate-400 text-[11px] mt-0.5">Intensivos y Sabatinos</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-[11px] text-brand-blue font-mono block">Tarifas en COP</span>
              <span className="text-white font-bold text-xs sm:text-sm">Desde $520.000</span>
              <p className="text-slate-400 text-[11px] mt-0.5">10% de dcto por pronto pago</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-[11px] text-brand-yellow font-mono block">Sedes Físicas</span>
              <span className="text-white font-bold text-xs sm:text-sm">Bogotá & Medellín</span>
              <p className="text-slate-400 text-[11px] mt-0.5">Chapinero, Cl 100, Poblado</p>
            </div>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="text-[11px] text-brand-purple font-mono block">Certificaciones</span>
              <span className="text-white font-bold text-xs sm:text-sm">IELTS / TOEFL / DELF</span>
              <p className="text-slate-400 text-[11px] mt-0.5">Simulacros evaluados</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 1: IDIOMAS Y PENSUM MCER ================= */}
      <section id="programas" className="relative z-10 py-16 sm:py-20 px-4 sm:px-6 border-t border-white/10 bg-[#070515]">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-brand-lime bg-brand-lime/10 px-3 py-1 rounded-full border border-brand-lime/20">
              Oferta Curricular
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase text-white">
              5 Idiomas Globales • Marco Común Europeo (MCER)
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Todos nuestros cursos siguen los estándares internacionales de dominio lingüístico: desde el nivel introductorio A1 hasta el nivel avanzado operacional C1.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {[
              { code: 'EN', name: 'Inglés', desc: 'A1, A2, B1, B2, C1 con enfoque conversacional y preparación IELTS/TOEFL.', flag: '🇺🇸 / 🇬🇧', color: 'border-brand-lime/40' },
              { code: 'FR', name: 'Francés', desc: 'Preparación para certificaciones DELF/DALF. Enfoque profesional y cultural.', flag: '🇫🇷', color: 'border-brand-blue/40' },
              { code: 'DE', name: 'Alemán', desc: 'Desde A1 hasta B2 con preparación para exámenes oficiales Goethe-Zertifikat.', flag: '🇩🇪', color: 'border-brand-yellow/40' },
              { code: 'IT', name: 'Italiano', desc: 'Inmersión comunicativa y gramatical para negocios, turismo y ciudadanía CELI.', flag: '🇮🇹', color: 'border-brand-orange/40' },
              { code: 'PT', name: 'Portugués', desc: 'Portugués de Brasil y Portugal, preparación para examen internacional Celpe-Bras.', flag: '🇧🇷', color: 'border-brand-purple/40' },
            ].map((lang) => (
              <div 
                key={lang.code}
                className={`p-5 rounded-2xl bg-[#100c2a] border ${lang.color} hover:border-brand-lime transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl">{lang.flag}</span>
                    <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded bg-white/10 text-white">{lang.code}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1.5">{lang.name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{lang.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
                  <span>Niveles A1 - C1</span>
                  <button onClick={onNavigateToChat} className="text-brand-lime font-bold hover:underline">Consultar</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: SEDES Y MODALIDADES ================= */}
      <section id="modalidades" className="relative z-10 py-16 sm:py-20 px-4 sm:px-6 border-t border-white/10 bg-[#0a0720]">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-brand-blue bg-brand-blue/10 px-3 py-1 rounded-full border border-brand-blue/20">
              Flexibilidad Total
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase text-white">
              Sedes Físicas & Modalidad Virtual en Vivo
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Estudia en nuestras modernas sedes en Bogotá y Medellín o conéctate desde cualquier lugar de Colombia con clases 100% en tiempo real.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-6 rounded-2xl bg-[#100c2a] border border-white/10 hover:border-brand-lime/50 transition-all space-y-4">
              <div className="w-10 h-10 rounded-xl bg-brand-lime/10 text-brand-lime flex items-center justify-center text-lg">
                <FaSchool />
              </div>
              <h3 className="text-xl font-bold text-white">Presencial en Sede</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Aulas climatizadas, laboratorios multimedia y clubes de conversación presenciales.
              </p>
              <div className="space-y-1.5 text-xs text-slate-400 pt-2 border-t border-white/10">
                <div className="flex items-center gap-2"><FaMapMarkerAlt className="text-brand-lime text-xs" /> <strong>Bogotá:</strong> Sede Chapinero & Sede Calle 100</div>
                <div className="flex items-center gap-2"><FaMapMarkerAlt className="text-brand-lime text-xs" /> <strong>Medellín:</strong> Sede El Poblado & Sede Laureles</div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#100c2a] border border-white/10 hover:border-brand-blue/50 transition-all space-y-4">
              <div className="w-10 h-10 rounded-xl bg-brand-blue/10 text-brand-blue flex items-center justify-center text-lg">
                <FaLaptopHouse />
              </div>
              <h3 className="text-xl font-bold text-white">100% Virtual en Vivo</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Clases interactivas en vivo con profesores en directo a través de Zoom & Google Meet. Acceso a plataforma 24/7.
              </p>
              <div className="flex items-center gap-3 text-xs text-slate-400 pt-2 border-t border-white/10">
                <span className="flex items-center gap-1"><SiZoom className="text-brand-blue text-xs" /> Zoom Pro</span>
                <span className="flex items-center gap-1"><SiGooglemeet className="text-brand-lime text-xs" /> Meet</span>
                <span className="flex items-center gap-1"><FaClock className="text-brand-yellow text-xs" /> Grabaciones 30d</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#100c2a] border border-white/10 hover:border-brand-yellow/50 transition-all space-y-4">
              <div className="w-10 h-10 rounded-xl bg-brand-yellow/10 text-brand-yellow flex items-center justify-center text-lg">
                <FaGlobeAmericas />
              </div>
              <h3 className="text-xl font-bold text-white">Modalidad Híbrida / Blended</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Alterna entre asistencia a sede física y sesiones virtuales según tu agenda laboral y académica semanal.
              </p>
              <div className="space-y-1 text-xs text-slate-400 pt-2 border-t border-white/10">
                <p>• Flexibilidad para ejecutivos y universitarios</p>
                <p>• Mismo avance curricular y certificación oficial</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: HORARIOS Y TURNOS ================= */}
      <section id="horarios" className="relative z-10 py-16 sm:py-20 px-4 sm:px-6 border-t border-white/10 bg-[#070515]">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-brand-yellow bg-brand-yellow/10 px-3 py-1 rounded-full border border-brand-yellow/20">
              Disponibilidad Horaria
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase text-white">
              Turnos Intensivos y Sabatinos
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Ajusta tu aprendizaje a tu estilo de vida con horarios matutinos, nocturnos o fines de semana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-[#100c2a] border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <FaClock className="text-xl text-brand-lime" />
                  <h3 className="text-lg sm:text-xl font-bold text-white">Intensivo Lunes a Viernes</h3>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-0.5 bg-brand-lime/10 text-brand-lime rounded-full border border-brand-lime/30">
                  40 horas / mes
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300">2 horas diarias de clase interactiva:</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-slate-400 block text-[11px]">Mañana:</span>
                  <strong className="text-white text-xs">6:00 AM - 8:00 AM</strong>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-slate-400 block text-[11px]">Intermedio:</span>
                  <strong className="text-white text-xs">8:30 AM - 10:30 AM</strong>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-slate-400 block text-[11px]">Noche:</span>
                  <strong className="text-white text-xs">6:30 PM - 8:30 PM</strong>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#100c2a] border border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <FaCalendarAlt className="text-xl text-brand-blue" />
                  <h3 className="text-lg sm:text-xl font-bold text-white">Sabatino Concentrado</h3>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-0.5 bg-brand-blue/10 text-brand-blue rounded-full border border-brand-blue/30">
                  20 horas / mes
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300">Sesión única de fin de semana:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-slate-400 block text-[11px]">Sábados Mañana:</span>
                  <strong className="text-white text-xs">8:00 AM - 1:00 PM</strong>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-slate-400 block text-[11px]">Sábados Tarde:</span>
                  <strong className="text-white text-xs">1:30 PM - 6:30 PM</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: PRECIOS Y MEDIOS DE PAGO EN COP ================= */}
      <section id="precios" className="relative z-10 py-16 sm:py-20 px-4 sm:px-6 border-t border-white/10 bg-[#0a0720]">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-[11px] font-mono uppercase tracking-widest text-brand-lime bg-brand-lime/10 px-3 py-1 rounded-full border border-brand-lime/20">
              Tarifas Transparentes en COP
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase text-white">
              Inversión Mensual & Descuentos
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Precios oficiales sin costos ocultos. Todos los programas incluyen acceso a la plataforma digital y material de estudio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-6 rounded-2xl bg-[#100c2a] border border-white/10 hover:border-brand-lime transition-all space-y-5 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase text-slate-400">Programa Sabatino</span>
                <h3 className="text-xl font-bold text-white mt-0.5">Sabatino Standard</h3>
                <div className="my-4">
                  <span className="text-3xl font-display text-white">$520.000</span>
                  <span className="text-slate-400 text-xs ml-1.5">COP / módulo</span>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-brand-lime text-xs" /> 20 horas académicas al mes</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-brand-lime text-xs" /> Plataforma interactiva 24/7</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-brand-lime text-xs" /> Clubes de conversación virtuales</li>
                </ul>
              </div>
              <button onClick={onNavigateToChat} className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition-colors">
                Consultar con Asistente
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-[#130f35] border-2 border-brand-lime shadow-xl shadow-brand-lime/10 space-y-5 flex flex-col justify-between relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-brand-lime text-brand-dark rounded-full text-[10px] font-bold uppercase tracking-widest">
                Más Popular
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase text-brand-lime">Programa Intensivo</span>
                <h3 className="text-xl font-bold text-white mt-0.5">Intensivo L-V</h3>
                <div className="my-4">
                  <span className="text-3xl font-display text-white">$650.000</span>
                  <span className="text-slate-400 text-xs ml-1.5">COP / módulo</span>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-brand-lime text-xs" /> 40 horas al mes (2h diarias)</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-brand-lime text-xs" /> 10% dcto pronto pago ($585.000 COP)</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-brand-lime text-xs" /> Simulacros internacionales</li>
                </ul>
              </div>
              <button onClick={onNavigateToChat} className="w-full py-2.5 rounded-xl bg-brand-lime hover:bg-[#b0f55c] text-brand-dark font-bold text-xs uppercase tracking-wider transition-transform hover:scale-105">
                Iniciar Asesoría IA
              </button>
            </div>

            <div className="p-6 rounded-2xl bg-[#100c2a] border border-white/10 hover:border-brand-purple transition-all space-y-5 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase text-slate-400">Exámenes Internacionales</span>
                <h3 className="text-xl font-bold text-white mt-0.5">Prep IELTS / TOEFL</h3>
                <div className="my-4">
                  <span className="text-3xl font-display text-white">$780.000</span>
                  <span className="text-slate-400 text-xs ml-1.5">COP / módulo</span>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-brand-lime text-xs" /> 40 horas especializadas técnicas examen</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-brand-lime text-xs" /> Simulacros oficiales con retroalimentación</li>
                  <li className="flex items-center gap-2"><FaCheckCircle className="text-brand-lime text-xs" /> Material Cambridge/ETS incluido</li>
                </ul>
              </div>
              <button onClick={onNavigateToChat} className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs uppercase tracking-wider transition-colors">
                Consultar con Asistente
              </button>
            </div>
          </div>

          {/* Payment methods pill banner */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5">
              <FaCreditCard className="text-lg text-brand-lime" />
              <span><strong>Medios de Pago:</strong> PSE, Bancolombia, Nequi, Tarjetas Débito/Crédito y Financiación Directa.</span>
            </div>
            <span className="text-slate-400 font-mono text-[11px]">Matrícula anual: $120.000 COP</span>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: PLACEMENT TEST / INSCRIPCIÓN ================= */}
      <section id="placement-test" className="relative z-10 py-16 sm:py-20 px-4 sm:px-6 border-t border-white/10 bg-[#070515]">
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-[#120d36] to-[#18114a] border border-brand-lime/30 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center relative z-10">
            <div className="space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-brand-lime bg-brand-lime/10 px-3 py-1 rounded-full border border-brand-lime/30">
                100% Gratuita • 25 Minutos
              </span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl uppercase text-white leading-tight">
                Prueba de Clasificación de Nivel
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Descubre tu nivel exacto según el marco MCER (A1 a C1). Evaluación gramatical, de comprensión auditiva y entrevista diagnóstica.
              </p>
              <div className="space-y-1.5 text-xs text-slate-300">
                <div className="flex items-center gap-2"><FaCheckCircle className="text-brand-lime text-xs" /> Sin costo de presentación</div>
                <div className="flex items-center gap-2"><FaCheckCircle className="text-brand-lime text-xs" /> Resultados inmediatos y recomendación de curso</div>
                <div className="flex items-center gap-2"><FaCheckCircle className="text-brand-lime text-xs" /> Asesoría directa con nuestro Asistente Inteligente</div>
              </div>
            </div>

            <div className="bg-[#0c0926]/90 p-5 rounded-2xl border border-white/10">
              {formSubmitted ? (
                <div className="text-center py-6 space-y-2.5">
                  <div className="w-10 h-10 rounded-full bg-brand-lime/20 text-brand-lime flex items-center justify-center mx-auto text-lg">
                    <FaCheckCircle />
                  </div>
                  <h3 className="text-base font-bold text-white">¡Solicitud Recibida!</h3>
                  <p className="text-xs text-slate-300">
                    Te enviaremos el enlace para tu prueba de clasificación a tu correo electrónico. Puedes consultar detalles con nuestro Asistente IA.
                  </p>
                  <button onClick={onNavigateToChat} className="mt-3 px-5 py-2 rounded-full bg-brand-lime text-brand-dark font-bold text-xs uppercase">
                    Abrir Asistente IA
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <h3 className="text-sm font-bold text-white mb-1">Solicita tu Prueba Online</h3>
                  <div>
                    <label className="text-[10px] text-slate-400 block mb-1">Nombre Completo</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Laura Gómez"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-lime"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[10px] text-slate-400 block mb-1">Teléfono / WhatsApp</label>
                      <input
                        type="tel"
                        required
                        placeholder="Ej. 310 123 4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-lime"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-slate-400 block mb-1">Idioma de Interés</label>
                      <select
                        value={formData.language}
                        onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                        className="w-full px-3 py-1.5 rounded-xl bg-[#141038] border border-white/10 text-xs text-white focus:outline-none focus:border-brand-lime"
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
                    <label className="text-[10px] text-slate-400 block mb-1">Correo Electrónico</label>
                    <input
                      type="email"
                      required
                      placeholder="Ej. laura@correo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-brand-lime"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-brand-lime hover:bg-[#b0f55c] text-brand-dark font-bold text-xs uppercase tracking-wide transition-all shadow-md mt-1"
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
      <footer className="py-10 px-4 sm:px-6 border-t border-white/10 bg-[#050310] text-xs text-slate-400">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
          <a 
            href="#inicio" 
            onClick={scrollToHome}
            className="hover:opacity-90 transition-opacity"
            title="Vanguard Academia de Idiomas - Ir al Inicio"
          >
            <VanguardLogo size="sm" subtitle="Colombia 2026" />
          </a>

          <div className="flex items-center gap-5">
            <a href="#programas" onClick={(e) => scrollToSection(e, 'programas')} className="hover:text-white transition-colors">Programas</a>
            <a href="#precios" onClick={(e) => scrollToSection(e, 'precios')} className="hover:text-white transition-colors">Tarifas COP</a>
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

      {/* Floating Back to Top / Home Arrow Button */}
      <button
        onClick={scrollToHome}
        aria-label="Volver al inicio"
        className={`fixed bottom-5 right-5 z-40 w-10 h-10 rounded-xl bg-[#0c0926]/90 border border-brand-lime/40 text-brand-lime shadow-lg shadow-brand-lime/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-brand-lime hover:text-brand-dark active:scale-95 group ${
          showBackToTop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
        title="Ir al inicio"
      >
        <FaArrowUp className="text-xs group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </div>
  );
}
