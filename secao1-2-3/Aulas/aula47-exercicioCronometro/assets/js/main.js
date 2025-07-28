function relogio() {
    function criaHoraDosSegundos(segundos) {
        const data = new Date(segundos * 1000); // * 1000 para transformar milissegundos em segundos
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT' //para retirar a diferença de horas do fuso horário
        });
    }

    const relogio = document.querySelector(".relogio");
    const iniciar = document.querySelector(".iniciar");
    const pausar = document.querySelector(".pausar");
    const zerar = document.querySelector(".zerar");

    let segundos = 0;
    let timer;

    function iniciarTimer() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000);
    }

    /* Fazendo apenas um addEventListener */
    document.addEventListener('click', function (e) {
        const elemento = e.target; //acusa o elemento que estou clicando (o e.target)

        if (elemento.classList.contains('iniciar')) {
            clearInterval(timer); //primeiro parar qualquer timer antes de iniciar
            // garantindo que não terá duas inicialização do timer.
            relogio.classList.remove('pausado');
            iniciarTimer();
        }

        if (elemento.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado');
        }

        if (elemento.classList.contains('zerar')) {
            clearInterval(timer);
            relogio.classList.remove('pausado');
            segundos = 0;
            relogio.innerHTML = criaHoraDosSegundos(segundos);
        }

    });
}

relogio(); //faz uma função, envolve tudo e depois chama a função para nenhuma variável tocar o escopo global!

/*
adicionando um addEventListener em cada botão, mas não fica
performático
*/
// iniciar.addEventListener('click', function(event) {
//     clearInterval(timer); //primeiro parar qualquer timer antes de iniciar
//     // garantindo que não terá duas inicialização do timer.
//     relogio.classList.remove('pausado');
//     iniciarTimer();

// });
// pausar.addEventListener('click', function(event) {
//     setTimeout(function(){
//         clearInterval(timer);
//     },0);
//     relogio.classList.add('pausado');
// });
// zerar.addEventListener('click', function(event) {
//     setTimeout(function(){
//         clearInterval(timer);
//     },0);
//     segundos = 0;
//     relogio.innerHTML = criaHoraDosSegundos(segundos);
// });

