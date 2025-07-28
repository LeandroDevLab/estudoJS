/* reduce consegue fazer map e filter, mas não é ideal */

const numeros = [27, 1, 83, 59, 91, 16, 6, 48, 72, 35, 61, 5, 88, 42, 13, 97, 54];

// ESSA É A UTILIZAÇÃO REAL DO REDUCE -> reduzir o array a um valor
const total = numeros.reduce(function (acumulador, valor, indice, arrayCompleto) {
     console.log(acumulador, valor);
     acumulador += valor;
     return acumulador;
}, 0); //valor inicial do acumulador;
console.log(total);

/* faça isso com filter e não com reduce, só mostrando que pode */
const numerosPares = numeros.reduce( (acumulador, valor) => {
    if (valor % 2 === 0) acumulador.push(valor);
    return acumulador;
}, []);
const dobroDosValores = numeros.reduce ((acumulador, valor) => {
    acumulador.push(valor * 2);
    return acumulador;
}, []);
/* só pra fazer que é possível, mas não faz sentido */


/* "muito mai faci" */
const numerosParesFilter = numeros.filter ( valor => valor % 2 === 0);
const dobroDosValoresMap = numeros.map( valor => valor * 2);

console.log(numerosPares, numerosParesFilter);
console.log(dobroDosValores, dobroDosValoresMap);

const pessoas = [
  { nome: 'Lucas', idade: 25 },
  { nome: 'Mariana', idade: 30 },
  { nome: 'João', idade: 50 },
  { nome: 'Ana', idade: 51 },
  { nome: 'Carlos', idade: 35 },
  { nome: 'Beatriz', idade: 60 }
];

const maisVelha = pessoas.reduce((acumulador, valor) => {
    if(acumulador.idade > valor.idade) return acumulador; // o valor de acumulador retorna a ser o acumulador
    return valor; // se o valor for maior retorna o valor, que passa agora a ser o novo acumulador para continuar o loop de checagem
});

console.log(maisVelha);