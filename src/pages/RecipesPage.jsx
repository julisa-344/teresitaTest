import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const RecipesPage = () => {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [activeTimeFilter, setActiveTimeFilter] = useState('todos');
  const [activeDifficultyFilter, setActiveDifficultyFilter] = useState('todos');
  const [activeProductFilter, setActiveProductFilter] = useState('todos');
  const [activeDishTypeFilter, setActiveDishTypeFilter] = useState('todos');
  const [activeIngredientFilter, setActiveIngredientFilter] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  const filtersRef = useRef(null);

  // Cerrar filtros al hacer click fuera
  useEffect(() => {
    function handleClickOutside(event) {
      if (filtersRef.current && !filtersRef.current.contains(event.target)) {
        setShowFilters(false);
      }
    }

    if (showFilters) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showFilters]);

  // Categorías simplificadas
  const categories = [
    { id: 'todos', name: 'Todas', icon: '🍽️' },
    { id: 'platos-principales', name: 'Principales', icon: '🍽️' },
    { id: 'sanguches', name: 'Sánguches', icon: '🥪' },
    { id: 'pescados', name: 'Pescados', icon: '🐟' }
  ];

  const timeFilters = [
    { id: 'todos', name: 'Cualquier tiempo' },
    { id: 'rapido', name: '< 30 min' },
    { id: 'medio', name: '30-60 min' },
    { id: 'largo', name: '> 60 min' }
  ];

  const difficultyFilters = [
    { id: 'todos', name: 'Todas' },
    { id: 'facil', name: 'Fácil' },
    { id: 'media', name: 'Media' },
    { id: 'alta', name: 'Alta' }
  ];

  const productFilters = [
    { id: 'todos', name: 'Todos los productos' },
    { id: 'comino', name: 'Comino Teresita' },
    { id: 'aji-amarillo', name: 'Ají Amarillo Teresita' },
    { id: 'palillo', name: 'Palillo Teresita' },
    { id: 'aji-molido', name: 'Ají Molido Teresita' },
    { id: 'sillao', name: 'Sillao Teresita' },
    { id: 'salsas', name: 'Salsas Teresita' }
  ];

  const dishTypeFilters = [
    { id: 'todos', name: 'Todos los tipos' },
    { id: 'guisos', name: 'Guisos' },
    { id: 'saltados', name: 'Saltados' },
    { id: 'asados', name: 'Asados' },
    { id: 'sudados', name: 'Sudados' },
    { id: 'sanguches', name: 'Sánguches' }
  ];

  const ingredientFilters = [
    { id: 'todos', name: 'Todos los ingredientes' },
    { id: 'pollo', name: 'Pollo' },
    { id: 'pavo', name: 'Pavo' },
    { id: 'pescado', name: 'Pescado' },
    { id: 'carne', name: 'Carne' },
    { id: 'tallarin', name: 'Tallarín' }
  ];

  // Las 8 recetas específicas con imágenes reales
  const recipes = [
    {
      id: 1,
      name: 'Olluquito con Carne',
      category: 'platos-principales',
      time: 45,
      timeCategory: 'medio',
      difficulty: 'media',
      difficultyLabel: 'Media',
      portions: 4,
      description: 'El guiso tradicional que nos transporta a la infancia.',
      image: '/olluquito.jpg',
      productosTeresita: ['comino', 'aji-molido', 'palillo'],
      mainIngredient: 'carne',
      dishType: 'guisos',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Pavito Navideño',
      category: 'platos-principales',
      time: 120,
      timeCategory: 'largo',
      difficulty: 'alta',
      difficultyLabel: 'Alta',
      portions: 8,
      description: 'Perfecto para celebraciones navideñas familiares.',
      image: '/pavo.jpg',
      productosTeresita: ['comino', 'palillo'],
      mainIngredient: 'pavo',
      dishType: 'asados',
      rating: 4.9
    },
    {
      id: 3,
      name: 'Tallarín con Pollo Saltado',
      category: 'platos-principales',
      time: 30,
      timeCategory: 'rapido',
      difficulty: 'media',
      difficultyLabel: 'Media',
      portions: 4,
      description: 'Fusión peruana-china fácil y deliciosa.',
      image: '/tallarin.webp',
      productosTeresita: ['comino', 'sillao', 'aji-molido'],
      mainIngredient: 'tallarin',
      dishType: 'saltados',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Sánguche de Pavito',
      category: 'sanguches',
      time: 15,
      timeCategory: 'rapido',
      difficulty: 'facil',
      difficultyLabel: 'Fácil',
      portions: 1,
      description: 'Rápido y delicioso para cualquier momento.',
      image: '/sandwich.jpg',
      productosTeresita: ['salsas'],
      mainIngredient: 'pavo',
      dishType: 'sanguches',
      rating: 4.5
    },
    {
      id: 5,
      name: 'Tallarínes con Pavo y Chifles',
      category: 'platos-principales',
      time: 40,
      timeCategory: 'medio',
      difficulty: 'media',
      difficultyLabel: 'Media',
      portions: 6,
      description: 'Receta tradicional norteña para reuniones familiares.',
      image: '/tallarinchifles.avif',
      productosTeresita: ['comino', 'aji-amarillo', 'palillo'],
      mainIngredient: 'tallarin',
      dishType: 'guisos',
      rating: 4.6
    },
    {
      id: 6,
      name: 'Sudado de Pescado',
      category: 'pescados',
      time: 35,
      timeCategory: 'medio',
      difficulty: 'media',
      difficultyLabel: 'Media',
      portions: 4,
      description: 'Plato marino cocinado en su propio jugo.',
      image: '/sudado.jpg',
      productosTeresita: ['comino', 'aji-amarillo', 'palillo'],
      mainIngredient: 'pescado',
      dishType: 'sudados',
      rating: 4.7
    },
    {
      id: 7,
      name: 'Pollo a la Brasa',
      category: 'platos-principales',
      time: 90,
      timeCategory: 'largo',
      difficulty: 'media',
      difficultyLabel: 'Media',
      portions: 4,
      description: 'El clásico peruano con especias Teresita.',
      image: '/polloalabrasa.webp',
      productosTeresita: ['comino', 'palillo'],
      mainIngredient: 'pollo',
      dishType: 'asados',
      rating: 4.8
    },
    {
      id: 8,
      name: 'Pollada Peruana',
      category: 'platos-principales',
      time: 60,
      timeCategory: 'medio',
      difficulty: 'media',
      difficultyLabel: 'Media',
      portions: 6,
      description: 'Tradicional para celebraciones familiares.',
      image: '/pollada.webp',
      productosTeresita: ['comino', 'aji-amarillo', 'palillo'],
      mainIngredient: 'pollo',
      dishType: 'guisos',
      rating: 4.6
    }
  ];

  // Función de filtrado completa
  const getFilteredRecipes = () => {
    let filtered = recipes;

    // Filtro por categoría
    if (activeCategory !== 'todos') {
      filtered = filtered.filter(recipe => recipe.category === activeCategory);
    }

    // Filtro por tiempo
    if (activeTimeFilter !== 'todos') {
      filtered = filtered.filter(recipe => recipe.timeCategory === activeTimeFilter);
    }

    // Filtro por dificultad
    if (activeDifficultyFilter !== 'todos') {
      filtered = filtered.filter(recipe => recipe.difficulty === activeDifficultyFilter);
    }

    // Filtro por producto Teresita
    if (activeProductFilter !== 'todos') {
      filtered = filtered.filter(recipe =>
        recipe.productosTeresita.includes(activeProductFilter)
      );
    }

    // Filtro por tipo de plato
    if (activeDishTypeFilter !== 'todos') {
      filtered = filtered.filter(recipe => recipe.dishType === activeDishTypeFilter);
    }

    // Filtro por ingrediente principal
    if (activeIngredientFilter !== 'todos') {
      filtered = filtered.filter(recipe => recipe.mainIngredient === activeIngredientFilter);
    }

    // Búsqueda por texto
    if (searchTerm) {
      filtered = filtered.filter(recipe =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filtered;
  };

  // Función para limpiar todos los filtros
  const clearAllFilters = () => {
    setActiveCategory('todos');
    setActiveTimeFilter('todos');
    setActiveDifficultyFilter('todos');
    setActiveProductFilter('todos');
    setActiveDishTypeFilter('todos');
    setActiveIngredientFilter('todos');
    setSearchTerm('');
  };

  const filteredRecipes = getFilteredRecipes();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 via-amber-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-flex items-center bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 px-6 py-3 rounded-full text-sm font-bold tracking-wide uppercase shadow-sm mb-6">
              <span className="mr-2">🏠</span>
              Recetas Tradicionales con Productos Teresita
            </span>
            <h1 className="text-4xl lg:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
              Sabores Auténticos del Perú
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Descubre nuestras recetas tradicionales peruanas, perfeccionadas con más de 40 años de experiencia 
              y diseñadas especialmente para usar <strong>Productos Teresita</strong>.
            </p>
          </div>

          {/* Recipe Stats */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center bg-white/70 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl lg:text-4xl font-bold text-red-600 mb-2">40+</div>
              <div className="text-gray-600 font-medium">Años de Experiencia</div>
            </div>
            <div className="text-center bg-white/70 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl lg:text-4xl font-bold text-amber-600 mb-2">100%</div>
              <div className="text-gray-600 font-medium">Recetas Auténticas</div>
            </div>
            <div className="text-center bg-white/70 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl lg:text-4xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Productos Teresita</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {/* Buscador con filtros */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Busca tu receta favorita..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 pl-12 pr-16 text-lg rounded-xl border-2 border-orange-200 focus:border-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-100 bg-white shadow-lg font-sans"
              />
              <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-xl transition-colors font-semibold"
              >
                Filtros
              </button>
            </div>
          </div>

          {/* Panel de Filtros Avanzados */}
          {showFilters && (
            <div 
              ref={filtersRef}
              className="bg-white rounded-2xl shadow-xl p-6 mb-12 border border-orange-100 animate-fadeInUp"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">Filtros Avanzados</h3>
                <button
                  onClick={clearAllFilters}
                  className="text-orange-600 hover:text-orange-700 font-medium text-sm bg-orange-50 hover:bg-orange-100 px-3 py-2 rounded-lg transition-colors"
                >
                  Limpiar filtros
                </button>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Tiempo de preparación */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    ⏱️ Tiempo
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {timeFilters.map((filter) => (
                      <button
                        key={filter.id}
                        onClick={() => setActiveTimeFilter(filter.id)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border shadow-sm ${
                          activeTimeFilter === filter.id
                            ? 'bg-orange-500 text-white border-orange-500 shadow-lg scale-105'
                            : 'bg-white text-gray-700 border-gray-200 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-700'
                        }`}
                      >
                        {filter.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Nivel de dificultad */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    📊 Dificultad
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {difficultyFilters.map((filter) => (
                      <button
                        key={filter.id}
                        onClick={() => setActiveDifficultyFilter(filter.id)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border shadow-sm ${
                          activeDifficultyFilter === filter.id
                            ? 'bg-orange-500 text-white border-orange-500 shadow-lg scale-105'
                            : 'bg-white text-gray-700 border-gray-200 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-700'
                        }`}
                      >
                        {filter.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Productos Teresita */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    🏷️ Producto Teresita
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {productFilters.map((filter) => (
                      <button
                        key={filter.id}
                        onClick={() => setActiveProductFilter(filter.id)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border shadow-sm ${
                          activeProductFilter === filter.id
                            ? 'bg-orange-500 text-white border-orange-500 shadow-lg scale-105'
                            : 'bg-white text-gray-700 border-gray-200 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-700'
                        }`}
                      >
                        {filter.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tipo de plato */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    🍽️ Tipo de plato
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {dishTypeFilters.map((filter) => (
                      <button
                        key={filter.id}
                        onClick={() => setActiveDishTypeFilter(filter.id)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border shadow-sm ${
                          activeDishTypeFilter === filter.id
                            ? 'bg-orange-500 text-white border-orange-500 shadow-lg scale-105'
                            : 'bg-white text-gray-700 border-gray-200 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-700'
                        }`}
                      >
                        {filter.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Ingrediente principal */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    🥘 Ingrediente principal
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {ingredientFilters.map((filter) => (
                      <button
                        key={filter.id}
                        onClick={() => setActiveIngredientFilter(filter.id)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border shadow-sm ${
                          activeIngredientFilter === filter.id
                            ? 'bg-orange-500 text-white border-orange-500 shadow-lg scale-105'
                            : 'bg-white text-gray-700 border-gray-200 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-700'
                        }`}
                      >
                        {filter.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contador de resultados */}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-lg inline-block">
                  Mostrando {filteredRecipes.length} receta{filteredRecipes.length !== 1 ? 's' : ''} de {recipes.length}
                </p>
              </div>
            </div>
          )}

          {/* Categorías */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-700 shadow-sm border border-gray-200'
                }`}
              >
                <span className="text-lg mr-2">{category.icon}</span>
                <div className="font-medium text-sm">{category.name}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Recetas Mejorado */}
      <section className="py-16 bg-gradient-to-br from-orange-50 via-amber-50 to-red-50">
        <div className="container mx-auto px-4">
          {/* Título de la sección */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {filteredRecipes.length > 0 ? (
                `${filteredRecipes.length} Receta${filteredRecipes.length !== 1 ? 's' : ''} Encontrada${filteredRecipes.length !== 1 ? 's' : ''}`
              ) : (
                'Nuestras Recetas'
              )}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {filteredRecipes.map((recipe, index) => (
              <div
                key={recipe.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-3 hover:scale-[1.02] recipe-card-hover"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animation: 'fadeInUp 0.8s ease-out forwards',
                  opacity: 0
                }}
              >
                {/* Imagen con overlay y efectos */}
                <div className="relative overflow-hidden group">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-72 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  
                  {/* Gradient overlay animado */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400"></div>
                  
                  {/* Badges flotantes con mejor diseño */}
                  <div className="absolute top-4 left-4 transform transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl backdrop-blur-sm border border-white/20">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        {recipe.time} min
                      </span>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-4 transform transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl backdrop-blur-sm border border-white/20">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-2 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {recipe.rating}
                      </span>
                    </div>
                  </div>

                  {/* Botón de favorito que aparece en hover */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-400 transform translate-y-4 group-hover:translate-y-0">
                    <button className="bg-white/95 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-200 hover:scale-110 hover:shadow-xl">
                      <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Contenido de la card mejorado */}
                <div className="p-8">
                  <h3 className="font-bold text-gray-900 text-2xl mb-4 line-clamp-1 group-hover:text-orange-600 transition-colors duration-300">
                    {recipe.name}
                  </h3>
                  
                  <p className="text-gray-600 text-base mb-6 line-clamp-2 leading-relaxed">
                    {recipe.description}
                  </p>

                  {/* Información en badges mejorados */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold border border-indigo-200 shadow-sm">
                      {recipe.difficultyLabel}
                    </span>
                    <span className="text-gray-500 text-sm flex items-center bg-gray-50 px-3 py-2 rounded-lg">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                      </svg>
                      {recipe.portions} porciones
                    </span>
                  </div>

                  {/* Productos Teresita mejorados */}
                  <div className="mb-8">
                    <p className="text-sm text-gray-500 mb-3 font-medium flex items-center">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                      Con productos Teresita:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {recipe.productosTeresita.slice(0, 2).map((producto, idx) => (
                        <span 
                          key={idx} 
                          className="bg-gradient-to-r from-emerald-50 to-teal-50 text-emerald-700 px-3 py-2 rounded-full text-sm font-medium border border-emerald-200 shadow-sm hover:shadow-md transition-all duration-200"
                        >
                          {producto}
                        </span>
                      ))}
                      {recipe.productosTeresita.length > 2 && (
                        <span className="text-sm text-gray-500 px-3 py-2 bg-gray-50 rounded-full border border-gray-200 shadow-sm">
                          +{recipe.productosTeresita.length - 2} más
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Botón mejorado con más efectos */}
                  <Link 
                    to={`/receta/${recipe.id}`}
                    className="block w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white py-4 px-6 rounded-xl text-base font-semibold transition-all duration-300 text-center transform hover:scale-105 shadow-lg hover:shadow-2xl button-glow"
                  >
                    <span className="flex items-center justify-center">
                      Ver receta completa
                      <svg className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Mensaje cuando no hay resultados */}
          {filteredRecipes.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No encontramos recetas</h3>
              <p className="text-gray-600 mb-4">
                Intenta ajustar tus filtros o buscar con otros términos
              </p>
              <button
                onClick={clearAllFilters}
                className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6">
            ¿Quieres conocer más sobre Productos Teresita?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Descubre toda nuestra línea de productos que hacen que cada receta tenga el sabor auténtico del Perú.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg">
              Ver Nuestros Productos
            </button>
            <button className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 border border-white border-opacity-30">
              Contáctanos
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecipesPage;
