import { recipeHtmlTemplate, recipeTextTemplate } from './recipeTemplates.js';

/**
 * Función para formatear cantidades de ingredientes
 * Maneja números, fracciones, decimales y unidades con inteligencia
 */
export const formatQuantity = (quantity, scaleFactor) => {
  if (!quantity || quantity === '-') return quantity;
  
  // Si la cantidad no tiene números, devolverla tal como está
  if (!quantity.match(/\d/)) return quantity;
  
  // Patrón más complejo para capturar cantidades y unidades
  const pattern = /^(.*?)(\d+(?:\/\d+)?|\d*\.?\d+)\s*(.*?)$/;
  const match = quantity.match(pattern);
  
  if (!match) return quantity;
  
  const [, prefix, num, suffix] = match;
  
  // Manejo especial para fracciones
  if (num.includes('/')) {
    const [numerator, denominator] = num.split('/').map(Number);
    const decimal = (numerator / denominator) * scaleFactor;
    
    // Convertir de vuelta a fracción si es posible
    if (decimal <= 0.125) return "Una pizca de " + suffix.trim();
    if (Math.abs(decimal - 0.25) < 0.05) return prefix + "1/4 " + suffix;
    if (Math.abs(decimal - 0.33) < 0.05) return prefix + "1/3 " + suffix;
    if (Math.abs(decimal - 0.5) < 0.05) return prefix + "1/2 " + suffix;
    if (Math.abs(decimal - 0.75) < 0.05) return prefix + "3/4 " + suffix;
    if (Math.abs(decimal - 1) < 0.05) return prefix + "1 " + suffix;
    
    // Si no es una fracción común, usar decimal
    const rounded = Math.round(decimal * 100) / 100;
    return prefix + rounded + " " + suffix;
  }
  
  // Para números decimales y enteros
  const originalValue = parseFloat(num);
  const newValue = originalValue * scaleFactor;
  
  // Manejo de unidades y plurales
  const units = suffix.trim();
  let adjustedUnits = units;
  
  // Manejar plurales/singulares en español
  if (newValue === 1 && units.endsWith('s') && !['tazas', 'cucharadas'].includes(units)) {
    adjustedUnits = units.slice(0, -1); // Remover 's' final
  } else if (newValue !== 1 && !units.endsWith('s') && !['sal', 'aceite', 'agua'].includes(units)) {
    if (['cucharada', 'taza', 'diente', 'rama'].includes(units)) {
      adjustedUnits = units + 's';
    }
  }
  
  // Formateo inteligente del número
  if (newValue < 0.125) {
    return "Una pizca de " + adjustedUnits;
  } else if (newValue % 1 === 0) {
    return prefix + Math.round(newValue) + " " + adjustedUnits;
  } else {
    const rounded = Math.round(newValue * 100) / 100;
    return prefix + rounded + " " + adjustedUnits;
  }
};

/**
 * Ajusta las cantidades de ingredientes según el factor de escala
 */
export const adjustIngredients = (ingredients, originalServings, newServings) => {
  const scaleFactor = newServings / originalServings;
  
  return ingredients.map(ingredient => ({
    ...ingredient,
    cantidad: formatQuantity(ingredient.cantidad, scaleFactor)
  }));
};

/**
 * Genera el contenido completo de la receta para descarga
 */
export const generateRecipeContent = (recipe, servings, format = 'html') => {
  const adjustedIngredients = adjustIngredients(recipe.ingredientes, recipe.porciones, servings);
  
  const recipeData = {
    ...recipe,
    ingredientes: adjustedIngredients,
    porciones: servings
  };
  
  if (format === 'html') {
    return recipeHtmlTemplate(recipeData, adjustedIngredients, servings);
  } else {
    return recipeTextTemplate(recipeData, adjustedIngredients, servings);
  }
};

/**
 * Descarga un archivo con el contenido de la receta
 */
export const downloadRecipeFile = (recipe, servings, format = 'html') => {
  if (!recipe) return;
  
  const content = generateRecipeContent(recipe, servings, format);
  const fileName = `receta_${recipe.name.toLowerCase().replace(/\s+/g, '_')}.${format}`;
  const mimeType = format === 'html' ? 'text/html' : 'text/plain';
  
  const blob = new Blob([content], { type: `${mimeType};charset=utf-8` });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
};

/**
 * Copia el contenido de la receta al portapapeles
 */
export const copyRecipeToClipboard = async (recipe, servings, format = 'text') => {
  if (!recipe) return false;
  
  try {
    const content = generateRecipeContent(recipe, servings, format);
    await navigator.clipboard.writeText(content);
    return true;
  } catch (error) {
    console.error('Error al copiar al portapapeles:', error);
    return false;
  }
};

/**
 * Comparte la receta usando la Web Share API si está disponible
 */
export const shareRecipe = async (recipe, servings) => {
  if (!recipe) return false;
  
  const shareData = {
    title: `Receta: ${recipe.name}`,
    text: `¡Mira esta deliciosa receta de ${recipe.name} de Teresita! Para ${servings} personas.`,
    url: window.location.href
  };
  
  try {
    if (navigator.share) {
      await navigator.share(shareData);
      return true;
    } else {
      // Fallback: copiar URL al portapapeles
      await navigator.clipboard.writeText(window.location.href);
      return true;
    }
  } catch (error) {
    console.error('Error al compartir:', error);
    return false;
  }
};

/**
 * Genera una lista de compras basada en los ingredientes de la receta
 */
export const generateShoppingList = (recipe, servings) => {
  if (!recipe) return '';
  
  const adjustedIngredients = adjustIngredients(recipe.ingredientes, recipe.porciones, servings);
  
  const listContent = `🛒 LISTA DE COMPRAS - ${recipe.name.toUpperCase()}
Para ${servings} personas

${adjustedIngredients.map(ing => `□ ${ing.cantidad} ${ing.nombre}`).join('\n')}

📝 Generado por Teresita - ${new Date().toLocaleDateString('es-ES')}`;

  return listContent;
};

/**
 * Descarga la lista de compras
 */
export const downloadShoppingList = (recipe, servings) => {
  if (!recipe) return;
  
  const content = generateShoppingList(recipe, servings);
  const fileName = `lista_compras_${recipe.name.toLowerCase().replace(/\s+/g, '_')}.txt`;
  
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);
};
