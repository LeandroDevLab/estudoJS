/* vou declarar os parametros dentro do () e separados por "," 
Contudo, todavia = se eu não passar nada ele armazena em "arguments"
mesmo eu atribuindo alguns parametros, os demais continuam sendo aceitos
e todos, com parametro previsto ou não, são armazenados em "arguments"

Parametro eu declaro na função
Argumento são os valores usados na chamada da função!

*/

function funcao(a, b, c) {
    console.log('Oi!');
    console.log(arguments); // criando um array com meus argumentos;

    /* isso é poderoso, pois posso até somar entre outras coisas */
    let total = 0;
    for (let ValorDoArgumento of arguments) { //não funciona em ArrowFunction
        total += ValorDoArgumento;
    }

    console.log('O total dos argumentos somados é de: ', total);
    console.log(a, b, c);
};

funcao(1, 2, 3, 4, 5, 6, 7, 8, 9);
funcao(1, 2); // e o ARGUMENTO "c", será um undefined

/* valores padrões de parametros */
function soma(a, b, c = 4) { //maneira moderna
    b = b || 2; //maneira antiga, ainda funciona
    console.log(a + b + c);
}

soma(2, 10);
soma(2, undefined, 20); //pulando o valor de b e pegando o valor 
// padrão da função

/* com desestruturação */
function dadosPessoais({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade);
}

dadosPessoais({nome: 'Luiz', sobrenome: 'Otávio', idade: 20});

let obj = {nome: 'Luiz', sobrenome: 'Otávio', idade: 20};
let array = ['leandro', 'sávio', 39];
dadosPessoais(obj);

function dadosPessoais2([valor1, valor2, valor3]){
    console.log(valor1, valor2, valor3);
}
dadosPessoais2(array);

//                                   ... rest operator, e precisa ser o último parâmetro
function conta(operador, acumulador, ...numeros) {
    for (let valor of numeros){
       if (operador === '+') acumulador += valor;
       if (operador === '-') acumulador -= valor;
       if (operador === '*') acumulador *= valor;
       if (operador === '/') acumulador /= valor;
    }

    console.log(acumulador);
}

conta('+', 0, 20, 30, 40, 50);
conta('-', 0, 20, 30, 40, 50);
conta('*', 1, 20, 30, 40, 50);
conta('/', 1, 20, 30, 40, 50);

// para envio de parâmetros indeterminados eu uso o Operador REST(...), 
// que vai criar um array dos argumentos.
const conta2 = (...args) => {
    console.log(args);
};
conta2('+', 0, 20, 30, 40, 50);
