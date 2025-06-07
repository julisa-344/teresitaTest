import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/Sections/HeroSection';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Featured Content Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-neutral-800 mb-6">
              Bienvenido a Teresita
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Descubre más de 40 años de tradición culinaria peruana. Explora nuestros productos, 
              recetas auténticas y la historia que nos ha convertido en una marca de confianza.
            </p>
          </div>

          {/* Quick Navigation Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link 
              to="/nosotros"
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">👥</div>
              <h3 className="text-xl font-bold text-neutral-800 mb-2">Nosotros</h3>
              <p className="text-neutral-600">Conoce nuestra historia y valores</p>
            </Link>

            <Link 
              to="/productos"
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">🛍️</div>
              <h3 className="text-xl font-bold text-neutral-800 mb-2">Productos</h3>
              <p className="text-neutral-600">Explora nuestra gama de condimentos</p>
            </Link>

            <Link 
              to="/recetas"
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">👨‍🍳</div>
              <h3 className="text-xl font-bold text-neutral-800 mb-2">Recetas</h3>
              <p className="text-neutral-600">Descubre sabores auténticos</p>
            </Link>

            <Link 
              to="/contacto"
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">📞</div>
              <h3 className="text-xl font-bold text-neutral-800 mb-2">Contacto</h3>
              <p className="text-neutral-600">Comunícate con nosotros</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-neutral-800 mb-6">
              Últimas Noticias
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <article className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6">
              <div className="text-4xl mb-4">🎉</div>
              <h3 className="text-xl font-bold text-neutral-800 mb-2">Nuevo Recetario Digital</h3>
              <p className="text-neutral-600 mb-4">
                Descubre nuestro recetario digital renovado con más de 100 recetas tradicionales.
              </p>
              <Link to="/recetas" className="text-primary-600 font-semibold hover:text-primary-700">
                Ver recetas →
              </Link>
            </article>

            <article className="bg-gradient-to-br from-secondary-50 to-primary-50 rounded-2xl p-6">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-xl font-bold text-neutral-800 mb-2">Productos Naturales</h3>
              <p className="text-neutral-600 mb-4">
                Todos nuestros productos están hechos con ingredientes 100% naturales.
              </p>
              <Link to="/productos" className="text-primary-600 font-semibold hover:text-primary-700">
                Ver productos →
              </Link>
            </article>

            <article className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-neutral-800 mb-2">40 Años de Tradición</h3>
              <p className="text-neutral-600 mb-4">
                Celebramos más de cuatro décadas llevando sabores auténticos a tu mesa.
              </p>
              <Link to="/nosotros" className="text-primary-600 font-semibold hover:text-primary-700">
                Nuestra historia →
              </Link>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
