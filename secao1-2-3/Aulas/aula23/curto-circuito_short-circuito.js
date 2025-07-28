/* 
&& -> false && true === false
|| ->  true && false === true

FALSY: todos os valores abaixo são avaliados como falso
false -> esse é literal
0
'' "" ``
null / undefined
NaN
*/

function falaOi () {
    return 'Oi';
}

const vaiExecutar = false;

console.log(vaiExecutar && falaOi()); // se vaiExecutar apresentar qualquer valor falso a análise para ali

const vaiExecutar2 = 'joãozinho';

console.log(vaiExecutar2 && falaOi()); // se vaiExecutar2 for verdadeiro ele continua verificando

console.log(0 || false || null || 'Luiz Otávio' || true); //vai retornar o primeiro valor verdadeiro encontrado

/* EXEMPLO 
Usuário pode escolher uma cor de página ou não

fazer estruturas lógicas com operadores lógicos, muito usado o OR
*/

const corUsuario = null; //caso não escolha apresenta valor nulo
const corPadrao = corUsuario || 'preto'; //se todas forem falsa o último falso será retornado
console.log(corPadrao);