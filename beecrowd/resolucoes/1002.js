var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');

// const pegarValores = (linhas) => linhas.split(" ").map(a => Number(a));

    let n = 3.14159;
    let raio = Number(lines.shift())
    let area = n * Math.pow(raio, 2)

    console.log(`A=${area.toFixed(4)}`);