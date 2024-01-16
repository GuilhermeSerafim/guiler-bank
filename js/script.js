import ehCpf from "./valida-cpf.js";
import ehMaiorDeIdade from "./valida-idade.js";

const camposDosFormularios = document.querySelectorAll("[required]");

camposDosFormularios.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
});

function verificaCampo(campo) {
    if(campo.name == "cpf" && campo.value.length >= 11) {
        console.log(campo.value)
        ehCpf(campo);
    }
    
    if(campo.name == "aniversario" && campo.value != '') {
        ehMaiorDeIdade(campo);
    }
}