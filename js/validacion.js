const formularioLogin = document.querySelector("#formularioContacto");

if (formularioLogin) {
    formularioLogin.addEventListener("submit", function(evento) {
        // Detenemos el envío tradicional del formulario para procesarlo con JavaScript
        evento.preventDefault();
        evento.stopPropagation();

        // Activamos las validaciones visuales rojas/verdes de Bootstrap
        formularioLogin.classList.add('was-validated');

        // Si los campos requeridos están llenos (checkValidity es true)
        if (formularioLogin.checkValidity()) {
            const correo = document.querySelector("#correo").value;
            const password = document.querySelector("#password").value;

            // Validamos las credenciales maestras de tu mockup
            if (correo === "ejemplo@correo.cl" && password === "123456") {
                
                // Creamos el objeto del usuario con el rol de Administrador
                const usuario = {
                    correo: correo,
                    rol: "Administrador"
                };
                
                // Guardamos la sesión en el almacenamiento local para que admin.html la lea
                localStorage.setItem("sesionActiva", JSON.stringify(usuario));
                
                // Abrimos la puerta al panel
                window.location.href = "admin.html";
            } else {
                // Si alguien intenta adivinar tus datos, lo detendremos aquí
                alert("Las credenciales son incorrectas, inténtalo de nuevo.");
            }
        }
    });
}