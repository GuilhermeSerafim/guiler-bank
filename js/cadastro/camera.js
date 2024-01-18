const bTIniciarCamera = document.querySelector("[data-video-botao]");
const campoDeExibicaoCamera = document.querySelector("[data-camera]");
const iframeVideo = document.querySelector("[data-video]");
const btTirarFoto = document.querySelector("[data-tirar-foto]");
const foto = document.querySelector("[data-video-canvas]");
const mensagemDeCapturaConcluida = document.querySelector("[data-mensagem]");
const btEnviarFoto = document.querySelector("[data-enviar]");

let imagemURL = "";

// Funcionalidade para iniciar a câmera
bTIniciarCamera.addEventListener("click", async function () {
    // Retorna um objeto MediaStream 
    const iniciarVideo = await navigator.mediaDevices // Pede para o navegador iniciar a câmera
        .getUserMedia({ video: true, audio: false }); // Solicitou somente o vídeo, não o aúdio (getUserMedia retorna uma promisse)

    // Para remover o botão da acmera, e exibir o campo da camera
    bTIniciarCamera.style.display = "none";
    campoDeExibicaoCamera.style.display = "block";

    // Associando o objeto de midia ao elemento html para exibir em nossa página
    iframeVideo.srcObject = iniciarVideo;
});

// Funcionalidade para tirar foto
btTirarFoto.addEventListener("click", () => {
    // Captura a imagem do vídeo e a desenha no elemento canvas chamado 'foto'
    foto.getContext('2d').drawImage(iframeVideo, 0, 0, foto.width, foto.height);

    // Converte a imagem do canvas para um formato de URL base64 (jpeg)
    imagemURL = foto.toDataURL("image/jpeg");

    // Esconde o campo de exibição da camera e exibi a mensagem de captura concluída
    campoDeExibicaoCamera.style.display = "none";
    mensagemDeCapturaConcluida.style.display = "block";
});

// Funcionalidade para enviar a imagem para o armazenamento local
btEnviarFoto.addEventListener("click", () => {
    const receberDadosEmString = localStorage.getItem("cadastro");
    // parse - Converte uma string JSON em um objeto JavaScript.
    const conversaoParaJs = JSON.parse(receberDadosEmString);
    conversaoParaJs.imagem = imagemURL;

    // stringify - Converte um objeto js para string JSON (localStorage só aceita string)
    localStorage.setItem("cadastro", JSON.stringify(conversaoParaJs));

    window.location.href = "./abrir-conta-form-3.html"
})