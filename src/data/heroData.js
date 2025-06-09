/**
 * Hero Section Configuration
 * Centralized data for hero section content
 */

export const heroConfig = {
  brandPromise: {
    text: "Tu mesa, nuestra historia"
  },
  
  headline: {
    primaryText: "El sabor de casa,",
    accentText: "la confianza",
    secondaryText: "de siempre"
  },
  
  description: {
    text: "39 años cocinando historias contigo. Descubre la auténtica sazón peruana que ha acompañado a miles de familias, generación tras generación."
  },
  
  ctaButtons: {
    primary: {
      to: "/recetas",
      text: "Explorar Recetas",
      icon: "👨‍🍳"
    },
    secondary: {
      to: "/productos",
      text: "Ver Nuestros Productos", 
      icon: "🛍️"
    }
  },
  
  qualityIndicators: [
    { text: "100% Natural", color: "bg-green-400" },
    { text: "Tradición Familiar", color: "bg-orange-400" },
    { text: "Sabor Auténtico", color: "bg-red-400" }
  ],
  
  backgroundImage: {
    src: "/hero.jpg",
    alt: "Cocina tradicional peruana Teresita"
  }
};

// Alternative hero configurations for A/B testing or seasonal changes
export const alternativeHeroConfigs = {
  festive: {
    ...heroConfig,
    headline: {
      primaryText: "Celebra con",
      accentText: "el sabor",
      secondaryText: "de la tradición"
    },
    qualityIndicators: [
      { text: "Recetas Festivas", color: "bg-red-400" },
      { text: "Sabores Únicos", color: "bg-green-400" },
      { text: "Momentos Especiales", color: "bg-orange-400" }
    ]
  },
  
  newYear: {
    ...heroConfig,
    headline: {
      primaryText: "Comienza el año con",
      accentText: "nuevos sabores",
      secondaryText: "de siempre"
    },
    brandPromise: {
      text: "Nuevos sabores, misma tradición"
    }
  }
};