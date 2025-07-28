const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
    e.preventDefault(); //evento prevenido
    /* setResultado('Olá Mundo!'); //usando a função para testar */
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    
    if (!peso) {
        setResultado('Peso inválido', false);
        return; // se for false para aqui
    }
    if (!altura) {
        setResultado('Altura inválida', false);
        return; // se for false para aqui
    }

    const imc = getImc(peso, altura);
    const classifIMC = getClassImc(imc);
    setResultado(`Seu IMC é: ${imc}, classificado como: ${classifIMC}`, true);
    console.log(imc, classifIMC);
});

//função que classifica IMC
function getClassImc(imc) {
    const classi = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];  
    //OBS: se o IF for de uma linha não precisa dos {}👀
    if (imc >= 39.9) return classi[5]; // se SIM, o return encerra função aqui!
    if (imc >= 34.9) return classi[4]; // se SIM, o return encerra função aqui!
    if (imc >= 29.9) return classi[3]; // se SIM, o return encerra função aqui!
    if (imc >= 24.9) return classi[2]; // se SIM, o return encerra função aqui!
    if (imc >= 18.5) return classi[1]; // se SIM, o return encerra função aqui!
    if (imc < 18.5) return classi[0]; // se SIM, o return encerra função aqui!
}


//função que calcula IMC
function getImc(peso, altura){
    const imc = peso / (altura**2);
    return imc.toFixed(2);
}

//função que cria um parágrafo
function criaP(className) {
    const p = document.createElement('p');
    return p;
}

//Função que captura o local e insere a mensagem digitada no parâmetro
function setResultado (msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();
    p.innerHTML = msg;
    if (isValid){ // se valor de isValid for TRUE, executa
        p.classList.add('valorValido');
    } else { //se não, FALSE, executa esse
        p.classList.add('valorInvalido');
    }
    resultado.appendChild(p);
}