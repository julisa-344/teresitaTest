import React from 'react';

const AboutSection = () => {
  const features = [
    {
      icon: '🏭',
      title: 'Desde 1985',
      description: 'Más de 40 años de experiencia en la industria alimentaria peruana'
    },
    {
      icon: '🌿',
      title: 'Productos Naturales',
      description: 'Ingredientes seleccionados y procesados con los más altos estándares'
    },
    {
      icon: '🇵🇪',
      title: 'Tradición Peruana',
      description: 'Sabores auténticos que han conquistado el paladar peruano'
    },
    {
      icon: '👨‍👩‍👧‍👦',
      title: 'Para toda la Familia',
      description: 'Productos que unen a las familias alrededor de la mesa'
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-6">
              <span className="inline-block bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
                Nosotros
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-neutral-800 mb-6 leading-tight">
              Tradición y calidad en cada producto
            </h2>
            
            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              En Teresita, llevamos más de cuatro décadas comprometidos con llevar 
              a tu mesa los sabores más auténticos del Perú. Nuestra pasión por la 
              calidad y la tradición culinaria nos ha convertido en una marca de 
              confianza para millones de familias peruanas.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl flex items-center justify-center text-2xl">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-800 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl p-8 lg:p-12">
              {/* Company Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">40+</div>
                  <div className="text-sm lg:text-base text-neutral-600">Años de experiencia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-secondary-600 mb-2">50+</div>
                  <div className="text-sm lg:text-base text-neutral-600">Productos únicos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-primary-600 mb-2">1M+</div>
                  <div className="text-sm lg:text-base text-neutral-600">Familias satisfechas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-secondary-600 mb-2">100%</div>
                  <div className="text-sm lg:text-base text-neutral-600">Productos naturales</div>
                </div>
              </div>

              {/* Company Values */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-neutral-800 mb-4 text-center">
                  Nuestros Valores
                </h3>
                <div className="flex justify-center space-x-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-xl">❤️</span>
                    </div>
                    <span className="text-sm font-medium text-neutral-700">Calidad</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-xl">🤝</span>
                    </div>
                    <span className="text-sm font-medium text-neutral-700">Confianza</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-xl">🌱</span>
                    </div>
                    <span className="text-sm font-medium text-neutral-700">Tradición</span>
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

export default AboutSection;
