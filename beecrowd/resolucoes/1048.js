var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const salarioAntigo = Number(lines.shift());
let salarioNovo;
let reajuste;

if (salarioAntigo > 0 && salarioAntigo <= 400.0) {
  reajuste = salarioAntigo * 0.15;
  salarioNovo = salarioAntigo + reajuste;
} else if (salarioAntigo >= 400.01 && salarioAntigo <= 800.0) {
  reajuste = salarioAntigo * 0.12;
  salarioNovo = salarioAntigo + reajuste;
} else if (salarioAntigo >= 800.01 && salarioAntigo <= 1200.0) {
    reajuste = salarioAntigo * 0.10;
  salarioNovo = salarioAntigo + reajuste;
} else if (salarioAntigo >= 1200.01 && salarioAntigo <= 2000.0) {
  reajuste = salarioAntigo * 0.07;
  salarioNovo = salarioAntigo + reajuste;
} else if (salarioAntigo > 2000.0) {
  reajuste = salarioAntigo * 0.04;
  salarioNovo = salarioAntigo + reajuste;
}

let porcentagem = ((salarioNovo - salarioAntigo) / salarioAntigo)*100

console.log(`Novo salario: ${salarioNovo.toFixed(2)}`);
console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`);
console.log(`Em percentual: ${porcentagem.toFixed(0)} %`)