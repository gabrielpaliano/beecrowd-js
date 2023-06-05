var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const pegarValores = (linhas) => linhas.split(" ").map((a) => Number(a));

const [codigo, quantidade] = pegarValores(lines.shift());
let conta = 0;

if (codigo == 1){
    conta = quantidade * 4.00;
} else if (codigo == 2){
    conta = quantidade * 4.50;
} else if (codigo == 3) {
    conta = quantidade * 5.00;
} else if (codigo == 4){
    conta = quantidade * 2.00;
} else if (codigo == 5){
    conta = quantidade * 1.50;
}

console.log(`Total: R$ ${conta.toFixed(2)}`);