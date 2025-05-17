import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Header />
      
      <main className="flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
