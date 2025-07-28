const numeros = [27, 1, 83, 59, 91, 16, 6, 48, 72, 35, 61, 5, 88, 42, 13, 97, 54];

//const numerosPares = numeros.filter( valor => valor % 2 === 0).map(valor => valor * 2).reduce((acumulador, valor) => acumulador += valor);
const numerosPares = numeros
.filter( valor => valor % 2 === 0)
.map(valor => valor * 2)
.reduce((acumulador, valor) => acumulador += valor);

console.log(numerosPares);
const pessoas = [
  { nome: 'Lucas', idade: 25 },
  { nome: 'Mariana', idade: 30 },
  { nome: 'João', idade: 50 },
  { nome: 'Ana', idade: 51 },
  { nome: 'Carlos', idade: 35 },
  { nome: 'Beatriz', idade: 60 }
];