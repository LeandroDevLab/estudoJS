
function retornaHora (data) {
    if (data && !(data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit', //retornar hora sempre com 2 digitos
        minute: '2-digit', //retornar minuto sempre com 2 digitos
        second: '2-digit', //retornar segundo sempre com 2 digitos
        hour12: false //para não retornar formato 12 horas e sim 24 horas
    });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora();
    console.log(hora);
} catch (e) {
    //Tratando o erro!
} finally {
    console.log('Tenha um bom dia!')
}

