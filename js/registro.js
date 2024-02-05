

function mostrar(seleccionado){
    if (seleccionado.value == "paciente") {
        document.getElementById('paciente').classList.remove('esconder');
        document.getElementById('medico').classList.add('esconder'); 

    }else{
        if (seleccionado.value == "medico") {
            document.getElementById('medico').classList.remove('esconder');
            document.getElementById('paciente').classList.add('esconder');
         
        }else{
            document.getElementById('paciente').classList.add('esconder');
            document.getElementById('medico').classList.add('esconder');            
        }
    }
}
