/* data é uma função construtora, recebe o new e 
a função Date() com início maiusculo */
const data = new Date(); //criando a data neste exato momento
const meuAniversario = new Date(1985,11,20); //meu aniversário
console.log(data.toString());
console.log(meuAniversario.toString());

const idadeMilesimos = data - meuAniversario; //em milesimos de segundos
const idadeAnos = idadeMilesimos / (1000 * 60 * 60 * 24 * 365.25);
console.log(idadeMilesimos);
console.log(idadeAnos.toFixed(2));

/* Exemplo de data até os milissegundos */
                    /* ano, mês, dia, hora, minutos, segundos, milissegundos  */
 const dataGeral = new Date(2025, 4, 16, 22, 25, 59, 999); //mês vai de 0 a 11
 /* tem que ter pelo menos 2 parámetros para contar ano e mês, 
 1 parametro conta como milesimos de segundos */
 console.log(dataGeral);
 console.log(dataGeral.toString());

 /* posso criar uma dataString */

 const dataDoTipoString = new Date('2025-05-16 22:31:59.425');
 const dataDoTipoString2 = new Date('2025-05-16T22:31:59.425');
 console.log(dataDoTipoString);
 console.log(dataDoTipoString.toString());
 console.log(dataDoTipoString2.toString());

 /* capturando os valores do Date */
 console.log('Dia: ', dataDoTipoString.getDate());
 console.log('Mês: ', dataDoTipoString.getMonth()); //mês começa do 0
 console.log('Ano: ', dataDoTipoString.getFullYear());
 console.log('Hora: ', dataDoTipoString.getHours());
 console.log('Minuto: ', dataDoTipoString.getMinutes());
 console.log('Segundo: ', dataDoTipoString.getSeconds());
 console.log('ms: ', dataDoTipoString.getMilliseconds());
 console.log('Dia da Semana: ', dataDoTipoString.getDay()); //número do dia na semana 0-6 0(domingo) e 6(sábado)
 
 console.log(Date.now()); //exibe a data na hora da solicitação em ms


 

