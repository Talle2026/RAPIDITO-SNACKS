// ==========================================
// RAPIDITO SNACKS - LÓGICA Y BASE DE DATOS
// ==========================================

// 1. BASE DE DATOS DE PRODUCTOS (CON SABORES Y OPCIONES)
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
    precio: 110,
    descripcion: "Alitas crujientes preparadas con la salsa de tu elección.",
    imagen: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=300",
    destacado: "Salsas Variadas",
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

  // --- REFRESCOS Y BEBIDAS ---
  {
    id: 19,
    nombre: "Coca-Cola Original 335ml",
    categoria: "refrescos",
    precio: 30,
    descripcion: "Lata fría de Coca-Cola sabor original 335ml.",
    imagen: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300",
    destacado: "Fría"
  },
  {
    id: 25,
    nombre: "Coca-Cola Sin Azúcar 335ml",
    categoria: "refrescos",
    precio: 30,
    descripcion: "Lata fría de Coca-Cola Sin Azúcar 335ml.",
    imagen: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300",
    destacado: "Sin Azúcar"
  },
  {
    id: 26,
    nombre: "Coca-Cola Zero 335ml",
    categoria: "refrescos",
    precio: 30,
    descripcion: "Lata fría de Coca-Cola Zero 335ml.",
    imagen: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300",
    destacado: "Zero"
  },
  {
    id: 20,
    nombre: "Sprite 335ml",
    categoria: "refrescos",
    precio: 30,
    descripcion: "Refresco sabor lima-limón en lata bien fría.",
    imagen: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=300",
    destacado: ""
  },
  {
    id: 21,
    nombre: "Jarrito",
    categoria: "refrescos",
    precio: 30,
    descripcion: "Tradicional refresco Jarrito del sabor de tu elección.",
    imagen: "https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=300",
    destacado: "Sazones de México",
    sabores: ["Mandarina", "Tamarindo", "Toronja", "Limón", "Fruit Punch"]
  },
  {
    id: 22,
    nombre: "Manzanita Sol",
    categoria: "refrescos",
    precio: 30,
    descripcion: "Refresco clásico sabor manzana.",
    imagen: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300",
    destacado: ""
  },
  {
    id: 23,
    nombre: "Boing",
    categoria: "refrescos",
    precio: 30,
    descripcion: "Delicioso jugo de fruta Boing sabor a elegir.",
    imagen: "https://images.unsplash.com/photo-1546173159-315724a31696?w=300",
    destacado: "Fruta Real",
    sabores: ["Mango", "Guayaba", "Durazno", "Uva", "Manzana"]
  },
  {
    id: 24,
    nombre: "Té Arizona",
    categoria: "refrescos",
    precio: 30,
    descripcion: "Lata de Té Arizona helado sabor a elegir.",
    imagen: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=300",
    destacado: "Helado",
    sabores: ["Té Verde con Miel", "Sandía", "Mango (Mucho Mango)", "Té Negro con Limón", "Fruit Punch"]
  },

  // --- BEBIDAS Y MOJITOS ---
  {
    id: 13,
    nombre: "Mojito Individual (1 pza)",
    categoria: "bebidas",
    precio: 100,
    descripcion: "Refrescante mojito preparado.",
    imagen: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=300",
    destacado: "",
    sabores: ["Mango", "Frutos Rojos", "Mora Azul"]
  },
  {
    id: 14,
    nombre: "2 Mojitos x $180",
    categoria: "bebidas",
    precio: 180,
    descripcion: "2 Mojitos preparados a elegir.",
    imagen: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=300",
    destacado: "Par de Mojitos",
    sabores: ["2x Mango", "2x Frutos Rojos", "2x Mora Azul", "1 Mango + 1 Frutos Rojos", "1 Mango + 1 Mora Azul", "1 Frutos Rojos + 1 Mora Azul"]
  }
];

// Estado global del carrito
let carrito = [];

