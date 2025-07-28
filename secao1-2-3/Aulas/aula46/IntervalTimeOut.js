/* setInterval e setTimeout */

function mostraHora () {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

// Criar uma função que execulta outra função no setInterval, mas não é comum
// function consoleHora () {
//     console.log(mostraHora());
// }

// setInterval(consoleHora, 2000); //passando o tempo em milissegundos 2s = 2000ms

/* mais comum é criar uma função anônima function () */
// setInterval(function () {
//     console.log(mostraHora());
// }, 2000);
// // para parar a rodagem do código : Ctrl + Alt + M

const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000);

/* só executa uma vez */
setTimeout(function() {
    clearInterval(timer);
}, 5000); //faz com que o Intervalo de execução seja limpo em 10s ou 10000ms

setTimeout(function(){
    console.log('Hello World!'); //curioso e testei aqui tbm
}, 3000);
setTimeout(function(){
    console.log('Hello World!');
}, 6000);

