export default function ehCpf(campo) {
    // Removendo caracteres especiais
    // Replace troca os caracteres do primeiro parametro pelo segundo parametro
    // Fim do script explica mais sobre regex
    const cpfConvertido = campo.value.replace(/\.|-/g, ""); 
    validaNumerosRepetidos(cpfConvertido);
}

function validaNumerosRepetidos(cpfConvertido) {
    const numerosRepetidos = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999'
    ]

    // Includes retorna false ou true se está incluido ou não
    return numerosRepetidos.includes(cpfConvertido); 
}

// /\.|-/g (regex)
// \.: Corresponde literalmente a um ponto.
// |: Funciona como um operador de alternância, indicando "OU".
// -: Corresponde literalmente a um traço.
// /g: Modificador global, que faz com que a correspondência seja feita globalmente em toda a string (não pare após encontrar a primeira correspondência).