//Promises -> promessa
//soluções antigas eram callBack, quando os dados estivessem prontos
function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== 'string') {
        reject('Caí no erro!');
        return;
      } //como se fosse o TryCatch

      resolve(msg.toUpperCase() + ' - Passei na promise'); //só aceita um parametro
      return;
    }, tempo);
  });
}

function baixaPagina() {
  const emCache = true;

  if (emCache) {
    //return Promise.resolve('Página em cache'); // Resolvido cai no .then()
    return Promise.reject('Página em cache'); // Rejeitado cai no .catch()
  } else {
    return esperaAi('Baixei a página', 3000);
  }
}

baixaPagina()
  .then(resposta => {
    console.log(resposta);
  })
  .catch(e => console.log('ERRO', e));

//Promise.all Promise.race Promise.resolve Promise.reject
// const promises = [
//   //'Primeiro valor',
//   esperaAi('Promise 1', 3000),
//   esperaAi('Promise 2', 500),
//   esperaAi('Promise 3', 1000),
//   esperaAi(22222, 1000), //só cai no erro se for executado primeiro
//   //'Outro valor',
// ];

// //returna a primeira que foi resolvida -> Promise 2, 500ms
// Promise.race(promises)
//   .then(function (valor) {
//     console.log(valor);
//   })
//   .catch(function (erro) {
//     console.log(erro);
//   });

// Percorre todos
// Promise.all(promises)
//   .then(function (valor) {
//     console.log(valor);
//   })
//   .catch(function (erro) {
//     console.log(erro);
//   });
