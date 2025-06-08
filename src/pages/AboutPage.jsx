import React from 'react';
import {
  AboutHero,
  StoryTimeline,
  QualityCommitment,
  PartnersSection
} from '../components/About';

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section - El Corazón de la Marca */}
      <AboutHero />
      
      {/* Story Timeline - El Nacimiento de un Sueño */}
      <StoryTimeline />
      
      {/* Quality & Team - Del Origen a tu Mesa */}
      <QualityCommitment />
      
      {/* Partners - Encuéntranos en tus tiendas de confianza */}
      <PartnersSection />
      
      {/* Final Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto text-white">
            <div className="text-5xl mb-6">🍽️</div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Únete a la tradición que une familias
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Cada producto Teresita lleva consigo 38 años de tradición, calidad y amor por la cocina peruana. 
              Descubre cómo nuestros sabores pueden transformar tus comidas en momentos especiales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-neutral-100 transition-colors duration-300 text-lg">
                Ver Nuestros Productos
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 text-lg">
                Explorar Recetas
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
