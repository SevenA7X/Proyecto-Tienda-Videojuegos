// CAPTURA DEL FORMULARIO DE LOGIN
const formularioLogin = document.querySelector("#formularioContacto");

if (formularioLogin) {

    // ESCUCHA DEL EVENTO DE ENVÍO
    formularioLogin.addEventListener("submit", function(evento) {
        evento.preventDefault();
        evento.stopPropagation();

        formularioLogin.classList.add('was-validated');

        // VALIDACIÓN NATIVA Y LÓGICA DE AUTENTICACIÓN
        if (formularioLogin.checkValidity()) {
            const correo = document.querySelector("#correo").value;
            const password = document.querySelector("#password").value;
            
            // ESTA ES EL CORREO Y CONTRASEÑA DE PRUEBA PARA EL ADMINISTRADOR
            if (correo === "ejemplo@correo.cl" && password === "123456") {
                
                const usuario = {
                    correo: correo,
                    rol: "Administrador"
                };
                
                localStorage.setItem("sesionActiva", JSON.stringify(usuario));
                
                window.location.href = "admin.html";
            } else {
                alert("Las credenciales son incorrectas, inténtalo de nuevo.");
            }
        }
    });
}