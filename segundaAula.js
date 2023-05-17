//Como criar array em JS
//Ele tem tamanho dinmâmico, vai ficando maior conforme é alocado dados
//Pode ter varios tipos de dados
const vetor = [12, 'string', false, 8.2];

//É possível exibir sem a necessidade de um for.

//Caso necessite é possível definir um tamanho para o vetor;
const vetorEstatico = new Array(1000);

//Como adicionar dados no vetor?
const vetorVazio = [];

//Através de métodos:

//PUSH adiciona na ultima posição do vetor
vetorVazio.push(1);
vetorVazio.push(3);
vetorVazio.push(6);
vetorVazio.push(9);


//UNSHIFT adicionar na primeira posição do vetor
vetorVazio.unshift(2);

//POP remove a ultima posição do vetor e retorna
vetorVazio.pop();

//SHIFT remove a primeira posição do vetor e retorna
vetorVazio.shift();

//SPLICE define a posição que quer remover, lembrando que o vetor começa da posição 0;
//splice(posição, quantidade de posições que seriam removidas a partir da posição definida)
//Retorna tambem para um novo vetor caso queira
const deletado = vetorVazio.splice(2, 1);


//SLICE retorna a parte definida sem alterar o vetor, como se fosse um copia e cola.
//slice (posição, define até que posição ele deve ir começando do 0)
const parte = vetorVazio.slice(1, 2);

//INCLUDES verifica se o valor está localizado no vetor e retorna true or false;
const resultado = vetorVazio.includes(1);
//CONCAT junta dois vetores e retorna ambos em uma nova const.
const concatenar = vetor.concat(vetorVazio)

//FOR EACH vai percorrer cada posição do vetor
concatenar.forEach((item, i) => console.log(`O numero ${item} está na posição ${i}`));

//MAP retorna o vetor remapeado para um novo vetor, pega todos os dados, altera e retorna eles.
//O vetor original continua igual.
const vetorDivido = vetorVazio.map((item) => item / 2 );

//FILTER espera uma função que filtre os dados (true or false) dentro do vetor.
//Caso seja verdadeira a condição armazenará os valores true dentro do novo vetor.
//O vetor original continua igual.
const vetorFiltrado = vetorVazio.filter((item) => item < 10);

//REDUCE utiliza-se em vetores com numeros para somar, diminuir, etc.
//O resultado é armazenado em uma variavel interna
//O vetor original continua igual
const soma = vetorVazio.reduce((soma = 0, item) => soma += item);

//FINDIDEX retorna a posição do item no vetor e retorna o mesmo.
//Retorna apenas o primeiro dado encontrado baseado na condição da função.
//Caso não encontre nada retorna -1;
//O vetor original continua igual.
const index = vetorVazio.findIndex((item) => item == 3);

//JOIN vai retornar um texto que agrupa todos os itens do array;
//É necessário definir um separador
const join = vetorVazio.join(' ');
console.log(join);
