// ==========================================
// BASE DE DATOS DE PRODUCTOS - RAPIDITO SNACKS
// ==========================================
const productos = [
  // --- COMBOS Y PROMOS ---
  {
    id: 101,
    nombre: "3 Kilos de Alitas",
    categoria: "promos",
    precio: 500,
    descripcion: "3 kilos de alitas jugosas con salsa a elegir (BBQ, Mango Habanero, Búfalo, Tamarindo, Hot).",
    imagen: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=400",
    destacado: "🔥 Para Compartir"
  },
  {
    id: 102,
    nombre: "Promo 3 Mojitos",
    categoria: "promos",
    precio: 250,
    descripcion: "3 Mojitos refrescantes a precio especial.",
    imagen: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400",
    destacado: "🍹 Promo Bebidas"
  },
  {
    id: 103,
    nombre: "Combo Mojito + Hamburguesa Sencilla",
    categoria: "promos",
    precio: 150,
    descripcion: "1 Hamburguesa Sencilla + 1 Mojito del sabor de tu elección.",
    imagen: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=400",
    destacado: "⭐ Paquete Individual"
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
    imagen: "https://images.unsplash.com/photo-1583778176476-4a8b02a64c01?w=300",
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

  // --- NACHOS ---
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

  // --- COMPLEMENTOS Y SNACKS ---
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
    precio: 0, // Cambiar por el precio por orden cuando lo tengas
    descripcion: "Alitas crujientes. Salsas a elegir: Mango Habanero, Original, BBQ, Tamarindo Habanero, Fuego o Búfalo.",
    imagen: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=300",
    destacado: "Variedad de Salsas"
  },

  // --- BEBIDAS Y MOJITOS ---
  {
    id: 13,
    nombre: "Mojito Individual (1 pza)",
    categoria: "bebidas",
    precio: 100,
    descripcion: "Refrescante mojito preparado. Sabores: Mango, Frutos Rojos o Mora Azul.",
    imagen: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=300",
    destacado: ""
  },
  {
    id: 14,
    nombre: "2 Mojitos x $180",
    categoria: "bebidas",
    precio: 180,
    descripcion: "2 Mojitos preparados a elegir: Mango, Frutos Rojos o Mora Azul.",
    imagen: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=300",
    destacado: "Par de Mojitos"
  }
];
