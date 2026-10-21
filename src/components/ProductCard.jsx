import React from 'react';

const ProductCard = ({ product, onView }) => {
  return (
    <article className="bg-white rounded-2xl border border-[#D5E7DC] shadow-sm overflow-hidden hover:shadow-md transition">
      <div className="w-full aspect-[4/3] bg-[#F7FAF8] flex items-center justify-center p-4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain" 
        />
      </div>
      <div className="p-5">
        <span className="text-[11px] font-bold text-[#B87319] uppercase tracking-wider">{product.category}</span>
        <h3 className="text-base font-bold text-[#0E382C] mt-1">{product.name}</h3>
        <p className="text-xs text-[#4A6057] mt-1.5 line-clamp-2">{product.description}</p>
        <button
          type="button"
          onClick={() => onView(product)}
          className="mt-4 w-full inline-block bg-[#0E382C] hover:bg-[#154E3E] text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors text-center"
        >
          Ver más info
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
