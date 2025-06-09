// Base de datos completa de productos organizados por categorías
export const productCategories = [
  {
    id: 'sazonadores',
    name: 'Sazonadores y Especias',
    description: 'El corazón de la cocina peruana, especias y sazonadores que dan vida a tus platos',
    icon: '🌶️',
    color: 'from-red-500 to-orange-500',
    image: '/img/1-removebg-preview.png',
    products: [
      { 
        id: 'palillo',
        name: 'Palillo', 
        brand: 'Teresita', 
        image: '/img/1-removebg-preview.png', 
        description: 'Cúrcuma natural para dar color y sabor',
        inspiringDescription: 'El oro dorado de la cocina peruana. Palillo Teresita transforma tus guisos con ese color profundo y sabor terroso inconfundible que define la auténtica sazón criolla.',
        idealUses: [
          'Perfecto para: Olluquito con carne',
          'Aderezos de papa rellena',
          'Anticuchos tradicionales',
          'Guisos de pollo y res',
          'Marinadas para pescado'
        ],
        galleryImages: ['/img/1-removebg-preview.png'],
        brandLogo: '/img/1-removebg-preview.png'
      },
      { 
        id: 'comino',
        name: 'Comino Molido', 
        brand: 'Teresita', 
        image: '/img/2-removebg-preview.png', 
        description: 'Comino seleccionado molido fino',
        inspiringDescription: 'El alma aromática de nuestros platos. Comino Teresita aporta ese perfume único y sabor intenso que despierta los sentidos y define el carácter de la cocina tradicional.',
        idealUses: [
          'Esencial para: Anticuchos y parrillas',
          'Guisos de carne y pollo',
          'Marinadas para asados',
          'Sopas y caldos',
          'Aderezos criollos'
        ],
        galleryImages: ['/img/2-removebg-preview.png'],
        brandLogo: '/img/1-removebg-preview.png'
      },
      { 
        id: 'oregano',
        name: 'Orégano', 
        brand: 'Teresita', 
        image: '/img/3-removebg-preview.png', 
        description: 'Orégano aromático deshidratado',
        inspiringDescription: 'La hierba mediterránea que conquistó la cocina peruana. Orégano Teresita aporta frescura y un aroma herbáceo que realza cada bocado con su toque distintivo.',
        idealUses: [
          'Ideal para: Pizzas caseras',
          'Ensaladas frescas',
          'Marinadas de pollo',
          'Salsas de tomate',
          'Panes y focaccias'
        ],
        galleryImages: ['/img/3-removebg-preview.png'],
        brandLogo: '/img/1-removebg-preview.png'
      },
      { 
        id: 'aji-molido',
        name: 'Ají Molido', 
        brand: 'Teresita', 
        image: '/img/4-removebg-preview.png', 
        description: 'Ají amarillo molido tradicionalmente',
        inspiringDescription: 'El fuego sagrado del Perú. Ají Molido Teresita preserva toda la intensidad y sabor frutado del ají amarillo, dando vida y carácter a cada preparación con su picor equilibrado.',
        idealUses: [
          'Imprescindible para: Ají de gallina',
          'Papa a la huancaína',
          'Tallarín saltado',
          'Causa limeña',
          'Salsas criollas'
        ],
        galleryImages: ['/img/4-removebg-preview.png'],
        brandLogo: '/img/1-removebg-preview.png'
      }
    ]
  },
  {
    id: 'vinagres',
    name: 'Vinagres y Sillaos',
    description: 'Ácidos perfectos para marinar, aliñar y dar el toque final a tus preparaciones',
    icon: '🍶',
    color: 'from-amber-500 to-yellow-500',
    image: '/img/logokino.png',
    products: [
      { 
        id: 'sillao-tradicional',
        name: 'Sillao Tradicional', 
        brand: 'Sillao Kino', 
        image: '/img/logokino.png', 
        description: 'Salsa de soja premium',
        inspiringDescription: 'El secreto del sabor oriental en tus platos. Sillao Kino le da ese color profundo y gusto umami inconfundible a tu lomo saltado, arroz chaufa y todos tus aderezos.',
        idealUses: [
          'Perfecto para: Lomo Saltado',
          'Aderezos de ensaladas',
          'Marinadas para pollo y cerdo',
          'Arroz Chaufa',
          'Tallarín saltado'
        ],
        galleryImages: ['/img/logokino.png'],
        brandLogo: '/img/logokino.png'
      },
      { 
        id: 'vinagre-blanco',
        name: 'Vinagre Blanco', 
        brand: 'Sillao Kino', 
        image: '/img/logokino.png', 
        description: 'Vinagre blanco de alta pureza',
        inspiringDescription: 'La acidez perfecta para realzar sabores. Vinagre Blanco Kino aporta esa frescura cristalina que equilibra y potencia el sabor de tus ensaladas y marinadas.',
        idealUses: [
          'Excelente para: Ensalada criolla',
          'Marinadas de pescado',
          'Aderezos vinagreta',
          'Escabeches',
          'Salsas agridulces'
        ],
        galleryImages: ['/img/logokino.png'],
        brandLogo: '/img/logokino.png'
      },
      { 
        id: 'vinagre-chicha',
        name: 'Vinagre de Chicha', 
        brand: 'Sillao Kino', 
        image: '/img/logokino.png', 
        description: 'Vinagre tradicional peruano',
        inspiringDescription: 'La tradición ancestral en cada gota. Vinagre de Chicha Kino mantiene viva la herencia culinaria peruana con su sabor único y auténtico que define nuestros platos tradicionales.',
        idealUses: [
          'Tradicional para: Anticuchos',
          'Escabeche de pescado',
          'Aderezos criollos',
          'Marinadas de carne',
          'Salsas tradicionales'
        ],
        galleryImages: ['/img/logokino.png'],
        brandLogo: '/img/logokino.png'
      }
    ]
  },
  {
    id: 'reposteria',
    name: 'Repostería y Salsas Dulces',
    description: 'Endulza tus creaciones con nuestros siropes y coberturas de calidad premium',
    icon: '🍯',
    color: 'from-pink-500 to-purple-500',
    image: '/img/logomulata.png',
    products: [
      { 
        id: 'sirope-chocolate',
        name: 'Sirope de Chocolate', 
        brand: 'Mulata', 
        image: '/img/logomulata.png', 
        description: 'Sirope de chocolate intenso',
        inspiringDescription: 'La tentación líquida que transforma lo ordinario en extraordinario. Sirope de Chocolate Mulata envuelve tus postres con su textura sedosa y sabor intenso a cacao.',
        idealUses: [
          'Perfecto para: Helados y postres',
          'Tortas y queques',
          'Milkshakes y batidos',
          'Decoración de platos',
          'Café y bebidas calientes'
        ],
        galleryImages: ['/img/logomulata.png'],
        brandLogo: '/img/logomulata.png'
      },
      { 
        id: 'cobertura-fresa',
        name: 'Cobertura de Fresa', 
        brand: 'Mulata', 
        image: '/img/logomulata.png', 
        description: 'Cobertura dulce de fresa',
        inspiringDescription: 'El verano en cada cucharada. Cobertura de Fresa Mulata captura la dulzura y frescura de las fresas maduras, dando color y sabor vibrante a tus creaciones.',
        idealUses: [
          'Ideal para: Cheesecakes y tortas',
          'Yogurt y granola',
          'Panqueques y waffles',
          'Helados caseros',
          'Decoración de postres'
        ],
        galleryImages: ['/img/logomulata.png'],
        brandLogo: '/img/logomulata.png'
      }
    ]
  },
  {
    id: 'licores',
    name: 'Licores y Cócteles',
    description: 'Disfruta de nuestros licores artesanales para crear los mejores cócteles',
    icon: '🍸',
    color: 'from-blue-500 to-indigo-500',
    image: '/img/l1.png',
    products: [
      { 
        id: 'pisco-premium',
        name: 'Pisco Premium', 
        brand: 'El Legal', 
        image: '/img/l1.png', 
        description: 'Pisco de uva quebranta premium',
        inspiringDescription: 'El espíritu del Perú destilado en cada gota. Pisco Premium El Legal captura la esencia de nuestras uvas quebranta con un sabor puro y cristalino que define la excelencia.',
        idealUses: [
          'Excelente para: Pisco Sour clásico',
          'Cócteles premium',
          'Chilcano de pisco',
          'Degustación pura',
          'Cócteles de autor'
        ],
        galleryImages: ['/img/l1.png'],
        brandLogo: '/img/logolegal.png'
      },
      { 
        id: 'ron-artesanal',
        name: 'Ron Artesanal', 
        brand: 'El Legal', 
        image: '/img/l2.png', 
        description: 'Ron añejado artesanalmente',
        inspiringDescription: 'La calidez del Caribe con toque peruano. Ron Artesanal El Legal combina tradición y innovación en un destilado suave y complejo, perfecto para momentos especiales.',
        idealUses: [
          'Perfecto para: Mojitos y daiquiris',
          'Cócteles tropicales',
          'Ron con cola premium',
          'Degustación en las rocas',
          'Postres flameados'
        ],
        galleryImages: ['/img/l2.png'],
        brandLogo: '/img/logolegal.png'
      }
    ]
  }
];

