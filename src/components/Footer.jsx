import React from 'react';
import { Link } from 'react-router-dom';
import { IconPhone, IconMobile, IconCalendar, IconRedReal } from './Icons';

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100 border-t-2 border-slate-800 pt-12 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          {/* Columna 1: Marca & Lema */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2 text-white">
              <span className="w-8 h-8 rounded-full bg-[#0F2942] border border-slate-700 flex items-center justify-center text-amber-300" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M6 8.5a6 6 0 0 1 12 0c0 7-6 7.5-6 11.5" />
                  <path d="M10 8.5a2 2 0 1 1 4 0c0 2.5-2 3.5-2 5.5" />
                </svg>
              </span>
              <span className="text-xl font-black tracking-tight text-white">Audio<span className="text-amber-400">murcia</span></span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
              Centro auditivo independiente en Las Torres de Cotillas, Murcia. Cuidado personalizado, cercano y transparente para toda la familia.
            </p>
          </div>

          {/* Columna 2: Ubicación & Dos Teléfonos */}
          <div className="space-y-2 text-xs sm:text-sm">
            <h3 className="font-black text-sm sm:text-base text-white mb-2">Ubicación y Contacto</h3>
            <p className="text-white font-medium">Avenida Reyes Católicos, 27</p>
            <p className="text-white font-medium">30565 Las Torres de Cotillas, Murcia</p>
            <div className="pt-2 space-y-1.5">
              <p className="flex items-center gap-1.5">
                <IconPhone className="w-4 h-4 text-amber-300 shrink-0" aria-hidden="true" />
                <span className="text-slate-300 font-semibold">Fijo: </span>
                <a href="tel:+34968022960" className="text-amber-300 font-black hover:underline">968 02 29 60</a>
              </p>
              <p className="flex items-center gap-1.5">
                <IconMobile className="w-4 h-4 text-emerald-300 shrink-0" aria-hidden="true" />
                <span className="text-slate-300 font-semibold">Móvil / WA: </span>
                <a href="https://wa.me/34611085841" target="_blank" rel="noopener noreferrer" className="text-emerald-300 font-black hover:underline">611 08 58 41</a>
              </p>
              <p className="pt-0.5">
                <span className="text-slate-300 font-semibold">Email: </span>
                <a href="mailto:audiomurcia@gmail.com" className="text-white font-bold hover:underline hover:text-amber-300">audiomurcia@gmail.com</a>
              </p>
            </div>
          </div>

          {/* Columna 3: Horario */}
          <div className="space-y-2 text-xs sm:text-sm">
            <div className="flex items-center gap-1.5 mb-2">
              <IconCalendar className="w-4 h-4 text-amber-300 shrink-0" aria-hidden="true" />
              <h3 className="font-black text-sm sm:text-base text-white">Horario del Gabinete</h3>
            </div>
            <p><span className="font-bold text-white">Lunes a Jueves:</span> 9:30–13:30 y 16:30–19:30</p>
            <p><span className="font-black text-amber-300">Viernes a Domingo:</span> Cerrado</p>
            <p className="text-slate-200 pt-1 font-medium">Atención personalizada con cita previa.</p>
          </div>

          {/* Columna 4: Acreditaciones & Enlace a Real */}
          <div className="space-y-2 text-xs sm:text-sm">
            <h3 className="font-black text-sm sm:text-base text-white mb-2">Garantía Profesional</h3>
            <p className="flex items-center gap-1.5 text-white font-bold">
              <span className="w-2 h-2 rounded-full bg-[#C2410C]"></span>
              Centro Especializado Phonak
            </p>
            <p className="pt-0.5">
              <a
                href="https://audiologiareal.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer inline-flex items-center gap-1.5 text-amber-300 font-black hover:text-amber-200 hover:underline"
              >
                <IconRedReal className="w-4 h-4 text-amber-300 shrink-0" aria-hidden="true" />
                <span>Miembros de la Red R.E.A.L.</span>
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                  <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" />
                </svg>
              </a>
            </p>
            <p className="text-slate-200 pt-1 leading-relaxed font-medium">
              Audiología independiente y transparente sin cuotas ocultas.
            </p>
          </div>
        </div>

        {/* Bottom Bar con alto contraste y áreas táctiles cómodas */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-slate-200 font-medium gap-4">
          <p>© {new Date().getFullYear()} Centro Auditivo AudioMurcia. Todos los derechos reservados.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-bold">
            <a 
              href="https://audiologiareal.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-amber-300 hover:text-amber-200 hover:underline py-2 focus-visible:outline-2 focus-visible:outline-amber-400 rounded"
            >
              audiologiareal.com
            </a>
            <Link to="/aviso-legal" className="hover:text-white hover:underline py-2 focus-visible:outline-2 focus-visible:outline-white rounded">
              Aviso Legal
            </Link>
            <Link to="/aviso-legal#privacidad" className="hover:text-white hover:underline py-2 focus-visible:outline-2 focus-visible:outline-white rounded">
              Política de Privacidad
            </Link>
            <Link to="/aviso-legal#cookies" className="hover:text-white hover:underline py-2 focus-visible:outline-2 focus-visible:outline-white rounded">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
