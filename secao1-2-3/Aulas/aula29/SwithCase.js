/* Usando SwitchCase e revisando Object Date() */

const data = new Date();
const diaSemana = data.getDay();

switch (diaSemana) {
    case 0: console.log('domingo');
    break;
    case 1: console.log('segunda');
    break;
    case 2: console.log('terça');
    break;
    case 3: console.log('quarta');
    break;
    case 4: console.log('quinta');
    break;
    case 5: console.log('sexta');
    break;
    case 6: console.log('sábado');
    break;
    default: console.log('');
} 

/* fazendo em uma Função */
/* OBS👀🔴: é interessante sempre criar o nome das variáveis e function em inglês
estamos usando em português só para facilitar a revisão */
function getDiaSemanaTexto (valor) {
    let diaSemanaTexto;
    switch (valor) {
        case 0: diaSemanaTexto = 'domingo';
            return diaSemanaTexto; //entrou o return acabou a função
        case 1: diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
        case 2: diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
        case 3: diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
        case 4: diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
        case 5: diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;
        case 6: diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default: diaSemanaTexto = '';
            return diaSemanaTexto;
    } 
}

console.log(getDiaSemanaTexto(diaSemana));




