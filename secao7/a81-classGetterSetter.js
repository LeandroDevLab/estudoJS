//Simbol
const _velocidade = Symbol('velocidade');

class Carro {
  constructor(nome) {
    this.nome = nome;
    this[_velocidade] = 0;
  }

  //setar uma velocidade -> criar um set
  set velocidade(valor) {
    console.log('SETTER');
    if (typeof valor !== 'number') return;
    if (valor >= 100 || valor <= 0) return;
    this[_velocidade] = valor;
  }

  //quero acessar a velocidade fora
  get velocidade() {
    console.log('GETTER');
    return this[_velocidade];
  }

  acelerar() {
    if (this[_velocidade] >= 100) return; //travando a velocidade quando for >= 100
    this[_velocidade]++;
  }

  freiar() {
    if (this[_velocidade] <= 0) return; //travando a velocidade quando for >= 100
    this[_velocidade]--;
  }
}

const c1 = new Carro('Fusca');

for (let i = 0; i <= 200; i++) {
  c1.acelerar();
  //console.log(`acelerou ${i} e velocidade igual a: ${c1[_velocidade]} km/h.`);
}

console.log(c1);

//amigo tentou setar errado a velocidade

//SETTER
c1.velocidade = 2000; // valor fora do padrão do SETTER
c1.velocidade = 55;

//GETTER
console.log(c1.velocidade); //aqui vou acessar a velocidade real do sistema e não a errada que o amigo errou

/* 
Quando você usa get em uma class, você transforma uma 
função em um acessador de propriedade (um getter). Isso significa que você 
acessa a função como se fosse um atributo, sem precisar dos parênteses.
*/

// Tentar acessar diretamente:
console.log(c1._velocidade); // undefined
console.log(Object.keys(c1)); // não mostra a propriedade Symbol
console.log(Object.getOwnPropertySymbols(c1)); // [ Symbol(velocidade) ]

class Carro2 {
  //Essa abordagem é mais segura e moderna, mas não é suportada em todos os ambientes antigos.
  #velocidade = 0; //alternativa mais moderna ao Symbol, mas não suportada em ambientes antigos

  acelerar() {
    this.#velocidade++;
  }

  get velocidade() {
    return this.#velocidade;
  }
}
