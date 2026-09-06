const formulario = document.querySelector('#formularioContacto');


formulario.addEventListener('submit', function (event) {
    if (!formulario.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
    }

    formulario.classList.add('was-validated');
}, false);