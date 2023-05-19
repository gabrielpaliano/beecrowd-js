var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let raio = Number(lines.shift());
let pi = 3.14159;

let esfera = (4/3) * pi * Math.pow(raio, 3);

console.log(`VOLUME = ${esfera.toFixed(3)}`);