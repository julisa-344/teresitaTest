import React from 'react';

const DesignSystem = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 py-20">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl lg:text-7xl font-serif font-bold text-gray-900 mb-6">
            Sistema de Diseño
          </h1>
          <h2 className="text-2xl font-serif text-orange-600 mb-4">
            Productos Teresita - El Recetario Digital
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Guía visual que define la identidad renovada de la marca, 
            equilibrando tradición y modernidad para conectar con todas las generaciones.
          </p>
        </div>

        {/* Tipografía */}
        <section className="mb-20">
          <div className="bg-white rounded-3xl shadow-lg p-12 border border-orange-100">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
              Sistema Tipográfico
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Serif para Títulos */}
              <div>
                <h3 className="text-xl font-bold text-orange-700 mb-6">
                  Tipografía Serif (Títulos y Emocional)
                </h3>
                <div className="space-y-6">
                  <div>
                    <h1 className="text-5xl font-serif font-bold text-gray-900 mb-2">
                      Con Productos Teresita
                    </h1>
                    <p className="text-sm text-gray-600">Heading 1 - Serif Bold 48px</p>
                  </div>
                  <div>
                    <h2 className="text-3xl font-serif font-bold text-gray-900 mb-2">
                      El sabor de casa te sale bien
                    </h2>
                    <p className="text-sm text-gray-600">Heading 2 - Serif Bold 32px</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2">
                      Tradición que conecta generaciones
                    </h3>
                    <p className="text-sm text-gray-600">Heading 3 - Serif Semibold 20px</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-amber-50 rounded-xl border-l-4 border-amber-400">
                  <p className="text-sm text-amber-800">
                    <strong>Uso:</strong> La tipografía serif evoca tradición, confianza y autenticidad. 
                    Perfecta para títulos principales, mensajes emocionales y elementos que necesiten 
                    transmitir el heritage de la marca.
                  </p>
                </div>
              </div>

              {/* Sans-serif para Contenido */}
              <div>
                <h3 className="text-xl font-bold text-orange-700 mb-6">
                  Tipografía Sans-serif (Contenido y Funcional)
                </h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-lg font-medium text-gray-900 mb-2">
                      Recetas fáciles para el día a día
                    </p>
                    <p className="text-sm text-gray-600">Body Large - Sans Medium 18px</p>
                  </div>
                  <div>
                    <p className="text-base text-gray-700 mb-2">
                      Descubre ingredientes frescos y técnicas tradicionales que harán que cada plato sea especial.
                    </p>
                    <p className="text-sm text-gray-600">Body Regular - Sans Regular 16px</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-2">
                      Tiempo de preparación: 30 minutos • Dificultad: Media
                    </p>
                    <p className="text-sm text-gray-600">Small - Sans Regular 14px</p>
                  </div>
                  <div>
                    <button className="bg-orange-500 text-white px-6 py-3 rounded-xl font-bold">
                      Ver receta completa
                    </button>
                    <p className="text-sm text-gray-600 mt-2">Button - Sans Bold 16px</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-xl border-l-4 border-blue-400">
                  <p className="text-sm text-blue-800">
                    <strong>Uso:</strong> La tipografía sans-serif garantiza legibilidad excelente 
                    en dispositivos móviles y pantallas pequeñas. Ideal para contenido, 
                    instrucciones, botones y elementos de interfaz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Paleta de Colores */}
        <section className="mb-20">
          <div className="bg-white rounded-3xl shadow-lg p-12 border border-orange-100">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
              Paleta de Colores
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Colores Primarios */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Colores Primarios</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-orange-500 rounded-2xl shadow-lg mr-4"></div>
                    <div>
                      <div className="font-bold text-gray-900">Naranja Teresita</div>
                      <div className="text-sm text-gray-600">#f97316</div>
                      <div className="text-xs text-gray-500">Cálido, acogedor, apetitoso</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-red-500 rounded-2xl shadow-lg mr-4"></div>
                    <div>
                      <div className="font-bold text-gray-900">Rojo Ají</div>
                      <div className="text-sm text-gray-600">#ef4444</div>
                      <div className="text-xs text-gray-500">Pasión, sabor, tradición</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-amber-400 rounded-2xl shadow-lg mr-4"></div>
                    <div>
                      <div className="font-bold text-gray-900">Ámbar Dorado</div>
                      <div className="text-sm text-gray-600">#fbbf24</div>
                      <div className="text-xs text-gray-500">Calidez, hogar, comfort</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Colores Secundarios */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Colores Secundarios</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-green-600 rounded-2xl shadow-lg mr-4"></div>
                    <div>
                      <div className="font-bold text-gray-900">Verde Cilantro</div>
                      <div className="text-sm text-gray-600">#16a34a</div>
                      <div className="text-xs text-gray-500">Fresco, natural, saludable</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-yellow-500 rounded-2xl shadow-lg mr-4"></div>
                    <div>
                      <div className="font-bold text-gray-900">Amarillo Palillo</div>
                      <div className="text-sm text-gray-600">#eab308</div>
                      <div className="text-xs text-gray-500">Alegría, energía, optimismo</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-2xl shadow-lg mr-4"></div>
                    <div>
                      <div className="font-bold text-gray-900">Morado Chicha</div>
                      <div className="text-sm text-gray-600">#9333ea</div>
                      <div className="text-xs text-gray-500">Tradición, cultura, herencia</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Colores Neutros */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Colores Neutros</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-gray-900 rounded-2xl shadow-lg mr-4"></div>
                    <div>
                      <div className="font-bold text-gray-900">Carbón</div>
                      <div className="text-sm text-gray-600">#111827</div>
                      <div className="text-xs text-gray-500">Títulos, texto principal</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-gray-700 rounded-2xl shadow-lg mr-4"></div>
                    <div>
                      <div className="font-bold text-gray-900">Pizarra</div>
                      <div className="text-sm text-gray-600">#374151</div>
                      <div className="text-xs text-gray-500">Texto secundario</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-2xl shadow-lg mr-4 border border-gray-300"></div>
                    <div>
                      <div className="font-bold text-gray-900">Crema</div>
                      <div className="text-sm text-gray-600">#f3f4f6</div>
                      <div className="text-xs text-gray-500">Fondos, cards, separadores</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border border-orange-200">
              <h4 className="font-bold text-orange-800 mb-3">Filosofía de Color</h4>
              <p className="text-orange-700">
                La paleta está inspirada en los ingredientes peruanos: el naranja del ají amarillo, 
                el rojo del rocoto, el dorado del palillo. Cada color evoca sabores, aromas y 
                emociones que conectan con la memoria culinaria peruana.
              </p>
            </div>
          </div>
        </section>

        {/* Componentes UI */}
        <section className="mb-20">
          <div className="bg-white rounded-3xl shadow-lg p-12 border border-orange-100">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
              Componentes de Interfaz
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Botones */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Botones</h3>
                <div className="space-y-4">
                  <div>
                    <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg">
                      Botón Primario
                    </button>
                    <p className="text-sm text-gray-600 mt-2">Para acciones principales (Ver receta, Comprar)</p>
                  </div>
                  <div>
                    <button className="bg-white border-2 border-orange-500 text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-xl font-bold transition-all duration-300">
                      Botón Secundario
                    </button>
                    <p className="text-sm text-gray-600 mt-2">Para acciones secundarias (Filtrar, Guardar)</p>
                  </div>
                  <div>
                    <button className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-6 py-3 rounded-xl font-medium transition-all duration-300">
                      Botón Terciario
                    </button>
                    <p className="text-sm text-gray-600 mt-2">Para acciones menos importantes</p>
                  </div>
                </div>
              </div>

              {/* Cards */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Cards de Receta</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl shadow-lg border border-orange-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="bg-gradient-to-br from-orange-400 to-red-500 h-32 flex items-center justify-center">
                      <span className="text-4xl">🍲</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-serif font-bold text-gray-900 mb-2">Olluco con Carne</h4>
                      <p className="text-gray-600 text-sm mb-3">El guiso tradicional que nos transporta...</p>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                          <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-semibold">30 min</span>
                          <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">Fácil</span>
                        </div>
                        <button className="text-orange-600 hover:text-orange-700 font-semibold text-sm">
                          Ver receta →
                        </button>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    Cards con hover effects, badges informativos y call-to-actions claros
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Principios de Diseño */}
        <section className="mb-20">
          <div className="bg-gradient-to-r from-amber-100 via-orange-100 to-red-100 rounded-3xl p-12 border-2 border-orange-200">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
              Principios de Diseño UX/UI
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-3xl shadow-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">👵</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-3">Accesible para todas las edades</h3>
                <p className="text-gray-700 text-sm">
                  Tipografías legibles, botones grandes, contraste adecuado para usuarios de 35-55 años.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-3xl shadow-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📱</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-3">Mobile-first</h3>
                <p className="text-gray-700 text-sm">
                  Diseñado pensando en smartphones, ideal para jóvenes de 25-35 años que usan Instagram.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-3xl shadow-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💕</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-3">Emocionalmente conectivo</h3>
                <p className="text-gray-700 text-sm">
                  Evoca nostalgia, tradición y el amor por la cocina casera peruana.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-3xl shadow-lg flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-3">Rápido y funcional</h3>
                <p className="text-gray-700 text-sm">
                  Filtros inteligentes, búsqueda potente, información clara para decisiones rápidas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mensaje para los Usuarios */}
        <section>
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-4xl font-serif font-bold mb-6">
              "El Recetario Digital de la Familia Peruana"
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Un espacio donde la tradición culinaria se encuentra con la modernidad digital. 
              Donde las recetas de la abuela conviven con las necesidades del joven cocinero urbano. 
              Donde cada plato cuenta una historia y cada ingrediente Teresita garantiza el sabor auténtico.
            </p>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-30">
                <h3 className="font-bold text-xl mb-3">Para "La Guardiana del Sabor"</h3>
                <p className="text-orange-100">
                  Recetas confiables, instrucciones claras, tips tradicionales. 
                  La seguridad de que el sabor será el esperado, como siempre.
                </p>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-30">
                <h3 className="font-bold text-xl mb-3">Para "El Explorador Nostálgico"</h3>
                <p className="text-orange-100">
                  Recetas rápidas, videos cortos, filtros inteligentes. 
                  La practicidad moderna para recrear el sabor de casa.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DesignSystem;