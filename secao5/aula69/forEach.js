/* FOR classico
for in
for of
só disponível em array o forEach */

const a1 = [27, 1, 83, 59, 91, 16];

for(let i = 0; i < a1.length; i++) {
    console.log(a1[i], i, a1);
}

console.log('===separando===');

a1.forEach(function(valor, indice, arrayCompleto) {
    console.log(valor, indice, arrayCompleto);
});

let total = 0;

/* simulando um reduce */
a1.forEach( valor => total+= valor);
const soma = a1.reduce((ac, valor) => ac += valor);
console.log(total, soma);
