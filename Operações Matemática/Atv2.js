let produto = prompt("Qual o produto solicitado?")
let preco = prompt("Qual o preço original do produto?")
let desconto = prompt("Qual o valor do desconto?")

let valorDesconto = preco * (desconto / 100)
let ValorTotal = preco - valorDesconto

console.log(ValorTotal)