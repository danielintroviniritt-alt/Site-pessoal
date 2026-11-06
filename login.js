const contas = [
    {
        usuario: "daniel",
        senha: "daniel123",
        nome: "Daniel",
    },
    {
        usuario: "alanakov",
        senha: "alana123",
        nome: "Alana",
    }
]

const formulario = document.querySelector("#form-login")
const campoUsuario = document.querySelector("#usuario")
const campoSenha = document.querySelector("#senha")
const aviso = document.querySelector("#aviso")

function validarUsuario(usuario) {
    if (usuario === "") {
        console.log("Usuário vazio");
        return "Digite seu usuário.";
    } else if (usuario.length <= 3) {
        console.log("Usuário com menos de 4 digitos");
        return "O usuário deve ter mais de 3 dígitos."
    } else if (usuario.includes(" ")) {
        console.log("usuario com espaço");
        return "O usuário não pode ter espaço."
    } else { return "" }
}

function validarSenha(senha) {
    if (senha <= 3) {
        console.log("Senha com menos de 4 dígitos");
        return "A senha deve ter mais de 3 dígitos."
    } else if (senha === "") {
        console.log("Senha vazia");
        return "Digite sua senha."
    } else if (senha.includes(" ")) {
        console.log("Senha com espaço");
        return "A senha não pode ter espaço."
    } else { return "" }
}

function procurarConta(usuario, senha) {
    for (const conta of contas) {
        if (conta.usuario === usuario && conta.senha === senha) {
            return conta
        }
    }
    return null
}

function guardarLogin(conta) {
    localStorage.setItem("usuarioLogado", conta.nome)
}

function mostrarAviso(texto, tipo) {
    aviso.textContent = texto
    aviso.classList.remove("erro")
    aviso.classList.remove("certo")
    aviso.classList.add(tipo)
}

function irParaInicio() {
    window.location.href = "index.html"
}

function entrar(evento) {
    evento.preventDefault()

    const usuario = campoUsuario.value.trim()
    const senha = campoSenha.value.trim()

    const erroUsuario = validarUsuario(usuario)
    const erroSenha = validarSenha(senha)
    const conta = procurarConta(usuario, senha)

    if (erroUsuario !== "") {
        mostrarAviso(erroUsuario, "erro")
    } else if (erroSenha !== "") {
        mostrarAviso(erroSenha, "erro")
    } else if (conta === null) {
        mostrarAviso("Usuário ou senha incorretos.", "erro")
    } else {
        guardarLogin(conta)
        irParaInicio()
    }
}

formulario.addEventListener("submit", entrar)