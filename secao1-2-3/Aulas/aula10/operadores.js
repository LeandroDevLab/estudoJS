/* 
Aritméticos
+ Adição / Concatenação
- / * operações somente
** potenciação
% retorna o resto da divisão inteiro
*/

const num1 = 9;
const num2 = 4;
const num3 = parseInt('5.2'); //retornará o número inteiro 5
const num4 = parseFloat('5.2');//retornará o número fracionado 5.2

console.log(num1 % num2);

let contador = 1;
contador++; //primeiro mostra o valor depois incrementa
++contador; //primeiro incrementa depois mostra o valor
console.log(contador++); // pós, não é uma boa prática usar assim
console.log(++contador); // pré, não é uma boa prática usar assim

let passo = 2;
contador += passo; //contador = contador + passo;
console.log(contador);
contador += passo; //contador = contador + passo;
console.log(contador);
contador += passo; //contador = contador + passo;
console.log(contador);

/*
com qualquer operador
+=
*=
-=
**=
/=

NaN - Not a Number
*/

contador *= passo; //contador = contador + passo;
console.log(contador);

