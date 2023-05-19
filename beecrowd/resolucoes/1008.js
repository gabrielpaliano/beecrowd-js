let number = Number(lines.shift());
let hours = Number(lines.shift());
let price = Number(lines.shift());

let calculo = (hours * price);

console.log(`NUMBER = ${number}`);
console.log(`SALARY = U$ ${calculo.toFixed(2)}`);