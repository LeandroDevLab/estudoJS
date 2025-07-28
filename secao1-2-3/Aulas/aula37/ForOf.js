/* 
For clássico - geralmente com iteráveis (array ou strings)
For in - retorna índice ou chave (array, strings, objetos)
For of - Retorna o VALOR em si, com iteráveis (array ou strings)
*/

const nomes = ['Luiz', 'Otávio', 'Miranda'];

/* aqui retorna o indice e eu chamo o valor */
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]); // somente o i retorna o indice
}

console.log('=================')

/* aqui retorna o indice e eu chamo o valor */
for (let i in nomes) {
    console.log(i);
}

console.log('=================')

/* AQUI já retorna o valor direto e não o indice👀 */
for (let i of nomes) {
    console.log(i); //i = retorna o valor
}

console.log('=================')

nomes.forEach(function (valor, indice, arrayCompleto) {
    console.log(valor, indice, arrayCompleto);
});
