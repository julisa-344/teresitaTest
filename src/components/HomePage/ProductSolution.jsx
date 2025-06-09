import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Product Category Card Component
 */
const CategoryCard = ({ category }) => (
  <Link 
    to={`/productos?categoria=${category.id}`}
    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
  >
    {/* Category Background with Gradient */}
    <div className={`relative h-32 bg-gradient-to-br ${category.color} flex items-center justify-center`}>
      {/* Icon */}
      <div className="text-5xl md:text-6xl group-hover:scale-110 transition-transform duration-500">
        {category.icon}
      </div>
      
      {/* Decorative Pattern */}
      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white/30 rounded-full"></div>
        <div className="absolute bottom-4 left-4 w-8 h-8 border-2 border-white/30 rounded-full"></div>
      </div>
    </div>

    {/* Category Content */}
    <div className="p-6">
      <h3 className="text-xl font-bold text-neutral-800 mb-3 group-hover:text-orange-600 transition-colors">
        {category.name}
      </h3>
      
      <p className="text-neutral-600 text-sm mb-4 leading-relaxed">
        {category.description}
      </p>

      {/* Product Count */}
      <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
        <span className="flex items-center gap-1">
          <span>📦</span>
          <span>{category.products.length} productos</span>
        </span>
        <span className="text-orange-600 font-medium group-hover:text-orange-700">
          Explorar
        </span>
      </div>

      {/* Featured Products Preview */}
      <div className="flex -space-x-2 mb-4">
        {category.products.slice(0, 3).map((product, index) => (
          <div 
            key={product.id}
            className="w-8 h-8 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs overflow-hidden"
            style={{ zIndex: 3 - index }}
          >
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        {category.products.length > 3 && (
          <div className="w-8 h-8 rounded-full border-2 border-white bg-orange-100 flex items-center justify-center text-xs text-orange-600 font-semibold">
            +{category.products.length - 3}
          </div>
        )}
      </div>

      {/* Call to Action */}
      <div className="flex items-center justify-between">
        <span className="text-orange-600 font-medium group-hover:text-orange-700">
          Ver categoría
        </span>
        <span className="text-orange-600 group-hover:translate-x-1 transition-transform">
          →
        </span>
      </div>
    </div>
  </Link>
);

/**
 * Product Solution Section Component
 * Shows product categories organized by usage
 */
const ProductSolution = ({ 
  className = "",
  title = "Todo lo que tu Cocina Necesita",
  subtitle = "Encuentra los productos perfectos organizados por categorías de uso",
  productCategories = [],
  ctaText = "Conocer todos los productos",
  ctaLink = "/productos"
}) => {
  return (
    <section className={`py-20 bg-white ${className}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-800 mb-6">
            {title}
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {productCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

        {/* Featured Benefits */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 mb-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="font-bold text-neutral-800">Calidad Premium</h3>
              <p className="text-neutral-600 text-sm">
                Productos seleccionados con los más altos estándares de calidad
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="font-bold text-neutral-800">100% Natural</h3>
              <p className="text-neutral-600 text-sm">
                Ingredientes naturales sin conservantes artificiales
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="font-bold text-neutral-800">Disponible Siempre</h3>
              <p className="text-neutral-600 text-sm">
                Encuentra nuestros productos en tu tienda de confianza
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link 
            to={ctaLink}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="text-xl">🛍️</span>
            {ctaText}
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductSolution;