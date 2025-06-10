import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpenIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import HeroSection from '../components/Sections/HeroSection';
// Componentes específicos de HomePage
import RecipeInspiration from '../components/HomePage/RecipeInspiration';
import ProductSolution from '../components/HomePage/ProductSolution';
import TrustLegacy from '../components/HomePage/TrustLegacy';
import CommunitySection from '../components/HomePage/CommunitySection';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* 1. PROMESA DE VALOR - Hero Section con propuesta clara */}
      <HeroSection />
      
      {/* 2. INSPIRACIÓN - Recetas que despiertan el deseo de cocinar */}
      <RecipeInspiration />
      
      {/* 3. SOLUCIÓN - Productos que hacen posible la magia culinaria */}
      <ProductSolution />
      
      {/* 4. CONFIANZA - Legacy y credibilidad de la marca */}
      <TrustLegacy />
      
      {/* 5. PRUEBA SOCIAL - Comunidad y testimonio de usuarios */}
      <CommunitySection />

      {/* Call to Action Final - Navegación dual clara */}
      <section className="py-20 bg-primary-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-50 mb-6">
            ¿Listo para Comenzar tu Aventura Culinaria?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Elige tu camino: descubre recetas inspiradoras o encuentra los productos perfectos para tu cocina.
          </p>
          
          {/* Rutas de Navegación Duales */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mx-auto">
            <Link 
              to="/recetas"
              className="group bg-neutral-100 hover:bg-primary-800 hover:text-neutral-50 text-primary-700 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <BookOpenIcon className="w-6 h-6" />
              Ver Recetas
            </Link>
            
            <span className="text-primary-200 font-medium">o</span>
            
            <Link 
              to="/productos"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-transparent border-2 border-neutral-50 text-neutral-50 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-neutral-50 hover:text-primary-700 transition-all duration-300 transform hover:scale-105"
            >
              <ShoppingBagIcon className="w-6 h-6" />
              Ver Productos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
