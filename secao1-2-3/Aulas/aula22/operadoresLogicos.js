/* 
Operadores Lógicos
&& -> AND -> E    ----> todas as expressões precisam ser verdadeiras
|| -> OR -> OU    ----> uma expressão precisa ser verdadeira
! -> NOT -> NÃO   ----> inverte o valor, o que era verdadeiro passa a ser falso e falso passa a ser verdadeiro
*/
console.log('expressões lógicas - operadores lógicos');

const expressaoAnd = true && true && true;
const expressaoOr = false || false || true;

console.log(expressaoAnd);
console.log(expressaoOr);

console.log('negando as expressões!');
console.log(!true); //false
console.log(!!true); // false e depois verdadeiro
console.log(!false); // verdadeiro
console.log(!!false); // verdadeiro e depois false ... posso negar(!) quantas vezes quiser
