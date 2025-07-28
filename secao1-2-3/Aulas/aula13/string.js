let umaString = "Um \"texto\""; // uma barra invertida esconde o próximo caractere
let outraString = "um texto"
// toda string tem um índice, nesse caso tem de 0 a 7: 
// 01234567
// um texto
console.log(outraString[4]);
console.log(outraString.charAt(4)); //funciona parecido
console.log(outraString.concat(' em um lindo dia!'));

//encontrar no indice
console.log(outraString.indexOf('texto')); //mostra 3, que começa do indice 3
console.log(outraString.replace(/um/, 'outra')); //mostra 3, que começa do indice 3
console.log(outraString.length); //tamanho do meu string

console.log(outraString.slice(3, 8));

let frase = 'O rato roeu a roupa do rei de roma.';

console.log(frase.split(' ')); //dividir os valores em uma Array, sem incluir o trecho selecionado
console.log(frase.split(' '), 2); //só quer os dois primeiros itens

console.log(frase.toUpperCase()); //só quer os dois primeiros itens

