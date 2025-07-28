//Filter, map, reduce -> as mais importantes (vai usar demais)

//FILTER -> sempre retorna array com mesma quantidade de elementos ou menos
const numeros = [27, 1, 83, 59, 91, 16, 6, 48, 72, 35, 61, 5, 88, 42, 13, 97, 54];

// function callbackFilter (valor, indice, arrayCompleto) {
//   if (valor > 10) {
//     return true;
//   } else {
//     return false;
//   } 
// }
//const maioresQue10 = numeros.filter(callbackFilter); //vai passar em todos os elementos


//function callbackFilter (valor) { //removendo indice e array completo (pois não estou usando)
//  console.log(valor, indice, arrayCompleto); //retorna todos os valores do array, do indice, arrayCompleto em cada item
//  return valor > 10; // isso é igual a condição debaixo, pois se for menor, vai ser true, se for maior vai ser false.
//}
//const maioresQue10 = numeros.filter(callbackFilter); //vai passar em todos os elementos

const maioresQue10 = numeros.filter((valor) => valor > 10); //vai passar em todos os elementos

console.log(maioresQue10);

//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com a
const pessoas = [
  { nome: 'Lucas', idade: 25 },
  { nome: 'Mariana', idade: 30 },
  { nome: 'João', idade: 50 },
  { nome: 'Ana', idade: 51 },
  { nome: 'Carlos', idade: 35 },
  { nome: 'Beatriz', idade: 60 }
];

const pessoasComNomeGrande = pessoas.filter((obj) => obj.nome.length >= 5);
const pessoasMaisVelhas = pessoas.filter(obj => obj.idade > 50);


const terminamComA = pessoas.filter(valor => {
  return valor.nome.toLowerCase().endsWith('a'); //😒 endsWith: termina com ('a');
});


//console.log(pessoasComNomeGrande);
//console.log("Pessoas com mais de 50: ", pessoasMaisVelhas)
console.log("Pessoas com nome termina com a ", terminamComA)
