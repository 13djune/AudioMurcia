import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUserCheck, faMicrochip } from '@fortawesome/free-solid-svg-icons'
import GoogleReviews from '../components/Reviews';

function Home() {
    return (
      <div className="pt-15">
        {/* Hero */}
        <section className="flex items-center justify-center bg-gradient-to-br from-orange-500 to-orange-700 text-white text-center px-4 py-24 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Cuidamos tu audición con pasión</h1>
            <p className="text-lg md:text-xl">Especialistas en salud auditiva en Murcia</p>
          </div>
        </section>
  
        {/* Sobre Nosotros */}
        <section id="sobre-nosotros" className="relative py-24 px-6 text-white bg-gradient-to-br from-gray-900 via-purple-900 to-black overflow-hidden">
  <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

  <div className="relative max-w-5xl mx-auto text-center z-10">
    <h2 className="text-4xl md:text-5xl font-bold mb-4">Sobre Nosotros</h2>
    <p className="text-lg md:text-xl mb-12">
    Descubre la experiencia auditiva perfecta en Murcia con AudioMurcia, el centro auditivo líder en la región! Si estás buscando comprar audífonos de alta calidad respaldados por un servicio excepcional, estás en el lugar correcto. 
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className=" flex flex-col items-center bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur-md shadow-lg text-left">
        <FontAwesomeIcon icon={faCalendarAlt} className="text-orange-400 text-3xl mb-4" />
        <div className="text-2xl font-semibold text-orange-400 mb-2">+20 Años</div>
        <p className="text-sm text-gray-200 text-center">Más de dos décadas al servicio de la audición en Murcia.</p>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-center bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur-md shadow-lg text-left">
        <FontAwesomeIcon icon={faUserCheck} className="text-orange-400 text-3xl mb-4" />
        <div className="text-2xl font-semibold text-orange-400 mb-2">Trato Personalizado</div>
        <p className="text-sm text-gray-200 text-center">Te atenderemos tranquila y cómodamente. Nos adaptamos a cada paciente para ofrecerle la mejor solución auditiva.</p>
      </div>

      {/* Card 3 */}
      <div className="flex flex-col items-center bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur-md shadow-lg text-left">
        <FontAwesomeIcon icon={faMicrochip} className="text-orange-400 text-3xl mb-4" />
        <div className="text-2xl font-semibold text-orange-400 mb-2">Tecnología Avanzada</div>
        <p className="text-sm text-gray-200 text-center">Trabajamos con los últimos avances en audífonos y pruebas diagnósticas, para realizar una valoración y ofrecerte la mejor de nuestras soluciones auditivas.</p>
      </div>
    </div>
  </div>
</section>

<section id="equipo" className="bg-white p-20  text-gray-800">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {/* Columna izquierda - título e intro */}
      <div className="md:col-span-1">
        <h2 className="text-4xl font-bold mb-4">Nuestro equipo</h2>
        <p className="text-lg text-gray-600">
        Nuestro equipo de audiólogos altamente capacitados está comprometido en proporcionarte una experiencia auditiva personalizada y satisfactoria.        </p>
      </div>

      {/* Columna derecha - miembros del equipo */}
      <div className="md:col-span-2 grid gap-8 sm:grid-cols-2">
        {/* Persona 1 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="María López"
            className="w-full h-56 object-cover"
          />
          <div className="p-6 space-y-2">
            <h3 className="text-lg font-bold">Belén Chacón</h3>
            <p className="text-sm text-gray-500">Audioprotesista</p>
            <p className="text-sm text-gray-700">
              Experta en adaptación de audífonos y diagnóstico auditivo con más de 15 años de experiencia.
            </p>
            <div className="flex gap-4 mt-4 text-gray-400">
              <a href="#" className="hover:text-orange-500">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="#" className="hover:text-orange-500">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Persona 2 */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Carlos Ruiz"
            className="w-full h-56 object-cover"
          />
          <div className="p-6 space-y-2">
            <h3 className="text-lg font-bold">Francisco Gambin</h3>
            <p className="text-sm text-gray-500">Técnico en Audiología</p>
            <p className="text-sm text-gray-700">
              Encargado de mantenimiento y calibración de equipos auditivos de última generación.
            </p>
            <div className="flex gap-4 mt-4 text-gray-400">
              <a href="#" className="hover:text-orange-500">
                <i className="fab fa-x-twitter"></i>
              </a>
              <a href="#" className="hover:text-orange-500">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  
        {/* Contacto */}
        <section id="contacto" className="p-20 py-25 bg-gray-100 text-gray-800">
    <div className="max-w-6xl mx-auto space-y-12">
    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-orange-600 text-center p-6">Contacto</h2>
  
      {/* Grid de Info de contacto + Horario */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
  
        {/* Columna izquierda — info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Centro Auditivo AudioMurcia</h3>
            <p className="leading-relaxed">
              Av. Reyes Católicos, 27<br />
              30565 Las Torres de Cotillas<br />
              Murcia, España
            </p>
          </div>
  
          <div>
            <h4 className="text-xl font-semibold text-gray-700 mb-2">Teléfonos</h4>
            <ul className="space-y-1">
              <li>
                <a href="tel:+34968022960" className="text-orange-600 hover:underline">968 02 29 60</a>
              </li>
              <li>
                <a href="tel:+34611085841" className="text-orange-600 hover:underline">611 08 58 41</a>
              </li>
            </ul>
          </div>
  
          <div>
            <h4 className="text-xl font-semibold text-gray-700 mb-2">Email</h4>
            <a href="mailto:info@audiomurcia.es" className="text-orange-600 hover:underline">
              info@audiomurcia.es
            </a>
          </div>
        </div>
  
        {/* Columna derecha — horario */}
        <div>
  <h4 className="text-xl font-semibold text-gray-700 mb-4">Horario de atención</h4>
  <table className="w-full text-sm border-collapse rounded-md overflow-hidden shadow-sm bg-white">
    <thead>
      <tr className="bg-orange-500 text-white">
        <th className="py-3 px-4 text-left font-large">Día</th>
        <th className="py-3 px-4 text-left font-large">Horario</th>
      </tr>
    </thead>
    <tbody>
      {[
        ['Lunes', '9:30–13:30, 16:30–19:30'],
        ['Martes', '9:30–13:30, 16:30–19:30'],
        ['Miércoles', '9:30–13:30, 16:30–19:30'],
        ['Jueves', '9:30–13:30, 16:30–19:30'],
        ['Viernes', '9:30–13:30, Cerrado'],
        ['Sábado', 'Cerrado'],
        ['Domingo', 'Cerrado'],
      ].map(([dia, horario]) => (
        <tr key={dia} className="odd:bg-gray-50">
          <td className="py-2 px-4 font-medium text-gray-800">{dia}</td>
          <td className="py-2 px-4">
            {horario.split(',').map((slot, idx) => {
              const trimmed = slot.trim();
              const isCerrado = trimmed.toLowerCase() === 'cerrado';
              return (
                <span
                  key={idx}
                  className={`inline-block px-3 py-1 mr-2 mb-1 rounded-full text-xs font-semibold ${
                    isCerrado
                      ? 'bg-red-100 text-red-600'
                      : 'bg-orange-100 text-orange-800'
                  }`}
                >
                  {trimmed}
                </span>
              );
            })}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      </div>
  
      {/* Mapa abajo 100% width */}
      <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
        <iframe
          title="Ubicación AudioMurcia"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d785.7298860033675!2d-1.2431237!3d38.0256551!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd647f1adadfc151%3A0xc77e90d9bbefdb78!2sCentro%20Auditivo%20AudioMurcia!5e0!3m2!1ses!2ses!4v1747402385046!5m2!1ses!2ses" 
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
  
    
      </div>
    );
  }
  
  export default Home;
  