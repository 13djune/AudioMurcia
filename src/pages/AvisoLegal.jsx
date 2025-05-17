import React from 'react';

const AvisoLegal = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20 text-gray-800 leading-relaxed space-y-12">
      <h1 className="text-4xl font-bold text-orange-600 text-center">Aviso Legal</h1>

      {/* SECCIÓN 1 */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Información general</h2>
        <p>Gracias por visitar nuestra web. Esperamos que disfrutes navegando por ella y conociendo el detalle de nuestros productos y servicios.</p>
        <p>En cumplimiento del deber de información contemplado en la normativa vigente sobre Servicios de la Sociedad de la Información y del Comercio Electrónico. Te recomendamos que leas atentamente las presentes condiciones antes de que comiences con su uso.</p>
        <p>
          Responsable: <strong>GABINETE AUDIOLOGICO AUDIOMURCIA, C.B.</strong><br />
          DNI/CIF: E73976615<br />
          Dirección: AVD. REYES CATÓLICOS Nº27, 30565 - LAS TORRES DE COTILLAS (MURCIA)<br />
          Web: <a href="https://audiomurcia.es" className="text-orange-600 hover:underline">audiomurcia.es</a><br />
          Email: <a href="mailto:info@audiomurcia.es" className="text-orange-600 hover:underline">info@audiomurcia.es</a><br />
          Teléfono: <a href="tel:+34968022960" className="text-orange-600 hover:underline">968 022 960</a>
        </p>
      </section>

      {/* SECCIÓN 2 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">1.- CONCEPTO DE USUARIO</h2>
        <p>USUARIO es todo aquel que accede a la web, utilice o no los contenidos o información el ella dispuestos.</p>
        <p>El USUARIO manifiesta y acepta expresamente que el acceso a la web supone en toda su extensión el compromiso inequívoco de cumplimiento de todas y cada una de las condiciones generales de mero acceso y utilización de cualquiera de los contenidos presentados por la web.</p>
        <p>En consecuencia, el Usuario debe leer atentamente el presente Aviso Legal y Política de Privacidad en cada una de las ocasiones en que se proponga utilizar la web, ya que puede sufrir modificaciones.</p>
        <p>En el caso de que pueda surgir alguna duda de la lectura del Aviso Legal y Política de Privacidad, no duden en ponerse en contacto con el titular de la web en la dirección arriba indicada del responsable.</p>
      </section>

      {/* SECCIÓN 3 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">2.- OBJETO</h2>
        <p>El titular de la web, por medio de ésta, pone a disposición del USUARIO el acceso a una serie de contenidos e informaciones que pueden ser prestados por el propio titular o por terceros.</p>
        <p>Asimismo, el titular se reserva el derecho de, en cualquier momento, poder modificar la ubicación en la web de los contenidos que disponga, así como la configuración tanto de los propios contenidos o informaciones como del acceso a los mismos.</p>
      </section>

      {/* SECCIÓN 4 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">3.- CONDICIONES DE ACCESO Y UTILIZACIÓN DE LA WEB</h2>

        <h3 className="font-semibold">3.1.- Acceso y utilización general</h3>
        <p>El USUARIO acepta expresa e inequívocamente que el acceso y utilización de la web no implica ningún tipo de garantía respecto a la idoneidad de los contenidos incluidos para fines particulares.</p>

        <h3 className="font-semibold">3.2.- Uso autorizado</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>No realizar accesos o usos de la web o de sus contenidos, no permitidos o contrarios al objeto de la web y al marco normativo que lo regula.</li>
          <li>Acceder y/o utilizar la web y/o los contenidos dentro de los principios y fines para los que fueron creados. En particular:
            <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
              <li>b.1) no realizar ni intentar realizar actuaciones que puedan dañar la web o sus contenidos;</li>
              <li>b.2) no modificar, manipular o eliminar referencias de propiedad intelectual;</li>
              <li>b.3) no introducir virus ni dañar sistemas del titular o de terceros.</li>
            </ul>
          </li>
          <li>El USUARIO responderá de todos los daños y perjuicios derivados del uso indebido de la web o contenidos.</li>
        </ul>

        <h3 className="font-semibold">3.3.- Contenidos</h3>
        <p>El USUARIO se compromete a no reproducir, copiar, distribuir, permitir el acceso del público, transformar o modificar los CONTENIDOS.</p>
      </section>

      {/* SECCIÓN 5 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">4.- ACTIVIDAD COMERCIAL</h2>
        <p>La mera exposición de productos y/o servicios y la información acerca de los mismos suministrada por el titular o mediante enlaces, tiene una finalidad exclusivamente informativa.</p>
      </section>

      {/* SECCIÓN 6 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">5.- DERECHOS DE PROPIEDAD INDUSTRIAL E INTELECTUAL</h2>
        <p>Todos los contenidos, diseños, textos, gráficos y software están protegidos por las leyes sobre propiedad intelectual. Se prohíbe su reproducción, distribución, modificación o utilización sin autorización expresa.</p>
        <p>Se prohíbe cualquier forma de explotación pública o privada de los elementos dispuestos en la web sin consentimiento del titular.</p>
      </section>

      {/* SECCIÓN 7 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">6.- EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD</h2>
        <h3 className="font-semibold">6.1. Por el funcionamiento de la web</h3>
        <p>No se garantiza la disponibilidad, continuidad ni ausencia de virus o fallos técnicos. No se asume responsabilidad por daños derivados de su uso.</p>
        <h3 className="font-semibold">6.2. Por la utilización de la web</h3>
        <p>El titular no se hace responsable del uso que los USUARIOS o terceros puedan hacer de la web o sus contenidos.</p>
      </section>

      {/* SECCIÓN 8 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">7.- EMPLEO DE COOKIES Y ENLACES</h2>
        <p><strong>7.1.- Cookies:</strong> El USUARIO autoriza expresamente el uso de cookies. Estas podrán ser rechazadas voluntariamente.</p>
        <p><strong>7.2.- Enlaces:</strong> Los enlaces a esta web deben contar con autorización previa. No debe inducirse una relación asociativa inexistente.</p>
      </section>

      {/* SECCIÓN 9 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">8.- NULIDAD PARCIAL</h2>
        <p>Si alguna cláusula es declarada nula, el resto del aviso legal seguirá vigente salvo que afecte a su integridad.</p>
      </section>

      {/* SECCIÓN FINAL */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">9.- INCUMPLIMIENTO, LEY APLICABLE Y JURISDICCIÓN</h2>
        <p>Este aviso legal se rige por la Ley Española. El titular ejercerá las acciones necesarias ante cualquier incumplimiento por parte del USUARIO.</p>
      </section>
    </div>
  );
};

export default AvisoLegal;
