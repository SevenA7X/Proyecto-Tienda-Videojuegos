console.log("JavaScript está funcionando");
function cargarNavbar(){
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
                            <a class="nav-link"  aria-current="page" href="index.html">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="productos.html">Productos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contacto.html">Contacto</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="login.html">Login</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    
        `;

    marcarPaginaActual();

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

function cargarFooter(){
    const footer = document.querySelector("#footer");
    if (!footer) return;

    footer.innerHTML = `
        <footer class="bg-dark text-white py-4 mt-auto">

            <div class="container">

                <div class="row">

                    <div class="col-md-6">
                        <h5>Quark Games</h5>

                        <p>
                            Videojuegos para todos los gamers.
                        </p>
                    </div>

                    <div class="col-md-6 text-md-end">
                        <h5>Contacto</h5>

                        <p class="mb-0">
                            contactoQuak@mystore.cl
                        </p>

                        <p>
                            Viña del Mar, Chile
                        </p>
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
cargarNavbar();
cargarFooter();