let quadrados = document.querySelectorAll ("div");
let resposta = document.querySelector ("h2");

let cores =["red", "blue", "yellow", "Magenta", "aqua", "black", "green"];

function gerarCor(){

    let aleatorio = Math.floor (Math.random()* cores.length);
   
    this.style.backgroundColor = cores[aleatorio];

    verificador();

}

for (let quadrado of quadrados){

    quadrado.onclick = gerarCor;

}

function verificador (){

    if(quadrados[0].style.backgroundColor == quadrados[1].style.backgroundColor
    &&   quadrados[1].style.backgroundColor == quadrados[2].style.backgroundColor && 
    quadrados[2].style.backgroundColor == quadrados[3].style.backgroundColor){

        resposta.innerHTML = "você Venceu!!!"
        }
}


