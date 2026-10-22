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
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl border-2 border-slate-300 overflow-hidden relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-900 hover:text-black text-2xl font-black p-2 rounded-full hover:bg-slate-100 transition-colors focus:outline-none cursor-pointer"
          aria-label="Cerrar detalle de producto"
        >
          &times;
        </button>

        <div className="md:flex p-6 sm:p-8 space-y-6 md:space-y-0 md:space-x-8 items-center">
          <div className="w-full md:w-1/2 aspect-square bg-slate-50 rounded-2xl p-4 flex items-center justify-center border-2 border-slate-200">
            <img 
              src={product.image} 
              alt={product.name} 
              className="max-h-full max-w-full object-contain" 
            />
          </div>

          <div className="flex-1 space-y-3">
            <span className="text-xs font-black text-[#C2410C] uppercase tracking-wider">{product.category}</span>
            <h2 id="modal-product-title" className="text-2xl font-black text-[#0F2942]">{product.name}</h2>
            <p className="text-base text-slate-800 leading-relaxed font-medium">{product.description}</p>
            <div className="pt-4">
              <a
                href="tel:+34968022960"
                onClick={onClose}
                className="cursor-pointer inline-flex items-center gap-2 bg-[#0F2942] hover:bg-slate-900 text-white text-sm font-black px-6 py-3.5 rounded-full transition-colors shadow-xs"
              >
                <span>Llamar al 968 02 29 60 para consultar</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
