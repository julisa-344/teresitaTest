import React from 'react';

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: 'Ajo Molido',
      description: 'Ajo molido natural para dar sabor a tus comidas',
      category: 'Nuevo',
      image: '🧄',
      color: 'from-purple-400 to-purple-600'
    },
    {
      id: 2,
      name: 'Sazonador Rojo',
      description: 'Mezcla perfecta de especias rojas',
      category: 'Super Gigante',
      image: '🌶️',
      color: 'from-primary-400 to-primary-600'
    },
    {
      id: 3,
      name: 'Pimienta Casera',
      description: 'Pimienta molida tradicionalmente',
      category: 'Clásico',
      image: '🫚',
      color: 'from-secondary-400 to-secondary-600'
    }
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-neutral-800 mb-6">
            Nuestros Productos
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Descubre nuestra amplia gama de productos naturales, 
            elaborados con la más alta calidad para realzar el sabor de tus comidas.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Product Image */}
              <div className={`bg-gradient-to-br ${product.color} h-48 flex items-center justify-center relative`}>
                <span className="text-6xl">{product.image}</span>
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-neutral-600 mb-4">
                  {product.description}
                </p>
                <button className="text-primary-500 hover:text-primary-600 font-semibold transition-colors flex items-center group">
                  Ver más detalles
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-display font-bold text-neutral-800 mb-4">
              ¿Buscas algo específico?
            </h3>
            <p className="text-xl text-neutral-600 mb-8">
              Explora nuestro catálogo completo de productos y encuentra 
              exactamente lo que necesitas para tus recetas.
            </p>
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Ver todos los productos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
