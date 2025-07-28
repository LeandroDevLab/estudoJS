// Produto -> possibilidade de aumento e desconto
//  é minha abstração
// Camiseta = cor, caneca = material, lapis

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};
Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia;
};

/* Essa Constructor Function (CF) é uma especialização da CF Produto
Herdando tudo que Produto tem e especificar nos filhos */
function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco); // fazendo a herança
  this.cor = cor;
}

/* Estou criando um objeto com Object.create e colocando o prototype 
de Produto dentro, atribuindo todos os prototypes de Produto em Camiseta */
Camiseta.prototype = Object.create(Produto.prototype);
/* reatribuindo o nome do construtor da Função Construtora */
Camiseta.prototype.constructor = Camiseta;

//Sobrescrevendo algo e tornando específico apenas na CF Camiseta
Camiseta.prototype.aumento = function (percentual) {
  this.preco = this.preco + (this.preco * percentual) / 100;
};

/* Criando outra CF Caneca */
function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco); // fazendo a herança
  this.material = material;

  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: false,

    get: function () {
      return estoque;
    },
    set: function (valor) {
      if (typeof valor !== 'number') return; //para não deixar setar o valor se não for número
      estoque = valor;
    },
  });
}

/* linkando os prototype */
Caneca.prototype = Object.create(Produto.prototype);
/* reatribuindo nome */
Caneca.prototype.constructor = Caneca;

const caneca1 = new Caneca('Canecão', 10, 'Plástico', 5);
caneca1.estoque = 100; //usando o SETTER
console.log(caneca1.estoque); // usando o GETTER
const produto = new Produto('Generico', 111);
const camiseta = new Camiseta('Regata', 7.5, 'Preta');
camiseta.aumento(100);
console.log(camiseta);
caneca1.aumento(10);
console.log(caneca1);
