const formOpenBtn = document.querySelector ("#login_open")
formulariosIngreso = document.querySelector (".formularios_ingreso")
contenedorFormularios = document.querySelector (".contenedor_formularios")
cerrarFormulario = document.querySelector (".form_close")
botonRegistro = document.querySelector ("#registrate")
// botonInicio = document.querySelector (".form_close")
ocultarPassword = document.querySelectorAll (".pw_hide")

formOpenBtn.addEventListener("click", () => formulariosIngreso.classList.add ("show"))
cerrarFormulario.addEventListener("click", () => formulariosIngreso.classList.remove ("show"))

ocultarPassword.forEach((icon) => {
    icon.addEventListener("click", () => {
        let getPWInput = icon.parentElement.querySelector("input");
        if (getPWInput.type === "password") {
            getPWInput.type = "text";
            icon.classList.replace("uil-eye-slash", "uil-eye");
        }else {
            getPWInput.type = "password";
            icon.classList.replace("uil-eye", "uil-eye-slash");
        }
    })
})