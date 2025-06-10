import React from 'react';
import { 
  CalendarIcon, 
  CheckCircleIcon, 
  FlagIcon, 
  HeartIcon,
  StarIcon,
  HandRaisedIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const AboutHero = () => {
  const features = [
    {
      icon: CalendarIcon,
      title: 'Desde 1986',
      description: ''
    },
    {
      icon: CheckCircleIcon,
      title: 'Ingredientes Selectos',
      description: ''
    },
    {
      icon: FlagIcon,
      title: 'Auténticamente Peruano',
      description: ''
    },
    {
      icon: HeartIcon,
      title: 'Tradición Familiar',
      description: ''
    }
  ];

  return (
    <section id="nosotros" className="py-8 lg:py-12 min-h-[calc(100vh-116px)]">
      <div className="container mx-auto px-4 h-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
          {/* Left Content */}
          <div>
            <div className="mb-4">
              <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-xs font-semibold uppercase">
                El Corazón de la Marca
              </span>
            </div>
            
            <h1 className="text-3xl lg:text-5xl font-display font-bold text-neutral-800 mb-4 leading-tight">
              Guardiana del Sabor
              <span className="block text-primary-700">Auténtico</span>
            </h1>
            
            <div className="text-lg lg:text-xl font-light text-primary-700 mb-6 italic">
              "Detrás de cada gran sabor, hay una gran historia."
            </div>
            
            <p className="text-base lg:text-lg text-neutral-700 mb-6 leading-relaxed">
              Somos Teresita, la marca que nació del amor por los sabores tradicionales 
              del Perú. Desde 1986, nuestra misión ha sido preservar y compartir la 
              riqueza culinaria de nuestra tierra.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-start space-x-3 group">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-5 h-5 text-primary-100" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-neutral-800 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-neutral-700 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Enhanced Visual */}
          <div className="relative">
            <div className="bg-primary-100 rounded-2xl p-6 lg:p-8 shadow-xl">
              {/* Company Stats - Updated */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center bg-primary-50 rounded-xl p-3 shadow-lg">
                  <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary-700 to-secondary-700 bg-clip-text text-transparent mb-1">38+</div>
                  <div className="text-xs lg:text-sm text-neutral-700 font-medium">Años de tradición</div>
                </div>
                <div className="text-center bg-primary-50 rounded-xl p-3 shadow-lg">
                  <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-secondary-700 to-primary-700 bg-clip-text text-transparent mb-1">24</div>
                  <div className="text-xs lg:text-sm text-neutral-700 font-medium">Departamentos</div>
                </div>
                <div className="text-center bg-primary-50 rounded-xl p-3 shadow-lg">
                  <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-primary-700 to-secondary-700 bg-clip-text text-transparent mb-1">1M+</div>
                  <div className="text-xs lg:text-sm text-neutral-700 font-medium">Familias confiando</div>
                </div>
                <div className="text-center bg-primary-50 rounded-xl p-3 shadow-lg">
                  <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-secondary-700 to-primary-700 bg-clip-text text-transparent mb-1">100%</div>
                  <div className="text-xs lg:text-sm text-neutral-700 font-medium">Calidad garantizada</div>
                </div>
              </div>

              {/* Brand Promise */}
              <div className="bg-primary-50 rounded-xl p-4 shadow-lg">
                <h3 className="text-lg font-bold text-neutral-800 mb-3 text-center">
                  Nuestra Promesa
                </h3>
                <p className="text-center text-neutral-700 mb-4 italic text-sm">
                  "Llevamos el auténtico sabor peruano a tu mesa, con la calidad 
                  y tradición que nos ha caracterizado por generaciones."
                </p>
                <div className="flex justify-center space-x-6">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <HeartIcon className="w-5 h-5 text-red-700" />
                    </div>
                    <span className="text-xs font-medium text-neutral-700">Pasión</span>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <HandRaisedIcon className="w-5 h-5 text-blue-700" />
                    </div>
                    <span className="text-xs font-medium text-neutral-700">Confianza</span>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <SparklesIcon className="w-5 h-5 text-green-700" />
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