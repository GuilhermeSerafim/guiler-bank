const bTIniciarCamera = document.querySelector("[data-video-botao]");
const campoDeExibicaoCamera = document.querySelector("[data-camera]");
const iframeVideo = document.querySelector("[data-video]");
const btTirarFoto = document.querySelector("[data-tirar-foto]");
const foto = document.querySelector("[data-video-canvas]");
const mensagemDeCapturaConcluida = document.querySelector("[data-mensagem]");

const imagemURL = "";

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
    foto.getContext('2d').drawImage(video, 0, 0, foto.width, foto.height);
    imagemURL = foto.toDataURL("image/jpeg");
    campoDeExibicaoCamera.style.display = "none";
    mensagemDeCapturaConcluida.style.display = "block";
});