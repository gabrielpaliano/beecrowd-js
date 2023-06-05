var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let valorTotal = Number(lines.shift())

console.log(valorTotal);

let qtdNotas = parseInt(valorTotal / 100);
console.log(`${qtdNotas} nota(s) de R$ ${100},00`);
valorTotal = valorTotal % 100;

qtdNotas = parseInt(valorTotal / 50);
console.log(`${qtdNotas} nota(s) de R$ ${50},00`);
valorTotal = valorTotal % 50;

qtdNotas = parseInt(valorTotal / 20);
console.log(`${qtdNotas} nota(s) de R$ ${20},00`);
valorTotal = valorTotal % 20;

qtdNotas = parseInt(valorTotal / 10);
console.log(`${qtdNotas} nota(s) de R$ ${10},00`);
valorTotal = valorTotal % 10;

qtdNotas = parseInt(valorTotal / 5);
console.log(`${qtdNotas} nota(s) de R$ ${5},00`);
valorTotal = valorTotal % 5;

qtdNotas = parseInt(valorTotal / 2);
console.log(`${qtdNotas} nota(s) de R$ ${2},00`);
valorTotal = valorTotal % 2;

qtdNotas = parseInt(valorTotal / 1);
console.log(`${qtdNotas} nota(s) de R$ ${1},00`);
valorTotal = valorTotal % 1;