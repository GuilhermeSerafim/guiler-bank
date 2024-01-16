export default function ehMaiorDeIdade(campoData) {
    const dataNascimento = new Date(campoData.value);
    validaIdade(dataNascimento);
}

function validaIdade(dataNascimento) {
    const dataAtual = new Date();
    const dataMais18 = new Date(dataNascimento.getUTCFullYear() + 18, dataNascimento.getUTCMonth(), dataNascimento.getUTCDate());
    return dataAtual >= dataMais18;
}