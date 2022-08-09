
var cont  = 0;

var contador = document.getElementById("contador"); 

function incrementar(){
    cont++;
    contador.innerHTML = cont;
    cont;
}


function decrementar(){
    cont--;
    contador.innerHTML = cont;
    cont;
}


function reset(){
    cont = 0;
    contador.innerHTML = cont;
    cont;
}
