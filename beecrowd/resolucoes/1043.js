var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const pegarValores = (linhas) => linhas.split(" ").map((a) => Number(a));

const [a, b, c] = pegarValores(lines.shift());

if(a < b + c && b < a + c && c < a + b) {
  let perimetro = a + b + c;
  console.log(`Perimetro = ${perimetro.toFixed(1)}`)
} else {
  let area = ((a + b) * c)/2;
  console.log(`Area = ${area.toFixed(1)}`);
}