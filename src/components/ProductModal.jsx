import React from 'react';

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-[#D5E7DC] overflow-hidden relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-[#4A6057] hover:text-[#0E382C] text-2xl p-2 rounded-full hover:bg-[#EDF5F0] transition-colors focus:outline-none"
          aria-label="Cerrar detalle de producto"
        >
          &times;
        </button>

        <div className="md:flex p-6 sm:p-8 space-y-6 md:space-y-0 md:space-x-8 items-center">
          <div className="w-full md:w-1/2 aspect-square bg-[#F7FAF8] rounded-2xl p-4 flex items-center justify-center border border-[#D5E7DC]">
            <img 
              src={product.image} 
              alt={product.name} 
              className="max-h-full max-w-full object-contain" 
            />
          </div>

          <div className="flex-1 space-y-3">
            <span className="text-xs font-bold text-[#B87319] uppercase tracking-wider">{product.category}</span>
            <h2 id="modal-product-title" className="text-2xl font-bold text-[#0E382C]">{product.name}</h2>
            <p className="text-sm text-[#405850] leading-relaxed">{product.description}</p>
            <div className="pt-4">
              <a
                href="/#contacto"
                onClick={onClose}
                className="inline-block bg-[#0E382C] hover:bg-[#154E3E] text-white text-xs font-bold px-5 py-2.5 rounded-full transition-colors"
              >
                Consultar disponibilidad en centro
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
