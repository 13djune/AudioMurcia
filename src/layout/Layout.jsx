import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

function Layout({ children, onOpenBooking, isLargeFont, onToggleFontSize }) {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#2A3F38]">
      <Header 
        onOpenBooking={onOpenBooking} 
        isLargeFont={isLargeFont} 
        onToggleFontSize={onToggleFontSize} 
      />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
