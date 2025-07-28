/* Dobre os valores do número 
Usa o valor do array original para criar um novo array modificado
*/
const numeros = [27, 1, 83, 59, 91, 16, 6, 48, 72, 35, 61, 5, 88, 42, 13, 97, 54];
// const numerosEmDobro = numeros.map(function (valor, indice, arrayCompleto) {
//     return valor * 2;
// });

/* Convertendo para ArrowFunction */
const numerosEmDobro = numeros.map(valor => valor * 2);
//console.log(numeros, numerosEmDobro)

/* só testando */
const maiorQue90 = numeros.filter(valor => valor > 90);
//console.log(maiorQue90);


const pessoas = [
  { nome: 'Lucas', idade: 25 },
  { nome: 'Mariana', idade: 30 },
  { nome: 'João', idade: 50 },
  { nome: 'Ana', idade: 51 },
  { nome: 'Carlos', idade: 35 },
  { nome: 'Beatriz', idade: 60 }
];

const nome = pessoas.map(obj => obj.nome);
const idades = pessoas.map (obj => {
    //forma 1 - deletando o obj.nome;
    //delete obj.nome; // deletar um atributo do objeto
    //return obj;
    return {idade: obj.idade};
});
console.log(idades);
const stringNome = nome.join(' ');
console.log(stringNome);

/* o objeto {} foi envolvido com () para mostrar que é uma expressão e não ser a {} da arrowfunction ou function */
const idDoObj = pessoas.map((obj, indice) => ({ID: indice + `${obj.idade}2025`, nome: obj.nome, idade: obj.idade}));
console.log(idDoObj);

const idDoProfessor = pessoas.map((obj, indice) => {
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    const newObj = {...obj}; //cópia do obj pessoas, para não alterar o objeto original
    newObj.id = indice + numeroAleatorio; // para adicionar no objeto
    return newObj;
});

console.log(pessoas, idDoProfessor);





/* retornando o array aleatório */
function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // índice aleatório entre 0 e i
    [array[i], array[j]] = [array[j], array[i]];  // troca os elementos
  }
  return array;
}

// Exemplo de uso:
const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const numerosEmbaralhados = embaralhar([...numeros2]); // Usa spread para não alterar o original

console.log(numerosEmbaralhados);

