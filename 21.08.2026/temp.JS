const Qualtemp = prompt('Qual a temperatura atual?');
const temperatura = Number(Qualtemp);

let clima = '';

if (temperatura < 15) {
    clima = 'Frio';
} else if (temperatura >= 15 && temperatura < 25) {
    clima = 'Agradavel';
} else {
    clima = 'Quente';
}

const temperaturaEl = document.getElementById('temperatura');
temperaturaEl.textContent = `Está um clima ${clima}`;

