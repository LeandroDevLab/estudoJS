class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(this.nome + 'já está ligado!');
      return;
    }

    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log(this.nome + 'já está desligado!');
      return;
    }

    this.ligado = false;
  }
}

// já fiz a Herança herdar tudo que tem na outra classe
class SmartphoneAntigos extends DispositivoEletronico {}

// aqui vou atribuir valores
class Smartphone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome); // chamar os construtores da classe pai

    this.cor = cor;
    this.modelo = modelo;
  }
}

class Tablet extends DispositivoEletronico {
  constructor(nome, tamanho) {
    super(nome);
    this.tamalho = tamanho;
  }

  ligar() {
    console.log('Olha, você alterou o método ligar do DispositivoEletronico');
  }

  falaOi() {
    console.log('esse método só no Tablet!');
  }
}

const s1 = new Smartphone('Poco', 'Preto', 'x6pro');
const t1 = new Tablet('Poco', 'Medio');

console.log(s1);
t1.ligar();

t1.falaOi();
