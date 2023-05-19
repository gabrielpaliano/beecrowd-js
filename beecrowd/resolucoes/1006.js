var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let a = Number(lines.shift());
let b = Number(lines.shift());
let c = Number(lines.shift());

let media=(a*0.2 + b*0.3 + c*0.5);

console.log(`MEDIA = ${media.toFixed(1)}`);