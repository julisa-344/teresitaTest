import React, { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { productCategories, brands } from '../data/products';

const AllProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('categoria') || '');
  const [selectedBrand, setSelectedBrand] = useState(searchParams.get('marca') || '');

  // Actualizar filtros cuando cambien los parámetros URL
  React.useEffect(() => {
    const categoria = searchParams.get('categoria') || '';
    const marca = searchParams.get('marca') || '';
    setSelectedCategory(categoria);
    setSelectedBrand(marca);
  }, [searchParams]);

  // Obtener todos los productos de todas las categorías
  const allProducts = useMemo(() => {
    return productCategories.flatMap(category => 
      category.products.map(product => ({
        ...product,
        categoryId: category.id,
        categoryName: category.name,
        categoryIcon: category.icon
      }))
    );
  }, []);

  // Filtrar productos
  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
      const matchesSearch = searchTerm === '' || 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === '' || product.categoryId === selectedCategory;
      const matchesBrand = selectedBrand === '' || product.brand === selectedBrand;
      
      return matchesSearch && matchesCategory && matchesBrand;
    });
  }, [allProducts, searchTerm, selectedCategory, selectedBrand]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    const params = new URLSearchParams(searchParams);
    if (category) {
      params.set('categoria', category);
    } else {
      params.delete('categoria');
    }
    setSearchParams(params);
  };

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
    const params = new URLSearchParams(searchParams);
    if (brand) {
      params.set('marca', brand);
    } else {
      params.delete('marca');
    }
    setSearchParams(params);
  };

  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedBrand('');
    setSearchParams({});
  };

  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden group border border-neutral-100">
      <div className="aspect-square bg-gradient-to-br from-neutral-50 to-neutral-100 p-6 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-secondary-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 relative z-10"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div className="hidden w-full h-full items-center justify-center text-6xl relative z-10">
          📦
        </div>
        {/* Category Icon Badge */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md">
          <span className="text-lg">{product.categoryIcon}</span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-bold text-xl text-neutral-800 group-hover:text-primary-600 transition-colors duration-300 line-clamp-2">
            {product.name}
          </h3>
          <span className="text-sm font-semibold text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full ml-2 whitespace-nowrap">
            {product.brand}
          </span>
        </div>
        <div className="flex items-center space-x-2 mb-4">
          <span className="inline-flex items-center px-2 py-1 bg-gradient-to-r from-secondary-100 to-secondary-200 text-secondary-700 rounded-full text-xs font-medium">
            {product.categoryName}
          </span>
        </div>
        <p className="text-neutral-600 text-sm mb-6 leading-relaxed line-clamp-3">{product.description}</p>
        <Link 
          to={`/productos/${product.id}`}
          className="block w-full bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-center shadow-lg hover:shadow-xl group-hover:shadow-primary-500/25"
        >
          Ver Detalles
          <svg className="inline-block ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white">
        <div className="container mx-auto px-4 py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm mb-6 opacity-90">
            <Link to="/" className="hover:text-primary-200 transition-colors">
              Inicio
            </Link>
            <span className="text-primary-200">•</span>
            <Link to="/productos" className="hover:text-primary-200 transition-colors">
              Productos
            </Link>
            <span className="text-primary-200">•</span>
            <span className="text-white font-medium">Todos los Productos</span>
          </nav>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-4xl lg:text-5xl font-display font-bold mb-3">
                {selectedBrand ? `Productos ${selectedBrand}` : 'Catálogo Completo'}
              </h1>
              <p className="text-xl opacity-90 mb-4">
                Descubre toda nuestra gama de productos para tu cocina
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="font-semibold">
                    {filteredProducts.length} productos
                    {selectedBrand && ` de ${selectedBrand}`}
                  </span>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="font-semibold">{productCategories.length} categorías</span>
                </div>
              </div>
            </div>
            
            {/* Enhanced Search */}
            <div className="lg:w-96">
              <div className="relative">
                <input
                  type="text"
                  placeholder="¿Qué producto estás buscando?"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-0 rounded-2xl focus:ring-4 focus:ring-white/30 focus:outline-none shadow-lg text-neutral-800 placeholder-neutral-500 text-lg"
                />
                <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Filters */}
      <section className="bg-white shadow-lg border-b">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-end">
            {/* Category Filter */}
            <div className="flex-1">
              <label className="block text-sm font-semibold text-neutral-700 mb-3">
                Filtrar por Categoría
              </label>
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  className="custom-select w-full px-4 py-3 bg-neutral-50 border-0 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all duration-300 text-neutral-800 font-medium appearance-none cursor-pointer shadow-sm hover:shadow-md"
                >
                  <option value="">Todas las categorías</option>
                  {productCategories.map(category => (
                    <option key={category.id} value={category.id} className="py-2">
                      {category.name}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                  <svg className="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Brand Filter */}
            <div className="flex-1">
              <label className="block text-sm font-semibold text-neutral-700 mb-3">
                Filtrar por Marca
              </label>
              <div className="relative">
                <select
                  value={selectedBrand}
                  onChange={(e) => handleBrandChange(e.target.value)}
                  className="custom-select w-full px-4 py-3 bg-neutral-50 border-0 rounded-xl focus:bg-white focus:ring-2 focus:ring-primary-500 focus:outline-none transition-all duration-300 text-neutral-800 font-medium appearance-none cursor-pointer shadow-sm hover:shadow-md"
                >
                  <option value="">Todas las marcas</option>
                  {brands.map(brand => (
                    <option key={brand.name} value={brand.name} className="py-2">
                      {brand.name}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                  <svg className="w-5 h-5 text-neutral-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Clear Filters */}
            <div className="flex items-end lg:w-auto w-full">
              <button
                onClick={clearAllFilters}
                className="w-full lg:w-auto px-6 py-3 text-neutral-600 hover:text-white hover:bg-primary-500 bg-neutral-50 hover:shadow-lg rounded-xl transition-all duration-300 font-medium shadow-sm flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                <span>Limpiar</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Active Filters - Restored Style */}
      {(selectedCategory || selectedBrand || searchTerm) && (
        <div className="bg-neutral-100 border-b">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-neutral-600">Filtros activos:</span>
              
              {searchTerm && (
                <span className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">
                  Búsqueda: "{searchTerm}"
                  <button 
                    onClick={() => setSearchTerm('')}
                    className="ml-2 hover:text-primary-900"
                  >
                    ×
                  </button>
                </span>
              )}
              
              {selectedCategory && (
                <span className="inline-flex items-center px-3 py-1 bg-secondary-100 text-secondary-800 rounded-full text-sm">
                  {productCategories.find(c => c.id === selectedCategory)?.name}
                  <button 
                    onClick={() => handleCategoryChange('')}
                    className="ml-2 hover:text-secondary-900"
                  >
                    ×
                  </button>
                </span>
              )}
              
              {selectedBrand && (
                <span className="inline-flex items-center px-3 py-1 bg-neutral-200 text-neutral-800 rounded-full text-sm">
                  {selectedBrand}
                  <button 
                    onClick={() => handleBrandChange('')}
                    className="ml-2 hover:text-neutral-900"
                  >
                    ×
                  </button>
                </span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Products Grid - Enhanced */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {filteredProducts.length > 0 ? (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-800 mb-4">
                  {selectedCategory || selectedBrand || searchTerm ? 'Productos Filtrados' : 'Todos Nuestros Productos'}
                </h2>
                <div className="flex items-center justify-center space-x-6 text-neutral-600">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary-600">{filteredProducts.length}</span>
                    <span>productos encontrados</span>
                  </div>
                  <div className="w-px h-6 bg-neutral-300"></div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-secondary-600">{new Set(filteredProducts.map(p => p.categoryId)).size}</span>
                    <span>categorías</span>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={`${product.categoryId}-${product.id}`} product={product} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 mx-auto mb-6 bg-neutral-200 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-neutral-800 mb-4">
                  No encontramos productos
                </h3>
                <p className="text-neutral-600 mb-8 text-lg leading-relaxed">
                  No hay productos que coincidan con tus filtros actuales. 
                  Prueba ajustando los criterios de búsqueda.
                </p>
                <div className="space-y-4">
                  <button
                    onClick={clearAllFilters}
                    className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
                  >
                    Ver Todos los Productos
                  </button>
                  <div className="text-sm text-neutral-500">
                    O ajusta tus filtros para encontrar lo que buscas
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Summary */}
      <section className="py-16 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4">
              Tu Destino de Sabores
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Descubre la variedad completa que tenemos para ti
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="text-5xl lg:text-6xl font-bold mb-2">{allProducts.length}</div>
              <div className="text-lg opacity-90 font-medium">Productos Totales</div>
              <div className="text-sm opacity-75 mt-2">En todo nuestro catálogo</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="text-5xl lg:text-6xl font-bold mb-2">{productCategories.length}</div>
              <div className="text-lg opacity-90 font-medium">Categorías</div>
              <div className="text-sm opacity-75 mt-2">Para cada necesidad</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="text-5xl lg:text-6xl font-bold mb-2">{brands.length}</div>
              <div className="text-lg opacity-90 font-medium">Marcas</div>
              <div className="text-sm opacity-75 mt-2">De confianza familiar</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
              <div className="text-5xl lg:text-6xl font-bold mb-2">40</div>
              <div className="text-lg opacity-90 font-medium">Años</div>
              <div className="text-sm opacity-75 mt-2">De tradición culinaria</div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/productos"
              className="inline-flex items-center bg-white text-primary-600 hover:bg-neutral-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explorar por Categorías
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllProductsPage;