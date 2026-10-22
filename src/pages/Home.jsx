import React, { useState } from 'react';

function Home() {
  const [copiedPhone, setCopiedPhone] = useState(null);
  const [submittedBooking, setSubmittedBooking] = useState(false);
  const [highlightBooking, setHighlightBooking] = useState(false);
  const [bookingData, setBookingData] = useState({
    motive: 'Revisión auditiva completa (Gratuita)',
    preferredDay: 'Lunes',
    preferredTime: 'Mañana (9:30 a 13:30)',
    name: '',
    phone: '',
  });

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedPhone(label);
    setTimeout(() => setCopiedPhone(null), 3000);
  };

  const scrollToBooking = (motive) => {
    if (motive) {
      setBookingData((prev) => ({ ...prev, motive }));
    }
    const el = document.getElementById('pedir-cita');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setHighlightBooking(true);
      setTimeout(() => setHighlightBooking(false), 2600);
    }
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setSubmittedBooking(true);

    // Preparar el envío automático de correo para audiomurcia@gmail.com
    const emailTo = 'audiomurcia@gmail.com';
    const emailSubject = `Solicitud de Cita Previa: ${bookingData.name} - ${bookingData.preferredDay}`;
    const emailBody = `Hola equipo de AudioMurcia,

Se ha solicitado una cita previa a través de la web:

• Paciente: ${bookingData.name}
• Teléfono: ${bookingData.phone}
• Servicio: ${bookingData.motive}
• Día preferido: ${bookingData.preferredDay} (Lunes a Jueves)
• Horario preferido: ${bookingData.preferredTime}

Por favor, contactad conmigo para confirmar la cita.

Muchas gracias.`;
    const mailtoUrl = `mailto:${emailTo}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Abrir cliente de correo del usuario con los datos listos para audiomurcia@gmail.com
    try {
      window.location.href = mailtoUrl;
    } catch {
      // Si el navegador bloquea la acción directa, los botones en pantalla permiten abrir Gmail o correo
    }
  };

  const resetBookingForm = () => {
    setSubmittedBooking(false);
    setBookingData({
      motive: 'Revisión auditiva completa (Gratuita)',
      preferredDay: 'Lunes',
      preferredTime: 'Mañana (9:30 a 13:30)',
      name: '',
      phone: '',
    });
  };

  return (
    <div className="bg-white text-[#431407] selection:bg-[#FED7AA] selection:text-[#7C2D12]">
      
      {/* ============================================================
          1. HERO SECTION
          Paleta cálida en tonos naranjas y terracota
      ============================================================ */}
      <section aria-labelledby="hero-heading" className="max-w-6xl mx-auto px-4 sm:px-6 pt-5 pb-10 sm:pb-14">
        <div className="bg-[#FFF7ED] rounded-3xl p-6 sm:p-10 md:p-12 border-2 border-[#FED7AA] relative overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Columna Izquierda: Mensaje claro y botones grandes */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-[#FED7AA] shadow-2xs">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EA580C]"></span>
                <span className="text-xs sm:text-sm font-bold text-[#7C2D12]">
                  Centro Auditivo en Las Torres de Cotillas
                </span>
              </div>

              <h1 
                id="hero-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-black text-[#431407] leading-[1.15] tracking-tight"
              >
                Tu audición, <br />
                <span className="text-[#EA580C]">en las mejores manos</span>
              </h1>

              <p className="text-base sm:text-lg text-[#5D3525] leading-relaxed max-w-xl">
                Te atendemos en persona, sin prisas y dedicándote todo el tiempo que necesites. Realizamos revisiones completas y puedes probar tu audífono Phonak <strong>durante 30 días en tu casa sin compromiso</strong>.
              </p>

              {/* Botones de acción principales con scroll directo al formulario */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <button
                  type="button"
                  onClick={() => scrollToBooking('Revisión auditiva completa (Gratuita)')}
                  className="cursor-pointer inline-flex items-center justify-center gap-2.5 bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-base sm:text-lg px-7 py-4 rounded-full transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-[#EA580C]/30"
                  aria-label="Bajar a pedir cita previa gratuita"
                >
                  <span>Pedir cita gratuita</span>
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>

                <a
                  href="tel:+34968022960"
                  className="cursor-pointer inline-flex items-center justify-center gap-2 bg-white hover:bg-[#FFF7ED] border-2 border-[#EA580C] text-[#7C2D12] font-bold text-base sm:text-lg px-6 py-4 rounded-full transition-colors shadow-2xs focus:outline-none focus:ring-4 focus:ring-[#EA580C]/20"
                  aria-label="Llamar directamente al 968 02 29 60"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 text-[#EA580C]" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>968 02 29 60</span>
                </a>
              </div>

              {/* Puntos de tranquilidad */}
              <div className="pt-2 flex flex-wrap gap-y-2 gap-x-4 text-xs sm:text-sm font-semibold text-[#7C2D12]">
                <span className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-[#EA580C] text-white flex items-center justify-center text-[10px] font-bold">✓</span>
                  Revisión 100% gratuita
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-[#EA580C] text-white flex items-center justify-center text-[10px] font-bold">✓</span>
                  30 días de prueba en casa
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-[#EA580C] text-white flex items-center justify-center text-[10px] font-bold">✓</span>
                  Ven con tu acompañante
                </span>
              </div>
            </div>

            {/* Columna Derecha: Foto auténtica enmarcada */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-[#FED7AA] aspect-[4/3] bg-[#FFEDD5]">
                <img
                  src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?auto=format&fit=crop&w=1000&q=80"
                  alt="Pareja de mayores sonriendo en la consulta audiológica"
                  className="w-full h-full object-cover"
                  loading="eager"
                />

                {/* Badge de Horario SIN VIERNES */}
                <div 
                  className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-md border border-[#FED7AA] flex items-center gap-3 text-xs sm:text-sm"
                  role="status"
                >
                  <span className="w-3 h-3 rounded-full bg-[#EA580C] shrink-0" aria-hidden="true"></span>
                  <div>
                    <p className="font-bold text-[#431407]">Horario del Gabinete</p>
                    <p className="text-[#5D3525] font-medium">Lunes a Jueves: 9:30–13:30 y 16:30–19:30 <br /><span className="text-[#EA580C] font-bold">Viernes a Domingo: Cerrado</span></p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Sellos de Confianza Oficiales al pie del Hero */}
          <div className="mt-8 pt-6 border-t-2 border-[#FED7AA] grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3.5 bg-white/90 p-3.5 rounded-xl border border-[#FED7AA]">
              <span className="w-10 h-10 rounded-full bg-[#FFF7ED] border border-[#FED7AA] flex items-center justify-center text-[#EA580C] shrink-0 font-bold" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </span>
              <div>
                <p className="font-bold text-sm text-[#431407]">Centro Especializado Phonak</p>
                <p className="text-xs text-[#6B4334]">Formación oficial continua y recambios originales</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5 bg-white/90 p-3.5 rounded-xl border border-[#FED7AA]">
              <span className="w-10 h-10 rounded-full bg-[#FFF7ED] border border-[#FED7AA] flex items-center justify-center text-[#EA580C] shrink-0 font-bold" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
              </span>
              <div>
                <p className="font-bold text-sm text-[#431407]">Miembro de la Red R.E.A.L.</p>
                <p className="text-xs text-[#6B4334]">Audiólogos libres e independientes sin marcas impuestas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CINTILLO DE GARANTÍAS CLARAS
      ============================================================ */}
      <section aria-label="Garantías del paciente" className="border-y border-[#FED7AA] bg-[#FFFBF7] py-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-around gap-4 text-xs sm:text-sm font-bold text-[#431407]">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#EA580C]"></span>
            Test auditivo clínico gratuito
          </span>
          <span className="hidden sm:inline text-[#FED7AA]">|</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#EA580C]"></span>
            Audífonos recargables Phonak
          </span>
          <span className="hidden sm:inline text-[#FED7AA]">|</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#EA580C]"></span>
            Tapones a medida para baño y descanso
          </span>
          <span className="hidden md:inline text-[#FED7AA]">|</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#EA580C]"></span>
            Adaptadores para oír bien la televisión
          </span>
        </div>
      </section>

      {/* ============================================================
          2. SECCIÓN "DEL TEST AUDITIVO AL AUDÍFONO AJUSTADO"
          4 Tarjetas elevadas con tonos cálidos y anaranjados
      ============================================================ */}
      <section id="servicios" aria-labelledby="servicios-heading" className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="text-center sm:text-left max-w-2xl mb-10">
          <span className="text-xs sm:text-sm font-bold text-[#EA580C] uppercase tracking-wider block mb-1">
            Nuestros servicios en el gabinete
          </span>
          <h2 
            id="servicios-heading" 
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#431407] tracking-tight leading-tight"
          >
            Del test auditivo al audífono ajustado
          </h2>
          <p className="mt-2 text-base text-[#5D3525] leading-relaxed">
            Todo el proceso en un solo centro, con el mismo equipo de audiólogos de principio a fin.
          </p>
        </div>

        {/* Cuadrícula de 4 Tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          
          {/* Tarjeta 1 */}
          <article className="bg-[#FFF7ED] rounded-3xl p-6 sm:p-7 border-2 border-[#FED7AA] flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#FED7AA] flex items-center justify-center text-[#EA580C] mb-5 shadow-2xs" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-6 h-6">
                  <path d="M4 16h4l3-9 6 18 5-13 4 8h2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#431407] mb-3">
                Exploración audiológica
              </h3>
              <p className="text-sm sm:text-base text-[#5D3525] leading-relaxed">
                Pruebas indoloras para saber con exactitud cómo funciona tu oído hoy, con resultados claros que te explicamos con paciencia y en persona.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-[#FED7AA]">
              <button
                type="button"
                onClick={() => scrollToBooking('Revisión auditiva gratuita')}
                className="cursor-pointer w-full text-center font-bold text-sm text-[#EA580C] hover:text-[#9A3412] underline underline-offset-4"
              >
                Pedir revisión gratis →
              </button>
            </div>
          </article>

          {/* Tarjeta 2: Destacada en Terracota / Naranja Oscuro */}
          <article className="bg-[#7C2D12] text-white rounded-3xl p-6 sm:p-7 border-2 border-[#7C2D12] flex flex-col justify-between shadow-lg lg:-translate-y-2 transition-transform">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#9A3412] flex items-center justify-center text-[#FED7AA] mb-3" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-6 h-6">
                  <path d="M4 16h4l3-9 6 18 5-13 4 8h2" />
                </svg>
              </div>
              <span className="inline-block bg-[#9A3412] text-[#FFEDD5] text-xs font-bold px-3 py-1 rounded-full mb-3">
                ★ 30 Días de Prueba
              </span>
              <h3 className="text-xl font-bold text-white mb-3">
                Audífonos para cada pérdida
              </h3>
              <p className="text-sm sm:text-base text-[#FED7AA]/90 leading-relaxed">
                Elegimos el audífono idóneo para ti, lo calibramos a tu gusto y <strong>te lo llevas a casa durante 30 días para probarlo</strong> en tu día a día sin compromiso de compra.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-[#9A3412]">
              <button
                type="button"
                onClick={() => scrollToBooking('Prueba de audífonos 30 días')}
                className="cursor-pointer w-full bg-[#FFF7ED] hover:bg-white text-[#7C2D12] text-sm font-bold py-3 rounded-xl transition-colors text-center shadow-xs"
              >
                Probar 30 días gratis
              </button>
            </div>
          </article>

          {/* Tarjeta 3 */}
          <article className="bg-[#FFF7ED] rounded-3xl p-6 sm:p-7 border-2 border-[#FED7AA] flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#FED7AA] flex items-center justify-center text-[#EA580C] mb-5 shadow-2xs" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-6 h-6">
                  <path d="M4 16h4l3-9 6 18 5-13 4 8h2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#431407] mb-3">
                Tapones a medida
              </h3>
              <p className="text-sm sm:text-base text-[#5D3525] leading-relaxed">
                Moldes anatómicos hechos con la forma exacta de tu oído. Ideales para protegerte del agua en la piscina y ducha, o para dormir tranquilamente sin ruidos.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-[#FED7AA]">
              <button
                type="button"
                onClick={() => scrollToBooking('Tapones para oídos a medida')}
                className="cursor-pointer w-full text-center font-bold text-sm text-[#EA580C] hover:text-[#9A3412] underline underline-offset-4"
              >
                Información de tapones →
              </button>
            </div>
          </article>

          {/* Tarjeta 4 */}
          <article className="bg-[#FFF7ED] rounded-3xl p-6 sm:p-7 border-2 border-[#FED7AA] flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#FED7AA] flex items-center justify-center text-[#EA580C] mb-5 shadow-2xs" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-6 h-6">
                  <path d="M4 16h4l3-9 6 18 5-13 4 8h2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#431407] mb-3">
                Ayudas para la TV
              </h3>
              <p className="text-sm sm:text-base text-[#5D3525] leading-relaxed">
                Accesorios inalámbricos para escuchar la televisión con total claridad directamente en tus audífonos sin tener que subir el volumen para el resto de la casa.
              </p>
            </div>
            <div className="pt-6 mt-4 border-t border-[#FED7AA]">
              <button
                type="button"
                onClick={() => scrollToBooking('Ayudas auditivas para televisión')}
                className="cursor-pointer w-full text-center font-bold text-sm text-[#EA580C] hover:text-[#9A3412] underline underline-offset-4"
              >
                Ver accesorios de TV →
              </button>
            </div>
          </article>

        </div>
      </section>

      {/* ============================================================
          3. SECCIÓN "ASÍ ES TU PRIMERA VISITA"
          Proceso en 3 pasos conectados y claros sin números repetidos
      ============================================================ */}
      <section id="primera-visita" aria-labelledby="visita-heading" className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 border-t-2 border-[#FED7AA]">
        <div className="max-w-2xl mb-12">
          <span className="text-xs sm:text-sm font-bold text-[#EA580C] uppercase tracking-wider block mb-1">
            Tu recorrido con nosotros
          </span>
          <h2 
            id="visita-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#431407] tracking-tight leading-tight"
          >
            Así es tu primera visita
          </h2>
          <p className="mt-2 text-base sm:text-lg text-[#5D3525] leading-relaxed">
            Una experiencia cercana, tranquila y transparente desde el primer minuto.
          </p>
        </div>

        {/* Proceso en 3 Etapas Conectadas */}
        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-8 right-8 -translate-y-8 h-1 bg-gradient-to-r from-[#FED7AA] via-[#EA580C]/40 to-[#FED7AA] z-0" aria-hidden="true"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            
            {/* Etapa 1 */}
            <div className="bg-white rounded-3xl p-7 border-2 border-[#FED7AA] shadow-sm hover:shadow-md transition-all flex flex-col justify-between group hover:border-[#EA580C]">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFF7ED] text-[#7C2D12] border-2 border-[#FED7AA] flex items-center justify-center group-hover:bg-[#EA580C] group-hover:text-white transition-colors shadow-2xs">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider bg-[#FFF7ED] text-[#7C2D12] px-3.5 py-1.5 rounded-full border border-[#FED7AA]">
                    Inicio
                  </span>
                </div>

                <h3 className="text-2xl font-black text-[#431407] mb-3 group-hover:text-[#EA580C] transition-colors">
                  Te escuchamos
                </h3>

                <p className="text-base text-[#5D3525] leading-relaxed">
                  Charlamos tranquilamente sobre cómo oyes en tu día a día: en reuniones familiares, viendo la tele o paseando. Entendemos tus necesidades antes de hacer cualquier prueba.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#FFEDD5] flex items-center gap-2 text-xs font-bold text-[#EA580C]">
                <span className="w-2 h-2 rounded-full bg-[#EA580C]"></span>
                Sin prisas ni compromisos
              </div>
            </div>

            {/* Etapa 2 */}
            <div className="bg-white rounded-3xl p-7 border-2 border-[#EA580C]/40 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group hover:border-[#EA580C] relative">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#EA580C] text-white text-[11px] font-bold px-3 py-0.5 rounded-full shadow-xs">
                Clínico e indoloro
              </div>
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFF7ED] text-[#EA580C] border-2 border-[#FED7AA] flex items-center justify-center group-hover:bg-[#EA580C] group-hover:text-white transition-colors shadow-2xs">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                      <line x1="12" y1="19" x2="12" y2="22" />
                    </svg>
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider bg-[#FFF7ED] text-[#EA580C] px-3.5 py-1.5 rounded-full border border-[#FED7AA]">
                    Diagnóstico
                  </span>
                </div>

                <h3 className="text-2xl font-black text-[#431407] mb-3 group-hover:text-[#EA580C] transition-colors">
                  Medimos tu oído
                </h3>

                <p className="text-base text-[#5D3525] leading-relaxed">
                  Realizamos una revisión otoscópica y un estudio audiológico indoloro. Te explicamos cada resultado con un gráfico comprensible, mostrándote cómo está tu salud auditiva.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#FFEDD5] flex items-center gap-2 text-xs font-bold text-[#EA580C]">
                <span className="w-2 h-2 rounded-full bg-[#EA580C]"></span>
                Explicación clara en persona
              </div>
            </div>

            {/* Etapa 3 */}
            <div className="bg-[#7C2D12] text-white rounded-3xl p-7 border-2 border-[#7C2D12] shadow-md hover:shadow-xl transition-all flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#9A3412] text-[#FFEDD5] border-2 border-[#C2410C] flex items-center justify-center group-hover:bg-white group-hover:text-[#7C2D12] transition-colors shadow-2xs">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider bg-[#9A3412] text-[#FFEDD5] px-3.5 py-1.5 rounded-full border border-[#C2410C]">
                    Solución
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white mb-3">
                  Adaptamos y acompañamos
                </h3>

                <p className="text-base text-[#FED7AA]/90 leading-relaxed">
                  Si necesitas audífono, lo ajustamos exactamente a tu curva auditiva. <strong>Te lo llevas a casa durante 30 días para probarlo</strong> con tu familia y televisión antes de decidir.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#9A3412] flex items-center gap-2 text-xs font-bold text-[#FED7AA]">
                <span className="w-2 h-2 rounded-full bg-[#FED7AA]"></span>
                30 días de prueba gratuita garantizados
              </div>
            </div>

          </div>
        </div>

        {/* Caja de tranquilidad para personas mayores */}
        <div className="mt-10 bg-[#FFF7ED] p-5 sm:p-6 rounded-3xl border-2 border-[#FED7AA] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-center gap-3.5">
            <span className="w-10 h-10 rounded-2xl bg-[#EA580C] text-white flex items-center justify-center font-bold text-base shrink-0 shadow-2xs">✓</span>
            <div>
              <p className="text-base sm:text-lg font-bold text-[#431407]">
                Puedes venir acompañado de tus familiares
              </p>
              <p className="text-xs sm:text-sm text-[#5D3525]">
                Estaremos encantados de explicar el resultado a ti y a tus hijos o pareja.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => scrollToBooking('Primera visita auditiva')}
            className="cursor-pointer w-full sm:w-auto bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-sm px-6 py-3.5 rounded-full transition-colors shrink-0 shadow-xs"
          >
            Reservar mi primera visita →
          </button>
        </div>
      </section>

      {/* ============================================================
          4. SECCIÓN "AUDÍFONOS"
          Grid asimétrico sin hueco entre tarjetas
      ============================================================ */}
      <section id="audifonos" aria-labelledby="audifonos-heading" className="bg-[#FFF7ED]/70 py-14 sm:py-20 border-t-2 border-[#FED7AA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          <div className="max-w-2xl mb-10">
            <span className="text-xs sm:text-sm font-bold text-[#EA580C] uppercase tracking-wider block mb-1">
              Tecnología suiza Phonak
            </span>
            <h2 
              id="audifonos-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#431407] tracking-tight leading-tight"
            >
              Audífonos fáciles de usar que se adaptan a tu vida
            </h2>
            <p className="mt-2 text-base sm:text-lg text-[#5D3525] leading-relaxed">
              Olvídate de cambiar pilas diminutas y de ruidos molestos. Trabajamos con los modelos Phonak más cómodos y discretos del mercado.
            </p>
          </div>

          {/* Grid Asimétrico: Tarjeta grande izquierda + 2 pequeñas apiladas derecha */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* Columna Izquierda: Tarjeta Grande Destacada (Phonak Audéo Lumity) */}
            <article className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#FED7AA] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="bg-[#FFF7ED] text-[#7C2D12] text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full border border-[#FED7AA]">
                    El más recomendado para el día a día
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#EA580C] flex items-center gap-1">
                    ★ Máxima nitidez vocal
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#431407] mb-2">
                  Phonak Audéo Lumity
                </h3>

                <p className="text-base text-[#5D3525] mb-6 leading-relaxed">
                  Diseñado para que entiendas perfectamente las conversaciones en restaurantes familiares, reuniones con amigos o viendo la tele, reduciendo el ruido de fondo automáticamente.
                </p>

                {/* Contenedor multimedia con Aspect Ratio explícito y beneficios visuales */}
                <div className="bg-[#FFF7ED] border border-[#FED7AA] rounded-2xl p-6 aspect-[16/10] flex flex-col justify-between">
                  <div className="flex justify-between items-center text-xs sm:text-sm font-bold text-[#431407]">
                    <span className="bg-white px-3 py-1 rounded-full shadow-2xs">Recargable (sin pilas)</span>
                    <span className="bg-white px-3 py-1 rounded-full shadow-2xs">Resistente al sudor y lluvia</span>
                  </div>

                  <div className="my-auto py-2">
                    <ul className="space-y-2.5 text-sm sm:text-base font-medium text-[#431407]">
                      <li className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#EA580C] text-white flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                        <span><strong>Claridad vocal inmediata:</strong> amplifica la voz de las personas que te hablan.</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#EA580C] text-white flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                        <span><strong>Batería de todo el día:</strong> se carga por la noche en su estuche como un teléfono.</span>
                      </li>
                      <li className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-[#EA580C] text-white flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                        <span><strong>Conexión directa:</strong> atiende llamadas del móvil con solo tocar tu oreja.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/80 p-2.5 rounded-xl text-xs sm:text-sm text-[#6B4334] text-center font-medium">
                    Disponible en varios tonos discretos para disimularse con tu cabello y piel
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-[#FED7AA] flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-sm font-semibold text-[#7C2D12]">
                  Pruébalo gratis durante 30 días en tu propia casa
                </span>
                <button
                  type="button"
                  onClick={() => scrollToBooking('Prueba de Phonak Audéo Lumity')}
                  className="cursor-pointer w-full sm:w-auto bg-[#EA580C] hover:bg-[#C2410C] text-white font-bold text-sm px-6 py-3 rounded-full transition-colors text-center shadow-xs"
                >
                  Solicitar prueba de Lumity
                </button>
              </div>
            </article>

            {/* Columna Derecha: 2 Tarjetas Pequeñas Apiladas (flex-1 uniforme sin hueco) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              
              {/* Tarjeta Pequeña 1: Phonak Audéo Fit */}
              <article className="flex-1 bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#FED7AA] shadow-sm flex flex-col justify-between hover:border-[#EA580C] transition-all">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-xs font-bold text-[#EA580C] uppercase tracking-wider bg-[#FFF7ED] px-3 py-1 rounded-full border border-[#FED7AA]">
                      Salud y Audición
                    </span>
                    <span className="text-xs font-bold text-[#7C2D12] bg-[#FFF7ED] px-3 py-1 rounded-full">
                      Sensor de pulso
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#431407]">Phonak Audéo Fit</h3>
                      <p className="text-sm sm:text-base text-[#5D3525] mt-2 leading-relaxed">
                        Combina la nitidez auditiva de Phonak con un sensor biométrico que mide tu ritmo cardíaco y pasos diarios para cuidar tu salud de forma activa.
                      </p>
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-[#FFF7ED] border border-[#FED7AA] flex items-center justify-center shrink-0 text-[#EA580C] shadow-2xs aspect-square" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-8 h-8">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                      </svg>
                    </div>
                  </div>

                  {/* Bloque de prestaciones */}
                  <div className="mt-4 bg-[#FFFBF7] p-3.5 rounded-xl border border-[#FED7AA] grid grid-cols-2 gap-2 text-xs font-semibold text-[#7C2D12]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]"></span>
                      Pulsómetro en oído
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]"></span>
                      Contador de pasos
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]"></span>
                      App myPhonak
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]"></span>
                      Batería recargable
                    </span>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#FFEDD5] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#6B4334]">
                    30 días de prueba en casa
                  </span>
                  <button
                    type="button"
                    onClick={() => scrollToBooking('Información sobre Phonak Audéo Fit')}
                    className="cursor-pointer text-sm font-bold text-[#EA580C] hover:text-[#7C2D12] underline underline-offset-4"
                  >
                    Preguntar por este modelo →
                  </button>
                </div>
              </article>

              {/* Tarjeta Pequeña 2: Phonak Slim Lumity */}
              <article className="flex-1 bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#FED7AA] shadow-sm flex flex-col justify-between hover:border-[#EA580C] transition-all">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-xs font-bold text-[#7C2D12] uppercase tracking-wider bg-[#FFF7ED] px-3 py-1 rounded-full border border-[#FED7AA]">
                      Diseño Ergonómico
                    </span>
                    <span className="text-xs font-bold text-[#EA580C] bg-[#FFF7ED] px-3 py-1 rounded-full border border-[#FED7AA]">
                      Ideal con gafas
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#431407]">Phonak Slim Lumity</h3>
                      <p className="text-sm sm:text-base text-[#5D3525] mt-2 leading-relaxed">
                        Su curvatura exclusiva de 7° se amolda de forma natural tras el pabellón auditivo, ofreciendo máxima sujeción y discreción total para usuarios de gafas.
                      </p>
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-[#FFF7ED] border border-[#FED7AA] flex items-center justify-center shrink-0 text-[#EA580C] shadow-2xs aspect-square" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-8 h-8">
                        <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z" />
                        <path d="m14 7 3 3" />
                      </svg>
                    </div>
                  </div>

                  {/* Bloque de prestaciones */}
                  <div className="mt-4 bg-[#FFFBF7] p-3.5 rounded-xl border border-[#FED7AA] grid grid-cols-2 gap-2 text-xs font-semibold text-[#7C2D12]">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]"></span>
                      Forma curvada 7°
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]"></span>
                      Comodidad con patillas
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]"></span>
                      Estuche de carga Qi
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C]"></span>
                      Audio SmartSpeech™
                    </span>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#FFEDD5] flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#6B4334]">
                    30 días de prueba en casa
                  </span>
                  <button
                    type="button"
                    onClick={() => scrollToBooking('Información sobre Phonak Slim Lumity')}
                    className="cursor-pointer text-sm font-bold text-[#EA580C] hover:text-[#7C2D12] underline underline-offset-4"
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
            <span className="text-xs sm:text-sm font-bold text-[#EA580C] uppercase tracking-wider block">
              Trato humano y cercano
            </span>
            <h2 
              id="equipo-heading"
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#431407] tracking-tight leading-tight"
            >
              Sin prisas, <br />
              con todo el tiempo que necesites
            </h2>
            <p className="text-base sm:text-lg text-[#5D3525] leading-relaxed">
              Sabemos que dar el paso de revisar tu oído o probar un audífono genera dudas. En AudioMurcia te atendemos los mismos profesionales desde el primer día, explicándote cada detalle con total transparencia.
            </p>

            <div className="p-4 sm:p-5 rounded-2xl bg-[#FFF7ED] border-2 border-[#FED7AA] flex items-start gap-3.5">
              <span className="w-10 h-10 rounded-2xl bg-[#EA580C] text-white flex items-center justify-center shrink-0 font-bold" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </span>
              <div>
                <p className="text-sm sm:text-base font-bold text-[#431407]">
                  Audiología Independiente (Red R.E.A.L.)
                </p>
                <p className="text-xs sm:text-sm text-[#6B4334] mt-1 leading-relaxed">
                  No tenemos compromisos con grandes cadenas ni objetivos de venta forzados. Solo te recomendamos lo que realmente necesitas.
                </p>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Tarjetas del Equipo con formato horizontal */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Belén Chacón */}
            <article className="bg-white rounded-2xl p-4 sm:p-5 border-2 border-[#FED7AA] shadow-sm flex items-center gap-4 sm:gap-6">
              <img
                src="https://images.unsplash.com/photo-1594824813626-96a92f254b73?auto=format&fit=crop&w=300&q=80"
                alt="Retrato de Belén Chacón, audióloga y audioprotesista titular"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-[#FED7AA] shrink-0 aspect-square"
              />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#431407]">Belén Chacón</h3>
                <p className="text-sm font-bold text-[#EA580C] mb-1">Audióloga y Audioprotesista Titular</p>
                <p className="text-xs sm:text-sm text-[#6B4334] leading-relaxed">
                  Más de 15 años cuidando la audición de familias en Murcia con dedicación y cariño.
                </p>
              </div>
            </article>

            {/* Francisco Gambín */}
            <article className="bg-white rounded-2xl p-4 sm:p-5 border-2 border-[#FED7AA] shadow-sm flex items-center gap-4 sm:gap-6">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=300&q=80"
                alt="Retrato de Francisco Gambín, técnico especialista en audiología clínica"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-[#FED7AA] shrink-0 aspect-square"
              />
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-[#431407]">Francisco Gambín</h3>
                <p className="text-sm font-bold text-[#EA580C] mb-1">Audiólogo Clínico & Calibración</p>
                <p className="text-xs sm:text-sm text-[#6B4334] leading-relaxed">
                  Especialista en calibración acústica precisa para que oigas las voces sin molestias.
                </p>
              </div>
            </article>

          </div>

        </div>
      </section>

      {/* ============================================================
          6. SECCIÓN "PEDIR CITA" INTEGRADA DIRECTAMENTE EN LA PÁGINA
          Con envío de datos a audiomurcia@gmail.com y tonos cálidos
      ============================================================ */}
      <section id="pedir-cita" aria-labelledby="pedir-cita-heading" className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-20 border-t-2 border-[#FED7AA]">
        <div className={`bg-[#FFF7ED] rounded-3xl p-6 sm:p-10 md:p-12 border-2 transition-all duration-500 shadow-sm ${
          highlightBooking ? 'border-[#EA580C] ring-4 ring-[#EA580C]/40 shadow-2xl scale-[1.008]' : 'border-[#FED7AA]'
        }`}>
          
          {/* Cabecera explicativa */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <span className="text-xs sm:text-sm font-black text-[#EA580C] uppercase tracking-wider bg-white px-4 py-1.5 rounded-full border border-[#FED7AA] shadow-2xs">
              Pide tu cita previa en el gabinete
            </span>
            <h2 
              id="pedir-cita-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-black text-[#431407] mt-3.5 tracking-tight"
            >
              ¿Cómo prefieres pedir tu cita?
            </h2>
            <p className="text-base sm:text-lg text-[#5D3525] mt-2.5">
              Sin trámites complicados. Elige llamar directamente por teléfono o déjanos tus datos en el formulario para remitir tu solicitud directamente a <strong>audiomurcia@gmail.com</strong>.
            </p>

            {/* Aviso destacado: Viernes CERRADO */}
            <div className="mt-4 inline-flex items-center gap-2 bg-[#FFFBF7] border-2 border-[#FED7AA] px-4 py-2 rounded-2xl text-xs sm:text-sm text-[#431407] font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EA580C]"></span>
              <span>Atención de <strong>Lunes a Jueves</strong> (9:30–13:30 y 16:30–19:30) • <span className="text-[#EA580C]">Viernes cerrado</span></span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Opción 1: Llamar por teléfono o WhatsApp (¡La más sencilla y directa!) */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#FED7AA] shadow-xs flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-bold text-[#7C2D12] uppercase tracking-wider bg-[#FFF7ED] px-3 py-1 rounded-full border border-[#FED7AA]">
                  Opción 1: Teléfono directo o WhatsApp
                </span>
                
                <h3 className="text-2xl font-bold text-[#431407] mt-3.5 mb-2">
                  Habla con nosotros al instante
                </h3>
                
                <p className="text-sm sm:text-base text-[#6B4334] leading-relaxed mb-6">
                  Si no quieres escribir ni rellenar formularios, pulsa uno de estos botones. Te atenderemos personalmente para darte tu hora.
                </p>

                <div className="space-y-4">
                  {/* Botón de llamada telefónica */}
                  <a
                    href="tel:+34968022960"
                    className="cursor-pointer w-full flex items-center justify-center gap-3 bg-[#EA580C] hover:bg-[#C2410C] text-white font-black text-lg py-4 px-6 rounded-2xl shadow-md transition-all text-center focus:outline-none focus:ring-4 focus:ring-[#EA580C]/30"
                    aria-label="Llamar directamente al 968 02 29 60"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-6 h-6 text-[#FED7AA]">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>Llamar al 968 02 29 60</span>
                  </a>

                  {/* Botón de WhatsApp */}
                  <a
                    href="https://wa.me/34611085841"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1EBE5D] text-black font-black text-base sm:text-lg py-3.5 px-6 rounded-2xl shadow-md transition-all text-center focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
                    aria-label="Escribir mensaje por WhatsApp al 611 08 58 41"
                  >
                    <span>Escribir por WhatsApp (611 08 58 41)</span>
                  </a>
                </div>
              </div>

              {/* Recordatorio de horario SIN VIERNES */}
              <div className="bg-[#FFFBF7] p-4 rounded-2xl border-2 border-[#FED7AA]">
                <p className="text-xs font-bold text-[#7C2D12] uppercase tracking-wider mb-1">Horario en gabinete:</p>
                <p className="text-sm font-bold text-[#431407]">Lunes a Jueves: 9:30 a 13:30 y 16:30 a 19:30</p>
                <p className="text-sm font-extrabold text-[#EA580C] mt-1">Viernes, Sábado y Domingo: CERRADO</p>
              </div>
            </div>

            {/* Opción 2: Formulario sencillo con envío a audiomurcia@gmail.com */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#FED7AA] shadow-xs flex flex-col justify-between">
              
              {!submittedBooking ? (
                <form onSubmit={handleBookingSubmit} className="space-y-5">
                  <div>
                    <span className="text-xs font-bold text-[#7C2D12] uppercase tracking-wider bg-[#FFF7ED] px-3 py-1 rounded-full border border-[#FED7AA]">
                      Opción 2: Déjanos tus datos en 30 segundos
                    </span>
                    <h3 className="text-2xl font-bold text-[#431407] mt-3">
                      Solicitud de cita previa gratuita
                    </h3>
                    <p className="text-sm text-[#6B4334] mt-1">
                      Los datos se enviarán a <strong>audiomurcia@gmail.com</strong> para llamarte y confirmar tu día y hora.
                    </p>
                  </div>

                  {/* 1. Motivo */}
                  <div>
                    <label htmlFor="form-motive" className="block text-sm font-bold text-[#431407] mb-1.5">
                      1. ¿Qué servicio necesitas?
                    </label>
                    <select
                      id="form-motive"
                      value={bookingData.motive}
                      onChange={(e) => setBookingData({ ...bookingData, motive: e.target.value })}
                      className="cursor-pointer w-full bg-[#FFF7ED] border-2 border-[#FED7AA] rounded-xl px-4 py-3.5 text-base text-[#431407] font-semibold focus:outline-none focus:border-[#EA580C]"
                      required
                    >
                      <option value="Revisión auditiva completa (Gratuita)">Revisión auditiva completa (100% Gratuita)</option>
                      <option value="Prueba de audífonos Phonak 30 días">Prueba de audífonos Phonak (30 días en casa sin compromiso)</option>
                      <option value="Ajuste o reparación de mi audífono actual">Ajuste o reparación de mi audífono actual</option>
                      <option value="Tapones a medida (Agua, dormir o ruido)">Tapones a medida (Agua, dormir o ruido)</option>
                      <option value="Ayudas para escuchar bien la televisión">Ayudas para escuchar bien la televisión</option>
                    </select>
                  </div>

                  {/* 2. Día preferido (Solo Lunes a Jueves con botones fáciles de pulsar) */}
                  <div>
                    <label className="block text-sm font-bold text-[#431407] mb-2">
                      2. Día preferido de visita <span className="text-xs text-[#EA580C] font-bold">(Lunes a Jueves)</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['Lunes', 'Martes', 'Miércoles', 'Jueves'].map((dia) => (
                        <button
                          key={dia}
                          type="button"
                          onClick={() => setBookingData({ ...bookingData, preferredDay: dia })}
                          className={`cursor-pointer py-2.5 px-3 rounded-xl font-bold text-sm text-center border-2 transition-all ${
                            bookingData.preferredDay === dia
                              ? 'bg-[#EA580C] text-white border-[#EA580C] shadow-xs'
                              : 'bg-[#FFF7ED] hover:bg-[#FFEDD5] text-[#7C2D12] border-[#FED7AA]'
                          }`}
                        >
                          {dia}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 3. Franja Horaria (Mañana o Tarde) */}
                  <div>
                    <label className="block text-sm font-bold text-[#431407] mb-2">
                      3. Franja horaria preferida
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {[
                        { id: 'Mañana (9:30 a 13:30)', label: 'Mañanas: 9:30 a 13:30' },
                        { id: 'Tarde (16:30 a 19:30)', label: 'Tardes: 16:30 a 19:30' }
                      ].map((slot) => (
                        <button
                          key={slot.id}
                          type="button"
                          onClick={() => setBookingData({ ...bookingData, preferredTime: slot.id })}
                          className={`cursor-pointer py-2.5 px-3 rounded-xl font-bold text-sm text-center border-2 transition-all ${
                            bookingData.preferredTime === slot.id
                              ? 'bg-[#EA580C] text-white border-[#EA580C] shadow-xs'
                              : 'bg-[#FFF7ED] hover:bg-[#FFEDD5] text-[#7C2D12] border-[#FED7AA]'
                          }`}
                        >
                          {slot.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 4. Nombre y Teléfono en dos columnas */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                    <div>
                      <label htmlFor="form-name" className="block text-sm font-bold text-[#431407] mb-1">
                        4. Tu nombre y apellidos
                      </label>
                      <input
                        type="text"
                        id="form-name"
                        placeholder="Ej. Carmen Gómez"
                        value={bookingData.name}
                        onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                        className="w-full bg-[#FFF7ED] border-2 border-[#FED7AA] rounded-xl px-4 py-3 text-base text-[#431407] placeholder-[#A07060] font-medium focus:outline-none focus:border-[#EA580C]"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="form-phone" className="block text-sm font-bold text-[#431407] mb-1">
                        5. Tu teléfono de contacto
                      </label>
                      <input
                        type="tel"
                        id="form-phone"
                        placeholder="Ej. 611 08 58 41"
                        value={bookingData.phone}
                        onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                        className="w-full bg-[#FFF7ED] border-2 border-[#FED7AA] rounded-xl px-4 py-3 text-base text-[#431407] placeholder-[#A07060] font-medium focus:outline-none focus:border-[#EA580C]"
                        required
                      />
                    </div>
                  </div>

                  {/* Botón de Enviar */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="cursor-pointer w-full bg-[#EA580C] hover:bg-[#C2410C] text-white font-black text-lg py-4 px-6 rounded-2xl shadow-md transition-all text-center focus:outline-none focus:ring-4 focus:ring-[#EA580C]/30"
                    >
                      Enviar solicitud de cita a audiomurcia@gmail.com
                    </button>
                    <p className="text-xs text-center text-[#7C4A38] mt-2">
                      Se enviará el correo a <strong>audiomurcia@gmail.com</strong> y te llamaremos para confirmar la hora exacta.
                    </p>
                  </div>
                </form>
              ) : (
                /* Pantalla de Confirmación de éxito directa con botones de correo */
                <div className="text-center py-6 sm:py-8 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-[#FFF7ED] text-[#EA580C] flex items-center justify-center mx-auto border-2 border-[#FED7AA] shadow-xs">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-8 h-8">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>

                  <div>
                    <span className="text-xs font-black uppercase tracking-wider bg-[#FFF7ED] text-[#EA580C] px-3.5 py-1.5 rounded-full border border-[#FED7AA]">
                      Envío a audiomurcia@gmail.com
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#431407] mt-3">
                      ¡Solicitud registrada con éxito!
                    </h3>
                  </div>

                  <p className="text-base sm:text-lg text-[#6B4334] leading-relaxed max-w-lg mx-auto">
                    Muchas gracias, <strong>{bookingData.name || 'estimado paciente'}</strong>. Hemos preparado tus datos para el <strong>{bookingData.preferredDay} ({bookingData.preferredTime})</strong>.
                  </p>

                  {/* Resumen detallado */}
                  <div className="bg-[#FFF7ED] p-4 sm:p-5 rounded-2xl text-left border-2 border-[#FED7AA] max-w-lg mx-auto space-y-2 text-sm text-[#431407]">
                    <div className="flex justify-between border-b border-[#FED7AA]/70 pb-2">
                      <span className="text-[#7C2D12] font-semibold">Correo de destino:</span>
                      <strong className="text-[#EA580C]">audiomurcia@gmail.com</strong>
                    </div>
                    <div className="flex justify-between border-b border-[#FED7AA]/70 pb-2">
                      <span className="text-[#7C2D12] font-semibold">Paciente:</span>
                      <strong className="text-[#431407]">{bookingData.name}</strong>
                    </div>
                    <div className="flex justify-between border-b border-[#FED7AA]/70 pb-2">
                      <span className="text-[#7C2D12] font-semibold">Teléfono:</span>
                      <strong className="text-[#431407]">{bookingData.phone}</strong>
                    </div>
                    <div className="flex justify-between border-b border-[#FED7AA]/70 pb-2">
                      <span className="text-[#7C2D12] font-semibold">Preferencia:</span>
                      <strong className="text-[#431407]">{bookingData.preferredDay} • {bookingData.preferredTime}</strong>
                    </div>
                    <div className="flex justify-between pt-1">
                      <span className="text-[#7C2D12] font-semibold">Servicio:</span>
                      <strong className="text-[#431407] text-right">{bookingData.motive}</strong>
                    </div>
                  </div>

                  {/* Botones para enviar el email con 1 toque */}
                  <div className="max-w-lg mx-auto space-y-2.5 pt-2">
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=audiomurcia@gmail.com&su=${encodeURIComponent(`Solicitud Cita: ${bookingData.name} (${bookingData.preferredDay})`)}&body=${encodeURIComponent(`Hola AudioMurcia,\n\nSolicito cita previa con los siguientes datos:\n- Paciente: ${bookingData.name}\n- Teléfono: ${bookingData.phone}\n- Servicio: ${bookingData.motive}\n- Día preferido: ${bookingData.preferredDay}\n- Franja horaria: ${bookingData.preferredTime}\n\nPor favor, contactad conmigo para confirmar la hora. ¡Gracias!`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer w-full flex items-center justify-center gap-2.5 bg-[#EA580C] hover:bg-[#C2410C] text-white font-black text-base py-3.5 px-6 rounded-2xl shadow-md transition-all text-center"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-5 h-5">
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      <span>Abrir en Gmail para audiomurcia@gmail.com</span>
                    </a>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      <a
                        href={`mailto:audiomurcia@gmail.com?subject=${encodeURIComponent(`Solicitud Cita: ${bookingData.name} - ${bookingData.preferredDay}`)}&body=${encodeURIComponent(`Hola AudioMurcia,\n\nSolicito cita previa:\n- Paciente: ${bookingData.name}\n- Teléfono: ${bookingData.phone}\n- Servicio: ${bookingData.motive}\n- Día: ${bookingData.preferredDay} (${bookingData.preferredTime})`)}`}
                        className="cursor-pointer flex items-center justify-center gap-2 bg-white hover:bg-[#FFF7ED] border-2 border-[#FED7AA] text-[#7C2D12] font-bold text-sm py-3 px-4 rounded-xl transition-colors shadow-2xs"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-4 h-4 text-[#EA580C]">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                        <span>Abrir otra app de email</span>
                      </a>

                      <a
                        href={`https://wa.me/34611085841?text=${encodeURIComponent(`Hola AudioMurcia, os he solicitado cita previa por email a audiomurcia@gmail.com:\n- Nombre: ${bookingData.name}\n- Teléfono: ${bookingData.phone}\n- Día: ${bookingData.preferredDay} (${bookingData.preferredTime})\n- Servicio: ${bookingData.motive}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-black font-black text-sm py-3 px-4 rounded-xl transition-colors shadow-2xs"
                      >
                        <span>Enviar copia WhatsApp</span>
                      </a>
                    </div>

                    <button
                      type="button"
                      onClick={resetBookingForm}
                      className="cursor-pointer text-xs font-bold text-[#7C2D12] hover:text-[#EA580C] underline underline-offset-4 pt-3 block mx-auto"
                    >
                      ← Cambiar datos o enviar otra solicitud
                    </button>
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          7. SECCIÓN "DÓNDE ESTAMOS" (CONTACTO Y HORARIO SIN VIERNES)
          Caja de contacto en Terracota / Espresso Cálido (#2A150D)
      ============================================================ */}
      <section id="contacto" aria-labelledby="contacto-heading" className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <div className="bg-[#2A150D] text-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl border-2 border-[#431407]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            
            {/* Columna Izquierda: Dirección y mapa */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block bg-[#431407] text-[#FED7AA] text-xs sm:text-sm font-bold px-3.5 py-1.5 rounded-full border border-[#7C2D12]">
                Gabinete en Las Torres de Cotillas
              </span>

              <h2 
                id="contacto-heading"
                className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-tight"
              >
                Dónde encontrarnos <br />
                en Las Torres de Cotillas
              </h2>

              <p className="text-base sm:text-lg text-[#FED7AA]/90 leading-relaxed">
                Estamos en pleno centro, con fácil acceso y aparcamiento cercano. Puedes venir a visitarnos o pedirnos cita previa cuando lo necesites.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <button
                  type="button"
                  onClick={() => scrollToBooking()}
                  className="cursor-pointer inline-flex items-center justify-center gap-2.5 bg-[#FFF7ED] hover:bg-white text-[#431407] font-black text-base px-7 py-4 rounded-full transition-all shadow-md focus:outline-none focus:ring-4 focus:ring-white/40"
                  aria-label="Subir a pedir cita previa"
                >
                  <span>Pedir cita previa</span>
                  <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>

                <a
                  href="https://maps.google.com/?q=Centro+Auditivo+AudioMurcia+Las+Torres+de+Cotillas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer inline-flex items-center justify-center gap-2 bg-[#431407] hover:bg-[#5C1D0B] text-white font-bold text-base px-6 py-4 rounded-full transition-colors border border-[#7C2D12] focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-5 h-5 text-[#F97316]">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Abrir en Google Maps</span>
                </a>
              </div>
            </div>

            {/* Columna Derecha: Dirección, Horario SIN VIERNES y Teléfonos */}
            <div className="lg:col-span-6 bg-[#180A04] rounded-3xl p-6 sm:p-7 border border-[#431407] space-y-6">
              
              {/* Dirección */}
              <div className="space-y-1">
                <p className="text-xs font-bold text-[#FDBA74] uppercase tracking-wider">Dirección Física</p>
                <p className="text-base sm:text-lg font-bold text-white">
                  Avenida Reyes Católicos, 27
                </p>
                <p className="text-sm text-[#FED7AA]/80">
                  30565 Las Torres de Cotillas (Murcia, España)
                </p>
              </div>

              {/* Horario de Atención SIN VIERNES */}
              <div className="pt-3 border-t border-[#431407]">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <p className="text-xs font-bold text-[#FDBA74] uppercase tracking-wider">Horario de Gabinete</p>
                  <span className="text-xs font-bold text-[#FFEDD5] bg-[#431407] px-2.5 py-1 rounded-full border border-[#7C2D12]">
                    Cita Previa
                  </span>
                </div>
                <div className="text-sm space-y-2 text-[#FED7AA]/90">
                  <div className="flex justify-between items-center bg-[#2A150D] p-2.5 rounded-xl border border-[#431407]">
                    <span>Lunes a jueves:</span>
                    <strong className="text-white text-base">9:30 a 13:30 y 16:30 a 19:30</strong>
                  </div>
                  <div className="flex justify-between items-center bg-[#381B10] p-2.5 rounded-xl text-[#FED7AA]">
                    <span className="font-bold">Viernes, Sábado y Domingo:</span>
                    <span className="font-extrabold uppercase bg-[#521B0F] text-[#FFB399] px-2.5 py-0.5 rounded text-xs">CERRADO</span>
                  </div>
                </div>
              </div>

              {/* Teléfonos con opción de LLAMADA DIRECTA y WhatsApp */}
              <div className="pt-3 border-t border-[#431407] space-y-3">
                <p className="text-xs font-bold text-[#FDBA74] uppercase tracking-wider">Teléfonos y Correo de Gabinete</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  
                  {/* Fijo */}
                  <div className="bg-[#2A150D] p-3.5 rounded-2xl border border-[#431407] flex flex-col justify-between">
                    <div>
                      <span className="text-xs text-[#FDBA74] block mb-0.5">Teléfono Fijo</span>
                      <span className="text-lg font-black text-white block">968 02 29 60</span>
                    </div>
                    <div className="flex items-center gap-2 mt-3">
                      <a
                        href="tel:+34968022960"
                        className="cursor-pointer flex-1 bg-[#EA580C] hover:bg-[#C2410C] text-white text-xs font-bold py-2 px-2.5 rounded-lg text-center transition-colors flex items-center justify-center gap-1"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        Llamar
                      </a>
                      <button
                        type="button"
                        onClick={() => handleCopy('968022960', 'fijo')}
                        className="cursor-pointer bg-[#431407] hover:bg-[#5C1D0B] text-xs text-[#FED7AA] py-2 px-2.5 rounded-lg transition-colors font-medium"
                      >
                        {copiedPhone === 'fijo' ? '✓ Copiado' : 'Copiar'}
                      </button>
                    </div>
                  </div>

                  {/* Móvil / WhatsApp */}
                  <div className="bg-[#2A150D] p-3.5 rounded-2xl border border-[#431407] flex flex-col justify-between">
                    <div>
                      <span className="text-xs text-[#FDBA74] block mb-0.5">Móvil y WhatsApp</span>
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
                        className="cursor-pointer bg-[#431407] hover:bg-[#5C1D0B] text-xs text-[#FED7AA] py-2 px-2.5 rounded-lg transition-colors font-medium"
                      >
                        {copiedPhone === 'movil' ? '✓ Copiado' : 'Copiar'}
                      </button>
                    </div>
                  </div>

                </div>

                {/* Email del centro */}
                <div className="bg-[#2A150D] p-3 rounded-2xl border border-[#431407] flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[#FDBA74] block font-medium">Email del gabinete:</span>
                    <a href="mailto:audiomurcia@gmail.com" className="text-white font-bold hover:text-[#EA580C] transition-colors">
                      audiomurcia@gmail.com
                    </a>
                  </div>
                  <a
                    href="mailto:audiomurcia@gmail.com"
                    className="cursor-pointer bg-[#431407] hover:bg-[#5C1D0B] text-white px-3 py-1.5 rounded-lg font-semibold"
                  >
                    Escribir
                  </a>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          BARRA FLOTANTE DE CONTACTO RÁPIDO PARA MÓVILES (Seniors)
      ============================================================ */}
      <aside aria-label="Contacto rápido" className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-white border-t-2 border-[#FED7AA] p-2.5 px-4 flex gap-2.5 shadow-2xl">
        <a
          href="tel:+34968022960"
          className="cursor-pointer flex-1 flex items-center justify-center gap-2 bg-[#FFF7ED] border-2 border-[#EA580C] text-[#7C2D12] font-black text-sm py-3 rounded-xl"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4 text-[#EA580C]">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          Llamar: 968 02 29 60
        </a>
        <button
          type="button"
          onClick={() => scrollToBooking('Cita desde móvil')}
          className="cursor-pointer flex-1 bg-[#EA580C] text-white font-black text-sm py-3 rounded-xl shadow-xs"
        >
          Pedir cita
        </button>
      </aside>

    </div>
  );
}

export default Home;