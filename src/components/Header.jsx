import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faEnvelope, faShop } from '@fortawesome/free-solid-svg-icons';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <HashLink smooth to="/" className="text-2xl font-bold text-orange-500">
          AudioMurcia
        </HashLink>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link smooth to="/productos" className="hover:text-orange-400 flex items-center gap-2">
            <FontAwesomeIcon icon={faShop} />
            Nuestros productos
          </Link>
          <HashLink smooth to="/#contacto" className="hover:text-orange-400 flex items-center gap-2">
            <FontAwesomeIcon icon={faEnvelope} />
            Contacto
          </HashLink>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden focus:outline-none p-2 rounded bg-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="text-orange-500 text-2xl" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-black text-center">
         <Link
            to="/productos"
            className="block text-orange-400 hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            <FontAwesomeIcon icon={faShop} className="mr-2" />
            Productos
          </Link>
          <HashLink
            smooth
            to="/#contacto"
            className="block text-orange-400 hover:underline"
            onClick={() => setMenuOpen(false)}
          >
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            Contacto
          </HashLink>
        </div>
      )}
    </header>
  );
}

export default Header;
