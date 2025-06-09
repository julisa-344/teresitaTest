import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Hero Call-to-Action Buttons Component
 * Dual navigation buttons for recipes and products
 * 
 * @param {string} className - Additional CSS classes
 * @param {Object} recipesButton - Configuration for recipes button
 * @param {Object} productsButton - Configuration for products button
 */
const HeroCTAs = ({ 
  className = "",
  recipesButton = {
    to: "/recetas",
    text: "Explorar Recetas",
    icon: "👨‍🍳"
  },
  productsButton = {
    to: "/productos", 
    text: "Ver Nuestros Productos",
    icon: "🛍️"
  }
}) => (
  <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
    {/* Primary CTA - Recipes */}
    <Link 
      to={recipesButton.to}
      className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
    >
      <span className="text-xl group-hover:animate-pulse">{recipesButton.icon}</span>
      {recipesButton.text}
    </Link>
    
    {/* Secondary CTA - Products */}
    <Link 
      to={productsButton.to}
      className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
    >
      <span className="text-xl group-hover:animate-pulse">{productsButton.icon}</span>
      {productsButton.text}
    </Link>
  </div>
);

export default HeroCTAs;