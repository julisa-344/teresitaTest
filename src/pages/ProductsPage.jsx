import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { productCategories, brands } from '../data/products';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group">
      <div className="aspect-square bg-gradient-to-br from-neutral-50 to-neutral-100 p-6 flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div className="hidden w-full h-full items-center justify-center text-4xl">
          📦
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-bold text-lg text-neutral-800">{product.name}</h3>
          <span className="text-sm font-medium text-neutral-500 bg-neutral-100 px-2 py-1 rounded-full">
            {product.brand}
          </span>
        </div>
        <p className="text-neutral-600 text-sm mb-4">{product.description}</p>
        <Link
          to={`/productos/${product.id}`}
          className="block w-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center"
        >
          Ver Detalles
        </Link>
      </div>
    </div>
  );

  const CategoryCard = ({ category, onClick }) => (
    <div 
      onClick={onClick}
      className="cursor-pointer group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
      <div className="relative p-8 text-center">
        <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
          {category.icon}
        </div>
        <h3 className="text-2xl font-bold text-neutral-800 mb-3 group-hover:text-primary-600 transition-colors">
          {category.name}
        </h3>
        <p className="text-neutral-600 mb-6 leading-relaxed">
          {category.description}
        </p>
        <div className="flex items-center justify-center">
          <span className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-600 rounded-full text-sm font-semibold group-hover:bg-primary-100 transition-colors">
            {category.products.length} productos
            <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );

  const BrandCard = ({ brand }) => (
    <Link
      to={`/productos/todos?marca=${encodeURIComponent(brand.name)}`}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center group block"
    >
      <div className="w-20 h-20 mx-auto mb-4 bg-neutral-50 rounded-full flex items-center justify-center overflow-hidden">
        <img
          src={brand.logo}
          alt={brand.name}
          className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div className="hidden w-16 h-16 items-center justify-center text-2xl">
          🏷️
        </div>
      </div>
      <h3 className={`text-xl font-bold mb-2 ${brand.color} group-hover:opacity-80 transition-opacity`}>{brand.name}</h3>
      <p className="text-sm text-neutral-500 mb-2">{brand.specialty}</p>
      <p className="text-neutral-600 text-sm group-hover:text-neutral-700 transition-colors">{brand.description}</p>
      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-sm text-primary-600 font-medium">Ver productos →</span>
      </div>
    </Link>
  );

  if (selectedCategory) {
    const category = productCategories.find(cat => cat.id === selectedCategory);
    return (
      <div className="min-h-screen bg-neutral-50">
        {/* Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-4">
            <button 
              onClick={() => setSelectedCategory(null)}
              className="flex items-center text-primary-600 hover:text-primary-700 font-semibold transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver a Productos
            </button>
          </div>
        </div>

        {/* Category Header */}
        <section className={`py-16 bg-gradient-to-br ${category.color} text-white`}>
          <div className="container mx-auto px-4 text-center">
            <div className="text-7xl mb-6">{category.icon}</div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">{category.name}</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">{category.description}</p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {category.products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 via-amber-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
              El Sabor Completo para tu Cocina
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Todas las soluciones para tu sabor, en un solo lugar
            </p>
            <p className="text-lg text-neutral-500 max-w-3xl mx-auto">
              Descubre nuestra familia completa de productos que, en conjunto, resuelven todas 
              las necesidades de la cocina peruana moderna.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center bg-white/70 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl lg:text-5xl font-bold text-secondary-600 mb-2">50+</div>
              <div className="text-neutral-600">Productos Únicos</div>
            </div>
            <div className="text-center bg-white/70 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">4</div>
              <div className="text-neutral-600">Marcas Especializadas</div>
            </div>
            <div className="text-center bg-white/70 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl lg:text-5xl font-bold text-secondary-600 mb-2">40</div>
              <div className="text-neutral-600">Años de Tradición</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories - Main Navigation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-neutral-800 mb-6">
              Explora por Categoría
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Encuentra exactamente lo que necesitas para cada momento culinario
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productCategories.map((category) => (
              <CategoryCard 
                key={category.id} 
                category={category} 
                onClick={() => setSelectedCategory(category.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Preview - Compact */}
      <section className="py-12 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-800 mb-4">
              Productos Destacados
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Una muestra de la calidad que encontrarás en cada categoría
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {productCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
                <div className="aspect-square bg-gradient-to-br from-neutral-50 to-neutral-100 p-4 flex items-center justify-center">
                  <img 
                    src={category.products[0].image} 
                    alt={category.products[0].name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-full items-center justify-center text-3xl">
                    📦
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-sm text-neutral-800 truncate">{category.products[0].name}</h3>
                    <span className="text-xs font-medium text-neutral-500 bg-neutral-100 px-2 py-1 rounded-full">
                      {category.products[0].brand}
                    </span>
                  </div>
                  <p className="text-neutral-600 text-xs mb-3 line-clamp-2">{category.products[0].description}</p>
                  <Link
                    to={`/productos/${category.products[0].id}`}
                    className="block w-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white py-2 px-3 rounded-lg font-medium transition-all duration-300 text-center text-sm"
                  >
                    Ver Producto
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/productos/todos"
              className="inline-flex items-center bg-neutral-800 hover:bg-neutral-900 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Ver Todos los Productos
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Brands Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-neutral-800 mb-6">
              Nuestras Marcas de Confianza
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Cada marca representa especialidad y calidad en su categoría
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brands.map((brand, index) => (
              <BrandCard key={index} brand={brand} />
            ))}
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-secondary-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8">
            Nuestra Promesa de Calidad
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-4">Control Total</h3>
              <p className="opacity-90">
                Cada producto pasa por rigurosos controles desde la selección 
                de materias primas hasta el empaque final.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-5xl mb-4">🌿</div>
              <h3 className="text-2xl font-bold mb-4">100% Natural</h3>
              <p className="opacity-90">
                Ingredientes naturales seleccionados, sin conservantes 
                artificiales ni aditivos químicos.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold mb-4">Tradición Familiar</h3>
              <p className="opacity-90">
                40 años de experiencia familiar garantizan recetas 
                tradicionales y sabores auténticos.
              </p>
            </div>
          </div>

          <button className="bg-white text-primary-600 hover:bg-neutral-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Conoce Nuestros Certificados
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
