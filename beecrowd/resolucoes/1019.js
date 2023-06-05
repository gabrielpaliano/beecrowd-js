var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let tempoInicial = Number(lines.shift())

let horas = parseInt(tempoInicial / 3600);
tempoInicial = tempoInicial % 3600;

let minutos = parseInt(tempoInicial / 60);
tempoInicial = tempoInicial % 60;

let segundos = tempoInicial

console.log(`${horas}:${minutos}:${segundos}`);