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

document.querySelectorAll('#links_header a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const id = this.getAttribute('href');

    if (id === '#') return;

    e.preventDefault();

    const target = document.querySelector(id);
    if (!target) return;

    const targetPosition =
      target.getBoundingClientRect().top + window.pageYOffset;

    const offset =
      (window.innerHeight / 2) - (target.offsetHeight / 2);

    window.scrollTo({
      top: targetPosition - offset,
      behavior: 'smooth'
    });
  });
});