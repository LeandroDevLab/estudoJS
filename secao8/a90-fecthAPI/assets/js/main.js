//Fetch API
// const ajaxRequest = obj => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest(); //construtor do XML
//     //verbo HTTP get
//     xhr.open(obj.method, obj.url, true); //mandou um open('GET', Url, true)
//     xhr.send();

//     xhr.addEventListener('load', () => {
//       if (xhr.status >= 200 && xhr.status < 300) {
//         resolve(xhr.responseText);
//       } else {
//         reject(xhr.statusText);
//       }
//     });
//   });
// };

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
    const response = await fetch(href);

    if (response.status !== 200) throw new Error('ERRO 404!');

    const html = await response.text();
    carregaResultado(html);
  } catch (e) {
    console.error(e);
  }
}
// function carregaPagina(el) {
//   const href = el.getAttribute('href');

//   fetch(href)
//     .then(response => {
//       if (response.status !== 200) throw new Error('ERRO 404!');
//       return response.text();
//     })
//     .then(html => carregaResultado(html))
//     .catch(e => console.error(e));
// }

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}

/* //já me retorna por padrão uma Promise
fetch('pagina1.html')
  .then(resposta => {
    if (resposta.status !== 200) throw new Error('ERRO 404 NOSSO');
    return resposta.text(); //outra promise, logo outro then
  })
  .then(html => console.log(html))
  .catch(e => console.error(e)); */
