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

var selectorBoton = document.getElementById ("botones");
var botns = selectorBoton.getElementsByClassName ("botn");

// for (var i=0; i < botns.length; i++) {
//     botns [i].addEventListener("click", funcion(){
//         var current =
//         document.getElementsByClassName ("activo");
//         current[0].className =
//         current[0].className.replace("activo", "");
//         this.className += " activo";
//     });
// }

for (var i = 0; i < botns.length; i++) {
    botns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("activo");
        if (current.length > 0) {
            current[0].className = current[0].className.replace("activo", "");
        }
        this.classList.add("activo");
    });
}