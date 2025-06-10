import React from 'react';
import { 
  MapPinIcon, 
  TruckIcon, 
  ClockIcon, 
  GiftIcon 
} from '@heroicons/react/24/outline';
import { partners } from '../../data/aboutData';

const PartnerCard = ({ partner, index }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 group">
      <div className="text-center">
        <div className="w-16 h-16 bg-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
          <span className="text-3xl">{partner.logo}</span>
        </div>
        <h3 className="text-lg font-bold text-neutral-800 mb-3">
          {partner.name}
        </h3>
        <p className="text-neutral-600 text-sm leading-relaxed">
          {partner.description}
        </p>
      </div>
    </div>
  );
};

const PartnersSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="bg-secondary-100 text-secondary-700 px-6 py-3 rounded-full text-sm font-semibold tracking-wide uppercase">
              Nuestros Socios
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-neutral-800 mb-6 leading-tight">
            Encuéntranos en tus tiendas de confianza
          </h2>
          <p className="text-xl lg:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
            Trabajamos con las mejores cadenas comerciales del país para estar siempre 
            cerca de ti y hacer que encuentres nuestros productos fácilmente.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {partners.map((partner, index) => (
            <PartnerCard key={index} partner={partner} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-primary-700 rounded-3xl p-8 lg:p-12 text-center text-white shadow-2xl">
          <div className="max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPinIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              ¿No encuentras nuestros productos?
            </h3>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Estamos en constante expansión. Si no encuentras Teresita en tu tienda favorita, 
              escríbenos y trabajaremos para llegar hasta ti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-3 rounded-full font-semibold hover:bg-neutral-100 transition-colors duration-300">
                Contáctanos
              </button>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <TruckIcon className="w-8 h-8 text-primary-600" />
            </div>
            <h4 className="text-lg font-bold text-neutral-800 mb-2">
              Distribución Nacional
            </h4>
            <p className="text-neutral-600 text-sm">
              Llegamos a todas las regiones del Perú con la misma calidad
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ClockIcon className="w-8 h-8 text-secondary-600" />
            </div>
            <h4 className="text-lg font-bold text-neutral-800 mb-2">
              Siempre Disponible
            </h4>
            <p className="text-neutral-600 text-sm">
              Trabajamos para garantizar stock permanente en nuestros puntos de venta
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <GiftIcon className="w-8 h-8 text-primary-600" />
            </div>
            <h4 className="text-lg font-bold text-neutral-800 mb-2">
              Promociones Especiales
            </h4>
            <p className="text-neutral-600 text-sm">
              Descubre ofertas exclusivas en nuestros puntos de venta aliados
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;