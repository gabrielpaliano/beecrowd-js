var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const pegarValores = (linhas) => linhas.split(" ").map((a) => Number(a));

let [a, b, c] = pegarValores(lines.shift());

let delta = Math.pow(b, 2) - 4 * a *c;
let r1 = ((-b) + Math.sqrt(delta))/(2*a)
let r2 = ((-b) - Math.sqrt(delta))/(2*a)

if(delta < 0 || a === 0){

    console.log('Impossivel calcular')

} else{
    console.log(`R1 = ${r1.toFixed(5)}`)
    console.log(`R2 = ${r2.toFixed(5)}`)
}