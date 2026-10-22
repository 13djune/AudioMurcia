import React, { useState } from 'react';

function Header({ isLargeFont, onToggleFontSize }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-white/98 backdrop-blur-md border-b border-[#FED7AA] shadow-sm">
      {/* Barra superior de horario y teléfono directo */}
      <div className="bg-[#7C2D12] text-white py-1.5 px-4 text-xs sm:text-sm">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F97316] animate-pulse"></span>
            <span className="font-medium text-white/95">
              Gabinete en Las Torres de Cotillas • <strong className="text-[#FED7AA]">Lunes a Jueves</strong> (Viernes cerrado)
            </span>
          </div>

          <div className="flex items-center gap-4">
            {/* Botón para agrandar letra pensado para personas mayores */}
            <button
              type="button"
              onClick={onToggleFontSize}
              className={`cursor-pointer text-xs px-3 py-1 rounded-full font-bold transition-all flex items-center gap-1.5 shadow-2xs ${
                isLargeFont 
                  ? 'bg-[#EA580C] text-white ring-2 ring-white/60' 
                  : 'bg-[#9A3412] hover:bg-[#C2410C] text-white'
              }`}
              aria-label={isLargeFont ? "Reducir a tamaño de letra normal" : "Aumentar tamaño de letra para facilitar lectura"}
              title="Ajustar tamaño de letra para facilitar lectura"
            >
              <span className="font-extrabold text-sm leading-none">A{isLargeFont ? '−' : '+'}</span>
              <span>{isLargeFont ? 'Letra Normal' : 'Letra Grande'}</span>
            </button>

            {/* Enlace directo para llamar con un toque */}
            <a
              href="tel:+34968022960"
              className="cursor-pointer flex items-center gap-1.5 font-bold text-white hover:text-[#FED7AA] transition-colors"
              aria-label="Llamar directamente al 968 02 29 60"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>968 02 29 60</span>
            </a>
          </div>
        </div>
      </div>

      {/* Barra de Navegación Principal */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* Logotipo que sube al inicio sin recargar */}
        <button 
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer flex items-center gap-3 text-[#431407] focus:outline-none focus:ring-2 focus:ring-[#EA580C] rounded-lg p-1 text-left"
          aria-label="AudioMurcia - Subir al inicio de la página"
        >
          <span className="w-10 h-10 rounded-full bg-[#FFF7ED] border border-[#FED7AA] flex items-center justify-center text-[#EA580C] shrink-0 shadow-2xs" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <path d="M6 8.5a6 6 0 0 1 12 0c0 7-6 7.5-6 11.5" />
              <path d="M10 8.5a2 2 0 1 1 4 0c0 2.5-2 3.5-2 5.5" />
              <circle cx="12" cy="14" r="0.75" fill="currentColor" />
            </svg>
          </span>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-[#431407] leading-none">
              Audio<span className="text-[#EA580C]">murcia</span>
            </span>
            <span className="text-[11px] font-semibold text-[#7C2D12] tracking-wide mt-0.5">Centro Auditivo</span>
          </div>
        </button>

        {/* Navegación para ordenador (anclajes simples que no redirigen) */}
        <nav aria-label="Navegación principal" className="hidden lg:flex items-center space-x-7 text-base font-semibold text-[#431407]">
          <button 
            type="button"
            onClick={() => scrollToSection('servicios')}
            className="cursor-pointer hover:text-[#EA580C] hover:underline underline-offset-4 transition-colors"
          >
            Servicios
          </button>
          <button 
            type="button"
            onClick={() => scrollToSection('primera-visita')}
            className="cursor-pointer hover:text-[#EA580C] hover:underline underline-offset-4 transition-colors"
          >
            Tu primera visita
          </button>
          <button 
            type="button"
            onClick={() => scrollToSection('audifonos')}
            className="cursor-pointer hover:text-[#EA580C] hover:underline underline-offset-4 transition-colors"
          >
            Audífonos Phonak
          </button>
          <button 
            type="button"
            onClick={() => scrollToSection('equipo')}
            className="cursor-pointer hover:text-[#EA580C] hover:underline underline-offset-4 transition-colors"
          >
            Nuestro equipo
          </button>
          <button 
            type="button"
            onClick={() => scrollToSection('contacto')}
            className="cursor-pointer hover:text-[#EA580C] hover:underline underline-offset-4 transition-colors"
          >
            Dónde estamos
          </button>
        </nav>

        {/* Botones de acción en la cabecera */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:+34968022960"
            className="cursor-pointer flex items-center gap-2 bg-[#FFF7ED] hover:bg-[#FFEDD5] text-[#7C2D12] border border-[#FED7AA] font-bold text-sm px-4 py-2.5 rounded-full transition-all shadow-2xs"
            aria-label="Llamar al gabinete por teléfono"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 text-[#EA580C]" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>Llamar</span>
          </a>

          {/* Botón claro que baja directamente al formulario de cita */}
          <button
            type="button"
            onClick={() => scrollToSection('pedir-cita')}
            className="cursor-pointer bg-[#EA580C] hover:bg-[#C2410C] text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EA580C]"
            aria-label="Ir a pedir cita previa"
          >
            Pedir cita previa
          </button>
        </div>

        {/* Botón de Menú Móvil */}
        <button
          type="button"
          className="cursor-pointer lg:hidden p-2.5 rounded-xl text-[#7C2D12] bg-[#FFF7ED] border border-[#FED7AA] hover:bg-[#FFEDD5] focus:outline-none focus:ring-2 focus:ring-[#EA580C]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Menú desplegable para móviles */}
      {menuOpen && (
        <div className="lg:hidden px-5 pt-3 pb-6 bg-white border-b border-[#FED7AA] space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2 text-base font-bold text-[#431407]">
            <button
              type="button"
              className="cursor-pointer text-left py-2.5 px-3 rounded-lg hover:bg-[#FFF7ED] transition-colors"
              onClick={() => scrollToSection('servicios')}
            >
              • Servicios audiológicos
            </button>
            <button
              type="button"
              className="cursor-pointer text-left py-2.5 px-3 rounded-lg hover:bg-[#FFF7ED] transition-colors"
              onClick={() => scrollToSection('primera-visita')}
            >
              • Tu primera visita
            </button>
            <button
              type="button"
              className="cursor-pointer text-left py-2.5 px-3 rounded-lg hover:bg-[#FFF7ED] transition-colors"
              onClick={() => scrollToSection('audifonos')}
            >
              • Audífonos Phonak
            </button>
            <button
              type="button"
              className="cursor-pointer text-left py-2.5 px-3 rounded-lg hover:bg-[#FFF7ED] transition-colors"
              onClick={() => scrollToSection('equipo')}
            >
              • Nuestro equipo profesional
            </button>
            <button
              type="button"
              className="cursor-pointer text-left py-2.5 px-3 rounded-lg hover:bg-[#FFF7ED] transition-colors"
              onClick={() => scrollToSection('contacto')}
            >
              • Dónde estamos y horario
            </button>
          </nav>

          <div className="pt-3 border-t border-[#FED7AA] space-y-2.5">
            <a
              href="tel:+34968022960"
              className="cursor-pointer w-full flex items-center justify-center gap-2 bg-[#FFF7ED] text-[#7C2D12] border-2 border-[#EA580C] py-3 rounded-xl font-bold text-base"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 text-[#EA580C]">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Llamar al 968 02 29 60</span>
            </a>

            <button
              type="button"
              onClick={() => scrollToSection('pedir-cita')}
              className="cursor-pointer w-full bg-[#EA580C] text-white py-3 rounded-xl font-bold text-base shadow hover:bg-[#C2410C]"
            >
              Pedir cita previa gratuita
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
