//objeto Math

let num1 = 9.54578;
let num2 = Math.floor(num1); //arredonda pra baixo
console.log(num2);
let num3 = Math.ceil(num1); //arredonda pra cima
console.log(num3);
let num4 = Math.round(num1); //arredonda para o mais próximo
console.log(num4); // 10, pq está mais proximo de 10 do que de 9

//pegar o maior número de uma sequência
console.log(Math.max(1,2,3,4,1000,-40,67)); //maior
console.log(Math.min(1,2,3,4,1000,-40,67)); //menor

//Random

const randomizado = Math.random();
console.log(randomizado); //vai passar um valor entre 0 e 1, 1 nunca incluído

const aleatorio = Math.round(randomizado * (10 -5) + 5); //de 5 a 10
console.log(aleatorio);
const aleatorio2 = Math.round(randomizado * (10)); //de 0 a 10
console.log(aleatorio2);

//valor de PI
console.log(Math.PI);

//potenciação com Math
console.log(Math.pow(2, 10));

//pegando raiz quadrada
console.log(9 ** (1/2)); //valor de raiz quadrada
console.log(27 ** (1/3)); //valor de raiz cubica

/* CUIDADO 
no JS aceita divisão por 0 e não matemática e outra linguagens não
*/

console.log(100 / 0);
console.log(!!(100 / 0)); //verificando o valor boleano