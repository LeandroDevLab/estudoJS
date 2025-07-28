/* Funções */
// funções podem ou não retornar valores

/*
é melhor criar várias funções que fazem coisas específicas 
do que criar um função que faz muita coisa. 
*/

// arrow function linha
const raiz = n => n ** 0.5; // ;  👀 nem é obrigatório aqui 🤯

/*
Arrow Function
const raiz = (n) => { //função anonima, dentro de uma variável
    return n ** 0.5;
}; // ;  👀 é obrigatório aqui */

/* 
Arrow Function substituiu essa forma de fazer funções, mas ainda funciona
const raiz = function(n) { //função anonima, dentro de uma variável
    return n ** 0.5;
}; // ;  👀 é obrigatório aqui 
*/

console.log('====== Função dentro de uma variável chamada: raiz ======'); 
console.log(raiz(9));
console.log(raiz(16));


console.log('====== Funções de soma ======');
function soma(x = 0, y = 0) { //enviando valor padrão caso não seja inserido informações
    const resultado = x + y;
    return resultado; //depois do return encerra tudo que vier após!
    console.log('Hello Word!'); // não será executada
}

console.log(soma(2,2));
console.log(soma(2,4));
console.log(soma()); // não será mais NaN -> definido valores padrões

/* function soma(x, y) {
    const resultado = x + y;
    return resultado; //depois do return encerra tudo que vier após!
    console.log('Hello Word!'); // não será executada
}

console.log(soma(2,2));
console.log(soma(2,4));
console.log(soma()); // NaN -> os dados não foram enviados */
console.log('====== Funções de saudação ======');
function saudacao(nome) {
    return `Bom dia ${nome}!`
}

const variavel = saudacao('Luiz');
console.log(variavel); 

/* function saudacao(nome) { //nome é um parametro
    console.log(`Bom dia ${nome}!`);
    return 123456; //adicionei um retorno
}

const variavel = saudacao('Luiz'); //vai executar a ação e vai receber o valor do retorno
console.log(variavel);  */