import React from 'react';

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen bg-food-texture">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRkZGQkVCIi8+CjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjUiIGZpbGw9IiNGNTlFMEIiIGZpbGwtb3BhY2l0eT0iMC4xIi8+CjxjaXJjbGUgY3g9IjgwIiBjeT0iODAiIHI9IjUiIGZpbGw9IiNGNTlFMEIiIGZpbGwtb3BhY2l0eT0iMC4xIi8+Cjwvc3ZnPg==')`
        }}
      />
      
      {/* Content */}
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="mb-6">
              <span className="inline-block bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
                Recetas Teresita
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Olluco con carne.
            </h1>
            
            <p className="text-xl lg:text-2xl text-neutral-200 mb-8 leading-relaxed max-w-xl">
              Después de la papa, el olluco es el tubérculo más famoso del Perú. 
              Por su forma y variados colores, ha conquistado no solo el paladar 
              de los pobladores de los Andes, si no de todo el Perú.
            </p>
            
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Ver más
            </button>
          </div>

          {/* Right Content - Recipe Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto lg:mx-0">
            <div className="relative">
              {/* Teresita Logo on Card */}
              <div className="bg-primary-500 text-white px-3 py-1 rounded-lg font-bold text-sm mb-4 inline-block">
                Teresita
                <span className="block text-xs font-normal">Desde 1985</span>
              </div>
              
              {/* Recipe Image Placeholder */}
              <div className="bg-gradient-to-br from-secondary-200 to-secondary-300 rounded-xl h-48 mb-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-3 mx-auto">
                    <span className="text-2xl">🍲</span>
                  </div>
                  <p className="text-neutral-600 font-medium">Olluco con Carne</p>
                </div>
              </div>

              {/* Recipe Info */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-600">Tiempo de preparación:</span>
                  <span className="font-semibold text-neutral-800">45 min</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-600">Porciones:</span>
                  <span className="font-semibold text-neutral-800">4 personas</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-600">Dificultad:</span>
                  <span className="font-semibold text-secondary-600">Media</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