// 2. RENDERIZAR PRODUCTOS EN EL GRID
function renderProductos(items) {
  const grid = document.getElementById("products-grid");
  if (!grid) return;
  grid.innerHTML = "";

  if (items.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px 10px; color: var(--text-muted);">
        <p style="font-size: 1.5rem;">🔍</p>
        <p>No se encontraron productos en esta categoría.</p>
      </div>
    `;
    return;
  }

  items.forEach(prod => {
    if (prod.categoria === "promos" && items.length === productos.length) return;

    // Generar Selector de Sabores si el producto los requiere
    let selectorSaboresHtml = "";
    if (prod.sabores && prod.sabores.length > 0) {
      selectorSaboresHtml = `
        <div style="margin: 8px 0;">
          <label style="font-size: 0.75rem; color: #aaa; display: block; margin-bottom: 3px;">Sabor / Variedad:</label>
          <select id="sabor-${prod.id}" style="width: 100%; background: #1a1a1a; color: #fff; border: 1px solid #333; padding: 6px; border-radius: 6px; font-size: 0.8rem;">
            ${prod.sabores.map(sabor => `<option value="${sabor}">${sabor}</option>`).join('')}
          </select>
        </div>
      `;
    }

    const article = document.createElement("article");
    article.className = "product-card";
    article.innerHTML = `
      <div class="card-img-wrap">
        <img src="${prod.imagen}" alt="${prod.nombre}" loading="lazy" onerror="this.src='https://via.placeholder.com/300x200?text=Rapidito+Snacks'">
        ${prod.destacado ? `<span class="card-tag">${prod.destacado}</span>` : ''}
      </div>
      <div class="card-body">
        <h3>${prod.nombre}</h3>
        <p>${prod.descripcion}</p>
        ${selectorSaboresHtml}
        <div class="card-action">
          <span class="price">$${prod.precio.toFixed(2)}</span>
          <button class="btn-add-item" onclick="addToCart(${prod.id})">+ Pedir</button>
        </div>
      </div>
    `;
    grid.appendChild(article);
  });
}

// 3. AGREGAR PRODUCTO AL CARRITO CON SABOR SELECCIONADO
function addToCart(id) {
  const producto = productos.find(p => p.id === id);
  if (!producto) return;

  const selectElem = document.getElementById(`sabor-${id}`);
  const saborSeleccionado = selectElem ? selectElem.value : null;

  const itemKey = saborSeleccionado ? `${id}-${saborSeleccionado}` : `${id}`;
  const itemEnCarrito = carrito.find(item => item.key === itemKey);

  if (itemEnCarrito) {
    itemEnCarrito.cantidad++;
  } else {
    carrito.push({
      ...producto,
      key: itemKey,
      sabor: saborSeleccionado,
      cantidad: 1
    });
  }

  actualizarCarritoUI();
}

// 4. ACTUALIZAR INTERFAZ DEL CARRITO
function actualizarCarritoUI() {
  const cartList = document.getElementById("cart-items-list");
  const cartCount = document.getElementById("cart-count");
  const mobileCartBadge = document.getElementById("mobile-cart-badge");
  const totalVal = document.getElementById("total-val");

  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  if (cartCount) cartCount.innerText = totalItems;
  if (mobileCartBadge) mobileCartBadge.innerText = totalItems;

  const totalPrecio = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
  if (totalVal) totalVal.innerText = `$${totalPrecio.toFixed(2)}`;

  if (!cartList) return;

  if (carrito.length === 0) {
    cartList.innerHTML = `
      <div class="empty-state">
        <span>🍽️</span>
        <p>Aún no has agregado delicias a tu pedido.</p>
      </div>
    `;
    return;
  }

  cartList.innerHTML = "";
  carrito.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.style.cssText = "display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; background: #121212; padding: 8px; border-radius: 8px;";
    
    const detalleSabor = item.sabor ? `<span style="font-size: 0.72rem; color: #ffb703; display: block;">Sabor: ${item.sabor}</span>` : '';

    itemDiv.innerHTML = `
      <div style="flex: 1; padding-right: 8px;">
        <strong style="font-size: 0.85rem; display: block;">${item.nombre}</strong>
        ${detalleSabor}
        <div style="font-size: 0.75rem; color: #aaa;">$${(item.precio * item.cantidad).toFixed(2)}</div>
      </div>
      <div style="display: flex; gap: 5px; align-items: center;">
        <button onclick="cambiarCantidad('${item.key}', -1)" style="background: #2a2a2a; color: white; border: none; padding: 2px 8px; border-radius: 4px; cursor: pointer;">-</button>
        <span style="font-size: 0.85rem; width: 16px; text-align: center;">${item.cantidad}</span>
        <button onclick="cambiarCantidad('${item.key}', 1)" style="background: #d9381e; color: white; border: none; padding: 2px 8px; border-radius: 4px; cursor: pointer;">+</button>
      </div>
    `;
    cartList.appendChild(itemDiv);
  });
}

// 5. CAMBIAR CANTIDAD (+ / -)
function cambiarCantidad(key, cambio) {
  const item = carrito.find(i => i.key === key);
  if (!item) return;

  item.cantidad += cambio;

  if (item.cantidad <= 0) {
    carrito = carrito.filter(i => i.key !== key);
  }

  actualizarCarritoUI();
}

// 6. INICIALIZACIÓN DE EVENTOS
document.addEventListener("DOMContentLoaded", () => {
  renderProductos(productos);
  actualizarCarritoUI();

  // Filtros por Categoría
  const categoryButtons = document.querySelectorAll(".cat-btn");
  categoryButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      categoryButtons.forEach(b => b.classList.remove("active"));
      
      const currentBtn = e.currentTarget;
      currentBtn.classList.add("active");

      const cat = currentBtn.getAttribute("data-category");

      if (cat === "todos") {
        renderProductos(productos);
      } else {
        const filtrados = productos.filter(p => p.categoria === cat);
        renderProductos(filtrados);
      }
    });
  });

  // Buscador en tiempo real
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const texto = e.target.value.toLowerCase().trim();
      const filtrados = productos.filter(p => 
        p.nombre.toLowerCase().includes(texto) || 
        p.descripcion.toLowerCase().includes(texto)
      );
      renderProductos(filtrados);
    });
  }

  // Ajuste al redimensionar pantalla
  window.addEventListener("resize", () => {
    const sidebar = document.getElementById("cart-sidebar");
    if (sidebar && window.innerWidth >= 900) {
      sidebar.style.display = "";
      sidebar.style.position = "";
      sidebar.style.top = "";
      sidebar.style.left = "";
      sidebar.style.width = "";
      sidebar.style.height = "";
      sidebar.style.zIndex = "";
    }
  });
});

// 7. ABRIR / CERRAR CARRITO EN MÓVIL
function toggleMobileCart() {
  const sidebar = document.getElementById("cart-sidebar");
  if (!sidebar) return;

  const isVisible = getComputedStyle(sidebar).display !== "none";

  if (isVisible && sidebar.style.position === "fixed") {
    sidebar.style.display = "none";
  } else {
    sidebar.style.display = "flex";
    sidebar.style.position = "fixed";
    sidebar.style.top = "0";
    sidebar.style.left = "0";
    sidebar.style.width = "100%";
    sidebar.style.height = "100vh";
    sidebar.style.zIndex = "1000";
  }
}

// 8. ENVIAR PEDIDO A WHATSAPP
function sendOrderWhatsApp() {
  if (carrito.length === 0) {
    alert("Agrega al menos un producto a tu pedido.");
    return;
  }

  const telefonoWhatsApp = "525648336057";

  let mensaje = "Hola *RAPIDITO SNACKS*, me gustaría realizar el siguiente pedido:\n\n";

  let total = 0;
  carrito.forEach(item => {
    const subtotal = item.precio * item.cantidad;
    total += subtotal;
    const detalleSabor = item.sabor ? ` _(Sabor: ${item.sabor})_` : '';
    mensaje += `▪ ${item.cantidad}x ${item.nombre}${detalleSabor} - $${subtotal.toFixed(2)}\n`;
  });

  mensaje += `\n*Total a Pagar:* $${total.toFixed(2)}\n`;

  const deliveryType = document.querySelector('input[name="delivery-type"]:checked') || document.querySelector('input[name="delivery"]:checked');
  const tipoEntrega = deliveryType ? deliveryType.value : "sucursal";

  mensaje += `*Tipo de Pedido:* ${tipoEntrega === "domicilio" ? "Entrega a domicilio 🛵" : "Para recoger en local 🛍️"}\n\n`;
  mensaje += "¡Muchas gracias!";

  const url = `https://wa.me/${telefonoWhatsApp}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}
