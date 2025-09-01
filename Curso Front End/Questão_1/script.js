document.addEventListener("DOMContentLoaded", () =>{
let btn = document.getElementById("botao");
const resultado = document.getElementById("resultado");

    btn.addEventListener ("click",()=> {
        let palavra = String(document.getElementById("string").value);
        let tamanho = palavra.length;
        
        resultado.innerHTML="";
        
        for(let i = 0; i < tamanho; i++){

        resultado.innerHTML += palavra.charAt(i)+ "<br>";
        console.log(palavra.charAt(i));
        }
        });
});