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

/* ===============================
   MODAL CADASTRO LEADS
================================ */

const btnOpen = document.getElementById("openCadastro");
const modal = document.getElementById("modalCadastro");
const btnClose = document.getElementById("closeCadastro");

btnOpen.addEventListener("click", () => {
  modal.classList.add("ativo");
});

btnClose.addEventListener("click", () => {
  modal.classList.remove("ativo");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("ativo");
  }
});

/* submit fake (front-end only) */
document.getElementById("leadForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Cadastro enviado com sucesso");
  modal.classList.remove("ativo");
});
