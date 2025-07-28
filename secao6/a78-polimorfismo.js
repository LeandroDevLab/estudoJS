//Polimorfismo, metodos se comportarem de maneira diferentes
//nas subclasses()

/* 
Polimorfismo é um conceito importante na programação orientada a objetos 
que se refere à capacidade de objetos diferentes de uma mesma hierarquia 
de classes responderem de maneira única a métodos comuns, de acordo com 
sua própria implementação. Isso significa que métodos com o mesmo nome em 
classes diferentes podem ter comportamentos diferentes.
*/

/* a SuperCLASS, classe mãe / base */
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
  if (this.saldo < valor) {
    console.log(
      `Você tentou sacar US$ ${valor} dolares! Saldo insuficiente, seu saldo é: US$ ${this.saldo} dolares.`
    );
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};
Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
};
Conta.prototype.verSaldo = function () {
  console.log(
    `Ag/conta: ${this.agencia}/${this.conta} | ` +
      `Saldo: US$ ${this.saldo.toFixed()} dolares.`
  );
};

const conta1 = new Conta(11, 22, 100);
console.log(conta1);
conta1.depositar(100);
conta1.depositar(10);
conta1.sacar(30);
conta1.sacar(180);
conta1.sacar(1);

/* SOBREESCREVER */
function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype); //link de prototype
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
  if (this.saldo + this.limite < valor) {
    console.log(
      `Você tentou sacar US$ ${valor} dolares! Limite insuficiente, saldo US$ ${this.saldo} dolares | Limite: US$ ${this.limite} dolares.`
    );
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

const cc1 = new ContaCorrente(123, 1234, 100, 100);
cc1.sacar(110);
cc1.sacar(110);

function ContaPoupanca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype); //link de prototype
ContaPoupanca.prototype.constructor = ContaPoupanca;

const cp1 = new ContaPoupanca(11, 22, 100);
console.log('=======');
cp1.depositar(100);
cp1.sacar(201);
