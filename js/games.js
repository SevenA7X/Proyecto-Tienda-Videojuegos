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
}
]

const contenedor = document.querySelector("#contenedorJuegos"); 
const cantidad = document.querySelector("#cantidadJuegos"); 

function renderProductos(lista) { 
  contenedor.innerHTML = ""; 
  
  lista.forEach(juego => { 
    let colorClase = "secondary"; // Gris en caso de no coincidir
        
        if (juego.consola === "Nintendo Switch 2") {
            colorClase = "danger";  // Rojo
        } else if (juego.consola === "PlayStation 5") {
            colorClase = "primary"; // Azul
        } else if (juego.consola === "XBOX ONE") {
            colorClase = "success"; // Verde
        }

    contenedor.innerHTML += ` 
      <div class="col-md-6 col-lg-4">
                        <div class="card h-100 shadow-sm">
                            <img src="${juego.imagen}"
                                class="card-img-top" alt="${juego.nombre}">
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
                                <a href="#" class="btn btn-${colorClase}">
                                    Ver Juego
                                </a>
                            </div>
                        </div>
                    </div>`; 
  }); 
  
  cantidad.textContent = `${lista.length} juegos disponibles`;
} 
renderProductos(juegos);

const inputBuscador = document.querySelector("#buscadorNombre");
const selectFiltro = document.querySelector("#filtroConsola");


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