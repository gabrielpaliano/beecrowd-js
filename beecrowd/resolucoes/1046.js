var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const pegarValores = (linhas) => linhas.split(" ").map((a) => Number(a));

const [horaInicio, horaFim] = pegarValores(lines.shift());
let duracao;

if(horaInicio < horaFim){
    duracao = horaFim - horaInicio
} else {
    duracao = (24 - horaInicio) + horaFim
}

console.log(`O JOGO DUROU ${duracao} HORA(S)`)