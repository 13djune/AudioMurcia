import React from 'react';

const ProductCard = ({ product, onView }) => {
  return (
    <article className="bg-white rounded-2xl border-2 border-slate-300 shadow-sm overflow-hidden hover:shadow-md transition flex flex-col justify-between">
      <div className="w-full aspect-[4/3] bg-slate-50 flex items-center justify-center p-4 border-b border-slate-200">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain" 
        />
      </div>
      <div className="p-5 flex flex-col justify-between flex-grow">
        <div>
          <span className="text-xs font-black text-[#C2410C] uppercase tracking-wider">{product.category}</span>
          <h3 className="text-lg font-black text-[#0F2942] mt-1">{product.name}</h3>
          <p className="text-sm text-slate-800 mt-2 line-clamp-2 font-medium">{product.description}</p>
        </div>
        <button
          type="button"
          onClick={() => onView(product)}
          className="mt-5 w-full inline-block bg-[#0F2942] hover:bg-slate-900 text-white text-sm font-black px-4 py-3 rounded-xl transition-colors text-center cursor-pointer shadow-xs"
        >
          Ver más información
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