export const brands = [
  {
    name: 'Teresita',
    logo: '/img/1-removebg-preview.png',
    description: 'La tradición en especias y sazonadores',
    specialty: 'Especias y Sazonadores',
    color: 'text-red-600'
  },
  {
    name: 'Sillao Kino',
    logo: '/img/logokino.png',
    description: 'Expertos en vinagres y sillaos',
    specialty: 'Vinagres y Aderezos',
    color: 'text-amber-600'
  },
  {
    name: 'Mulata',
    logo: '/img/logomulata.png',
    description: 'El toque dulce para tus postres',
    specialty: 'Repostería y Dulces',
    color: 'text-pink-600'
  },
  {
    name: 'El Legal',
    logo: '/img/logolegal.png',
    description: 'Licores artesanales de calidad',
    specialty: 'Licores y Destilados',
    color: 'text-blue-600'
  }
];

// Función helper para obtener un producto por ID
export const getProductById = (productId) => {
  for (const category of productCategories) {
    const product = category.products.find(p => p.id === productId);
    if (product) {
      return { ...product, category: category.id };
    }
  }
  return null;
};

// Función helper para obtener todos los productos
export const getAllProducts = () => {
  return productCategories.flatMap(category => 
    category.products.map(product => ({ ...product, category: category.id }))
  );
};