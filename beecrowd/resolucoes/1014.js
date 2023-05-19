var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let x = Number(lines.shift());
let y = Number(lines.shift());

let consumoMedio = x / y;

console.log(`${consumoMedio.toFixed(3)} km/l`)