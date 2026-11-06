// MODO CLARO

const tela = document.querySelector("html");
const botaoTema = document.querySelector(".botao-tema");

function aplicarTema(tema) {
  if (tema === "claro") {
    tela.classList.add("modo-claro");
    if (botaoTema) {
      botaoTema.textContent = "⚫";
    }
  } else {
    tela.classList.remove("modo-claro");
    if (botaoTema) {
      botaoTema.textContent = "⚪";
    }
  }
}

function carregarTemaSalvo() {
  const temaSalvo = localStorage.getItem("tema-preferido");
  if (temaSalvo) {
    aplicarTema(temaSalvo);
  }
}

function alterarTema() {
  const estaClaro = tela.classList.contains("modo-claro");

  if (estaClaro) {
    aplicarTema("escuro");
    localStorage.setItem("tema-preferido", "escuro");
  } else {
    aplicarTema("claro");
    localStorage.setItem("tema-preferido", "claro");
  }
}

carregarTemaSalvo();

if (botaoTema) {
  botaoTema.addEventListener("click", alterarTema);
}

// Botão hamburguer

const botaoMenu = document.querySelector(".botao-menu");
const menuNavegacao = document.querySelector(".topo nav");

function alternarMenu() {
  menuNavegacao.classList.toggle("menu-aberto");

  const menuEstaAberto = menuNavegacao.classList.contains("menu-aberto");
  botaoMenu.setAttribute("aria-expanded", menuEstaAberto);
}

function fecharMenu() {
  menuNavegacao.classList.remove("menu-aberto");
  botaoMenu.setAttribute("aria-expanded", "false");
}

if (botaoMenu && menuNavegacao) {
  botaoMenu.addEventListener("click", alternarMenu);

  const linksMenu = document.querySelectorAll(".topo nav a");
  for (const link of linksMenu) {
    link.addEventListener("click", fecharMenu);
  }
}
