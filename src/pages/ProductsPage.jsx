import React from 'react';
import ProductShowcase from '../components/Sections/ProductShowcase';

const ProductsPage = () => {
  const productCategories = [
    {
      id: 'condimentos',
      name: 'Condimentos',
      description: 'Mezclas perfectas para realzar tus platos',
      icon: '🌶️',
      products: [
        { name: 'Ají Molido', description: 'Ají amarillo molido tradicionalmente', price: 'S/. 8.50', image: '🌶️' },
        { name: 'Comino Molido', description: 'Comino seleccionado y molido fino', price: 'S/. 6.90', image: '🫘' },
        { name: 'Orégano Seco', description: 'Orégano deshidratado aromático', price: 'S/. 5.50', image: '🌿' },
        { name: 'Pimentón Dulce', description: 'Pimentón español de primera calidad', price: 'S/. 7.20', image: '🫑' }
      ]
    },
    {
      id: 'sazonadores',
      name: 'Sazonadores',
      description: 'Mezclas especiales para cada ocasión',
      icon: '🧄',
      products: [
        { name: 'Sazonador Rojo', description: 'Mezcla secreta de especias rojas', price: 'S/. 12.90', image: '🌶️' },
        { name: 'Ajo Molido', description: 'Ajo deshidratado y molido natural', price: 'S/. 9.50', image: '🧄' },
        { name: 'Pimienta Negra', description: 'Pimienta negra recién molida', price: 'S/. 8.90', image: '⚫' },
        { name: 'Cúrcuma Molida', description: 'Cúrcuma natural en polvo', price: 'S/. 7.80', image: '🟡' }
      ]
    },
    {
      id: 'especiales',
      name: 'Línea Especial',
      description: 'Productos premium para chefs exigentes',
      icon: '⭐',
      products: [
        { name: 'Mezcla Anticuchera', description: 'Especias para anticuchos perfectos', price: 'S/. 15.90', image: '🍢' },
        { name: 'Adobo Criollo', description: 'Mezcla tradicional para adobos', price: 'S/. 13.50', image: '🥩' },
        { name: 'Hierbas Finas', description: 'Selección de hierbas aromáticas', price: 'S/. 11.90', image: '🌱' },
        { name: 'Sal de Maras', description: 'Sal rosada de los Andes peruanos', price: 'S/. 16.50', image: '🧂' }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-neutral-800 mb-6">
              Nuestros Productos
            </h1>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Descubre nuestra amplia gama de condimentos y especias, elaborados con los más altos 
              estándares de calidad para realzar el sabor de tus comidas favoritas.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-neutral-600">Productos únicos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-secondary-600 mb-2">100%</div>
              <div className="text-neutral-600">Naturales</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">40</div>
              <div className="text-neutral-600">Años de experiencia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-secondary-600 mb-2">1M+</div>
              <div className="text-neutral-600">Familias satisfechas</div>
            </div>
          </div>
        </div>
      </section>

      <ProductShowcase />

      {/* Detailed Product Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {productCategories.map((category, categoryIndex) => (
            <div key={category.id} className="mb-20">
              <div className="text-center mb-12">
                <div className="text-6xl mb-4">{category.icon}</div>
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-800 mb-4">
                  {category.name}
                </h2>
                <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {category.products.map((product, productIndex) => (
                  <div 
                    key={productIndex}
                    className="bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="text-center">
                      <div className="text-4xl mb-4">{product.image}</div>
                      <h3 className="text-lg font-bold text-neutral-800 mb-2">{product.name}</h3>
                      <p className="text-neutral-600 text-sm mb-4">{product.description}</p>
                      <div className="text-xl font-bold text-primary-600 mb-4">{product.price}</div>
                      <button className="w-full bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                        Agregar al carrito
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quality Guarantee */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-neutral-800 mb-8">
              Garantía de Calidad
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-neutral-800 mb-2">Control Riguroso</h3>
                <p className="text-neutral-600">
                  Cada lote pasa por estrictos controles de calidad antes de llegar a tu mesa.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl mb-4">🌿</div>
                <h3 className="text-xl font-bold text-neutral-800 mb-2">Ingredientes Naturales</h3>
                <p className="text-neutral-600">
                  Solo utilizamos ingredientes 100% naturales, sin conservantes artificiales.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-4xl mb-4">📦</div>
                <h3 className="text-xl font-bold text-neutral-800 mb-2">Empaque Hermético</h3>
                <p className="text-neutral-600">
                  Nuestros empaques mantienen la frescura y el aroma de cada producto.
                </p>
              </div>
            </div>

            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Ver certificaciones de calidad
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
