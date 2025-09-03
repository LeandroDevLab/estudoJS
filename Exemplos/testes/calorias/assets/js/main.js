const lista = [];

const formulario = document.querySelector('.form');
const inputKcal = document.getElementById('kcal');
const inputCarbo = document.getElementById('carboidrato');
const inputProtein = document.getElementById('proteina');
const inputGordura = document.getElementById('gordura');
const botao = document.querySelector('.botao');
const divLista = document.querySelector('.lista');

function addItem() {
  let kcal = inputKcal.value;
  let carbo = inputCarbo.value;
  let proteina = inputProtein.value;
  let gordura = inputGordura.value;
  const item = {
    kcal,
    carbo,
    proteina,
    gordura,
  };
  lista.push(item);
  console.log(item);
}

function preencheDivLista() {
  for (item of lista) {
    let div = document.createElement('div');
    div.innerHTML = `<p>
      Kcal: ${item.kcal} 
      Carbo: ${item.carbo} 
      Proteina: ${item.proteina} 
      Gordura: ${item.gordura} 
      </p>`;
    divLista.appendChild(div);
  }
}

botao.addEventListener('click', () => {
  addItem();
  preencheDivLista();

  console.log(lista);
});
