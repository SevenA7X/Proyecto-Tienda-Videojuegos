const juegos = [
{
    id: 1,
    consola: "Nintendo Switch 2",
    nombre: "Mario Kart World",
    descripcion: "Mario Kart World es un emocionante juego de carreras que te permite competir en pistas llenas de acción y diversión. Elige tu personaje favorito, personaliza tu vehículo y desafía a tus amigos en carreras llenas de obstáculos, power-ups y giros inesperados. Con gráficos vibrantes y una jugabilidad adictiva, Mario Kart World ofrece horas de entretenimiento para jugadores de todas las edades.",
    imagen: "https://cegames.com.co/images/product/202508140415351.png",
    stock: 10,
    precio: 94990
},
{
    id: 2,
    consola: "Nintendo Switch 2",
    nombre: "The Legend of Zelda: Breath of the Wild",
    descripcion: "Embárcate en una épica aventura en el vasto mundo de Hyrule en The Legend of Zelda: Breath of the Wild. Explora paisajes impresionantes, resuelve acertijos desafiantes y enfréntate a enemigos formidables mientras descubres los secretos de este reino mágico. Con una jugabilidad abierta y una historia cautivadora, este juego ofrece una experiencia inolvidable para los fanáticos de la saga y los nuevos jugadores por igual.",
    imagen: "https://www.nintendo.com/eu/media/images/assets/nintendo_switch_2_games/thelegendofzeldabreathofthewild_nintendoswitch2edition/1x1_NSwitch2_TLoZTBotWNSwitch2Edition_S2Bar_image950w.jpg",
    stock: 20,
    precio: 59999
},
{
    id: 3,
    consola: "PlayStation 5",
    nombre: "Grand Theft Auto V",
    descripcion: "Grand Theft Auto V es un juego de acción y aventura en mundo abierto que te sumerge en la ciudad ficticia de Los Santos. Explora un vasto entorno urbano, participa en misiones emocionantes y sumérgete en una historia llena de crimen, traición y ambición. Con gráficos impresionantes y una jugabilidad envolvente, GTA V ofrece una experiencia única para los amantes de la acción y la libertad de exploración.",
    imagen: "https://paraguayjuegosdigitales.com/wp-content/uploads/2023/11/1619629788-grand-theft-auto-5-gta-v-gta-5-ps4-647x800.jpg",
    stock: 10,
    precio: 29990
},
{
    id: 4,
    consola: "XBOX ONE",
    nombre: "Minecraft",
    descripcion: "Minecraft es un juego de construcción y supervivencia en el que puedes crear y destruir diferentes estructuras con bloques 3D. Explora un mundo generado proceduralmente, recolecta recursos, construye edificios y enfrenta criaturas peligrosas en una experiencia infinita.",
    imagen: "https://xboxweb.cz/wp-content/uploads/minecraft.jpg",
    stock: 15,
    precio: 19990
},
{
    id: 5,
    consola: "PlayStation 5",
    nombre: "Spider-Man: Miles Morales",
    descripcion: "Spider-Man: Miles Morales es un juego de acción y aventura que sigue las aventuras del joven superhéroe Miles Morales mientras lucha contra el crimen en la ciudad de Nueva York. Con habilidades únicas, un mundo abierto para explorar y una historia emocionante, este juego ofrece una experiencia envolvente para los fanáticos de Spider-Man.",
    imagen: "https://tse4.mm.bing.net/th/id/OIP.Cnr6e6y7ZCKcz2OxvrKHQAHaJm?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    stock: 8,
    precio: 49990
},
{
    id: 6,
    consola: "XBOX ONE",
    nombre: "Forza Horizon 5",
    descripcion: "Forza Horizon 5 es un juego de carreras de mundo abierto que te permite explorar un vasto y hermoso entorno mientras compites en emocionantes carreras. Con una amplia variedad de vehículos, eventos y desafíos, este juego ofrece una experiencia de conducción realista y emocionante para los amantes de la velocidad.",
    imagen: "https://tse2.mm.bing.net/th/id/OIP.GkaHXT7SxxnHswn2DZWx5wHaJb?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    stock: 12,
    precio: 69990
},
{
    id: 7,
    consola: "PlayStation 5",
    nombre: "God of War Ragnarök",
    descripcion: "Acompaña a Kratos y Atreus en un viaje mítico en busca de respuestas antes de que llegue el Ragnarök. Juntos arriesgarán todo mientras exploran los Nueve Reinos y se enfrentan a temibles enemigos de la mitología nórdica en combates fluidos y viscerales.",
    imagen: "https://placehold.co/600x900/00439c/ffffff?text=God+of+War+Ragnarok", 
    stock: 14,
    precio: 64990
},
{
    id: 8,
    consola: "Nintendo Switch 2",
    nombre: "Super Smash Bros. Ultimate",
    descripcion: "El enfrentamiento definitivo reúne a todos los luchadores de la historia de la saga. Disfruta de combates frenéticos con hasta 8 jugadores, nuevos escenarios y mecánicas ajustadas para la máxima diversión competitiva y familiar.",
    imagen: "https://placehold.co/600x900/e60012/ffffff?text=Smash+Bros+Ultimate",
    stock: 25,
    precio: 54990
},
{
    id: 9,
    consola: "XBOX ONE",
    nombre: "Halo Infinite",
    descripcion: "Cuando se pierde toda esperanza y el destino de la humanidad pende de un hilo, el Jefe Maestro está listo para enfrentarse al enemigo más despiadado. Explora la escala épica de un anillo Halo en el primer mundo abierto de la franquicia.",
    imagen: "https://placehold.co/600x900/107c10/ffffff?text=Halo+Infinite",
    stock: 18,
    precio: 39990
},
{
    id: 10,
    consola: "PlayStation 5",
    nombre: "Elden Ring",
    descripcion: "Álzate, Sinluz, y déjate guiar por la gracia para esgrimir el poder del Círculo de Elden. Explora un vasto mundo de fantasía oscura creado por Hidetaka Miyazaki y George R. R. Martin lleno de peligros, mazmorras y secretos letales.",
    imagen: "https://placehold.co/600x900/1a1a1a/d4af37?text=Elden+Ring",
    stock: 7,
    precio: 59990
},
{
    id: 11,
    consola: "XBOX ONE",
    nombre: "Red Dead Redemption 2",
    descripcion: "Una historia épica sobre la vida en el implacable corazón de Estados Unidos. Sigue a Arthur Morgan y la banda de Van der Linde mientras roban, luchan y sobreviven en su camino por el salvaje oeste a finales del siglo XIX.",
    imagen: "https://placehold.co/600x900/cc0000/ffffff?text=Red+Dead+Redemption+2",
    stock: 11,
    precio: 34990
},
{
    id: 12,
    consola: "Nintendo Switch 2",
    nombre: "Animal Crossing: New Horizons",
    descripcion: "Escapa a una isla desierta y crea tu propio paraíso. Recolecta materiales, construye tu hogar, interactúa con adorables vecinos animales y relájate en una experiencia de vida virtual a tu propio ritmo.",
    imagen: "https://placehold.co/600x900/00d2aa/ffffff?text=Animal+Crossing",
    stock: 30,
    precio: 49990
}
];

