//alert, confirm, prompt
alert('Com a nossa mensagem!');
window.alert('mesma coisa');
window.confirm('Deseja realmente apagar?'); //retorna um valor
// se sim retorna TRUE, clicando em cancelar retorna FALSE

prompt('Digite o seu nome!'); //retorna um valor "string"

//quando uma função está dentro de um objeto a gente chama de método

const confirma = confirm('Deseja realmente continuar?');
console.log(confirma);

//exercício
alert('Agora vem o exercício');

const num1 = Number(prompt('Digite um número!'));
const num2 = Number(prompt('Digite outro número!'));

let resultado = num1 + num2;

// alert('O resultado da adição dos dois número foi: ' + resultado); Evitar esse formato
alert(`O resultado da adição dos dois número foi: ${resultado}`);
