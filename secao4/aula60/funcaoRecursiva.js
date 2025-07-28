/* Função recursiva ela chama ela mesma */

function recursiva(max) {
    if (max >=10) return; //condição de pausa
    max++; //incremento
    console.log(max);
    recursiva(max); // se chama de volta na mesma função
}
// se repetir demais o js vai parar automaticamente o call stack
recursiva(0);