document.addEventListener('DOMContentLoaded', function () {
    const btnEditarDatos = document.getElementById('editarDatos');
    const btnGuardarCambios = document.getElementById('guardarCambios');
    const listaDatosOriginal = document.getElementById('lista-datos-original');
    const listaDatosEditable = document.getElementById('lista-datos-editable');
    const inputs = {
        direccion: document.getElementById('input-direccion'),
        telefono: document.getElementById('input-telefono'),
        ocupacion: document.getElementById('input-ocupacion'),
        registro: document.getElementById('input-registro'),
        nacimiento: document.getElementById('input-nacimiento'),
        obraSocial: document.getElementById('input-obraSocial'),
    };

    // Mostrar campos de entrada al hacer clic en "Editar Datos"
    btnEditarDatos.addEventListener('click', function () {
        listaDatosOriginal.style.display = 'none';
        listaDatosEditable.style.display = 'block';
        btnEditarDatos.style.display = 'none';
        btnGuardarCambios.style.display = 'block';

        // Rellenar campos de entrada con los datos actuales
        for (const key in inputs) {
            if (inputs.hasOwnProperty(key)) {
                inputs[key].value = document.getElementById(key).textContent;
            }
        }
    });

    // Guardar cambios al hacer clic en "Guardar Cambios"
    btnGuardarCambios.addEventListener('click', function () {
        // Obtener los valores de los campos de entrada
        const datosActualizados = {};
        for (const key in inputs) {
            if (inputs.hasOwnProperty(key)) {
                datosActualizados[key] = inputs[key].value;
            }
        }

        // Guardar los datos actualizados en el almacenamiento local
        localStorage.setItem('datosUsuario', JSON.stringify(datosActualizados));

        // Actualizar los elementos de la lista con los datos actualizados
        for (const key in datosActualizados) {
            if (datosActualizados.hasOwnProperty(key)) {
                document.getElementById(key).textContent = datosActualizados[key];
            }
        }

        // Mostrar elementos de lista y ocultar campos de entrada
        listaDatosOriginal.style.display = 'grid';
        listaDatosEditable.style.display = 'none';
        btnEditarDatos.style.display = 'block';
        btnGuardarCambios.style.display = 'none';

        // Restaurar la visualización de listaDatosOriginal a una cuadrícula de tres columnas
        listaDatosOriginal.style.gridTemplateColumns = 'repeat(3, 1fr)';
    });

    // Mostrar los datos guardados al cargar la página
    const datosGuardados = JSON.parse(localStorage.getItem('datosUsuario'));
    if (datosGuardados) {
        for (const key in datosGuardados) {
            if (datosGuardados.hasOwnProperty(key)) {
                document.getElementById(key).textContent = datosGuardados[key];
            }
        }
    }
});





/* DATOS TURNOS */


// Obtener el elemento del resumen del turno
document.addEventListener('DOMContentLoaded', function () {
    const resumenTurno = document.getElementById('resumen-turno');
    const fechaActual = new Date().toLocaleDateString();

    // Obtener los datos del formulario guardados en el almacenamiento local
    const formDataString = localStorage.getItem('formularioData');
    if (formDataString) {
        const formData = JSON.parse(formDataString);

        // Mostrar la fecha del turno
        document.getElementById('fecha-turno-resumen').textContent = fechaActual;

        // Mostrar la especialidad del turno
        document.getElementById('especialidad-turno-resumen').textContent = formData['especialidad'];
    }
});



// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function () {
    // Obtiene los datos del formulario almacenados en el localStorage
    const formDataString = localStorage.getItem('formularioData');

    // Verifica si hay datos almacenados en el localStorage
    if (formDataString) {
        // Si hay datos almacenados, los convierte de cadena JSON a un objeto JavaScript
        const formData = JSON.parse(formDataString);

        // Obtiene el elemento HTML donde se insertarán los datos del formulario
        const formDataBody = document.getElementById('turnos');

        // Itera sobre las claves del objeto formData
        for (const key in formData) {
            // Verifica que la clave sea propia del objeto (no heredada)
            if (formData.hasOwnProperty(key)) {
                // Crea un nuevo elemento de fila de tabla (<tr>)
                const row = document.createElement('tr');
                // Establece el contenido HTML de la fila con la clave y su valor correspondiente
                row.innerHTML = `<td>${key}</td><td>${formData[key]}</td>`;
                // Agrega la fila creada al cuerpo de la tabla
                formDataBody.appendChild(row);
            }
        }
    }

    // Obtener el modal
    const modal = document.getElementById("detalleTurno");

    // Obtener el botón que abre el modal
    const btnAbrirModal = document.getElementById("verDetalle");

    // Obtener el elemento <span> que cierra el modal
    const spanCerrarModal = document.getElementsByClassName("close")[0];

    // Cuando el usuario haga clic en el botón, abrir el modal
    btnAbrirModal.onclick = function () {
        modal.style.display = "block";
    }

    // Cuando el usuario haga clic en <span> (x), cerrar el modal
    spanCerrarModal.onclick = function () {
        modal.style.display = "none";
    }

    // Cuando el usuario haga clic fuera del modal, cerrarlo
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Obtener el botón para eliminar los datos del formulario
    const btnEliminarDatos = document.getElementById('eliminarDatos');

    // Manejar el evento click del botón para eliminar los datos
    btnEliminarDatos.addEventListener('click', function () {
        eliminarDatosFormulario();
    });

    // Mostrar el contenedor de turnos solicitados o el mensaje de "No ha solicitado turno"
    mostrarContenedorTurnos();

});

function mostrarContenedorTurnos() {
    // Obtener el contenedor de turnos solicitados y el mensaje de "No ha solicitado turno"
    const contenedorTurnos = document.querySelector('.perfil-usuario-history');
    const mensajeNoTurno = document.getElementById('mensaje-no-turno');

    // Obtener el formulario guardado en el almacenamiento local
    const formDataString = localStorage.getItem('formularioData');
    if (formDataString) {
        // Si hay datos en el formulario, mostrar el contenedor de turnos solicitados y ocultar el mensaje
        contenedorTurnos.style.display = 'block';
        mensajeNoTurno.style.display = 'none';
    } else {
        // Si no hay datos en el formulario, mostrar el mensaje y ocultar el contenedor de turnos solicitados
        contenedorTurnos.style.display = 'none';
        mensajeNoTurno.style.display = 'block';
    }
}

function eliminarDatosFormulario() {
    // Eliminar los datos del formulario del almacenamiento local
    localStorage.removeItem('formularioData');

    // Ocultar el contenedor de turnos solicitados
    const contenedorTurnos = document.querySelector('.perfil-usuario-history');
    contenedorTurnos.style.display = 'none';

    // Mostrar el mensaje de "No ha solicitado ningún turno"
    const mensajeNoTurno = document.getElementById('mensaje-no-turno');
    mensajeNoTurno.style.display = 'block';
}