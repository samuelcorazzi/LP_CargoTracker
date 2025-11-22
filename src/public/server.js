const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Servir tudo que estiver em /public e /src
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "src")));

// 👉 ROTA PARA LOGIN (abre seu login.html)
app.get("/login", (req, res) => {
  res.sendFile(
    path.join(__dirname, "src", "pages", "logins", "login", "login.html")
  );
});

// 👉 ROTA PARA CADASTRO (abre cadastro.html)
app.get("/cadastro", (req, res) => {
  res.sendFile(
    path.join(__dirname, "src", "pages", "logins", "cadastro", "cadastro.html")
  );
});

// 👉 ROTA POST DE CADASTRO
app.post("/cadastrar", (req, res) => {
  const usuario = req.body.usuario;
  const senha = req.body.senha;

  const usuarios = JSON.parse(fs.readFileSync("usuarios.json"));

  const existe = usuarios.find(u => u.usuario === usuario);
  if (existe) {
    return res.send("<h1>Usuário já existe!</h1><a href='/cadastro'>Voltar</a>");
  }

  usuarios.push({ usuario, senha });
  fs.writeFileSync("usuarios.json", JSON.stringify(usuarios, null, 2));

  res.send("<h1>Cadastro realizado com sucesso!</h1><a href='/login'>Ir para o login</a>");
});

// 👉 ROTA POST DE LOGIN (valida usuário)
app.post("/login", (req, res) => {
  const usuario = req.body.usuario;
  const senha = req.body.senha;

  const usuarios = JSON.parse(fs.readFileSync("usuarios.json"));

  const encontrado = usuarios.find(u => u.usuario === usuario && u.senha === senha);

  if (encontrado) {
    res.send("<h1>Login realizado!</h1>");
  } else {
    res.send("<h1>Usuário ou senha incorretos.</h1><a href='/login'>Tentar novamente</a>");
  }
});

// Servidor rodando
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000/login");
});
