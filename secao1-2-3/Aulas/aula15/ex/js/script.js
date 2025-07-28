const valorDigitado = Number(prompt('Digite um valor'));
document.getElementById("numero").innerHTML = valorDigitado;
document.getElementById('texto').innerHTML = `> Raiz quadrada: ${valorDigitado ** (1/2)} <br />`;
document.body.innerHTML += `> Raiz quadrada com duas casas decimais: ${(valorDigitado ** (1/2)).toFixed(2)} <br />`;
document.body.innerHTML += `> ${valorDigitado} é inteiro: ${Number.isInteger(valorDigitado)} <br />`;
document.body.innerHTML += `> É NaN: ${Number.isNaN(valorDigitado)}<br />`;
document.body.innerHTML += `> Arredondando para baixo: ${Math.floor(valorDigitado)}<br />`;
document.body.innerHTML += `> Arredondando para cima: ${Math.ceil(valorDigitado)}<br />`;
document.body.innerHTML += `> Com duas casas decimais: ${valorDigitado.toFixed(2)}<br />`;
/* 
quando eu uso o document eu estou manipulando o DOM
Documento Object Model (DOM)
*/