// 705.484.450-52 070.987.720-03
/*
Lógica real de validação de um CPF

7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0  (somando essa linha) = 237

Equação para o primeiro número
11 - (237 % 11) = 5 (Primeiro dígito)
se o digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11  10 9  8  7  6  5  4  3  2
77  0  40 28 48 20 16 15 0  10 (somando essa linha) = 284

11 - (237 % 11) = 2 (Segundo dígito)
se o digito for maior que 9, consideramos 0.

*/
function ValidaCPF(cpfEnviado) {
  Object.defineProperty(this, 'cpfLimpo', {
    enumerable: true,
    configurable: false,
    get: function () {
      // não funciona com Arrow Function 👈👈😒
      return cpfEnviado.replace(/\D+/g, '');
    },
  });
}

ValidaCPF.prototype.valida = function () {
  //validações
  if (typeof this.cpfLimpo === 'undefined') return false; //validação de campo vazio
  if (this.cpfLimpo.length !== 11) return false; // validação de tamanho
  if (this.isSequencia()) return false;

  const cpfParcial = this.cpfLimpo.slice(0, -2);
  const digito1 = this.criaDigito(cpfParcial);
  const digito2 = this.criaDigito(cpfParcial + digito1);
  //console.log(digito1, digito2);
  const novoCPF = cpfParcial + digito1 + digito2;
  // eu fiz assim
  // if (this.cpfLimpo === novoCPF) return true;
  // return false;
  return this.cpfLimpo === novoCPF;
};

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
  console.log(cpfParcial);
  const cpfArray = Array.from(cpfParcial); // funciona igual [...this.cpfLimpo], tem não permite alguns métodos em JS, usar então Array.from();

  let regressivo = cpfArray.length + 1;
  let total = cpfArray.reduce((ac, valor) => {
    //console.log(valor, regressivo, regressivo * valor);
    ac += Number(valor) * regressivo;
    regressivo--;
    return ac;
  }, 0);
  const digito = 11 - (total % 11);
  //console.log(digito);
  return digito > 9 ? '0' : String(digito);
};

ValidaCPF.prototype.isSequencia = function () {
  const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
  return sequencia === this.cpfLimpo;
};

// 705.484.450-52 070.987.720-03
const cpf1 = new ValidaCPF('070.987.720-03 ');
//cpf.valida(); //método que vai validar
//console.log(cpf1.cpfLimpo);
console.log(cpf1.valida());
if (cpf1.valida()) {
  console.log('CPF válido!😁');
} else {
  console.log('CPF inválido!🤬');
}

// tentei resolver

// let cpf = '705.484.450-52';
// let cpfLimpo = cpf.replace(/\D+/g, ''); //returna uma string só com números
// let cpfArray = Array.from(cpfLimpo);
// let cpfArrayReduzido = [...cpfArray.slice(0, -2)]; //criei um novo array com Spread(..),
// já retirando os dois ultimos com .slice(0, -2)

// let cptMulti = cpfArrayReduzido.map(valor => {
//   let multi = 11;
//   multi--;
//   console.log(valor);
//   return Number(valor) * multi;
// });

// console.log(cptMulti);
// let somaDos9 = cpfArrayReduzido.reduce((ac, valor) => {
//   return ac + Number(valor);
// }, 0);
// console.log(cpfArrayReduzido);
// console.log(cpfLimpo);
// console.log(cpfArray);
// console.log(somaDos9);

/* 

/\D+/g

A expressão regular /\D+/g é usada para **encontrar um ou mais caracteres 
que não são dígitos (ou seja, tudo que não é 0–9) em uma string.
*/
