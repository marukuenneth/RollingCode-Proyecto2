function mostrarGeneral() {
    let general = document.getElementById('miLista');
    let computedStyle = window.getComputedStyle(general);

    if (computedStyle.display === 'block') {
        general.style.display = 'none';
    } else {
        general.style.display = 'block';
        ocultarAprobados();
    }
}

function mostrarAprobados() {
    let aprobados = document.getElementById('listaAprobados');
    let computedStyle = window.getComputedStyle(aprobados);

    if (computedStyle.display === 'none') {
        aprobados.style.display = 'block';
        ocultarGeneral();
    } else {
        aprobados.style.display = 'none';
    }
}

function ocultarGeneral() {
    let general = document.getElementById('miLista');
    general.style.display = 'none';
}

function ocultarAprobados() {
    let aprobados = document.getElementById('listaAprobados');
    aprobados.style.display = 'none';
}



document.addEventListener("DOMContentLoaded", () => {
    updateUserList();
});

// function updateUserList() {
//     const miLista = document.getElementById('miLista');
//     miLista.innerHTML = '';

//     const datosLocalStorage = localStorage.getItem('nuevoRegistro');
//     const arrayDatos = JSON.parse(datosLocalStorage) || [];

//     arrayDatos.forEach(usuario => {
//         const ulElement = document.createElement('ul');
//         ulElement.classList.add('list-group', 'list-group-horizontal');

//         // Mostrar solo nombre, apellido y obrasocial
//         const elementosAMostrar = ['nombre', 'correo', 'registrar'];
//         elementosAMostrar.forEach(clave => {
//             const liElement = document.createElement('li');
//             liElement.textContent = `${clave.charAt(0).toUpperCase() + clave.slice(1)}: ${usuario[clave]}`;
//             ulElement.appendChild(liElement);
//         });

//         // Botón para registrar
//         const buttonElement = document.createElement('button');
//         buttonElement.textContent = 'Aceptar';
//         buttonElement.addEventListener('click', function () {
//             const usuariosAprobados = JSON.parse(localStorage.getItem('usuariosAprobados')) || [];
//             usuariosAprobados.push(usuario);
//             localStorage.setItem('usuariosAprobados', JSON.stringify(usuariosAprobados));
//             updateUserList();
//             // Puedes decidir si limpiar el localStorage o no aquí
//             // localStorage.removeItem('nuevoRegistro');
//             // location.reload();
//         });

//         const buttonListItem = document.createElement('li');
//         buttonListItem.appendChild(buttonElement);
//         ulElement.appendChild(buttonListItem);

//         miLista.appendChild(ulElement);
//     });
//     mostrarUsuariosAprobados();
// }


function updateUserList() {
    const miLista = document.getElementById('miLista');
    miLista.innerHTML = '';

    const datosLocalStorage = localStorage.getItem('nuevoRegistro');
    const arrayDatos = JSON.parse(datosLocalStorage) || [];

    const usuariosAprobados = JSON.parse(localStorage.getItem('usuariosAprobados')) || [];

    arrayDatos.forEach(usuario => {
        const ulElement = document.createElement('ul');
        ulElement.classList.add('list-group', 'list-group-horizontal');

        // Mostrar solo nombre, apellido y obrasocial
        const elementosAMostrar = ['nombre', 'apellido', 'registrar'];
        elementosAMostrar.forEach(clave => {
            const liElement = document.createElement('li');
            liElement.textContent = `${clave.charAt(0).toUpperCase() + clave.slice(1)}: ${usuario[clave]}`;
            ulElement.appendChild(liElement);
        });

        // Verificar si el usuario ya ha sido aprobado
        const usuarioAprobado = usuariosAprobados.find(aprobado => aprobado.correo === usuario.correo);

        if (usuarioAprobado) {
            const liElement = document.createElement('li');
            liElement.textContent = 'Estado: Aceptado';
            ulElement.appendChild(liElement);
        } else {
            // Botón para registrar
            const buttonElement = document.createElement('button');
            buttonElement.textContent = 'Aceptar';
            buttonElement.addEventListener('click', function () {
                usuariosAprobados.push(usuario);
                localStorage.setItem('usuariosAprobados', JSON.stringify(usuariosAprobados));
                updateUserList();
            });

            const buttonListItem = document.createElement('li');
            buttonListItem.appendChild(buttonElement);
            ulElement.appendChild(buttonListItem);
        }

        miLista.appendChild(ulElement);
        mostrarUsuariosAprobados();
    });
}


function mostrarUsuariosAprobados() {
    const listaUsuariosAprovados = document.getElementById('listaAprobados');
    listaAprobados.innerHTML = '';

    const datosUsuariosAprobados = localStorage.getItem('usuariosAprobados');
    const arrayUsuariosAprobados = JSON.parse(datosUsuariosAprobados) || [];

    arrayUsuariosAprobados.forEach(usuario => {
        const ulElement = document.createElement('ul');
        ulElement.classList.add('list-group', 'list-group-horizontal');

        const elementosAMostrar = ['nombre', 'apellido', 'registrar'];
        elementosAMostrar.forEach(clave => {
            const liElement = document.createElement('li');
            liElement.textContent = `${clave.charAt(0).toUpperCase() + clave.slice(1)}: ${usuario[clave]}`;
            ulElement.appendChild(liElement);
        });

        listaUsuariosAprovados.appendChild(ulElement);
    });
}
