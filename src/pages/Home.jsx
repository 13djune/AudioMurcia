import React, { useState } from 'react';

function Home() {
  const [copiedPhone, setCopiedPhone] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    motive: 'Revisión auditiva completa (Gratuita)',
    date: '2026-10-25',
    time: '10:30',
    name: '',
    phone: '',
  });

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedPhone(label);
    setTimeout(() => setCopiedPhone(null), 3000);
  };

  const openBookingFor = (motive) => {
    setBookingData((prev) => ({ ...prev, motive }));
    setBookingStep(1);
    setIsModalOpen(true);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingStep(2);
  };

  const resetBooking = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setBookingStep(1);
      setBookingData({
        motive: 'Revisión auditiva completa (Gratuita)',
        date: '2026-10-25',
        time: '10:30',
        name: '',
        phone: '',
      });
    }, 300);
  };

  return (
    <div className="bg-white text-[#1E3B31] selection:bg-[#D5E8DD] selection:text-[#0E382C]">
      
      {/* ============================================================
          1. HERO SECTION
          Estructura de image_5fcb46.jpg con paleta verde de image_5fcb3f.jpg
      ============================================================ */}
      <section aria-labelledby="hero-heading" className="max-w-6xl mx-auto px-4 sm:px-6 pt-5 pb-10 sm:pb-14">
        <div className="bg-[#EDF5F0] rounded-3xl p-6 sm:p-10 md:p-12 border-2 border-[#D5E7DC] relative overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Columna Izquierda: Mensaje claro y botones grandes */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-[#D5E7DC] shadow-2xs">
                <span className="w-2.5 h-2.5 rounded-full bg-[#197055]"></span>
                <span className="text-xs sm:text-sm font-bold text-[#0E382C]">
                  Centro Auditivo en Las Torres de Cotillas
                </span>
              </div>

              <h1 
                id="hero-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0E382C] leading-[1.15] tracking-tight"
              >
                Tu audición, <br />
                <span className="text-[#134D3D]">en las mejores manos</span>
              </h1>

              <p className="text-base sm:text-lg text-[#2A443A] leading-relaxed max-w-xl">
                Te atendemos en persona, sin prisas y dedicándote todo el tiempo que necesites. Realizamos revisiones completas y puedes probar tu audífono Phonak <strong>durante 30 días en tu casa sin compromiso</strong>.
              </p>

              {/* Botones de acción principales con cursor-pointer */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <button
                  type="button"
                  onClick={() => openBookingFor('Revisión auditiva completa (Gratuita)')}
                  className="cursor-pointer inline-flex items-center justify-center gap-2.5 bg-[#0E382C] hover:bg-[#154E3E] text-white font-bold text-base sm:text-lg px-7 py-4 rounded-full transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#0E382C]/30"
                  aria-label="Pedir cita previa gratuita en el gabinete"
                >
                  <span>Pedir cita gratuita</span>
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>

                <a
                  href="tel:+34968022960"
                  className="cursor-pointer inline-flex items-center justify-center gap-2 bg-white hover:bg-[#F3F9F5] border-2 border-[#0E382C] text-[#0E382C] font-bold text-base sm:text-lg px-6 py-4 rounded-full transition-colors shadow-2xs focus:outline-none focus:ring-4 focus:ring-[#0E382C]/20"
                  aria-label="Llamar directamente al 968 02 29 60"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 text-[#B87319]" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>968 02 29 60</span>
                </a>
              </div>

              {/* Puntos de tranquilidad */}
              <div className="pt-2 flex flex-wrap gap-y-2 gap-x-4 text-xs sm:text-sm font-semibold text-[#185340]">
                <span className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-[#185340] text-white flex items-center justify-center text-[10px] font-bold">✓</span>
                  Revisión 100% gratuita
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-[#185340] text-white flex items-center justify-center text-[10px] font-bold">✓</span>
                  30 días de prueba en casa
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-[#185340] text-white flex items-center justify-center text-[10px] font-bold">✓</span>
                  Ven con tu acompañante
                </span>
              </div>
            </div>

            {/* Columna Derecha: Foto auténtica enmarcada */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-[#D5E7DC] aspect-[4/3] bg-[#DFECE4]">
                <img
                  src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1000&q=80"
                  alt="Pareja de mayores sonriendo en la consulta audiológica"
                  className="w-full h-full object-cover"
                  loading="eager"
                />

                {/* Badge de Horario y Estado sobre la foto */}
                <div 
                  className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-md border border-[#D5E7DC] flex items-center gap-3 text-xs sm:text-sm"
                  role="status"
                >
                  <span className="w-3 h-3 rounded-full bg-[#B87319] shrink-0" aria-hidden="true"></span>
                  <div>
                    <p className="font-bold text-[#0E382C]">Horario habitual del centro</p>
                    <p className="text-[#4A6057]">Lunes a Jueves: 9:30–13:30 y 16:30–19:30 • Viernes: 9:30–13:30</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Sellos de Confianza Oficiales al pie del Hero */}
          <div className="mt-8 pt-6 border-t-2 border-[#D5E7DC] grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3.5 bg-white/80 p-3.5 rounded-xl border border-[#D5E7DC]">
              <span className="w-10 h-10 rounded-full bg-[#EDF5F0] border border-[#D5E7DC] flex items-center justify-center text-[#B87319] shrink-0 font-bold" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </span>
              <div>
                <p className="font-bold text-sm text-[#0E382C]">Centro Especializado Phonak</p>
                <p className="text-xs text-[#4A6057]">Formación oficial continua y recambios originales</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 bg-white/80 p-3.5 rounded-xl border border-[#D5E7DC]">
              <span className="w-10 h-10 rounded-full bg-[#EDF5F0] border border-[#D5E7DC] flex items-center justify-center text-[#0E382C] shrink-0 font-bold" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              </span>
              <div>
                <p className="font-bold text-sm text-[#0E382C]">Miembro de la Red R.E.A.L.</p>
                <p className="text-xs text-[#4A6057]">Audiólogos libres e independientes sin marcas impuestas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CINTILLO / BENEFICIOS CLAROS
      ============================================================ */}
      <section aria-label="Garantías del paciente" className="border-y border-[#D5E7DC] bg-[#FAFDFB] py-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-around gap-4 text-xs sm:text-sm font-bold text-[#0E382C]">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B87319]"></span>
            Test auditivo completo gratuito
          </span>
          <span className="hidden sm:inline text-[#D5E7DC]">|</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B87319]"></span>
            Audífonos recargables Phonak
          </span>
          <span className="hidden sm:inline text-[#D5E7DC]">|</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B87319]"></span>
            Tapones a medida para baño y descanso
          </span>
          <span className="hidden md:inline text-[#D5E7DC]">|</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B87319]"></span>
            Adaptadores para oír bien la televisión
          </span>
        </div>
      </section>

      {/* ============================================================
          2. SECCIÓN "DEL TEST AUDITIVO AL AUDÍFONO AJUSTADO"
          4 Tarjetas elevadas de image_5fcb3f.jpg
      ============================================================ */}
      <section id="servicios" aria-labelledby="servicios-heading" className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="text-center sm:text-left max-w-2xl mb-10">
          <span className="text-xs sm:text-sm font-bold text-[#B87319] uppercase tracking-wider block mb-1">
            Nuestros servicios en el gabinete
          </span>
          <h2 
            id="servicios-heading" 
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0E382C] tracking-tight leading-tight"
          >
            Del test auditivo al audífono ajustado
          </h2>
          <p className="mt-2 text-base text-[#3A5349] leading-relaxed">
            Todo el proceso en un solo centro, con el mismo equipo de audiólogos de principio a fin.
          </p>
        </div>

        {/* Cuadrícula de 4 Tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Tarjeta 1 */}
          <article className="bg-[#EDF5F0] rounded-3xl p-6 sm:p-7 border-2 border-[#D5E7DC] flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#D5E7DC] flex items-center justify-center text-[#B87319] mb-5 shadow-2xs" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-6 h-6">
                  <path d="M4 16h4l3-9 6 18 5-13 4 8h2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0E382C] mb-3">
                Exploración audiológica
              </h3>
              <p className="text-sm sm:text-base text-[#2E483E] leading-relaxed">
                Pruebas indoloras para saber con exactitud cómo funciona tu oído hoy, con resultados claros que te explicamos con paciencia y en persona.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-[#D5E7DC]">
              <button
                type="button"
                onClick={() => openBookingFor('Revisión auditiva gratuita')}
                className="cursor-pointer w-full text-center font-bold text-sm text-[#0E382C] hover:text-[#185340] underline underline-offset-4"
              >
                Pedir revisión gratis →
              </button>
            </div>
          </article>

          {/* Tarjeta 2: Destacada en Verde Bosque Oscuro */}
          <article className="bg-[#0E382C] text-white rounded-3xl p-6 sm:p-7 border-2 border-[#0E382C] flex flex-col justify-between shadow-lg lg:-translate-y-2 transition-transform">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#195443] flex items-center justify-center text-[#DDA754] mb-3" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-6 h-6">
                  <path d="M4 16h4l3-9 6 18 5-13 4 8h2" />
                </svg>
              </div>
              <span className="inline-block bg-[#1B5746] text-[#E0F2E9] text-xs font-bold px-3 py-1 rounded-full mb-3">
                ★ 30 Días de Prueba
              </span>
              <h3 className="text-xl font-bold text-white mb-3">
                Audífonos para cada pérdida
              </h3>
              <p className="text-sm sm:text-base text-[#D5E8DF] leading-relaxed">
                Elegimos el audífono idóneo para ti, lo calibramos a tu gusto y <strong>te lo llevas a casa durante 30 días para probarlo</strong> en tu día a día sin compromiso de compra.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-[#195443]">
              <button
                type="button"
                onClick={() => openBookingFor('Prueba de audífonos 30 días')}
                className="cursor-pointer w-full bg-[#EAF5EF] hover:bg-white text-[#0E382C] text-sm font-bold py-3 rounded-xl transition-colors text-center shadow-xs"
              >
                Probar 30 días gratis
              </button>
            </div>
          </article>

          {/* Tarjeta 3 */}
          <article className="bg-[#EDF5F0] rounded-3xl p-6 sm:p-7 border-2 border-[#D5E7DC] flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#D5E7DC] flex items-center justify-center text-[#B87319] mb-5 shadow-2xs" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-6 h-6">
                  <path d="M4 16h4l3-9 6 18 5-13 4 8h2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0E382C] mb-3">
                Tapones a medida
              </h3>
              <p className="text-sm sm:text-base text-[#2E483E] leading-relaxed">
                Moldes anatómicos hechos con la forma exacta de tu oído. Ideales para protegerte del agua en la piscina y ducha, o para dormir tranquilamente sin ruidos.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-[#D5E7DC]">
              <button
                type="button"
                onClick={() => openBookingFor('Tapones para oídos a medida')}
                className="cursor-pointer w-full text-center font-bold text-sm text-[#0E382C] hover:text-[#185340] underline underline-offset-4"
              >
                Información de tapones →
              </button>
            </div>
          </article>

          {/* Tarjeta 4 */}
          <article className="bg-[#EDF5F0] rounded-3xl p-6 sm:p-7 border-2 border-[#D5E7DC] flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#D5E7DC] flex items-center justify-center text-[#B87319] mb-5 shadow-2xs" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-6 h-6">
                  <path d="M4 16h4l3-9 6 18 5-13 4 8h2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0E382C] mb-3">
                Ayudas para la TV
              </h3>
              <p className="text-sm sm:text-base text-[#2E483E] leading-relaxed">
                Accesorios inalámbricos para escuchar la televisión con total claridad directamente en tus audífonos sin tener que subir el volumen para el resto de la casa.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-[#D5E7DC]">
              <button
                type="button"
                onClick={() => openBookingFor('Ayudas auditivas para televisión')}
                className="cursor-pointer w-full text-center font-bold text-sm text-[#0E382C] hover:text-[#185340] underline underline-offset-4"
              >
                Ver accesorios de TV →
              </button>
            </div>
          </article>

        </div>
      </section>

      {/* ============================================================
          3. SECCIÓN "ASÍ ES TU PRIMERA VISITA" (REDISEÑADA Y ATRACTIVA)
          Visualmente atractiva, flujo conectado, SIN repetir números.
      ============================================================ */}
      <section id="primera-visita" aria-labelledby="visita-heading" className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 border-t-2 border-[#E5EFE9]">
        <div className="max-w-2xl mb-12">
          <span className="text-xs sm:text-sm font-bold text-[#B87319] uppercase tracking-wider block mb-1">
            Tu recorrido con nosotros
          </span>
          <h2 
            id="visita-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0E382C] tracking-tight leading-tight"
          >
            Así es tu primera visita
          </h2>
          <p className="mt-2 text-base sm:text-lg text-[#3A5349] leading-relaxed">
            Una experiencia cercana, tranquila y transparente desde el primer minuto.
          </p>
        </div>

        {/* Proceso en 3 Etapas Conectadas (Sin repetir números, visualmente rico) */}
        <div className="relative">
          
          {/* Línea conectora visual de fondo para pantallas medianas y grandes */}
          <div className="hidden md:block absolute top-1/2 left-8 right-8 -translate-y-8 h-1 bg-gradient-to-r from-[#D5E7DC] via-[#B87319]/40 to-[#D5E7DC] z-0" aria-hidden="true"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            
            {/* Etapa 1 */}
            <div className="bg-white rounded-3xl p-7 border-2 border-[#D5E7DC] shadow-sm hover:shadow-md transition-all flex flex-col justify-between group hover:border-[#0E382C]">
              <div>
                {/* Cabecera visual con icono temático */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#EDF5F0] text-[#0E382C] border-2 border-[#D5E7DC] flex items-center justify-center group-hover:bg-[#0E382C] group-hover:text-white transition-colors shadow-2xs">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider bg-[#EDF5F0] text-[#0E382C] px-3.5 py-1.5 rounded-full border border-[#D5E7DC]">
                    Inicio
                  </span>
                </div>

                <h3 className="text-2xl font-black text-[#0E382C] mb-3 group-hover:text-[#185340] transition-colors">
                  Te escuchamos
                </h3>

                <p className="text-base text-[#2E483E] leading-relaxed">
                  Charlamos tranquilamente sobre cómo oyes en tu día a día: en reuniones familiares, viendo la tele o paseando. Entendemos tus necesidades antes de hacer cualquier prueba.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5EFE9] flex items-center gap-2 text-xs font-bold text-[#185340]">
                <span className="w-2 h-2 rounded-full bg-[#185340]"></span>
                Sin prisas ni compromisos
              </div>
            </div>

            {/* Etapa 2 */}
            <div className="bg-white rounded-3xl p-7 border-2 border-[#B87319]/40 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group hover:border-[#B87319] relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#B87319] text-white text-[11px] font-bold px-3 py-0.5 rounded-full shadow-xs">
                Clínico e indoloro
              </div>
              <div>
                {/* Cabecera visual con icono temático */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFF8EE] text-[#B87319] border-2 border-[#F3DFC1] flex items-center justify-center group-hover:bg-[#B87319] group-hover:text-white transition-colors shadow-2xs">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                      <line x1="12" y1="19" x2="12" y2="22" />
                    </svg>
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider bg-[#FFF8EE] text-[#B87319] px-3.5 py-1.5 rounded-full border border-[#F3DFC1]">
                    Diagnóstico
                  </span>
                </div>

                <h3 className="text-2xl font-black text-[#0E382C] mb-3 group-hover:text-[#B87319] transition-colors">
                  Medimos tu oído
                </h3>

                <p className="text-base text-[#2E483E] leading-relaxed">
                  Realizamos una revisión otoscópica y un estudio audiológico indoloro. Te explicamos cada resultado con un gráfico comprensible, mostrándote cómo está tu salud auditiva.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5EFE9] flex items-center gap-2 text-xs font-bold text-[#B87319]">
                <span className="w-2 h-2 rounded-full bg-[#B87319]"></span>
                Explicación clara en persona
              </div>
            </div>

            {/* Etapa 3 */}
            <div className="bg-[#0E382C] text-white rounded-3xl p-7 border-2 border-[#0E382C] shadow-md hover:shadow-xl transition-all flex flex-col justify-between group">
              <div>
                {/* Cabecera visual con icono temático */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#195443] text-[#E0F2E9] border-2 border-[#206954] flex items-center justify-center group-hover:bg-white group-hover:text-[#0E382C] transition-colors shadow-2xs">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider bg-[#1B5746] text-[#E0F2E9] px-3.5 py-1.5 rounded-full border border-[#2B735F]">
                    Solución
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white mb-3">
                  Adaptamos y acompañamos
                </h3>

                <p className="text-base text-[#D5E8DF] leading-relaxed">
                  Si necesitas audífono, lo ajustamos exactamente a tu curva auditiva. <strong>Te lo llevas a casa durante 30 días para probarlo</strong> con tu familia y televisión antes de decidir.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#195443] flex items-center gap-2 text-xs font-bold text-[#DDA754]">
                <span className="w-2 h-2 rounded-full bg-[#DDA754]"></span>
                30 días de prueba gratuita garantizados
              </div>
            </div>

          </div>
        </div>

        {/* Caja de tranquilidad para personas mayores */}
        <div className="mt-10 bg-[#EDF5F0] p-5 sm:p-6 rounded-3xl border-2 border-[#D5E7DC] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-center gap-3.5">
            <span className="w-10 h-10 rounded-2xl bg-[#0E382C] text-white flex items-center justify-center font-bold text-base shrink-0 shadow-2xs">✓</span>
            <div>
              <p className="text-base sm:text-lg font-bold text-[#0E382C]">
                Puedes venir acompañado de tus familiares
              </p>
              <p className="text-xs sm:text-sm text-[#405850]">
                Estaremos encantados de explicar el resultado a ti y a tus hijos o pareja.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => openBookingFor('Primera visita auditiva')}
            className="cursor-pointer w-full sm:w-auto bg-[#0E382C] hover:bg-[#154E3E] text-white font-bold text-sm px-6 py-3.5 rounded-full transition-colors shrink-0 shadow-xs"
          >
            Reservar mi primera visita →
          </button>
        </div>
      </section>

      {/* ============================================================
          4. SECCIÓN "AUDÍFONOS"
          Grid asimétrico de image_5fcb46.jpg: tarjeta grande a la izquierda, 2 pequeñas a la derecha
      ============================================================ */}
      <section id="audifonos" aria-labelledby="audifonos-heading" className="bg-[#EDF5F0]/70 py-14 sm:py-20 border-t-2 border-[#D5E7DC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="max-w-2xl mb-10">
            <span className="text-xs sm:text-sm font-bold text-[#B87319] uppercase tracking-wider block mb-1">
              Tecnología suiza Phonak
            </span>
            <h2 
              id="audifonos-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0E382C] tracking-tight leading-tight"
            >
              Audífonos fáciles de usar que se adaptan a tu vida
            </h2>
            <p className="mt-2 text-base sm:text-lg text-[#3A5349] leading-relaxed">
              Olvídate de cambiar pilas diminutas y de ruidos molestos. Trabajamos con los modelos Phonak más cómodos y discretos del mercado.
            </p>
          </div>

          {/* Grid Asimétrico: Tarjeta grande izquierda + 2 pequeñas apiladas derecha */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Columna Izquierda: Tarjeta Grande Destacada (Phonak Audéo Lumity) */}
            <article className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#D5E7DC] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="bg-[#EDF5F0] text-[#0E382C] text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full border border-[#D5E7DC]">
                    El más recomendado para el día a día
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#B87319] flex items-center gap-1">
                    ★ Máxima nitidez vocal
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#0E382C] mb-2">
                  Phonak Audéo Lumity
                </h3>

                <p className="text-base text-[#2E483E] mb-6 leading-relaxed">
                  Diseñado para que entiendas perfectamente las conversaciones en restaurantes familiares, reuniones con amigos o viendo la tele, reduciendo el ruido de fondo automáticamente.
                </p>

                {/* Contenedor multimedia con Aspect Ratio explícito y beneficios visuales */}
                <div className="bg-[#EDF5F0] border border-[#D5E7DC] rounded-2xl p-6 aspect-[16/10] flex flex-col justify-between">
                  <div className="flex justify-between items-center text-xs sm:text-sm font-bold text-[#0E382C]">
                    <span className="bg-white px-3 py-1 rounded-full shadow-2xs">Recargable (sin pilas)</span>
                    <span className="bg-white px-3 py-1 rounded-full shadow-2xs">Resistente al sudor y lluvia</span>
                  </div>

                  <div className="my-auto py-2">
                    <ul className="space-y-2.5 text-sm sm:text-base font-medium text-[#1E3B31]">
                      <li className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#0E382C] text-white flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                        <span><strong>Claridad vocal inmediata:</strong> amplifica la voz de las personas que te hablan.</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#0E382C] text-white flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                        <span><strong>Batería de todo el día:</strong> se carga por la noche en su estuche como un teléfono.</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#0E382C] text-white flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                        <span><strong>Conexión directa:</strong> atiende llamadas del móvil con solo tocar tu oreja.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/80 p-2.5 rounded-xl text-xs sm:text-sm text-[#405850] text-center font-medium">
                    Disponible en varios tonos discretos para disimularse con tu cabello y piel
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-[#D5E7DC] flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-sm font-semibold text-[#185340]">
                  Pruébalo gratis durante 30 días en tu propia casa
                </span>
                <button
                  type="button"
                  onClick={() => openBookingFor('Prueba de Phonak Audéo Lumity')}
                  className="cursor-pointer w-full sm:w-auto bg-[#0E382C] hover:bg-[#154E3E] text-white font-bold text-sm px-6 py-3 rounded-full transition-colors text-center shadow-xs"
                >
                  Solicitar prueba de Lumity
                </button>
              </div>
            </article>

            {/* Columna Derecha: 2 Tarjetas Pequeñas Apiladas (flex-1 uniforme sin hueco) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Tarjeta Pequeña 1: Phonak Audéo Fit */}
              <article className="flex-1 bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#D5E7DC] shadow-sm flex flex-col justify-between hover:border-[#0E382C] transition-all">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-xs font-bold text-[#B87319] uppercase tracking-wider bg-[#FFF8EE] px-3 py-1 rounded-full border border-[#F3DFC1]">
                      Salud y Audición
                    </span>
                    <span className="text-xs font-bold text-[#0E382C] bg-[#EDF5F0] px-3 py-1 rounded-full">
                      Sensor de pulso
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#0E382C]">Phonak Audéo Fit</h3>
                      <p className="text-sm sm:text-base text-[#2E483E] mt-2 leading-relaxed">
                        Combina la nitidez auditiva de Phonak con un sensor biométrico que mide tu ritmo cardíaco y pasos diarios para cuidar tu salud de forma activa.
                      </p>
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-[#EDF5F0] border border-[#D5E7DC] flex items-center justify-center shrink-0 text-[#0E382C] shadow-2xs aspect-square" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-8 h-8">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                    </div>
                  </div>

                  {/* Bloque de prestaciones */}
                  <div className="mt-4 bg-[#FAFDFB] p-3.5 rounded-xl border border-[#E0ECE5] grid grid-cols-2 gap-2 text-xs font-semibold text-[#185340]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#185340]"></span>
                      Pulsómetro en oído
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#185340]"></span>
                      Contador de pasos
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#185340]"></span>
                      App myPhonak
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#185340]"></span>
                      Batería recargable
                    </span>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E5EFE9] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#4A6057]">
                    30 días de prueba en casa
                  </span>
                  <button
                    type="button"
                    onClick={() => openBookingFor('Información sobre Phonak Audéo Fit')}
                    className="cursor-pointer text-sm font-bold text-[#0E382C] hover:text-[#185340] underline underline-offset-4"
                  >
                    Preguntar por este modelo →
                  </button>
                </div>
              </article>

              {/* Tarjeta Pequeña 2: Phonak Slim Lumity */}
              <article className="flex-1 bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#D5E7DC] shadow-sm flex flex-col justify-between hover:border-[#0E382C] transition-all">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-xs font-bold text-[#0E382C] uppercase tracking-wider bg-[#EDF5F0] px-3 py-1 rounded-full border border-[#D5E7DC]">
                      Diseño Ergonómico
                    </span>
                    <span className="text-xs font-bold text-[#B87319] bg-[#FFF8EE] px-3 py-1 rounded-full border border-[#F3DFC1]">
                      Ideal con gafas
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#0E382C]">Phonak Slim Lumity</h3>
                      <p className="text-sm sm:text-base text-[#2E483E] mt-2 leading-relaxed">
                        Su curvatura exclusiva de 7° se amolda de forma natural tras el pabellón auditivo, ofreciendo máxima sujeción y discreción total para usuarios de gafas.
                      </p>
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-[#EDF5F0] border border-[#D5E7DC] flex items-center justify-center shrink-0 text-[#B87319] shadow-2xs aspect-square" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-8 h-8">
                        <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z" />
                        <path d="m14 7 3 3" />
                      </svg>
                    </div>
                  </div>

                  {/* Bloque de prestaciones */}
                  <div className="mt-4 bg-[#FAFDFB] p-3.5 rounded-xl border border-[#E0ECE5] grid grid-cols-2 gap-2 text-xs font-semibold text-[#185340]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#185340]"></span>
                      Forma curvada 7°
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#185340]"></span>
                      Comodidad con patillas
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#185340]"></span>
                      Estuche de carga Qi
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#185340]"></span>
                      Audio SmartSpeech™
                    </span>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E5EFE9] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#4A6057]">
                    30 días de prueba en casa
                  </span>
                  <button
                    type="button"
                    onClick={() => openBookingFor('Información sobre Phonak Slim Lumity')}
                    className="cursor-pointer text-sm font-bold text-[#0E382C] hover:text-[#185340] underline underline-offset-4"
                  >
                    Preguntar por este modelo →
                  </button>
                </div>
              </article>

            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          5. SECCIÓN "SIN PRISAS, CON EL TIEMPO QUE NECESITES"
          Equipo audiológico con formato horizontal nítido y cercano
      ============================================================ */}
      <section id="equipo" aria-labelledby="equipo-heading" className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Columna Izquierda: Mensaje y filosofía de atención */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs sm:text-sm font-bold text-[#B87319] uppercase tracking-wider block">
              Trato humano y cercano
            </span>
            <h2 
              id="equipo-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0E382C] tracking-tight leading-tight"
            >
              Sin prisas, <br />
              con todo el tiempo que necesites
            </h2>
            <p className="text-base sm:text-lg text-[#2A443A] leading-relaxed">
              Sabemos que dar el paso de revisar tu oído o probar un audífono genera dudas. En AudioMurcia te atendemos los mismos profesionales desde el primer día, explicándote cada detalle con total transparencia.
            </p>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#EDF5F0] border-2 border-[#D5E7DC] flex items-start gap-3.5">
              <span className="w-10 h-10 rounded-full bg-[#0E382C] text-white flex items-center justify-center shrink-0 font-bold" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </span>
              <div>
                <p className="text-sm sm:text-base font-bold text-[#0E382C]">
                  Audiología Independiente (Red R.E.A.L.)
                </p>
                <p className="text-xs sm:text-sm text-[#405850] mt-1 leading-relaxed">
                  No tenemos compromisos con grandes cadenas ni objetivos de venta forzados. Solo te recomendamos lo que realmente necesitas.
                </p>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Tarjetas del Equipo con formato horizontal */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Belén Chacón */}
            <article className="bg-white rounded-2xl p-4 sm:p-5 border-2 border-[#D5E7DC] shadow-sm flex items-center gap-4 sm:gap-6">
              <img
                src="https://images.unsplash.com/photo-1594824813626-96a92f254b73?auto=format&fit=crop&w=300&q=80"
                alt="Retrato de Belén Chacón, audióloga y audioprotesista titular"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-[#D5E7DC] shrink-0 aspect-square"
              />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0E382C]">Belén Chacón</h3>
                <p className="text-sm font-bold text-[#B87319] mb-1">Audióloga y Audioprotesista Titular</p>
                <p className="text-xs sm:text-sm text-[#4A6057] leading-relaxed">
                  Más de 15 años cuidando la audición de familias en Murcia con dedicación y cariño.
                </p>
              </div>
            </article>

            {/* Francisco Gambín */}
            <article className="bg-white rounded-2xl p-4 sm:p-5 border-2 border-[#D5E7DC] shadow-sm flex items-center gap-4 sm:gap-6">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80"
                alt="Retrato de Francisco Gambín, técnico especialista en audiología clínica"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-[#D5E7DC] shrink-0 aspect-square"
              />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#0E382C]">Francisco Gambín</h3>
                <p className="text-sm font-bold text-[#B87319] mb-1">Audiólogo Clínico & Calibración</p>
                <p className="text-xs sm:text-sm text-[#4A6057] leading-relaxed">
                  Especialista en calibración acústica precisa para que oigas las voces sin molestias.
                </p>
              </div>
            </article>

          </div>

        </div>
      </section>

      {/* ============================================================
          6. SECCIÓN "PIDE CITA EN LAS TORRES DE COTILLAS"
          Caja de contacto en Verde Bosque Oscuro (#0D2E24) de image_5fcb3f.jpg
      ============================================================ */}
      <section id="contacto" aria-labelledby="contacto-heading" className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <div className="bg-[#0D2E24] text-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl border-2 border-[#164436]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            
            {/* Columna Izquierda: Información de acogida y botón de cita */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block bg-[#164436] text-[#E0F2E9] text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full border border-[#27604F]">
                Gabinete en Las Torres de Cotillas
              </span>

              <h2 
                id="contacto-heading"
                className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight"
              >
                Pide tu cita <br />
                o llámanos directamente
              </h2>

              <p className="text-base sm:text-lg text-[#D5E8DF] leading-relaxed">
                ¿Prefieres hablar por teléfono o quieres que te reservemos día y hora? Estamos aquí para ayudarte sin compromiso alguno.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <button
                  type="button"
                  onClick={() => openBookingFor('Cita en el gabinete')}
                  className="cursor-pointer inline-flex items-center justify-center gap-2.5 bg-[#E6F3EC] hover:bg-white text-[#0D2E24] font-black text-base px-7 py-4 rounded-full transition-all shadow-md focus:outline-none focus:ring-4 focus:ring-white/40"
                  aria-label="Pedir cita previa mediante formulario web"
                >
                  <span>Pedir cita por internet</span>
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>

                <a
                  href="https://maps.google.com/?q=Centro+Auditivo+AudioMurcia+Las+Torres+de+Cotillas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer inline-flex items-center justify-center gap-2 bg-[#164436] hover:bg-[#1C5544] text-white font-bold text-base px-6 py-4 rounded-full transition-colors border border-[#27604F] focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-5 h-5 text-[#DDA754]">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Cómo llegar (Mapa)</span>
                </a>
              </div>
            </div>

            {/* Columna Derecha: Dirección, Horario y Teléfonos CLICK-TO-CALL para mayores */}
            <div className="lg:col-span-6 bg-[#071F18] rounded-3xl p-6 sm:p-7 border border-[#184E3E] space-y-6">
              
              {/* Dirección en Las Torres de Cotillas */}
              <div className="space-y-1">
                <p className="text-xs font-bold text-[#A3CCC0] uppercase tracking-wider">Dirección del Gabinete</p>
                <p className="text-base sm:text-lg font-bold text-white">
                  Avenida Reyes Católicos, 27
                </p>
                <p className="text-sm text-[#C5DFD6]">
                  30565 Las Torres de Cotillas (Murcia, España)
                </p>
              </div>

              {/* Horario de Atención */}
              <div className="pt-3 border-t border-[#184E3E]">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <p className="text-xs font-bold text-[#A3CCC0] uppercase tracking-wider">Horario de Gabinete</p>
                  <span className="text-xs font-bold text-[#E0F2E9] bg-[#164436] px-2.5 py-1 rounded-full border border-[#27604F]">
                    Atención con Cita Previa
                  </span>
                </div>
                <div className="text-sm space-y-1.5 text-[#C5DFD6]">
                  <div className="flex justify-between">
                    <span>Lunes a jueves:</span>
                    <strong className="text-white">9:30 a 13:30 y 16:30 a 19:30</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Viernes:</span>
                    <strong className="text-white">9:30 a 13:30</strong>
                  </div>
                  <div className="flex justify-between text-[#8EAAA1]">
                    <span>Sábado y domingo:</span>
                    <span>Cerrado</span>
                  </div>
                </div>
              </div>

              {/* Teléfonos con opción de LLAMADA DIRECTA y WhatsApp para personas mayores */}
              <div className="pt-3 border-t border-[#184E3E] space-y-3">
                <p className="text-xs font-bold text-[#A3CCC0] uppercase tracking-wider">Llámanos por teléfono</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  
                  {/* Fijo */}
                  <div className="bg-[#0E352A] p-3.5 rounded-2xl border border-[#205746] flex flex-col justify-between">
                    <div>
                      <span className="text-xs text-[#A3CCC0] block mb-0.5">Teléfono Fijo</span>
                      <span className="text-lg font-black text-white block">968 02 29 60</span>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      <a
                        href="tel:+34968022960"
                        className="cursor-pointer flex-1 bg-[#195443] hover:bg-[#206954] text-white text-xs font-bold py-2 px-2.5 rounded-lg text-center transition-colors flex items-center justify-center gap-1"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        Llamar
                      </a>
                      <button
                        type="button"
                        onClick={() => handleCopy('968022960', 'fijo')}
                        className="cursor-pointer bg-[#124234] hover:bg-[#185340] text-xs text-[#C5DFD6] py-2 px-2.5 rounded-lg transition-colors font-medium"
                      >
                        {copiedPhone === 'fijo' ? '✓ Copiado' : 'Copiar'}
                      </button>
                    </div>
                  </div>

                  {/* Móvil / WhatsApp */}
                  <div className="bg-[#0E352A] p-3.5 rounded-2xl border border-[#205746] flex flex-col justify-between">
                    <div>
                      <span className="text-xs text-[#A3CCC0] block mb-0.5">Móvil y WhatsApp</span>
                      <span className="text-lg font-black text-white block">611 08 58 41</span>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      <a
                        href="https://wa.me/34611085841"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer flex-1 bg-[#25D366] hover:bg-[#1EBE5D] text-black text-xs font-black py-2 px-2.5 rounded-lg text-center transition-colors flex items-center justify-center gap-1 shadow-2xs"
                      >
                        WhatsApp
                      </a>
                      <button
                        type="button"
                        onClick={() => handleCopy('611085841', 'movil')}
                        className="cursor-pointer bg-[#124234] hover:bg-[#185340] text-xs text-[#C5DFD6] py-2 px-2.5 rounded-lg transition-colors font-medium"
                      >
                        {copiedPhone === 'movil' ? '✓ Copiado' : 'Copiar'}
                      </button>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          BARRA FLOTANTE DE CONTACTO RÁPIDO PARA MÓVILES (Seniors)
      ============================================================ */}
      <aside aria-label="Contacto rápido" className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t-2 border-[#D5E7DC] p-2.5 px-4 flex gap-2.5 shadow-2xl">
        <a
          href="tel:+34968022960"
          className="cursor-pointer flex-1 flex items-center justify-center gap-2 bg-[#EDF5F0] border-2 border-[#0E382C] text-[#0E382C] font-black text-sm py-3 rounded-xl"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 text-[#B87319]">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Llamar: 968 02 29 60
        </a>
        <button
          type="button"
          onClick={() => openBookingFor('Cita previa móvil')}
          className="cursor-pointer flex-1 bg-[#0E382C] text-white font-black text-sm py-3 rounded-xl shadow-xs"
        >
          Pedir cita
        </button>
      </aside>

      {/* ============================================================
          MODAL DE CITA ACCESIBLE, SENCILLO Y CON LETRA GRANDE
      ============================================================ */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border-2 border-[#D5E7DC] relative max-h-[92vh] overflow-y-auto">
            
            {/* Botón grande para cerrar */}
            <button
              type="button"
              onClick={resetBooking}
              className="cursor-pointer absolute top-4 right-4 text-[#4A6057] hover:text-[#0E382C] p-2.5 rounded-full hover:bg-[#EDF5F0] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0E382C]"
              aria-label="Cerrar ventana"
            >
              <svg className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>

            {bookingStep === 1 ? (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <span className="text-xs font-bold text-[#B87319] uppercase tracking-wider">Cita en AudioMurcia</span>
                  <h3 id="modal-title" className="text-2xl font-black text-[#0E382C] mt-1">
                    Solicitar cita previa
                  </h3>
                  <p className="text-sm text-[#405850] mt-1">
                    En Avenida Reyes Católicos, 27 (Las Torres de Cotillas). Te confirmaremos la hora de inmediato.
                  </p>
                </div>

                {/* Motivo de la visita */}
                <div>
                  <label htmlFor="motive" className="block text-sm font-bold text-[#0E382C] mb-1.5">
                    ¿En qué podemos ayudarte?
                  </label>
                  <select
                    id="motive"
                    value={bookingData.motive}
                    onChange={(e) => setBookingData({ ...bookingData, motive: e.target.value })}
                    className="cursor-pointer w-full bg-[#EDF5F0] border-2 border-[#D5E7DC] rounded-xl px-4 py-3 text-base text-[#0E382C] font-semibold focus:ring-3 focus:ring-[#0E382C]/30 focus:outline-none"
                    required
                  >
                    <option value="Revisión auditiva completa (Gratuita)">Revisión auditiva completa (Gratuita)</option>
                    <option value="Prueba de audífonos Phonak 30 días">Prueba de audífonos Phonak (30 días en casa)</option>
                    <option value="Ajuste o reparación de mi audífono actual">Ajuste o reparación de mi audífono actual</option>
                    <option value="Tapones a medida (Para dormir o agua)">Tapones a medida (Para dormir o agua)</option>
                    <option value="Ayudas para escuchar bien la televisión">Ayudas para escuchar bien la televisión</option>
                  </select>
                </div>

                {/* Día y Hora */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="date" className="block text-sm font-bold text-[#0E382C] mb-1.5">
                      Día preferido
                    </label>
                    <input
                      type="date"
                      id="date"
                      value={bookingData.date}
                      onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                      className="cursor-pointer w-full bg-[#EDF5F0] border-2 border-[#D5E7DC] rounded-xl px-3.5 py-3 text-base text-[#0E382C] font-semibold focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-sm font-bold text-[#0E382C] mb-1.5">
                      Hora aproximada
                    </label>
                    <select
                      id="time"
                      value={bookingData.time}
                      onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                      className="cursor-pointer w-full bg-[#EDF5F0] border-2 border-[#D5E7DC] rounded-xl px-3.5 py-3 text-base text-[#0E382C] font-semibold focus:outline-none"
                      required
                    >
                      <option value="09:30">09:30 (Mañana)</option>
                      <option value="10:30">10:30 (Mañana)</option>
                      <option value="11:30">11:30 (Mañana)</option>
                      <option value="12:30">12:30 (Mañana)</option>
                      <option value="16:30">16:30 (Tarde)</option>
                      <option value="17:30">17:30 (Tarde)</option>
                      <option value="18:30">18:30 (Tarde)</option>
                    </select>
                  </div>
                </div>

                {/* Nombre */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-bold text-[#0E382C] mb-1.5">
                    Tu nombre y apellidos
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="Ej. Carmen García"
                    value={bookingData.name}
                    onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                    className="w-full bg-[#EDF5F0] border-2 border-[#D5E7DC] rounded-xl px-4 py-3 text-base text-[#0E382C] placeholder-[#6E877D] font-medium focus:outline-none"
                    required
                  />
                </div>

                {/* Teléfono */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-[#0E382C] mb-1.5">
                    Teléfono donde llamarte
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Ej. 611 08 58 41"
                    value={bookingData.phone}
                    onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                    className="w-full bg-[#EDF5F0] border-2 border-[#D5E7DC] rounded-xl px-4 py-3 text-base text-[#0E382C] placeholder-[#6E877D] font-medium focus:outline-none"
                    required
                  />
                </div>

                {/* Botón de envío grande y fácil */}
                <div className="pt-2 space-y-3">
                  <button
                    type="submit"
                    className="cursor-pointer w-full bg-[#0E382C] hover:bg-[#154E3E] text-white font-black py-4 rounded-full text-base sm:text-lg shadow-md transition-colors"
                  >
                    Confirmar y reservar mi cita
                  </button>

                  <p className="text-xs text-center text-[#405850]">
                    ¿Prefieres pedirla por teléfono? Llámanos sin compromiso al <a href="tel:+34968022960" className="cursor-pointer text-[#0E382C] font-bold underline">968 02 29 60</a>
                  </p>
                </div>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#EDF5F0] text-[#0E382C] flex items-center justify-center mx-auto border-2 border-[#D5E7DC]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-8 h-8">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>

                <h4 className="text-2xl font-black text-[#0E382C]">
                  ¡Cita reservada correctamente!
                </h4>

                <p className="text-base text-[#2E483E] leading-relaxed max-w-sm mx-auto">
                  Muchas gracias, <strong>{bookingData.name || 'estimado paciente'}</strong>. Te esperamos el <strong>{bookingData.date}</strong> a las <strong>{bookingData.time}</strong> en nuestro centro de Las Torres de Cotillas.
                </p>

                <div className="bg-[#EDF5F0] p-4 rounded-2xl text-sm text-[#0E382C] font-semibold border border-[#D5E7DC]">
                  Te llamaremos al {bookingData.phone} si necesitas consultar o cambiar cualquier detalle.
                </div>

                <button
                  type="button"
                  onClick={resetBooking}
                  className="cursor-pointer bg-[#0E382C] text-white font-bold px-8 py-3 rounded-full text-base hover:bg-[#154E3E]"
                >
                  Entendido y cerrar
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

export default Home;