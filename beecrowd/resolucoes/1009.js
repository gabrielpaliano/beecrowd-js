var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const nome = lines.shift();
let salarioBruto = Number(lines.shift());
let vendas = Number(lines.shift());

let comissao = vendas*0.15;
let salarioLiquido = salarioBruto + comissao;

console.log(`TOTAL = R$ ${salarioLiquido.toFixed(2)}`);