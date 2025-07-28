//tipos de dados primitivos (string, number, undefined, null, boolean, symbol)

const nome = 'Luiz'; //string
const nome1 = "Luiz"; //string
const nome2 = `Luiz`; //string
console.log(typeof nome);

const num1 = 10; //number
const num2 = 10.5; //number
console.log(typeof num1);

let nomeAluno; //undefined -> não aponta pra local nenhum na memória
let sobrenomeAluno = null; // Nulo -> não aponta pra local nenhum na memória
/* Nulo é diferente de undefined, nulo é usado explicitamente para alguma coisa
que vc queira anular, já o undefined pode ser criado temporariamente e depois eu
atribuo o valor posteriormente*/

const aprovado = true; //boolean
console.log(typeof aprovado, aprovado);

let a = 2;
let b = a;
console.log(a, b); //2 , 2

a = 3;
console.log(a, b); //3 , 2
