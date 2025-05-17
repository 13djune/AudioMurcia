// src/components/GoogleReviews.jsx
import React, { useEffect } from 'react';

const GoogleReviews = () => {
  useEffect(() => {
    // Forzar carga si aún no lo ha hecho Elfsight
    const elfsightInit = () => {
      if (window.elfsight) {
        window.elfsight.init();
      }
    };
    setTimeout(elfsightInit, 500);
  }, []);

  return (
    <div className="my-12 px-4">
      <div className="elfsight-app-8e5a2260-130c-47e4-b666-c609d8f37176" data-elfsight-app-lazy></div>
    </div>
  );
};

export default GoogleReviews;
