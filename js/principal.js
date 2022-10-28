var texto = document.querySelector(".container > h1");

console.log(texto);

texto.textContent = "Aparecida nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];
    var peso = paciente.querySelector(".info-peso").textContent;
    var altura = paciente.querySelector(".info-altura").textContent;
    var tdimc = paciente.querySelector(".info-imc");

    var alturaValida = true, pesoValido = true;

    if(valida_peso(peso)){
        pesoValido = false;
        console.log("Peso inválido!");
        tdimc.textContent = "Peso inválido";
        paciente.classList.add("paciente_invalido");
    }

    if(valida_altura(altura)){
        alturaValida = false;
        console.log("Altura invalida!");
        tdimc.textContent = "Altura inválida";
        paciente.classList.add("paciente_invalido");
    }

    if(pesoValido && alturaValida){
        tdimc.textContent = calc_imc(peso, altura);
    }
}

function calc_imc(peso, altura){
    var imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function valida_peso(peso){
    return peso <= 1 || peso >= 500;
}

function valida_altura(altura) {
    return altura <= 0 || altura >= 3.00
}