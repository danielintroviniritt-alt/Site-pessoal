const skills = [
    {
        categoria: "lista-front",
        lista: ["CSS", "HTML", "JavaScript"]
    },
    {
        categoria: "lista-musica",
        lista: ["Começando em teoria", "Violão", "Guitarra", "Baixo", "Improviso"]
    },
    {
        categoria: "lista-desenho",
        lista: ["Desenho com giz de tinta", "Desenho com lápis", "Árvores"]
    }
]

console.log("Você lembrou sua senha! parabéns!")
const listaSkills = document.querySelector("#lSkill")
const pagina = document.querySelector("main .projetos aticle")

function montarLista(oque) {

    for (const item of oque) {

        const artigo = document.querySelector(`#${item.categoria}`);

        let html = "<ul>";

        for (const habilidade of item.lista) {
            html += `<li>${habilidade}</li>`;
        }

        html += "</ul>";

        artigo.querySelector("h3").insertAdjacentHTML("afterend", html);
    }
}

montarLista(skills);

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