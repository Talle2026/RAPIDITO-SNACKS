// ==========================================
// RAPIDITO SNACKS - LÓGICA DE LA APLICACIÓN
// ==========================================

// 1. BASE DE DATOS DE PRODUCTOS
const productos = [
  {
    id: 1,
    nombre: "Hamburguesa Rapidito",
    categoria: "hamburguesas",
    precio: 85,
    descripcion: "Carne 100% res, queso derretido, tocino crujiente y aderezo especial.",
    imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300",
    destacado: "Recomendado"
  },
  {
    id: 2,
    nombre: "Alitas Picositas (8 pcs)",
    categoria: "alitas",
    precio: 110,
    descripcion: "Bañadas en salsa Buffalo o BBQ, acompañadas de aderezo ranch.",
    imagen: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=300",
    destacado: "Popular"
  },
  {
    id: 3,
    nombre: "Hotdog Jumbo Especial",
    categoria: "hotdogs",
    precio: 55,
    descripcion: "Salchicha de pavo envuelta en tocino, cebolla caramelizada y queso.",
    imagen: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=300",
    destacado: "Nuevo"
  },
  {
    id: 4,
    nombre: "Helado de Vainilla y Galleta",
    categoria: "postres",
    precio: 45,
    descripcion: "Cremoso helado de vainilla con trozos de galleta oreo y chispas.",
    imagen: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300",
    destacado: "Dulce"
  },
  {
    id: 5,
    nombre: "Refresco Frío (600ml)",
    categoria: "bebidas",
    precio: 25,
    descripcion: "Coca-Cola, Sprite, Fanta o Sidral bien frío.",
    imagen: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300",
    destacado: ""
  },
  {
    id: 101,
    nombre: "COMBO RAPIDITO",
    categoria: "todos",
    precio: 145,
    descripcion: "1 Hamburguesa Especial + 5 Alitas BBQ + Papas a la francesa y Refresco.",
    imagen: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=300",
    destacado: "🔥 El Más Pedido"
  }
];

// Estado del Carrito
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
        <p>No se encontraron productos.</p>
      </div>
    `;
    return;
  }

  items.forEach(prod => {
    // Si es la promo destacada principal (ID 101), no renderizar en el grid estándar
    if (prod.id === 101) return;

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
        <div class="card-action">
          <span class="price">$${prod.precio.toFixed(2)}</span>
          <button class="btn-add-item" onclick="addToCart(${prod.id})">+ Pedir</button>
        </div>
      </div>
    `;
    grid.appendChild(article);
  });
}

// 3. AGREGAR PRODUCTO AL CARRITO
function addToCart(id) {
  const producto = productos.find(p => p.id === id);
  if (!producto) return;

  const itemEnCarrito = carrito.find(item => item.id === id);

  if (itemEnCarrito) {
    itemEnCarrito.cantidad++;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  actualizarCarritoUI();
}

// 4. ACTUALIZAR INTERFAZ DEL CARRITO
function actualizarCarritoUI() {
  const cartList = document.getElementById("cart-items-list");
  const cartCount = document.getElementById("cart-count");
  const mobileCartBadge = document.getElementById("mobile-cart-badge");
  const totalVal = document.getElementById("total-val");

  // Total de items
  const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  if (cartCount) cartCount.innerText = totalItems;
  if (mobileCartBadge) mobileCartBadge.innerText = totalItems;

  // Calcular total $
  const totalPrecio = carrito.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);
  if (totalVal) totalVal.innerText = `$${totalPrecio.toFixed(2)}`;

  // Dibujar elementos en el sidebar
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
    itemDiv.innerHTML = `
      <div style="flex: 1; padding-right: 8px;">
        <strong style="font-size: 0.85rem; display: block;">${item.nombre}</strong>
        <div style="font-size: 0.75rem; color: #ffb703;">$${(item.precio * item.cantidad).toFixed(2)}</div>
      </div>
      <div style="display: flex; gap: 5px; align-items: center;">
        <button onclick="cambiarCantidad(${item.id}, -1)" style="background: #2a2a2a; color: white; border: none; padding: 2px 8px; border-radius: 4px; cursor: pointer;">-</button>
        <span style="font-size: 0.85rem; width: 16px; text-align: center;">${item.cantidad}</span>
        <button onclick="cambiarCantidad(${item.id}, 1)" style="background: #d9381e; color: white; border: none; padding: 2px 8px; border-radius: 4px; cursor: pointer;">+</button>
      </div>
    `;
    cartList.appendChild(itemDiv);
  });
}

// 5. CAMBIAR CANTIDAD (+ / -)
function cambiarCantidad(id, cambio) {
  const item = carrito.find(i => i.id === id);
  if (!item) return;

  item.cantidad += cambio;

  if (item.cantidad <= 0) {
    carrito = carrito.filter(i => i.id !== id);
  }

  actualizarCarritoUI();
}

// 6. INICIALIZACIÓN Y EVENTOS DE BÚSQUEDA Y NAVEGACIÓN
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

  // Ajuste en cambio de tamaño de ventana para restaurar layout
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

  const telefonoWhatsApp = "525513774057";

  let mensaje = "Hola *RAPIDITO SNACKS*, me gustaría realizar el siguiente pedido:\n\n";

  let total = 0;
  carrito.forEach(item => {
    const subtotal = item.precio * item.cantidad;
    total += subtotal;
    mensaje += `▪ ${item.cantidad}x ${item.nombre} - $${subtotal.toFixed(2)}\n`;
  });

  mensaje += `\n*Total a Pagar:* $${total.toFixed(2)}\n`;

  const deliveryType = document.querySelector('input[name="delivery-type"]:checked') || document.querySelector('input[name="delivery"]:checked');
  const tipoEntrega = deliveryType ? deliveryType.value : "sucursal";

  mensaje += `*Tipo de Pedido:* ${tipoEntrega === "domicilio" ? "Entrega a domicilio 🛵" : "Para recoger en local 🛍️"}\n\n`;
  mensaje += "¡Muchas gracias!";

  const url = `https://wa.me/${telefonoWhatsApp}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}
