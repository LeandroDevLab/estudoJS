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
      this.formulario.reset();
      this.valoresTotais();
    });
  }

  addItem() {
    //Usando FormData
    const formData = new FormData(this.formulario);

    //transformando os dados em Objeto
    const dados = Object.fromEntries(formData.entries());

    this.lista.push(dados);

    this.preencheDivLista();
  }

  preencheDivLista() {
    this.divLista.innerHTML = ``;
    for (let i = 0; i < this.lista.length; i++) {
      let div = document.createElement('div');
      div.innerHTML = `<p>
        Kcal: ${this.lista[i].kcal} 
        Carbo: ${this.lista[i].carboidrato} 
        Proteina: ${this.lista[i].proteina} 
        Gordura: ${this.lista[i].gordura} 
        </p>`;
      this.divLista.appendChild(div);
    }
    this.divLista.innerHTML += this.valoresTotais();
  }

  valoresTotais() {
    const kcalTotal = this.lista.reduce(
      (ac, item) => ac + Number(item.kcal),
      0
    );
    const carboidratoTotal = this.lista.reduce(
      (ac, item) => ac + Number(item.carboidrato),
      0
    );
    const proteinaTotal = this.lista.reduce(
      (ac, item) => ac + Number(item.proteina),
      0
    );
    const gorduraTotal = this.lista.reduce(
      (ac, item) => ac + Number(item.gordura),
      0
    );

    return `<div class="valoresTotais">
    <span>Total: ${kcalTotal}</span>kcal;
    Carboidrato: <span>${carboidratoTotal}</span>g;
    Proteína: <span>${proteinaTotal}</span>g;
    Gordura: <span>${gorduraTotal}</span>g 
    </div>`;
  }
}

const contador = new ContadorCalorias();
