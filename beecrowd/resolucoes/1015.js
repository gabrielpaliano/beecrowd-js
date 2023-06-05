var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const pegarValores = (linhas) => linhas.split(" ").map((a) => Number(a));

let [x1, y1] = pegarValores(lines.shift());
let [x2, y2] = pegarValores(lines.shift());

let resultado = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))

console.log(resultado.toFixed(4))