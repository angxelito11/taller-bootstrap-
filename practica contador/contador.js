const contadorMostrar = document.getElementById("numero");
const sumar = document.getElementById("mas");
const restar = document.getElementById("menos");
const reiniciar =document.getElementById("reiniciar")

let numero = 0;

function actualizacionContador(){
    contadorMostrar.textContent = numero
}

sumar.addEventListener("click",function(){
    numero++;
    actualizacionContador
});

restar.addEventListener("click",function(){
    if(numero > 0){
        numero--;
        actualizacionContador();
    }
});

actualizacionContador();
