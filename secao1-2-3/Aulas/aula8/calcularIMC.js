/* 
Luiz Otávio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de 25.9949494
Luiz Otávio nasceu em 1980
*/

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';

let idade = 30;
const alturaEmMetros = 1.8;
let peso = 84;
let imc;
let anoNascimento;
imc = peso / (alturaEmMetros ** 2); // Dois ** é igual a exponenciação

anoNascimento = 2025 - idade;

console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg'); // colocando itens separados por virgula
console.log(`tem ${alturaEmMetros} de altura e seu IMC é de ${imc}`); // entre crases, mas legível, mais moderna
console.log(nome + ' nasceu em ' + anoNascimento); // concatelando com +
