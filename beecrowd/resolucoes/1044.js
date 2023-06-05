var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const pegarValores = (linhas) => linhas.split(" ").map((a) => Number(a));

const [a, b] = pegarValores(lines.shift());

if(b % a === 0 || a % b === 0){
  console.log('Sao Multiplos');
} else {
  console.log('Nao sao Multiplos');
}