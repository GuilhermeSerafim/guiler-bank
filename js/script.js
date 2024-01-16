import ehCpf from "./valida-cpf.js";

const camposDosFormularios = document.querySelectorAll("[required]");

camposDosFormularios.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
});

function verificaCampo(campo) {
    if(campo.name == "cpf" && campo.value.length >= 11) {
        console.log(campo.value)
        ehCpf(campo);
    }
}