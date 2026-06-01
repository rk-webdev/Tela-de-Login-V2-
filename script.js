const botao = document.getElementById("btn-login");

botao.addEventListener("click", login);

function login() {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const mensagem = document.getElementById("mensagem");

    if (usuario === "" || senha === "") {
        mensagem.innerText = "Preecha todos os campos.";
        mensagem.style.color = "#ff4d4d";
        return;
    }

    if (usuario === "rafael" && senha === "1234") {
        mensagem.innerText = "Login realizado com sucesso!";
        mensagem.style.color = "#07F49E";

    } else {
        mensagem.innerText = "Usuário ou senha incorretos.";
        mensagem.style.color = "#ff4d4d";
    }
}