const multiplicacao = require('./B/C/D/mod');
const Cachorro = require('./Z/mod2');

console.log(multiplicacao(2, 2));

const c1 = new Cachorro('Jack');
c1.latir();

const path = require('path');

//usando o path e resolve para resolver o caminho / ou \ independente do sistema operacional
console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens'));
console.log(path.resolve(__dirname, '.', '.', 'arquivos', 'imagens'));

//console.log(__filename); //ver o caminho até o arquivo
//console.log(__dirname); //ver o caminho até a pasta
