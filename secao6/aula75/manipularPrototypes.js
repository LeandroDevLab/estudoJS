//Manipulando Prototypes

// // new Object -> Object.prototype
// const objA = {
//   chaveA: 'A',
//   // __proto__: Object.prototype
// };
// const objB = {
//   chaveB: 'B',
//   // __proto__: objA
// };
// const objC1 = {
//   chaveC: 'C',
//   // __proto__: objB
// };

// //outra forma de criar o objeto C
// const objC = new Object();
// objC.chaveC = 'C';

// Object.setPrototypeOf(objB, objA);
// Object.setPrototypeOf(objC, objB);
// console.log(objB.chaveA);

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - this.preco * (percentual / 100);
};
Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};

const p1 = new Produto('caneca', 5);

// Literal
const p2 = {
  nome: 'camisa',
  preco: 15,
};
// atribuindo o prototype de Produto ao objeto literal p2
Object.setPrototypeOf(p2, Produto.prototype);

// p1.desconto(10);
// p1.aumento(10);
// p2.aumento(50);
// console.log(p1);
// console.log(p2);

//Já cria o objecto e já set o prototype
// const p3 = Object.create(Produto.prototype);
// p3.preco = 113; //criando o atributo preço
// p3.nome = 'Boné';

const p3 = Object.create(Produto.prototype, {
  nome: {
    value: 'Boné',
    enumerable: true,
  },
  preco: {
    value: 113,
    writable: true,
    configurable: true,
    enumerable: true,
  },
});

console.log(p3);
p3.aumento(50);
console.log(p3);
