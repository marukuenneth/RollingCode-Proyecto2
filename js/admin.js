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


const datosLocalStorage = localStorage.getItem('nuevoRegistro');
const arrayDatos = JSON.parse(datosLocalStorage);

document.addEventListener("DOMContentLoaded", () => {
     updateUserList();
});

function updateUserList() {
    const miLista = document.getElementById('miLista');
    miLista.innerHTML = ''; // Limpiar el contenido previo del elemento

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
        
        miLista.appendChild(ulElement);
    });
}


function approveUser(userId) {
    // Simulated backend approval logic
    const userIndex = pendingUsers.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
        // Move the user to the approved list (simulated backend)
        const approvedUser = pendingUsers.splice(userIndex, 1)[0];
        // Perform actual backend operations here

        updateUserList();
    }
}

function rejectUser(userId) {
    // Simulated backend rejection logic
    const userIndex = pendingUsers.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
        // Remove the user from the pending list (simulated backend)
        const rejectedUser = pendingUsers.splice(userIndex, 1)[0];
        // Perform actual backend operations here

        updateUserList();
    }
}

// Example: Simulating user registration and adding them to the pending list
function simulateUserRegistration() {
    const newUser = { id: Date.now(), username: `user${Date.now()}` };
    pendingUsers.push(newUser);
    localStorage.setItem('pendingUsers', JSON.stringify(pendingUsers));
    updateUserList();
}