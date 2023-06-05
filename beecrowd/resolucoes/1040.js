var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const pegarValores = (linhas) => linhas.split(" ").map((a) => Number(a));

const [n1, n2, n3, n4] = pegarValores(lines.shift());
const media = ((n1 * 2) + (n2 * 3) + (n3 * 4) + (n4 * 1))/10
const notaExame = Number(lines.shift());

console.log(`Media: ${media.toFixed(1)}`);

if (media >= 7) {
  console.log(`Aluno aprovado.`);
} else if (media < 5) {
  console.log(`Aluno reprovado.`);
} else if (media >= 5 && media <= 6.9) {
  console.log(`Aluno em exame.`);
  console.log(`Nota do exame: ${notaExame.toFixed(1)}`);
  let mediaFinal = (media + notaExame)/2;
  if(mediaFinal >= 5){
    console.log(`Aluno aprovado.`);
  } else if(mediaFinal <= 4.9){
    console.log(`Aluno reprovado.`);
  }
  console.log(`Media final: ${mediaFinal.toFixed(1)}`)
}