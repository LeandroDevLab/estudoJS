//IIEE -> fução criada e auto invocada, veremos no futuro!
/* alert(2); //testando o link */

/* form.onsubmit = function (evento) {
        evento.preventDefault(); //previna o que deve acontecer por padrão, quero evitar no casso a atualização da página, nessa situação!
        alert(1);
        console.log('Foi enviado!');
    }; */

function meuEscopo(){






    const form = document.querySelector('.form'); //selecionando pela class
    const resultado = document.querySelector('.resultado');

    //criando um array para armazenar os dados
    const pessoas = [];

    //recurso um pouco mais moderno "addEventListener"
    function recebeEventoForm (evento) {
        evento.preventDefault(); //previna o que deve acontecer por padrão, quero evitar no casso a atualização da página, nessa situação!
        //pegar os valores inseridos no formulário
        const nome = form.querySelector('.nome'); //eu poderia utilizar document.querySelector, mas o form.querySelector é um caminho menor, já que document é a página inteira
        const sobrenome = form.querySelector('.sobrenome');    
        const peso = form.querySelector('.peso');    
        const altura = form.querySelector('.altura');

        // console.log(nome.value); pegando o valor

        pessoas.push({
            nome: nome.value, 
            sobrenome: sobrenome.value, 
            peso: peso.value,
            altura: altura.value
        }); // aqui eu vou fazer um .push({}); de um objeto!

        console.log(pessoas);

        //adiciona um paragrafo toda vez que a função for chamada, dentro de resultado selecionado pelo querySelector('.resultado')
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} pesa ${peso.value} e tem altura de ${altura.value} </p>`;
        
    }; /* A FUNÇÃO RECEBEeVENTOFORM() para a atualização da página, faz a leitura dos form.querySelector, atribui os valores ao array pessoas
    com o pessoas.push({}); , faz um console.log, adiciona na página no local resultado com .innerHTML ele mesmo + as informações */

    
    
    //assiste o evento de submit -> clicar no botão de enviar!
    form.addEventListener('submit', recebeEventoForm); //ainda não estava criada e vou criar posteriormente antes dessa linha!









};

meuEscopo();