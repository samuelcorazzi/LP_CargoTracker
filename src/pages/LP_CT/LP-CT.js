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

document.addEventListener("DOMContentLoaded", () => {

    // BOTÕES QUE ABREM POPUPS
    const openLogin = document.getElementById("openLogin");
    const openCadastro = document.getElementById("openCadastro");

    // POPUPS
    const popupLogin = document.getElementById("popupLogin");
    const popupCadastro = document.getElementById("popupCadastro");

    // BOTÕES FECHAR
    const closeButtons = document.querySelectorAll("[data-close]");

    // ABRIR POPUP LOGIN
    openLogin.addEventListener("click", (e) => {
        e.preventDefault();
        popupLogin.style.display = "flex";
    });

    // ABRIR POPUP CADASTRO
    openCadastro.addEventListener("click", (e) => {
        e.preventDefault();
        popupCadastro.style.display = "flex";
    });

    // FECHAR COM O X
    closeButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            popupLogin.style.display = "none";
            popupCadastro.style.display = "none";
        });
    });

    // FECHAR CLICANDO FORA DO POPUP
    window.addEventListener("click", (e) => {
        if (e.target === popupLogin) popupLogin.style.display = "none";
        if (e.target === popupCadastro) popupCadastro.style.display = "none";
    });
});

// --- CADASTRAR USUÁRIO ---
document.querySelector("#popupCadastro form").addEventListener("submit", (e) => {
  e.preventDefault();

  const usuario = e.target.usuario.value;
  const email = e.target.email.value;
  const senha = e.target.senha.value;

  const dados = {
    usuario,
    email,
    senha
  };

  // salva no LocalStorage
  localStorage.setItem("usuarioCadastro", JSON.stringify(dados));

  alert("Usuário cadastrado com sucesso!");
  e.target.reset();

  // fecha popup de cadastro
  document.getElementById("popupCadastro").style.display = "none";

  // abre popup de login automaticamente
  abrirLogin();
});


//  login usuario
document.querySelector("#popupLogin form").addEventListener("submit", (e) => {
  e.preventDefault();

  const usuario = e.target.usuario.value;
  const senha = e.target.senha.value;

  // pega os dados cadastrados
  const dadosSalvos = JSON.parse(localStorage.getItem("usuarioCadastro"));

  if (!dadosSalvos) {
    alert("Nenhum usuário cadastrado!");
    return;
  }

  if (usuario === dadosSalvos.usuario && senha === dadosSalvos.senha) {
    location.href = "/src/pages/acesso/acesso.html"; // troque se quiser
  } else {
    alert("Usuário ou senha incorretos!");
  }
});