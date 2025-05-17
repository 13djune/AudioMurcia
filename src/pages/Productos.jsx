import React, { useState } from 'react';
import Layout from '../layout/Layout';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';

const dummyProducts = [
  {
    name: 'Audífono Compacto Plus',
    price: '299€',
    category: 'Audífonos',
    description: 'Audífono digital con reducción de ruido y conectividad Bluetooth.',
    image: 'https://images.unsplash.com/photo-1585386959984-a4155228f6c4?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Pluggerz Sleep',
    price: '20€',
    category: 'Tapones para los oídos',
    description: 'Son ideales para dormir, ya que reducen el ruido exterior y permiten un descanso reparador. Su diseño ergonómico se adapta perfectamente al canal auditivo, lo que los hace cómodos de llevar durante toda la noche.',
    image: 'https://m.media-amazon.com/images/I/51C11GhJhbS._AC_SX679_PIbundle-2,TopRight,0,0_SH20_.jpg'
  },
  {
    name: 'Pluggerz Sleep Custom-Fit',
    price: '20€',
    category: 'Tapones para los oídos a medida',
    description: 'Son ideales para dormir, ya que reducen el ruido exterior y permiten un descanso reparador. Su diseño ergonómico se adapta perfectamente al canal auditivo, lo que los hace cómodos de llevar durante toda la noche.',
    image: 'https://pluggerz.com/Files/Images/Pluggerz/Consument/Producten/Product-SleepSideSleeperCF.jpg'
  },
  {
    name: 'Pluggerz Music',
    price: '20€',
    category: 'Tapones para los oídos',
    description: 'Responden perfectamente a los deseos de la gente cuando sale a divertirse. El oído está protegido, pero la experiencia y la calidad de la música no se ven reducidas, por lo que podrás divertirte manteniendo tus oídos en buen estado de salud. Es perfecto para acudir a conciertos, bailes, grandes eventos o simplemente ir de copas a una discoteca.',
    image: 'https://m.media-amazon.com/images/I/51NagQvZ71L._AC_UF1000,1000_QL80_.jpg'
  },
  {
    name: 'Pluggerz Bricolaje',
    price: '20€',
    category: 'Tapones para los oídos',
    description: 'La mejor solución ante exposiciones de ruidos demasiado elevados que pueden ocasionar un daño irreparable si se trabaja con regularidad en un entorno con ruidos. Especialmente indicados para la protección del ruido excesivo causado por herramientas ruidosas (cortacésped, taladros, etc.). Filtro de sonido único que atenúa los ruidos perjudiciales a niveles seguros. Los tapones para oído Pluggerz Bricolaje permite comunicarse con otras personas y escuchar dispositivos de advertencia o alarmas, mientras protege sus oídos.',
    image: 'https://m.media-amazon.com/images/I/519jPbz3SfL._AC_SX679_.jpg'
  },
  {
    name: 'Pluggerz Lectura',
    price: '20€',
    category: 'Tapones para los oídos',
    description: 'Son ideales si no quieres que le moleste el ruido exterior cuando estudias, trabajas o lees. Nuestros protectores auditivos con filtro acústico atenúan el máximo ruido posible para que pueda alcanzar una concentración óptima. Disfruta de tus tardes de lectura o mejora tus estudios.',
    image: 'https://m.media-amazon.com/images/I/51e-9AwctWL._AC_SX679_.jpg'
  },
  {
    name: 'Pluggerz Road',
    price: '20€',
    category: 'Tapones para los oídos',
    description: 'El sonido del motor y el ruido producido por el viento pueden causar lesiones auditivas permanentes. El filtro exclusivo atenúa los ruidos nocivos hasta un nivel seguro, mientras que usted sí puede oír todas las señales de tráfico. ¡También muy prácticos para los pilotos de kart, pilotos de carreras y conductores de descapotables!',
    image: 'https://m.media-amazon.com/images/I/51y9kTeehAL.jpg'
  },
  {
    name: 'Pluggerz Shoot',
    price: '20€',
    category: 'Tapones para los oídos',
    description: 'Están especialmente diseñados para personas expuestas al fuerte sonido que emiten las armas de fuego. El sonido que emiten las armas en la practica de la Caza y el tiro al blanco, puede ser muy perjudicial para los oídos creando lesiones irreversibles y es necesario protegerlos de las fuertes explosiones que se producen tras cada deflagración.',
    image: 'https://m.media-amazon.com/images/I/512akTUEl9L.jpg'
  },
  {
    name: 'Pluggerz Travel',
    price: '20€',
    category: 'Tapones para los oídos',
    description: 'Están pensados para personas que suelen realizar viajes periódicamente. Su filtro exclusivo, permite una reducción de la presión de los oídos en despegues y aterrizajes, disminuyendo también los ruidos molestos del viaje.',
    image: 'https://m.media-amazon.com/images/I/51JZxKVhafL._AC_SX679_PIbundle-2,TopRight,0,0_SH20_.jpg'
  },
  {
    name: 'Pluggerz Swim',
    price: '20€',
    category: 'Tapones para los oídos',
    description: 'Están especialmente diseñados para evitar la penetración de agua en el interior de los oídos. Estos tapones cierran herméticamente el canal auditivo pero permiten el paso de los sonidos.',
    image: 'https://m.media-amazon.com/images/I/61bpwXvIYdL.jpg'
  },
  {
    name: 'Moldes para el baño',
    price: '20€',
    category: 'Moldes para los oídos',
    description: 'Son moldes a medida de gran calidad con una terminación excelente, insumergibles y fabricados en un material no tóxico, cómodo, repelente a la suciedad y resistentes.',
    image: 'https://www.midison.com/wp-content/uploads/2019/12/DSC_2577-Modifier-Modifier.jpg'
  },
  {
    name: 'Extra Advanced x6',
    price: '3€',
    category: 'Pilas para audífonos',
    description: 'Aprovechan la nueva tecnología Active Core: un diseño de pila revolucionario que aprovecha al máximo el interior y deja espacio para más ingredientes activos, gracias a lo cual podemos garantizar que nuestras pilas son las más duraderas del mercado.',
    image: 'https://m.media-amazon.com/images/I/71AWvpNN87S._AC_UF894,1000_QL80_.jpg'
  },
  {
    name: 'Hearing Aid x8',
    price: '3€',
    category: 'Pilas para audífonos',
    description: 'Aprovechan la nueva tecnología Active Core: que suministra energía cuando se precisa, y brinda un rendimiento más prolongado y mayor durabilidad; ninguna otra pila dura más.',
    image: 'https://m.media-amazon.com/images/I/71RB7G8y6nL._AC_SX679_.jpg'
  },
  {
    name: 'Implant Pro+ x6',
    price: '3€',
    category: 'Pilas para audífonos',
    description: 'Al saber que disfruta de las pilas de mayor calidad para sus implantes cocleares, puede disfrutar de la vida que quiere sin interrupciones, tanto para pasar tiempo en casa con su familia como para partir a la aventura.',
    image: 'https://smartear.eu/hpeciai/4150560f602a558a772a26b5204084b5/spa_pl_Pilas-RAYOVAC-675-IMPLANT-PRO-blister-6-uds-306_1.jpg'
  },
  {
    name: 'ProLine Advanced x6',
    price: '3€',
    category: 'Pilas para audífonos',
    description: 'Las pilas para audífonos ProLine suministran energía en cualquier situación y cuando la necesite para aprovechar al máximo las funciones para audífonos avanzadas y de alto consumo, como la detección automática del entorno o direccionalidad de oído a oído.',
    image: 'https://audiomurcia.es/wp-content/uploads/2020/03/ProLine-6pk.png'
  },
  // Añade más productos aquí
];

function Productos() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <section className="py-20 px-6 bg-gray-100 text-gray-800">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-orange-600 mb-10 text-center">Nuestros productos</h1>
            <p className="text-lg text-black-600 ml-20 mr-20 m-10 text-center">
            Si necesitas más información o consejo sobre nuestros productos, no dudes en visitarnos en el gabinete o llamarnos. ¡Estamos aquí para ayudarte! </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {dummyProducts.map((product, index) => (
              <ProductCard key={index} product={product} onView={setSelectedProduct} />
            ))}
          </div>
        </div>
      </section>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  );
}

export default Productos;
