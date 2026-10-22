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
    <header className="sticky top-0 left-0 w-full z-50 bg-white border-b border-slate-200 shadow-xs">
      {/* Barra superior despejada a todo lo ancho de la pantalla */}
      <div className="bg-[#0F2942] text-white py-2 px-3 sm:px-6 lg:px-8 text-xs sm:text-sm">
        <div className="w-full flex items-center justify-between gap-3">
          {/* Horario y Gabinete */}
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EA580C] animate-pulse shrink-0"></span>
            <span className="font-medium text-slate-100 truncate">
              Las Torres de Cotillas • <strong className="text-amber-300">Lunes a Jueves</strong> (Viernes cerrado)
            </span>
          </div>

          {/* Opciones auxiliares: Letra grande y enlace Real */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Enlace directo a la Red R.E.A.L. */}
            <a
              href="https://audiologiareal.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-slate-200 hover:text-amber-300 transition-colors px-2 py-1 rounded hover:bg-slate-800"
              title="Visitar web oficial de Audiología Real"
            >
              <span>Red R.E.A.L.</span>
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-amber-400">
                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" />
              </svg>
            </a>

            {/* Botón para agrandar letra con área de clic cómoda */}
            <button
              type="button"
              onClick={onToggleFontSize}
              className={`cursor-pointer text-xs px-3 py-1.5 rounded-full font-bold transition-all flex items-center gap-1.5 shadow-2xs ${
                isLargeFont 
                  ? 'bg-[#EA580C] text-white ring-2 ring-white/60' 
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700'
              }`}
              aria-label={isLargeFont ? "Reducir tamaño de letra" : "Aumentar tamaño de letra"}
              title="Ajustar tamaño de letra para facilitar lectura"
            >
              <span className="font-black text-sm leading-none">A{isLargeFont ? '−' : '+'}</span>
              <span>{isLargeFont ? 'Normal' : 'Letra Grande'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Barra de Navegación Principal: A todo lo ancho de los laterales con margen contenido */}
      <div className="w-full px-3 sm:px-6 lg:px-8 py-3.5 sm:py-4 flex justify-between items-center gap-4">
        {/* Logotipo nítido con buen margen */}
        <button 
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="cursor-pointer flex items-center gap-3 text-[#0F2942] focus:outline-none focus:ring-2 focus:ring-[#0F2942] rounded-xl p-1 text-left shrink-0"
          aria-label="AudioMurcia - Subir al inicio de la página"
        >
          <span className="w-11 h-11 rounded-2xl bg-[#0F2942] flex items-center justify-center text-amber-400 shrink-0 shadow-sm" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <path d="M6 8.5a6 6 0 0 1 12 0c0 7-6 7.5-6 11.5" />
              <path d="M10 8.5a2 2 0 1 1 4 0c0 2.5-2 3.5-2 5.5" />
              <circle cx="12" cy="14" r="0.75" fill="currentColor" />
            </svg>
          </span>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tight text-[#0F2942] leading-none">
              Audio<span className="text-[#EA580C]">murcia</span>
            </span>
            <span className="text-xs font-bold text-slate-500 tracking-wide mt-1">Centro Auditivo</span>
          </div>
        </button>

        {/* Navegación para ordenador: Enlaces con padding generoso, legibles y fáciles de pulsar */}
        <nav aria-label="Navegación principal" className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-base font-bold text-[#0F2942]">
          <button 
            type="button"
            onClick={() => scrollToSection('servicios')}
            className="cursor-pointer px-3 py-2 rounded-xl hover:bg-slate-100 hover:text-[#EA580C] transition-colors"
          >
            Servicios
          </button>
          <button 
            type="button"
            onClick={() => scrollToSection('primera-visita')}
            className="cursor-pointer px-3 py-2 rounded-xl hover:bg-slate-100 hover:text-[#EA580C] transition-colors"
          >
            Tu primera visita
          </button>
          <button 
            type="button"
            onClick={() => scrollToSection('audifonos')}
            className="cursor-pointer px-3 py-2 rounded-xl hover:bg-slate-100 hover:text-[#EA580C] transition-colors"
          >
            Audífonos Phonak
          </button>
          <button 
            type="button"
            onClick={() => scrollToSection('equipo')}
            className="cursor-pointer px-3 py-2 rounded-xl hover:bg-slate-100 hover:text-[#EA580C] transition-colors"
          >
            Equipo
          </button>
          <button 
            type="button"
            onClick={() => scrollToSection('contacto')}
            className="cursor-pointer px-3 py-2 rounded-xl hover:bg-slate-100 hover:text-[#EA580C] transition-colors"
          >
            Contacto y Horario
          </button>
        </nav>

        {/* Botones de LLAMADA DIRECTA: Grandes, claros y cómodos para hacer clic */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          {/* Teléfono Fijo */}
          <a
            href="tel:+34968022960"
            className="cursor-pointer inline-flex items-center gap-2 bg-[#0F2942] hover:bg-slate-800 text-white font-black text-sm px-4 py-2.5 rounded-full transition-all shadow-xs hover:shadow focus:outline-none focus:ring-2 focus:ring-[#0F2942]"
            aria-label="Llamar al teléfono fijo 968 02 29 60"
            title="Llamar al teléfono fijo"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 text-amber-300" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>968 02 29 60</span>
          </a>

          {/* Teléfono Móvil / WhatsApp */}
          <a
            href="https://wa.me/34611085841"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-4 py-2.5 rounded-full transition-all shadow-xs hover:shadow focus:outline-none focus:ring-2 focus:ring-emerald-600"
            aria-label="Escribir o llamar por WhatsApp al 611 08 58 41"
            title="WhatsApp o móvil 611 08 58 41"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 text-white" aria-hidden="true">
              <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
              <path d="M12 18h.01" />
            </svg>
            <span>611 08 58 41</span>
          </a>
        </div>

        {/* Botón de Menú Móvil con área táctil cómoda */}
        <button
          type="button"
          className="cursor-pointer lg:hidden p-3 rounded-2xl text-[#0F2942] bg-slate-100 hover:bg-slate-200 border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0F2942]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú de navegación"}
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

      {/* Menú desplegable para móviles: Muy espacioso y fácil de leer y pulsar */}
      {menuOpen && (
        <div className="lg:hidden px-4 sm:px-6 lg:px-8 pt-3 pb-6 bg-white border-b border-slate-200 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-1 text-lg font-bold text-[#0F2942]">
            <button
              type="button"
              className="cursor-pointer text-left py-3 px-4 rounded-xl hover:bg-slate-100 transition-colors"
              onClick={() => scrollToSection('servicios')}
            >
              Servicios audiológicos
            </button>
            <button
              type="button"
              className="cursor-pointer text-left py-3 px-4 rounded-xl hover:bg-slate-100 transition-colors"
              onClick={() => scrollToSection('primera-visita')}
            >
              Tu primera visita
            </button>
            <button
              type="button"
              className="cursor-pointer text-left py-3 px-4 rounded-xl hover:bg-slate-100 transition-colors"
              onClick={() => scrollToSection('audifonos')}
            >
              Audífonos Phonak
            </button>
            <button
              type="button"
              className="cursor-pointer text-left py-3 px-4 rounded-xl hover:bg-slate-100 transition-colors"
              onClick={() => scrollToSection('equipo')}
            >
              Nuestro equipo profesional
            </button>
            <button
              type="button"
              className="cursor-pointer text-left py-3 px-4 rounded-xl hover:bg-slate-100 transition-colors"
              onClick={() => scrollToSection('contacto')}
            >
              Dónde estamos y horario
            </button>
            <a
              href="https://audiologiareal.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-left py-3 px-4 rounded-xl hover:bg-slate-100 transition-colors text-slate-700 font-bold flex items-center justify-between"
            >
              <span>Red R.E.A.L. (audiologiareal.com)</span>
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-amber-500">
                <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" />
              </svg>
            </a>
          </nav>

          {/* Botones de llamada gigantes para móvil */}
          <div className="pt-3 border-t border-slate-200 space-y-2.5">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-wider text-center">
              Llámanos directamente para tu cita previa:
            </p>
            <a
              href="tel:+34968022960"
              className="cursor-pointer w-full flex items-center justify-center gap-2.5 bg-[#0F2942] text-white py-3.5 px-4 rounded-2xl font-black text-base shadow"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 text-amber-300">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Llamar al fijo: 968 02 29 60</span>
            </a>

            <a
              href="tel:+34611085841"
              className="cursor-pointer w-full flex items-center justify-center gap-2.5 bg-emerald-600 text-white py-3.5 px-4 rounded-2xl font-black text-base shadow"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                <path d="M12 18h.01" />
              </svg>
              <span>Móvil / WhatsApp: 611 08 58 41</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
