// ACTUALIZAR CONTADOR DEL CARRITO EN LA NAVBAR
function actualizarContadorCarrito() {
    const contadorElemento = document.querySelector("#navContadorCarrito");
    if (!contadorElemento) return;

    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let totalArticulos = 0;

    carrito.forEach(item => {
        totalArticulos += item.cantidad;
    });

    if (totalArticulos > 0) {
        contadorElemento.textContent = totalArticulos;
        contadorElemento.style.display = "inline-block";
    } else {
        contadorElemento.style.display = "none";
    }
}

// INYECTAR LA BARRA DE NAVEGACIÓN (NAVBAR)
function cargarNavbar(){
    const navbar = document.querySelector("#navbar");
    if(!navbar) return;

    navbar.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-custom-color" data-bs-theme="dark">
            <div class="container">
                <a class="navbar-brand fw-bold" style="font-family: Arial;" href="index.html">Quark Games</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuPrincipal" aria-controls="menuPrincipal" aria-expanded="false" aria-label="Alternar navegación">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="menuPrincipal">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="index.html">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="games.html">Juegos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contacto.html">Contacto</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="carrito.html">
                                🛒Carrito 
                                <span id="navContadorCarrito" class="badge bg-danger rounded-pill" style="display: none; font-size: 0.75em; transform: translateY(-2px);">0</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="login.html">🔒Admin</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;

    marcarPaginaActual();
    actualizarContadorCarrito();

    function marcarPaginaActual() {
        const paginaActual = window.location.pathname.split("/").pop() || "index.html";
        const enlaces = document.querySelectorAll("#navbar .nav-link");

        enlaces.forEach(enlace => {
            const paginaEnlace = enlace.getAttribute("href");
            if (paginaEnlace === paginaActual) {
                enlace.classList.add("active");
                enlace.setAttribute("aria-current", "page");
            }
        });
    }
}

// INYECTAR EL PIE DE PÁGINA (FOOTER)
function cargarFooter(){
    const footer = document.querySelector("#footer");
    if (!footer) return;

    footer.innerHTML = `
        <footer class="bg-dark text-white py-4 mt-auto">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h5>Quark Games</h5>
                        <p>Videojuegos para todos los gamers.</p>
                    </div>
                    <div class="col-md-6 text-md-end">
                        <h5>Contacto</h5>
                        <p class="mb-0">contactoQuak@mystore.cl</p>
                        <p>Viña del Mar, Chile</p>
                    </div>
                </div>
                <hr>
                <p class="text-center mb-0">
                    &copy; 2026 QuarkGames. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    `;
}

// EJECUCIÓN INICIAL AUTOMÁTICA
cargarNavbar();
cargarFooter();