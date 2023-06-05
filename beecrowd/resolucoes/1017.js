var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let tempo = Number(lines.shift());
let velocidade = Number(lines.shift());

let media = (tempo * velocidade)/12;

console.log(media.toFixed(3))