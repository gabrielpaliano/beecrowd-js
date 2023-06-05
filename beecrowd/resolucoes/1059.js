var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
for (let i = 1; i < 101; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}