const bTIniciarCamera = document.querySelector("[data-video-botao]");
const campoDeExibicaoCamera = document.querySelector("[data-camera]");
const iframeVideo = document.querySelector("[data-video]");

bTIniciarCamera.addEventListener("click", async function() {
    // Retorna um objeto MediaStream 
    const iniciarVideo = await navigator.mediaDevices // Pede para o navegador iniciar a câmera
    .getUserMedia({video: true, audio: false}); // Solicitou somente o vídeo, não o aúdio
    
    // Para remover o botão da acmera, e exibir o campo da camera
    bTIniciarCamera.style.display = "none";
    campoDeExibicaoCamera.style.display = "block";

    // Associando o objeto de midia ao elemento html para exibir em nossa página
    iframeVideo.srcObject = iniciarVideo;
});