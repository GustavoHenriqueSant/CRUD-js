var table = document.querySelector("#tabela-pacientes");

table.addEventListener('click', (event) => {
    if(event.target.classList.contains("action-button__att")){
        var line = event.target.parentNode.parentNode;
        var td_name = line.querySelector(".info-nome");
        td_name.textContent = "";
        var td_peso = line.querySelector(".info-peso");
        td_peso.textContent = "";
        var td_altura = line.querySelector(".info-altura");
        td_altura.textContent = "";
        var td_gordura = line.querySelector(".info-gordura");
        td_gordura.textContent = "";
        var td_imc = line.querySelector(".info-imc");

        create_inputs_in_table(td_name, "name");
        create_inputs_in_table(td_peso, "peso");
        create_inputs_in_table(td_altura, "altura");
        create_inputs_in_table(td_gordura, "gordura");

        var button_att = event.target;
        button_att.textContent = "Confirmar";
        button_att.classList.replace("action-button__att", "action-button__att-confirm");

        button_att.addEventListener('click', () => {
            var erros_list = document.querySelector(".errors-list-table");
            var paciente = create_paciente(line);
            console.log(paciente);
            console.log(erros_list);
            var erros = valida_paciente(paciente, erros_list);
            if(erros.length == 0){
                td_name.textContent = paciente.nome;
                td_peso.textContent = paciente.peso;
                td_altura.textContent = paciente.altura;
                td_gordura.textContent = paciente.gordura;
                td_imc.textContent = calc_imc(td_peso.textContent, td_altura.textContent);

                button_att.textContent = "Atualizar";
                setInterval(() => {
                    button_att.classList.replace("action-button__att-confirm", "action-button__att");
                }, 500);
                //button_att.classList.replace("action-button__att-confirm", "action-button__att");
            } else {
                erros.forEach((erro) => {
                    var new_li = document.createElement('li');
                    new_li.textContent = erro;
                    erros_list.appendChild(new_li);
                })
            }
        })
    }
});

function create_inputs_in_table(father, classe){
    var input = document.createElement("input");
    input.classList.add("input-in-td");
    input.classList.add(classe);
    father.appendChild(input);
}

function create_paciente(line){
    return {
        nome: line.querySelector(".name").value,
        peso: line.querySelector(".peso").value,
        altura: line.querySelector(".altura").value,
        gordura: line.querySelector(".gordura").value
    }
}
