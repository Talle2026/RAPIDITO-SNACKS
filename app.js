// ==========================================
// RAPIDITO SNACKS - LÓGICA Y CATÁLOGO
// ==========================================

const productosSnacks = [
  // --- HAMBURGUESAS ---
  {
    id: 1,
    nombre: "Hamburguesa Original",
    precio: 80.00,
    descripcion: "Carne de res, tocino y queso derretido.",
    imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300",
    destacado: "🍔 Clásica",
    colorBorde: "#e63946"
  },
  {
    id: 2,
    nombre: "Hamburguesa Hawaiana Popular",
    precio: 90.00,
    descripcion: "Carne de res, tocino, jamón, queso y piña jugosa.",
    imagen: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=300",
    destacado: "🍍 Hawaiana",
    colorBorde: "#f77f00"
  },
  {
    id: 3,
    nombre: "Hamburguesa Norteña Especial",
    precio: 110.00,
    descripcion: "Carne de res, tocino, queso y crujientes aros de cebolla.",
    imagen: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=300",
    destacado: "⭐ Especial",
    colorBorde: "#fcbf49"
  },
  {
    id: 4,
    nombre: "Hamburguesa Doble",
    precio: 120.00,
    descripcion: "Doble carne de res, tocino, queso y aros de cebolla.",
    imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
    destacado: "🔥 Doble Carne",
    colorBorde: "#d62828"
  },

  // --- NACHOS & SNACKS ---
  {
    id: 5,
    nombre: "Nachos Especiales con Carne",
    precio: 75.00,
    descripcion: "Totopos cargados con queso, carne sabrosa y jugosa.",
    imagen: "https://images.unsplash.com/photo-1582169505937-b99fbc74338d?w=300",
    destacado: "🧀 Con Carne",
    colorBorde: "#f39c12"
  },
  {
    id: 6,
    nombre: "Nachos Especiales con Longaniza",
    precio: 75.00,
    descripcion: "Totopos cargados con queso y longaniza picosa.",
    imagen: "https://images.unsplash.com/photo-1582169505937-b99fbc74338d?w=300",
    destacado: "🌶️ Con Longaniza",
    colorBorde: "#d35400"
  },
  {
    id: 7,
    nombre: "Nachos Especiales Campechanos",
    precio: 75.00,
    descripcion: "Mezcla de carne y longaniza ¡Lo mejor de dos mundos!",
    imagen: "https://images.unsplash.com/photo-1582169505937-b99fbc74338d?w=300",
    destacado: "🎉 Campechanos",
    colorBorde: "#e74c3c"
  },
  {
    id: 8,
    nombre: "Papas a la Francesa",
    precio: 45.00,
    descripcion: "Orden de papas fritas doraditas y crujientes.",
    imagen: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300",
    destacado: "🍟 Crujientes",
    colorBorde: "#f1c40f"
  },

  // --- HOT DOGS (PAQUETE 3X) ---
  {
    id: 9,
    nombre: "3 Hot Dogs Sencillos c/ Tocino",
    precio: 80.00,
    descripcion: "Paquete de 3 hot dogs clásicos envueltos en tocino.",
    imagen: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=300",
    destacado: "🌭 Paquete 3x",
    colorBorde: "#e67e22"
  },
  {
    id: 10,
    nombre: "3 Hot Dogs Especiales",
    precio: 100.00,
    descripcion: "Con tocino y bastante queso manchego.",
    imagen: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=300",
    destacado: "🧀 Con Queso",
    colorBorde: "#d35400"
  },
  {
    id: 11,
    nombre: "3 Hot Dogs Hawaianos",
    precio: 130.00,
    descripcion: "Con tocino, queso derretido y piña.",
    imagen: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?w=300",
    destacado: "🍍 Hawaianos",
    colorBorde: "#f39c12"
  },

  // --- ALITAS Y PAQUETES ---
  {
    id: 12,
    nombre: "Orden de Alitas Fuego y Sabor",
    precio: 75.00,
    descripcion: "Alitas crujientes preparadas con salsa a elección (BBQ, Mango Habanero, Búfalo, Tamarindo, Hot u Original).",
    imagen: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=300",
    destacado: "🍗 Alitas",
    colorBorde: "#c0392b",
    sabores: ["BBQ", "Mango Habanero", "Búfalo", "Tamarindo", "Hot", "Original"]
  },
  {
    id: 13,
    nombre: "Orden de Alitas con Papas",
    precio: 90.00,
    descripcion: "Alitas crujientes con salsa a elegir acompañadas de papas.",
    imagen: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=300",
    destacado: "🍟 Con Papas",
    colorBorde: "#e74c3c",
    sabores: ["BBQ", "Mango Habanero", "Búfalo", "Tamarindo", "Hot", "Original"]
  },
  {
    id: 14,
    nombre: "Paquete Mega: 3 Kilos de Alitas",
    precio: 500.00,
    descripcion: "3 kilos de alitas para compartir. Elige salsa: BBQ, Mango Habanero, Búfalo, Tamarindo, Hot u Original.",
    imagen: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400",
    destacado: "🔥 Paquete Mega",
    colorBorde: "#8e44ad",
    sabores: ["BBQ", "Mango Habanero", "Búfalo", "Tamarindo", "Hot", "Original"]
  },

  // --- POSTRES ---
  {
    id: 15,
    nombre: "Carlota de Limón",
    precio: 50.00,
    descripcion: "Postre frío casero con crema especial y galleta.",
    imagen: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=300",
    destacado: "🍰 Postre Casero",
    colorBorde: "#27ae60"
  },
  {
    id: 16,
    nombre: "Fresas con Crema",
    precio: 50.00,
    descripcion: "Fresas frescas servidas con crema dulce especial.",
    imagen: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=300",
    destacado: "🍓 Dulce",
    colorBorde: "#2ecc71"
  },
  {
    id: 17,
    nombre: "Duraznos con Crema",
    precio: 50.00,
    descripcion: "Duraznos en almíbar servidos con crema dulce especial.",
    imagen: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=300",
    destacado: "🍑 Clásico",
    colorBorde: "#16a085"
  },
  {
    id: 18,
    nombre: "Arroz con Leche",
    precio: 50.00,
    descripcion: " традициональ postre casero espolvoreado con canela.",
    imagen: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=300",
    destacado: "🥣 Tradicional",
    colorBorde: "#1abc9c"
  },
  {
    id: 19,
    nombre: "Plátanos Fritos (con Crema)",
    precio: 50.00,
    descripcion: "Plátanos fritos acompañados de crema dulce.",
    imagen: "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=300",
    destacado: "🍌 Fritos",
    colorBorde: "#f1c40f"
  },
  {
    id: 20,
    nombre: "Plátanos Capeados (con Crema)",
    precio: 55.00,
    descripcion: "Plátanos capeados crujientes con crema especial.",
    imagen: "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=300",
    destacado: "⭐ Capeados",
    colorBorde: "#f39c12"
  },

  // --- BEBIDAS ($30 c/u) ---
  {
    id: 21,
    nombre: "Coca-Cola Original (335ml)",
    precio: 30.00,
    descripcion: "Refresco de cola bien frío.",
    imagen: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300",
    destacado: "🥤 Bebida",
    colorBorde: "#c0392b"
  },
  {
    id: 22,
    nombre: "Coca-Cola Sin Azúcar (335ml)",
    precio: 30.00,
    descripcion: "Refresco sin azúcar.",
    imagen: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300",
    destacado: "🥤 Light",
    colorBorde: "#7f8c8d"
  },
  {
    id: 23,
    nombre: "Coca-Cola Zero (335ml)",
    precio: 30.00,
    descripcion: "Refresco sabor cola sin calorías.",
    imagen: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=300",
    destacado: "🥤 Zero",
    colorBorde: "#2c3e50"
  },
  {
    id: 24,
    nombre: "Sprite (335ml)",
    precio: 30.00,
    descripcion: "Refresco sabor lima-limón.",
    imagen: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300",
    destacado: "🍋 Cítrico",
    colorBorde: "#27ae60"
  },
  {
    id: 25,
    nombre: "Jarrito Mandarina",
    precio: 30.00,
    descripcion: "Sabor tradicional mexicano.",
    imagen: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300",
    destacado: "🍊 Jarrito",
    colorBorde: "#d35400"
  },
  {
    id: 26,
    nombre: "Manzanita Sol",
    precio: 30.00,
    descripcion: "Refresco sabor manzana.",
    imagen: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=300",
    destacado: "🍏 Manzana",
    colorBorde: "#2ecc71"
  },
  {
    id: 27,
    nombre: "Boing de Mango",
    precio: 30.00,
    descripcion: "Néctar de fruta natural.",
    imagen: "https://images.unsplash.com/photo-1536256263959-770b48d82b08?w=300",
    destacado: "🥭 Néctar",
    colorBorde: "#f39c12"
  },
  {
    id: 28,
    nombre: "Té Arizona (Verde c/ Miel)",
    precio: 30.00,
    descripcion: "Té helado con toque de miel.",
    imagen: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300",
    destacado: "🍵 Té",
    colorBorde: "#27ae60"
  }
];

