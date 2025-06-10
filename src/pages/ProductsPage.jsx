import React, { useState, useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { productCategories, brands } from "../data/products";

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get("categoria") || ""
  );
  const [selectedBrand, setSelectedBrand] = useState(
    searchParams.get("marca") || ""
  );

  // Actualizar filtros cuando cambien los parámetros URL
  React.useEffect(() => {
    const categoria = searchParams.get("categoria") || "";
    const marca = searchParams.get("marca") || "";
    setSelectedCategory(categoria);
    setSelectedBrand(marca);
  }, [searchParams]);

  // Obtener todos los productos de todas las categorías
  const allProducts = useMemo(() => {
    return productCategories.flatMap((category) =>
      category.products.map((product) => ({
        ...product,
        categoryId: category.id,
        categoryName: category.name,
        categoryIcon: category.icon,
      }))
    );
  }, []);

  // Filtrar productos
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesSearch =
        searchTerm === "" ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "" || product.categoryId === selectedCategory;
      const matchesBrand =
        selectedBrand === "" || product.brand === selectedBrand;

      return matchesSearch && matchesCategory && matchesBrand;
    });
  }, [allProducts, searchTerm, selectedCategory, selectedBrand]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    const params = new URLSearchParams(searchParams);
    if (category) {
      params.set("categoria", category);
    } else {
      params.delete("categoria");
    }
    setSearchParams(params);
  };

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
    const params = new URLSearchParams(searchParams);
    if (brand) {
      params.set("marca", brand);
    } else {
      params.delete("marca");
    }
    setSearchParams(params);
  };

  const clearAllFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
    setSelectedBrand("");
    setSearchParams({});
  };

  const ProductCard = ({ product }) => (
    <Link to={`/productos/${product.id}`}>
      <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden group border border-neutral-100">
        <div className="aspect-square bg-gradient-to-br from-neutral-50 to-neutral-100 p-6 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 to-secondary-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500 relative z-10"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
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
            <h3 className="font-bold text-xl text-neutral-800 group-hover:text-primary-700 transition-colors duration-300 line-clamp-2">
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
          <p className="text-neutral-700 text-sm mb-6 leading-relaxed line-clamp-3">
            {product.description}
          </p>
          <Link
            to={`/productos/${product.id}`}
            className="block w-full bg-primary-700 hover:from-primary-700 hover:to-secondary-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-center shadow-lg hover:shadow-xl group-hover:shadow-primary-500/25"
          >
            Ver Detalles
            <svg
              className="inline-block ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </Link>
  );

  const BrandCard = ({ brand }) => (
    <Link
      to={`/productos?marca=${encodeURIComponent(brand.name)}`}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center group block"
    >
      <div className="w-20 h-20 mx-auto mb-4 bg-neutral-50 rounded-full flex items-center justify-center overflow-hidden">
        <img
          src={brand.logo}
          alt={brand.name}
          className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
        <div className="hidden w-16 h-16 items-center justify-center text-2xl">
          🏷️
        </div>
      </div>
      <h3
        className={`text-xl font-bold mb-2 ${brand.color} group-hover:opacity-80 transition-opacity`}
      >
        {brand.name}
      </h3>
      <p className="text-sm text-neutral-500 mb-2">{brand.specialty}</p>
      <p className="text-neutral-700 text-sm group-hover:text-neutral-700 transition-colors">
        {brand.description}
      </p>
      <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-sm text-primary-700 font-medium">
          Ver productos →
        </span>
      </div>
    </Link>
  );

  return (
    <div className="min-h-screen ">
      {/* Hero Header */}
      <section className="relative bg-primary-100 overflow-hidden">
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="flex-1">
              {/* Main Title */}
              <div className="mb-6">
                <h1 className="text-5xl lg:text-6xl font-display font-bold mb-4 leading-tight text-neutral-800">
                  {selectedBrand ? (
                    <>
                      Productos <br />
                      <span className="text-primary-700">{selectedBrand}</span>
                    </>
                  ) : (
                    <>
                      Nuestros <br />
                      <span className="text-primary-700">Productos</span>
                    </>
                  )}
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl ">
                  {selectedBrand
                    ? `Explora la línea completa de productos ${selectedBrand} diseñados especialmente para tu cocina`
                    : "Descubre toda nuestra gama de productos premium para transformar tu experiencia culinaria"}
                </p>
              </div>

              {/* Enhanced Stats */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="group">
                  <div className="text-center bg-primary-50 backdrop-blur-sm rounded-xl p-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary-700 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-neutral-800">
                          {filteredProducts.length}
                        </div>
                        <div className="text-sm text-neutral-700 font-medium">
                          productos{selectedBrand && ` de ${selectedBrand}`}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="text-center bg-primary-50 backdrop-blur-sm rounded-xl p-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary-700 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-neutral-800">
                          {productCategories.length}
                        </div>
                        <div className="text-sm text-neutral-700 font-medium">
                          categorías disponibles
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="text-center bg-primary-50 backdrop-blur-sm rounded-xl p-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary-700 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-neutral-800">
                          {brands.length}
                        </div>
                        <div className="text-sm text-neutral-700 font-medium">
                          marcas de confianza
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Search Section */}
            <div className="lg:w-96">
            <div className="text-center bg-primary-50 backdrop-blur-sm rounded-xl p-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Buscar productos, marcas o categorías..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-12 py-4 bg-white border-0 rounded-2xl focus:ring-4 focus:ring-primary-300 focus:outline-none shadow-lg text-neutral-800 placeholder-neutral-500 text-lg font-medium transition-all duration-300"
                  />
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                    <svg
                      className="w-6 h-6 text-neutral-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm("")}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-neutral-200 hover:bg-neutral-300 rounded-full flex items-center justify-center transition-colors duration-200"
                    >
                      <svg
                        className="w-4 h-4 text-neutral-700"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  )}
                </div>

                {/* Search Suggestions */}
                {searchTerm && (
                  <div className="mt-4 p-3 bg-white/95 backdrop-blur-sm rounded-xl border border-neutral-300 shadow-md">
                    <div className="text-sm text-neutral-700 mb-2">
                      <span className="font-medium">
                        {filteredProducts.length}
                      </span>{" "}
                      resultados encontrados
                    </div>
                    {filteredProducts.length === 0 && (
                      <div className="text-sm text-neutral-700">
                        No se encontraron productos. Intenta con otros términos.
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Filters */}
      <section
        id="filters-section"
        className="bg-white  border-b relative overflow-hidden"
      >
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
                  {productCategories.map((category) => (
                    <option
                      key={category.id}
                      value={category.id}
                      className="py-2"
                    >
                      {category.name}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-neutral-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
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
                  {brands.map((brand) => (
                    <option
                      key={brand.name}
                      value={brand.name}
                      className="py-2"
                    >
                      {brand.name}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-neutral-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Clear Filters */}
            <div className="flex items-end lg:w-auto w-full">
              <button
                onClick={clearAllFilters}
                className="w-full lg:w-auto px-6 py-3 text-neutral-700 hover:text-white hover:bg-primary-500 bg-neutral-50 hover:shadow-lg rounded-xl transition-all duration-300 font-medium shadow-sm flex items-center justify-center space-x-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
                <span>Limpiar</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Active Filters */}
      {(selectedCategory || selectedBrand || searchTerm) && (
        <div className="bg-neutral-100 border-b">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-neutral-700">Filtros activos:</span>

              {searchTerm && (
                <span className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">
                  Búsqueda: "{searchTerm}"
                  <button
                    onClick={() => setSearchTerm("")}
                    className="ml-2 hover:text-primary-900"
                  >
                    ×
                  </button>
                </span>
              )}

              {selectedCategory && (
                <span className="inline-flex items-center px-3 py-1 bg-secondary-100 text-secondary-800 rounded-full text-sm">
                  {
                    productCategories.find((c) => c.id === selectedCategory)
                      ?.name
                  }
                  <button
                    onClick={() => handleCategoryChange("")}
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
                    onClick={() => handleBrandChange("")}
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

      {/* Products Grid - Main Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {filteredProducts.length > 0 ? (
            <>
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-neutral-800 mb-4">
                  {selectedCategory || selectedBrand || searchTerm
                    ? "Productos Filtrados"
                    : "Catálogo Completo"}
                </h2>
                <div className="flex items-center justify-center space-x-6 text-neutral-700">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-primary-700">
                      {filteredProducts.length}
                    </span>
                    <span>productos encontrados</span>
                  </div>
                  <div className="w-px h-6 bg-neutral-300"></div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-secondary-700">
                      {new Set(filteredProducts.map((p) => p.categoryId)).size}
                    </span>
                    <span>categorías</span>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={`${product.categoryId}-${product.id}`}
                    product={product}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 mx-auto mb-6 bg-neutral-200 rounded-full flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-neutral-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-3xl font-bold text-neutral-800 mb-4">
                  No encontramos productos
                </h3>
                <p className="text-neutral-700 mb-8 text-lg leading-relaxed">
                  No hay productos que coincidan con tus filtros actuales.
                  Prueba ajustando los criterios de búsqueda.
                </p>
                <div className="space-y-4">
                  <button
                    onClick={clearAllFilters}
                    className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-700 hover:to-secondary-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
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

      {/* Our Brands Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-neutral-800 mb-6">
              Nuestras Marcas de Confianza
            </h2>
            <p className="text-xl text-neutral-700 max-w-3xl mx-auto">
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
    </div>
  );
};

export default ProductsPage;
