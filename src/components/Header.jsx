import React, { useState, useEffect } from 'react';
import { IconPhone, IconMobile, IconCalendar, IconRedReal } from './Icons';

function Header({ isLargeFont, onToggleFontSize }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Cerrar menú con la tecla Escape para mejorar accesibilidad por teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-white border-b-2 border-slate-300 shadow-sm">
      {/* Barra superior con botones de accesibilidad y enlaces amplios */}
      <div className="bg-[#0F2942] text-white py-2 px-3 sm:px-6 lg:px-8 text-xs sm:text-sm font-semibold">
        <div className="w-full flex items-center justify-between gap-3">
          {/* Horario y Gabinete */}
          <div className="flex items-center gap-2">
            <IconCalendar className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
            <span className="font-semibold text-white truncate text-xs sm:text-sm">
              Las Torres de Cotillas • <strong className="text-amber-300 font-black">Lunes a Jueves</strong> <span className="text-amber-200">(Viernes cerrado)</span>
            </span>
          </div>

          {/* Opciones auxiliares: Letra grande y enlace Real con áreas de toque amplias (mínimo 44px) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Enlace directo a la Red R.E.A.L. */}
            <a
              href="https://audiologiareal.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hidden sm:inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-white hover:text-amber-300 transition-colors px-3 py-2 min-h-[44px] rounded-lg hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
              title="Visitar web oficial de Audiología Real"
            >
              <IconRedReal className="w-4 h-4 text-amber-300 shrink-0" aria-hidden="true" />
              <span>Red R.E.A.L.</span>
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-amber-300" aria-hidden="true">
                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" />
              </svg>
            </a>

            {/* Botón para alternar tamaño de letra: Área táctil amplia y fácil de pulsar */}
            <button
              type="button"
              onClick={onToggleFontSize}
              className={`cursor-pointer min-h-[44px] px-3.5 sm:px-4 py-2 rounded-full font-black text-xs sm:text-sm transition-all flex items-center gap-2 shadow-xs active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 ${
                isLargeFont 
                  ? 'bg-[#C2410C] text-white ring-2 ring-white' 
                  : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-600'
              }`}
              aria-label={isLargeFont ? "Reducir tamaño de letra al tamaño normal" : "Aumentar tamaño de letra para facilitar lectura"}
              title="Ajustar tamaño de letra para facilitar lectura"
            >
              <span className="font-black text-sm sm:text-base leading-none">A{isLargeFont ? '−' : '+'}</span>
              <span>{isLargeFont ? 'Normal' : 'Letra Grande'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Barra de Navegación Principal */}
      <div className="w-full px-3 sm:px-6 lg:px-8 py-3.5 sm:py-4 flex justify-between items-center gap-4">
        {/* Logotipo nítido con área táctil cómoda */}
        <button 
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer flex items-center gap-3 text-[#0F2942] rounded-2xl p-2 min-h-[52px] text-left shrink-0 hover:bg-slate-50 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2942]"
          aria-label="AudioMurcia - Subir al inicio de la página"
        >
          <span className="w-12 h-12 rounded-2xl bg-[#0F2942] flex items-center justify-center text-amber-400 shrink-0 shadow-sm" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
              <path d="M6 8.5a6 6 0 0 1 12 0c0 7-6 7.5-6 11.5" />
              <path d="M10 8.5a2 2 0 1 1 4 0c0 2.5-2 3.5-2 5.5" />
              <circle cx="12" cy="14" r="0.75" fill="currentColor" />
            </svg>
          </span>
          <div className="flex flex-col">
            <span className="text-2xl sm:text-3xl font-black tracking-tight text-[#0F2942] leading-none">
              Audio<span className="text-[#C2410C]">murcia</span>
            </span>
            <span className="text-xs font-black text-slate-800 tracking-wide mt-1">Centro Auditivo</span>
          </div>
        </button>

        {/* Navegación para ordenador y pantallas táctiles grandes: Enlaces de al menos 48px de alto */}
        <nav aria-label="Navegación principal" className="hidden lg:flex items-center gap-1.5 xl:gap-2.5 text-base font-black text-[#0F2942]">
          <button 
            type="button"
            onClick={() => scrollToSection('servicios')}
            className="cursor-pointer min-h-[50px] px-4 py-3 rounded-2xl hover:bg-slate-100 hover:text-[#C2410C] active:bg-slate-200 transition-colors flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2942]"
          >
            Servicios
          </button>
          <button 
            type="button"
            onClick={() => scrollToSection('primera-visita')}
            className="cursor-pointer min-h-[50px] px-4 py-3 rounded-2xl hover:bg-slate-100 hover:text-[#C2410C] active:bg-slate-200 transition-colors flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2942]"
          >
            Tu primera visita
          </button>
          <button 
            type="button"
            onClick={() => scrollToSection('audifonos')}
            className="cursor-pointer min-h-[50px] px-4 py-3 rounded-2xl hover:bg-slate-100 hover:text-[#C2410C] active:bg-slate-200 transition-colors flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2942]"
          >
            Audífonos Phonak
          </button>
          <button 
            type="button"
            onClick={() => scrollToSection('equipo')}
            className="cursor-pointer min-h-[50px] px-4 py-3 rounded-2xl hover:bg-slate-100 hover:text-[#C2410C] active:bg-slate-200 transition-colors flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2942]"
          >
            Equipo
          </button>
          <button 
            type="button"
            onClick={() => scrollToSection('contacto')}
            className="cursor-pointer min-h-[50px] px-4 py-3 rounded-2xl hover:bg-slate-100 hover:text-[#C2410C] active:bg-slate-200 transition-colors flex items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2942]"
          >
            Contacto y Horario
          </button>
        </nav>

        {/* Botones de LLAMADA DIRECTA: Grandes y cómodos para tocar sin esfuerzo */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          {/* Teléfono Fijo */}
          <a
            href="tel:+34968022960"
            className="cursor-pointer min-h-[50px] inline-flex items-center gap-2 bg-[#0F2942] hover:bg-slate-800 text-white font-black text-sm sm:text-base px-4 sm:px-5 py-3 rounded-2xl transition-all shadow-xs hover:shadow active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2942]"
            aria-label="Llamar al teléfono fijo 968 02 29 60"
            title="Llamar al teléfono fijo"
          >
            <IconPhone className="w-5 h-5 text-amber-300" aria-hidden="true" />
            <span>968 02 29 60</span>
          </a>

          {/* Teléfono Móvil / WhatsApp - Contraste alto con fondo esmeralda profundo #065F46 */}
          <a
            href="https://wa.me/34611085841"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer min-h-[50px] inline-flex items-center gap-2 bg-[#065F46] hover:bg-[#044E39] text-white font-black text-sm sm:text-base px-4 sm:px-5 py-3 rounded-2xl transition-all shadow-xs hover:shadow active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#065F46]"
            aria-label="Escribir o llamar por WhatsApp al 611 08 58 41"
            title="WhatsApp o móvil 611 08 58 41"
          >
            <IconMobile className="w-5 h-5 text-white" aria-hidden="true" />
            <span>611 08 58 41</span>
          </a>
        </div>

        {/* Botón de Menú Móvil con área táctil extra amplia (mínimo 52x52px) */}
        <button
          type="button"
          className="cursor-pointer lg:hidden min-w-[52px] min-h-[52px] p-3 rounded-2xl text-[#0F2942] bg-slate-50 hover:bg-slate-100 active:bg-slate-200 border-2 border-slate-300 flex items-center justify-center transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2942]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
        >
          {menuOpen ? (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Menú desplegable para móviles: Tarjetas táctiles grandes (mínimo 56px de altura) con clara separación */}
      {menuOpen && (
        <div className="lg:hidden px-4 sm:px-6 pt-3 pb-7 bg-white border-b-2 border-slate-300 shadow-2xl max-h-[85vh] overflow-y-auto">
          <p className="text-xs font-black text-slate-600 uppercase tracking-wider mb-3 px-1">
            Secciones principales:
          </p>
          <nav className="flex flex-col space-y-2.5">
            <button
              type="button"
              className="cursor-pointer min-h-[56px] w-full flex items-center justify-between px-4 py-3.5 rounded-2xl bg-slate-50 border-2 border-slate-300 text-left text-base sm:text-lg font-black text-[#0F2942] hover:bg-white hover:border-[#0F2942] active:bg-amber-100 active:scale-[0.99] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2942]"
              onClick={() => scrollToSection('servicios')}
            >
              <span>Servicios audiológicos</span>
              <span className="w-8 h-8 rounded-xl bg-white border border-slate-300 flex items-center justify-center text-[#C2410C] font-black shrink-0 ml-2" aria-hidden="true">
                ›
              </span>
            </button>

            <button
              type="button"
              className="cursor-pointer min-h-[56px] w-full flex items-center justify-between px-4 py-3.5 rounded-2xl bg-slate-50 border-2 border-slate-300 text-left text-base sm:text-lg font-black text-[#0F2942] hover:bg-white hover:border-[#0F2942] active:bg-amber-100 active:scale-[0.99] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2942]"
              onClick={() => scrollToSection('primera-visita')}
            >
              <span>Tu primera visita</span>
              <span className="w-8 h-8 rounded-xl bg-white border border-slate-300 flex items-center justify-center text-[#C2410C] font-black shrink-0 ml-2" aria-hidden="true">
                ›
              </span>
            </button>

            <button
              type="button"
              className="cursor-pointer min-h-[56px] w-full flex items-center justify-between px-4 py-3.5 rounded-2xl bg-slate-50 border-2 border-slate-300 text-left text-base sm:text-lg font-black text-[#0F2942] hover:bg-white hover:border-[#0F2942] active:bg-amber-100 active:scale-[0.99] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2942]"
              onClick={() => scrollToSection('audifonos')}
            >
              <span>Audífonos Phonak</span>
              <span className="w-8 h-8 rounded-xl bg-white border border-slate-300 flex items-center justify-center text-[#C2410C] font-black shrink-0 ml-2" aria-hidden="true">
                ›
              </span>
            </button>

            <button
              type="button"
              className="cursor-pointer min-h-[56px] w-full flex items-center justify-between px-4 py-3.5 rounded-2xl bg-slate-50 border-2 border-slate-300 text-left text-base sm:text-lg font-black text-[#0F2942] hover:bg-white hover:border-[#0F2942] active:bg-amber-100 active:scale-[0.99] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2942]"
              onClick={() => scrollToSection('equipo')}
            >
              <span>Nuestro equipo profesional</span>
              <span className="w-8 h-8 rounded-xl bg-white border border-slate-300 flex items-center justify-center text-[#C2410C] font-black shrink-0 ml-2" aria-hidden="true">
                ›
              </span>
            </button>

            <button
              type="button"
              className="cursor-pointer min-h-[56px] w-full flex items-center justify-between px-4 py-3.5 rounded-2xl bg-slate-50 border-2 border-slate-300 text-left text-base sm:text-lg font-black text-[#0F2942] hover:bg-white hover:border-[#0F2942] active:bg-amber-100 active:scale-[0.99] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2942]"
              onClick={() => scrollToSection('contacto')}
            >
              <span>Dónde estamos y horario</span>
              <span className="w-8 h-8 rounded-xl bg-white border border-slate-300 flex items-center justify-center text-[#C2410C] font-black shrink-0 ml-2" aria-hidden="true">
                ›
              </span>
            </button>

            <a
              href="https://audiologiareal.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer min-h-[56px] w-full flex items-center justify-between px-4 py-3.5 rounded-2xl bg-[#19303B] text-white border-2 border-[#ADD4BB]/50 text-left text-base sm:text-lg font-black hover:bg-[#12232b] active:scale-[0.99] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ADD4BB]"
            >
              <div className="flex items-center gap-2">
                <IconRedReal className="w-5 h-5 text-[#ADD4BB] shrink-0" aria-hidden="true" />
                <span>Red R.E.A.L. (audiologiareal.com)</span>
              </div>
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-[#ADD4BB] shrink-0" aria-hidden="true">
                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" />
              </svg>
            </a>
          </nav>

          {/* Botones de llamada táctiles de gran tamaño (60px de altura) con máximo contraste */}
          <div className="pt-5 mt-5 border-t-2 border-slate-200 space-y-3">
            <p className="text-xs sm:text-sm font-black text-slate-800 uppercase tracking-wider text-center">
              Llámanos para tu cita previa:
            </p>
            <a
              href="tel:+34968022960"
              className="cursor-pointer min-h-[58px] w-full flex items-center justify-center gap-3 bg-[#0F2942] hover:bg-slate-900 active:bg-slate-950 text-white py-4 px-5 rounded-2xl font-black text-base sm:text-lg shadow-md active:scale-[0.99] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F2942]"
            >
              <IconPhone className="w-6 h-6 text-amber-300 shrink-0" aria-hidden="true" />
              <span>Llamar al fijo: 968 02 29 60</span>
            </a>

            <a
              href="https://wa.me/34611085841"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer min-h-[58px] w-full flex items-center justify-center gap-3 bg-[#065F46] hover:bg-[#044E39] active:bg-[#033b2b] text-white py-4 px-5 rounded-2xl font-black text-base sm:text-lg shadow-md active:scale-[0.99] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#065F46]"
            >
              <IconMobile className="w-6 h-6 text-white shrink-0" aria-hidden="true" />
              <span>Móvil / WhatsApp: 611 08 58 41</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
