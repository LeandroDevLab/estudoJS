const path = require('path');
const caminhoArquivo2 = path.resolve(__dirname, 'teste.json');
const escreve = require('./models/escreve');
const ler = require('./models/ler');

// const pessoas = [
//   { nome: 'João' },
//   { nome: 'Leandro' },
//   { nome: 'Tiago' },
//   { nome: 'Paulo' },
// ];

// const json = JSON.stringify(pessoas, '', 2);

// escreve(caminhoArquivo2, json);

//Sempre que faz uma função async a gente uma promessa,
// então tem que tratar (ou faz outra função pra receber ou faz um .then().catch())
async function lerArquivo(caminho) {
  const dados = await ler(caminho);
  renderizaDados(dados);
}

function renderizaDados(dados) {
  dados = JSON.parse(dados);
  dados.forEach(val => console.log(val.nome)); //.nome já que estou reinterando a array
  console.log(dados); //array de objetos
}

lerArquivo(caminhoArquivo2);

/* 
//solucação com função
async function lerArquivo(caminho) {
  const dados = await ler(caminho);
  renderizaDados(dados);
}

function renderizaDados(dados) {
  console.log(dados);
}

lerArquivo(caminhoArquivo2); 
*/

/* //solução com then()
async function lerArquivo(caminho) {
  const dados = await ler(caminho);
  return dados;
}
const dadosArquivo = lerArquivo(caminhoArquivo2).then(dados =>
  console.log(dados)
); */
