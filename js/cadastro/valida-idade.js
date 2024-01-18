export default function ehMaiorDeIdade(campoData) {
    const dataNascimento = new Date(campoData.value);
    console.log(dataNascimento)
    if (!validaIdade(dataNascimento)) {
        // O custom error vai ser disparado
        campoData.setCustomValidity("O usuário não é maior de idade");
    }
}

function validaIdade(dataNascimento) {
    const dataAtual = new Date();
    // Este objeto Date representa a data exatamente 18 anos após a data de nascimento original (dataNascimento).
    const dataDeNascimentoMais18 = new Date(dataNascimento.getUTCFullYear() + 18, dataNascimento.getUTCMonth(), dataNascimento.getUTCDate());
    return dataAtual >= dataDeNascimentoMais18;
}