const contenedor = document.querySelector("#contenedorJuegos"); 
const cantidad = document.querySelector("#cantidadJuegos"); 
const inputBuscador = document.querySelector("#buscadorNombre");
const selectFiltro = document.querySelector("#filtroConsola");
const alertaContenedor = document.querySelector("#alertaContenedor");

function renderProductos(lista) { 
    contenedor.innerHTML = ""; 
  
    lista.forEach(juego => { 
        let colorClase = "secondary"; 
        
        if (juego.consola === "Nintendo Switch 2") {
            colorClase = "danger";  
        } else if (juego.consola === "PlayStation 5") {
            colorClase = "primary"; 
        } else if (juego.consola === "XBOX ONE") {
            colorClase = "success"; 
        }

        contenedor.innerHTML += ` 
        <div class="col-md-6 col-lg-4">
            <div class="card h-100 shadow-sm">
                <img src="${juego.imagen}" class="card-img-top" alt="${juego.nombre}">
                <div class="card-body d-flex flex-column">
                    <span class="badge bg-${colorClase} mb-2 align-self-start">
                        ${juego.consola}
                    </span>
                    <h5 class="card-title">
                        ${juego.nombre}
                    </h5>
                    <p class="card-text flex-grow-1">
                        ${juego.descripcion}
                    </p>
                    <p class="fw-bold fs-5">
                        $${juego.precio.toLocaleString("es-CL")}
                    </p>
                    <button type="button" class="btn btn-${colorClase} w-100 fw-bold mt-auto" onclick="agregarAlCarrito(${juego.id})">
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>`; 
    }); 
  
    cantidad.textContent = `${lista.length} juegos disponibles`;
} 

function agregarAlCarrito(idJuego) {
    let carritoActual = JSON.parse(localStorage.getItem("carrito")) || [];
    const juegoBuscado = juegos.find(juego => juego.id === idJuego);
    const existe = carritoActual.find(item => item.id === idJuego);
    
    if (existe) {
        existe.cantidad++;
    } else {
        carritoActual.push({ ...juegoBuscado, cantidad: 1 });
    }
    
    localStorage.setItem("carrito", JSON.stringify(carritoActual));
    
    alertaContenedor.innerHTML = `
        <div class="alert alert-success alert-dismissible fade show shadow-sm" role="alert">
            ${juegoBuscado.nombre} fue agregado al carrito.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
        </div>
    `;

    setTimeout(() => {
        const alertaActiva = document.querySelector("#alertaContenedor .alert");
        if (alertaActiva) {
            const alertaInstancia = new bootstrap.Alert(alertaActiva);
            alertaInstancia.close();
        }
    }, 3000);

    actualizarContadorCarrito();
}

function filtrarJuegos() {
    const textoBusqueda = inputBuscador.value.toLowerCase();
    const consolaSeleccionada = selectFiltro.value;

    const juegosFiltrados = juegos.filter(juego => {
        const coincideNombre = juego.nombre.toLowerCase().includes(textoBusqueda);
        const coincideConsola = consolaSeleccionada === "Todas" || juego.consola === consolaSeleccionada;
        
        return coincideNombre && coincideConsola;
    });

    renderProductos(juegosFiltrados);
}

inputBuscador.addEventListener("input", filtrarJuegos);
selectFiltro.addEventListener("change", filtrarJuegos);

renderProductos(juegos);