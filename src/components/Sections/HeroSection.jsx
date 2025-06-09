import React from 'react';
import {
  HeroBrandPromise,
  HeroHeadline,
  HeroCTAs,
  QualityIndicators
} from '../Hero';
import { heroConfig } from '../../data/heroData';

// Component for the hero description
const HeroDescription = ({ className = "", text }) => (
  <p className={`text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed max-w-2xl ${className}`}>
    {text}
  </p>
);

// Component for scroll indicator
const ScrollIndicator = () => (
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
    <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
      <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse"></div>
    </div>
  </div>
);

// Main Hero Section Component
const HeroSection = ({ config = heroConfig }) => {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden">
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(
            135deg,
            rgba(0, 0, 0, 0.5) 0%,
            rgba(239, 68, 68, 0.3) 25%,
            rgba(0, 0, 0, 0.6) 75%,
            rgba(0, 0, 0, 0.7) 100%
          ), url('${config.backgroundImage.src}')`
        }}
      />
      
      {/* Overlay pattern for texture */}
      <div className="absolute inset-0 bg-food-texture opacity-10" />
      
      {/* Main Content */}
      <div className="relative min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl">
            {/* Content arranged vertically for better flow */}
            <div className="text-white space-y-8">
              <HeroBrandPromise
                className="animate-fade-in"
                text={config.brandPromise.text}
              />
              
              <HeroHeadline
                className="animate-slide-up"
                primaryText={config.headline.primaryText}
                accentText={config.headline.accentText}
                secondaryText={config.headline.secondaryText}
              />
              
              <HeroDescription
                className="text-neutral-200 animate-slide-up"
                text={config.description.text}
              />
              
              <QualityIndicators
                className="animate-fade-in"
                indicators={config.qualityIndicators}
              />
              
              <HeroCTAs
                className="animate-slide-up"
                recipesButton={config.ctaButtons.primary}
                productsButton={config.ctaButtons.secondary}
              />
            </div>
          </div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
};

export default HeroSection;
