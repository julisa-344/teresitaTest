import React from 'react';
import { Link } from 'react-router-dom';
import {
  SparklesIcon,
  GlobeAmericasIcon, 
  BoltIcon, 
  RocketLaunchIcon,
  ShieldCheckIcon,
  HeartIcon,
  TrophyIcon,
  UsersIcon,
  BookOpenIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

/**
 * Timeline Item Component for milestones
 */
const TimelineItem = ({ year, title, description, icon: IconComponent }) => (
  <div className="flex items-start gap-3 group relative z-10">
    <div className="flex-shrink-0 w-12 h-12 bg-primary-700 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-md">
      <IconComponent className="w-6 h-6 text-white" />
    </div>
    <div className="flex-1">
      <div className="bg-white rounded-lg p-3 shadow-md group-hover:shadow-lg transition-all duration-300 border border-gray-200">
        <div className="text-primary-700 font-bold text-xs uppercase tracking-wider mb-1 opacity-80">{year}</div>
        <h4 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-primary-700 transition-colors duration-300">{title}</h4>
        <p className="text-gray-600 text-xs leading-relaxed">{description}</p>
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
  subtitle = "39 años conectando familias a través del sabor auténtico peruano",
  foundingStory = {
    year: "1985",
    founderName: "Familia Teresita", 
    mission: "Desde 1985, llevamos a cada hogar peruano los sabores auténticos que definen nuestra identidad culinaria.",
  },
  milestones = [
    {
      year: "1985",
      title: "Los Primeros Pasos",
      description: "Fundación con la visión de preservar sabores tradicionales",
      icon: SparklesIcon
    },
    {
      year: "1995", 
      title: "Expansión Nacional",
      description: "Llegamos a todas las regiones del Perú",
      icon: GlobeAmericasIcon
    },
    {
      year: "2010",
      title: "Innovación Continua",
      description: "Nuevas líneas manteniendo la calidad tradicional",
      icon: BoltIcon
    },
    {
      year: "2024",
      title: "Nueva Era Digital",
      description: "Renovación para las nuevas generaciones",
      icon: RocketLaunchIcon
    }
  ],
  ctaText = "Conoce nuestra historia",
  ctaLink = "/nosotros"
}) => {
  return (
    <section className={`py-12 min-h-screen overflow-hidden ${className}`}>
      <div className="container mx-auto px-4 h-full flex flex-col">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4 leading-tight">
            {title}
          </h2>
          <div className="w-16 h-1 bg-gradient-brand mx-auto mb-4 rounded-full"></div>
          <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start flex-1 overflow-hidden">
          {/* Left: Story Content */}
          <div className="space-y-6 animate-slide-up overflow-y-auto">
            {/* Founding Story */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary-700 rounded-lg flex items-center justify-center shadow-md">
                  <UsersIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 font-display">{foundingStory.founderName}</h3>
                  <p className="text-primary-700 font-semibold text-sm">Desde {foundingStory.year}</p>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed text-sm">
                {foundingStory.mission}
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                  <ShieldCheckIcon className="w-5 h-5 text-green-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-1 text-sm">Calidad Natural</h4>
                <p className="text-gray-600 text-xs">100% naturales</p>
              </div>
              
              <div className="text-center p-4 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                  <HeartIcon className="w-5 h-5 text-primary-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-1 text-sm">Tradición Familiar</h4>
                <p className="text-gray-600 text-xs">Generaciones</p>
              </div>
              
              <div className="text-center p-4 bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                <div className="w-10 h-10 bg-secondary-100 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                  <TrophyIcon className="w-5 h-5 text-secondary-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-1 text-sm">Excelencia</h4>
                <p className="text-gray-600 text-xs">Alta calidad</p>
              </div>
            </div>
          </div>

          {/* Right: Timeline */}
          <div className="space-y-6 animate-slide-up overflow-y-auto">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 font-display mb-2">
                Nuestra Trayectoria
              </h3>
              <div className="w-10 h-1 bg-gradient-brand mx-auto rounded-full"></div>
            </div>
            
            <div className="space-y-4 relative">
              {/* Timeline line - Centered with icons */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary-200 z-0"></div>

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
        <div className="text-center mt-8 animate-fade-in">
          <Link 
            to={ctaLink}
            className="inline-flex items-center gap-2 bg-primary-700 hover:shadow-lg text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-md group"
          >
            <BookOpenIcon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
            {ctaText}
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrustLegacy;