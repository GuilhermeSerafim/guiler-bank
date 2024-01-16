export default function ehCpf(campo) {
    // Removendo caracteres especiais
    const cpf = campo.value.replace(/\.|-/g, "");
    console.log(cpf);
}