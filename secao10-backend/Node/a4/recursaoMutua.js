//Listando arquivos com auxilio de FS e PATH
const fs = require('fs').promises; //ler documentação
const path = require('path'); //ler documentação

async function readdir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname);
  const files = await fs.readdir(rootDir);
  walk(files, rootDir);
}

async function walk(files, rootDir) {
  for (let file of files) {
    const fileFullPach = path.resolve(rootDir, file);
    const stats = await fs.stat(fileFullPach);

    if (/\.git/g.test(fileFullPach)) continue;
    if (/node_modules/g.test(fileFullPach)) continue;

    if (stats.isDirectory()) {
      readdir(fileFullPach);
      continue;
    }

    if (!/\.js/g.test(fileFullPach)) continue; //diferente de .js continue, listando tudo que for .js ou .json
    console.log(fileFullPach);
  }
}

readdir('/home/leandro/Documentos/projects/JS/');
/* //fs.readdir('./') <- testar com esse tbm
fs.readdir(path.resolve(__dirname))
   .then(files => console.log(files))
   .catch(e => console.log(e)); */
