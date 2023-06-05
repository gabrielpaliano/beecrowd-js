var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const pegarValores = (linhas) => linhas.split(" ").map((a) => Number(a));

const [a, b, c] = pegarValores(lines.shift());
const valores = [a, b, c]

valores.sort(function (a, b) {
  return a - b;
})

valores.forEach(element => {
  console.log(element) ;
});

console.log();

console.log(a);
console.log(b);
console.log(c);