function mostrarMedicos() {
    var medicos = document.getElementById('columna1')
    if (medicos.style.display == 'none') {
        medicos.style.display = 'block'
    } else {
        medicos.style.display = 'none'
    }
}

function mostrarTurnos() {
    var turnos = document.getElementById('columna2')
    if (turnos.style.display == 'none') {
        turnos.style.display = 'block'
    } else {
        turnos.style.display = 'none'
    }
}

function mostrarPaginaPrincipal() {
    var paginaPrincipal = document.getElementById('columna3')
    if (paginaPrincipal.style.display == 'none') {
        paginaPrincipal.style.display = 'block'
    } else {
        paginaPrincipal.style.display = 'none'
    }
}

function mostrarAnuncios() {
    var anuncios = document.getElementById('columna4')
    if (anuncios.style.display == 'none') {
        anuncios.style.display = 'block'
    } else {
        anuncios.style.display = 'none'
    }
}





document.addEventListener("DOMContentLoaded", () => {
    updateUserList();
});

function updateUserList() {
    const miLista = document.getElementById('miLista');
    miLista.innerHTML = '';

    const datosLocalStorage = localStorage.getItem('nuevoRegistro');
    const arrayDatos = JSON.parse(datosLocalStorage) || [];

    arrayDatos.forEach(usuario => {
        const ulElement = document.createElement('ul');
        ulElement.classList.add('list-group', 'list-group-horizontal');

        for (const clave in usuario) {
            if (Object.hasOwnProperty.call(usuario, clave)) {
                const liElement = document.createElement('li');
                liElement.textContent = `${clave}: ${usuario[clave]}`;
                ulElement.appendChild(liElement);
            }
        }

        // Botón para volver a agregar al localStorage
        const buttonElement = document.createElement('button');
        buttonElement.textContent = 'Aceptar';
        buttonElement.addEventListener('click', function () {
            const usuariosAprobados = JSON.parse(localStorage.getItem('usuariosAprobados')) || [];
            usuariosAprobados.push(usuario);
            localStorage.setItem('usuariosAprobados', JSON.stringify(usuariosAprobados));
            updateUserList();
            // localStorage.removeItem('nuevoRegistro'); <<<<<<- limpiar local storage
            location.reload();
        });

        const buttonListItem = document.createElement('li');
        buttonListItem.appendChild(buttonElement);
        ulElement.appendChild(buttonListItem);

        miLista.appendChild(ulElement);

    });
    mostrarUsuariosAprobados();
}

function mostrarUsuariosAprobados() {
    const listaUsuariosAprovados = document.getElementById('listaAprobados');
    listaAprobados.innerHTML = '';

    const datosUsuariosAprobados = localStorage.getItem('usuariosAprobados');
    const arrayUsuariosAprobados = JSON.parse(datosUsuariosAprobados) || [];

    arrayUsuariosAprobados.forEach(usuario => {
        const ulElement = document.createElement('ul');
        ulElement.classList.add('list-group', 'list-group-horizontal');

        for (const clave in usuario) {
            if (Object.hasOwnProperty.call(usuario, clave)) {
                const liElement = document.createElement('li');
                liElement.textContent = `${clave}: ${usuario[clave]}`;
                ulElement.appendChild(liElement);
            }
        }

        listaUsuariosAprovados.appendChild(ulElement);
    });
}