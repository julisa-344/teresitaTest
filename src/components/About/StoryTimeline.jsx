import React from 'react';
import { timelineData } from '../../data/aboutData';

const TimelineItem = ({ item, index, isLast }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
      {/* Content */}
      <div className="lg:w-1/2 space-y-4">
        <div className="inline-block">
          <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold">
            {item.year}
          </span>
        </div>
        <h3 className="text-2xl lg:text-3xl font-bold text-neutral-800 leading-tight">
          {item.title}
        </h3>
        <h4 className="text-lg text-primary-600 font-semibold">
          {item.subtitle}
        </h4>
        <p className="text-neutral-600 leading-relaxed text-lg">
          {item.description}
        </p>
      </div>
      
      {/* Visual */}
      <div className="lg:w-1/2">
        <div className={`bg-gradient-to-br ${item.gradient} rounded-3xl p-8 lg:p-12 h-80 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300`}>
          <div className="text-center">
            <div className="text-6xl lg:text-7xl mb-4 animate-pulse">
              {item.icon}
            </div>
            <div className="text-3xl font-bold text-neutral-800">
              {item.year}
            </div>
            <div className="text-neutral-600 font-medium mt-2">
              {item.subtitle}
            </div>
          </div>
        </div>
      </div>
      
      {/* Timeline connector */}
      {!isLast && (
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 mt-16">
          <div className="w-0.5 h-16 bg-gradient-to-b from-primary-300 to-secondary-300"></div>
        </div>
      )}
    </div>
  );
};

const StoryTimeline = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="bg-secondary-100 text-secondary-700 px-6 py-3 rounded-full text-sm font-semibold tracking-wide uppercase">
              Nuestra Historia
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-display font-bold text-neutral-800 mb-6 leading-tight">
            El Nacimiento de un Sueño
          </h2>
          <p className="text-xl lg:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
            <em>"Detrás de cada gran sabor, hay una gran historia."</em>
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="space-y-24 lg:space-y-32 relative">
            {timelineData.map((item, index) => (
              <div key={index} className="relative">
                <TimelineItem 
                  item={item} 
                  index={index} 
                  isLast={index === timelineData.length - 1}
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Bottom decorative element */}
        <div className="text-center mt-20">
          <div className="inline-block bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full p-6">
            <div className="text-4xl">🎯</div>
          </div>
          <p className="text-lg text-neutral-600 mt-4 max-w-2xl mx-auto">
            Cada hito en nuestra historia ha sido guiado por el mismo propósito: 
            llevar los mejores sabores a tu mesa con la calidad que nos caracteriza.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StoryTimeline;