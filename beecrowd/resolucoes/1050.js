var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let ddd = Number(lines.shift());
let dddCadastrados = [
    "Brasilia",
    61,
    "Salvador",
    71,
    "Sao Paulo",
    11,
    "Rio de Janeiro",
    21,
    "Juiz de Fora",
    32,
    "Campinas",
    19,
    "Vitoria",
    27,
    "Belo Horizonte",
    31,
];

if (dddCadastrados.indexOf(ddd) > -1) {
    let indexDDD = dddCadastrados.indexOf(ddd);
    let cidade = dddCadastrados[indexDDD - 1];
    console.log(cidade);
} else {
    console.log("DDD nao cadastrado");
}