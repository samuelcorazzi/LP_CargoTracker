/* garante que o código só será executado quando a página terminar de carregar */
window.addEventListener("load", () => {
    const imagens = document.querySelector(".carrossel-section .carrossel-imagens");
    const total = imagens.children.length; /* conta quantas imagens existem */
    let janela = 0;

    /* setInterval controla o tempo do carrossel */
    setInterval(() => {
        janela = (janela + 1) % total; /* avança e volta ao início */
        imagens.style.transform = `translateX(-${janela * 100}%)`; /* move o carrossel */
    }, 6000);
});
