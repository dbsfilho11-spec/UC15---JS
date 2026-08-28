// --------- Questão 1 --------- \\
 
/*
let calculo1 = prompt('Diga o primeiro numero')
 let calculo2 = prompt('Diga o segundo numero')

 let soma = calculo1 + calculo2
console.log = (`A soma É ${soma}`)

let multi = soma * calculo1
console.log = (`A Mutiplicação É ${multi}`)

let divisao = multi / soma
console.log = (`A divisão É ${divisao}`)

let sub = soma - multi
console.log = (`A Subtração É ${sub}`)

alert (`o Numero final é ${sub}`) 
*/

// --------- Questão 2 --------- \\

/*
let numero = prompt('Qual o numero?')

let dup = numero * 2
let trip = numero * 3

alert (`O resultado da mutiplicação por dois é ${dup} \n O resultado da triplicação é ${trip}`)
*/

// --------- Questão 3 --------- \\

/*
let nome = prompt ('Qual seu nome?')
let idade = prompt ('Qual sua idade?')

alert (`Olá ${nome}, você tem ${idade} obrigado por usar nossos serviços!`)
*/

// --------- Questão 4 --------- \\


/*
let nota1 = Number(prompt('Qual sua nota da AV1'))
let nota2 = Number(prompt('Qual sua nota da AV2'))
let nota3 = Number(prompt('Qual sua nota da AV3'))

let  media = (nota1 + nota2 + nota3) / 3

let mediaFormatada = media.toFixed(1)

alert (`Sua nota final é ${mediaFormatada}`)
*/

// --------- Questão 5 --------- \\

const usuarioCorreto = "admin";
const senhaCorreta = "1234";

let senhapergunta = prompt ('Qual a senha?')
let usuariopergunta = prompt ('Qual o usuario?')

if (senhapergunta == senhaCorreta ) {
    alert ('Senha de usuario correta!')
} else {
 alert ('Incorreto!')
}
 if (usuariopergunta == usuarioCorreto) {
    alert ('Usuario correto!')
 } else {
    alert ('Incorreto!')
 }
