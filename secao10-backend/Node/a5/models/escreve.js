const fs = require('fs').promises;
const path = require('path');

//utilizar para salvar alguma configuração ou informação em um arquivo
module.exports = (caminho, dados) => {
  fs.writeFile(caminho, dados, { flag: 'w', encoding: 'utf8' }); // o encoding nesse caso não precisaria pq é padrão, mas poderia usar outro encoding
};

/* 
//o path vai resolver as / ou \ e o .. vai voltar uma pasta
const caminhoArquivo = path.resolve(__dirname, '..', 'teste.txt');
// flag:'w' é para apagar todo o conteúdo caso o documento já exista.
// flag:'a' faz um append, adiciona ao final.
// \n para quebrar a linha
fs.writeFile(caminhoArquivo, 'Frase 1\n', { flag: 'a', encoding: 'utf8' }); // o encoding nesse caso não precisaria pq é padrão, mas poderia usar outro encoding
*/
