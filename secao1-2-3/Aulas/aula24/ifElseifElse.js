/* 
IF pode ser usado sozinho
ELSE IF precisa de um IF antes e pode ter quantos quiser
ELSE só pode ter um, para qualquer outra possibilidade não rastreada
*/
const hora = 10;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia!');
} else if (hora < 17) {
    console.log('Boa tarde!');
} else if (hora < 22) {
    console.log('Boa noite!');
} else {
    console.log('vai dormir!'); 
}