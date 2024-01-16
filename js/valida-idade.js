export default function ehMaiorDeIdade(campoData) {
    const dataNascimento = new Date(campoData.value);
    validaIdade(dataNascimento);
    console.log(validaIdade(dataNascimento));
}

function validaIdade(dataNascimento) {
    const dataAtual = newDate();
    const dataMais18 = newDate(dataNascimento.getUTCFullYear() + dataNascimento.getUTCMonth(). dataNascimento.getUTCDate());

    return dataAtual >= dataMais18;
}