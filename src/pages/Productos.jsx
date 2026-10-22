import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';

const dummyProducts = [
  {
    name: 'Phonak Audéo Lumity',
    category: 'Audífonos Digitales',
    description: 'Audífono digital de alta gama con reducción de ruido dinámica SmartSpeech y conectividad Bluetooth universal.',
    image: 'https://images.unsplash.com/photo-1585386959984-a4155228f6c4?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Pluggerz Sleep',
    category: 'Tapones para los oídos',
    description: 'Ideales para dormir, reducen el ruido exterior y permiten un descanso reparador sin presión en el canal auditivo.',
    image: 'https://m.media-amazon.com/images/I/51C11GhJhbS._AC_SX679_PIbundle-2,TopRight,0,0_SH20_.jpg'
  },
  {
    name: 'Pluggerz Sleep Custom-Fit',
    category: 'Tapones a medida',
    description: 'Fabricados a medida con la toma de impresión de tu oído en silicona médica suave para dormir de lado.',
    image: 'https://pluggerz.com/Files/Images/Pluggerz/Consument/Producten/Product-SleepSideSleeperCF.jpg'
  },
  {
    name: 'Pluggerz Music',
    category: 'Protección para Músicos',
    description: 'Atenuación plana de frecuencias para conciertos y discotecas protegiendo la audición sin distorsionar la música.',
    image: 'https://m.media-amazon.com/images/I/51NagQvZ71L._AC_UF1000,1000_QL80_.jpg'
  },
  {
    name: 'Pluggerz Bricolaje & Industria',
    category: 'Protección Laboral',
    description: 'Filtro selectivo para herramientas de alto impacto sonoro que permite escuchar conversaciones de seguridad.',
    image: 'https://m.media-amazon.com/images/I/519jPbz3SfL._AC_SX679_.jpg'
  },
  {
    name: 'Pluggerz Swim & Baño',
    category: 'Tapones para el agua',
    description: 'Tapones insumergibles estancos que impiden el paso del agua al oído medio durante la natación y la ducha.',
    image: 'https://m.media-amazon.com/images/I/61bpwXvIYdL.jpg'
  },
  {
    name: 'Pilas Rayovac Extra Advanced x6',
    category: 'Pilas para audífonos',
    description: 'Pilas zinc-aire de máxima duración con tecnología Active Core para audífonos analógicos y digitales.',
    image: 'https://m.media-amazon.com/images/I/71AWvpNN87S._AC_UF894,1000_QL80_.jpg'
  },
  {
    name: 'Rayovac Implant Pro+ x6',
    category: 'Pilas para implante coclear',
    description: 'Especialmente concebidas para alimentar la alta demanda de procesadores de implantes cocleares.',
    image: 'https://smartear.eu/hpeciai/4150560f602a558a772a26b5204084b5/spa_pl_Pilas-RAYOVAC-675-IMPLANT-PRO-blister-6-uds-306_1.jpg'
  },
];

function Productos() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs sm:text-sm font-black text-[#C2410C] uppercase tracking-wider">Catálogo especializado</span>
            <h1 className="text-3xl sm:text-4xl font-black text-[#0F2942] mt-1 mb-4">
              Nuestros productos y accesorios
            </h1>
            <p className="text-base text-slate-800 leading-relaxed font-medium">
              Disponemos de una cuidada selección de audífonos Phonak, tapones de protección a medida y consumibles originales en nuestro gabinete de Las Torres de Cotillas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {dummyProducts.map((product, index) => (
              <ProductCard key={index} product={product} onView={setSelectedProduct} />
            ))}
          </div>
        </div>
      </section>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
}

export default Productos;
