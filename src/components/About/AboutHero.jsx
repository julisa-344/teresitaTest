import React from 'react';

const AboutHero = () => {
  const features = [
    {
      icon: '🌅',
      title: 'Desde 1986',
      description: ''
    },
    {
      icon: '🌿',
      title: 'Ingredientes Selectos',
      description: ''
    },
    {
      icon: '🇵🇪',
      title: 'Auténticamente Peruano',
      description: ''
    },
    {
      icon: '❤️',
      title: 'Tradición Familiar',
      description: ''
    }
  ];

  return (
    <section id="nosotros" className="py-8 lg:py-12 bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 min-h-[calc(100vh-116px)]">
      <div className="container mx-auto px-4 h-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
          {/* Left Content */}
          <div>
            <div className="mb-4">
              <span className="inline-block bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase">
                El Corazón de la Marca
              </span>
            </div>
            
            <h1 className="text-3xl lg:text-5xl font-display font-bold text-neutral-800 mb-4 leading-tight">
              Guardiana del Sabor
              <span className="block text-primary-600">Auténtico</span>
            </h1>
            
            <div className="text-lg lg:text-xl font-light text-secondary-600 mb-6 italic">
              "Detrás de cada gran sabor, hay una gran historia."
            </div>
            
            <p className="text-base lg:text-lg text-neutral-600 mb-6 leading-relaxed">
              Somos Teresita, la marca que nació del amor por los sabores tradicionales 
              del Perú. Desde 1986, nuestra misión ha sido preservar y compartir la 
              riqueza culinaria de nuestra tierra.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 group">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg flex items-center justify-center text-lg group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-neutral-800 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Enhanced Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6 lg:p-8 shadow-xl">
              {/* Company Stats - Updated */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center bg-white rounded-xl p-3 shadow-lg">
                  <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-1">38+</div>
                  <div className="text-xs lg:text-sm text-neutral-600 font-medium">Años de tradición</div>
                </div>
                <div className="text-center bg-white rounded-xl p-3 shadow-lg">
                  <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-secondary-600 to-primary-600 bg-clip-text text-transparent mb-1">24</div>
                  <div className="text-xs lg:text-sm text-neutral-600 font-medium">Departamentos</div>
                </div>
                <div className="text-center bg-white rounded-xl p-3 shadow-lg">
                  <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-1">1M+</div>
                  <div className="text-xs lg:text-sm text-neutral-600 font-medium">Familias confiando</div>
                </div>
                <div className="text-center bg-white rounded-xl p-3 shadow-lg">
                  <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-secondary-600 to-primary-600 bg-clip-text text-transparent mb-1">100%</div>
                  <div className="text-xs lg:text-sm text-neutral-600 font-medium">Calidad garantizada</div>
                </div>
              </div>

              {/* Brand Promise */}
              <div className="bg-white rounded-xl p-4 shadow-lg">
                <h3 className="text-lg font-bold text-neutral-800 mb-3 text-center">
                  Nuestra Promesa
                </h3>
                <p className="text-center text-neutral-600 mb-4 italic text-sm">
                  "Llevamos el auténtico sabor peruano a tu mesa, con la calidad 
                  y tradición que nos ha caracterizado por generaciones."
                </p>
                <div className="flex justify-center space-x-6">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-lg">❤️</span>
                    </div>
                    <span className="text-xs font-medium text-neutral-700">Pasión</span>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-lg">🤝</span>
                    </div>
                    <span className="text-xs font-medium text-neutral-700">Confianza</span>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-lg">🌱</span>
                    </div>
                    <span className="text-xs font-medium text-neutral-700">Tradición</span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;