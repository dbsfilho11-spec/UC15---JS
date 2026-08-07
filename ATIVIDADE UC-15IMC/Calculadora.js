let nomeCliente = prompt ("Qual seu nome?")
let valorCompra = prompt ("Qual o valor da compra?")
let clientVip = prompt (`Você é vip?\nResponda com True ou Sim`)
let Desconto200 = (valorCompra * 0,10)
let Desconto500 = (valorCompra * 0,15)
let DescontoVip = (valorCompra * 0,2)


 if (clientVip == 'True' || 'Sim') {
    ValorFinal = (valorCompra - DescontoVip)
 } else if (valorCompra > R$500) {
    ValorFinal = (valorCompra - Desconto500)
 } else if (valorCompra > R$200 || valorCompra < R$500) {
    ValorFinal = (valorCompra - Desconto200)
 } else {
    ValorFinal = (valorCompra)
 }

 console.log(`${nomeCliente} Recebeu ${ValorFinal} de desconto`)

 