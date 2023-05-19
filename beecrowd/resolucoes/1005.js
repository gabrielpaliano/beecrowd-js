var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let a = Number(lines.shift());
let b = Number(lines.shift());

let media = (a*3.5 + b*7.5)/11;

console.log(`MEDIA = ${media.toFixed(5)}`)