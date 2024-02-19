document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe normalmente

        const formData = new FormData(this);

        // Convertir los datos del formulario en un objeto
        const formDataObject = {};
        formData.forEach((value, key) => {
            formDataObject[key] = value;
        });

        // Guardar los datos en el almacenamiento local
        localStorage.setItem('formularioData', JSON.stringify(formDataObject));

        // Redireccionar a la página paciente.html
        window.location.href = '/pages/paciente.html';
    });
});