/* Revisão rápida sobre Array */
// Valores por referência
const nomes = ['Leandro', 'Maria', 'Joana', 'João', 'Letícia'];
const nomes2 = new Array('Leandro', 'Maria, Joana'); // funciona igual, 
// mas pouco usado e nem precisa, só saber que existe

const novo = nomes; //estão ligados e acessam a mesma array, mudar um reflete no outro.

/* 
O Spread Operator (...) significa literalmente "espalhar" ou "desempacotar" 
os itens de um array, objeto ou até string em elementos individuais.
*/
const novoNovo = [...nomes]; //agora pega os dados e não acessam o mesmo lugar

nomes[2] = 'Guliver';
delete nomes[1];
const removido = novo.pop(); //remove um item (o último)
nomes.shift();
nomes.push('Jorge'); // atribui no final (muito usado)
nomes.unshift('Joselma'); //adiciona no começo, afeta o indice do array, pouquissimo usado

console.log(nomes); // deleta e deixa um espaço vazio, não altera os indices dos outros
console.log(novo); // deleta e deixa um espaço vazio, não altera os indices dos outros
console.log(novoNovo);

//Fatiando, pegando pedaços
const fatia = nomes.slice(1, 4); // vai pegar indice 1, 2 e 3 (no 4 para e não pega)
const fatia1 = nomes.slice(0, -1); // do começo até antes do ultimo (remove o ultimo)
const fatia2 = nomes.slice(0, -2); // do começo até o antipenultimo (remove 2 ultimos)
const fatia3 = nomes.slice(0, -3); // começo ate ... (remove 3 ultimos)
console.log('fatia igual a: ', fatia);
console.log('fatia igual a: ', fatia1);
console.log('fatia igual a: ', fatia2);
console.log('fatia igual a: ', fatia3);

/* separando e dividindo */

const nomeCompleto = 'Leandro Sávio Oliota Ribeiro';
const nomeCompleto2 = 'Leandro_Sávio_Oliota_Ribeiro';
const partesDoNome = nomeCompleto.split(' '); // separando por caractere selecionado
const partesDoNome2 = nomeCompleto2.split('_'); // separando por caractere selecionado
console.log(partesDoNome, partesDoNome2);
const numeroVirgula = '16,4';
const parteNum = numeroVirgula.split(',');
console.log(parteNum.join('.')); //vai unir, separando por .
