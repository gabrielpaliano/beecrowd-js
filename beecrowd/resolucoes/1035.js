var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const pegarValores = (linhas) => linhas.split(" ").map((a) => Number(a));

let [a, b, c, d] = pegarValores(lines.shift())

if (b > c && d > a && (c + d) > (a + b) && c > 0 && d > 0 && (a%2) == 0){
    console.log('Valores aceitos');
} else {
    console.log('Valores nao aceitos');
}