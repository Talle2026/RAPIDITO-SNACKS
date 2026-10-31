// ==========================================
// RAPIDITO SNACKS - LÓGICA Y BASE DE DATOS
// ==========================================

const productos = [
  // --- COMBOS Y PROMOS ---
  {
    id: 101,
    nombre: "Paquete Mega: 3 Kilos de Alitas",
    categoria: "promos",
    precio: 500,
    descripcion: "3 kilos de alitas para compartir. Elige salsa: BBQ, Mango Habanero, Búfalo, Tamarindo, Hot u Original.",
    imagen: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400",
    destacado: "🔥 Paquete Mega",
    sabores: ["BBQ", "Mango Habanero", "Búfalo", "Tamarindo", "Hot", "Original"]
  },

  // --- HAMBURGUESAS ---
  {
    id: 1,
    nombre: "Hamburguesa Original",
    categoria: "hamburguesas",
    precio: 80,
    descripcion: "Carne de res, tocino y queso derretido.",
    imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300",
    destacado: "🍔 Clásica"
  },
  {
    id: 2,
    nombre: "Hamburguesa Hawaiana Popular",
    categoria: "hamburguesas",
    precio: 90,
    descripcion: "Carne de res, tocino, jamón, queso y piña jugosa.",
    imagen: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=300",
    destacado: "🍍 Hawaiana"
  },
  {
    id: 3,
    nombre: "Hamburguesa Norteña Especial",
    categoria: "hamburguesas",
    precio: 110,
    descripcion: "Carne de res, tocino, queso y crujientes aros de cebolla.",
    imagen: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=300",
    destacado: "⭐ Especial"
  },
  {
    id: 4,
    nombre: "Hamburguesa Doble",
    categoria: "hamburguesas",
    precio: 120,
    descripcion: "Doble carne de res, tocino, queso y aros de cebolla.",
    imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
    destacado: "🔥 Doble Carne"
  },

  // --- HOT DOGS ---
  {
    id: 5,
    nombre: "3 Hot Dogs Sencillos c/ Tocino",
    categoria: "hotdogs",
    precio: 80,
    descripcion: "Paquete de 3 hot dogs clásicos envueltos en tocino.",
    imagen: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=300",
    destacado: "🌭 Paquete 3x"
  },
  {
    id: 6,
    nombre: "3 Hot Dogs Especiales",
    categoria: "hotdogs",
    precio: 100,
    descripcion: "Con tocino y bastante queso manchego.",
    imagen: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=300",
    destacado: "🧀 Con Queso"
  },
  {
    id: 7,
    nombre: "3 Hot Dogs Hawaianos",
    categoria: "hotdogs",
    precio: 130,
    descripcion: "Con tocino, queso derretido y piña.",
    imagen: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=300",
    destacado: "🍍 Hawaianos"
  },

  // --- NACHOS Y SNACKS ---
  {
    id: 8,
    nombre: "Nachos Especiales con Carne",
    categoria: "snacks",
    precio: 75,
    descripcion: "Totopos cargados con queso, carne sabrosa y jugosa.",
    imagen: "https://images.unsplash.com/photo-1582169505937-b99fbc74338d?w=300",
    destacado: "🧀 Con Carne"
  },
  {
    id: 9,
    nombre: "Nachos Especiales con Longaniza",
    categoria: "snacks",
    precio: 75,
    descripcion: "Totopos cargados con queso y longaniza picosa.",
    imagen: "https://images.unsplash.com/photo-1582169505937-b99fbc74338d?w=300",
    destacado: "🌶️ Con Longaniza"
  },
  {
    id: 10,
    nombre: "Nachos Especiales Campechanos",
    categoria: "snacks",
    precio: 75,
    descripcion: "Mezcla de carne y longaniza ¡Lo mejor de dos mundos!",
    imagen: "https://images.unsplash.com/photo-1582169505937-b99fbc74338d?w=300",
    destacado: "🎉 Campechanos"
  },
  {
    id: 11,
    nombre: "Papas a la Francesa",
    categoria: "snacks",
    precio: 45,
    descripcion: "Orden de papas fritas doraditas y crujientes.",
    imagen: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300",
    destacado: "🍟 Crujientes"
  },

  // --- ALITAS ---
  {
    id: 12,
    nombre: "Orden de Alitas Fuego y Sabor",
    categoria: "alitas",
    precio: 75,
    descripcion: "Alitas crujientes preparadas con salsa a elección (BBQ, Mango Habanero, Búfalo, Tamarindo, Hot u Original).",
    imagen: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=300",
    destacado: "🍗 Alitas",
    sabores: ["BBQ", "Mango Habanero", "Búfalo", "Tamarindo", "Hot", "Original"]
  },
  {
    id: 27,
    nombre: "Orden de Alitas con Papas",
    categoria: "alitas",
    precio: 90,
    descripcion: "Alitas crujientes con salsa a elegir acompañadas de papas.",
    imagen: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=300",
    destacado: "🍟 Con Papas",
    sabores: ["BBQ", "Mango Habanero", "Búfalo", "Tamarindo", "Hot", "Original"]
  },

  // --- POSTRES ---
  {
    id: 15,
    nombre: "Carlota de Limón",
    categoria: "postres",
    precio: 50,
    descripcion: "Postre frío casero con crema especial y galleta.",
    imagen: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=300",
    destacado: "🍰 Postre Casero"
  },
  {
    id: 16,
    nombre: "Fresas con Crema",
    categoria: "postres",
    precio: 50,
    descripcion: "Fresas frescas servidas con crema dulce especial.",
    imagen: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=300",
    destacado: "🍓 Dulce"
  },
  {
    id: 17,
    nombre: "Duraznos con Crema",
    categoria: "postres",
    precio: 50,
    descripcion: "Duraznos en almíbar servidos con crema dulce especial.",
    imagen: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=300",
    destacado: "🍑 Clásico"
  },
  {
    id: 18,
    nombre: "Arroz con Leche",
    categoria: "postres",
    precio: 50,
    descripcion: "Postre casero espolvoreado con canela.",
    imagen: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=300",
    destacado: "🥣 Tradicional"
  },
  {
    id: 28,
    nombre: "Plátanos Fritos (con Crema)",
    categoria: "postres",
    precio: 50,
    descripcion: "Plátanos fritos acompañados de crema dulce.",
    imagen: "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=300",
    destacado: "🍌 Fritos"
  },
  {
    id: 29,
    nombre: "Plátanos Capeados (con Crema)",
    categoria: "postres",
    precio: 55,
    descripcion: "Plátanos capeados crujientes con crema especial.",
    imagen: "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=300",
    destacado: "⭐ Capeados"
  },

  // --- BEBIDAS ---
  {
    id: 19,
    nombre: "Coca-Cola Original (335ml)",
    categoria: "bebidas",
    precio: 30,
    descripcion: "Refresco de cola bien frío.",
    imagen: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300",
    destacado: "🥤 Bebida"
  },
  {
    id: 25,
    nombre: "Coca-Cola Sin Azúcar (335ml)",
    categoria: "bebidas",
    precio: 30,
    descripcion: "Refresco sin azúcar.",
    imagen: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300",
    destacado: "🥤 Light"
  },
  {
    id: 26,
    nombre: "Coca-Cola Zero (335ml)",
    categoria: "bebidas",
    precio: 30,
    descripcion: "Refresco sabor cola sin calorías.",
    imagen: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300",
    destacado: "
