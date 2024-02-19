
// CODIGO DE ANIMACIONES -------------------------------------
// let tipoRegistro = document.getElementById("registrar").value;
// console.log(tipoRegistro);


const numeroDeRegistro = 0;
let pacientesRegistrados = [];
let medicosRegistrados = [];
let administradoresRegistrados = [];

let tipoRegistro = '';

let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let direccion = document.getElementById('direccion');
let telefono = document.getElementById('telefono');
let provinicia = document.getElementById('provincia');
let nacimiento = document.getElementById('nacimiento');
let obrasocial = document.getElementById('obrasocial');
let ocupacion = document.getElementById('ocupacion');
let matricula = document.getElementById('matricula');
let especialidad = document.getElementById('especialidad');
let correo = document.getElementById('correo');
let contraseña = document.getElementById('contraseña');
let contraseña2 = document.getElementById('contraseña2');

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    alert(JSON.stringify(data));
    localStorage.setItem('paciente', JSON.stringify(data));
})

function mostrar(seleccionado) {
    if (seleccionado.value == "paciente") {

        document.getElementById('paciente').classList.remove('esconder'); // se muestra div con inputs para paciente
        document.getElementById('medico').classList.add('esconder'); // se esconde div con inputs para medico porque se registrará un paciente

        // ----- elimino los atributos required en los select e inputs para medico, porque se registrara un paciente
        document.getElementById("especialidad").removeAttribute("required");
        document.getElementById("matricula").removeAttribute("required");

        // ----- agrego los atributos required en los select e inputs para paciente, porque se registrara un paciente
        document.getElementById("ocupacion").setAttribute("required", "");
        document.getElementById("obrasocial").setAttribute("required", "");



    } else {
        if (seleccionado.value == "medico") {
            //
            document.getElementById('medico').classList.remove('esconder'); // se muestra div con inputs para medico
            document.getElementById('paciente').classList.add('esconder'); // se esconde div con inputs para paciente porque se registrará un medico

            // ----- elimino los atributos required en los select e inputs para paciente, porque se registrara un medico
            document.getElementById("ocupacion").removeAttribute("required");
            document.getElementById("obrasocial").removeAttribute("required");


            // ----- agrego los atributos required en los select e inputs para medico, porque se registrara un medico
            document.getElementById("especialidad").setAttribute("required", "");
            document.getElementById("matricula").setAttribute("required", "");


        } else {
            //escondo los div de paciente y medico porque no se usaran
            document.getElementById('paciente').classList.add('esconder');
            document.getElementById('medico').classList.add('esconder');

            // ----- si es otra opcion que no sea paciente o medico (administrador) se quitan los atributos required para pacientes y medicos porque no se usaran
            document.getElementById("ocupacion").removeAttribute("required");
            document.getElementById("obrasocial").removeAttribute("required");
            document.getElementById("matricula").removeAttribute("required");
            document.getElementById("especialidad").removeAttribute("required");
            document.getElementById("obrasocial").setAttribute("disabled", "");
            document.getElementById("matricula").setAttribute("disabled", "");
            document.getElementById("ocupacion").setAttribute("disabled", "");
            document.getElementById("especialidad").setAttribute("disabled", "");
        }
    }
    tipoRegistro = seleccionado.value;
    console.log(tipoRegistro);
}
function mostrarError() {
    const mensajeError = document.getElementById('mensajeError');
    if (mensajeError) {
        mensajeError.style.display = 'block';
    }
}

function validarNombre() {
    const nombreInput = document.getElementById('nombre');
    const nombreValue = nombreInput.value.trim();

    // Expresión regular para validar caracteres alfabéticos
    const regexSoloLetras = /^[a-zA-Z\s]*$/;

    // Verificar si el valor del nombre coincide con la expresión regular
    if (!regexSoloLetras.test(nombreValue)) {
        alert("Ingrese un nombre valido.");
        // Limpiar el campo de nombre si se ingresaron caracteres no válidos
        nombreInput.value = "";
    }
}
function validarApellido() {
    const apellidoInput = document.getElementById('apellido');
    const apellidoValue = apellidoInput.value.trim();

    // Expresión regular para validar caracteres alfabéticos
    const regexSoloLetras = /^[a-zA-Z\s]*$/;

    // Verificar si el valor del nombre coincide con la expresión regular
    if (!regexSoloLetras.test(apellidoValue)) {
        alert("Ingrese un apellido valido.");
        // Limpiar el campo de nombre si se ingresaron caracteres no válidos
        apellidoInput.value = "";
    }
}

