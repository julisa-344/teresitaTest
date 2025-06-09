import React from 'react';

/**
 * Hero Headline Component
 * Main headline with emphasis on key words
 * 
 * @param {string} className - Additional CSS classes
 * @param {string} primaryText - Main headline text
 * @param {string} accentText - Accented part of headline
 * @param {string} secondaryText - Secondary part of headline
 */
const HeroHeadline = ({ 
  className = "",
  primaryText = "El sabor de casa,",
  accentText = "la confianza",
  secondaryText = "de siempre"
}) => (
  <h1 className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-6 leading-tight ${className}`}>
    {primaryText}{" "}
    <span className="text-orange-300">{accentText}</span>{" "}
    {secondaryText}
  </h1>
);

export default HeroHeadline;