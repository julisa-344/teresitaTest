// Plantillas HTML para la descarga de recetas

export const recipeHtmlTemplate = (recipe, adjustedIngredients, servings) => `
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${recipe.name} - Receta Teresita</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #FFF7ED 0%, #FED7AA 100%);
            padding: 20px;
        }
        
        .container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        
        .header {
            background: linear-gradient(135deg, #EA580C 0%, #DC2626 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }
        
        .header h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
            font-weight: bold;
        }
        
        .header p {
            font-size: 1.2em;
            opacity: 0.9;
        }
        
        .recipe-info {
            display: flex;
            justify-content: space-around;
            background: #FFF7ED;
            padding: 20px;
            border-bottom: 2px solid #FED7AA;
        }
        
        .info-item {
            text-align: center;
        }
        
        .info-item .label {
            font-size: 0.9em;
            color: #EA580C;
            font-weight: bold;
            text-transform: uppercase;
        }
        
        .info-item .value {
            font-size: 1.4em;
            font-weight: bold;
            color: #333;
        }
        
        .content {
            padding: 30px;
        }
        
        .section {
            margin-bottom: 40px;
        }
        
        .section h2 {
            color: #EA580C;
            font-size: 1.8em;
            margin-bottom: 20px;
            border-bottom: 3px solid #FED7AA;
            padding-bottom: 10px;
            display: flex;
            align-items: center;
        }
        
        .section h2::before {
            content: attr(data-icon);
            margin-right: 10px;
            font-size: 1.2em;
        }
        
        .productos-teresita {
            background: linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%);
            border: 2px solid #EA580C;
            border-radius: 10px;
            padding: 20px;
            margin-bottom: 30px;
        }
        
        .productos-teresita h3 {
            color: #EA580C;
            margin-bottom: 15px;
            font-size: 1.3em;
        }
        
        .productos-list {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        
        .producto-badge {
            background: #EA580C;
            color: white;
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 0.9em;
            font-weight: bold;
        }
        
        .ingredients-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 15px;
        }
        
        .ingredient-item {
            display: flex;
            align-items: center;
            padding: 12px;
            border-radius: 8px;
            border: 2px solid #E5E7EB;
            background: #F9FAFB;
        }
        
        .ingredient-item.teresita {
            background: linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%);
            border-color: #EA580C;
        }
        
        .ingredient-dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            margin-right: 12px;
            flex-shrink: 0;
        }
        
        .ingredient-dot.normal {
            background: #9CA3AF;
        }
        
        .ingredient-dot.teresita {
            background: #EA580C;
        }
        
        .ingredient-text {
            font-weight: 500;
        }
        
        .ingredient-text.teresita {
            color: #EA580C;
        }
        
        .teresita-badge {
            background: #EA580C;
            color: white;
            padding: 2px 8px;
            border-radius: 10px;
            font-size: 0.75em;
            font-weight: bold;
            margin-left: auto;
        }
        
        .steps {
            counter-reset: step-counter;
        }
        
        .step {
            counter-increment: step-counter;
            margin-bottom: 25px;
            background: #F9FAFB;
            border-radius: 12px;
            padding: 20px;
            border-left: 5px solid #EA580C;
        }
        
        .step-header {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
        }
        
        .step-number {
            background: linear-gradient(135deg, #EA580C 0%, #DC2626 100%);
            color: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            margin-right: 15px;
            font-size: 1.2em;
        }
        
        .step-number::before {
            content: counter(step-counter);
        }
        
        .step-title {
            font-size: 1.3em;
            font-weight: bold;
            color: #333;
            flex: 1;
        }
        
        .step-time {
            background: #3B82F6;
            color: white;
            padding: 5px 12px;
            border-radius: 15px;
            font-size: 0.9em;
            font-weight: bold;
        }
        
        .step-description {
            margin-bottom: 10px;
            color: #555;
            line-height: 1.7;
        }
        
        .step-tip {
            background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%);
            border-left: 4px solid #F59E0B;
            padding: 12px;
            border-radius: 8px;
            font-style: italic;
        }
        
        .step-tip::before {
            content: "💡 Tip: ";
            font-weight: bold;
            color: #D97706;
        }
        
        .notes-list {
            list-style: none;
        }
        
        .notes-list li {
            padding: 12px;
            margin-bottom: 10px;
            background: #F3F4F6;
            border-radius: 8px;
            position: relative;
            padding-left: 40px;
        }
        
        .notes-list li::before {
            content: "✓";
            color: #10B981;
            font-weight: bold;
            position: absolute;
            left: 15px;
            top: 12px;
        }
        
        .truco-teresita {
            background: linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%);
            border: 2px solid #EA580C;
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 20px;
        }
        
        .truco-teresita h4 {
            color: #EA580C;
            margin-bottom: 10px;
            font-size: 1.2em;
        }
        
        .truco-teresita h4::before {
            content: "👩‍🍳 ";
            margin-right: 8px;
        }
        
        .footer {
            background: #1F2937;
            color: white;
            padding: 20px;
            text-align: center;
        }
        
        .footer p {
            margin-bottom: 5px;
        }
        
        .footer .logo {
            font-size: 1.4em;
            font-weight: bold;
            color: #EA580C;
        }
        
        .serving-info {
            background: #EBF8FF;
            border: 2px solid #3B82F6;
            border-radius: 8px;
            padding: 15px;
            margin-bottom: 20px;
            text-align: center;
        }
        
        .serving-info strong {
            color: #1E40AF;
            font-size: 1.1em;
        }
        
        @media (max-width: 600px) {
            .recipe-info {
                flex-direction: column;
                gap: 15px;
            }
            
            .ingredients-grid {
                grid-template-columns: 1fr;
            }
            
            .header h1 {
                font-size: 2em;
            }
        }
        
        @media print {
            body {
                background: white;
                padding: 0;
            }
            
            .container {
                box-shadow: none;
                border-radius: 0;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>${recipe.name}</h1>
            <p>${recipe.description}</p>
        </div>
        
        <div class="recipe-info">
            <div class="info-item">
                <div class="label">Tiempo</div>
                <div class="value">${recipe.tiempo} min</div>
            </div>
            <div class="info-item">
                <div class="label">Porciones</div>
                <div class="value">${servings} personas</div>
            </div>
            <div class="info-item">
                <div class="label">Dificultad</div>
                <div class="value">${recipe.dificultad}</div>
            </div>
        </div>
        
        <div class="content">
            <div class="productos-teresita">
                <h3>🏆 Con Productos Teresita</h3>
                <div class="productos-list">
                    ${recipe.productosTeresita.map(producto => `<span class="producto-badge">${producto}</span>`).join('')}
                </div>
            </div>
            
            <div class="truco-teresita">
                <h4>Secreto Principal</h4>
                <p>${recipe.trucoTeresita}</p>
            </div>
            
            <div class="section">
                <h2 data-icon="📝">Ingredientes</h2>
                <div class="serving-info">
                    <strong>Cantidades ajustadas para ${servings} personas</strong>
                    <br><small>(Receta original: ${recipe.porciones} personas)</small>
                </div>
                <div class="ingredients-grid">
                    ${adjustedIngredients.map(ingrediente => `
                        <div class="ingredient-item ${ingrediente.teresita ? 'teresita' : ''}">
                            <div class="ingredient-dot ${ingrediente.teresita ? 'teresita' : 'normal'}"></div>
                            <span class="ingredient-text ${ingrediente.teresita ? 'teresita' : ''}">${ingrediente.cantidad} ${ingrediente.nombre}</span>
                            ${ingrediente.teresita ? '<span class="teresita-badge">Teresita</span>' : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="section">
                <h2 data-icon="👨‍🍳">Preparación</h2>
                <div class="steps">
                    ${recipe.preparacion.map(paso => `
                        <div class="step">
                            <div class="step-header">
                                <div class="step-number"></div>
                                <div class="step-title">${paso.titulo}</div>
                                <div class="step-time">${paso.tiempo}</div>
                            </div>
                            <div class="step-description">${paso.descripcion}</div>
                            ${paso.tip ? `<div class="step-tip">${paso.tip}</div>` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="section">
                <h2 data-icon="📚">Historia del Plato</h2>
                <p style="line-height: 1.8; color: #555; margin-bottom: 20px;">${recipe.historia}</p>
                <div style="background: linear-gradient(135deg, #EA580C 0%, #DC2626 100%); color: white; padding: 20px; border-radius: 12px;">
                    <h3 style="margin-bottom: 10px;">La Tradición Teresita</h3>
                    <p style="opacity: 0.9;">Desde 1985, Productos Teresita ha estado presente en las cocinas peruanas, preservando los sabores auténticos que hacen de cada receta una experiencia única llena de tradición y amor familiar.</p>
                </div>
            </div>
            
            <div class="section">
                <h2 data-icon="💡">Tips & Notas</h2>
                <ul class="notes-list">
                    ${recipe.notas.map(nota => `<li>${nota}</li>`).join('')}
                </ul>
            </div>
        </div>
        
        <div class="footer">
            <p class="logo">Productos Teresita</p>
            <p>Descargado el ${new Date().toLocaleDateString('es-PE', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            })}</p>
            <p>www.productosteresita.com</p>
        </div>
    </div>
</body>
</html>
`;

export const recipeTextTemplate = (recipe, adjustedIngredients, servings) => `
═══════════════════════════════════════════════════════════
                    ${recipe.name.toUpperCase()}
═══════════════════════════════════════════════════════════

📋 INFORMACIÓN GENERAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${recipe.description}

⏱️  Tiempo de preparación: ${recipe.tiempo} minutos
👥  Porciones: ${servings} personas (ajustado desde ${recipe.porciones} personas)
📊  Dificultad: ${recipe.dificultad}
⭐  Calificación: ${recipe.rating}/5 (${recipe.reviews} reseñas)

🏆 PRODUCTOS TERESITA NECESARIOS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${recipe.productosTeresita.map(producto => `• ${producto}`).join('\n')}

👩‍🍳 SECRETO PRINCIPAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${recipe.trucoTeresita}

📝 INGREDIENTES (para ${servings} personas)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${adjustedIngredients.map(ingrediente => 
    `${ingrediente.teresita ? '🟡' : '⚪'} ${ingrediente.cantidad} ${ingrediente.nombre}${ingrediente.teresita ? ' [TERESITA]' : ''}`
).join('\n')}

👨‍🍳 PREPARACIÓN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${recipe.preparacion.map(paso => `
${paso.paso}. ${paso.titulo.toUpperCase()} (${paso.tiempo})
${'-'.repeat(50)}
${paso.descripcion}
${paso.tip ? `💡 TIP: ${paso.tip}` : ''}
`).join('\n')}

📚 HISTORIA DEL PLATO
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${recipe.historia}

🌟 LA TRADICIÓN TERESITA
Desde 1985, Productos Teresita ha estado presente en las cocinas 
peruanas, preservando los sabores auténticos que hacen de cada 
receta una experiencia única llena de tradición y amor familiar.

💡 TIPS & NOTAS ADICIONALES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${recipe.notas.map(nota => `✓ ${nota}`).join('\n')}

═══════════════════════════════════════════════════════════
Receta descargada el ${new Date().toLocaleDateString('es-PE', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
})}
Productos Teresita - www.productosteresita.com
═══════════════════════════════════════════════════════════
`;

export default {
    recipeHtmlTemplate,
    recipeTextTemplate
};
