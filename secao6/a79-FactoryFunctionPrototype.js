/* Desacoplando os métodos */
/* 
Composição - Mixin é um padrão usado para compartilhar funcionalidades 
entre múltiplos objetos ou classes, sem usar herança múltipla 
(que JavaScript não suporta nativamente). Você basicamente mistura 
métodos de vários objetos em um só. 
*/
const falar = {
  falar() {
    console.log(`${this.nome} está falando.`);
  },
};

const comer = {
  comer() {
    console.log(`${this.nome} está comendo.`);
  },
};

const beber = {
  beber() {
    console.log(`${this.nome} está bebendo.`);
  },
};

// Forma 1 - mais moderna (ES6+) e concisa
// const pessoaPrototype = { ...falar, ...comer, ...beber };

// Forma 2 - mais antiga (ES5+), funciona em navegadores mais antigos, mais verbosa
const pessoaPrototype = Object.assign({}, falar, comer, beber);

/* Factory Function */
function criaPessoa(nome, sobrenome) {
  /* referenciando o prototype e os atributos */
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
  });
}

const p1 = criaPessoa('Luiz', 'Otávio');
const p2 = criaPessoa('Maria', 'A.');
console.log(p2);
