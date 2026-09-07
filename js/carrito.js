// INICIALIZACIÓN DEL CARRITO
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// CAPTURA DE ELEMENTOS DEL DOM (HTML)
const contenedorCarrito = document.querySelector("#contenedorCarrito");
const totalCarrito = document.querySelector("#totalCarrito");
const tituloCarrito = document.querySelector("#tituloCarrito");
const btnVaciar = document.querySelector("#btnVaciar");
const btnComprar = document.querySelector("#btnComprar");
const btnContinuarInferior = document.querySelector("#btnContinuarInferior");

// FUNCIÓN PRINCIPAL DE RENDERIZADO
function renderCarrito() {
    contenedorCarrito.innerHTML = "";
    let total = 0;
    let cantidadArticulos = 0;

    carrito.forEach(item => {
        cantidadArticulos += item.cantidad;
    });

    // Actualización dinámica del Título Principal
    if (cantidadArticulos === 0) {
        tituloCarrito.textContent = "Tu carrito de compra";
    } else if (cantidadArticulos === 1) {
        tituloCarrito.textContent = "Tu carrito de compra (1 artículo)";
    } else {
        tituloCarrito.textContent = `Tu carrito de compra (${cantidadArticulos} artículos)`;
    }

    // Estado: Carrito Vacío
    if (carrito.length === 0) {
        contenedorCarrito.innerHTML = `
            <div class="mensaje-vacio">
                <p class="mb-0 text-muted">Tu carrito está vacío.</p>
            </div>
        `;
        totalCarrito.textContent = "CLP$0";
        btnComprar.disabled = true;
        btnContinuarInferior.disabled = true;
        btnVaciar.style.display = "none";
        localStorage.setItem("carrito", JSON.stringify(carrito));
        return;
    }

    // Estado: Carrito con Productos
    carrito.forEach((item, index) => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;

        let iconPlataforma = '🎮';
        if(item.consola === "PlayStation 5") iconPlataforma = '🔷';
        if(item.consola === "XBOX ONE") iconPlataforma = '🟩';
        if(item.consola === "Nintendo Switch 2") iconPlataforma = '🟥';

        contenedorCarrito.innerHTML += `
            <div class="item-carrito d-flex flex-column flex-md-row align-items-md-center position-relative">
                <img src="${item.imagen}" alt="${item.nombre}" class="item-imagen me-3 mb-3 mb-md-0">
                
                <div class="flex-grow-1">
                    <h5 class="fw-bold mb-1">${item.nombre}</h5>
                    <div class="text-muted mb-2 fs-6">${iconPlataforma} ${item.consola}</div>
                    
                    <div class="d-flex align-items-center">
                        <span class="me-2 text-muted" style="font-size: 0.85rem;">Cantidad:</span>
                        <button class="btn btn-sm btn-light border py-0 px-2" onclick="cambiarCantidad(${index}, -1)">-</button>
                        <span class="mx-2 fw-medium">${item.cantidad}</span>
                        <button class="btn btn-sm btn-light border py-0 px-2" onclick="cambiarCantidad(${index}, 1)">+</button>
                    </div>
                </div>

                <div class="text-md-end mt-3 mt-md-0 d-flex flex-column justify-content-between h-100 min-h-full" style="min-height: 80px;">
                    <div class="fw-bold fs-5 mb-auto">CLP$${subtotal.toLocaleString("es-CL")}</div>
                    <div class="mt-2">
                        <span class="link-sutil" onclick="eliminarProducto(${index})">Eliminar</span>
                    </div>
                </div>
            </div>
        `;
    });

    // Actualización de Totales y Estados Finales
    totalCarrito.textContent = `CLP$${total.toLocaleString("es-CL")}`;
    btnComprar.disabled = false;
    btnContinuarInferior.disabled = false;
    btnVaciar.style.display = "inline";
    localStorage.setItem("carrito", JSON.stringify(carrito));

    actualizarContadorCarrito();
}

// FUNCIONES DE MODIFICACIÓN DE PRODUCTOS
function cambiarCantidad(index, cambio) {
    if (carrito[index].cantidad + cambio > 0) {
        carrito[index].cantidad += cambio;
    } else {
        eliminarProducto(index);
    }
    renderCarrito();
}

function eliminarProducto(index) {
    carrito.splice(index, 1);
    renderCarrito();
}

// EVENTOS Y LÓGICA DE COMPRA
btnVaciar.addEventListener("click", () => {
    if (confirm("¿Estás seguro de que deseas eliminar todos los artículos?")) {
        carrito = [];
        renderCarrito();
    }
});

function procesarCompra() {
    if (carrito.length > 0) {
        alert("¡Compra procesada con éxito!");
        carrito = [];
        renderCarrito();
    }
}

btnComprar.addEventListener("click", procesarCompra);
btnContinuarInferior.addEventListener("click", procesarCompra);

// Renderizar al cargar
renderCarrito();