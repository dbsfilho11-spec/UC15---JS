let nome = prompt('Qual seu nickname boy?')
let nota1 = prompt('Qual sua nota na AV1 boy?')
let nota2 = prompt('Qual sua nota na AV2 boy?')
let nota3 = prompt('Qual sua nota na AV3 boy?')

let NotaF = (nota1 + nota2 + nota3) / 3

alert(`${nome} tirou ${NotaF}`)
console.log(`${nome} tirou ${NotaF}`)

if (NotaF < 4) {
    alert(Reprovado)
} else if (5 < NotaF < 6) {
    alert(Recuperação)
} else if  (7 < NotaF == 10) {
    alert(Aprovado)
} else if (NotaF > 10) {
    alert(Aprovado)
}

