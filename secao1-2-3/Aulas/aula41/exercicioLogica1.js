/* o Exercício é:
faça uma função que receba 2 números
e retorne o maior deles
*/
const num1 = 10;
const num2 = 11;

// function exibirMaiorNumero (a, b) {
//     if (a > b) {
//         return a;
//     } else {
//         return b;
//     }
// }

/* REFATORANDO */
// function exibirMaiorNumero (a, b) {
//     if (a > b) {
//         return a;
//     }
//     return b;
// }

/* REFATORANDO NOVAMENTE IF DE UMA LINHA */
// function exibirMaiorNumero (a, b) {
//     if (a > b) return a;
//     return b;
// }

/* REFATORANDO OUTRA VEZ TERNÁRIO NO RETURN */
function exibirMaiorNumero (a, b) {
    return (a > b) ? a : b;
}

/* com ARROW FUCTION */
const max2 = (x, y) => {
    return x > y ? x : y;
};
/* meu mesmo refatorei pq era de uma linha, 
implicito o return */
const max3 = (x, y) => x > y ? x : y;

console.log(exibirMaiorNumero(11, 1));
console.log(max2(12, 1));
console.log(max2(13, 1));

