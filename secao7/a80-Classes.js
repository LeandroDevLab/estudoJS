/* Iguais e fazem e são iguais a Factory Function */

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  // Aqui na classe eu não preciso tirar os métodos e linkar, já foi feito isso
  // automaticamente, já é um comportamento da class
  falar() {
    console.log(`${this.nome} está falando.`);
  }
}

/* Construction Function */
function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function () {
  console.log(`${this.nome} está falando.`);
};

/* instanciando uma pessoa -> criando a partir da classe */
const p1 = new Pessoa('Luiz', 'Miranda');
const p2 = new Pessoa2('Luiz', 'Miranda');

console.log(p1, p2);
