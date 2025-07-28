/* 

Operadores de Comparação
> maior que
>= maior que ou igual a
< menor que
<= menor que ou igual a
== igualdade (valor) ----> ❌não é recomendado usar isso
=== igualdade estrita (valor e tipo)
!= diferente (valor) ----> ❌não é recomendado usar isso
!== diferença estrita (valor e tipo)

*/
console.log('expressões matemáticas - operadores de comparação');

const num1 = 10;
const num2 = '10';
const comparacao = num1 == num2;
const comparacao2 = num1 === num2; //usar sempre ===

console.log(comparacao); //true
console.log(comparacao2); //false

