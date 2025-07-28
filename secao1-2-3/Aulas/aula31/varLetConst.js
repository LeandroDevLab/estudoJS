
//Let tem escopo de bloco {... bloco, dentro de {} } 
//Var só tem escopo de função
const verdadeira = true;
const falso = false;

let nome = 'Leandro'; //criando para escopo geral e interno como um todo
var nome2 = 'Leandro'; //criando
var nome2 = 'Otávio'; //redeclarando

console.log('>Escopo global');
console.log(nome, nome2);

// Exemplo de bloco aninhado
if (verdadeira) {
    // Bloco externo
    let nome = 'Leandrão'; //crianda para bloco ou blocos internos
    var nome2 = 'Otáviozão'; //redeclarando
    console.log('>Bloco externo');
    console.log(nome, nome2);

    if (verdadeira) {
        // Bloco interno ou chamano de bloco aninhado
        let nome = 'MegaLeandro'; //criada para o bloco
        var nome2 = 'MegaOtávio'; //redeclarando
        console.log('>Bloco aninhado');
        console.log(nome, nome2);
    } 
}

console.log('depois de tudo, valor da var nome2 é: ', nome2);

/* ESCOPO DE FUNÇÃO  o var é egoista, não pode ser consumido fora*/

var sobrenome = 'Oliota';

function falaOi () {
    var sobrenome = 'miranda'; //não redeclara, funciona só aqui dentro do escopo de função
    console.log(sobrenome);

    if (verdadeira) {
        var sobrenome = 'siqueira';
    }

    console.log('teste', sobrenome);
}

falaOi();
console.log('Var fora e no escopo de função: ', sobrenome);

/* 

VAR acontese HOISTING 

Hoisting em JavaScript é um comportamento em que declarações de variáveis 
e funções são "movidas" para o topo do seu escopo antes da execução do código. 
Quando você usa var, ocorre o hoisting da declaração, mas não da atribuição.


LET não acontece HOISTING, que facilita encontrar o erro, foi uma correção,
se tornando melhor que o VAR pra identificar erros!
*/