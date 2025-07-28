/* Arrays lista de coisa */
//indexação
//index      012345678910
const nome = 'Luiz Otávio'

//index           0        1       2
const alunos = ['Luiz', 'Maria', 'João']; //boa prática de programação é usar um tipo de primitivo para cara ARRAY
//dentro dos arrays cabem de tudo, numeros, string, objetcs, funções...

console.log(alunos);
console.log(alunos[1]);

alunos[0] = 'Leandro';
console.log(alunos);

alunos[3] = 'Luiza';
console.log(alunos);

alunos[alunos.length] = 'Jorge';
console.log(alunos);
alunos.push('Otávio'); //adicionar no final
console.log(alunos);
alunos.unshift('Leandrinho'); //adicionar no começo
console.log(alunos);

//criando variável de alunos removidos
let removido = alunos.pop() + ' '; //pop remove do final
// + ' '; só para adicionar um espaço
console.log(removido);
console.log(alunos);

removido += alunos.pop();
console.log(removido); 
console.log(alunos);
removido += alunos.shift(); //remove do começo
console.log(removido); 
console.log(alunos);

//pegando fatias do array

console.log('Fatia selecionada: ' + alunos.slice(0,3)); // contudo o indice 3 não entra na exibição, 
console.log('Fatia selecionada: ' + alunos.slice(0,-1)); // todo o tamanho do array -1

console.log(typeof alunos); //object
console.log(alunos instanceof Array); //true
