// ==========================================
// LA ESTACIÓN DEL TRAGO - LÓGICA Y CATÁLOGO
// ==========================================

const productosTragos = [
  // --- INDIVIDUALES ($100 c/u) ---
  {
    id: 201,
    nombre: "Cantarito",
    precio: 100,
    descripcion: "Refrescante cantarito preparado con escarchado de chamoy y chile.",
    imagen: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=300",
    destacado: "⭐ Especialidad"
  },
  {
    id: 202,
    nombre: "Michelada",
    precio: 100,
    descripcion: "Cerveza bien fría preparada con clamato, salsas de la casa y escarchado.",
    imagen: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=300",
    destacado: "🍺 Clásica"
  },
  {
    id: 203,
    nombre: "Paloma",
    precio: 100,
    descripcion: "Tradicional paloma bien fría con toronja y toque cítrico.",
    imagen: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=300",
    destacado: ""
  },
  {
    id: 204,
    nombre: "Azulito",
    precio: 100,
    descripcion: "Preparado especial sabor mora azul bien helado.",
    imagen: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=300",
    destacado: "🔥 El Más Pedido"
  },
  {
    id: 205,
    nombre: "Rojito",
    precio: 100,
    descripcion: "Preparado dulce y picosito sabor frutos rojos / tamarindo.",
    imagen: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=300",
    destacado: ""
  },

  // --- PROMO PAR DE TRAGOS ($180 x 2) ---
  {
    id: 200,
    nombre: "Par de Tragos (2 x $180)",
    precio: 180,
    descripcion: "Elige la combinación de 2 bebidas a precio especial.",
    imagen: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400",
    destacado: "🎉 Promo 2x $180",
    sabores: [
      "2x Cantarito",
      "2x Michelada",
      "2x Paloma",
      "2x Azulito",
      "2x Rojito",
      "1 Cantarito + 1 Michelada",
      "1 Cantarito + 1 Azulito",
      "1 Cantarito + 1 Rojito",
      "1 Michelada + 1 Azulito",
      "1 Azulito + 1 Rojito",
      "Combinado a elegir"
    ]
  }
];

let carrito = [];
let ubicacionGPS = null;

function renderProductos() {
  const grid = document.getElementById("products-grid");
  if (!grid) return;
  grid.innerHTML = "";

  productosTragos.forEach(prod => {
    let selectorSaboresHtml = "";
    if (prod.sabores && prod.sabores.length > 0) {
      selectorSaboresHtml = `
        <div style="margin: 8px 0;">
          <label style="font-size: 0.75rem; color: #aaa; display: block; margin-bottom: 3px;">Combinación de bebidas:</label>
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
        <img src="${prod.imagen}" alt="${prod.nombre}" loading="lazy">
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

function addToCart(id) {
  const producto = productosTragos.find(p => p.id === id);
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
        <span>🍹</span>
        <p>Tu orden está vacía. ¡Elige tus bebidas favoritas!</p>
      </div>
    `;
    return;
  }

  cartList.innerHTML = "";
  carrito.forEach(item => {
    const itemDiv = document.createElement("div");
    itemDiv.style.cssText = "display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; background: #121212; padding: 8px; border-radius: 8px;";
    
    const detalleSabor = item.sabor ? `<span style="font-size: 0.72rem; color: #ffb703; display: block;">Detalle: ${item.sabor}</span>` : '';

    itemDiv.innerHTML = `
      <div style="flex: 1; padding-right: 8px;">
        <strong style="font-size: 0.85rem; display: block;">${item.nombre}</strong>
        ${detalleSabor}
        <div style="font-size: 0.75rem; color: #aaa;">$${(item.precio * item.cantidad).toFixed(2)}</div>
      </div>
      <div style="display: flex; gap: 5px; align-items: center;">
        <button onclick="cambiarCantidad('${item.key}', -1)" style="background: #2a2a2a; color: white; border: none; padding: 2px 8px; border-radius: 4px; cursor: pointer;">-</button>
        <span style="font-size: 0.85rem; width: 16px; text-align: center;">${item.cantidad}</span>
        <button onclick="cambiarCantidad('${item.key}', 1)" style="background: #1b263b; color: white; border: none; padding: 2px 8px; border-radius: 4px; cursor: pointer;">+</button>
      </div>
    `;
    cartList.appendChild(itemDiv);
  });
}

function cambiarCantidad(key, cambio) {
  const item = carrito.find(i => i.key === key);
  if (!item) return;

  item.cantidad += cambio;
  if (item.cantidad <= 0) {
    carrito = carrito.filter(i => i.key !== key);
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
    if (statusElem) {
      statusElem.style.color = "#ff4d4d";
      statusElem.innerText = "Tu navegador no soporta geolocalización.";
    }
    return;
  }

  if (btnGps) btnGps.innerText = "⏳ Obteniendo ubicación...";

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      ubicacionGPS = `https://maps.google.com/?q=${lat},${lng}`;
      
      if (btnGps) {
        btnGps.innerText = "✅ Ubicación obtenida";
        btnGps.style.background = "#1b4332";
        btnGps.style.borderColor = "#2dc653";
        btnGps.style.color = "#fff";
      }
      if (statusElem) {
        statusElem.style.color = "#2dc653";
        statusElem.innerText = "Ubicación lista para enviarse.";
      }
    },
    (error) => {
      if (btnGps) btnGps.innerText = "📍 Usar mi ubicación actual (GPS)";
      if (statusElem) {
        statusElem.style.color = "#ff4d4d";
        statusElem.innerText = error.code === error.PERMISSION_DENIED 
          ? "Permiso de ubicación denegado." 
          : "No se pudo obtener la ubicación.";
      }
    },
    { enableHighAccuracy: true, timeout: 10000 }
  );
}