let carrito = [];
let ubicacionGPS = null;

function renderProductos() {
  const grid = document.getElementById("products-grid");
  if (!grid) return;
  grid.innerHTML = "";

  productosSnacks.forEach(prod => {
    let selectorSaboresHtml = "";
    if (prod.sabores && prod.sabores.length > 0) {
      selectorSaboresHtml = `
        <div style="margin: 8px 0;">
          <label style="font-size: 0.75rem; color: #aaa; display: block; margin-bottom: 3px;">Salsa / Estilo:</label>
          <select id="sabor-${prod.id}" style="width: 100%; background: #1a1a1a; color: #fff; border: 1px solid #333; padding: 6px; border-radius: 6px; font-size: 0.8rem;">
            ${prod.sabores.map(sabor => `<option value="${sabor}">${sabor}</option>`).join('')}
          </select>
        </div>
      `;
    }

    const colorBorde = prod.colorBorde || "#333";

    const article = document.createElement("article");
    article.className = "product-card";
    article.style.cssText = `border-left: 4px solid ${colorBorde};`;

    article.innerHTML = `
      <div class="card-img-wrap">
        <img src="${prod.imagen}" alt="${prod.nombre}" loading="lazy">
        ${prod.destacado ? `<span class="card-tag" style="background: ${colorBorde}; color: #fff;">${prod.destacado}</span>` : ''}
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
  const producto = productosSnacks.find(p => p.id === id);
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
        <span>🍔</span>
        <p>Tu orden está vacía. ¡Elige tus snacks favoritos!</p>
      </div>
    `;
    return;
  }

  cartList.innerHTML = "";
  carrito.forEach(item => {
    const itemDiv = document.createElement("div");
    const colorItem = item.colorBorde || '#e63946';
    itemDiv.style.cssText = `display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; background: #121212; padding: 8px; border-radius: 8px; border-left: 3px solid ${colorItem};`;
    
    const detalleSabor = item.sabor ? `<span style="font-size: 0.72rem; color: #ffb703; display: block;">Opción: ${item.sabor}</span>` : '';

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

// ==========================================
// CONTADOR DE VISITAS Y REGISTRO INTERNO
// ==========================================
function registrarVisita() {
  let visitas = parseInt(localStorage.getItem("visitas_snacks") || "0");
  visitas++;
  localStorage.setItem("visitas_snacks", visitas.toString());
}

function registrarPedidoInterno(items, totalVenta) {
  let registros = JSON.parse(localStorage.getItem("registro_snacks_v2") || "[]");
  const fechaHora = new Date().toLocaleString("es-MX");

  const nuevoPedido = {
    id: registros.length + 1,
    fecha: fechaHora,
    total: totalVenta,
    detalles: items.map(i => `${i.cantidad}x ${i.nombre}${i.sabor ? ' (' + i.sabor + ')' : ''}`)
  };

  registros.push(nuevoPedido);
  localStorage.setItem("registro_snacks_v2", JSON.stringify(registros));
}

function verRegistroSecreto() {
  const passwordSecreto = "F@nt4$"; 
  const ingreso = prompt("🔒 Introduce la contraseña de administración:");

  if (ingreso !== passwordSecreto) {
    if (ingreso !== null) {
      alert("❌ Contraseña incorrecta.");
    }
    return;
  }

  let totalVisitas = localStorage.getItem("visitas_snacks") || "0";
  let registros = JSON.parse(localStorage.getItem("registro_snacks_v2") || "[]");

  let reporteTexto = `👀 Visitas Totales al Menú: ${totalVisitas}\n`;
  reporteTexto += `📊 Pedidos Registrados: ${registros.length}\n`;
  reporteTexto += `----------------------------------------\n`;

  if (registros.length === 0) {
    alert(reporteTexto + "\nAún no se han generado ventas en este dispositivo.");
    return;
  }

  let totalDinero = 0;
  registros.forEach(p => {
    totalDinero += p.total;
    reporteTexto += `#${p.id} [${p.fecha}] - Total: $${p.total}\n  ${p.detalles.join(", ")}\n\n`;
  });

  reporteTexto += `----------------------------------------\n💰 Venta Total Acumulada: $${totalDinero.toFixed(2)}\n\n`;
  reporteTexto += `¿Deseas reiniciar los contadores (visitas y ventas) a 0 para una nueva jornada?`;

  if (confirm(reporteTexto)) {
    if (confirm("⚠️ ¿Seguro que quieres borrar el historial y las visitas?")) {
      localStorage.removeItem("registro_snacks_v2");
      localStorage.removeItem("visitas_snacks");
      alert("✅ Historial y visitas reiniciados correctamente.");
    }
  }
}

function sendOrderWhatsApp() {
  if (carrito.length === 0) {
    alert("Agrega al menos un producto a tu orden.");
    return;
  }

  const telefonoWhatsApp = "525648336057"; // Número del negocio
  const deliveryType = document.querySelector('input[name="delivery-type"]:checked')?.value || "sucursal";
  const metodoPago = document.getElementById("payment-method")?.value || "Efectivo";
  const pagoConRaw = document.getElementById("cash-amount")?.value.trim();

  let mensaje = "🍔 Hola *RAPIDITO SNACKS*, me gustaría realizar el siguiente pedido:\n\n";

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
    mensaje += `*Tipo de Pedido:* Para recoger en sucursal 🛍️\n`;
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

  // Guarda de manera interna y privada en el dispositivo del local
  registrarPedidoInterno(carrito, total);

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
  registrarVisita(); // Cuenta la visita en silencio
  renderProductos();
  actualizarCarritoUI();

  const tituloHeader = document.querySelector("header h1") || document.querySelector(".logo");
  if (tituloHeader) {
    let pressTimer;
    tituloHeader.addEventListener("touchstart", () => {
      pressTimer = setTimeout(() => verRegistroSecreto(), 3000);
    });
    tituloHeader.addEventListener("touchend", () => clearTimeout(pressTimer));
    tituloHeader.addEventListener("mousedown", () => {
      pressTimer = setTimeout(() => verRegistroSecreto(), 3000);
    });
    tituloHeader.addEventListener("mouseup", () => clearTimeout(pressTimer));
  }
});
