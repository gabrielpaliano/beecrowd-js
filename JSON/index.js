let sanduba =
  {
    nome: "sanduba frances",
        tamanho: 30,
        pao: "frances",
        maionese: true,
        salada: false,
        bacon: true,
  }

const string = JSON.stringify(sanduba) //TRANSFORMA UM OBJETO EM UMA STRING (TEXTO)
console.log(string)

const voltou = JSON.parse(string) //TRANSFORMA UMA STRING EM UM OBEJTO
console.log(voltou)

const valores = Object.values(sanduba);
console.log(valores);