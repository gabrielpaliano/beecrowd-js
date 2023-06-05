var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let x = Number(lines.shift());

let distancia = x * 2;

console.log(`${distancia} minutos`);