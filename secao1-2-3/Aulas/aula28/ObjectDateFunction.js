
function zeroAEsquerda (num) {
    /* const numero = num >= 10 ? num : '0'+num;

    return numero; eu fiz assim*/

    /* professor */
    return num >= 10 ? num : `0${num}`;
}

 /* Criar uma função que formata a data */
 function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1); //corrigindo nosso mês que começa no 1(Jan)
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
 }

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
