// ==========================================
// RAPIDITO SNACKS - LÓGICA Y BASE DE DATOS
// ==========================================

const productos = [
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
  {
    id: 5,
    nombre: "Papas a la Francesa",
    categoria: "snacks",
    precio: 45,
    descripcion: "Orden de papas fritas doraditas y crujientes.",
    imagen: "https://images.unsplash.com/photo-1576107232684-1279f3908594?w=300",
    destacado: ""
  },
  {
    id: 6,
    nombre: "Coca-Cola Original 335ml",
    categoria: "bebidas",
    precio: 30,
    descripcion: "Lata fría de Coca-Cola sabor original 335ml.",
    imagen: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300",
    destacado: "Fría"
  }
];

let carrito = [];
let ubicacionGPS = null;

function renderProductos(items) {
  const grid = document.getElementById("products-grid");
  if (!grid) return;
  grid.innerHTML = "";

  items.forEach(prod => {
    const article = document.createElement("article");
    article.className = "product-card";
    article.innerHTML = `
      <div class="card-img-wrap">
        <img src="${prod.imagen}" alt="${prod.nombre}" loading="lazy">
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
    itemDiv.innerHTML = `
      <div style="flex: 1; padding-right: 8px;">
        <strong style="font-size: 0.85rem; display: block;">${item.nombre}</strong>
        <div style="font-size: 0.75rem; color: #aaa;">$${(item.precio * item.cantidad).toFixed(2)}</div>
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

function cambiarCantidad(id, cambio) {
  const item = carrito.find(i => i.id === id);
  if (!item) return;

  item.cantidad += cambio;
  if (item.cantidad <= 0) {
    carrito = carrito.filter(i => i.id !== id);
  }
  actualizarCarritoUI();
}

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

function toggleAddressInput() {
  const isDomicilio = document.querySelector('input[name="delivery-type"][value="domicilio"]')?.checked;
  const addressContainer = document.getElementById("delivery-address-container");
  if (addressContainer) {
    addressContainer.style.display = isDomicilio ? "block" : "none";
  }
}

function toggleCashAmountInput() {
  const paymentMethod = document.getElementById("payment-method")?.value;
  const cashContainer = document.getElementById("cash-change-container");
  if (cashContainer) {
    cashContainer.style.display = (paymentMethod === "Efectivo") ? "block" : "none";
  }
}

function obtenerUbicacionGPS() {
  const statusElem = document.getElementById("gps-status");
  const btnGps = document.getElementById("btn-gps");

  if (!navigator.geolocation) {
    if (statusElem) statusElem.innerText = "Geolocalización no soportada.";
    return;
  }

  if (btnGps) btnGps.innerText = "⏳ Obteniendo...";
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      ubicacionGPS = `https://maps.google.com/?q=${pos.coords.latitude},${pos.coords.longitude}`;
      if (btnGps) {
        btnGps.innerText = "✅ Ubicación lista";
        btnGps.style.background = "#1b4332";
      }
    },
    () => {
      if (btnGps) btnGps.innerText = "📍 Usar mi ubicación (GPS)";
    },
    { enableHighAccuracy: true, timeout: 10000 }
  );
}

function sendOrderWhatsApp() {
  if (carrito.length === 0) {
    alert("Agrega al menos un producto.");
    return;
  }
  const telefonoWhatsApp = "525648336057";
  let mensaje = "Hola *RAPIDITO SNACKS*, mi pedido:\n\n";
  let total = 0;
  carrito.forEach(item => {
    const sub = item.precio * item.cantidad;
    total += sub;
    mensaje += `▪ ${item.cantidad}x ${item.nombre} - $${sub.toFixed(2)}\n`;
  });
  mensaje += `\n*Total:* $${total.toFixed(2)}\n¡Gracias!`;
  window.open(`https://wa.me/${telefonoWhatsApp}?text=${encodeURIComponent(mensaje)}`, "_blank");
}

document.addEventListener("DOMContentLoaded", () => {
  renderProductos(productos);
  actualizarCarritoUI();
});
