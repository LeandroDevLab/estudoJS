//Async Await -> vai deixar o código bem mais limpo
function rand(min = 0, max = 3) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof msg !== 'string') {
        reject('CAI NO ERRO');
        return;
      } //como se fosse o TryCatch

      resolve(msg.toUpperCase() + ' - Passei na promise'); //só aceita um parametro
      return;
    }, tempo);
  });
}

// Cada caso será melhor ser usado uma coisa ou then catch ou async await
// esperaAi('Fase 1', rand())
//   .then(valor => {
//     console.log(valor);
//     return esperaAi('Fase 2', rand());
//   })
//   .then(fase => {
//     console.log(fase);
//     return esperaAi('Fase 3', rand());
//   })
//   .then(fase => {
//     console.log(fase);
//   })
//   .catch(erro => {
//     console.log(erro);
//   });

//👀👀😱😱🤯😱😱 fala sério, tô bege passado
async function executa() {
  try {
    const fase1 = await esperaAi('Fase 1', rand());
    console.log(fase1);
    const fase2 = await esperaAi('Fase 2', rand());
    console.log(fase2);
    const fase3 = await esperaAi('Fase 3', rand());
    console.log(fase3);
    console.log('Terminamos na fase:', fase3);
  } catch (erro) {
    console.log('Cai no erro em algumas das fases', erro);
  }
}
executa();

//pending -> pendente (sem await ou sem o then())
//fullfield -> resolvida
//rejected -> rejeitada
