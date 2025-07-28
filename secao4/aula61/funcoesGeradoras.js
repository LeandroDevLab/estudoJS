/* Funções geradoras = avaliação preguiçosa */

function* geradora1() {
    // código qualquer
    yield 'valor 1';
    // código qualquer
    yield 'valor 2';
    // código qualquer
    yield 'valor 3';
}

const g1 = geradora1();

function* geradora2() {
    let i = 0;

    while (true) {
        yield i;
        i++;
    }
}

function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4(){
    yield* geradora3(); //já usa a geradora 3 em toda sua extensão
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();

// for(let valor of g4) {
//     console.log(valor);
// }

function* geradora5(){
    yield function () {
        console.log('vindo do Yield 1');
    }
    yield function () {
        console.log('vindo do Yield 2');
    }
    yield function () {
        console.log('vindo do Yield 3');
    }
}

const g5 = geradora5();
const funcao1 = g5.next().value;
const funcao2 = g5.next().value;
const funcao3 = g5.next().value;

funcao1();
funcao1();
funcao2();
funcao3();
funcao1();

// //o For sabe quandas vezes a função geradora pode ser chamada
// for (let valor of g1) {
//     console.log(valor);
// }

// console.log(g1); // Object [Generator] {}
// console.log(g1.next()); //é um método dentro da função geradora
// console.log(g1.next().value); //é um método dentro da função geradora
// console.log(g1.next().value); //é um método dentro da função geradora
// console.log(g1.next()); 