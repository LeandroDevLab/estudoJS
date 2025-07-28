/* Splice faz a função do pop, shift, push e unshift */
//índice neg      -5        -4       -3       -2       -1
//indice normal    0         1        2        3        4
const nomes = ['Leandro', 'Maria', 'Joana', 'João', 'Letícia'];
const preservado = [...nomes];
//              começar    remover
//nomes.splice(    0    ,     0     ,)
//nomes.splice(indice, delete, elem1, elem2, elem3)

//simulando o .pop()
nomes.splice(-1, 1);

//simulando o .shift()
nomes.splice(0, 1);

//simulando o .push('Finaldo')
nomes.splice(Number.MAX_VALUE, 0, 'Finaldo'); //adicionando no final

//simulando o .unshift('Comecildo')
nomes.splice(0, 0, 'Comecildo');


console.log(preservado);
console.log(nomes);





//const removidos = nomes.splice(3, 0, 'Luiz'); // no 3 adicionou Luiz e jogou Joao e letícia pra frente
//const removidos2 = nomes.splice(3, 1, 'Jorge'); // no 3 remove o valor e adiciona o Jorge
//const removidos2 = nomes.splice(3, Number.MAX_VALUE); //👈 até o último valor possível existente no Array
//console.log(nomes, removidos);
//console.log(nomes, removidos2);



