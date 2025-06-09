import { recipes } from '../data/recipes';

/**
 * Encuentra recetas que utilizan un producto específico
 * @param {Object} product - El producto a buscar
 * @param {number} limit - Número máximo de recetas a retornar
 * @returns {Array} Array de recetas relacionadas
 */
export const getRecipesForProduct = (product, limit = 4) => {
  if (!product) return [];

  const relatedRecipes = recipes.filter(recipe => {
    // Buscar en productosTeresita
    const inProductosTeresita = recipe.productosTeresita?.some(productName => 
      isProductMatch(productName, product.name) || 
      isProductMatch(product.name, productName)
    );

    // Buscar en ingredientes con flag teresita
    const inIngredientes = recipe.ingredientes?.some(ingredient => 
      ingredient.teresita && (
        isProductMatch(ingredient.nombre, product.name) ||
        isProductMatch(product.name, ingredient.nombre)
      )
    );

    return inProductosTeresita || inIngredientes;
  });

  return relatedRecipes.slice(0, limit);
};

/**
 * Verifica si dos nombres de productos coinciden
 * @param {string} productName1 
 * @param {string} productName2 
 * @returns {boolean}
 */
const isProductMatch = (productName1, productName2) => {
  if (!productName1 || !productName2) return false;
  
  const normalize = (name) => name.toLowerCase().trim();
  const name1 = normalize(productName1);
  const name2 = normalize(productName2);
  
  // Coincidencia exacta
  if (name1 === name2) return true;
  
  // Coincidencia por palabras clave
  const keywords1 = name1.split(' ');
  const keywords2 = name2.split(' ');
  
  return keywords1.some(keyword1 => 
    keywords2.some(keyword2 => 
      keyword1.length > 2 && keyword2.length > 2 && 
      (keyword1.includes(keyword2) || keyword2.includes(keyword1))
    )
  );
};

/**
 * Obtiene sugerencias de uso para un producto basado en las recetas
 * @param {Object} product - El producto
 * @returns {Array} Array de sugerencias de uso
 */
export const getUsageSuggestionsForProduct = (product) => {
  const relatedRecipes = getRecipesForProduct(product, 10);
  
  const categories = [...new Set(relatedRecipes.map(recipe => recipe.category))];
  const suggestions = [];
  
  if (categories.includes('platos-principales')) {
    suggestions.push('Ideal para platos principales');
  }
  if (categories.includes('pescados')) {
    suggestions.push('Perfecto para pescados y mariscos');
  }
  if (categories.includes('sanguches')) {
    suggestions.push('Excelente en sánguches y aperitivos');
  }
  if (relatedRecipes.length > 5) {
    suggestions.push('Versátil para múltiples preparaciones');
  }
  
  return suggestions;
};

/**
 * Obtiene estadísticas de uso de un producto
 * @param {Object} product - El producto
 * @returns {Object} Objeto con estadísticas
 */
export const getProductUsageStats = (product) => {
  const relatedRecipes = getRecipesForProduct(product, 100);
  
  return {
    totalRecipes: relatedRecipes.length,
    avgRating: relatedRecipes.length > 0 
      ? (relatedRecipes.reduce((sum, recipe) => sum + recipe.rating, 0) / relatedRecipes.length).toFixed(1)
      : 0,
    totalReviews: relatedRecipes.reduce((sum, recipe) => sum + recipe.reviews, 0),
    categories: [...new Set(relatedRecipes.map(recipe => recipe.category))],
    difficulty: {
      facil: relatedRecipes.filter(r => r.difficulty === 'Fácil').length,
      media: relatedRecipes.filter(r => r.difficulty === 'Media').length,
      alta: relatedRecipes.filter(r => r.difficulty === 'Alta').length
    }
  };
};