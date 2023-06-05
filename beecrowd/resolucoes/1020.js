var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let dias = Number(lines.shift())

let anos = parseInt(dias / 365);
dias = dias % 365;
let meses = parseInt(dias / 30);
dias = dias % 30;

console.log(`${anos} ano(s)`)
console.log(`${meses} mes(es)`)
console.log(`${dias} dia(s)`)