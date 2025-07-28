//XMLHttpRequest
// AJAX (Asynchronous JavaScript and XML) é uma técnica que
// permite fazer requisições ao servidor sem precisar recarregar
// a página inteira.
// AJAX é menos usado, hoje mais usado o AXIOS👀👀👀👀👀👀
const ajaxRequest = obj => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest(); //construtor do XML
    //verbo HTTP get
    xhr.open(obj.method, obj.url, true); //mandou um open('GET', Url, true)
    xhr.send();

    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    });
  });
};

//não é uma boa prática adicionar um evento em cada elemento em muitos elementos
//adicionando um addEventListener no document como um todo é uma boa prática
document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();

  if (tag === 'a') {
    e.preventDefault();
    carregaPagina(el);
  }
});

async function carregaPagina(el) {
  try {
    const href = el.getAttribute('href');

    const objConfig = {
      method: 'GET',
      url: href,
    };

    const response = await ajaxRequest(objConfig);
    carregaResultado(response);
  } catch (erro) {
    console.log(erro);
  }
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}

// MODO ANTIGO
// const ajaxRequest = obj => {
//   const xhr = new XMLHttpRequest(); //construtor do XML
//   //verbo HTTP get
//   xhr.open(obj.method, obj.url, true); //mandou um open('GET', Url, true)
//   xhr.send();

//   xhr.addEventListener('load', () => {
//     if (xhr.status >= 200 && xhr.status < 300) {
//       obj.success(xhr.responseText);
//     } else {
//       obj.error(xhr.statusText);
//     }
//   });
// };

// //não é uma boa prática adicionar um evento em cada elemento em muitos elementos
// //adicionando um addEventListener no document como um todo é uma boa prática
// document.addEventListener('click', e => {
//   const el = e.target;
//   const tag = el.tagName.toLowerCase();

//   if (tag === 'a') {
//     e.preventDefault();
//     carregaPagina(el);
//   }
// });

// function carregaPagina(el) {
//   const href = el.getAttribute('href');

//   const objConfig = {
//     method: 'GET',
//     url: href,
//     success(response) {
//       carregaResultado(response);
//     },
//     error(errorText) {
//       console.log(errorText);
//     },
//   };
//   //console.log(href);
//   ajaxRequest(objConfig);
// }

// function carregaResultado(response) {
//   const resultado = document.querySelector('.resultado');
//   resultado.innerHTML = response;
// }
