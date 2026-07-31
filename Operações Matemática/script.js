/*
let nome = prompt("Qual seu nome?")
console.log("Olá " + nome)

let cor = prompt("Qual a cor?")
console.log("A cor favorita do usuário é: " + cor)

if (nome == "Daniel") {
    alert("Aprovado")
} else {
    alert("Reprovado")
}
*/

/*let nome = 'Daniel';

let curso = 'MedTec';

let ano = 2;

/*let texto = "Bem vindo! " + nome + " Você é do curso " + curso + " Do " + ano + "º"*/

/*let texto = `Bem vindo ${nome}! Voc$ê é do curso ${curso} e da série ${ano}º`*/
/*console.log(texto)

let multilinhas = `
Primeira linha
Segundo linha
Terceira linha
`;

console.log(multilinhas)*/

let texto = ' Desenvolvedor Front-end ';

// comprimento
let tamanho = TextEncoder.length
console.log(tamanho)

//Remover espaços das bordas
let remove = texto.trim()
console.log(remove)

//Maiúsculo e minúsculo
let maiusculo = texto.trim().toUpperCase()
let minusculo = texto.trim().toLowerCase()

console.log(maiusculo)
console.log(minusculo)

let mundaca = texto.replace('Front-end', 'Back-end')

console.log(mundaca)

// Operações Matemáticas

// As quatro operações

10 + 3
10 - 3
10 * 3
10 / 3

// Mdóulo (Resto da divisão)

10 % 3


// Potência

2 ** 8

// Incremento e Decremento

 let x = 5;
x++
x--
x += 3
x *= 2

// O objeto Math - Funções Matemáticas;

Math.random(4.7)
Math.floor(4.9)
Math.ceil(4.1)
Math.abs(-10)
Math.max(3, 7, 1)
Math.min(3, 7, 1)
Math.sqrt(16)
Math.PI
Math.random()

// Número aleatorio entre 1 e 10

Math.floor(Math.random() * 10) + 1

// Quando você somo string com número, JS concatena
'5' + 3
'5' - 3

// Sempre converter antes de somar
Number('5') + 3
parseInt('5') + 3
