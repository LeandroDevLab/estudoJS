const texto = document.querySelector(".container h1");

function getWeekDay (valor) {
    /* usando a posição de um vetor para substituir o valor */
    let weekDay = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 
        'quinta-feira', 'sexta-feira', 'sábado'];
    return weekDay[valor];
    
    /* 
    COM SWITCH
    let weekDay;
    switch (valor) {
        case 0: weekDay = 'Domingo';
        return weekDay;
        case 1: weekDay = 'segunda-feira';
        return weekDay;
        case 2: weekDay = 'terça-feira';
        return weekDay;
        case 3: weekDay = 'quarta-feira';
        return weekDay;
        case 4: weekDay = 'quinta-feira';
        return weekDay;
        case 5: weekDay = 'sexta-feira';
        return weekDay;
        case 6: weekDay = 'sábado';
        return weekDay;
    } */
}

function getMonthTransformText (mes) {
    let monthText;
    switch (mes) {
        case 0: monthText = 'janeiro';
        return monthText;
        case 1: monthText = 'fevereiro';
        return monthText;
        case 2: monthText = 'março';
        return monthText;
        case 3: monthText = 'abril';
        return monthText;
        case 4: monthText = 'maio';
        return monthText;
        case 5: monthText = 'junho';
        return monthText;
        case 6: monthText = 'julho';
        return monthText;
        case 7: monthText = 'agosto';
        return monthText;
        case 8: monthText = 'setembro';
        return monthText;
        case 9: monthText = 'outubro';
        return monthText;
        case 10: monthText = 'novembro';
        return monthText;
        case 11: monthText = 'dezembro';
        return monthText;
    }
}

function zeroLeft (num) {
    return num >= 10 ? num : `0${num}`;
}

const data = new Date();

function createDate (data) {
    const diaSemana = getWeekDay(data.getDay());
    const dia = data.getDate();
    const mes = getMonthTransformText(data.getMonth());
    const ano = data.getFullYear();
    const hora = zeroLeft(data.getHours());
    const min = zeroLeft(data.getMinutes());

    return (`${diaSemana}, ${dia} de ${mes} de ${ano} ${hora}:${min}`);
}


texto.innerHTML = createDate(data);

/* Outra forma  - recurso nativo da linguagem*/
const texto2 = document.querySelector('.container h2');

const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

// texto2.innerHTML = data.toLocaleDateString('pt-BR', opcoes);
texto2.innerHTML = data.toLocaleString('pt-BR', opcoes);

/* texto2.innerHTML = data.toLocaleDateString('pt-BR', opcoes);
Mas nesse caso, o objeto opcoes deve conter apenas dateStyle — se tiver timeStyle, use toLocaleString. */


/* outra forma */
const texto3 = document.querySelector('.container h3');
texto3.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle: 'medium'});

