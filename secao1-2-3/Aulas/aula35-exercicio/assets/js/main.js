
const elementos = [
    {tag: 'p', texto: 'Qualquer texto que você quiser.'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
];

/* solução do professor */
const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i]; //desestruturação
    let tagCriada = document.createElement(tag);
    tagCriada.innerText = texto; // pode ser innerHTML ou innerText, já que é só texto
    div.appendChild(tagCriada);
}

/* 
for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    let textoCriado = document.createTextNode(texto);
    tagCriada.appendChild(textoCriado); 
    div.appendChild(tagCriada);
} 
*/

container.appendChild(div);


/* 
TESTANDO os passos

const criarSpan = document.createElement('span');
criarSpan.innerHTML = 'TESTE'
container.appendChild(criarSpan); 
*/

/* minha solução */
/* const sessao = document.querySelector(".container");

function adicionaSolicitado (tag, texto) {
    const adicionar = `<${tag}> ${texto} </${tag}>`;
    sessao.innerHTML += adicionar ;
    return adicionar;
}

for (let i = 0; i < elementos.length; i++) {
    let tag = elementos[i].tag;
    let texto = elementos[i].texto;
    adicionaSolicitado(tag, texto);
} */
