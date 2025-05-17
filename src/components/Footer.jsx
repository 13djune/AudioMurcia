import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className="bg-black text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left">
        <div>
          <h2 className="text-lg font-semibold text-orange-400">AudioMurcia</h2>
          <p className="mt-2 text-sm">C/ San Juan, Murcia</p>
          <p className="text-sm">
            Tel: <a href="tel:+34987654321" className="text-orange-400">987 654 321</a>
          </p>
        </div>
        <div>
          <p className="text-sm">&copy; 2025 AudioMurcia. Todos los derechos reservados.</p>
          <p>
            <a href="/aviso-legal" className="text-orange-400 hover:underline">
              Aviso Legal
            </a>
          </p>
          <div className="flex justify-center md:justify-end gap-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-400">
              <FontAwesomeIcon icon={faFacebookF} className="text-xl" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-orange-400">
              <FontAwesomeIcon icon={faInstagram} className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
