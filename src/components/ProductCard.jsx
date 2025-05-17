import React from 'react';

const ProductCard = ({ product, onView }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="w-full h-52 object-contain p-2" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-500">{product.category}</p>
        {/* <p className="text-xl font-bold mt-2 text-orange-600">{product.price}</p> */}
        <button
          onClick={() => onView(product)}
          className="mt-4 inline-block bg-orange-500 text-white px-4 py-2 rounded ">
          Ver más info
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
