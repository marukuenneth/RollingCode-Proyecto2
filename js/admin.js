function mostrarMedicos() {
console.log("string")
    var medicos = document.getElementById('columna1')
console.log(medicos)
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
// Aceptar o rechazar usuarios

// Simulated backend data using localStorage
let pendingUsers = JSON.parse(localStorage.getItem('pendingUsers')) || [];

document.addEventListener("DOMContentLoaded", () => {
    updateUserList();
});

function updateUserList() {
    const userList = document.getElementById("users");
    userList.innerHTML = "";

    pendingUsers.forEach(user => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${user.username}</span>
            <button onclick="approveUser(${user.id})">Approve</button>
            <button onclick="rejectUser(${user.id})">Reject</button>
        `;
        userList.appendChild(listItem);
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

