document.addEventListener("DOMContentLoaded", () =>{
const btn = document.getElementById("verificacao");
const resultado = document.getElementById("resultado");

    btn.addEventListener ("click",()=> {
        let idade = Number(document.getElementById("idade").value);
        let cnh = Boolean(document.getElementById("cnh").checked);


    if (idade >= 18 && tem CNH) {
        resultado.textContent =  "Pode dirigir";
        resultado.className = "verde";

    }   else {
            resultado.textContent = "Não pode dirigir";
            resultado.className = "vermelho";
    }

    });
});