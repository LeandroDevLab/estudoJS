//Firts-class objects (Objetos de primeira classe)

/*
 FUNÇÕES 
 1️⃣- declaração de função (function "hoisting"👀💖) : posso chamar a 
    função antes ou depois que irá funcionar normalmente
*/

/* Declaração de função normal e tem HOISTING */
falaOi();

function falaOi() {
    console.log('Oi!');
}

//2️⃣ - Function Expression
// souUmDado(); não posso chamar ela antes
const souUmDado = function () {
    console.log('Sou um dado.');
};

souUmDado(); // não tem HOISTING, só pode ser chamado depois!

function executaFuncao(funcao) {
    console.log('vou executar a função abaixo: ')
    funcao();
};

executaFuncao(souUmDado); // Sou um dado.

//3️⃣ - Arrow function 👀 não tem arguments armazenador, ver proxima aula
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};

funcaoArrow();

//Dentro de um objeto (método de um objeto)
const obj = {
    //forma 1 - clássica (método dentro de um objeto)
    falar: function () {
        console.log('Função dentro de objeto, estou falando...');
    },
    //forma 2 - atualizada (método dentro de um objeto)
    dizer() {
        console.log('Outra função tbm dentro de objeto, estou dizendo...')
    }
};

obj.falar();
obj.dizer();
