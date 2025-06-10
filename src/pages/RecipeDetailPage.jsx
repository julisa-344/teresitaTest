import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Users, ChefHat, Star, Heart, Share2, ShoppingCart, Download, Play } from 'lucide-react';
import { recipes } from '../data/recipes.js';
import { 
  adjustIngredients,
  downloadRecipeFile,
  downloadShoppingList,
  shareRecipe,
  copyRecipeToClipboard
} from '../utils/downloadUtils.js';

const RecipeDetailPage = () => {
  const { id } = useParams();
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState('ingredientes');
  const [servings, setServings] = useState(4);

  // Función para descargar la receta completa
  const downloadRecipe = () => {
    downloadRecipeFile(recipe, servings, 'html');
  };

  // Buscar la receta por ID
  const recipe = recipes.find(r => r.id === parseInt(id));

  useEffect(() => {
    if (!recipe) return;
    setServings(recipe.portions);
  }, [id]); // Solo se ejecuta cuando cambia el ID de la receta

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

  // Calcular ingredientes según porciones usando la utilidad modular
  const adjustedIngredients = recipe ? adjustIngredients(recipe.ingredientes, recipe.portions, servings) : [];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg- bg-primary-100  shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            to="/recetas" 
            className="inline-flex items-center text-primary-700 hover:text-orange-700 mb-4"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Volver a recetas
          </Link>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {recipe.name}
              </h1>
              <p className="text-lg text-gray-600 mb-4">{recipe.description}</p>
              
              {/* Información básica */}
              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-primary-700 mr-2" />
                  <span>{recipe.time} minutos</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-primary-700 mr-2" />
                  <span>{recipe.portions} personas</span>
                </div>
                <div className="flex items-center">
                  <ChefHat className="h-5 w-5 text-primary-700 mr-2" />
                  <span>Dificultad {recipe.difficulty}</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 mr-1" />
                  <span>{recipe.rating}</span>
                  <span className="ml-1">({recipe.reviews} reseñas)</span>
                </div>
              </div>
            </div>
            
            {/* Botones de acción */}
            <div className="flex flex-wrap gap-3 mt-6 lg:mt-0">
              {/* <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`flex items-center px-4 py-2 rounded-lg border transition-colors ${
                  isFavorite 
                    ? 'bg-red-100 border-red-300 text-red-700 hover:bg-red-200' 
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Heart className={`h-5 w-5 mr-2 ${isFavorite ? 'fill-current' : ''}`} />
                {isFavorite ? 'Guardado' : 'Guardar'}
              </button> */}
              
              <button
                onClick={downloadRecipe}
                className="flex items-center px-4 py-2 bg-primary-700 text-neutral-100 rounded-lg hover:bg-orange-800 transition-colors"
              >
                <Download className="h-5 w-5 mr-2" />
                Descargar receta
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Imagen principal */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img 
                src={recipe.image} 
                alt={recipe.name}
                className="w-full h-64 lg:h-80 object-cover"
              />
              
              {/* Productos Teresita destacados */}
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3">Productos Teresita</h3>
                <div className="space-y-2">
                  {recipe.productosTeresita.map((producto, index) => (
                    <div key={index} className="flex items-center bg-gradient-to-r from-orange-100 to-red-100 rounded-lg p-3">
                      <span className="text-2xl mr-3">🏆</span>
                      <span className="font-medium text-gray-800">{producto}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Secreto de Teresita */}
              <div className="px-6 pb-6">
                <div className="bg-gradient-to-r from-red-100 to-pink-100 rounded-xl p-4 border-2 border-red-200">
                  <h4 className="font-bold text-red-800 mb-2 flex items-center">
                    <span className="text-2xl mr-2">👩‍🍳</span>
                    Secreto de la Chef Teresita
                  </h4>
                  <p className="text-red-700 italic font-medium">{recipe.trucoTeresita}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contenido principal */}
          <div className="lg:col-span-2">
            {/* Selector de porciones */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">Ajustar porciones</h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setServings(Math.max(1, servings - 1))}
                    className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center hover:bg-orange-200 transition-colors font-bold text-lg"
                  >
                    -
                  </button>
                  <span className="text-2xl font-bold text-orange-600 min-w-[3rem] text-center">
                    {servings}
                  </span>
                  <button
                    onClick={() => setServings(servings + 1)}
                    className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center hover:bg-orange-200 transition-colors font-bold text-lg"
                  >
                    +
                  </button>
                  <span className="text-gray-600 ml-2">personas</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Receta original para {recipe.portions} personas • Ajustada para {servings} personas
              </p>
            </div>

            {/* Pestañas */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="border-b border-gray-200">
                <nav className="flex">
                  {[
                    { key: 'ingredientes', label: 'Ingredientes', icon: '📝' },
                    { key: 'preparacion', label: 'Preparación', icon: '👨‍🍳' },
                    { key: 'historia', label: 'Historia', icon: '📚' },
                    { key: 'tips', label: 'Tips', icon: '💡' }
                  ].map(tab => (
                    <button
                      key={tab.key}
                      onClick={() => setActiveTab(tab.key)}
                      className={`flex-1 py-4 px-6 text-center border-b-2 font-medium transition-colors ${
                        activeTab === tab.key
                          ? 'border-orange-500 text-orange-600 bg-orange-50'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span className="text-lg mr-2">{tab.icon}</span>
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="p-6">
                {/* Tab: Ingredientes */}
                {activeTab === 'ingredientes' && (
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Ingredientes para {servings} personas
                    </h3>
                    <div className="grid gap-3">
                      {adjustedIngredients.map((ingredient, index) => (
                        <div
                          key={index}
                          className={`flex items-center p-4 rounded-xl border-2 transition-all hover:shadow-md ${
                            ingredient.teresita
                              ? 'bg-gradient-to-r from-orange-50 to-red-50 border-orange-200 relative'
                              : 'bg-gray-50 border-gray-200'
                          }`}
                        >
                          <div className="flex-1">
                            <span className="text-gray-800 font-medium">{ingredient.cantidad}</span>
                            <span className="text-gray-700 ml-2">{ingredient.nombre}</span>
                          </div>
                          {ingredient.teresita && (
                            <div className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                              🏆 Teresita
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tab: Preparación */}
                {activeTab === 'preparacion' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Preparación paso a paso</h3>
                    {recipe.preparacion.map((step, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-6 border-l-4 border-orange-500">
                        <div className="flex items-start space-x-4">
                          <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                            {step.paso}
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="text-lg font-bold text-gray-900">{step.titulo}</h4>
                              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                                {step.tiempo}
                              </span>
                            </div>
                            <p className="text-gray-700 mb-3 leading-relaxed">{step.descripcion}</p>
                            {step.tip && (
                              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 rounded-r-lg">
                                <p className="text-yellow-800">
                                  <span className="font-bold">💡 Tip:</span> {step.tip}
                                </p>
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
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Historia del plato</h3>
                    <div className="prose max-w-none">
                      <p className="text-gray-700 leading-relaxed text-lg">{recipe.historia}</p>
                    </div>
                  </div>
                )}

                {/* Tab: Tips */}
                {activeTab === 'tips' && (
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Consejos y notas adicionales</h3>
                    <div className="grid gap-4">
                      {recipe.notas.map((note, index) => (
                        <div key={index} className="flex items-start p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
                          <span className="text-green-600 text-xl mr-3">✓</span>
                          <p className="text-green-800 font-medium">{note}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailPage;
