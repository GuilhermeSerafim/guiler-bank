export default function ehCpf(campo) {
    // Removendo caracteres especiais
    // Replace troca os caracteres do primeiro parametro pelo segundo parametro
    // Fim do script explica mais sobre regex
    const cpfSemCaracteresEspeciais = campo.value.replace(/\.|-/g, "");
    if(validaNumerosRepetidos(cpfSemCaracteresEspeciais) 
    || validaPrimeiroDigito(cpfSemCaracteresEspeciais) 
    || validaSegundoDigito(cpfSemCaracteresEspeciais)) {
        console.log("Esse CPF não existe");
    } else {
        console.log("Esse cpf existe!")
    }

}

function validaNumerosRepetidos(cpfSemCaracteresEspeciais) {
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
    return numerosRepetidos.includes(cpfSemCaracteresEspeciais);
}

// Forma de realizar a ponderação adequada dos dígitos do CPF para calcular o dígito verificador corretamente, seguindo as regras estabelecidas pelo documento
// Transformando fórmulas matemáticas em código
function validaPrimeiroDigito(cpfSemCaracteresEspeciais) {
    // Variável para acumular o resultado das multiplicações e somas
    let soma = 0;

    // Multiplicador inicia em 10
    let multiplicador = 10;

    // Loop percorrendo os primeiros 9 dígitos do CPF
    for (let tamanho = 0; tamanho < 9; tamanho++) {
        // Cada dígito do CPF é convertido para número e multiplicado pelo multiplicador
        soma += cpfSemCaracteresEspeciais[tamanho] * multiplicador;

        // Multiplicador é decrementado a cada iteração
        multiplicador--;
    }

    // Módulo da divisão de 11 é aplicado à soma multiplicada por 10
    // A soma tem que ser igual ao decimo numero do CPF
    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11) {
        soma = 0;
    }

    // Essa linha de código está retornando true se a soma calculada for diferente do décimo dígito do CPF e false caso contrário. 
    return soma != cpfSemCaracteresEspeciais[9];
}

// Semelhante ao primeiro digito
function validaSegundoDigito(cpfSemCaracteresEspeciais) {
    let soma = 0;
    let multiplicador = 11;

    for (let tamanho = 0; tamanho < 10; tamanho++) {
        soma += cpfSemCaracteresEspeciais[tamanho] * multiplicador;
        multiplicador--;
    }

    soma = (soma * 10) % 11;

    if (soma == 10 || soma == 11) {
        soma = 0;
    }
    return soma != cpfSemCaracteresEspeciais[10];
}

// /\.|-/g (regex)
// \.: Corresponde literalmente a um ponto.
// |: Funciona como um operador de alternância, indicando "OU".
// -: Corresponde literalmente a um traço.
// /g: Modificador global, que faz com que a correspondência seja feita globalmente em toda a string (não pare após encontrar a primeira correspondência).