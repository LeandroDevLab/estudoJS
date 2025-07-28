/* 
Primitivos Imutavéis-> string, number, boolean, undefined,
null, (bigint, symbol) -->> (apenas copiados)

Referência (mutável - array object, function) -->> ligados por referência
*/

let a = 'A';
let b = a; //copiando o valor de a para b;
console.log(a, b);

a = 'Outra coisa'
console.log(a, b); //b não foi afetado

let c = [1, 2, 3];
let d = c; //apontam para o mesmo valor
let e = [...d]; //agora não aponta para o mesmo lugar, só fiz uma copia
console.log(c, d, e); 

c.push(4);
console.log(c, d, e);

d.unshift(0); //como apontam para o mesmo lugar vai afetar os dois c e d
console.log(c, d, e); //valores por referência
console.log(c, d, e); //valores por referência
console.log('================='); //valores por referência

const A = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
};

const B = A;
console.log(B);
const C = {...A};

A.nome = 'João';
console.log(A, B, C); // C é uma cópia, não é afetado por mudança de A e B, 
// pois os mesmos apontam para o mesmo lugar na memória!



