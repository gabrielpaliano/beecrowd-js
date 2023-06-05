var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const pegarValores = (linhas) => linhas.split(" ").map((a) => Number(a));

const [x , y] = pegarValores(lines.shift())

if(x + y === 0){
  console.log(`Origem`);
} else if (x > 0 && y > 0){
  console.log(`Q1`);
} else if (x > 0 && y < 0) {
  console.log(`Q4`)
} else if (x < 0 && y < 0){
  console.log(`Q3`);
} else if (x < 0 && y > 0){
  console.log(`Q2`);
} else if (x === 0 && y !== 0){
  console.log(`Eixo Y`);
} else if (x !== 0 && y === 0){
  console.log(`Eixo X`);
}