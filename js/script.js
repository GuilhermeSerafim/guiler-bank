import ehCpf from "./valida-cpf.js";
import ehMaiorDeIdade from "./valida-idade.js";

const camposDosFormularios = document.querySelectorAll("[required]");
const form = document.querySelector("[data-formulario]");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Extraindo valores dos campos
    const listaResposta = {
        "nome": e.target.elements["nome"].value,
        "email": e.target.elements["email"].value,
        "cpf": e.target.elements["cpf"].value,
        "aniversario": e.target.elements["aniversario"].value
    }

    // Convertendo objeto em string com a api JSON e enviando o corpo para o armazenamento local
    localStorage.setItem("cadastro", JSON.stringify(listaResposta));

    window.location.href("./abrir-conta-form-2.html");
})

const tiposDeErros = [
    'valueMissing', // Campo obrigatório vazio.
    'typeMismatch', // Valor não corresponde ao tipo esperado.
    'patternMismatch', // Valor não corresponde ao padrão especificado.
    'tooShort', // Valor é muito curto com base no comprimento mínimo.
    'customError' // Erro personalizado definido por script.
]

const mensagensDeErro = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

camposDosFormularios.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", (evento) => evento.preventDefault())
});

function verificaCampo(campo) {
    let exibicaoMensagem = "";
    // Para limpar mensagens de erros
    // campo.setCustomValidity(""); essa linha é desnecessaria, pelo o que eu analisei, por que no final do código da função ja limpamos se não o campo for válido (mas se caso perceber algo tiro o comentario)

    if (campo.name == "cpf" && campo.value.length >= 11) {
        ehCpf(campo);
    }

    if (campo.name == "aniversario" && campo.value != '') {
        ehMaiorDeIdade(campo);
    }

    tiposDeErros.forEach(erro => {
        if (campo.validity[erro]) { // Se algum erro está do nosso array de erros existe dentro do validity (que tem os mesmos nomes)
            exibicaoMensagem = mensagensDeErro[campo.name][erro]; // Destrinchando até conseguir o erro respectivo do campo
            // Para melhor entendimento do destrinchamento
            console.log(mensagensDeErro) // Todas as chaves que possuem mensagens de erros
            console.log(mensagensDeErro[campo.name]) // Todos os valores do parametroDaFunção.name (nome, ou email, etc) atendido, sendo eles, nomes e as mensagens dos erros
            console.log(erro); // Nome do erro que passou na condição
            console.log(exibicaoMensagem); // Mensagem de erro do respectivo campo que passou na condição
        }
    })
    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro'); // Para pegar o span do respectivo campo do parametro da nossa função
    const validadorDeInput = campo.checkValidity(); // Checando se está valido

    // Exibir e parar de exibir o erro
    if (!validadorDeInput) {
        mensagemErro.textContent = exibicaoMensagem;
    } else {
        mensagemErro.textContent = "";
    }
}