import React from 'react';

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg max-w-3xl w-full shadow-lg overflow-hidden relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl"
        >
          &times;
        </button>

        <div className="md:flex p-6 space-y-6 md:space-y-0 md:space-x-6">
          <img src={product.image} alt={product.name} className="w-full md:w-1/2 object-cover rounded" />

          <div className="flex-1 space-y-4">
            <h2 className="text-2xl font-bold">{product.name}</h2>
            {/* <p className="text-xl font-semibold text-orange-600">{product.price}</p> */}
            <p className="text-gray-600">{product.description}</p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
