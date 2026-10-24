// ==========================================
// RAPIDITO SNACKS - LÓGICA Y BASE DE DATOS
// ==========================================

const productos = [
  // --- COMBOS Y PROMOS ---
  {
    id: 101,
    nombre: "3 Kilos de Alitas",
    categoria: "promos",
    precio: 500,
    descripcion: "3 kilos de alitas jugosas con salsa a elegir.",
    imagen: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400",
    destacado: "🔥 Para Compartir",
    sabores: ["BBQ", "Mango Habanero", "Búfalo", "Tamarindo", "Hot", "Original"]
  },
  {
    id: 102,
    nombre: "Promo 3 Mojitos",
    categoria: "promos",
    precio: 250,
    descripcion: "3 Mojitos refrescantes a precio especial.",
    imagen: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400",
    destacado: "🍹 Promo Bebidas",
    sabores: ["Mango", "Frutos Rojos", "Mora Azul", "Combinados"]
  },
  {
    id: 103,
    nombre: "Combo Mojito + Hamburguesa Sencilla",
    categoria: "promos",
    precio: 150,
    descripcion: "1 Hamburguesa Sencilla + 1 Mojito del sabor de tu elección.",
    imagen: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400",
    destacado: "⭐ Paquete Individual",
    sabores: ["Mojito Mango", "Mojito Frutos Rojos", "Mojito Mora Azul"]
  },

  // --- HAMBURGUESAS ---
  {
    id: 1,
    nombre: "Hamburguesa Original",
    categoria: "hamburguesas",
    precio: 70,
    descripcion: "Carne de res, tocino y queso derretido.",
    imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300",
    destacado: ""
  },
  {
    id: 2,
    nombre: "Hamburguesa Hawaiana",
    categoria: "hamburguesas",
    precio: 85,
    descripcion: "Carne de res, tocino, jamón, queso y piña jugosa.",
    imagen: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=300",
    destacado: "Popular"
  },
  {
    id: 3,
    nombre: "Hamburguesa Norteña",
    categoria: "hamburguesas",
    precio: 100,
    descripcion: "Carne de res, tocino, queso y crujientes aros de cebolla.",
    imagen: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=300",
    destacado: "Especial"
  },
  {
    id: 4,
    nombre: "Hamburguesa Doble",
    categoria: "hamburguesas",
    precio: 110,
    descripcion: "Doble carne de res, tocino, queso y aros de cebolla.",
    imagen: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=300",
    destacado: "🍔 La Más Grande"
  },

  // --- HOT DOGS ---
  {
    id: 5,
    nombre: "3 Hot Dogs Sencillos con Tocino",
    categoria: "hotdogs",
    precio: 80,
    descripcion: "Paquete de 3 hot dogs clásicos envueltos en tocino.",
    imagen: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=300",
    destacado: "Paquete 3x"
  },
  {
    id: 6,
    nombre: "3 Hot Dogs Especiales",
    categoria: "hotdogs",
    precio: 100,
    descripcion: "Paquete de 3 hot dogs con tocino y bastante queso manchego.",
    imagen: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=300",
    destacado: "3x $100"
  },
  {
    id: 7,
    nombre: "3 Hot Dogs Hawaianos",
    categoria: "hotdogs",
    precio: 130,
    descripcion: "Paquete de 3 hot dogs con tocino, queso derretido y piña.",
    imagen: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=300",
    destacado: "3x $130"
  },

  // --- NACHOS Y SNACKS ---
  {
    id: 8,
    nombre: "Nachos Especiales con Carne",
    categoria: "snacks",
    precio: 70,
    descripcion: "Totopos bien cargados con queso, carne sabrosa y jugosa.",
    imagen: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=300",
    destacado: "Cargados"
  },
  {
    id: 9,
    nombre: "Nachos Especiales con Longaniza",
    categoria: "snacks",
    precio: 70,
    descripcion: "Totopos bien cargados con queso y longaniza picosa y deliciosa.",
    imagen: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=300",
    destacado: ""
  },
  {
    id: 10,
    nombre: "Nachos Especiales Campechanos",
    categoria: "snacks",
    precio: 70,
    descripcion: "Totopos con queso, mezcla de carne y longaniza ¡lo mejor de dos mundos!",
    imagen: "https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?w=300",
    destacado: "🔥 El Más Pedido"
  },
  {
    id: 11,
    nombre: "Papas a la Francesa",
    categoria: "snacks",
    precio: 45,
    descripcion: "Orden de papas fritas doraditas y crujientes.",
    imagen: "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=300",
    destacado: ""
  },

  // --- ALITAS ---
  {
    id: 12,
    nombre: "Orden de Alitas Fuego y Sabor",
    categoria: "alitas",
    precio: 75,
    descripcion: "Alitas crujientes preparadas con la salsa de tu elección.",
    imagen: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=300",
    destacado: "Salsas Variadas",
    sabores: ["BBQ", "Mango Habanero", "Búfalo", "Tamarindo Habanero", "Fuego", "Original"]
  },
  {
    id: 27,
    nombre: "Orden de Alitas con Papas",
    categoria: "alitas",
    precio: 90,
    descripcion: "Alitas crujientes con salsa a elegir acompañadas de papas a la francesa.",
    imagen: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=300",
    destacado: "🍟 Recomendado",
    sabores: ["BBQ", "Mango Habanero", "Búfalo", "Tamarindo Habanero", "Fuego", "Original"]
  },

  // --- POSTRES ---
  {
    id: 15,
    nombre: "Carlota de Limón",
    categoria: "postres",
    precio: 50,
    descripcion: "Postre frío de galleta con crema de limón casera.",
    imagen: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400",
    destacado: "🍰 Casero"
  },
  {
    id: 16,
    nombre: "Fresas con Crema",
    categoria: "postres",
    precio: 50,
    descripcion: "Fresas frescas acompañadas de crema dulce especial.",
    imagen: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=400",
    destacado: "🍓 Favorito"
  },
  {
    id: 17,
    nombre: "Duraznos con Crema",
    categoria: "postres",
    precio: 50,
    descripcion: "Rebanadas de duraznos en almíbar servidos con crema dulce especial.",
    imagen: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=400",
    destacado: "🍑 Delicioso"
  },
  {
    id: 18,
    nombre: "Arroz con Leche",
    categoria: "postres",
    precio: 50,
    descripcion: "Cremoso arroz con leche espolvoreado con canela.",
    imagen: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=400",
    destacado: "Tradicional"
  },
  {
    id: 28,
    nombre: "Plátanos Fritos",
    categoria: "postres",
    precio: 50,
    descripcion: "Plátanos maduros fritos en su punto, doraditos y dulces.",
    imagen: "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=400",
    destacado: "🍌 Tradicional",
    sabores: ["Con Crema", "Con Lechera", "Con Mermelada", "Crema y Lechera", "Mixtos / Todo"]
  },
  {
    id: 29,
    nombre: "Plátanos Capeados",
    categoria: "postres",
    precio: 55,
    descripcion: "Deliciosos plátanos cubiertos con un capeado crujiente y doradito.",
    imagen: "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=400",
    destacado: "⭐ Especialidad",
    sabores: ["Con Crema", "Con Lechera", "Con Mermelada", "Crema y Lechera", "Mixtos / Todo"]
  },

  // --- BEBIDAS ---
  {
    id: 19,
    nombre: "Coca-Cola Original 335ml",
    categoria: "bebidas",
    precio: 30,
    descripcion: "Lata fría de Coca-Cola sabor original 335ml.",
    imagen: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300",
    destacado: "Fría"
  },
  {
    id: 25,
    nombre: "Coca-Cola Sin Azúcar 335ml",
    categoria: "bebidas",
    precio: 30,
    descripcion: "Lata fría de Coca-Cola Sin Azúcar 335ml.",
    imagen: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300",
    destacado: "Sin Azúcar"
  },
  {
    id: 26,
    nombre: "Coca-Cola Zero 335ml",
    categoria: "bebidas",
    precio: 30,
    descripcion: "Lata fría de Coca-Cola Zero 335ml.",
    imagen: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300",
    destacado: "Zero"
  },
  {
    id: 20,
    nombre: "Sprite 335ml",
    categoria: "bebidas",
    precio: 30,
    descripcion: "Refresco sabor lima-limón en lata bien fría.",
    imagen: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=300",
    destacado: ""
  },
  {
    id: 21,
    nombre: "Jarrito",
    categoria: "bebidas",
    precio: 30,
    descripcion: "Tradicional refresco Jarrito del sabor de tu elección.",
    imagen: "
