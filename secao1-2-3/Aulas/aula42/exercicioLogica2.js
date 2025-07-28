/* Exercício:
Escreva uma função chamada ePaisagem que
recebe dois argumentos, largura e altura
de uma imagem (number).
Retorne true se a imagem estiver no modo
paisagem.
*/

const l = 1600;
const a = 900;

const ePaisagem = (l, a) => l > a ? true : false;
const ePaisagem2 = (l, a) => l > a; //essa operação já irá retornar true ou false


console.log(ePaisagem(l, a));
console.log(ePaisagem2(l, a));
