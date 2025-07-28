const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {

    if (numero === 2) {
        console.log('Pulei o número 2');
        continue; // ele volta para o começo do laço de repetição
    }

    if (numero === 5) {
        console.log('Pulei o número 5');
        continue; // ele volta para o começo do laço de repetição
    }

    if (numero === 8) {
        console.log('quebrei quando achei o número 8');
        break; // ele quebra(break) e sai do laço 👀pode melhorar a velocidade do código
    }
    

    console.log(numero);
}
console.log('#########');
let i = 0;

while (i < numeros.length) {
    let numero = numeros[i];
    i++;
    if (numero === 2) {
        console.log('Pulei o número 2');
        continue; // ele volta para o começo do laço de repetição
    }
    
    if (numero === 5) {
        console.log('Pulei o número 5');
        continue; // ele volta para o começo do laço de repetição
    }
    
    if (numero === 8) {
        console.log('quebrei quando achei o número 8');
        break; // ele quebra(break) e sai do laço 👀pode melhorar a velocidade do código
    }
    

    console.log(numero);
}
