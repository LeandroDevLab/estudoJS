
let a = 'A'; //B
let b = 'B'; //C
let c = 'C'; //A

/* atribuição via desestruturação */
const numeros = [b, c, a];
[a, b, c] = numeros; // a passa a ter valor de b, b de c e c de a //reatribuindo

console.log(a, b, c);

//                     0    1    2    3    4    5    6    7    8   indice
const numerosArray = [100, 200, 300, 400, 500, 600, 700, 800, 900];
const primeiroNumero = numerosArray[0];

/* desestruturação  em vez de criar como está em cima 1 por 1, posso fazer assim*/
/* se usei const continuo usando const, se LET uso LET na desestruturação */
const [num1, num2, num3, ... resto] = numerosArray; //vou atribuir os números nas variáveis
// ...  chama de rest, para pegar o resto
// ... chama de spread, para espalhar/distrubuir


/* /* pegando pulando 

não se usa muito, mas precisa saber que existe

const [um, , tres, , cinco, ... sobra ] = numerosArray;
console.log(um, tres, cinco);
console.log(sobra);


*/

/* console.log(primeiroNumero);
console.log(num1, num2, num3);
console.log(resto); //uma Array com o resto */

//indice                   0         1         2
//subindice             0  1  2   0  1  2   0  1  2
const outrosNumeros = [[1, 2 ,3],[4, 5 ,6],[7, 8 ,9],];

const acessandoItemEspecifico = outrosNumeros[1][2];
/* com desestruturação pegando o mesmo valor */
const [,[,,seis]] = outrosNumeros; //isso fica mais complexo do que simples
const [lista1, lista2, lista3] = outrosNumeros; //fica mais simples desse jeito


console.log(acessandoItemEspecifico);
console.log(seis);
console.log(lista2[1]); // e acessando assim!
