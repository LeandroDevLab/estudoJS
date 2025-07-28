
const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

/* pegando os estilos computados do css do body */
const estilosBody = getComputedStyle(document.body);
const corDeFundoDoBody = estilosBody.backgroundColor;

for (let p of ps) {
    p.style.backgroundColor = corDeFundoDoBody;
    p.style.color = '#fff'
}

/* 
Vai pegar todos os p dentro de paragrafo em um NodeList, similar a uma array
*/