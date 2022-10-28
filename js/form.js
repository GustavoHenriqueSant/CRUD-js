var button_add_paciente = document.querySelector("#adicionar-paciente");

button_add_paciente.addEventListener('click', function (event){
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var newtr = document.createElement('tr');
    var bodyTable = document.querySelector('#tabela-pacientes');

    var paciente = create_paciente(form);
    var erros_list = document.querySelector(".form-adiciona__erros");
    var erros = valida_paciente(paciente, erros_list);

    if(erros.length == 0){
        newtr.appendChild(create_td(paciente.nome, "info-nome"));
        newtr.appendChild(create_td(paciente.peso, "info-peso"));
        newtr.appendChild(create_td(paciente.altura, "info-altura"));
        newtr.appendChild(create_td(paciente.gordura, "info-gordura"));
        newtr.appendChild(create_td(calc_imc(paciente.peso, paciente.altura), "info-imc"));
        newtr.appendChild(create_td_buttons());

        bodyTable.appendChild(newtr);
    } else {
        erros.forEach(function (erro){
            var newli = document.createElement('li');
            newli.textContent = erro;
            erros_list.appendChild(newli);
        });
    }

    form.reset();
});

function create_td(dado, classe){
    var newtd = document.createElement('td');
    newtd.classList.add(classe);
    newtd.textContent = dado;

    return newtd;
}

function create_paciente(form){
    return {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value
    }
}

function valida_paciente(paciente, erros_list){
    var erros = [];
    erros_list.innerHTML = "";

    if(paciente.nome.length == 0) erros.push("O campo nome está em branco");
    if(valida_peso(paciente.peso)) erros.push("Peso inválido");
    if(valida_altura(paciente.altura)) erros.push("Altura inválida");
    if(paciente.gordura.length == 0) erros.push("O campo gordura está em branco");

    return erros;
}

function create_td_buttons(){
    var new_td = document.createElement("td");
    new_td.classList.add("tabela-pacientes__action-button");
    var new_button_delete = document.createElement("button");
    new_button_delete.textContent = "Deletar";
    new_button_delete.classList.add("action-button__delete");
    var new_button_atualizar = document.createElement("button");
    new_button_atualizar.textContent = "Atualizar";
    new_button_atualizar.classList.add("action-button__att");

    new_td.appendChild(new_button_delete);
    new_td.appendChild(new_button_atualizar);

    return new_td;
}