function validarTelefono() {
    const telefonoInput = document.getElementById('telefono');
    const telefonoValue = telefonoInput.value.trim();
    
    // Expresión regular para validar caracteres alfabéticos
    const regexNumeros = /^\d{7,14}$/;

    // Verificar si el valor del nombre coincide con la expresión regular
    if (!regexNumeros.test(telefonoValue)) {
        alert("Ingrese un teléfono válido.");
        // Limpiar el campo de nombre si se ingresaron caracteres no válidos
        telefonoValue.value = "";
    }
}
function validarNacimiento() {
    const nacimientoInput = document.getElementById('nacimiento');
    const nacimientoValue = nacimientoInput.value.trim();
    // alert(nacimientoValue);
    // Crear un objeto Date con la fecha de nacimiento ingresada
    var fecha = new Date(nacimientoValue);
    var fechaActual = new Date();
    
    // Verificar si la fecha es válida
    if (isNaN(fecha.getTime())) {
        // Mostrar un mensaje de error si la fecha no es válida
        alert('Por favor, ingresa una fecha de nacimiento válida.');
        nacimientoValue.value = "";
    }
    
    // Verificar si la fecha de nacimiento es mayor que la fecha actual
    if (fecha >= fechaActual) {
        alert('La fecha de nacimiento debe ser anterior a la fecha actual.');
        nacimientoValue.value = "";
    }
    if (fecha <= 1900) {
        alert('Ingresa una fecha de nacimiento válida.');
        nacimientoValue.value = "";
    }
    
}
function validarMatricula() {
    const matriculaInput = document.getElementById('matricula');
    const matriculaValue = matriculaInput.value.trim();
    // Expresión regular para validar caracteres alfabéticos
    const regexMatricula = /^.{4,12}$/;
    // Verificar si el valor del nombre coincide con la expresión regular
    if (!regexSoloLetras.test(regexMatricula)) {
        alert("Ingrese una matricula válida.");
        // Limpiar el campo de nombre si se ingresaron caracteres no válidos
        matriculaInput.value = "";
    }
}
function validarCorreo() {
    // Obtener el valor del correo electrónico ingresado por el usuario
    let correo = document.getElementById('correo').value;
    let correoInput = document.getElementById('correo');
    // Expresión regular para validar un correo electrónico
    let expresionRegularCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Verificar si el correo electrónico cumple con la expresión regular
    if (!expresionRegularCorreo.test(correo)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        correoInput.value="";
    }
}

const ocultarPassword = document.querySelectorAll(".pw_hide");
ocultarPassword.forEach((icon) => {
    icon.addEventListener("click", () => {
        let getPWInput = icon.parentElement.querySelector("input");
            if (getPWInput.type === "password") {
                getPWInput.type = "text";
                icon.classList.replace("uil-eye-slash", "uil-eye");
            } else {
                getPWInput.type = "password";
                icon.classList.replace("uil-eye", "uil-eye-slash");
            }
        })
    })

    function validarContraseña() {
        // Obtener el valor de la contraseña ingresada por el usuario
        let contraseñaInput = document.getElementById('contraseña');
        // Expresión regular para validar la contraseña
        let expresionRegularContrasena = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
        contraseñaInput.type="text";
        
        // Verificar si la contraseña cumple con la expresión regular
        if (expresionRegularContrasena.test(contraseñaInput)) {
          alert('La contraseña es válida.');
        } else {
          alert('La contraseña debe tener al menos 8 caracteres, incluyendo al menos una letra mayúscula, una letra minúscula, un número y un carácter especial.');
        }
    }
    function validarContraseña2() {

    }
