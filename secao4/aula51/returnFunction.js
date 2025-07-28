//return - retorna um valor e termina a função

function soma(a, b) {
    return a + b;
};

//criaPessoa e criaPessoa2 funcionam igual
function criaPessoa(nome, sobrenome) {
    return { nome: nome, sobrenome: sobrenome };
}

function criaPessoa2(nome, sobrenome) {
    return { nome, sobrenome };
}

const pessoa1 = criaPessoa('Luiz', 'Otávio'); //mais fácil
const pessoa2 = {
    nome: 'Leandro',
    sobrenome: 'Sávio'
};

console.log(pessoa1);
console.log(typeof pessoa1);
console.log(pessoa2);
console.log(typeof pessoa2);

/* Qual a utilidade disso? Ver proxima função */
function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const olaMundo = falaFrase('Olá'); //a função returna uma função,
// logo a constante olaMundo virou uma função, que tbm aceita parametro
// e tem previsão para isso na função interna falaResto
console.log(olaMundo('mundo!'));

// Uso de função dentro de função
// function duplica(n){
//     return n * 2;
// }
// function triplica(n){
//     return n * 3;
// }
// function quadriplica(n){
//     return n * 4;
// }
function criaMultiplicador(multiplicador) {
    // multiplicador no escopo pai
    return function(n) {
        return n * multiplicador;
    }
}

const duplica = criaMultiplicador(2); 
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));



