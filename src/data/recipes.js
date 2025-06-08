// Base de datos de recetas completas
export const recipes = [
  {
    id: 1,
    name: 'Olluquito con Carne',
    category: 'platos-principales',
    time: 45,
    difficulty: 'Media',
    portions: 4,
    description: 'El guiso tradicional que nos transporta a la infancia.',
    image: '/olluquito.jpg',
    productosTeresita: ['Comino Teresita', 'Ají Molido Teresita', 'Palillo Teresita'],
    trucoTeresita: 'Sofríe bien el ají molido Teresita para que libere todo su sabor y aroma.',
    rating: 4.8,
    reviews: 124,
    historia: 'El olluquito con carne es un plato tradicional de la sierra peruana que ha conquistado paladares en todo el país. Su origen se remonta a las antiguas culturas andinas que cultivaban el olluco como alimento básico.',
    ingredientes: [
      { cantidad: '500g', nombre: 'olluco pelado y cortado en bastones', teresita: false },
      { cantidad: '300g', nombre: 'carne de res cortada en tiras', teresita: false },
      { cantidad: '1', nombre: 'cebolla grande cortada en juliana', teresita: false },
      { cantidad: '3', nombre: 'dientes de ajo molidos', teresita: false },
      { cantidad: '2 cucharadas', nombre: 'aceite', teresita: false },
      { cantidad: '1 cucharadita', nombre: 'Comino Teresita', teresita: true },
      { cantidad: '1 cucharadita', nombre: 'Ají Molido Teresita', teresita: true },
      { cantidad: '1/2 cucharadita', nombre: 'Palillo Teresita', teresita: true },
      { cantidad: 'Al gusto', nombre: 'sal y pimienta', teresita: false },
      { cantidad: '1 taza', nombre: 'caldo de carne', teresita: false },
      { cantidad: 'Al gusto', nombre: 'culantro picado para decorar', teresita: false }
    ],
    preparacion: [
      {
        paso: 1,
        titulo: 'Preparar los ingredientes',
        descripcion: 'Pela y corta el olluco en bastones. Corta la carne en tiras y sazona con sal y pimienta.',
        tiempo: '10 min',
        tip: 'El olluco debe quedar en bastones de tamaño uniforme para una cocción pareja.'
      },
      {
        paso: 2,
        titulo: 'Sofreír las especias Teresita',
        descripcion: 'En una sartén grande, calienta el aceite y sofríe el ajo molido, el Comino Teresita, Ají Molido Teresita y Palillo Teresita por 1 minuto.',
        tiempo: '2 min',
        tip: 'Este paso es clave: las especias Teresita deben liberar su aroma sin quemarse.'
      },
      {
        paso: 3,
        titulo: 'Cocinar la carne',
        descripcion: 'Agrega la carne y cocina hasta que esté dorada por todos lados. Luego añade la cebolla y cocina hasta que esté transparente.',
        tiempo: '8 min',
        tip: 'Sella bien la carne para mantener sus jugos.'
      },
      {
        paso: 4,
        titulo: 'Agregar el olluco',
        descripcion: 'Incorpora el olluco cortado y mezcla bien con la carne. Cocina por 3 minutos.',
        tiempo: '3 min',
        tip: 'No revuelvas demasiado para evitar que el olluco se rompa.'
      },
      {
        paso: 5,
        titulo: 'Finalizar la cocción',
        descripcion: 'Añade el caldo de carne, tapa la sartén y cocina a fuego medio por 20 minutos hasta que el olluco esté tierno.',
        tiempo: '20 min',
        tip: 'Si el guiso se seca mucho, agrega un poco más de caldo.'
      },
      {
        paso: 6,
        titulo: 'Servir',
        descripcion: 'Rectifica la sazón, decora con culantro picado y sirve acompañado de arroz blanco.',
        tiempo: '2 min',
        tip: 'El olluquito queda mejor si reposa 5 minutos antes de servir.'
      }
    ],
    video: '/videos/olluquito-tutorial.mp4',
    notas: [
      'El olluco fresco debe tener un color uniforme y estar firme al tacto.',
      'Puedes sustituir la carne de res por pollo o carne de cerdo.',
      'Este plato se conserva bien en refrigeración por hasta 3 días.',
      'Acompáñalo con arroz blanco y una ensalada fresca.'
    ]
  },
  {
    id: 2,
    name: 'Pavito Navideño',
    category: 'platos-principales',
    time: 120,
    difficulty: 'Alta',
    portions: 8,
    description: 'Perfecto para celebraciones navideñas familiares.',
    image: '/pavo.jpg',
    productosTeresita: ['Comino Teresita', 'Palillo Teresita'],
    trucoTeresita: 'Marina el pavo con Comino Teresita desde la noche anterior para un sabor más profundo.',
    rating: 4.9,
    reviews: 89,
    historia: 'El pavo navideño es una tradición que llegó al Perú durante la época colonial y se ha adaptado con especias locales como el comino y el palillo, creando un sabor único que combina lo mejor de ambas culturas.',
    ingredientes: [
      { cantidad: '1', nombre: 'pavo de 4-5 kg', teresita: false },
      { cantidad: '3 cucharadas', nombre: 'Comino Teresita', teresita: true },
      { cantidad: '2 cucharadas', nombre: 'Palillo Teresita', teresita: true },
      { cantidad: '8', nombre: 'dientes de ajo molidos', teresita: false },
      { cantidad: '1/2 taza', nombre: 'aceite de oliva', teresita: false },
      { cantidad: '2 cucharadas', nombre: 'sal', teresita: false },
      { cantidad: '1 cucharada', nombre: 'pimienta negra', teresita: false },
      { cantidad: '1', nombre: 'cebolla grande cortada en cuartos', teresita: false },
      { cantidad: '2', nombre: 'zanahorias cortadas en trozos', teresita: false },
      { cantidad: '2', nombre: 'ramas de apio', teresita: false },
      { cantidad: '1 taza', nombre: 'vino blanco', teresita: false }
    ],
    preparacion: [
      {
        paso: 1,
        titulo: 'Preparar la marinada',
        descripcion: 'Mezcla el Comino Teresita, Palillo Teresita, ajo, aceite, sal y pimienta para crear una pasta aromática.',
        tiempo: '15 min',
        tip: 'Deja que las especias se hidraten bien en el aceite antes de usar.'
      },
      {
        paso: 2,
        titulo: 'Marinar el pavo',
        descripcion: 'Unta toda la superficie del pavo con la marinada y déjalo reposar en refrigeración por al menos 4 horas o toda la noche.',
        tiempo: '4-12 horas',
        tip: 'Entre más tiempo de marinado, mejor será el sabor. Ideal toda la noche.'
      },
      {
        paso: 3,
        titulo: 'Preparar para hornear',
        descripcion: 'Precalienta el horno a 180°C. Coloca las verduras en el fondo de una bandeja grande y pone el pavo encima.',
        tiempo: '10 min',
        tip: 'Las verduras servirán como base aromática y evitarán que el pavo se pegue.'
      },
      {
        paso: 4,
        titulo: 'Hornear',
        descripcion: 'Hornea por 20 minutos por kilo de peso. Rocía con vino blanco cada 30 minutos.',
        tiempo: '90-100 min',
        tip: 'Usa un termómetro para verificar que la temperatura interna llegue a 75°C.'
      },
      {
        paso: 5,
        titulo: 'Reposar y servir',
        descripcion: 'Deja reposar el pavo por 15 minutos antes de trinchar. Sirve con las verduras y el jugo de cocción.',
        tiempo: '15 min',
        tip: 'El reposo permite que los jugos se redistribuyan para una carne más jugosa.'
      }
    ],
    notas: [
      'Puedes rellenar el pavo con arroz, castañas y pasas para mayor festejo.',
      'Conserva las sobras en refrigeración por hasta 4 días.',
      'El jugo de cocción se puede convertir en una deliciosa salsa.',
      'Perfecto para acompañar con puré de camote y cranberries.'
    ]
  },
  // Agregar más recetas aquí...
  {
    id: 3,
    name: 'Tallarín con Pollo Saltado',
    category: 'platos-principales',
    time: 30,
    difficulty: 'Media',
    portions: 4,
    description: 'Fusión peruana-china fácil y deliciosa.',
    image: '/tallarin.webp',
    productosTeresita: ['Comino Teresita', 'Sillao Teresita', 'Ají Molido Teresita'],
    trucoTeresita: 'El fuego alto y el Sillao Teresita son clave para lograr el sabor chifa auténtico.',
    rating: 4.7,
    reviews: 156,
    historia: 'Este plato nació de la fusión entre la cocina china traída por los inmigrantes cantoneses y los ingredientes peruanos. Es parte fundamental de la tradición culinaria chifa del Perú.',
    ingredientes: [
      { cantidad: '400g', nombre: 'tallarines', teresita: false },
      { cantidad: '500g', nombre: 'pechuga de pollo en tiras', teresita: false },
      { cantidad: '1', nombre: 'cebolla roja en juliana', teresita: false },
      { cantidad: '2', nombre: 'tomates en gajos', teresita: false },
      { cantidad: '1', nombre: 'pimiento rojo en tiras', teresita: false },
      { cantidad: '4', nombre: 'dientes de ajo molidos', teresita: false },
      { cantidad: '3 cucharadas', nombre: 'aceite', teresita: false },
      { cantidad: '1 cucharadita', nombre: 'Comino Teresita', teresita: true },
      { cantidad: '3 cucharadas', nombre: 'Sillao Teresita', teresita: true },
      { cantidad: '1 cucharadita', nombre: 'Ají Molido Teresita', teresita: true },
      { cantidad: 'Al gusto', nombre: 'culantro picado', teresita: false },
      { cantidad: 'Al gusto', nombre: 'sal y pimienta', teresita: false }
    ],
    preparacion: [
      {
        paso: 1,
        titulo: 'Cocer los tallarines',
        descripcion: 'Hierve los tallarines en agua con sal hasta que estén al dente. Escurre y reserva.',
        tiempo: '8 min',
        tip: 'No los sobrecocines, deben quedar firmes para el saltado.'
      },
      {
        paso: 2,
        titulo: 'Sazonar el pollo',
        descripcion: 'Marina el pollo con sal, pimienta, Comino Teresita y Ají Molido Teresita por 10 minutos.',
        tiempo: '10 min',
        tip: 'El marinado previo garantiza que el pollo absorba bien los sabores.'
      },
      {
        paso: 3,
        titulo: 'Saltear el pollo',
        descripcion: 'En un wok o sartén grande, calienta aceite a fuego alto y saltea el pollo hasta dorar. Retira y reserva.',
        tiempo: '5 min',
        tip: 'El fuego alto es esencial para sellar bien la carne.'
      },
      {
        paso: 4,
        titulo: 'Saltear las verduras',
        descripcion: 'En la misma sartén, saltea el ajo, cebolla, pimiento y tomate por 3 minutos.',
        tiempo: '3 min',
        tip: 'Las verduras deben quedar crujientes, no blandas.'
      },
      {
        paso: 5,
        titulo: 'Unir todo',
        descripcion: 'Regresa el pollo a la sartén, agrega los tallarines y el Sillao Teresita. Mezcla bien.',
        tiempo: '3 min',
        tip: 'Mueve constantemente para que todos los ingredientes se integren.'
      },
      {
        paso: 6,
        titulo: 'Finalizar',
        descripcion: 'Rectifica sazón, decora con culantro y sirve inmediatamente.',
        tiempo: '1 min',
        tip: 'Sirve caliente para mantener la textura perfecta del saltado.'
      }
    ],
    notas: [
      'Puedes agregar brócoli o vainitas para más vegetales.',
      'El truco está en mantener el fuego alto durante todo el proceso.',
      'Se puede preparar con carne de res o cerdo también.',
      'Perfecto para almorzar en familia cualquier día de la semana.'
    ]
  },
  {
    id: 4,
    name: 'Sánguche de Pavito',
    category: 'sanguches',
    time: 15,
    difficulty: 'Fácil',
    portions: 1,
    description: 'Rápido y delicioso para cualquier momento.',
    image: '/sandwich.jpg',
    productosTeresita: ['Salsas Teresita'],
    trucoTeresita: 'El pavo debe estar jugoso y bien sazonado; las Salsas Teresita realzan su sabor.',
    rating: 4.5,
    reviews: 89,
    historia: 'El sánguche de pavita es una tradición limeña que se popularizó en las panaderías y bodegas de los barrios, convirtiéndose en un desayuno o lonche favorito.',
    ingredientes: [
      { cantidad: '2', nombre: 'rebanadas de pan integral', teresita: false },
      { cantidad: '150g', nombre: 'pavo cocido en láminas', teresita: false },
      { cantidad: '2', nombre: 'hojas de lechuga', teresita: false },
      { cantidad: '2', nombre: 'rodajas de tomate', teresita: false },
      { cantidad: '1 cucharada', nombre: 'palta molida', teresita: false },
      { cantidad: '1 cucharada', nombre: 'Salsa Tártara Teresita', teresita: true },
      { cantidad: '1 cucharadita', nombre: 'mostaza', teresita: false },
      { cantidad: 'Al gusto', nombre: 'sal y pimienta', teresita: false }
    ],
    preparacion: [
      {
        paso: 1,
        titulo: 'Preparar el pan',
        descripcion: 'Tuesta ligeramente las rebanadas de pan hasta que estén doradas.',
        tiempo: '2 min',
        tip: 'El pan tostado mantiene mejor la estructura del sánguche.'
      },
      {
        paso: 2,
        titulo: 'Preparar la palta',
        descripcion: 'Machaca la palta con un tenedor, agrega sal y pimienta al gusto.',
        tiempo: '2 min',
        tip: 'La palta debe estar en su punto justo de madurez.'
      },
      {
        paso: 3,
        titulo: 'Armar el sánguche',
        descripcion: 'Unta una rebanada con palta y la otra con Salsa Tártara Teresita y mostaza.',
        tiempo: '1 min',
        tip: 'Distribuye las salsas uniformemente para mejor sabor.'
      },
      {
        paso: 4,
        titulo: 'Agregar ingredientes',
        descripcion: 'Coloca las láminas de pavo, lechuga y tomate. Sazona ligeramente.',
        tiempo: '2 min',
        tip: 'Ordena los ingredientes para que el sánguche no se desarme.'
      },
      {
        paso: 5,
        titulo: 'Finalizar',
        descripcion: 'Cierra el sánguche, presiona ligeramente y corta por la mitad.',
        tiempo: '1 min',
        tip: 'Un corte limpio hace que se vea más apetitoso.'
      }
    ],
    notas: [
      'Puedes agregar queso fresco para más cremosidad.',
      'Ideal para desayunos o lonches rápidos.',
      'Se puede preparar la noche anterior y guardar en refrigeración.',
      'Acompaña con jugo de naranja o café.'
    ]
  },
  {
    id: 5,
    name: 'Tallarínes con Pavo y Chifles',
    category: 'platos-principales',
    time: 40,
    difficulty: 'Media',
    portions: 6,
    description: 'Receta tradicional norteña para reuniones familiares.',
    image: '/tallarinchifles.avif',
    productosTeresita: ['Comino Teresita', 'Ají Amarillo Teresita', 'Palillo Teresita'],
    trucoTeresita: 'Los chifles deben estar bien dorados y crujientes para dar el toque norteño auténtico.',
    rating: 4.6,
    reviews: 134,
    historia: 'Este plato es originario del norte del Perú, especialmente de Piura y Lambayeque, donde el plátano verde (chifle) se combina magistralmente con la pasta.',
    ingredientes: [
      { cantidad: '500g', nombre: 'tallarines', teresita: false },
      { cantidad: '800g', nombre: 'pavo deshilachado', teresita: false },
      { cantidad: '3', nombre: 'plátanos verdes cortados en chifles', teresita: false },
      { cantidad: '1', nombre: 'cebolla roja grande', teresita: false },
      { cantidad: '4', nombre: 'dientes de ajo', teresita: false },
      { cantidad: '2', nombre: 'tomates', teresita: false },
      { cantidad: '1 cucharada', nombre: 'Ají Amarillo Teresita', teresita: true },
      { cantidad: '1 cucharadita', nombre: 'Comino Teresita', teresita: true },
      { cantidad: '1/2 cucharadita', nombre: 'Palillo Teresita', teresita: true },
      { cantidad: 'Suficiente', nombre: 'aceite para freír', teresita: false },
      { cantidad: 'Al gusto', nombre: 'culantro picado', teresita: false },
      { cantidad: 'Al gusto', nombre: 'sal y pimienta', teresita: false }
    ],
    preparacion: [
      {
        paso: 1,
        titulo: 'Preparar los chifles',
        descripcion: 'Corta los plátanos en rodajas finas y fríelos hasta que estén dorados y crujientes.',
        tiempo: '10 min',
        tip: 'Los chifles deben estar bien secos antes de freír.'
      },
      {
        paso: 2,
        titulo: 'Cocer los tallarines',
        descripcion: 'Hierve los tallarines en agua con sal hasta que estén al dente.',
        tiempo: '8 min',
        tip: 'Reserva un poco del agua de cocción por si necesitas humectar.'
      },
      {
        paso: 3,
        titulo: 'Preparar el aderezo',
        descripcion: 'Sofríe la cebolla, ajo, tomate con el Ají Amarillo, Comino y Palillo Teresita.',
        tiempo: '8 min',
        tip: 'El aderezo debe estar bien concentrado y aromático.'
      },
      {
        paso: 4,
        titulo: 'Agregar el pavo',
        descripcion: 'Incorpora el pavo deshilachado al aderezo y cocina por 5 minutos.',
        tiempo: '5 min',
        tip: 'El pavo debe absorber bien todos los sabores del aderezo.'
      },
      {
        paso: 5,
        titulo: 'Mezclar con tallarines',
        descripcion: 'Agrega los tallarines al guiso y mezcla bien. Ajusta la sazón.',
        tiempo: '3 min',
        tip: 'Si está muy seco, agrega un poco del agua de cocción.'
      },
      {
        paso: 6,
        titulo: 'Servir',
        descripcion: 'Sirve caliente decorado con chifles y culantro picado.',
        tiempo: '2 min',
        tip: 'Los chifles se agregan al final para mantener su textura crujiente.'
      }
    ],
    notas: [
      'El pavo se puede sustituir por pollo si no lo encuentras.',
      'Los chifles se pueden comprar hechos para ahorrar tiempo.',
      'Es perfecto para reuniones familiares grandes.',
      'Se conserva bien en refrigeración por 2 días.'
    ]
  },
  {
    id: 6,
    name: 'Sudado de Pescado',
    category: 'pescados',
    time: 35,
    difficulty: 'Media',
    portions: 4,
    description: 'Plato marino cocinado en su propio jugo.',
    image: '/sudado.jpg',
    productosTeresita: ['Comino Teresita', 'Ají Amarillo Teresita', 'Palillo Teresita'],
    trucoTeresita: 'El pescado debe cocinarse en su propio vapor, sin agregar agua, para mantener todo su sabor.',
    rating: 4.7,
    reviews: 98,
    historia: 'El sudado es una técnica culinaria peruana ancestral que permite que los alimentos se cocinen en su propio jugo, preservando todos sus nutrientes y sabores.',
    ingredientes: [
      { cantidad: '1 kg', nombre: 'pescado corvina en filetes', teresita: false },
      { cantidad: '2', nombre: 'cebollas rojas en juliana', teresita: false },
      { cantidad: '4', nombre: 'tomates cortados en gajos', teresita: false },
      { cantidad: '1', nombre: 'ají amarillo cortado en tiras', teresita: false },
      { cantidad: '4', nombre: 'dientes de ajo molidos', teresita: false },
      { cantidad: '1 cucharada', nombre: 'Ají Amarillo Teresita', teresita: true },
      { cantidad: '1 cucharadita', nombre: 'Comino Teresita', teresita: true },
      { cantidad: '1/2 cucharadita', nombre: 'Palillo Teresita', teresita: true },
      { cantidad: '1/2 taza', nombre: 'chicha de jora', teresita: false },
      { cantidad: '3 cucharadas', nombre: 'aceite', teresita: false },
      { cantidad: 'Para acompañar', nombre: 'yuca sancochada', teresita: false },
      { cantidad: 'Al gusto', nombre: 'culantro y cebollita china', teresita: false },
      { cantidad: 'Al gusto', nombre: 'sal y pimienta', teresita: false }
    ],
    preparacion: [
      {
        paso: 1,
        titulo: 'Preparar el pescado',
        descripcion: 'Sazona los filetes de pescado con sal, pimienta y Comino Teresita.',
        tiempo: '5 min',
        tip: 'Deja reposar el pescado sazonado por 10 minutos.'
      },
      {
        paso: 2,
        titulo: 'Preparar el aderezo',
        descripcion: 'En una olla, sofríe el ajo, cebolla y Ají Amarillo Teresita hasta que esté fragante.',
        tiempo: '5 min',
        tip: 'No dejes que el ajo se queme para evitar sabor amargo.'
      },
      {
        paso: 3,
        titulo: 'Agregar vegetales',
        descripcion: 'Añade los tomates, ají amarillo fresco y Palillo Teresita. Cocina por 5 minutos.',
        tiempo: '5 min',
        tip: 'Los tomates deben empezar a soltar su jugo.'
      },
      {
        paso: 4,
        titulo: 'Incorporar el pescado',
        descripcion: 'Coloca los filetes sobre las verduras, agrega la chicha de jora y tapa.',
        tiempo: '15 min',
        tip: 'No remuevas mucho para que el pescado no se rompa.'
      },
      {
        paso: 5,
        titulo: 'Cocción final',
        descripcion: 'Cocina a fuego medio-bajo tapado hasta que el pescado esté cocido.',
        tiempo: '10 min',
        tip: 'El pescado está listo cuando se separa fácilmente con tenedor.'
      },
      {
        paso: 6,
        titulo: 'Servir',
        descripcion: 'Sirve con yuca sancochada y decora con culantro y cebollita china.',
        tiempo: '2 min',
        tip: 'El jugo del sudado es delicioso, sírvelo junto con el pescado.'
      }
    ],
    notas: [
      'Puedes usar cualquier pescado de carne blanca y firme.',
      'La chicha de jora se puede sustituir por vino blanco.',
      'Es importante no agregar agua para mantener la concentración de sabores.',
      'Acompaña con arroz blanco y frijoles.'
    ]
  },
  {
    id: 7,
    name: 'Pollo a la Brasa',
    category: 'platos-principales',
    time: 90,
    difficulty: 'Media',
    portions: 4,
    description: 'El clásico peruano con especias Teresita.',
    image: '/polloalabrasa.webp',
    productosTeresita: ['Comino Teresita', 'Palillo Teresita'],
    trucoTeresita: 'Marina el pollo desde la noche anterior con las especias Teresita para un sabor más intenso.',
    rating: 4.8,
    reviews: 203,
    historia: 'El pollo a la brasa fue creado en Lima en la década de 1950 por el suizo Roger Schuler, pero rápidamente se peruanizó con nuestras especias tradicionales.',
    ingredientes: [
      { cantidad: '1', nombre: 'pollo entero de 1.5 kg', teresita: false },
      { cantidad: '3 cucharadas', nombre: 'Comino Teresita', teresita: true },
      { cantidad: '2 cucharadas', nombre: 'Palillo Teresita', teresita: true },
      { cantidad: '6', nombre: 'dientes de ajo molidos', teresita: false },
      { cantidad: '1/4 taza', nombre: 'aceite de oliva', teresita: false },
      { cantidad: '2 cucharadas', nombre: 'salsa de soya', teresita: false },
      { cantidad: '1 cucharada', nombre: 'vinagre', teresita: false },
      { cantidad: '1 cucharada', nombre: 'sal', teresita: false },
      { cantidad: '1 cucharadita', nombre: 'pimienta negra', teresita: false },
      { cantidad: '1', nombre: 'cerveza', teresita: false },
      { cantidad: 'Para acompañar', nombre: 'papas doradas', teresita: false }
    ],
    preparacion: [
      {
        paso: 1,
        titulo: 'Preparar la marinada',
        descripcion: 'Mezcla Comino Teresita, Palillo Teresita, ajo, aceite, soya, vinagre, sal y pimienta.',
        tiempo: '10 min',
        tip: 'La marinada debe formar una pasta homogénea y aromática.'
      },
      {
        paso: 2,
        titulo: 'Marinar el pollo',
        descripcion: 'Unta toda la superficie del pollo con la marinada y refrigera por al menos 4 horas.',
        tiempo: '4-12 horas',
        tip: 'Entre más tiempo de marinado, mejor sabor. Ideal toda la noche.'
      },
      {
        paso: 3,
        titulo: 'Preparar para asar',
        descripcion: 'Saca el pollo de la refrigeradora 30 minutos antes de cocinar.',
        tiempo: '30 min',
        tip: 'El pollo a temperatura ambiente se cocina más uniformemente.'
      },
      {
        paso: 4,
        titulo: 'Asar el pollo',
        descripcion: 'Asa en horno a 200°C por 60-70 minutos, rociando con cerveza cada 20 minutos.',
        tiempo: '70 min',
        tip: 'La piel debe quedar dorada y crujiente.'
      },
      {
        paso: 5,
        titulo: 'Verificar cocción',
        descripcion: 'El pollo está listo cuando los jugos corren claros al pinchar la parte más gruesa.',
        tiempo: '5 min',
        tip: 'La temperatura interna debe llegar a 75°C.'
      },
      {
        paso: 6,
        titulo: 'Reposar y servir',
        descripcion: 'Deja reposar 10 minutos antes de trozar y sirve con papas doradas.',
        tiempo: '10 min',
        tip: 'El reposo redistribuye los jugos para una carne más jugosa.'
      }
    ],
    notas: [
      'Se puede hacer en parrilla a carbón para más sabor ahumado.',
      'Acompaña con ensalada rusa y ají verde.',
      'Las sobras son perfectas para hacer sánguches.',
      'Conserva en refrigeración por hasta 3 días.'
    ]
  },
  {
    id: 8,
    name: 'Pollada Peruana',
    category: 'platos-principales',
    time: 60,
    difficulty: 'Media',
    portions: 6,
    description: 'Tradicional para celebraciones familiares.',
    image: '/pollada.webp',
    productosTeresita: ['Comino Teresita', 'Ají Amarillo Teresita', 'Palillo Teresita'],
    trucoTeresita: 'El secreto está en dorar bien el pollo antes de agregar los demás ingredientes.',
    rating: 4.6,
    reviews: 145,
    historia: 'La pollada es una tradición peruana de reunión familiar y comunitaria, donde se prepara pollo guisado en grandes cantidades para compartir y recaudar fondos.',
    ingredientes: [
      { cantidad: '2', nombre: 'pollos cortados en presas', teresita: false },
      { cantidad: '2', nombre: 'cebollas rojas grandes', teresita: false },
      { cantidad: '6', nombre: 'dientes de ajo', teresita: false },
      { cantidad: '4', nombre: 'tomates', teresita: false },
      { cantidad: '2 cucharadas', nombre: 'Ají Amarillo Teresita', teresita: true },
      { cantidad: '1 cucharada', nombre: 'Comino Teresita', teresita: true },
      { cantidad: '1 cucharadita', nombre: 'Palillo Teresita', teresita: true },
      { cantidad: '1 taza', nombre: 'cerveza', teresita: false },
      { cantidad: '500g', nombre: 'papas amarillas', teresita: false },
      { cantidad: '200g', nombre: 'arvejas frescas', teresita: false },
      { cantidad: '2', nombre: 'zanahorias', teresita: false },
      { cantidad: 'Al gusto', nombre: 'aceite, sal y pimienta', teresita: false },
      { cantidad: 'Para acompañar', nombre: 'arroz blanco', teresita: false }
    ],
    preparacion: [
      {
        paso: 1,
        titulo: 'Preparar las presas',
        descripcion: 'Sazona las presas de pollo con sal, pimienta y Comino Teresita.',
        tiempo: '10 min',
        tip: 'Deja que el pollo absorba los condimentos por 15 minutos.'
      },
      {
        paso: 2,
        titulo: 'Dorar el pollo',
        descripcion: 'En una olla grande, dora las presas de pollo por todos lados hasta que estén doradas.',
        tiempo: '15 min',
        tip: 'Un buen dorado sella los jugos y da mejor sabor.'
      },
      {
        paso: 3,
        titulo: 'Preparar el aderezo',
        descripcion: 'En la misma olla, sofríe cebolla, ajo, tomate con Ají Amarillo y Palillo Teresita.',
        tiempo: '10 min',
        tip: 'El aderezo debe estar bien concentrado y fragante.'
      },
      {
        paso: 4,
        titulo: 'Cocinar el pollo',
        descripcion: 'Regresa el pollo a la olla, agrega cerveza y cocina tapado por 30 minutos.',
        tiempo: '30 min',
        tip: 'Voltea las presas a la mitad de la cocción.'
      },
      {
        paso: 5,
        titulo: 'Agregar verduras',
        descripcion: 'Añade papas, zanahorias y arvejas. Cocina 15 minutos más hasta que estén tiernas.',
        tiempo: '15 min',
        tip: 'Las verduras deben estar cocidas pero firmes.'
      },
      {
        paso: 6,
        titulo: 'Finalizar',
        descripcion: 'Ajusta la sazón y sirve caliente con arroz blanco.',
        tiempo: '5 min',
        tip: 'Deja reposar 5 minutos antes de servir para que se asienten los sabores.'
      }
    ],
    notas: [
      'Puedes agregar choclo y habas para más variedad.',
      'Es perfecto para reuniones familiares grandes.',
      'Se puede preparar con anticipación y recalentar.',
      'Acompaña con ensalada criolla y ají verde.'
    ]
  }
];

export default recipes;
