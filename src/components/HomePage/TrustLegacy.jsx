import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Timeline Item Component for milestones
 */
const TimelineItem = ({ year, title, description, icon }) => (
  <div className="flex items-start gap-4 group">
    <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
      <span className="text-2xl">{icon}</span>
    </div>
    <div className="flex-1">
      <div className="bg-white rounded-lg p-4 shadow-sm group-hover:shadow-md transition-shadow duration-300">
        <div className="text-orange-600 font-bold text-sm mb-1">{year}</div>
        <h4 className="font-bold text-neutral-800 mb-2">{title}</h4>
        <p className="text-neutral-600 text-sm">{description}</p>
      </div>
    </div>
  </div>
);

/**
 * Trust Legacy Section Component
 * Shows brand story and builds trust through heritage
 */
const TrustLegacy = ({ 
  className = "",
  title = "Un Legado de Sabor Familiar",
  subtitle = "39 años cocinando historias, conectando familias y preservando la tradición culinaria peruana",
  foundingStory = {
    year: "1985",
    founderName: "Familia Teresita", 
    mission: "Desde 1985, hemos estado comprometidos con llevar a cada hogar peruano los sabores auténticos que definen nuestra identidad culinaria. Lo que comenzó como un sueño familiar se ha convertido en la marca de confianza de miles de familias.",
    vision: "Creemos que cada comida es una oportunidad de crear memorias, y nuestros productos son el hilo invisible que conecta generaciones a través del sabor."
  },
  milestones = [
    {
      year: "1985",
      title: "Los Primeros Pasos",
      description: "Fundación de Teresita con la visión de preservar los sabores tradicionales peruanos",
      icon: "🌱"
    },
    {
      year: "1995", 
      title: "Expansión Nacional",
      description: "Llegamos a todas las regiones del Perú, llevando nuestros productos a cada rincón del país",
      icon: "🗺️"
    },
    {
      year: "2010",
      title: "Innovación Continua",
      description: "Incorporamos nuevas líneas de productos manteniendo siempre la calidad tradicional",
      icon: "⚡"
    },
    {
      year: "2024",
      title: "Nueva Era Digital",
      description: "Renovamos nuestra identidad para conectar con las nuevas generaciones sin perder nuestra esencia",
      icon: "🚀"
    }
  ],
  ctaText = "Leer nuestra historia",
  ctaLink = "/nosotros"
}) => {
  return (
    <section className={`py-20 bg-gradient-to-br from-neutral-50 to-orange-50 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-800 mb-6">
            {title}
          </h2>
          <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Story Content */}
          <div className="space-y-8">
            {/* Founding Story */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <span className="text-3xl">👨‍👩‍👧‍👦</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-800">{foundingStory.founderName}</h3>
                  <p className="text-orange-600 font-semibold">Desde {foundingStory.year}</p>
                </div>
              </div>
              
              <p className="text-neutral-700 leading-relaxed mb-4">
                {foundingStory.mission}
              </p>
              
              <p className="text-neutral-600 leading-relaxed italic">
                {foundingStory.vision}
              </p>
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">🌿</span>
                </div>
                <h4 className="font-bold text-neutral-800 mb-2">Calidad Natural</h4>
                <p className="text-sm text-neutral-600">Productos 100% naturales sin conservantes artificiales</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">❤️</span>
                </div>
                <h4 className="font-bold text-neutral-800 mb-2">Tradición Familiar</h4>
                <p className="text-sm text-neutral-600">Recetas y procesos transmitidos de generación en generación</p>
              </div>
              
              <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">🏆</span>
                </div>
                <h4 className="font-bold text-neutral-800 mb-2">Excelencia</h4>
                <p className="text-sm text-neutral-600">Compromiso inquebrantable con la más alta calidad</p>
              </div>
            </div>
          </div>

          {/* Right: Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-neutral-800 text-center mb-8">
              Nuestra Trayectoria
            </h3>
            
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <TimelineItem 
                  key={index}
                  year={milestone.year}
                  title={milestone.title}
                  description={milestone.description}
                  icon={milestone.icon}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Link 
            to={ctaLink}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-neutral-800 to-neutral-700 hover:from-neutral-700 hover:to-neutral-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="text-xl">📖</span>
            {ctaText}
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrustLegacy;