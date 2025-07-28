//.. para voltar uma pasta
const multiplicacao = require('../B/C/D/mod');

//console.log(multiplicacao(2,6));

module.exports = class Cachorro {
   constructor(nome) {
      this.nome = nome;
   }

   latir() {
      console.log(`${this.nome} está fazendo au au!`);
   }
};
