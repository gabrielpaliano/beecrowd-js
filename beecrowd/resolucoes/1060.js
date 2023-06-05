var input = require("fs").readFileSync("./dev/stdin.txt", "utf8");
var lines = input.split("\n");

// const pegarValores = (linhas) => linhas.split(" ").map((a) => Number(a));
let count = 0;

while(lines.length > 0){
    let numero = Number(lines.shift())

    if(numero > 0){
        count++;
    }
}

console.log(`${count} valores positivos`)

