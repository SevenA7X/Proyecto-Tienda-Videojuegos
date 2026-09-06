const formulario = document.querySelector("#formularioInventario");
const tabla = document.querySelector("#tablaInventario");
const alertasContenedor = document.querySelector("#alertasInventario");
const btnCancelar = document.querySelector("#btnCancelar");
const tituloFormulario = document.querySelector("#tituloFormulario");

let inventario = JSON.parse(localStorage.getItem("catalogoJuegos")) || [];

const STOCK_CRITICO = 5;

function renderizarTabla() {
    tabla.innerHTML = "";
    let alertaStockMostrada = false;

    inventario.forEach((juego, index) => {
        let claseFondoStock = "";
        if (juego.stock <= STOCK_CRITICO) {
            claseFondoStock = "bg-warning text-dark fw-bold rounded px-2";
            if (!alertaStockMostrada) {
                mostrarAlerta(`¡Atención! Hay juegos con stock crítico (5 unidades o menos).`, 'warning');
                alertaStockMostrada = true;
            }
        }

        tabla.innerHTML += `
            <tr>
                <td class="fw-bold">${juego.id}</td>
                <td class="text-start">
                    <div class="d-flex align-items-center">
                        <img src="${juego.imagen}" style="width: 40px; height: 40px; object-fit: cover;" class="me-2 rounded">
                        <span>${juego.nombre}</span>
                    </div>
                </td>
                <td><span class="badge bg-secondary">${juego.consola}</span></td>
                <td>$${Number(juego.precio).toLocaleString("es-CL")}</td>
                <td><span class="${claseFondoStock}">${juego.stock}</span></td>
                <td>
                    <button class="btn btn-sm btn-primary py-0" onclick="prepararEdicion(${juego.id})">Editar</button>
                    <button class="btn btn-sm btn-danger py-0" onclick="eliminarJuego(${juego.id})">Borrar</button>
                </td>
            </tr>
        `;
    });

    localStorage.setItem("catalogoJuegos", JSON.stringify(inventario));
}

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();
    formulario.classList.add('was-validated');

    if (formulario.checkValidity()) {
        const idActual = document.querySelector("#juegoId").value;
        const nuevoJuego = {
            id: idActual ? parseInt(idActual) : Date.now(),
            nombre: document.querySelector("#nombreJuego").value,
            consola: document.querySelector("#consolaJuego").value,
            precio: parseInt(document.querySelector("#precioJuego").value),
            stock: parseInt(document.querySelector("#stockJuego").value),
            imagen: document.querySelector("#imagenJuego").value,
            descripcion: document.querySelector("#descripcionJuego").value
        };

        if (idActual) {
            const index = inventario.findIndex(j => j.id === parseInt(idActual));
            inventario[index] = nuevoJuego;
            mostrarAlerta(`El juego "${nuevoJuego.nombre}" ha sido actualizado con éxito.`, 'success');
        } else {
            inventario.push(nuevoJuego);
            mostrarAlerta(`"${nuevoJuego.nombre}" ha sido agregado a tu catálogo.`, 'success');
        }

        resetearFormulario();
        renderizarTabla();
    }
});

function prepararEdicion(id) {
    const juego = inventario.find(j => j.id === id);
    if (!juego) return;

    document.querySelector("#juegoId").value = juego.id;
    document.querySelector("#nombreJuego").value = juego.nombre;
    document.querySelector("#consolaJuego").value = juego.consola;
    document.querySelector("#precioJuego").value = juego.precio;
    document.querySelector("#stockJuego").value = juego.stock;
    document.querySelector("#imagenJuego").value = juego.imagen;
    document.querySelector("#descripcionJuego").value = juego.descripcion;

    tituloFormulario.textContent = "Editar Juego";
    btnCancelar.classList.remove("d-none");
}

function eliminarJuego(id) {
    if (confirm("¿Estás seguro de que deseas borrar este juego de tu catálogo?")) {
        inventario = inventario.filter(j => j.id !== id);
        mostrarAlerta("El juego ha sido eliminado de la base de datos temporal.", 'danger');
        renderizarTabla();
    }
}

function resetearFormulario() {
    formulario.reset();
    formulario.classList.remove('was-validated');
    document.querySelector("#juegoId").value = "";
    tituloFormulario.textContent = "Agregar Nuevo Juego";
    btnCancelar.classList.add("d-none");
}

function mostrarAlerta(mensaje, tipo) {
    alertasContenedor.innerHTML = `
        <div class="alert alert-${tipo} alert-dismissible fade show shadow-sm" role="alert">
            ${mensaje}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
        </div>
    `;
    setTimeout(() => {
        const alertaActiva = document.querySelector("#alertasInventario .alert");
        if (alertaActiva) {
            const alertaInstancia = new bootstrap.Alert(alertaActiva);
            alertaInstancia.close();
        }
    }, 4000);
}

renderizarTabla();