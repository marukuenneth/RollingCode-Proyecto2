document.addEventListener("DOMContentLoaded", function() {
    const formOpenBtn = document.querySelector("#login_open");
    const formOpenBtn2 = document.querySelector("#login_open2");
    const formulariosIngreso = document.querySelector(".formularios_ingreso");
    const contenedorFormularios = document.querySelector(".contenedor_formularios");
    const cerrarFormulario = document.querySelector(".form_close");
    const botonRegistro = document.querySelector("#registrate");
    const ocultarPassword = document.querySelectorAll(".pw_hide");
    const formulario = document.getElementById('loginForm');
    const botonesRol = document.querySelectorAll('.btn-tipo-ingreso .botn');

    formOpenBtn.addEventListener("click", () => formulariosIngreso.classList.add("show"));
    cerrarFormulario.addEventListener("click", () => formulariosIngreso.classList.remove("show"));
    formOpenBtn2.addEventListener("click", () => formulariosIngreso.classList.add("show"));

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

    botonesRol.forEach(function(boton) {
        boton.addEventListener('click', function() {
            botonesRol.forEach(function(btn) {
                btn.classList.remove('activo');
            });
            boton.classList.add('activo');
        });
    });

    class Usuario {
        constructor(nombre, password, rol) {
            this.nombre = nombre;
            this.password = password;
            this.rol = rol;
        }
    }

    const usuario1 = new Usuario('eric', 'eric', 'paciente');
    const usuario2 = new Usuario('pipo', 'pipo', 'admin');
    const baseDatosUsuarios = [usuario1, usuario2];

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const nombreUsuarioIngresado = document.getElementById('nombreUsuario').value;
        const contraseñaIngresada = document.getElementById('contraseña').value;
        const rolSeleccionado = document.querySelector('.btn-tipo-ingreso .botn.activo').getAttribute('data-rol');

        let usuarioValido = baseDatosUsuarios.find(usuario => 
            usuario.nombre === nombreUsuarioIngresado && 
            usuario.password === contraseñaIngresada && 
            usuario.rol === rolSeleccionado);

            if (usuarioValido) {
                console.log('OK');
            
                switch (rolSeleccionado) {
                    case 'paciente':
                        window.location.href = "pages/paciente.html";
                        break;
                    case 'doctor':
                        window.location.href = "welcome_doctor.html";
                        break;
                    case 'admin':
                        window.location.href = "welcome_admin.html";
                        break;
                    default:
                        mostrarError();
                        break;
                }
            
                localStorage.setItem('auth', true);
            } else {
                console.log('FAIL');
                mostrarError();
            }
            
            function mostrarError() {
                const mensajeError = document.getElementById('mensajeError');
                if (mensajeError) {
                    mensajeError.style.display = 'block';
                }
            }
            
    });
});
