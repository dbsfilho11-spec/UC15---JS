let nome = prompt('Qual seu nickname boy?')
let nota1 = Number(prompt('Qual sua nota na AV1 boy?'))
let nota2 = Number(prompt('Qual sua nota na AV2 boy?'))
let nota3 = Number(prompt('Qual sua nota na AV3 boy?'))

let NotaF = (nota1 + nota2 + nota3) / 3
NotaF = Number(NotaF.toFixed(1))
let NotaFF = NotaF.toFixed(1)

if (NotaF < 4) {
    alert('Reprovado')
} else if (5 < NotaF && NotaF < 6) {
    alert('Recuperação')
} else if (NotaF > 7) {
    alert('Aprovado')
}

alert(`${nome} tirou ${NotaF}`)
console.log(`${nome} tirou ${NotaF}`)


