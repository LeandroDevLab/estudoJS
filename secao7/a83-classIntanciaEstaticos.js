/* METODOS ESTATICOS */

// Molde que cria novos objetos
class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  //Método de instância
  aumentarVolume() {
    if (this.volume >= 100) return; //tratando os limites
    this.volume += 2;
  }

  //Método de instância
  diminuirVolume() {
    if (this.volume <= 0) return; //tratando os limites
    this.volume -= 2;
  }

  //Método ESTÁTICO
  static trocaPilha() {
    // não tenho acesso aos dados da instância
    console.log('Ok, vou trocar.');
    console.log('Pilhas novas!');
  }
}

// instância -> objecto criado com o Molde class
const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
//controle1.trocaPilha(); // vai dár erro, pois não é um método de instância
ControleRemoto.trocaPilha();
console.log(controle1);
controle1.aumentarVolume();
console.log(controle1);
ControleRemoto.trocaPilha(); // não tenho acesso aos dados da instância

console.log(controle1);
