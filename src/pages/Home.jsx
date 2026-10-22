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
        <div className="bg-gradient-to-br from-slate-50 via-white to-amber-50/50 rounded-3xl p-6 sm:p-10 md:p-12 border-2 border-slate-200 relative overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Columna Izquierda: Mensaje claro y botones de llamada grandes con alto contraste */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex flex-wrap items-center gap-2.5">
                <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-slate-300 shadow-2xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C2410C]"></span>
                  <span className="text-xs sm:text-sm font-extrabold text-[#0F2942]">
                    Centro Auditivo en Las Torres de Cotillas
                  </span>
                </div>

                {/* Enlace directo a la Red R.E.A.L. con los colores corporativos #19303B y #ADD4BB */}
                <a
                  href="https://audiologiareal.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer inline-flex items-center gap-1.5 bg-[#19303B] hover:bg-[#22404e] text-[#ADD4BB] px-3.5 py-1.5 rounded-full border border-[#ADD4BB]/50 text-xs font-black shadow-2xs transition-colors"
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
                <span className="text-[#C2410C]">en las mejores manos</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-800 leading-relaxed max-w-xl font-medium">
                Te atendemos <strong>en persona, sin prisas</strong> y dedicándote <strong>todo el tiempo que necesites</strong>. Realizamos <strong>revisiones auditivas completas</strong> y puedes probar tu audífono Phonak <strong className="text-slate-950 font-black">durante 30 días en tu propia casa sin compromiso</strong>.
              </p>

              {/* Botones de acción principales: LLAMADA DIRECTA SIEMPRE */}
              <div className="space-y-3 pt-2">
                <p className="text-xs sm:text-sm font-black text-slate-800 uppercase tracking-wider">
                  Pide tu cita previa por llamada telefónica:
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  {/* Botón principal de llamada: Teléfono Fijo */}
                  <a
                    href="tel:+34968022960"
                    className="cursor-pointer inline-flex items-center justify-center gap-2.5 bg-[#0F2942] hover:bg-slate-900 text-white font-black text-base sm:text-lg px-7 py-4 rounded-full transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-slate-400"
                    aria-label="Llamar al teléfono fijo 968 02 29 60"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 text-amber-300" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>Llamar al 968 02 29 60</span>
                  </a>

                  {/* Botón de llamada al móvil con verde de alto contraste WCAG AAA */}
                  <a
                    href="tel:+34611085841"
                    className="cursor-pointer inline-flex items-center justify-center gap-2 bg-[#065F46] hover:bg-[#044E39] text-white font-black text-base px-6 py-4 rounded-full transition-colors shadow-2xs"
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

              {/* Puntos de tranquilidad con contraste reforzado */}
              <div className="pt-2 flex flex-wrap gap-y-2 gap-x-5 text-xs sm:text-sm font-bold text-slate-900">
                <span className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-[#0F2942] text-white flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span><strong>Revisión auditiva completa</strong></span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-[#C2410C] text-white flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span><strong>30 días de prueba</strong> en tu día a día</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-[#0F2942] text-white flex items-center justify-center text-[10px] font-bold">✓</span>
                  <span><strong>Ven con tu acompañante</strong></span>
                </span>
              </div>
            </div>

            {/* Columna Derecha: Foto auténtica enmarcada */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md rounded-3xl overflow-hidden border-2 border-slate-300 shadow-xl aspect-[4/3] bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=800&q=80"
                  alt="Especialista de AudioMurcia atendiendo con cercanía y paciencia a un paciente mayor"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                
                {/* Badge superpuesto en la foto */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/98 backdrop-blur-md p-3.5 rounded-2xl border-2 border-slate-200 shadow-md">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#0F2942] text-amber-300 flex items-center justify-center text-sm font-bold shrink-0">
                      ★
                    </span>
                    <div>
                      <p className="text-xs sm:text-sm font-black text-[#0F2942] leading-tight">
                        Audiología personalizada y de confianza
                      </p>
                      <p className="text-[12px] text-slate-800 font-semibold leading-tight mt-0.5">
                        Explicaciones claras y paciencia en cada consulta
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Cinta de confianza: Horario y enlaces con alto contraste */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-4 flex items-center gap-3 text-xs sm:text-sm">
            <span className="w-9 h-9 rounded-xl bg-slate-200 text-[#0F2942] flex items-center justify-center font-black shrink-0">
              📅
            </span>
            <div>
              <p className="font-extrabold text-[#0F2942]">Lunes a Jueves abierto</p>
              <p className="text-slate-800 text-xs font-semibold">Viernes, Sábado y Domingo cerrado</p>
            </div>
          </div>

          <a 
            href="tel:+34968022960"
            className="cursor-pointer bg-slate-50 hover:bg-slate-100 border-2 border-slate-200 rounded-2xl p-4 flex items-center gap-3 text-xs sm:text-sm transition-colors group"
          >
            <span className="w-9 h-9 rounded-xl bg-amber-100 text-[#9A3412] flex items-center justify-center font-bold shrink-0 group-hover:scale-105 transition-transform">
              📞
            </span>
            <div>
              <p className="font-extrabold text-[#0F2942] group-hover:text-[#C2410C]">Llamada directa para cita</p>
              <p className="text-slate-800 text-xs font-semibold">Fijo: 968 02 29 60 • Móvil: 611 08 58 41</p>
            </div>
          </a>

          <a 
            href="https://audiologiareal.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer bg-[#19303B] hover:bg-[#203c4a] border-2 border-[#ADD4BB]/50 rounded-2xl p-4 flex items-center gap-3 text-xs sm:text-sm transition-colors group text-[#ADD4BB]"
          >
            <span className="w-9 h-9 rounded-xl bg-[#ADD4BB] text-[#19303B] flex items-center justify-center font-black shrink-0 group-hover:scale-105 transition-transform">
              🌐
            </span>
            <div>
              <p className="font-black text-[#ADD4BB] flex items-center gap-1">
                <span>Miembros Red R.E.A.L.</span>
                <span className="text-xs">↗</span>
              </p>
              <p className="text-[#ADD4BB] text-xs font-semibold">audiologiareal.com</p>
            </div>
          </a>
        </div>
      </section>

      {/* ============================================================
          2. SECCIÓN "DEL TEST AUDITIVO A LA SOLUCIÓN"
          Cuadrícula de 4 tarjetas informativas con textos destacados (sin botones redundantes)
      ============================================================ */}
      <section id="servicios" aria-labelledby="servicios-heading" className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 border-t border-slate-200">
        <div className="max-w-2xl mb-12">
          <span className="text-xs sm:text-sm font-black text-[#C2410C] uppercase tracking-wider block mb-1">
            Servicios integrales
          </span>
          <h2 
            id="servicios-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0F2942] tracking-tight leading-tight"
          >
            Del test auditivo a la solución definitiva
          </h2>
          <p className="mt-2 text-base sm:text-lg text-slate-800 leading-relaxed font-medium">
            Todo el proceso en un solo centro, con el <strong>mismo equipo de audiólogos</strong> de principio a fin.
          </p>
        </div>

        {/* Cuadrícula de 4 Tarjetas con alto contraste */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Tarjeta 1: Exploración audiológica */}
          <article className="bg-slate-50 rounded-3xl p-6 sm:p-7 border-2 border-slate-300 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border-2 border-slate-300 flex items-center justify-center text-[#C2410C] mb-5 shadow-2xs" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-6 h-6">
                  <path d="M4 16h4l3-9 6 18 5-13 4 8h2" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-[#0F2942] mb-3">
                Exploración audiológica
              </h3>
              <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                <strong>Pruebas indoloras</strong> para conocer con exactitud cómo funciona tu oído hoy. Te entregamos <strong>resultados claros explicados en persona y con paciencia</strong>, sin prisas.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-slate-200 flex items-center gap-2 text-xs font-black text-[#0F2942]">
              <span className="w-2 h-2 rounded-full bg-[#C2410C]"></span>
              <span><strong>Sin dolor</strong> ni molestias</span>
            </div>
          </article>

          {/* Tarjeta 2: Destacada en Azul Marino Profundo (#0F2942) */}
          <article className="bg-[#0F2942] text-white rounded-3xl p-6 sm:p-7 border-2 border-[#0F2942] flex flex-col justify-between shadow-lg lg:-translate-y-2 transition-transform">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-amber-300 mb-3 border border-slate-700" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-6 h-6">
                  <path d="M4 16h4l3-9 6 18 5-13 4 8h2" />
                </svg>
              </div>
              <span className="inline-block bg-[#C2410C] text-white text-xs font-black px-3 py-1 rounded-full mb-3 shadow-xs">
                ★ 30 Días de Prueba
              </span>
              <h3 className="text-xl font-black text-white mb-3">
                Audífonos para cada pérdida
              </h3>
              <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-medium">
                Elegimos el <strong>audífono idóneo para ti</strong>, lo calibramos a tu medida y <strong className="text-amber-300 font-black">te lo llevas a casa durante 30 días</strong> para probarlo en tu vida real <strong>sin compromiso de compra</strong>.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-slate-700 flex items-center gap-2 text-xs font-black text-amber-300">
              <span className="w-2 h-2 rounded-full bg-amber-300"></span>
              <span><strong>Prueba en tu hogar</strong> antes de decidir</span>
            </div>
          </article>

          {/* Tarjeta 3: Tapones a medida */}
          <article className="bg-slate-50 rounded-3xl p-6 sm:p-7 border-2 border-slate-300 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border-2 border-slate-300 flex items-center justify-center text-[#C2410C] mb-5 shadow-2xs" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-6 h-6">
                  <path d="M4 16h4l3-9 6 18 5-13 4 8h2" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-[#0F2942] mb-3">
                Tapones a medida
              </h3>
              <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                <strong>Moldes anatómicos personalizados</strong> hechos con la <strong>forma exacta de tu conducto auditivo</strong>. Ideales para <strong>proteger del agua en piscina y ducha</strong> o para <strong>dormir sin ruidos</strong>.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-slate-200 flex items-center gap-2 text-xs font-black text-[#0F2942]">
              <span className="w-2 h-2 rounded-full bg-[#C2410C]"></span>
              <span><strong>Ajuste anatómico</strong> 100% estanco</span>
            </div>
          </article>

          {/* Tarjeta 4: Ayudas para la TV */}
          <article className="bg-slate-50 rounded-3xl p-6 sm:p-7 border-2 border-slate-300 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border-2 border-slate-300 flex items-center justify-center text-[#C2410C] mb-5 shadow-2xs" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-6 h-6">
                  <path d="M4 16h4l3-9 6 18 5-13 4 8h2" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-[#0F2942] mb-3">
                Ayudas para la TV
              </h3>
              <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                <strong>Accesorios inalámbricos</strong> para recibir el audio de la tele <strong>directamente en tus audífonos</strong> con total claridad, <strong>sin tener que subir el volumen</strong> para los demás.
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-slate-200 flex items-center gap-2 text-xs font-black text-[#0F2942]">
              <span className="w-2 h-2 rounded-full bg-[#C2410C]"></span>
              <span><strong>Diálogos nítidos</strong> en directo</span>
            </div>
          </article>

        </div>
      </section>

      {/* ============================================================
          3. SECCIÓN "ASÍ ES TU PRIMERA VISITA"
          Línea de tiempo (Timeline) clara, legible y con tamaño de texto ajustado
      ============================================================ */}
      <section id="primera-visita" aria-labelledby="visita-heading" className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 border-t border-slate-200">
        <div className="max-w-2xl mb-12">
          <span className="text-xs sm:text-sm font-black text-[#C2410C] uppercase tracking-wider block mb-1">
            Tu recorrido con nosotros • Paso a paso
          </span>
          <h2 
            id="visita-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0F2942] tracking-tight leading-tight"
          >
            Así es tu primera visita
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
            Una experiencia <strong>cercana, tranquila y transparente</strong> desde el primer minuto, explicada con sencillez para ti y tu familia.
          </p>
        </div>

        {/* TIMELINE VISUAL: Conectores y 3 Hitos Numéricos Claros */}
        <div className="relative">
          
          {/* Línea horizontal continua en pantallas medianas/grandes */}
          <div className="hidden lg:block absolute top-14 left-16 right-16 h-1 bg-gradient-to-r from-slate-300 via-[#C2410C]/40 to-[#0F2942] z-0" aria-hidden="true"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10">
            
            {/* Hito 1 de la línea de tiempo */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-slate-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group hover:border-[#0F2942]">
              <div>
                {/* Cabecera del Hito con número grande tipo timeline */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#0F2942] text-white flex items-center justify-center font-black text-lg shadow-sm border border-slate-800">
                    01
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider bg-slate-100 text-[#0F2942] px-3 py-1 rounded-full border border-slate-300">
                    Paso 1 • Escucha
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-[#0F2942] mb-2 group-hover:text-[#C2410C] transition-colors">
                  Te escuchamos con calma
                </h3>

                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                  Charlamos tranquilamente sobre cómo oyes en tu <strong>vida cotidiana</strong>: en comidas familiares, viendo la televisión o paseando por la calle. <strong>Tus necesidades y sensaciones</strong> son el punto de partida antes de realizar cualquier prueba.
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200 flex items-center gap-2 text-xs font-black text-[#0F2942]">
                <span className="w-2 h-2 rounded-full bg-[#C2410C]"></span>
                <span><strong>Sin prisas</strong> ni compromisos</span>
              </div>
            </div>

            {/* Hito 2 de la línea de tiempo */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-slate-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group hover:border-[#0F2942]">
              <div>
                {/* Cabecera del Hito con número grande */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-[#0F2942] text-white flex items-center justify-center font-black text-lg shadow-sm border border-slate-800">
                    02
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider bg-amber-100 text-[#9A3412] px-3 py-1 rounded-full border border-amber-300">
                    Paso 2 • Revisión
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-[#0F2942] mb-2 group-hover:text-[#C2410C] transition-colors">
                  Medimos tu salud auditiva
                </h3>

                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                  Realizamos una <strong>revisión otoscópica</strong> y un <strong>estudio audiológico indoloro</strong>. Te explicamos cada resultado con una <strong>gráfica clara y comprensible</strong>, mostrándote cómo funciona tu oído de forma totalmente honesta.
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200 flex items-center gap-2 text-xs font-black text-[#0F2942]">
                <span className="w-2 h-2 rounded-full bg-[#C2410C]"></span>
                <span><strong>Explicación clara</strong> en persona</span>
              </div>
            </div>

            {/* Hito 3 de la línea de tiempo: "Adaptamos y acompañamos: Probarlo en tu día a día antes de decidir" */}
            <div className="bg-[#0F2942] text-white rounded-3xl p-6 sm:p-7 border-2 border-[#0F2942] shadow-md hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                {/* Cabecera del Hito con número grande */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-300 text-slate-950 flex items-center justify-center font-black text-lg shadow-sm">
                    03
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider bg-slate-800 text-amber-300 px-3 py-1 rounded-full border border-slate-700">
                    Paso 3 • Adaptación
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-white mb-2">
                  Adaptamos y acompañamos
                </h3>

                {/* Subrayado solicitado explícitamente */}
                <div className="mb-3 inline-block bg-[#C2410C] text-white text-xs font-black px-3 py-1.5 rounded-lg shadow-2xs">
                  Probarlo en tu día a día antes de decidir
                </div>

                <p className="text-xs sm:text-sm text-slate-100 leading-relaxed font-medium">
                  Si necesitas audífono, lo ajustamos a tu curva auditiva. <strong className="text-amber-300 font-black">Probarlo en tu día a día antes de decidir</strong> es la garantía: te lo llevas a casa durante <strong>30 días de prueba real</strong> para comprobarlo en tu entorno cotidiano.
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-700 flex items-center gap-2 text-xs font-black text-amber-300">
                <span className="w-2 h-2 rounded-full bg-amber-300"></span>
                <span><strong>30 días en tu hogar</strong> sin compromiso</span>
              </div>
            </div>

          </div>
        </div>

        {/* Caja de tranquilidad (informativa, sin botón de llamada repetitivo) */}
        <div className="mt-8 bg-slate-50 p-5 sm:p-6 rounded-3xl border-2 border-slate-300 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-center gap-3.5">
            <span className="w-10 h-10 rounded-2xl bg-[#0F2942] text-amber-300 flex items-center justify-center font-black text-base shrink-0 shadow-2xs">✓</span>
            <div>
              <p className="text-sm sm:text-base font-black text-[#0F2942]">
                Puedes venir acompañado de tus familiares
              </p>
              <p className="text-xs sm:text-sm text-slate-800 font-medium">
                Las decisiones auditivas se toman mejor juntos. Concertaremos la hora que os resulte más cómoda a los dos.
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 bg-white text-[#0F2942] border border-slate-300 px-4 py-2 rounded-full text-xs font-extrabold shrink-0 shadow-2xs">
            <span>Familiares siempre bienvenidos</span>
          </span>
        </div>
      </section>

      {/* ============================================================
          4. SECCIÓN "AUDÍFONOS"
          Grid asimétrico sin hueco entre tarjetas (botones redundantes eliminados)
      ============================================================ */}
      <section id="audifonos" aria-labelledby="audifonos-heading" className="bg-slate-50 py-14 sm:py-20 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="max-w-2xl mb-10">
            <span className="text-xs sm:text-sm font-black text-[#C2410C] uppercase tracking-wider block mb-1">
              Tecnología suiza Phonak
            </span>
            <h2 
              id="audifonos-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0F2942] tracking-tight leading-tight"
            >
              Audífonos fáciles de usar que se adaptan a tu vida
            </h2>
            <p className="mt-2 text-base sm:text-lg text-slate-800 leading-relaxed font-medium">
              Olvídate de cambiar pilas diminutas y de ruidos molestos. Trabajamos con los <strong>modelos Phonak más cómodos y discretos</strong> del mercado.
            </p>
          </div>

          {/* Grid Asimétrico: Tarjeta grande izquierda + 2 pequeñas apiladas derecha */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* Columna Izquierda: Tarjeta Grande Destacada (Phonak Audéo Lumity) */}
            <article className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-300 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="bg-slate-200 text-[#0F2942] text-xs sm:text-sm font-black px-3.5 py-1.5 rounded-full border border-slate-300">
                    El más recomendado para el día a día
                  </span>
                  <span className="text-xs sm:text-sm font-black text-[#9A3412] flex items-center gap-1">
                    ★ Máxima nitidez vocal
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#0F2942] mb-2">
                  Phonak Audéo Lumity
                </h3>

                <p className="text-base text-slate-800 mb-6 leading-relaxed font-medium">
                  Diseñado para que <strong>entiendas perfectamente las conversaciones</strong> en restaurantes familiares, reuniones con amigos o viendo la tele, <strong>reduciendo el ruido de fondo automáticamente</strong>.
                </p>

                {/* Contenedor multimedia con Aspect Ratio explícito y beneficios visuales con alto contraste */}
                <div className="bg-slate-50 border-2 border-slate-300 rounded-2xl p-6 aspect-[16/10] flex flex-col justify-between">
                  <div className="flex justify-between items-center text-xs sm:text-sm font-black text-[#0F2942]">
                    <span className="bg-white px-3 py-1 rounded-full shadow-2xs border border-slate-300">Recargable (sin pilas)</span>
                    <span className="bg-white px-3 py-1 rounded-full shadow-2xs border border-slate-300">Resistente a sudor y lluvia</span>
                  </div>

                  <div className="my-auto py-2">
                    <ul className="space-y-2.5 text-sm sm:text-base font-bold text-slate-900">
                      <li className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#0F2942] text-amber-300 flex items-center justify-center text-xs font-black shrink-0">✓</span>
                        <span><strong>Claridad vocal inmediata:</strong> amplifica con nitidez la voz de quienes te hablan.</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#0F2942] text-amber-300 flex items-center justify-center text-xs font-black shrink-0">✓</span>
                        <span><strong>Batería de todo el día:</strong> se recarga por la noche en su estuche como un teléfono móvil.</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#C2410C] text-white flex items-center justify-center text-xs font-black shrink-0">✓</span>
                        <span><strong>Conexión directa Bluetooth:</strong> atiende llamadas del móvil con solo tocar tu oreja.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-2.5 rounded-xl text-xs sm:text-sm text-slate-900 text-center font-bold border border-slate-300">
                    Disponible en varios tonos discretos para disimularse con tu cabello y piel
                  </div>
                </div>
              </div>

              {/* Pie de tarjeta informativo (sin botón repetitivo de llamada) */}
              <div className="mt-6 pt-5 border-t border-slate-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <span className="text-sm font-black text-slate-900 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C2410C]"></span>
                  <span><strong>30 días de prueba real</strong> en tu propia casa antes de decidir</span>
                </span>
                <span className="inline-flex items-center text-xs font-black text-[#0F2942] bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-300">
                  Calibración incluida
                </span>
              </div>
            </article>

            {/* Columna Derecha: 2 Tarjetas Pequeñas Apiladas */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Tarjeta Pequeña 1: Phonak Audéo Fit */}
              <article className="flex-1 bg-white rounded-3xl p-6 sm:p-7 border-2 border-slate-300 shadow-sm flex flex-col justify-between hover:border-[#0F2942] transition-all">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-xs font-black text-[#0F2942] uppercase tracking-wider bg-slate-200 px-3 py-1 rounded-full border border-slate-300">
                      Salud y Audición
                    </span>
                    <span className="text-xs font-black text-[#065F46] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-300">
                      Sensor de pulso
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-[#0F2942]">Phonak Audéo Fit</h3>
                      <p className="text-sm sm:text-base text-slate-800 mt-2 leading-relaxed font-medium">
                        Combina la <strong>nitidez auditiva de Phonak</strong> con un <strong>sensor biométrico</strong> que monitoriza tu ritmo cardíaco y pasos diarios para cuidar tu salud.
                      </p>
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 border-2 border-slate-300 flex items-center justify-center shrink-0 text-[#C2410C] shadow-2xs aspect-square" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-8 h-8">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                    </div>
                  </div>

                  {/* Bloque de prestaciones */}
                  <div className="mt-4 bg-slate-50 p-3.5 rounded-xl border border-slate-300 grid grid-cols-2 gap-2 text-xs font-bold text-slate-900">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#C2410C]"></span>
                      <strong>Pulsómetro en oído</strong>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#C2410C]"></span>
                      <strong>Contador de pasos</strong>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#0F2942]"></span>
                      App myPhonak
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#0F2942]"></span>
                      Batería recargable
                    </span>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-black text-slate-800">
                    <strong>30 días de prueba</strong> en casa
                  </span>
                  <span className="text-xs font-black text-[#0F2942] bg-slate-100 px-3 py-1 rounded-full border border-slate-300">
                    Salud activa
                  </span>
                </div>
              </article>

              {/* Tarjeta Pequeña 2: Phonak Slim Lumity */}
              <article className="flex-1 bg-white rounded-3xl p-6 sm:p-7 border-2 border-slate-300 shadow-sm flex flex-col justify-between hover:border-[#0F2942] transition-all">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-xs font-black text-[#0F2942] uppercase tracking-wider bg-slate-200 px-3 py-1 rounded-full border border-slate-300">
                      Diseño Ergonómico
                    </span>
                    <span className="text-xs font-black text-amber-950 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                      Ideal con gafas
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-[#0F2942]">Phonak Slim Lumity</h3>
                      <p className="text-sm sm:text-base text-slate-800 mt-2 leading-relaxed font-medium">
                        Su <strong>curvatura exclusiva de 7°</strong> se amolda de forma natural tras la oreja, garantizando <strong>máxima comodidad y discreción</strong> para personas con gafas.
                      </p>
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 border-2 border-slate-300 flex items-center justify-center shrink-0 text-[#C2410C] shadow-2xs aspect-square" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-8 h-8">
                        <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z" />
                        <path d="m14 7 3 3" />
                      </svg>
                    </div>
                  </div>

                  {/* Bloque de prestaciones */}
                  <div className="mt-4 bg-slate-50 p-3.5 rounded-xl border border-slate-300 grid grid-cols-2 gap-2 text-xs font-bold text-slate-900">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#C2410C]"></span>
                      <strong>Forma anatómica 7°</strong>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#C2410C]"></span>
                      <strong>Confort con patillas</strong>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#0F2942]"></span>
                      Estuche de carga Qi
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#0F2942]"></span>
                      Audio SmartSpeech™
                    </span>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-black text-slate-800">
                    <strong>30 días de prueba</strong> en casa
                  </span>
                  <span className="text-xs font-black text-[#0F2942] bg-slate-100 px-3 py-1 rounded-full border border-slate-300">
                    Ultra discreto
                  </span>
                </div>
              </article>

            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          5. SECCIÓN "SIN PRISAS, CON EL TIEMPO QUE NECESITES"
          Equipo humano con fotografías grandes y maquetación editorial cuidada
          Tarjeta Audiología Independiente (Red R.E.A.L.) en #19303B y #ADD4BB
      ============================================================ */}
      <section id="equipo" aria-labelledby="equipo-heading" className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 border-t border-slate-200">
        
        {/* Cabecera de la sección con presentación cercana */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs sm:text-sm font-black text-[#C2410C] uppercase tracking-wider block mb-1">
            Trato humano, cercano y profesional
          </span>
          <h2 
            id="equipo-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0F2942] tracking-tight leading-tight"
          >
            Sin prisas, <br />
            con todo el tiempo que necesites
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-800 leading-relaxed font-medium">
            Revisar tu oído o probar un audífono es una decisión importante que requiere <strong>confianza y sosiego</strong>. En AudioMurcia te atendemos <strong>los mismos profesionales desde el primer día</strong>, resolviendo todas tus dudas con paciencia y transparencia absoluta.
          </p>
        </div>

        {/* Tarjetas del Personal con Imágenes Grandes y Maquetación Destacada */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 items-stretch">
          
          {/* Tarjeta 1: Belén Chacón */}
          <article className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-300 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row items-center sm:items-start gap-6 group hover:border-[#0F2942]">
            <div className="relative shrink-0">
              <img
                src="https://images.unsplash.com/photo-1594824813626-96a92f254b73?auto=format&fit=crop&w=600&q=80"
                alt="Retrato de Belén Chacón, audióloga y audioprotesista titular de AudioMurcia"
                className="w-36 h-36 sm:w-44 sm:h-48 rounded-2xl object-cover border-2 border-slate-300 shadow-md group-hover:scale-[1.02] transition-transform"
              />
              <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-[#0F2942] text-amber-300 text-[11px] font-black px-2.5 py-0.5 rounded-full border border-slate-700 whitespace-nowrap shadow-xs">
                Titular
              </span>
            </div>

            <div className="flex-1 text-center sm:text-left space-y-2.5">
              <div>
                <span className="inline-block text-xs font-black text-[#C2410C] uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200 mb-1">
                  Audióloga Titular
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#0F2942]">
                  Belén Chacón
                </h3>
                <p className="text-xs font-black text-slate-600">
                  Audioprotesista Colegiada
                </p>
              </div>

              <p className="text-sm text-slate-800 leading-relaxed font-medium">
                Más de <strong>15 años de dedicación continua</strong> cuidando la audición de familias en la Región de Murcia. Te acompaña con empatía para que cada paso sea <strong>cómodo y totalmente comprensible</strong>.
              </p>

              <div className="pt-2 flex flex-wrap justify-center sm:justify-start gap-2 text-xs font-bold text-slate-900">
                <span className="bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">
                  ✓ <strong>Atención cercana</strong>
                </span>
                <span className="bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">
                  ✓ <strong>Paciencia en consulta</strong>
                </span>
              </div>
            </div>
          </article>

          {/* Tarjeta 2: Francisco Gambín */}
          <article className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-slate-300 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row items-center sm:items-start gap-6 group hover:border-[#0F2942]">
            <div className="relative shrink-0">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80"
                alt="Retrato de Francisco Gambín, audiólogo clínico y especialista en calibración"
                className="w-36 h-36 sm:w-44 sm:h-48 rounded-2xl object-cover border-2 border-slate-300 shadow-md group-hover:scale-[1.02] transition-transform"
              />
              <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 bg-[#0F2942] text-amber-300 text-[11px] font-black px-2.5 py-0.5 rounded-full border border-slate-700 whitespace-nowrap shadow-xs">
                Clínico
              </span>
            </div>

            <div className="flex-1 text-center sm:text-left space-y-2.5">
              <div>
                <span className="inline-block text-xs font-black text-[#0F2942] uppercase tracking-wider bg-slate-100 px-3 py-1 rounded-full border border-slate-300 mb-1">
                  Audiología Clínica
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#0F2942]">
                  Francisco Gambín
                </h3>
                <p className="text-xs font-black text-slate-600">
                  Especialista en Calibración y Acústica
                </p>
              </div>

              <p className="text-sm text-slate-800 leading-relaxed font-medium">
                Experto en <strong>adaptación y calibración acústica de precisión</strong>. Su objetivo es que oigas las voces con total claridad en conversaciones y televisión, <strong>evitando ruidos molestos</strong>.
              </p>

              <div className="pt-2 flex flex-wrap justify-center sm:justify-start gap-2 text-xs font-bold text-slate-900">
                <span className="bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">
                  ✓ <strong>Ajuste milimétrico</strong>
                </span>
                <span className="bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">
                  ✓ <strong>Sonido natural</strong>
                </span>
              </div>
            </div>
          </article>

        </div>

        {/* TARJETA AUDIOLOGÍA INDEPENDIENTE (RED R.E.A.L.) CON LOS DOS COLORES EXACTOS: #19303B y #ADD4BB */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#19303B] border-2 border-[#ADD4BB]/60 text-white shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-[#ADD4BB] text-[#19303B] flex items-center justify-center font-black shadow-sm" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-5 h-5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#ADD4BB]">
                    Audiología 100% Independiente
                  </h3>
                  <p className="text-xs font-black text-white uppercase tracking-wider">
                    Miembros oficiales de la Red R.E.A.L.
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#ADD4BB] font-medium leading-relaxed">
                <strong>No somos franquicia ni dependemos de grandes cadenas comerciales</strong> con objetivos de venta forzados. Pertenecemos a la <strong>Red Española de Audiología e Innovación</strong>, garantizando que el único criterio para asesorarte es <strong>tu salud y tu comodidad auditiva</strong>.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch lg:items-end justify-center gap-3 pt-2 lg:pt-0">
              <a
                href="https://audiologiareal.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer inline-flex items-center justify-center gap-2 bg-[#ADD4BB] hover:bg-[#c2e4cd] text-[#19303B] font-black text-sm px-6 py-3 rounded-full transition-all shadow-md text-center"
                title="Abrir web oficial de Audiología Real"
              >
                <span>Visitar audiologiareal.com</span>
                <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z" clipRule="evenodd" />
                </svg>
              </a>
              <span className="text-xs text-[#ADD4BB] text-center lg:text-right font-bold">
                Ética clínica sin presiones de venta
              </span>
            </div>

          </div>
        </div>

      </section>

      {/* ============================================================
          6. SECCIÓN "CONTACTO DIRECTO POR LLAMADA"
          Todo por llamada telefónica sin formularios complicados
      ============================================================ */}
      <section id="contacto" aria-labelledby="contacto-heading" className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 border-t border-slate-200">
        <div className="bg-[#0F2942] text-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl border-2 border-slate-600">
          
          {/* Cabecera de la sección de contacto */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs sm:text-sm font-black text-amber-300 uppercase tracking-wider bg-slate-800 px-4 py-1.5 rounded-full border border-slate-600">
              Cita previa siempre por llamada telefónica
            </span>
            <h2 
              id="contacto-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-black text-white mt-4 tracking-tight"
            >
              Llámanos para concertar tu cita
            </h2>
            <p className="text-base sm:text-lg text-slate-100 mt-3 leading-relaxed font-medium">
              En AudioMurcia no te hacemos rellenar formularios. Te atendemos personalmente por teléfono para elegir contigo el día y la hora que mejor te vengan.
            </p>
            
            {/* Recordatorio de horario SIN VIERNES */}
            <div className="mt-4 inline-flex items-center gap-2 bg-slate-900 border border-slate-700 px-4 py-2 rounded-2xl text-xs sm:text-sm text-white font-bold shadow-2xs">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
              <span>Atención de <strong className="text-amber-300">Lunes a Jueves</strong> (9:30–13:30 y 16:30–19:30) • <span className="text-red-300 font-black">Viernes a Domingo cerrado</span></span>
            </div>
          </div>

          {/* Bloque con los DOS Teléfonos en Tarjetas Grandes y Fáciles de Pulsar con alto contraste */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch max-w-4xl mx-auto">
            
            {/* Tarjeta 1: Teléfono Fijo */}
            <div className="bg-slate-900 rounded-3xl p-7 border-2 border-slate-700 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-12 h-12 rounded-2xl bg-amber-400/20 text-amber-300 flex items-center justify-center font-black border border-amber-400/40">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <span className="text-xs font-black bg-slate-800 text-amber-300 px-3 py-1 rounded-full border border-slate-600">
                    Gabinete
                  </span>
                </div>

                <h3 className="text-xl font-black text-white mb-1">
                  Teléfono Fijo
                </h3>
                <p className="text-3xl font-black text-amber-300 tracking-tight mb-2">
                  968 02 29 60
                </p>
                <p className="text-sm text-slate-100 leading-relaxed font-medium">
                  Llama directamente desde tu teléfono fijo o móvil. Te atenderemos en horario de gabinete de lunes a jueves.
                </p>
              </div>

              <div className="space-y-2 pt-2">
                <a
                  href="tel:+34968022960"
                  className="cursor-pointer w-full flex items-center justify-center gap-2.5 bg-[#C2410C] hover:bg-[#9A3412] text-white font-black text-lg py-4 px-6 rounded-2xl shadow-md transition-all text-center focus:outline-none focus:ring-4 focus:ring-amber-400"
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
                  className="cursor-pointer w-full bg-slate-800 hover:bg-slate-700 text-slate-100 hover:text-white text-xs font-bold py-2.5 rounded-xl border border-slate-600 transition-colors text-center"
                >
                  {copiedPhone === 'fijo' ? '✓ Número copiado al portapapeles' : 'Copiar número 968 02 29 60'}
                </button>
              </div>
            </div>

            {/* Tarjeta 2: Móvil y WhatsApp con alto contraste */}
            <div className="bg-slate-900 rounded-3xl p-7 border-2 border-slate-700 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-black border border-emerald-500/40">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6">
                      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                      <path d="M12 18h.01" />
                    </svg>
                  </span>
                  <span className="text-xs font-black bg-slate-800 text-emerald-300 px-3 py-1 rounded-full border border-slate-600">
                    Móvil / WhatsApp
                  </span>
                </div>

                <h3 className="text-xl font-black text-white mb-1">
                  Móvil y WhatsApp
                </h3>
                <p className="text-3xl font-black text-emerald-300 tracking-tight mb-2">
                  611 08 58 41
                </p>
                <p className="text-sm text-slate-100 leading-relaxed font-medium">
                  Llama al móvil o escríbenos directamente por WhatsApp si te resulta más cómodo para pedir o cambiar tu cita.
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                <a
                  href="tel:+34611085841"
                  className="cursor-pointer w-full flex items-center justify-center gap-2.5 bg-slate-800 hover:bg-slate-700 text-white font-black text-base py-3.5 px-6 rounded-2xl border border-slate-600 transition-all text-center"
                  aria-label="Llamar al móvil 611 08 58 41"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 text-emerald-300">
                    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                    <path d="M12 18h.01" />
                  </svg>
                  <span>Llamar al móvil (611 08 58 41)</span>
                </a>

                <a
                  href="https://wa.me/34611085841"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer w-full flex items-center justify-center gap-2.5 bg-[#065F46] hover:bg-[#044E39] text-white font-black text-base py-3.5 px-6 rounded-2xl shadow-sm transition-all text-center"
                  aria-label="Escribir por WhatsApp al 611 08 58 41"
                >
                  <span>Escribir por WhatsApp</span>
                </a>
              </div>
            </div>

          </div>

          {/* Datos de Ubicación y Dirección física */}
          <div className="mt-10 pt-8 border-t border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <p className="text-xs font-black text-amber-300 uppercase tracking-wider">Dirección Física del Gabinete</p>
              <p className="text-lg font-black text-white mt-1">
                Avenida Reyes Católicos, 27 • 30565 Las Torres de Cotillas (Murcia)
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=Centro+Auditivo+AudioMurcia+Las+Torres+de+Cotillas"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-black text-sm px-6 py-3.5 rounded-full border border-slate-600 transition-colors shrink-0"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-4 h-4 text-amber-300">
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
          Solo llamada directa sin formularios con alto contraste
      ============================================================ */}
      <aside aria-label="Llamada rápida" className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t-2 border-slate-300 p-3 flex gap-2.5 shadow-2xl">
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
          className="cursor-pointer flex-1 flex items-center justify-center gap-2 bg-[#065F46] hover:bg-[#044E39] text-white font-black text-sm py-3.5 rounded-2xl shadow"
        >
          WhatsApp: 611 08 58 41
        </a>
      </aside>

    </div>
  );
}

export default Home;