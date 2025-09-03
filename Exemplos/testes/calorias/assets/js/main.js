const lista = [];

const formulario = document.querySelector('.form');
const inputKcal = document.getElementById('kcal');
const inputCarbo = document.getElementById('carboidrato');
const inputProtein = document.getElementById('proteina');
const inputGordura = document.getElementById('gordura');
const botao = document.querySelector('.botao');

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

botao.addEventListener('click', () => {
  addItem();
  console.log(lista);
});
