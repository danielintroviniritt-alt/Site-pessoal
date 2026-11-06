// ==========================================
// modo claro / escuro com persistencia
// ==========================================

const tela = document.querySelector("html");
const botaoTema = document.querySelector(".botao-tema");

// aplica o tema visual e atualiza o icone do botao
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

// recupera o tema salvo no navegador ao entrar na pagina
function carregarTemaSalvo() {
  const temaSalvo = localStorage.getItem("tema-preferido");
  if (temaSalvo) {
    aplicarTema(temaSalvo);
  }
}

// alterna entre claro e escuro e grava no localStorage
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

// executa a verificacao assim que a pagina carrega
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


// imagem que muda em instrumentos
const botaoInstrumentos = document.querySelector("#proximo-instrumento")
const instrumentos = document.querySelectorAll("#img-instrumentos img")
let vezInst = 0
function avancarInstrumento() {
  instrumentos[vezInst].classList.remove("aparece")
  instrumentos[vezInst].classList.add("esconde")

  vezInst = (vezInst + 1) % instrumentos.length

  instrumentos[vezInst].classList.remove("esconde")
  instrumentos[vezInst].classList.add("aparece")
}

botaoInstrumentos.addEventListener("click", avancarInstrumento)

//imagem que muda em desenhos
const botaoDesenhos = document.querySelector("#proximo-desenho")
const desenhos = document.querySelectorAll("#img-desenhos img")
let vezDesenho = 0

function avancarDesenho() {
  desenhos[vezDesenho].classList.remove("aparece")
  desenhos[vezDesenho].classList.add("esconde")

  vezDesenho = (vezDesenho + 1) % desenhos.length

  desenhos[vezDesenho].classList.remove("esconde")
  desenhos[vezDesenho].classList.add("aparece")
}

botaoDesenhos.addEventListener("click", avancarDesenho)