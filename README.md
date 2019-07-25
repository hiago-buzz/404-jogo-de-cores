# JOGO DAS CORES

- Este jogo foi desenvolvido com a finalidade de treinar raciocinio lógico e criação com Javascript.

## Linguagens utilizadas
- HTML
- CSS
- JAVASCRIPT

---
 
 ### Ferramentas das linguagens

 - Foi utilizado em `css` display flex e  propriedades simples de edição
 - Em `javascript`, utilizamos `FOR`, `MATH` e `FUNCTION`.

 ---

 **EX: Função Resetar Game.**

 ~~~

function resetarJogo(){
    for(let quadrado of quadrados){
        quadrado.style.backgroundColor = "unset";
    }

    resposta.innerHTML = "";
}

reset.onclick = resetarJogo;

~~~