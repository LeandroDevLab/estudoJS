/* Exercício:
Escreva uma função que recebe um número e
retorne o seguinte:
Número é divisível por 3 = Fizz
Número é divisível por 5 = Buzz
Número é divisível por 3 e 5 = FizzBuzz
Número NÃO é divisível por 3 e 5 = retorna o próprio número
Checar se o número é realmente um número
Use a função com números de 0 a 100
*/

const numeros = [];

for (let i = 0; i <= 100; i++) {
    let num = parseInt(i);
    numeros.push(num);
}

numeros.push('teste');

const divPor = (n) => {
    let por3 = n % 3;
    let por5 = n % 5;
    
    if (por3 === 0 && por5 === 0) {
        return 'FizzBuzz';
    };

    if (por3 === 0) {
        return 'Fizz';
    };
    
    if (por5 === 0) {
        return 'Buzz';
    };
    
    return n;
};

console.log(numeros);
console.log(numeros[15]);
console.log(divPor(numeros[15]));

numeros.forEach(function (n) {
        console.log(divPor(n));
});
