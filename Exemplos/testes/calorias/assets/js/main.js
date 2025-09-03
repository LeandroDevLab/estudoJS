class ContadorCalorias {
  constructor() {
    this.lista = [];
    this.formulario = document.querySelector('.form');
    this.divLista = document.querySelector('.lista');
    this.init();
  }

  init() {
    this.formulario.addEventListener('submit', e => {
      e.preventDefault();
      this.addItem();
      this.preencheDivLista();
      this.formulario.reset();
    });
  }

  addItem() {
    let kcal = this.formulario.querySelector('#kcal').value;
    let carbo = this.formulario.querySelector('#carboidrato').value;
    let proteina = this.formulario.querySelector('#proteina').value;
    let gordura = this.formulario.querySelector('#gordura').value;

    this.lista.push({
      kcal,
      carbo,
      proteina,
      gordura,
    });
    console.log(this.lista);
  }

  preencheDivLista() {
    this.divLista.innerHTML = ``;
    console.log('lista => ', this.lista.length);
    for (let i = 0; i < this.lista.length; i++) {
      let div = document.createElement('div');
      div.innerHTML = `<p>
        Kcal: ${this.lista[i].kcal} 
        Carbo: ${this.lista[i].carbo} 
        Proteina: ${this.lista[i].proteina} 
        Gordura: ${this.lista[i].gordura} 
        </p>`;
      this.divLista.appendChild(div);
    }
  }
}

const contador = new ContadorCalorias();
