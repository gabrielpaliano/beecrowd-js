var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const pegarValores = (linhas) => linhas.split(" ").map(a => Number(a));

let [a, b, c] = pegarValores(lines.shift());

let pi = 3.14159;
let areaTriangulo = (a * c) / 2;
let areaCirculo = pi * Math.pow(c, 2);
let areaTrapezio = ((a + b) * c) /2;
let areaQuadrado = Math.pow(b, 2);
let areaRetangulo = a * b;

console.log(`TRIANGULO: ${areaTriangulo.toFixed(3)}`);
console.log(`CIRCULO: ${areaCirculo.toFixed(3)}`);
console.log(`TRAPEZIO: ${areaTrapezio.toFixed(3)}`);
console.log(`QUADRADO: ${areaQuadrado.toFixed(3)}`);
console.log(`RETANGULO: ${areaRetangulo.toFixed(3)}`);