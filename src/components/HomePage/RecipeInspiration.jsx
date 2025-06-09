import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Recipe Card Component for featured recipes
 */
const RecipeCard = ({ recipe }) => (
  <Link 
    to={`/recetas/${recipe.id}`}
    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
  >
    {/* Recipe Image */}
    <div className="relative h-48 md:h-56 overflow-hidden">
      <img 
        src={recipe.image} 
        alt={recipe.name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      
      {/* Difficulty Badge */}
      <div className="absolute top-4 left-4">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
          recipe.difficulty === 'Fácil' ? 'bg-green-500/90 text-white' :
          recipe.difficulty === 'Media' ? 'bg-yellow-500/90 text-white' :
          'bg-red-500/90 text-white'
        }`}>
          {recipe.difficulty}
        </span>
      </div>

      {/* Rating */}
      <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg px-2 py-1">
        <div className="flex items-center gap-1">
          <span className="text-yellow-400 text-sm">⭐</span>
          <span className="text-white text-sm font-medium">{recipe.rating}</span>
        </div>
      </div>
    </div>

    {/* Recipe Content */}
    <div className="p-6">
      <h3 className="text-xl font-bold text-neutral-800 mb-2 group-hover:text-orange-600 transition-colors">
        {recipe.name}
      </h3>
      
      <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
        {recipe.description}
      </p>

      {/* Recipe Meta Info */}
      <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
        <div className="flex items-center gap-1">
          <span>⏱️</span>
          <span>{recipe.time} min</span>
        </div>
        <div className="flex items-center gap-1">
          <span>👥</span>
          <span>{recipe.portions} porciones</span>
        </div>
      </div>

      {/* Teresita Products */}
      {recipe.productosTeresita && recipe.productosTeresita.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-4">
          {recipe.productosTeresita.slice(0, 2).map((product, index) => (
            <span 
              key={index}
              className="bg-orange-100 text-orange-700 px-2 py-1 rounded-md text-xs font-medium"
            >
              {product}
            </span>
          ))}
          {recipe.productosTeresita.length > 2 && (
            <span className="text-orange-600 text-xs font-medium">
              +{recipe.productosTeresita.length - 2} más
            </span>
          )}
        </div>
      )}

      {/* Call to Action */}
      <div className="flex items-center justify-between">
        <span className="text-orange-600 font-medium group-hover:text-orange-700">
          Ver receta completa
        </span>
        <span className="text-orange-600 group-hover:translate-x-1 transition-transform">
          →
        </span>
      </div>
    </div>
  </Link>
);

/**
 * Recipe Inspiration Section Component
 * Shows featured recipes to inspire users
 */
const RecipeInspiration = ({ 
  className = "",
  title = "¿Qué Cocinamos Hoy?",
  subtitle = "Descubre recetas que despiertan tu creatividad culinaria",
  featuredRecipes = [],
  ctaText = "Ver todas las recetas",
  ctaLink = "/recetas"
}) => {
  return (
    <section className={`py-20 bg-gradient-to-br from-neutral-50 to-orange-50 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-800 mb-6">
            {title}
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Featured Recipes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {featuredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link 
            to={ctaLink}
            className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span className="text-xl">👨‍🍳</span>
            {ctaText}
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecipeInspiration;