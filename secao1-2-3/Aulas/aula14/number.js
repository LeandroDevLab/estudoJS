/* Manipulando número em JavaScript */
//Padrão IEEE 754-2008 -> Tem uma certa imprecisão
let num6 = 0.7;
let num7 = 0.1;
console.log(num6 + num7); // vai aparecer 0.79999 e deveria aparecer 0.8
let conta1 = num6 + num7 + num7 + num7;
console.log(conta1); //deveria ser 1, mas é 0.9999
//corrigindo
conta1 = parseFloat(conta1.toFixed(2)); //parseFloat ou Number
let conta2 = Number((num6 * 3 - num7).toFixed()); //tem que ter o toFixed() com ou sem o 2 deu certo, vai testando
console.log(conta1);
console.log(conta2);


let num1 = 1; //number
let num2 = 2.5; //number
let num3 = 1500; //typeOf number
let num4 = 10.5738478595;
let num5 = 10 / 3;

console.log(num1.toString() + num2); // toString(), converto temporariamente o número para String, para um uso específico
console.log(num1); // vou percerber com o num1 continua number, foi alterado somente naquela ocasião

//convertendo para binário
console.log(num3.toString(2)); //obrigatoriamente o valor 2

//fixando as casas decimais
console.log(num4.toFixed(2)); // dentro o número de casas decimais

//verificando se um número é um inteiro
console.log(Number.isInteger(num1)); //retornará true ou false
console.log(Number.isFinite(num5)); //verificando se é finito
num5 = Infinity;
console.log(Number.isFinite(num5)); //verificando se é infinito ou NaN

//verificando se a conta é inválida

let temp = num1 * 'Olá';
console.log(Number.isNaN(temp)); // retornará verdadeiro, pois a conta é inválida!