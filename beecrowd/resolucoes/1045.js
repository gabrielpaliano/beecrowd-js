var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const pegarValores = (linhas) => linhas.split(" ").map((a) => Number(a));

const valores = pegarValores(lines.shift());

valores.sort(function(a, b){
  return b - a
})

let [a, b, c] = valores

let aQuadrado = Math.pow(a, 2)
let bQuadrado = Math.pow(b, 2)
let cQuadrado = Math.pow(c, 2)

if(a >= (b+c)){
  console.log('NAO FORMA TRIANGULO');
} else {
  
  if(aQuadrado == bQuadrado + cQuadrado){
  console.log('TRIANGULO RETANGULO');
} if(aQuadrado > bQuadrado + cQuadrado){
  console.log('TRIANGULO OBTUSANGULO');
} if(aQuadrado < bQuadrado + cQuadrado){
  console.log('TRIANGULO ACUTANGULO');
} if(a == b && a == c){
  console.log('TRIANGULO EQUILATERO');
} if(a == b && b != c || b == c && c != a || c == a && a != c){
  console.log('TRIANGULO ISOSCELES');
}
}
