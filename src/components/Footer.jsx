import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-white border-t border-[#D8E6DE] text-[#2A3F38] pt-12 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[#E5EFE9]">
          {/* Columna 1: Marca & Lema */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2 text-[#0E382C]">
              <span className="w-7 h-7 rounded-full bg-[#EBF4EE] flex items-center justify-center text-[#B87319]" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M6 8.5a6 6 0 0 1 12 0c0 7-6 7.5-6 11.5" />
                  <path d="M10 8.5a2 2 0 1 1 4 0c0 2.5-2 3.5-2 5.5" />
                </svg>
              </span>
              <span className="text-xl font-bold tracking-tight">Audio<span className="text-[#B87319]">murcia</span></span>
            </div>
            <p className="text-xs text-[#4A6057] leading-relaxed">
              Centro auditivo independiente en Las Torres de Cotillas, Murcia. Comprometidos con tu bienestar auditivo y el cuidado personalizado.
            </p>
          </div>

          {/* Columna 2: Ubicación & Contacto */}
          <div className="space-y-2 text-xs">
            <h3 className="font-semibold text-sm text-[#0E382C] mb-2">Ubicación y Contacto</h3>
            <p>Avenida Reyes Católicos, 27</p>
            <p>30565 Las Torres de Cotillas, Murcia</p>
            <p className="pt-1">
              Teléfono: <a href="tel:+34968022960" className="text-[#0E382C] font-semibold hover:underline">968 02 29 60</a>
            </p>
            <p>
              WhatsApp: <a href="tel:+34611085841" className="text-[#0E382C] font-semibold hover:underline">611 08 58 41</a>
            </p>
            <p>
              Email: <a href="mailto:info@audiomurcia.es" className="text-[#0E382C] hover:underline">info@audiomurcia.es</a>
            </p>
          </div>

          {/* Columna 3: Horario */}
          <div className="space-y-2 text-xs">
            <h3 className="font-semibold text-sm text-[#0E382C] mb-2">Horario del Gabinete</h3>
            <p><span className="font-medium text-[#0E382C]">Lunes a Jueves:</span> 9:30–13:30 y 16:30–19:30</p>
            <p><span className="font-medium text-[#0E382C]">Viernes:</span> 9:30–13:30</p>
            <p><span className="font-medium text-[#0E382C]">Sábado y Domingo:</span> Cerrado</p>
            <p className="text-[#0E382C] font-semibold pt-1">Atención personalizada con cita previa</p>
          </div>

          {/* Columna 4: Acreditaciones */}
          <div className="space-y-2 text-xs">
            <h3 className="font-semibold text-sm text-[#0E382C] mb-2">Garantía Profesional</h3>
            <p className="flex items-center gap-1.5 text-[#0E382C] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#186851]"></span>
              Centro Especializado Phonak
            </p>
            <p className="flex items-center gap-1.5 text-[#0E382C] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#186851]"></span>
              Miembros de la Red R.E.A.L.
            </p>
            <p className="text-[#4A6057] pt-1">
              Audiología independiente y transparente sin cuotas ocultas.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#526960] gap-4">
          <p>© {new Date().getFullYear()} Centro Auditivo AudioMurcia. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <Link to="/aviso-legal" className="hover:text-[#0E382C] hover:underline">Aviso Legal</Link>
            <Link to="/aviso-legal#privacidad" className="hover:text-[#0E382C] hover:underline">Política de Privacidad</Link>
            <Link to="/aviso-legal#cookies" className="hover:text-[#0E382C] hover:underline">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
