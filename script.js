let quadrados = document.querySelectorAll ("div");
let resposta = document.querySelector ("h2");
let reset = document.querySelector("button");


let cores =["red", "blue", "yellow"];

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

        for (let quadrado of quadrados){
            quadrado.onclick = null;
            
            setInterval (() => {
                quadrado.classList.add ("girarQuadrado");

           },1000);
     
        }
}

}

function resetarJogo(){
    for(let quadrado of quadrados){
        quadrado.style.backgroundColor = "unset";
    }

    resposta.innerHTML = "";
}

reset.onclick = resetarJogo;