import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArchiveBoxIcon, 
  CursorArrowRaysIcon, 
  CheckCircleIcon, 
  TrophyIcon, 
  LockClosedIcon,
  ChartBarIcon,
  UserGroupIcon,
  BoltIcon,
  LightBulbIcon,
  FolderIcon
} from '@heroicons/react/24/outline';
import { getProductById } from '../data/products';
import { getRecipesForProduct, getProductUsageStats } from '../utils/productRecipeIntegration';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const product = getProductById(productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-neutral-800 mb-4">Producto no encontrado</h1>
          <Link 
            to="/productos" 
            className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors"
          >
            Volver a Productos
          </Link>
        </div>
      </div>
    );
  }

  // Obtener recetas relacionadas y estadísticas usando las utilidades
  const relatedRecipes = getRecipesForProduct(product, 4);
  const productStats = getProductUsageStats(product);

  const ProductGallery = () => (
    <div className="lg:w-1/2">
      <div className="sticky top-8">
        {/* Imagen principal */}
        <div className="aspect-square bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-3xl p-8 mb-6 flex items-center justify-center shadow-lg">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="hidden w-full h-full items-center justify-center">
            <ArchiveBoxIcon className="w-24 h-24 text-neutral-400" />
          </div>
        </div>

        {/* Logo de la marca */}
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-neutral-50 rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src={product.brandLogo} 
                alt={`Logo ${product.brand}`}
                className="w-12 h-12 object-contain"
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg text-neutral-800">Marca {product.brand}</h3>
              <p className="text-neutral-600 text-sm">Calidad garantizada</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ProductInfo = () => (
    <div className="lg:w-1/2">
      {/* Título y marca */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
            {product.brand}
          </span>
          <span className="bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full text-sm">
            Premium Quality
          </span>
        </div>
        <h1 className="text-4xl lg:text-5xl font-display font-bold text-neutral-800 mb-4">
          {product.name}
        </h1>
        <p className="text-xl text-neutral-600 leading-relaxed">
          {product.inspiringDescription}
        </p>
      </div>

      {/* Usos ideales */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-neutral-800 mb-4 flex items-center">
          <span className="text-3xl mr-3">✨</span>
          Usos Ideales
        </h2>
        <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6">
          <ul className="space-y-3">
            {product.idealUses.map((use, index) => (
              <li key={index} className="flex items-start space-x-3">
                <span className="text-primary-500 text-xl mt-0.5">•</span>
                <span className="text-neutral-700 font-medium">{use}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Características del producto */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-neutral-800 mb-4 flex items-center">
          <CursorArrowRaysIcon className="w-8 h-8 text-primary-600 mr-3" />
          Por qué elegir este producto
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 shadow-md">
            <div className="mb-2">
              <CheckCircleIcon className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-neutral-800 mb-1">100% Natural</h3>
            <p className="text-sm text-neutral-600">Ingredientes seleccionados de la más alta calidad</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-md">
            <div className="mb-2">
              <TrophyIcon className="w-8 h-8 text-yellow-600" />
            </div>
            <h3 className="font-semibold text-neutral-800 mb-1">Tradición Familiar</h3>
            <p className="text-sm text-neutral-600">40 años de experiencia en sabores auténticos</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-md">
            <div className="mb-2">
              <LockClosedIcon className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-neutral-800 mb-1">Calidad Certificada</h3>
            <p className="text-sm text-neutral-600">Controles rigurosos de calidad y pureza</p>
          </div>
          <div className="bg-white rounded-xl p-4 shadow-md">
            <div className="mb-2">
              <ArchiveBoxIcon className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-semibold text-neutral-800 mb-1">Envase Premium</h3>
            <p className="text-sm text-neutral-600">Protege el sabor y mantiene la frescura</p>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-6 text-white">
        <h3 className="text-xl font-bold mb-2">¿Listo para llevarlo a casa?</h3>
        <p className="mb-4 opacity-90">Encuentra este producto en tu tienda favorita</p>
        <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-50 transition-colors">
          Encontrar Tiendas
        </button>
      </div>
    </div>
  );

  const RecipeCard = ({ recipe }) => (
    <Link 
      to={`/recetas/${recipe.id}`}
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
    >
      <div className="aspect-video bg-gradient-to-br from-neutral-50 to-neutral-100 overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div className="hidden w-full h-full items-center justify-center bg-neutral-100">
          <ChartBarIcon className="w-16 h-16 text-neutral-400" />
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded-full text-xs font-medium">
            {recipe.time} min
          </span>
          <span className="bg-secondary-100 text-secondary-700 px-2 py-1 rounded-full text-xs font-medium">
            {recipe.difficulty}
          </span>
        </div>
        <h3 className="font-bold text-lg text-neutral-800 mb-2 group-hover:text-primary-600 transition-colors">
          {recipe.name}
        </h3>
        <p className="text-neutral-600 text-sm mb-3">{recipe.description}</p>
        <div className="flex items-center text-sm text-neutral-500">
          <span className="flex items-center">
            <UserGroupIcon className="w-4 h-4 text-neutral-400 mr-1" />
            {recipe.portions} porciones
          </span>
        </div>
      </div>
    </Link>
  );

  const RelatedRecipes = () => (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-neutral-800 mb-6">
            Recetas con {product.name}
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Descubre deliciosas recetas que resaltan el sabor único de este producto. 
            Del producto a tu mesa, inspiración garantizada.
          </p>
        </div>

        {relatedRecipes.length > 0 ? (
          <>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {relatedRecipes.map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>
            
            <div className="text-center">
              <Link 
                to="/recetas"
                className="inline-flex items-center bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Ver Todas las Recetas
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4">
              <BoltIcon className="w-full h-full text-neutral-400" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-800 mb-4">
              ¡Pronto más recetas!
            </h3>
            <p className="text-neutral-600 mb-6">
              Estamos preparando deliciosas recetas con este producto
            </p>
            <Link 
              to="/recetas"
              className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors"
            >
              Explorar Otras Recetas
            </Link>
          </div>
        )}
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation breadcrumb */}
      <div className="bg-neutral-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-neutral-500 hover:text-primary-600 transition-colors">
              Inicio
            </Link>
            <span className="text-neutral-400">•</span>
            <Link to="/productos" className="text-neutral-500 hover:text-primary-600 transition-colors">
              Productos
            </Link>
            <span className="text-neutral-400">•</span>
            <span className="text-neutral-800 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product detail section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <ProductGallery />
            <ProductInfo />
          </div>
        </div>
      </section>

      {/* Related recipes section */}
      <RelatedRecipes />

      {/* Additional product information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-800 mb-8 text-center">
              Consejos de uso y conservación
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-6">
                <div className="mb-4">
                  <LightBulbIcon className="w-12 h-12 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-3">Consejos de Uso</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li>• Agrega al final de la cocción para preservar el aroma</li>
                  <li>• Combina con otros productos Teresita para más sabor</li>
                  <li>• Úsalo en marinadas para potenciar el sabor</li>
                  <li>• Perfecto tanto para principiantes como expertos</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-2xl p-6">
                <div className="mb-4">
                  <FolderIcon className="w-12 h-12 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-3">Conservación</h3>
                <ul className="space-y-2 text-neutral-700">
                  <li>• Guarda en lugar fresco y seco</li>
                  <li>• Mantén el envase bien cerrado</li>
                  <li>• Evita la exposición directa al sol</li>
                  <li>• Usa antes de la fecha de vencimiento</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Return to products */}
      <section className="py-12 bg-neutral-50">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-neutral-800 mb-6">
            Explora más productos de la familia Teresita
          </h3>
          <Link 
            to="/productos"
            className="inline-flex items-center bg-neutral-800 hover:bg-neutral-900 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
          >
            <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Ver Todos los Productos
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;