const formulario = document.querySelector("#form-contato");
const campoNome = document.querySelector("#nome");
const campoEmail = document.querySelector("#email");
const campoAssunto = document.querySelector("#assunto");
const campoMensagem = document.querySelector("#mensagem");
const aviso = document.querySelector("#aviso");

function validarNome(nome) {
    if (nome === "") {
        return "Digite o seu nome.";
    } else if (nome.length < 3) {
        return "O nome precisa ter pelo menos 3 letras.";
    } else {
        return "";
    }
}

function validarEmail(email) {
    if (email === "") {
        return "Digite o seu e-mail.";
    } else if (email.includes("@gmail" || email.includes("@hotmail")) === false) {
        return "O e-mail precisa ter @gmail ou @hotmail.";
    } else if (email.includes(".com") === false) {
        return "O e-mail precisa ter um ponto, como em .com.";
    } else {
        return "";
    }
}

function validarAssunto(assunto) {
    if (assunto === "") {
        return "Escolha um assunto.";
    } else {
        return "";
    }
}

function validarMensagem(mensagem) {
    if (mensagem === "") {
        return "Escreva a sua mensagem.";
    } else if (mensagem.length < 10) {
        return "A mensagem precisa ter pelo menos 10 letras.";
    } else {
        return "";
    }
}

function mostrarAviso(texto, tipo) {
    aviso.textContent = texto;
    aviso.classList.remove("erro");
    aviso.classList.remove("certo");
    aviso.classList.add(tipo);
}

function enviarMensagem(evento) {
    evento.preventDefault();

    const nome = campoNome.value.trim();
    const email = campoEmail.value.trim();
    const assunto = campoAssunto.value;
    const mensagem = campoMensagem.value.trim();

    const erroNome = validarNome(nome);
    const erroEmail = validarEmail(email);
    const erroAssunto = validarAssunto(assunto);
    const erroMensagem = validarMensagem(mensagem);

    if (erroNome !== "") {
        mostrarAviso(erroNome, "erro");
    } else if (erroEmail !== "") {
        mostrarAviso(erroEmail, "erro");
    } else if (erroAssunto !== "") {
        mostrarAviso(erroAssunto, "erro");
    } else if (erroMensagem !== "") {
        mostrarAviso(erroMensagem, "erro");
    } else {
        mostrarAviso(`Mensagem enviada! Valeu, ${nome}.`, "certo");
        formulario.reset()
    }


}

formulario.addEventListener("submit", enviarMensagem);