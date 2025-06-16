import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  AboutHero,
  StoryTimeline,
  QualityCommitment,
  PartnersSection
} from '../components/About';

const AboutPage = () => {
  const location = useLocation();

  useEffect(() => {
    // Función para hacer scroll al elemento con el hash especificado
    const scrollToSection = () => {
      if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          // Pequeño delay para asegurar que la página esté completamente renderizada
          setTimeout(() => {
            element.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }, 100);
        }
      }
    };

    scrollToSection();
  }, [location.hash]);

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
    </div>
  );
};

export default AboutPage;
