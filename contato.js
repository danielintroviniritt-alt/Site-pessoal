const formulario = document.querySelector("#form-contato");
const campoNome = document.querySelector("#nome");
const campoEmail = document.querySelector("#email");
const campoAssunto = document.querySelector("#assunto");
const campoMensagem = document.querySelector("#mensagem");
const aviso = document.querySelector("#aviso");

function validarNome(nome) {
    if (nome === "") {
        console.log("Formulário nome não preechido")
        return "Digite o seu nome.";
    } else if (nome.length < 3) {
        console.log("Formulário nome muito curto")
        return "O nome precisa ter pelo menos 3 letras.";
    } else {
        return "";
    }
}

function validarEmail(email) {
    if (email === "") {
        console.log("Formulário de email não preenchido")
        return "Digite o seu e-mail.";
    } else if (email.includes("@gmail") === false && email.includes("@hotmail") === false) {
        console.log("Formulário de email sem @gmail ou @hotmail")
        return "O e-mail precisa ter @gmail ou @hotmail.";
    } else if (email.includes(".com") === false) {
        console.log("Email não tem .com")
        return "O e-mail precisa ter um ponto, como em .com.";
    } else {
        return "";
    }
}

function validarAssunto(assunto) {
    if (assunto === "") {
        console.log("Assunto não escolhido")
        return "Escolha um assunto.";
    } else {
        return "";
    }
}

function validarMensagem(mensagem) {
    if (mensagem === "") {
        console.log("Formulário mensagem não escrita")
        return "Escreva a sua mensagem.";
    } else if (mensagem.length < 10) {
        console.log("Mensagem muito curta")
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

    const nome = campoNome.value;
    const email = campoEmail.value.trim();
    const assunto = campoAssunto.value;
    const mensagem = campoMensagem.value;

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
        console.log("Mensagem enviada!")
        formulario.reset()
    }


}

formulario.addEventListener("submit", enviarMensagem);