function sendOrderWhatsApp() {
  if (carrito.length === 0) {
    alert("Agrega al menos una bebida a tu orden.");
    return;
  }

  const telefonoWhatsApp = "525648336057";
  const deliveryType = document.querySelector('input[name="delivery-type"]:checked')?.value || "sucursal";
  const metodoPago = document.getElementById("payment-method")?.value || "Efectivo";
  const pagoConRaw = document.getElementById("cash-amount")?.value.trim();

  let mensaje = "🍸 Hola *LA ESTACIÓN DEL TRAGO*, me gustaría realizar el siguiente pedido:\n\n";

  let total = 0;
  carrito.forEach(item => {
    const subtotal = item.precio * item.cantidad;
    total += subtotal;
    const detalleSabor = item.sabor ? ` _(${item.sabor})_` : '';
    mensaje += `▪ ${item.cantidad}x ${item.nombre}${detalleSabor} - $${subtotal.toFixed(2)}\n`;
  });

  mensaje += `\n*Total a Pagar:* $${total.toFixed(2)}\n`;

  if (deliveryType === "domicilio") {
    const direccionTexto = document.getElementById("client-address")?.value.trim() || "";
    
    if (!direccionTexto && !ubicacionGPS) {
      alert("Por favor escribe tu dirección o comparte tu ubicación GPS para el envío a domicilio.");
      return;
    }

    mensaje += `*Tipo de Pedido:* Entrega a domicilio 🛵\n`;
    if (direccionTexto) mensaje += `*Dirección:* ${direccionTexto}\n`;
    if (ubicacionGPS) mensaje += `*Ubicación GPS:* ${ubicacionGPS}\n`;
  } else {
    mensaje += `*Tipo de Pedido:* Para recoger en barra 🛍️\n`;
  }

  mensaje += `*Método de Pago:* ${metodoPago}\n`;
  if (metodoPago === "Efectivo" && pagoConRaw) {
    const montoEfectivo = parseFloat(pagoConRaw);
    if (!isNaN(montoEfectivo)) {
      const cambio = montoEfectivo - total;
      mensaje += `*Paga con:* $${montoEfectivo.toFixed(2)}`;
      if (cambio >= 0) {
        mensaje += ` (Cambio: $${cambio.toFixed(2)})\n`;
      } else {
        mensaje += ` _(Monto insuficiente)_\n`;
      }
    }
  }

  mensaje += "\n¡Muchas gracias!";

  const url = `https://wa.me/${telefonoWhatsApp}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}

// Funciones globales
window.addToCart = addToCart;
window.cambiarCantidad = cambiarCantidad;
window.toggleMobileCart = toggleMobileCart;
window.toggleAddressInput = toggleAddressInput;
window.toggleCashAmountInput = toggleCashAmountInput;
window.obtenerUbicacionGPS = obtenerUbicacionGPS;
window.sendOrderWhatsApp = sendOrderWhatsApp;

document.addEventListener("DOMContentLoaded", () => {
  renderProductos();
  actualizarCarritoUI();
});
