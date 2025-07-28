//Promises -> promessa
//soluções antigas eram callBack, quando os dados estivessem prontos
function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') reject('BAD VALUE'); //como se fosse o TryCatch

    setTimeout(() => {
      resolve(msg); //só aceita um parametro
    }, tempo);
  });
}

// resolve -> .then()
// reject -> .catch()

esperaAi('Frase 1 -> conexão com o BD', rand(1, 3))
  .then(resposta => {
    console.log(resposta);
    return esperaAi('Frase 2 -> Buscando dados da BASE', rand(1, 3)); // return uma promisse -> resposta 2
  })
  .then(resposta2 => {
    console.log(resposta2);
    return esperaAi('Frase 3 -> Tratando os dados da BASE', rand(1, 3)); // return uma promisse -> resposta 2
  })
  .then(resposta3 => {
    console.log(resposta3);
    return esperaAi(22222, rand(1, 3));
  })
  .then(resposta4 => {
    console.log(resposta4);
    console.log('Após o erro nada mais será exibido');
  })
  .then(() => {
    console.log('Exibindo os dados na tela.');
  })
  .catch(error => {
    console.log('ERRO:', error);
  });

console.log(
  'Como não sou promessa e não preciso de carregamento, serei exibido primeiro'
);
/* 
function esperaAi(msg, tempo, cb) { // tinha que ter o cb (Callback como parametro)
  setTimeout(() => {
    console.log(msg);
    if (cb) cb();
  }, tempo);
}

function antigamenteComCallback() {
  //como resolvia antigamente, callback (callback hell)
  console.log('=====com callback function=====');
  esperaAi('Frase 1', rand(1, 3), function () {
    esperaAi('Frase 2', rand(1, 3), function () {
      esperaAi('Frase 3', rand(1, 3));
    });
  });
}
antigamenteComCallback(); 


 
// Callback diminuindo a identação -> substituída no JS com Promises
esperaAi('Frase 1', rand(1, 3), f1Callback);

function f1Callback(callBack) {
  esperaAi('Frase 2', rand(1, 3), f2Callback);
}

function f2Callback() {
  esperaAi('Frase 3', rand(1, 3));
} 
*/
