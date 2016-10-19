function calculaTodosImcs(){

    var trsPacientes = document.getElementsByClassName("paciente");

    percorreArray(trsPacientes, function (pacienteTr){
        
        var paciente =  montaPaciente(pacienteTr);

        var tdImc = pacienteTr.getElementsByClassName("info-imc")[0]; 
        tdImc.textContent = paciente.pegaImc();

    });

}

var botao = document.getElementById("calcula-imcs");
//botao.onclick = calculaTodosImcs; 
botao.addEventListener("click", calculaTodosImcs);
botao.addEventListener("click", function(){
    console.log("Executando uma segunda função!");
})




