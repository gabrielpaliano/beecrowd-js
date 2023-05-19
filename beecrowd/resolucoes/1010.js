var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const pegarValores = (linhas) => linhas.split(" ").map(a => Number(a));

let [pecaUm, numPecaUm, precoPecaUm] = pegarValores(lines.shift()); 
let [pecaDois, numPecaDois, precoPecaDois] = pegarValores(lines.shift()); 

let valorUm = numPecaUm * precoPecaUm;
let valorDois = numPecaDois * precoPecaDois;
let valorTotal  = valorUm + valorDois;

console.log(`VALOR A PAGAR: R$ ${valorTotal.toFixed(2)}`);