/* FOR CLASSICO 
criar uma variável de controle (INDEX ou i) e setar um valor inicial
Dondição de parada
incremento: de um em um, de dois em dois e por aí vai...

relebrando: template string = ``
*/

for (let i = 0; i <=5; i++) {
    const ehPar = i % 2 === 0 ? 'par' : 'impar'; // um ternário
    console.log('Linha ' + i);
    console.log(i, 'é', ehPar);
} // não tem ; no final

/* percorrer um Array */

//                0       1       2
const frutas = ['maçã', 'pêra', 'uva', 'limão', 'côco', 'tangirina', 'goiaba'];

for (let i= 0; i < frutas.length; i++) {
    console.log(`Índice ${i}: ` + frutas[i]);
};

