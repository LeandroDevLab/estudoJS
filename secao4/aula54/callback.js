const delay = function (min = 1000, max = 3000) {
    const num = Math.random() * (max-min) + min;
    return Math.floor(num);
}

function f1(callback) {
    setTimeout(function(){
        console.log('f1');
        if (callback) callback();
    }, delay());
}
function f2(callback) {
    setTimeout(function(){
        console.log('f2');
        if (callback) callback();
    }, delay());
}
function f3(callback) {
    setTimeout(function(){
        console.log('f3');
        if (callback) callback();
    }, delay());
}

// Corrente de Callback
// f1(function(){
//     f2(function(){
//         f3(function(){
//             console.log('Olá mundo!');
//         })
//     })
// });

// Para diminuir a identação
f1(f1Callback); //as promises vão subistituir esses callback dessa forma

function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
    f3(f3Callback);
}

function f3Callback() {
    console.log('Olá mundo!');
}


// Sem callback devido ao tempo de processamento eu poderia perder a ordem
// de execução, mas a estrutura acima corrige isso, 
// pois criei uma ordem (callback)
// f1();
// f2();
// f3();
// console.log('Olá mundo!');

