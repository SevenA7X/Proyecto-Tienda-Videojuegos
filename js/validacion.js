const formulario = document.querySelector('#formularioContacto');


formulario.addEventListener('submit', function (event) {
    // Si el formulario no es válido (tiene campos vacíos o correos mal escritos)
    if (!formulario.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
    }

    formulario.classList.add('was-validated');
}, false);