//Prototypes
//Construtora -> molde (classe)

//A ELEGÂNCIA ESTÁ NO PROTOTYPE
// __proto__ que aparece no navegador é justamente esse prototype
// ele aplica um protótipo a todos os membros de uma função construtora
// aumentando performace e não precisando repetir método por método em
// 1 milhão de pessoas. Basta criar um prototype e todos podem usar o mesmo
// método!

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  // Jogando os métodos no prototype -> se ficar aqui e no prototype
  // o interno sobreescreve o prototype
  // this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

//Melhorando performace, pois usa a referência em todas as intâncias
Pessoa.prototype.informacao = 'Essa é uma função construtora de pessoa';
Pessoa.prototype.nomeCompleto = function () {
  return this.nome + ' ' + this.sobrenome;
};

//instância
const pessoa1 = new Pessoa('Luiz', 'O.'); // <-- Pessoa = Função Construtora
const pessoa2 = new Pessoa('Maria', 'A.');
const data = new Date(); // <-- Date = Função construtora

console.log(Pessoa.prototype.informacao);
console.dir(pessoa1);
console.dir(data);
