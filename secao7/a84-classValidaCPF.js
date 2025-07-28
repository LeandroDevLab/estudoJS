class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
      enumerable: true,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, ''),
    });
  }

  valida() {
    //validações
    if (typeof this.cpfLimpo === 'undefined') return false; //validação de campo vazio
    if (this.cpfLimpo.length !== 11) return false; // validação de tamanho
    if (this.isSequencia()) return false;

    //manipulação dos valores
    this.CpfParcial = this.cpfLimpo.slice(0, -2);
    this.digito1 = ValidaCPF.geraDigito(this.CpfParcial); //chamando método estático
    this.digito2 = ValidaCPF.geraDigito(this.CpfParcial + this.digito1); //chamando método estático
    //this.digito1 = this.adicionaDigito(this.CpfParcial);
    //this.digito2 = this.adicionaDigito(this.CpfParcial + this.digito1);

    const novoCPF = this.CpfParcial + this.digito1 + this.digito2;
    return this.cpfLimpo === novoCPF;
  }

  // método que pode ser usado no lugar do adicionaDigito(), pode ser static,
  // uma vez que não acessa nenhum this dentro do método, para chamar ele
  // dentro da função, usar o NomeDaClasse.geraDigito()
  // feito com FOR, para variar da solução anterior
  static geraDigito(cpfParcial) {
    let total = 0;
    let reverso = cpfParcial.length + 1;

    for (let numString of cpfParcial) {
      total += reverso * Number(numString);
      reverso--;
    }

    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
  }

  // Também poderia ser estático
  // feito com .reduce( (ac, val) => {},0);
  adicionaDigito(cpfParcial) {
    let arrayCpf = Array.from(cpfParcial);

    let indiceRegressivo = arrayCpf.length + 1;
    let total = arrayCpf.reduce((ac, val) => {
      ac = ac + Number(val) * indiceRegressivo;
      indiceRegressivo--;
      return ac;
    }, 0);
    //console.log(arrayCpf);
    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
  }

  isSequencia() {
    // this.cpfLimpo.charAt(0) = this.cpfLimpo[0] -> vai pegar o 1º índice
    const sequencia = this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
  }
}

const cpf1 = new ValidaCPF('080.536.366-16');
const cpf2 = new ValidaCPF('111.111.111-11');

console.log(cpf1);
cpf1.valida() ? console.log('CPF válido!😁') : console.log('CPF inválido!🤬');

console.log(cpf2);
cpf2.valida() ? console.log('CPF válido!😁') : console.log('CPF inválido!🤬');
