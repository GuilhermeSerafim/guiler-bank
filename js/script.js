const camposDosFormularios = document.querySelectorAll("[required]");

camposDosFormularios.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
});

function verificaCampo(campo) {
    console.log(campo);
}