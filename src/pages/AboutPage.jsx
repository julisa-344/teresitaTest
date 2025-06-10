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
    </div>
  );
};

export default AboutPage;
