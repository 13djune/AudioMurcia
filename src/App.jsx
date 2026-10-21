import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout.jsx';
import Home from './pages/Home.jsx';
import AvisoLegal from './pages/AvisoLegal.jsx';
import Productos from './pages/Productos.jsx';

function App() {
  const [isLargeFont, setIsLargeFont] = useState(false);

  useEffect(() => {
    if (isLargeFont) {
      document.documentElement.classList.add('large-font');
    } else {
      document.documentElement.classList.remove('large-font');
    }
  }, [isLargeFont]);

  const toggleFontSize = () => {
    setIsLargeFont((prev) => !prev);
  };

  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <Layout isLargeFont={isLargeFont} onToggleFontSize={toggleFontSize}>
            <Home />
          </Layout>
        } 
      />
      <Route 
        path="/productos" 
        element={
          <Layout isLargeFont={isLargeFont} onToggleFontSize={toggleFontSize}>
            <Productos />
          </Layout>
        } 
      />
      <Route 
        path="/aviso-legal" 
        element={
          <Layout isLargeFont={isLargeFont} onToggleFontSize={toggleFontSize}>
            <AvisoLegal />
          </Layout>
        } 
      />
    </Routes>
  );
}

export default App;
