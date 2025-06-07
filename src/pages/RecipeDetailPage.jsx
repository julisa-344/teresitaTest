import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Users, ChefHat, Star, Heart, Share2, ShoppingCart, Download, Play } from 'lucide-react';

const RecipeDetailPage = () => {
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState('ingredientes');
  const [servings, setServings] = useState(4);

  // Base de datos de recetas (la misma que en RecipesPage)
  const recipes = [
    {
      id: 1,
      name: 'Olluquito con Carne',
      category: 'platos-principales',
      time: 45,
      difficulty: 'Media',
      portions: 4,
      description: 'Después de la papa, el olluco es el tubérculo más famoso del Perú. Por su forma y variados colores, ha conquistado no solo el paladar de los pobladores de los Andes, sino de todo el Perú.',
      image: '/olluquito.jpg',
      productosTeresita: ['Comino Teresita', 'Ají Molido Teresita', 'Palillo Teresita'],
      trucoTeresita: 'Sofríe bien el ají molido Teresita para que libere todo su sabor y aroma.',
      rating: 4.8,
      reviews: 124,
      historia: 'El olluquito con carne es un plato tradicional de la sierra peruana que ha conquistado paladares en todo el país. Su origen se remonta a las antiguas culturas andinas que cultivaban el olluco como alimento básico.',
      ingredientes: [
        { name: '500g de olluco pelado y cortado en bastones', teresita: false },
        { name: '300g de carne de res cortada en tiras', teresita: false },
        { name: '1 cebolla grande cortada en juliana', teresita: false },
        { name: '3 dientes de ajo molidos', teresita: false },
        { name: '2 cucharadas de aceite', teresita: false },
        { name: '1 cucharadita de Comino Teresita', teresita: true },
        { name: '1 cucharadita de Ají Molido Teresita', teresita: true },
        { name: '1/2 cucharadita de Palillo Teresita', teresita: true },
        { name: 'Sal y pimienta al gusto', teresita: false },
        { name: '1 taza de caldo de carne', teresita: false },
        { name: 'Culantro picado para decorar', teresita: false }
      ],
      preparacion: [
        {
          paso: 1,
          titulo: 'Preparar los ingredientes',
          descripcion: 'Pela y corta el olluco en bastones. Corta la carne en tiras y sazona con sal y pimienta.',
          tiempo: '10 min',
          tip: 'El olluco debe quedar en bastones de tamaño uniforme para una cocción pareja.'
        },
        {
          paso: 2,
          titulo: 'Sofreír las especias Teresita',
          descripcion: 'En una sartén grande, calienta el aceite y sofríe el ajo molido, el Comino Teresita, Ají Molido Teresita y Palillo Teresita por 1 minuto.',
          tiempo: '2 min',
          tip: 'Este paso es clave: las especias Teresita deben liberar su aroma sin quemarse.'
        },
        {
          paso: 3,
          titulo: 'Cocinar la carne',
          descripcion: 'Agrega la carne y cocina hasta que esté dorada por todos lados. Luego añade la cebolla y cocina hasta que esté transparente.',
          tiempo: '8 min',
          tip: 'Sella bien la carne para mantener sus jugos.'
        },
        {
          paso: 4,
          titulo: 'Agregar el olluco',
          descripcion: 'Incorpora el olluco cortado y mezcla bien con la carne. Cocina por 3 minutos.',
          tiempo: '3 min',
          tip: 'No revuelvas demasiado para evitar que el olluco se rompa.'
        },
        {
          paso: 5,
          titulo: 'Finalizar la cocción',
          descripcion: 'Añade el caldo de carne, tapa la sartén y cocina a fuego medio por 20 minutos hasta que el olluco esté tierno.',
          tiempo: '20 min',
          tip: 'Si el guiso se seca mucho, agrega un poco más de caldo.'
        },
        {
          paso: 6,
          titulo: 'Servir',
          descripcion: 'Rectifica la sazón, decora con culantro picado y sirve acompañado de arroz blanco.',
          tiempo: '2 min',
          tip: 'El olluquito queda mejor si reposa 5 minutos antes de servir.'
        }
      ],
      video: '/videos/olluquito-tutorial.mp4',
      notas: [
        'El olluco fresco debe tener un color uniforme y estar firme al tacto.',
        'Puedes sustituir la carne de res por pollo o carne de cerdo.',
        'Este plato se conserva bien en refrigeración por hasta 3 días.',
        'Acompáñalo con arroz blanco y una ensalada fresca.'
      ]
    }
    // Aquí irían las otras recetas...
  ];

  const recipe = recipes.find(r => r.id === parseInt(id));

  useEffect(() => {
    if (!recipe) return;
    setServings(recipe.portions);
  }, [recipe]);

  if (!recipe) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Receta no encontrada</h2>
          <Link to="/recetas" className="text-orange-600 hover:text-orange-700 font-semibold">
            Volver a recetas
          </Link>
        </div>
      </div>
    );
  }

  // Calcular ingredientes según porciones
  const adjustIngredients = (ingredientes) => {
    const ratio = servings / recipe.portions;
    return ingredientes.map(ing => ({
      ...ing,
      name: ing.name.replace(/\d+/g, (match) => {
        const num = parseInt(match);
        const adjusted = Math.round(num * ratio * 10) / 10;
        return adjusted % 1 === 0 ? adjusted.toString() : adjusted.toFixed(1);
      })
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50">
      
      {/* Header con navegación */}
      <div className="bg-white shadow-sm border-b border-orange-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/recetas" 
              className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Volver a recetas</span>
            </Link>
            
            <div className="flex items-center space-x-3">
              <button 
                onClick={() => setIsFavorite(!isFavorite)}
                className={`p-3 rounded-xl transition-all duration-300 ${
                  isFavorite 
                    ? 'bg-red-500 text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-500'
                }`}
              >
                <Heart size={20} className={isFavorite ? 'fill-current' : ''} />
              </button>
              
              <button className="p-3 bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-500 rounded-xl transition-all duration-300">
                <Download size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero de la receta */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Imagen principal */}
            <div className="relative">
              <img 
                src={recipe.image} 
                alt={recipe.name}
                className="w-full h-80 lg:h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
              
              {/* Video overlay si existe */}
              {recipe.video && (
                <button className="absolute inset-0 flex items-center justify-center group">
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-lg group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                    <Play size={32} className="text-orange-600 ml-1" />
                  </div>
                </button>
              )}
            </div>

            {/* Información principal */}
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-bold">
                  {recipe.category.replace('-', ' ').toUpperCase()}
                </span>
        
              </div>

              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
                {recipe.name}
              </h1>

              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {recipe.description}
              </p>

              {/* Estadísticas de la receta */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-4">
                  <Clock className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">{recipe.time} min</div>
                  <div className="text-sm text-gray-600">Tiempo total</div>
                </div>
                
                <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-4">
                  <Users className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">{recipe.portions} personas</div>
                  <div className="text-sm text-gray-600">Porciones</div>
                </div>
                
                <div className="text-center bg-white/70 backdrop-blur-sm rounded-2xl p-4">
                  <ChefHat className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">{recipe.difficulty}</div>
                  <div className="text-sm text-gray-600">Dificultad</div>
                </div>
              </div>

              {/* Productos Teresita destacados */}
              <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-6 border-2 border-orange-200">
                <h3 className="font-bold text-orange-800 mb-3 flex items-center">
                  <span className="mr-2">🏆</span>
                  Con Productos Teresita
                </h3>
                <div className="flex flex-wrap gap-2">
                  {recipe.productosTeresita.map((producto, index) => (
                    <span key={index} className="bg-white text-orange-800 px-3 py-2 rounded-xl text-sm font-semibold shadow-sm">
                      {producto}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contenido de la receta */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          
          {/* Navegación por tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'ingredientes', name: 'Ingredientes', icon: '📝' },
              { id: 'preparacion', name: 'Preparación', icon: '👨‍🍳' },
              { id: 'historia', name: 'Historia', icon: '📚' },
              { id: 'tips', name: 'Tips & Notas', icon: '💡' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-orange-50 shadow-md border border-orange-100'
                }`}
              >
                <span className="text-xl mr-2">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            
            {/* Tab: Ingredientes */}
            {activeTab === 'ingredientes' && (
              <div className="bg-white rounded-3xl shadow-lg p-8 border border-orange-100">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-gray-900">Ingredientes</h2>
                  
                  {/* Selector de porciones */}
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-700 font-medium">Porciones:</span>
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => setServings(Math.max(1, servings - 1))}
                        className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full hover:bg-orange-200 transition-colors"
                      >
                        -
                      </button>
                      <span className="w-12 text-center font-bold text-lg">{servings}</span>
                      <button 
                        onClick={() => setServings(servings + 1)}
                        className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full hover:bg-orange-200 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {adjustIngredients(recipe.ingredientes).map((ingrediente, index) => (
                    <div 
                      key={index} 
                      className={`flex items-center p-4 rounded-xl border-2 transition-all duration-300 ${
                        ingrediente.teresita 
                          ? 'bg-gradient-to-r from-orange-50 to-red-50 border-orange-200 shadow-md' 
                          : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full mr-3 ${
                        ingrediente.teresita ? 'bg-orange-500' : 'bg-gray-400'
                      }`}></div>
                      <span className={`font-medium ${
                        ingrediente.teresita ? 'text-orange-800' : 'text-gray-700'
                      }`}>
                        {ingrediente.name}
                      </span>
                      {ingrediente.teresita && (
                        <span className="ml-auto bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                          Teresita
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {/* <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-orange-400 p-4 rounded-r-xl">
                  <div className="flex items-start">
                    <span className="text-2xl mr-3">🛒</span>
                    <div>
                      <h4 className="font-bold text-orange-800 mb-2">¿No tienes todos los ingredientes?</h4>
                      <p className="text-orange-700 mb-4">Encuentra todos los productos Teresita en nuestros puntos de venta.</p>
                      <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-xl font-semibold text-sm transition-colors">
                        Ver tiendas cerca de ti
                      </button>
                    </div>
                  </div>
                </div> */}
              </div>
            )}

            {/* Tab: Preparación */}
            {activeTab === 'preparacion' && (
              <div className="space-y-6">
                {recipe.preparacion.map((paso, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-6 border border-orange-100">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {paso.paso}
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-bold text-gray-900">{paso.titulo}</h3>
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                            {paso.tiempo}
                          </span>
                        </div>
                        
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          {paso.descripcion}
                        </p>
                        
                        {paso.tip && (
                          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-l-4 border-yellow-400 p-3 rounded-r-lg">
                            <div className="flex items-start">
                              <span className="text-yellow-600 mr-2">💡</span>
                              <div>
                                <span className="font-semibold text-yellow-800">Tip: </span>
                                <span className="text-yellow-700">{paso.tip}</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Tab: Historia */}
            {activeTab === 'historia' && (
              <div className="bg-white rounded-3xl shadow-lg p-8 border border-orange-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Historia del Plato</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {recipe.historia}
                  </p>
                  
                  <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl p-6">
                    <h3 className="font-bold text-xl mb-3">La Tradición Teresita</h3>
                    <p className="opacity-90">
                      Desde 1985, Productos Teresita ha estado presente en las cocinas peruanas, 
                      preservando los sabores auténticos que hacen de cada receta una experiencia 
                      única llena de tradición y amor familiar.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Tab: Tips & Notas */}
            {activeTab === 'tips' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-orange-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Consejos de la Chef Teresita</h2>
                  
                  <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-xl p-6 mb-6 border-2 border-orange-200">
                    <div className="flex items-start">
                      <span className="text-3xl mr-4">👩‍🍳</span>
                      <div>
                        <h4 className="font-bold text-orange-800 mb-2">Secreto Principal</h4>
                        <p className="text-orange-700 text-lg">{recipe.trucoTeresita}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {recipe.notas.map((nota, index) => (
                      <div key={index} className="flex items-start p-4 bg-gray-50 rounded-xl">
                        <span className="text-green-500 mr-3 mt-1">✓</span>
                        <span className="text-gray-700">{nota}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-2xl p-6 border-2 border-green-200">
                  <h3 className="font-bold text-green-800 mb-4 flex items-center">
                    <span className="mr-2">🌟</span>
                    ¿Te gustó esta receta?
                  </h3>
                  <p className="text-green-700 mb-4">
                    ¡Compártela con tu familia y amigos! La tradición culinaria peruana se mantiene viva cuando la pasamos de generación en generación.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      {/* <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold mb-6">
            ¿Listo para cocinar?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Encuentra todos los productos Teresita que necesitas para esta receta en nuestros puntos de venta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
              <ShoppingCart className="mr-2" size={20} />
              Comprar Ingredientes
            </button>
            <Link 
              to="/recetas"
              className="bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 border border-white border-opacity-30 flex items-center justify-center"
            >
              Ver Más Recetas
            </Link>
          </div>
        </div>
      </section> */}

    </div>
  );
};

export default RecipeDetailPage;
