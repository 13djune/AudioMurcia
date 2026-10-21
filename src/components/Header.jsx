import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header({ onOpenBooking, isLargeFont, onToggleFontSize }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBooking = () => {
    if (onOpenBooking) {
      onOpenBooking();
    } else {
      const el = document.getElementById('contacto');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = '/#contacto';
      }
    }
  };

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-white/98 backdrop-blur-md border-b border-[#D5E7DC] shadow-sm">
      {/* Top emergency / phone banner for seniors */}
      <div className="bg-[#0E382C] text-white py-1.5 px-4 text-xs sm:text-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B87319] animate-pulse"></span>
            <span className="font-medium text-white/90">Gabinete Auditivo en Las Torres de Cotillas (Murcia)</span>
          </div>

          <div className="flex items-center gap-4">
            {/* Font size booster button for seniors */}
            <button
              type="button"
              onClick={onToggleFontSize}
              className={`cursor-pointer text-xs px-3 py-1 rounded-full font-bold transition-all flex items-center gap-1.5 shadow-2xs ${
                isLargeFont 
                  ? 'bg-[#B87319] text-white ring-2 ring-white/60' 
                  : 'bg-[#195443] hover:bg-[#206954] text-white'
              }`}
              aria-label={isLargeFont ? "Reducir a tamaño de letra normal" : "Aumentar tamaño de letra para facilitar lectura"}
              title="Ajustar tamaño de letra para facilitar lectura"
            >
              <span className="font-extrabold text-sm leading-none">A{isLargeFont ? '−' : '+'}</span>
              <span>{isLargeFont ? 'Letra Normal' : 'Letra Grande'}</span>
            </button>

            {/* Direct click-to-call link in top bar */}
            <a
              href="tel:+34968022960"
              className="flex items-center gap-1.5 font-bold text-white hover:text-[#DDA754] transition-colors"
              aria-label="Llamar directamente al gabinete por teléfono"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>968 02 29 60</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header bar */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        {/* Brand Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-3 text-[#0E382C] focus:outline-none focus:ring-2 focus:ring-[#0E382C] rounded-lg p-1"
          aria-label="AudioMurcia - Inicio"
        >
          <span className="w-10 h-10 rounded-full bg-[#EDF5F0] border border-[#D5E7DC] flex items-center justify-center text-[#B87319] shrink-0 shadow-2xs" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <path d="M6 8.5a6 6 0 0 1 12 0c0 7-6 7.5-6 11.5" />
              <path d="M10 8.5a2 2 0 1 1 4 0c0 2.5-2 3.5-2 5.5" />
              <circle cx="12" cy="14" r="0.75" fill="currentColor" />
            </svg>
          </span>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-[#0E382C] leading-none">
              Audio<span className="text-[#B87319]">murcia</span>
            </span>
            <span className="text-[11px] font-semibold text-[#405850] tracking-wide mt-0.5">Centro Auditivo</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Navegación principal" className="hidden lg:flex items-center space-x-7 text-base font-semibold text-[#1E3B31]">
          <a 
            href="#servicios" 
            className="hover:text-[#0E382C] hover:underline underline-offset-4 transition-colors"
          >
            Servicios
          </a>
          <a 
            href="#primera-visita" 
            className="hover:text-[#0E382C] hover:underline underline-offset-4 transition-colors"
          >
            Tu primera visita
          </a>
          <a 
            href="#audifonos" 
            className="hover:text-[#0E382C] hover:underline underline-offset-4 transition-colors"
          >
            Audífonos Phonak
          </a>
          <a 
            href="#equipo" 
            className="hover:text-[#0E382C] hover:underline underline-offset-4 transition-colors"
          >
            Nuestro equipo
          </a>
          <Link 
            to="/productos" 
            className="hover:text-[#0E382C] hover:underline underline-offset-4 transition-colors"
          >
            Catálogo
          </Link>
        </nav>

        {/* Right CTA Buttons: Direct Call & Booking */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:+34968022960"
            className="flex items-center gap-2 bg-[#EDF5F0] hover:bg-[#DFECE4] text-[#0E382C] border border-[#D5E7DC] font-bold text-sm px-4 py-2.5 rounded-full transition-all shadow-2xs"
            aria-label="Llamar por teléfono al 968 02 29 60"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 text-[#B87319]" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>Llamar</span>
          </a>

          <button
            type="button"
            onClick={handleBooking}
            className="bg-[#0E382C] hover:bg-[#154E3E] text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0E382C]"
            aria-label="Pedir cita previa gratuita en AudioMurcia"
          >
            Pedir cita previa
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          className="lg:hidden p-2.5 rounded-xl text-[#0E382C] bg-[#EDF5F0] border border-[#D5E7DC] hover:bg-[#DFECE4] focus:outline-none focus:ring-2 focus:ring-[#0E382C]"
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

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="lg:hidden px-5 pt-3 pb-6 bg-white border-b border-[#D5E7DC] space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2 text-base font-bold text-[#1E3B31]">
            <a
              href="#servicios"
              className="py-2.5 px-3 rounded-lg hover:bg-[#EDF5F0] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              • Servicios audiológicos
            </a>
            <a
              href="#primera-visita"
              className="py-2.5 px-3 rounded-lg hover:bg-[#EDF5F0] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              • Así es tu primera visita
            </a>
            <a
              href="#audifonos"
              className="py-2.5 px-3 rounded-lg hover:bg-[#EDF5F0] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              • Audífonos Phonak
            </a>
            <a
              href="#equipo"
              className="py-2.5 px-3 rounded-lg hover:bg-[#EDF5F0] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              • Nuestro equipo profesional
            </a>
            <Link
              to="/productos"
              className="py-2.5 px-3 rounded-lg hover:bg-[#EDF5F0] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              • Catálogo y tapones a medida
            </Link>
          </nav>

          <div className="pt-3 border-t border-[#E5EFE9] space-y-2.5">
            <a
              href="tel:+34968022960"
              className="w-full flex items-center justify-center gap-2 bg-[#EDF5F0] text-[#0E382C] border-2 border-[#0E382C] py-3 rounded-xl font-bold text-base"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 text-[#B87319]">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Llamar al 968 02 29 60</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                handleBooking();
              }}
              className="w-full bg-[#0E382C] text-white py-3 rounded-xl font-bold text-base shadow hover:bg-[#154E3E]"
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
