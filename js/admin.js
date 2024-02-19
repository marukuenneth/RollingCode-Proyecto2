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
    miLista.innerHTML = ''; // Limpiar el contenido previo del elemento

    const datosLocalStorage = localStorage.getItem('nuevoRegistro');
    const arrayDatos = JSON.parse(datosLocalStorage) || []; // Obtener los datos del localStorage

    arrayDatos.forEach(usuario => {
        const ulElement = document.createElement('ul');
        ulElement.classList.add('list-group', 'list-group-horizontal'); // Agregar las clases necesarias

        for (const clave in usuario) {
            if (Object.hasOwnProperty.call(usuario, clave)) {
                const liElement = document.createElement('li');
                liElement.textContent = `${clave}: ${usuario[clave]}`;
                ulElement.appendChild(liElement);
            }
        }

        // Botón para volver a agregar al localStorage
        const buttonElement = document.createElement('button');
        buttonElement.textContent = 'Reagregar';
        buttonElement.addEventListener('click', function() {
            const usuariosAprobados = JSON.parse(localStorage.getItem('usuariosAprobados')) || [];
            usuariosAprobados.push(usuario);
            localStorage.setItem('usuariosAprobados', JSON.stringify(usuariosAprobados));
            updateUserList(); // Actualizar la lista después de agregar el usuario nuevamente
            localStorage.removeItem('nuevoRegistro');
            location.reload();
        });

        const buttonListItem = document.createElement('li');
        buttonListItem.appendChild(buttonElement);
        ulElement.appendChild(buttonListItem);
        
        miLista.appendChild(ulElement);
        
    });

    // Vaciar el localStorage después de crear la lista desordenada

    // Llamar a la función para mostrar los usuarios aprobados después de actualizar la lista
    mostrarUsuariosAprobados();
}

function mostrarUsuariosAprobados() {
    const listaUsuariosAprovados = document.getElementById('listaAprovados');
    listaAprovados.innerHTML = ''; // Limpiar el contenido previo del elemento

    const datosUsuariosAprobados = localStorage.getItem('usuariosAprobados');
    const arrayUsuariosAprobados = JSON.parse(datosUsuariosAprobados) || [];

    arrayUsuariosAprobados.forEach(usuario => {
        const ulElement = document.createElement('ul');
        ulElement.classList.add('list-group', 'list-group-horizontal'); // Agregar las clases necesarias

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


// function mostrarUsuariosAprobados() {
//     const listaUsuariosAprovados = document.getElementById('listaAprovados');
//     listaAprovados.innerHTML = ''; // Limpiar el contenido previo del elemento

//     const datosUsuariosAprobados = localStorage.getItem('usuariosAprobados');
//     const arrayUsuariosAprobados = JSON.parse(datosUsuariosAprobados) || [];

//     arrayUsuariosAprobados.forEach(usuario => {
//         const ulElement = document.createElement('ul');
//         ulElement.classList.add('list-group', 'list-group-horizontal'); // Agregar las clases necesarias

//         for (const clave in usuario) {
//             if (Object.hasOwnProperty.call(usuario, clave)) {
//                 const liElement = document.createElement('li');
//                 liElement.textContent = `${clave}: ${usuario[clave]}`;
//                 ulElement.appendChild(liElement);
//             }
//         }
        
//         listaUsuariosAprovados.appendChild(ulElement);
//     });
// }



// function approveUser(userId) {
    //     // Simulated backend approval logic
    //     const userIndex = pendingUsers.findIndex(user => user.id === userId);
    //     if (userIndex !== -1) {
//         // Move the user to the approved list (simulated backend)
//         const approvedUser = pendingUsers.splice(userIndex, 1)[0];
//         // Perform actual backend operations here

//         updateUserList();
//     }
// }

// function rejectUser(userId) {
//     // Simulated backend rejection logic
//     const userIndex = pendingUsers.findIndex(user => user.id === userId);
//     if (userIndex !== -1) {
//         // Remove the user from the pending list (simulated backend)
//         const rejectedUser = pendingUsers.splice(userIndex, 1)[0];
//         // Perform actual backend operations here

//         updateUserList();
//     }
// }

// // Example: Simulating user registration and adding them to the pending list
// function simulateUserRegistration() {
//     const newUser = { id: Date.now(), username: `user${Date.now()}` };
//     pendingUsers.push(newUser);
//     localStorage.setItem('pendingUsers', JSON.stringify(pendingUsers));
//     updateUserList();
// }