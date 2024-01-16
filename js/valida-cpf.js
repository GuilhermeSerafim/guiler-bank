export default function ehCpf(campo) {
    // Removendo caracteres especiais
    // Replace troca os caracteres do primeiro parametro pelo segundo parametro
    const cpf = campo.value.replace(/\.|-/g, ""); 
    console.log(validaNumerosRepetidos(cpf));
}

function validaNumerosRepetidos(cpf) {
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
    return numerosRepetidos.includes(cpf); 
}