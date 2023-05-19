var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const pegarValores = (linhas) => linhas.split(" ").map(a => Number(a));

let [a, b, c] = pegarValores(lines.shift());

let maiorAB = (a + b + Math.abs(a - b))/2
let maior = (maiorAB + c + Math.abs(maiorAB - c))/2
console.log(`${maior} eh o maior`);