import React, { useState, useEffect } from 'react';

const RecipesSection = () => {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [activeTimeFilter, setActiveTimeFilter] = useState('todos');
  const [activeDifficultyFilter, setActiveDifficultyFilter] = useState('todos');
  const [activeProductFilter, setActiveProductFilter] = useState('todos');
  const [activeDishTypeFilter, setActiveDishTypeFilter] = useState('todos');
  const [activeIngredientFilter, setActiveIngredientFilter] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  // Categorías simplificadas
  const categories = [
    { id: 'todos', name: 'Todos', icon: '🍽️' },
    { id: 'clasicos-domingo', name: 'Clásicos', icon: '👨‍👩‍👧‍👦' },
    { id: 'cocina-rapida', name: 'Rápidos', icon: '⚡' },
    { id: 'loncheras', name: 'Loncheras', icon: '🎒' },
    { id: 'comfort-food', name: 'Caseros', icon: '💕' }
  ];

  const timeFilters = [
    { id: 'todos', name: 'Cualquier tiempo' },
    { id: 'rapido', name: '< 20 min' },
    { id: 'medio', name: '20-45 min' },
    { id: 'largo', name: '> 45 min' }
  ];

  const difficultyFilters = [
    { id: 'todos', name: 'Todas' },
    { id: 'facil', name: 'Fácil' },
    { id: 'media', name: 'Media' },
    { id: 'avanzada', name: 'Avanzada' }
  ];

  const productFilters = [
    { id: 'todos', name: 'Todos los productos' },
    { id: 'aji-amarillo', name: 'Pasta de Ají Amarillo' },
    { id: 'comino', name: 'Comino molido' },
    { id: 'palillo', name: 'Palillo' },
    { id: 'ajo', name: 'Ajo molido' },
    { id: 'quinua', name: 'Quinua' },
    { id: 'sillao', name: 'Sillao' }
  ];

  const dishTypeFilters = [
    { id: 'todos', name: 'Todos los tipos' },
    { id: 'guisos', name: 'Guisos' },
    { id: 'arroces', name: 'Arroces' },
    { id: 'saltados', name: 'Saltados' },
    { id: 'cremas', name: 'Cremas' },
    { id: 'bowls', name: 'Bowls' },
    { id: 'fritos', name: 'Fritos' }
  ];

  const ingredientFilters = [
    { id: 'todos', name: 'Todos los ingredientes' },
    { id: 'pollo', name: 'Pollo' },
    { id: 'carne', name: 'Carne' },
    { id: 'pescado', name: 'Pescado' },
    { id: 'quinua', name: 'Quinua' },
    { id: 'arroz', name: 'Arroz' },
    { id: 'verduras', name: 'Verduras' }
  ];

  const recipes = [
    {
      id: 1,
      name: 'Olluco con Carne de la Abuela',
      category: 'clasicos-domingo',
      time: 45,
      timeCategory: 'medio',
      difficulty: 'media',
      portions: 6,
      description: 'El guiso que nos transporta a la infancia con el secreto de la abuela.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop',
      productosTeresita: ['aji-amarillo', 'comino'],
      mainIngredient: 'carne',
      dishType: 'guisos',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Ají de Gallina Express',
      category: 'cocina-rapida',
      time: 18,
      timeCategory: 'rapido',
      difficulty: 'facil',
      portions: 4,
      description: 'Todo el sabor tradicional en tiempo récord.',
      image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&h=300&fit=crop',
      productosTeresita: ['aji-amarillo', 'comino', 'palillo'],
      mainIngredient: 'pollo',
      dishType: 'cremas',
      rating: 4.9
    },
    {
      id: 3,
      name: 'Quinua Power Bowl',
      category: 'loncheras',
      time: 25,
      timeCategory: 'medio',
      difficulty: 'facil',
      portions: 2,
      description: 'Nutritivo y delicioso para loncheras saludables.',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
      productosTeresita: ['quinua', 'comino'],
      mainIngredient: 'quinua',
      dishType: 'bowls',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Tacu Tacu de Domingo',
      category: 'clasicos-domingo',
      time: 35,
      timeCategory: 'medio',
      difficulty: 'media',
      portions: 4,
      description: 'El brunch peruano que une a la familia.',
      image: 'https://images.unsplash.com/photo-1551218370-c5a1f838468e?w=400&h=300&fit=crop',
      productosTeresita: ['comino', 'ajo'],
      mainIngredient: 'arroz',
      dishType: 'fritos',
      rating: 4.6
    },
    {
      id: 5,
      name: 'Lomo Saltado Moderno',
      category: 'comfort-food',
      time: 15,
      timeCategory: 'rapido',
      difficulty: 'media',
      portions: 3,
      description: 'El clásico reinventado con presentación moderna.',
      image: 'https://images.unsplash.com/photo-1555243896-c709bfa0b564?w=400&h=300&fit=crop',
      productosTeresita: ['comino', 'sillao'],
      mainIngredient: 'carne',
      dishType: 'saltados',
      rating: 4.9
    },
    {
      id: 6,
      name: 'Arroz con Pollo Verde',
      category: 'comfort-food',
      time: 50,
      timeCategory: 'largo',
      difficulty: 'media',
      portions: 6,
      description: 'El abrazo en plato que reconforta el alma.',
      image: 'https://images.unsplash.com/photo-1556908785-58d7d7b8e2c9?w=400&h=300&fit=crop',
      productosTeresita: ['comino', 'palillo', 'ajo'],
      mainIngredient: 'pollo',
      dishType: 'arroces',
      rating: 4.8
    },
    {
      id: 7,
      name: 'Pescado a la Chorrillana',
      category: 'comfort-food',
      time: 30,
      timeCategory: 'medio',
      difficulty: 'media',
      portions: 4,
      description: 'Pescado fresco con salsa criolla tradicional.',
      image: 'https://images.unsplash.com/photo-1544943910-4ca6abcfcacb?w=400&h=300&fit=crop',
      productosTeresita: ['aji-amarillo', 'comino'],
      mainIngredient: 'pescado',
      dishType: 'guisos',
      rating: 4.5
    },
    {
      id: 8,
      name: 'Quinoa con Verduras',
      category: 'loncheras',
      time: 20,
      timeCategory: 'rapido',
      difficulty: 'facil',
      portions: 3,
      description: 'Plato vegano rico en proteínas y vitaminas.',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop',
      productosTeresita: ['quinua', 'comino'],
      mainIngredient: 'verduras',
      dishType: 'bowls',
      rating: 4.4
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
    <section id="recetas" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        
        {/* Hero Section Simplificado */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Recetas con Productos Teresita
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre deliciosas recetas tradicionales y modernas con el sabor auténtico de siempre.
          </p>
        </div>

        {/* Buscador Principal */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="¿Qué quieres cocinar hoy? Busca por plato, ingrediente o ocasión..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 pl-12 pr-16 text-lg rounded-2xl border-2 border-orange-200 focus:border-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-100 bg-white shadow-lg font-sans"
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
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-12 border border-orange-100">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Filtros Avanzados</h3>
              <button
                onClick={clearAllFilters}
                className="text-orange-600 hover:text-orange-700 font-medium text-sm"
              >
                Limpiar filtros
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Tiempo de preparación */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">⏱️ Tiempo</h4>
                <div className="flex flex-wrap gap-2">
                  {timeFilters.map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => setActiveTimeFilter(filter.id)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        activeTimeFilter === filter.id
                          ? 'bg-orange-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-orange-100'
                      }`}
                    >
                      {filter.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Nivel de dificultad */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">📊 Dificultad</h4>
                <div className="flex flex-wrap gap-2">
                  {difficultyFilters.map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => setActiveDifficultyFilter(filter.id)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        activeDifficultyFilter === filter.id
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
                      }`}
                    >
                      {filter.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Productos Teresita */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">🏷️ Producto Teresita</h4>
                <div className="flex flex-wrap gap-2">
                  {productFilters.map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => setActiveProductFilter(filter.id)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        activeProductFilter === filter.id
                          ? 'bg-green-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-green-100'
                      }`}
                    >
                      {filter.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tipo de plato */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">🍽️ Tipo de plato</h4>
                <div className="flex flex-wrap gap-2">
                  {dishTypeFilters.map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => setActiveDishTypeFilter(filter.id)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        activeDishTypeFilter === filter.id
                          ? 'bg-purple-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-purple-100'
                      }`}
                    >
                      {filter.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Ingrediente principal */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">🥘 Ingrediente principal</h4>
                <div className="flex flex-wrap gap-2">
                  {ingredientFilters.map((filter) => (
                    <button
                      key={filter.id}
                      onClick={() => setActiveIngredientFilter(filter.id)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        activeIngredientFilter === filter.id
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-red-100'
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
              <p className="text-sm text-gray-600">
                Mostrando {filteredRecipes.length} receta{filteredRecipes.length !== 1 ? 's' : ''} de {recipes.length}
              </p>
            </div>
          </div>
        )}

        {/* Categorías Temáticas */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-bold text-gray-900 text-center mb-8">
            Explora por colecciones
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
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
                <div>
                  <div className="font-medium text-sm">{category.name}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Recetas Ultra Simplificado */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="group bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-200 border border-gray-100"
            >
              {/* Imagen simplificada */}
              <div className="relative">
                <img
                  src={recipe.image}
                  alt={recipe.name}
                  className="w-full h-40 object-cover"
                />
                
                {/* Solo tiempo y rating */}
                <div className="absolute top-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  {recipe.time}min
                </div>
                <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center">
                  ★ {recipe.rating}
                </div>
              </div>

              {/* Contenido ultra simplificado */}
              <div className="p-3">
                <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-1">
                  {recipe.name}
                </h3>
                
                <p className="text-gray-600 text-xs mb-2 line-clamp-2">
                  {recipe.description}
                </p>

                {/* Información mínima */}
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs">
                    {recipe.difficulty === 'facil' ? 'Fácil' :
                     recipe.difficulty === 'media' ? 'Media' : 'Avanzada'}
                  </span>
                  <span className="text-gray-500 text-xs">
                    {recipe.portions} porciones
                  </span>
                </div>
                
                {/* Botón simplificado */}
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-3 rounded text-sm font-medium transition-colors">
                  Ver receta
                </button>
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

        {/* Newsletter y CTA Section */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
            ¿Quieres más recetas en tu cocina?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Suscríbete y recibe cada semana nuevas recetas, tips de cocina y promociones exclusivas de Productos Teresita.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-6 py-4 rounded-xl text-gray-900 font-medium focus:outline-none focus:ring-4 focus:ring-orange-300"
            />
            <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-colors">
              Suscribirme
            </button>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 border border-white border-opacity-30">
              Ver todas las recetas
            </button>
            <button className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 border border-white border-opacity-30">
              Descargar recetario PDF
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecipesSection;
