function montaPaciente(pacienteTr){

    var tdNome = pacienteTr.getElementsByClassName("info-nome")[0]; 
    var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0]; 
    var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0];

    var paciente = { nome : tdNome.textContent, 
                        peso : tdPeso.textContent, 
                        altura : tdAltura.textContent,
                        pegaImc: function (){

                             if(this.altura != 0){
                                var imc = this.peso / (this.altura * this.altura);
                                console.log(imc); 

                                return imc;

                            }else{

                                console("Não posso dividir por zero!");
                            }

                        }  
                    };

    return paciente;
}
