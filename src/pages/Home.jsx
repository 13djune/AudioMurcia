import React, { useState } from 'react';

function Home() {
  const [copiedPhone, setCopiedPhone] = useState(null);

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedPhone(label);
    setTimeout(() => setCopiedPhone(null), 3000);
  };

  return (
    <div className="bg-white text-slate-800 selection:bg-amber-100 selection:text-amber-900">
      
      {/* ============================================================
          1. HERO SECTION
          Llamada telefónica directa para pedir cita sin formularios
      ============================================================ */}
      <section aria-labelledby="hero-heading" className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-12 sm:pb-16">
        <div className="bg-gradient-to-br from-slate-50 via-white to-amber-50/40 rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-200 relative overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Columna Izquierda: Mensaje claro y botones de llamada grandes */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EA580C]"></span>
                  <span className="text-xs sm:text-sm font-bold text-[#0F2942]">
                    Centro Auditivo en Las Torres de Cotillas
                  </span>
                </div>

                {/* Enlace directo a la Red R.E.A.L. con los colores corporativos #19303B y #ADD4BB */}
                <a
                  href="https://audiologiareal.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer inline-flex items-center gap-1.5 bg-[#19303B] hover:bg-[#22404e] text-[#ADD4BB] px-3.5 py-1.5 rounded-full border border-[#ADD4BB]/40 text-xs font-bold shadow-2xs transition-colors"
                  title="Visitar audiologiareal.com"
                >
                  <span className="w-2 h-2 rounded-full bg-[#ADD4BB]"></span>
                  <span>Red R.E.A.L. (audiologiareal.com)</span>
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 text-[#ADD4BB]">
                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>

              <h1 
                id="hero-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F2942] leading-[1.15] tracking-tight"
              >
                Tu audición, <br />
                <span className="text-[#EA580C]">en las mejores manos</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                Te atendemos en persona, sin prisas y dedicándote todo el tiempo que necesites. Realizamos revisiones completas y puedes probar tu audífono Phonak <strong>durante 30 días en tu casa sin compromiso</strong>.
              </p>

              {/* Botones de acción principales: LLAMADA DIRECTA SIEMPRE */}
              <div className="space-y-3 pt-2">
                <p className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">
                  Pide tu cita previa por llamada telefónica:
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  {/* Botón principal de llamada: Teléfono Fijo */}
                  <a
                    href="tel:+34968022960"
                    className="cursor-pointer inline-flex items-center justify-center gap-2.5 bg-[#0F2942] hover:bg-slate-800 text-white font-black text-base sm:text-lg px-7 py-4 rounded-full transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-slate-400"
                    aria-label="Llamar al teléfono fijo 968 02 29 60"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 text-amber-300" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>Llamar al 968 02 29 60</span>
                  </a>

                  {/* Botón de llamada al móvil o WhatsApp */}
                  <a
                    href="tel:+34611085841"
                    className="cursor-pointer inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base px-6 py-4 rounded-full transition-colors shadow-2xs"
                    aria-label="Llamar al móvil 611 08 58 41"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 text-white" aria-hidden="true">
                      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                      <path d="M12 18h.01" />
                    </svg>
                    <span>Móvil: 611 08 58 41</span>
                  </a>
                </div>
              </div>

              {/* Puntos de tranquilidad */}
              <div className="pt-2 flex flex-wrap gap-y-2 gap-x-5 text-xs sm:text-sm font-semibold text-slate-700">
                <span className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-[#0F2942] text-white flex items-center justify-center text-[10px] font-bold">✓</span>
                  Revisión auditiva completa
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-[#EA580C] text-white flex items-center justify-center text-[10px] font-bold">✓</span>
                  30 días de prueba en tu día a día
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-[#0F2942] text-white flex items-center justify-center text-[10px] font-bold">✓</span>
                  Ven con tu acompañante
                </span>
              </div>
            </div>

            {/* Columna Derecha: Foto auténtica enmarcada */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md rounded-3xl overflow-hidden border-2 border-slate-200 shadow-xl aspect-[4/3] bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80"
                  alt="Especialista de AudioMurcia atendiendo con cercanía y paciencia a un paciente mayor"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                
                {/* Badge superpuesto en la foto */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200 shadow-md">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#0F2942] text-white flex items-center justify-center text-sm font-bold shrink-0">
                      ★
                    </span>
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-[#0F2942] leading-tight">
                        Audiología personalizada y de confianza
                      </p>
                      <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                        Explicaciones claras y paciencia en cada consulta
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Cinta de confianza: Horario y enlaces */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex items-center gap-3 text-xs sm:text-sm">
            <span className="w-9 h-9 rounded-xl bg-slate-200 text-[#0F2942] flex items-center justify-center font-bold shrink-0">
              📅
            </span>
            <div>
              <p className="font-bold text-[#0F2942]">Lunes a Jueves abierto</p>
              <p className="text-slate-500 text-xs">Viernes, Sábado y Domingo cerrado</p>
            </div>
          </div>

          <a 
            href="tel:+34968022960"
            className="cursor-pointer bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-2xl p-4 flex items-center gap-3 text-xs sm:text-sm transition-colors group"
          >
            <span className="w-9 h-9 rounded-xl bg-amber-100 text-[#EA580C] flex items-center justify-center font-bold shrink-0 group-hover:scale-105 transition-transform">
              📞
            </span>
            <div>
              <p className="font-bold text-[#0F2942] group-hover:text-[#EA580C]">Llamada directa para cita</p>
              <p className="text-slate-500 text-xs">Fijo: 968 02 29 60 • Móvil: 611 08 58 41</p>
            </div>
          </a>

          <a 
            href="https://audiologiareal.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer bg-[#19303B] hover:bg-[#203c4a] border border-[#ADD4BB]/40 rounded-2xl p-4 flex items-center gap-3 text-xs sm:text-sm transition-colors group text-[#ADD4BB]"
          >
            <span className="w-9 h-9 rounded-xl bg-[#ADD4BB] text-[#19303B] flex items-center justify-center font-bold shrink-0 group-hover:scale-105 transition-transform">
              🌐
            </span>
            <div>
              <p className="font-bold text-[#ADD4BB] flex items-center gap-1">
                <span>Miembros Red R.E.A.L.</span>
                <span className="text-xs">↗</span>
              </p>
              <p className="text-[#ADD4BB]/80 text-xs">audiologiareal.com</p>
            </div>
          </a>
        </div>
      </section>

      {/* ============================================================
          2. SECCIÓN "DEL TEST AUDITIVO A LA SOLUCIÓN"
          Cuadrícula de 4 tarjetas con llamada directa para cada servicio
      ============================================================ */}
      <section id="servicios" aria-labelledby="servicios-heading" className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 border-t border-slate-200">
        <div className="max-w-2xl mb-12">
          <span className="text-xs sm:text-sm font-bold text-[#EA580C] uppercase tracking-wider block mb-1">
            Servicios integrales
          </span>
          <h2 
            id="servicios-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F2942] tracking-tight leading-tight"
          >
            Del test auditivo a la solución definitiva
          </h2>
          <p className="mt-2 text-base text-slate-600 leading-relaxed">
            Todo el proceso en un solo centro, con el mismo equipo de audiólogos de principio a fin.
          </p>
        </div>

        {/* Cuadrícula de 4 Tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Tarjeta 1 */}
          <article className="bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#EA580C] mb-5 shadow-2xs" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-6 h-6">
                  <path d="M4 16h4l3-9 6 18 5-13 4 8h2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0F2942] mb-3">
                Exploración audiológica
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Pruebas indoloras para saber con exactitud cómo funciona tu oído hoy, con resultados claros que te explicamos con paciencia y en persona.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-slate-200">
              <a
                href="tel:+34968022960"
                className="cursor-pointer block w-full text-center font-bold text-sm text-[#0F2942] hover:text-[#EA580C] underline underline-offset-4"
              >
                Llamar para pedir cita →
              </a>
            </div>
          </article>

          {/* Tarjeta 2: Destacada en Azul Marino Profundo (#0F2942) */}
          <article className="bg-[#0F2942] text-white rounded-3xl p-6 sm:p-7 border-2 border-[#0F2942] flex flex-col justify-between shadow-lg lg:-translate-y-2 transition-transform">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-amber-300 mb-3" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-6 h-6">
                  <path d="M4 16h4l3-9 6 18 5-13 4 8h2" />
                </svg>
              </div>
              <span className="inline-block bg-[#EA580C] text-white text-xs font-bold px-3 py-1 rounded-full mb-3 shadow-xs">
                ★ 30 Días de Prueba
              </span>
              <h3 className="text-xl font-bold text-white mb-3">
                Audífonos para cada pérdida
              </h3>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                Elegimos el audífono idóneo para ti, lo calibramos a tu gusto y <strong>te lo llevas a casa durante 30 días para probarlo</strong> en tu día a día sin compromiso de compra.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-slate-700">
              <a
                href="tel:+34968022960"
                className="cursor-pointer block w-full bg-white hover:bg-slate-100 text-[#0F2942] text-sm font-bold py-3 rounded-xl transition-colors text-center shadow-xs"
              >
                Llamar y probar 30 días
              </a>
            </div>
          </article>

          {/* Tarjeta 3 */}
          <article className="bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#EA580C] mb-5 shadow-2xs" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-6 h-6">
                  <path d="M4 16h4l3-9 6 18 5-13 4 8h2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0F2942] mb-3">
                Tapones a medida
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Moldes anatómicos hechos con la forma exacta de tu oído. Ideales para protegerte del agua en la piscina y ducha, o para dormir tranquilamente sin ruidos.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-slate-200">
              <a
                href="tel:+34968022960"
                className="cursor-pointer block w-full text-center font-bold text-sm text-[#0F2942] hover:text-[#EA580C] underline underline-offset-4"
              >
                Consultar tapones por teléfono →
              </a>
            </div>
          </article>

          {/* Tarjeta 4 */}
          <article className="bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-[#EA580C] mb-5 shadow-2xs" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-6 h-6">
                  <path d="M4 16h4l3-9 6 18 5-13 4 8h2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0F2942] mb-3">
                Ayudas para la TV
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Accesorios inalámbricos para escuchar la televisión con total claridad directamente en tus audífonos sin tener que subir el volumen para el resto de la casa.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-slate-200">
              <a
                href="tel:+34968022960"
                className="cursor-pointer block w-full text-center font-bold text-sm text-[#0F2942] hover:text-[#EA580C] underline underline-offset-4"
              >
                Consultar ayudas TV por teléfono →
              </a>
            </div>
          </article>

        </div>
      </section>

      {/* ============================================================
          3. SECCIÓN "ASÍ ES TU PRIMERA VISITA"
          Proceso en 3 pasos con "Probarlo en tu día a día antes de decidir"
      ============================================================ */}
      <section id="primera-visita" aria-labelledby="visita-heading" className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 border-t border-slate-200">
        <div className="max-w-2xl mb-12">
          <span className="text-xs sm:text-sm font-bold text-[#EA580C] uppercase tracking-wider block mb-1">
            Tu recorrido con nosotros
          </span>
          <h2 
            id="visita-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F2942] tracking-tight leading-tight"
          >
            Así es tu primera visita
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-600 leading-relaxed">
            Una experiencia cercana, tranquila y transparente desde el primer minuto.
          </p>
        </div>

        {/* Proceso en 3 Etapas Conectadas */}
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-8 right-8 -translate-y-8 h-1 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 z-0" aria-hidden="true"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            
            {/* Etapa 1 */}
            <div className="bg-white rounded-3xl p-7 border-2 border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group hover:border-[#0F2942]">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 text-[#0F2942] border border-slate-200 flex items-center justify-center group-hover:bg-[#0F2942] group-hover:text-white transition-colors shadow-2xs">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider bg-slate-100 text-[#0F2942] px-3.5 py-1.5 rounded-full border border-slate-200">
                    Paso 1
                  </span>
                </div>

                <h3 className="text-2xl font-black text-[#0F2942] mb-3 group-hover:text-[#EA580C] transition-colors">
                  Te escuchamos
                </h3>

                <p className="text-base text-slate-600 leading-relaxed">
                  Charlamos tranquilamente sobre cómo oyes en tu día a día: en reuniones familiares, viendo la tele o paseando. Entendemos tus necesidades antes de hacer cualquier prueba.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#0F2942]">
                <span className="w-2 h-2 rounded-full bg-[#EA580C]"></span>
                Sin prisas ni compromisos
              </div>
            </div>

            {/* Etapa 2 */}
            <div className="bg-white rounded-3xl p-7 border-2 border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group hover:border-[#0F2942] relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0F2942] text-white text-[11px] font-bold px-3 py-0.5 rounded-full shadow-xs">
                Clínico e indoloro
              </div>
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 text-[#0F2942] border border-slate-200 flex items-center justify-center group-hover:bg-[#0F2942] group-hover:text-white transition-colors shadow-2xs">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                      <line x1="12" y1="19" x2="12" y2="22" />
                    </svg>
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider bg-slate-100 text-[#0F2942] px-3.5 py-1.5 rounded-full border border-slate-200">
                    Paso 2
                  </span>
                </div>

                <h3 className="text-2xl font-black text-[#0F2942] mb-3 group-hover:text-[#EA580C] transition-colors">
                  Medimos tu oído
                </h3>

                <p className="text-base text-slate-600 leading-relaxed">
                  Realizamos una revisión otoscópica y un estudio audiológico indoloro. Te explicamos cada resultado con un gráfico comprensible, mostrándote cómo está tu salud auditiva.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#0F2942]">
                <span className="w-2 h-2 rounded-full bg-[#EA580C]"></span>
                Explicación clara en persona
              </div>
            </div>

            {/* Etapa 3: "Adaptamos y acompañamos: Probarlo en tu día a día antes de decidir" */}
            <div className="bg-[#0F2942] text-white rounded-3xl p-7 border-2 border-[#0F2942] shadow-md hover:shadow-xl transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-slate-800 text-amber-300 border border-slate-700 flex items-center justify-center group-hover:bg-white group-hover:text-[#0F2942] transition-colors shadow-2xs">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider bg-slate-800 text-amber-300 px-3.5 py-1.5 rounded-full border border-slate-700">
                    Paso 3
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white mb-2">
                  Adaptamos y acompañamos
                </h3>

                {/* Subrayado solicitado explícitamente */}
                <div className="mb-4 inline-block bg-[#EA580C] text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-lg">
                  Probarlo en tu día a día antes de decidir
                </div>

                <p className="text-base text-slate-200 leading-relaxed">
                  Si necesitas audífono, lo adaptamos y ajustamos a tu curva auditiva. <strong>Probarlo en tu día a día antes de decidir</strong> es la mejor garantía: te lo llevas a casa durante 30 días para comprobarlo con tu familia y televisión.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700 flex items-center gap-2 text-xs font-bold text-amber-300">
                <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                30 días de prueba en tu vida real
              </div>
            </div>

          </div>
        </div>

        {/* Caja de tranquilidad con llamada directa */}
        <div className="mt-10 bg-slate-50 p-5 sm:p-6 rounded-3xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-center gap-3.5">
            <span className="w-10 h-10 rounded-2xl bg-[#0F2942] text-white flex items-center justify-center font-bold text-base shrink-0 shadow-2xs">✓</span>
            <div>
              <p className="text-base sm:text-lg font-bold text-[#0F2942]">
                Puedes venir acompañado de tus familiares
              </p>
              <p className="text-xs sm:text-sm text-slate-600">
                Llámanos y concertaremos la hora que os resulte más cómoda a los dos.
              </p>
            </div>
          </div>
          <a
            href="tel:+34968022960"
            className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0F2942] hover:bg-slate-800 text-white font-bold text-sm px-6 py-3.5 rounded-full transition-colors shrink-0 shadow-xs"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 text-amber-300">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>Llamar al 968 02 29 60</span>
          </a>
        </div>
      </section>

      {/* ============================================================
          4. SECCIÓN "AUDÍFONOS"
          Grid asimétrico sin hueco entre tarjetas
      ============================================================ */}
      <section id="audifonos" aria-labelledby="audifonos-heading" className="bg-slate-50 py-14 sm:py-20 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="max-w-2xl mb-10">
            <span className="text-xs sm:text-sm font-bold text-[#EA580C] uppercase tracking-wider block mb-1">
              Tecnología suiza Phonak
            </span>
            <h2 
              id="audifonos-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F2942] tracking-tight leading-tight"
            >
              Audífonos fáciles de usar que se adaptan a tu vida
            </h2>
            <p className="mt-2 text-base sm:text-lg text-slate-600 leading-relaxed">
              Olvídate de cambiar pilas diminutas y de ruidos molestos. Trabajamos con los modelos Phonak más cómodos y discretos del mercado.
            </p>
          </div>

          {/* Grid Asimétrico: Tarjeta grande izquierda + 2 pequeñas apiladas derecha */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* Columna Izquierda: Tarjeta Grande Destacada (Phonak Audéo Lumity) */}
            <article className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="bg-slate-100 text-[#0F2942] text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full border border-slate-200">
                    El más recomendado para el día a día
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#EA580C] flex items-center gap-1">
                    ★ Máxima nitidez vocal
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#0F2942] mb-2">
                  Phonak Audéo Lumity
                </h3>

                <p className="text-base text-slate-600 mb-6 leading-relaxed">
                  Diseñado para que entiendas perfectamente las conversaciones en restaurantes familiares, reuniones con amigos o viendo la tele, reduciendo el ruido de fondo automáticamente.
                </p>

                {/* Contenedor multimedia con Aspect Ratio explícito y beneficios visuales */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 aspect-[16/10] flex flex-col justify-between">
                  <div className="flex justify-between items-center text-xs sm:text-sm font-bold text-[#0F2942]">
                    <span className="bg-white px-3 py-1 rounded-full shadow-2xs border border-slate-200">Recargable (sin pilas)</span>
                    <span className="bg-white px-3 py-1 rounded-full shadow-2xs border border-slate-200">Resistente a sudor y lluvia</span>
                  </div>

                  <div className="my-auto py-2">
                    <ul className="space-y-2.5 text-sm sm:text-base font-medium text-slate-800">
                      <li className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#0F2942] text-white flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                        <span><strong>Claridad vocal inmediata:</strong> amplifica la voz de las personas que te hablan.</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#0F2942] text-white flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                        <span><strong>Batería de todo el día:</strong> se carga por la noche en su estuche como un teléfono.</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#EA580C] text-white flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                        <span><strong>Conexión directa:</strong> atiende llamadas del móvil con solo tocar tu oreja.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/90 p-2.5 rounded-xl text-xs sm:text-sm text-slate-600 text-center font-medium border border-slate-200">
                    Disponible en varios tonos discretos para disimularse con tu cabello y piel
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-sm font-semibold text-slate-700">
                  Pruébalo durante 30 días en tu propia casa antes de decidir
                </span>
                <a
                  href="tel:+34968022960"
                  className="cursor-pointer w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-sm px-6 py-3 rounded-full transition-colors text-center shadow-xs"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>Llamar para prueba de Lumity</span>
                </a>
              </div>
            </article>

            {/* Columna Derecha: 2 Tarjetas Pequeñas Apiladas */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Tarjeta Pequeña 1: Phonak Audéo Fit */}
              <article className="flex-1 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#0F2942] transition-all">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-xs font-bold text-[#0F2942] uppercase tracking-wider bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                      Salud y Audición
                    </span>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      Sensor de pulso
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#0F2942]">Phonak Audéo Fit</h3>
                      <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                        Combina la nitidez auditiva de Phonak con un sensor biométrico que mide tu ritmo cardíaco y pasos diarios para cuidar tu salud de forma activa.
                      </p>
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 text-[#EA580C] shadow-2xs aspect-square" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-8 h-8">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                    </div>
                  </div>

                  {/* Bloque de prestaciones */}
                  <div className="mt-4 bg-slate-50 p-3.5 rounded-xl border border-slate-200 grid grid-cols-2 gap-2 text-xs font-semibold text-slate-700">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]"></span>
                      Pulsómetro en oído
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]"></span>
                      Contador de pasos
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0F2942]"></span>
                      App myPhonak
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0F2942]"></span>
                      Batería recargable
                    </span>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">
                    30 días de prueba en casa
                  </span>
                  <a
                    href="tel:+34968022960"
                    className="cursor-pointer text-sm font-bold text-[#0F2942] hover:text-[#EA580C] underline underline-offset-4"
                  >
                    Preguntar por teléfono →
                  </a>
                </div>
              </article>

              {/* Tarjeta Pequeña 2: Phonak Slim Lumity */}
              <article className="flex-1 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#0F2942] transition-all">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-xs font-bold text-[#0F2942] uppercase tracking-wider bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                      Diseño Ergonómico
                    </span>
                    <span className="text-xs font-bold text-amber-800 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                      Ideal con gafas
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#0F2942]">Phonak Slim Lumity</h3>
                      <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
                        Su curvatura exclusiva de 7° se amolda de forma natural tras el pabellón auditivo, ofreciendo máxima sujeción y discreción total para usuarios de gafas.
                      </p>
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 text-[#EA580C] shadow-2xs aspect-square" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-8 h-8">
                        <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z" />
                        <path d="m14 7 3 3" />
                      </svg>
                    </div>
                  </div>

                  {/* Bloque de prestaciones */}
                  <div className="mt-4 bg-slate-50 p-3.5 rounded-xl border border-slate-200 grid grid-cols-2 gap-2 text-xs font-semibold text-slate-700">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]"></span>
                      Forma curvada 7°
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]"></span>
                      Comodidad con patillas
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0F2942]"></span>
                      Estuche de carga Qi
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0F2942]"></span>
                      Audio SmartSpeech™
                    </span>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">
                    30 días de prueba en casa
                  </span>
                  <a
                    href="tel:+34968022960"
                    className="cursor-pointer text-sm font-bold text-[#0F2942] hover:text-[#EA580C] underline underline-offset-4"
                  >
                    Preguntar por teléfono →
                  </a>
                </div>
              </article>

            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          5. SECCIÓN "SIN PRISAS, CON EL TIEMPO QUE NECESITES"
          Tarjeta Audiología Independiente (Red R.E.A.L.) en #19303B y #ADD4BB
      ============================================================ */}
      <section id="equipo" aria-labelledby="equipo-heading" className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Columna Izquierda: Mensaje y Tarjeta Red R.E.A.L. en #19303B y #ADD4BB */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs sm:text-sm font-bold text-[#EA580C] uppercase tracking-wider block">
              Trato humano y cercano
            </span>
            <h2 
              id="equipo-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F2942] tracking-tight leading-tight"
            >
              Sin prisas, <br />
              con todo el tiempo que necesites
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Sabemos que dar el paso de revisar tu oído o probar un audífono genera dudas. En AudioMurcia te atendemos los mismos profesionales desde el primer día, explicándote cada detalle con total transparencia.
            </p>

            {/* TARJETA AUDIOLOGÍA INDEPENDIENTE (RED R.E.A.L.) CON LOS DOS COLORES EXACTOS: #19303B y #ADD4BB */}
            <div className="p-6 rounded-3xl bg-[#19303B] border-2 border-[#ADD4BB]/50 text-white shadow-lg space-y-4">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="w-12 h-12 rounded-2xl bg-[#ADD4BB] text-[#19303B] flex items-center justify-center shrink-0 font-bold shadow-md" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-6 h-6">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-[#ADD4BB]">
                      Audiología Independiente
                    </h3>
                    <p className="text-xs font-bold text-white/90">
                      Miembros de la Red R.E.A.L.
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-block bg-[#ADD4BB]/20 text-[#ADD4BB] border border-[#ADD4BB]/40 text-xs font-bold px-3 py-1 rounded-full">
                  Red R.E.A.L.
                </span>
              </div>

              <p className="text-sm text-[#ADD4BB]/90 leading-relaxed">
                No tenemos compromisos con grandes cadenas comerciales ni objetivos de venta forzados. Pertenecemos a la <strong>Red Española de Audiología e Innovación</strong>, garantizando rigor clínico, cercanía y ética profesional.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-[#ADD4BB]/30">
                <a
                  href="https://audiologiareal.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer inline-flex items-center justify-center gap-2 bg-[#ADD4BB] hover:bg-[#c2e4cd] text-[#19303B] font-black text-sm px-5 py-2.5 rounded-full transition-all shadow-sm"
                  title="Abrir web oficial de Audiología Real"
                >
                  <span>Visitar audiologiareal.com</span>
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" />
                  </svg>
                </a>
                <span className="text-xs text-[#ADD4BB]/80 text-center sm:text-right font-medium">
                  Atención 100% independiente
                </span>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Tarjetas del Equipo con formato horizontal */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Belén Chacón */}
            <article className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex items-center gap-4 sm:gap-6">
              <img
                src="https://images.unsplash.com/photo-1594824813626-96a92f254b73?auto=format&fit=crop&w=300&q=80"
                alt="Retrato de Belén Chacón, audióloga y audioprotesista titular"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border border-slate-200 shrink-0 aspect-square"
              />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0F2942]">Belén Chacón</h3>
                <p className="text-sm font-bold text-[#EA580C] mb-1">Audióloga y Audioprotesista Titular</p>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Más de 15 años cuidando la audición de familias en Murcia con dedicación y cariño.
                </p>
              </div>
            </article>

            {/* Francisco Gambín */}
            <article className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm flex items-center gap-4 sm:gap-6">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80"
                alt="Retrato de Francisco Gambín, técnico especialista en audiología clínica"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border border-slate-200 shrink-0 aspect-square"
              />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0F2942]">Francisco Gambín</h3>
                <p className="text-sm font-bold text-[#0F2942] mb-1">Audiólogo Clínico & Calibración</p>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Especialista en calibración acústica precisa para que oigas las voces sin molestias.
                </p>
              </div>
            </article>

          </div>

        </div>
      </section>

      {/* ============================================================
          6. SECCIÓN "CONTACTO DIRECTO POR LLAMADA"
          Todo por llamada telefónica sin formularios complicados
      ============================================================ */}
      <section id="contacto" aria-labelledby="contacto-heading" className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 border-t border-slate-200">
        <div className="bg-[#0F2942] text-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl border border-slate-700">
          
          {/* Cabecera de la sección de contacto */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs sm:text-sm font-black text-amber-300 uppercase tracking-wider bg-slate-800 px-4 py-1.5 rounded-full border border-slate-700">
              Cita previa siempre por llamada telefónica
            </span>
            <h2 
              id="contacto-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 tracking-tight"
            >
              Llámanos para concertar tu cita
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mt-3 leading-relaxed">
              En AudioMurcia no te hacemos rellenar formularios. Te atendemos personalmente por teléfono para elegir contigo el día y la hora que mejor te vengan.
            </p>
            
            {/* Recordatorio de horario SIN VIERNES */}
            <div className="mt-4 inline-flex items-center gap-2 bg-slate-800/90 border border-slate-700 px-4 py-2 rounded-2xl text-xs sm:text-sm text-slate-200 font-bold shadow-2xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EA580C]"></span>
              <span>Atención de <strong>Lunes a Jueves</strong> (9:30–13:30 y 16:30–19:30) • <span className="text-red-400">Viernes a Domingo cerrado</span></span>
            </div>
          </div>

          {/* Bloque con los DOS Teléfonos en Tarjetas Grandes y Fáciles de Pulsar */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch max-w-4xl mx-auto">
            
            {/* Tarjeta 1: Teléfono Fijo */}
            <div className="bg-slate-900/90 rounded-3xl p-7 border border-slate-800 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-12 h-12 rounded-2xl bg-amber-400/10 text-amber-300 flex items-center justify-center font-bold border border-amber-400/30">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <span className="text-xs font-bold bg-slate-800 text-amber-300 px-3 py-1 rounded-full border border-slate-700">
                    Gabinete
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">
                  Teléfono Fijo
                </h3>
                <p className="text-3xl font-black text-white tracking-tight mb-2">
                  968 02 29 60
                </p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Llama directamente desde tu teléfono fijo o móvil. Te atenderemos en horario de gabinete de lunes a jueves.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <a
                  href="tel:+34968022960"
                  className="cursor-pointer w-full flex items-center justify-center gap-2.5 bg-[#EA580C] hover:bg-[#C2410C] text-white font-black text-lg py-4 px-6 rounded-2xl shadow-md transition-all text-center focus:outline-none focus:ring-4 focus:ring-amber-400"
                  aria-label="Llamar al teléfono fijo 968 02 29 60"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 text-amber-200">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>Llamar al 968 02 29 60</span>
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy('968022960', 'fijo')}
                  className="cursor-pointer w-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold py-2 rounded-xl transition-colors text-center"
                >
                  {copiedPhone === 'fijo' ? '✓ Número copiado al portapapeles' : 'Copiar número 968 02 29 60'}
                </button>
              </div>
            </div>

            {/* Tarjeta 2: Móvil y WhatsApp */}
            <div className="bg-slate-900/90 rounded-3xl p-7 border border-slate-800 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold border border-emerald-500/30">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6">
                      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                      <path d="M12 18h.01" />
                    </svg>
                  </span>
                  <span className="text-xs font-bold bg-slate-800 text-emerald-400 px-3 py-1 rounded-full border border-slate-700">
                    Móvil / WhatsApp
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">
                  Móvil y WhatsApp
                </h3>
                <p className="text-3xl font-black text-white tracking-tight mb-2">
                  611 08 58 41
                </p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Llama al móvil o escríbenos directamente por WhatsApp si te resulta más cómodo para pedir o cambiar tu cita.
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                <a
                  href="tel:+34611085841"
                  className="cursor-pointer w-full flex items-center justify-center gap-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-base py-3.5 px-6 rounded-2xl border border-slate-700 transition-all text-center"
                  aria-label="Llamar al móvil 611 08 58 41"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 text-emerald-400">
                    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                    <path d="M12 18h.01" />
                  </svg>
                  <span>Llamar al móvil (611 08 58 41)</span>
                </a>

                <a
                  href="https://wa.me/34611085841"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer w-full flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base py-3.5 px-6 rounded-2xl shadow-sm transition-all text-center"
                  aria-label="Escribir por WhatsApp al 611 08 58 41"
                >
                  <span>Escribir por WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* Datos de Ubicación y Dirección física */}
          <div className="mt-10 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">Dirección Física del Gabinete</p>
              <p className="text-lg font-bold text-white mt-1">
                Avenida Reyes Católicos, 27 • 30565 Las Torres de Cotillas (Murcia)
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=Centro+Auditivo+AudioMurcia+Las+Torres+de+Cotillas"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm px-6 py-3.5 rounded-full border border-slate-700 transition-colors shrink-0"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-4 h-4 text-amber-400">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Abrir en Google Maps</span>
            </a>
          </div>

        </div>
      </section>

      {/* ============================================================
          BARRA FLOTANTE DE LLAMADA RÁPIDA PARA MÓVILES (Seniors)
          Solo llamada directa sin formularios
      ============================================================ */}
      <aside aria-label="Llamada rápida" className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-slate-200 p-3 flex gap-2.5 shadow-2xl">
        <a
          href="tel:+34968022960"
          className="cursor-pointer flex-1 flex items-center justify-center gap-2 bg-[#0F2942] text-white font-black text-sm py-3.5 rounded-2xl shadow"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 text-amber-300">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Llamar: 968 02 29 60
        </a>
        <a
          href="https://wa.me/34611085841"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer flex-1 flex items-center justify-center gap-2 bg-emerald-600 text-white font-black text-sm py-3.5 rounded-2xl shadow"
        >
          WhatsApp: 611 08 58 41
        </a>
      </aside>

    </div>
  );
}

export default Home;