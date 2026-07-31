let senha = prompt("Qual sua senha?")

let tamanhoSenha = senha.length

if (tamanhoSenha > 8) {
    alert("Senha Forte")
} else {
    alert("Senha Fraca")
}