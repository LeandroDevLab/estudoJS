/* diz que é bem mais simples */

const frutas = ['Pera', 'Maçã', 'Uva']; //vetor

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]); 
// }

/* For In -> lê os indices ou chaves de objeto */
for (let i in frutas) {
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: '39',
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave]);
}


/* Relembrando */
// console.log(pessoa.nome, '1');
// console.log(pessoa['nome'], '2');
// const variavel = 'nome';
// console.log(pessoa[variavel], '3'); //acessando dinamicamente



