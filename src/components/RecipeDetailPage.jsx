import React, { useState } from 'react';

const RecipeDetailPage = ({ recipe }) => {
  const [servings, setServings] = useState(recipe?.portions || 4);
  const [activeTab, setActiveTab] = useState('ingredientes');
  const [showVideo, setShowVideo] = useState(false);

  // Datos de ejemplo para la receta individual
  const recipeData = recipe || {
    id: 1,
    name: 'Olluco con Carne de la Abuela',
    description: 'El guiso que nos transporta a la infancia. Con el secreto de la abuela y la calidad de siempre.',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop',
    time: 45,
    difficulty: 'media',
    portions: 6,
    rating: 4.8,
    comments: 156,
    category: 'Clásicos de Domingo',
    productosTeresita: [
      { name: 'Pasta de Ají Amarillo', quantity: '2 cucharadas', link: '/productos/aji-amarillo' },
      { name: 'Comino molido', quantity: '1 cucharadita', link: '/productos/comino' },
      { name: 'Palillo', quantity: '1/2 cucharadita', link: '/productos/palillo' }
    ],
    ingredientes: [
      { name: 'Olluco', quantity: '1 kg', essential: true },
      { name: 'Carne de res (osobuco)', quantity: '800g', essential: true },
      { name: 'Cebolla roja', quantity: '1 unidad grande', essential: true },
      { name: 'Ajo', quantity: '4 dientes', essential: true },
      { name: 'Tomate', quantity: '2 unidades medianas', essential: false },
      { name: 'Aceite vegetal', quantity: '3 cucharadas', essential: true },
      { name: 'Sal y pimienta', quantity: 'Al gusto', essential: true },
      { name: 'Culantro picado', quantity: '2 cucharadas', essential: false }
    ],
    instrucciones: [
      {
        step: 1,
        title: 'Preparación de ingredientes',
        instruction: 'Lava y pela los ollucos, córtalos en rodajas gruesas. Corta la carne en trozos medianos. Pica finamente la cebolla, ajo y tomate.',
        time: '10 min',
        tip: 'Los ollucos deben quedar de grosor uniforme para que se cocinen parejos.'
      },
      {
        step: 2,
        title: 'Sofreír la base',
        instruction: 'En una olla grande, calienta el aceite y sofríe la pasta de ají amarillo hasta que suelte su aroma. Agrega la cebolla, ajo y cocina hasta que estén dorados.',
        time: '8 min',
        tip: 'Este es el momento clave: el ají debe liberar todo su sabor sin quemarse.'
      },
      {
        step: 3,
        title: 'Dorar la carne',
        instruction: 'Agrega la carne troceada y dórala por todos lados. Sazona con sal, pimienta y comino.',
        time: '10 min',
        tip: 'La carne debe sellarse bien para mantener jugosidad.'
      },
      {
        step: 4,
        title: 'Cocción principal',
        instruction: 'Agrega agua caliente hasta cubrir la carne. Deja cocinar a fuego medio por 20 minutos hasta que la carne esté tierna.',
        time: '20 min',
        tip: 'Si la carne está dura, cocina un poco más antes de agregar los ollucos.'
      },
      {
        step: 5,
        title: 'Finalizar el guiso',
        instruction: 'Incorpora los ollucos y el tomate picado. Cocina por 15 minutos más hasta que los ollucos estén tiernos. Ajusta la sazón y espolvorea culantro.',
        time: '15 min',
        tip: 'Los ollucos deben estar tiernos pero no deshechos.'
      }
    ],
    trucoTeresita: 'El secreto de la abuela está en sofreír el ají amarillo hasta que libere su aroma característico. Esto le da el color y sabor auténtico que todos recordamos.',
    videoUrl: '/videos/olluco-carne-completo.mp4',
    nutricionalInfo: {
      calorias: 385,
      proteinas: '28g',
      carbohidratos: '35g',
      grasas: '15g',
      fibra: '4g'
    },
    tags: ['tradicional', 'familiar', 'nutritivo', 'comfort-food'],
    relatedRecipes: [2, 4, 6]
  };

  const adjustQuantity = (quantity, originalPortions, newPortions) => {
    if (!quantity || typeof quantity !== 'string') return quantity;
    
    const numbers = quantity.match(/[\d.]+/g);
    if (!numbers) return quantity;
    
    const originalNumber = parseFloat(numbers[0]);
    const newNumber = (originalNumber * newPortions) / originalPortions;
    
    return quantity.replace(numbers[0], newNumber % 1 === 0 ? newNumber.toString() : newNumber.toFixed(1));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Header con Hero Image */}
      <div className="relative h-96 overflow-hidden">
        <img 
          src={recipeData.image} 
          alt={recipeData.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        
        {/* Video Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <button 
            onClick={() => setShowVideo(true)}
            className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-6 transform hover:scale-110 transition-all duration-300 shadow-2xl"
          >
            <svg className="w-12 h-12 text-orange-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button>
        </div>

        {/* Header Info */}
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-orange-500 px-3 py-1 rounded-full text-sm font-bold">
                {recipeData.category}
              </span>
              <div className="flex items-center gap-2">
                <span className="text-yellow-400">⭐</span>
                <span className="font-bold">{recipeData.rating}</span>
                <span className="text-gray-300">({recipeData.comments} comentarios)</span>
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-4">
              {recipeData.name}
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              {recipeData.description}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contenido Principal */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Stats de la Receta */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-orange-100">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">{recipeData.time}</div>
                  <div className="text-gray-600 font-medium">minutos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">{servings}</div>
                  <div className="text-gray-600 font-medium">porciones</div>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold ${
                    recipeData.difficulty === 'facil' ? 'text-green-600' :
                    recipeData.difficulty === 'media' ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {recipeData.difficulty.charAt(0).toUpperCase() + recipeData.difficulty.slice(1)}
                  </div>
                  <div className="text-gray-600 font-medium">dificultad</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">{recipeData.nutricionalInfo.calorias}</div>
                  <div className="text-gray-600 font-medium">calorías</div>
                </div>
              </div>
            </div>

            {/* Ajustador de Porciones */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-orange-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ajustar porciones</h3>
              <div className="flex items-center gap-4">
                <span className="text-gray-700 font-medium">Porciones:</span>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => setServings(Math.max(1, servings - 1))}
                    className="bg-orange-100 hover:bg-orange-200 text-orange-700 w-10 h-10 rounded-full font-bold"
                  >
                    -
                  </button>
                  <span className="text-2xl font-bold text-gray-900 w-12 text-center">{servings}</span>
                  <button 
                    onClick={() => setServings(servings + 1)}
                    className="bg-orange-100 hover:bg-orange-200 text-orange-700 w-10 h-10 rounded-full font-bold"
                  >
                    +
                  </button>
                </div>
                <span className="text-sm text-gray-500">
                  (receta original para {recipeData.portions} personas)
                </span>
              </div>
            </div>

            {/* Tabs de Contenido */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-orange-100">
              <div className="flex border-b border-gray-200">
                {[
                  { id: 'ingredientes', name: 'Ingredientes', icon: '🛒' },
                  { id: 'instrucciones', name: 'Preparación', icon: '👨‍🍳' },
                  { id: 'tips', name: 'Tips & Trucos', icon: '💡' }
                ].map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 px-6 py-4 font-bold transition-colors ${
                      activeTab === tab.id
                        ? 'bg-orange-500 text-white'
                        : 'text-gray-700 hover:bg-orange-50'
                    }`}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.name}
                  </button>
                ))}
              </div>

              <div className="p-6">
                {/* Tab: Ingredientes */}
                {activeTab === 'ingredientes' && (
                  <div className="space-y-6">
                    {/* Productos Teresita */}
                    <div className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200 rounded-xl p-6">
                      <h4 className="text-lg font-bold text-orange-800 mb-4 flex items-center">
                        <span className="mr-2">🏆</span>
                        Productos Teresita necesarios
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        {recipeData.productosTeresita.map((producto, index) => (
                          <div key={index} className="flex items-center justify-between bg-white rounded-lg p-4 shadow-sm">
                            <div>
                              <div className="font-bold text-gray-900">{producto.name}</div>
                              <div className="text-orange-600 font-medium">
                                {adjustQuantity(producto.quantity, recipeData.portions, servings)}
                              </div>
                            </div>
                            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors">
                              Añadir al carrito
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Otros Ingredientes */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-4">Otros ingredientes</h4>
                      <div className="space-y-3">
                        {recipeData.ingredientes.map((ingrediente, index) => (
                          <div key={index} className={`flex items-center justify-between p-4 rounded-lg border-2 ${
                            ingrediente.essential 
                              ? 'bg-red-50 border-red-200' 
                              : 'bg-gray-50 border-gray-200'
                          }`}>
                            <div className="flex items-center gap-3">
                              <div className={`w-4 h-4 rounded-full ${
                                ingrediente.essential ? 'bg-red-500' : 'bg-gray-400'
                              }`}></div>
                              <span className="font-medium text-gray-900">{ingrediente.name}</span>
                              {ingrediente.essential && (
                                <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full font-semibold">
                                  Esencial
                                </span>
                              )}
                            </div>
                            <span className="font-bold text-gray-700">
                              {adjustQuantity(ingrediente.quantity, recipeData.portions, servings)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Lista de Compras */}
                    <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                      📝 Crear lista de compras
                    </button>
                  </div>
                )}

                {/* Tab: Instrucciones */}
                {activeTab === 'instrucciones' && (
                  <div className="space-y-6">
                    {recipeData.instrucciones.map((paso, index) => (
                      <div key={index} className="border-l-4 border-orange-400 pl-6 pb-6">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                            {paso.step}
                          </div>
                          <h4 className="text-xl font-bold text-gray-900">{paso.title}</h4>
                          <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-semibold">
                            {paso.time}
                          </span>
                        </div>
                        <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                          {paso.instruction}
                        </p>
                        {paso.tip && (
                          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                            <div className="text-amber-800 font-medium">
                              💡 <strong>Tip:</strong> {paso.tip}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Tab: Tips & Trucos */}
                {activeTab === 'tips' && (
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-orange-200 rounded-xl p-6">
                      <h4 className="text-xl font-bold text-orange-800 mb-4 flex items-center">
                        <span className="mr-2">👵</span>
                        El Secreto de la Abuela
                      </h4>
                      <p className="text-orange-700 text-lg leading-relaxed font-medium">
                        {recipeData.trucoTeresita}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
                        <h5 className="font-bold text-blue-800 mb-3">🥄 Variaciones</h5>
                        <ul className="text-blue-700 space-y-2">
                          <li>• Puedes agregar zanahoria para más color y dulzor</li>
                          <li>• Para una versión picante, añade rocoto picado</li>
                          <li>• Sustituye la carne por pollo para una opción más ligera</li>
                        </ul>
                      </div>

                      <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                        <h5 className="font-bold text-green-800 mb-3">🥗 Acompañamientos</h5>
                        <ul className="text-green-700 space-y-2">
                          <li>• Arroz blanco cocido</li>
                          <li>• Yuca sancochada</li>
                          <li>• Ensalada criolla</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
                      <h5 className="font-bold text-purple-800 mb-3">📱 Para redes sociales</h5>
                      <p className="text-purple-700 mb-4">
                        ¡Comparte tu olluco con carne en Instagram! Usa estos hashtags:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {['#OllucoConCarne', '#ProductosTeresita', '#ComidaPeruana', '#SaborDeCasa', '#RecetasTradicionales'].map(tag => (
                          <span key={tag} className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            {/* Información Nutricional */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-orange-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Información Nutricional</h3>
              <div className="text-sm text-gray-600 mb-4">Por porción ({servings} porciones)</div>
              <div className="space-y-3">
                {Object.entries(recipeData.nutricionalInfo).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center">
                    <span className="capitalize font-medium text-gray-700">{key}</span>
                    <span className="font-bold text-gray-900">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Acciones */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-orange-100 space-y-4">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Acciones</h3>
              
              <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-bold transition-colors flex items-center justify-center">
                <span className="mr-2">❤️</span>
                Guardar en favoritos
              </button>
              
              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-bold transition-colors flex items-center justify-center">
                <span className="mr-2">📤</span>
                Compartir receta
              </button>
              
              <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-bold transition-colors flex items-center justify-center">
                <span className="mr-2">📱</span>
                Enviar por WhatsApp
              </button>

              <button className="w-full bg-gray-500 hover:bg-gray-600 text-white py-3 rounded-xl font-bold transition-colors flex items-center justify-center">
                <span className="mr-2">📄</span>
                Descargar PDF
              </button>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-orange-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Categorías</h3>
              <div className="flex flex-wrap gap-2">
                {recipeData.tags.map(tag => (
                  <span key={tag} className="bg-orange-100 text-orange-700 px-3 py-2 rounded-full text-sm font-semibold hover:bg-orange-200 cursor-pointer transition-colors">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Sección de Comentarios */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 border border-orange-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Comentarios ({recipeData.comments})
          </h3>
          
          {/* Formulario de comentario */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h4 className="font-bold text-gray-900 mb-4">¿Ya probaste esta receta? ¡Cuéntanos cómo te fue!</h4>
            <div className="space-y-4">
              <div className="flex gap-2 mb-4">
                <span className="text-gray-700 font-medium">Tu calificación:</span>
                {[1,2,3,4,5].map(star => (
                  <button key={star} className="text-2xl text-gray-300 hover:text-yellow-400 transition-colors">
                    ⭐
                  </button>
                ))}
              </div>
              <textarea 
                placeholder="Comparte tu experiencia, tips adicionales o variaciones que hayas probado..."
                className="w-full p-4 border border-gray-300 rounded-xl focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-100"
                rows="4"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-bold transition-colors">
                Publicar comentario
              </button>
            </div>
          </div>

          {/* Comentarios existentes */}
          <div className="space-y-6">
            {/* Ejemplo de comentarios */}
            {[
              {
                user: 'María Elena',
                rating: 5,
                time: 'hace 2 días',
                comment: '¡Quedó delicioso! Seguí exactamente la receta y a toda mi familia le encantó. El truco del ají amarillo realmente hace la diferencia.',
                helpful: 12
              },
              {
                user: 'Carlos R.',
                rating: 4,
                time: 'hace 1 semana',
                comment: 'Muy buena receta. Le agregué un poco más de comino porque nos gusta más condimentado. Los tiempos están perfectos.',
                helpful: 8
              }
            ].map((comment, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center font-bold text-orange-700">
                    {comment.user[0]}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{comment.user}</div>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className={`text-sm ${i < comment.rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                            ⭐
                          </span>
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">{comment.time}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">{comment.comment}</p>
                <div className="flex items-center gap-4 text-sm">
                  <button className="text-gray-500 hover:text-orange-600 transition-colors">
                    👍 Útil ({comment.helpful})
                  </button>
                  <button className="text-gray-500 hover:text-orange-600 transition-colors">
                    Responder
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailPage;