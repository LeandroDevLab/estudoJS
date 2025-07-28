//GETTER E SETTER -> maneira de proteger a minha propriedade
function Produto(nome, preco, estoque) {
  //Atributos
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: false,
    //GETTER
    get: function () {
      return estoque;
    },
    //SETTER
    set: function (valor) {
      if (typeof valor !== 'number') {
        console.log('Valor precisa ser um número');
        // ou lançar um erro
        //throw new TypeError('Valor de estoque precisa ser um número');
        return;
      }
      estoque = valor;
    },
  });
}

//FACTORY FUNCTION
function criaProduto(nome) {
  return {
    get nome() {
      return nome;
    },
    set nome(valor) {
      valor = valor.replace('coisa.', '');
      nome = valor;
    },
  };
}

//const p1 = new Produto("Camiseta", 20, 3);
//console.log(p1);
// p1.estoque = "oi";
// console.log(p1.estoque);

const p2 = criaProduto('Camiseta');
p2.nome = 'Qualquer coisa.';
console.log(p2.nome);
