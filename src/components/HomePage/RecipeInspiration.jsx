import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpenIcon } from '@heroicons/react/24/outline';
import { recipes } from '../../data/recipes';
import { MoveRight } from 'lucide-react';

/**
 * Recipe Card Component with RecipesPage styling (no rating)
 */
const RecipeCard = ({ recipe }) => (
  <Link
    to={`/receta/${recipe.id}`}
    onClick={() => window.scrollTo(0, 0)}
    className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-3 hover:scale-[1.02] flex flex-col h-full"
  >
    {/* Recipe Image */}
    <div className="relative overflow-hidden group flex-shrink-0">
      <img
        src={recipe.image}
        alt={recipe.name}
        className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400"></div>
      
      {/* Time Badge (identical to RecipesPage) */}
      <div className="absolute top-4 left-4 transform transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
        <div className="bg-gradient-to-r from-primary-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-xl backdrop-blur-sm border border-white/20">
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            {recipe.time} min
          </span>
        </div>
      </div>
    </div>

    {/* Recipe Content */}
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="font-bold text-gray-900 text-xl mb-3 line-clamp-2 group-hover:text-primary-700 transition-colors duration-300">
        {recipe.name}
      </h3>
      
      <p className="text-gray-700 text-sm mb-4 line-clamp-2 leading-relaxed flex-shrink-0">
        {recipe.description}
      </p>

      {/* Recipe Meta Info (identical to RecipesPage) */}
      <div className="flex items-center justify-between mb-4 flex-shrink-0">
        <span className="bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold border border-indigo-200 shadow-sm">
          {recipe.difficultyLabel || recipe.difficulty}
        </span>
        <span className="text-gray-500 text-xs flex items-center bg-gray-50 px-2 py-1 rounded-lg">
          <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
          </svg>
          {recipe.portions} porciones
        </span>
      </div>
      
      {/* Call to Action Button (identical to RecipesPage) */}
      <div className="flex items-center justify-between">
        <span className="text-primary-700 font-medium group-hover:text-primary-800">
          Ver receta completa
             </span>
          <MoveRight className="w-5 h-5 text-primary-700 group-hover:text-primary-800 transition-transform duration-300 transform group-hover:translate-x-1" />
     
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
  featuredRecipes = recipes.slice(0, 4), // Show only 4 featured recipes for homepage
  ctaText = "Ver todas las recetas",
  ctaLink = "/recetas"
}) => {
  return (
    <section className={`py-20 ${className}`}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-6">
            {title}
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Featured Recipes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 max-w-7xl mx-auto">
          {featuredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link 
            to={ctaLink}
            className="inline-flex items-center gap-2 bg-primary-700 hover:shadow-lg text-white px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 transform hover:scale-105 shadow-md group"
          >
            <BookOpenIcon className="w-6 h-6" />
            {ctaText}
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecipeInspiration;