/*
var button_delete = document.querySelectorAll(".action-button__delete");

button_delete.forEach((button) => {
    button.addEventListener('click', (event) =>{
        const line = event.target.parentNode.parentNode;
        line.classList.add("fade-out");

        setTimeout(() => {
            line.remove();
        }, 500);
    });
});*/

var table = document.querySelector("#tabela-pacientes");

table.addEventListener("click", (event) => {
    if(event.target.classList.contains("action-button__delete")){
        const line = event.target.parentNode.parentNode;
        line.classList.add("fade-out");

        setInterval(() => {
            line.remove();
        }, 500);
    }
});

/*
table_body.addEventListener('dblclick', function (event){
    const line = event.target.parentNode;
    line.classList.add("fade-out");

    setTimeout(function (){
        event.target.parentNode.remove();    
    }, 500);
});*/