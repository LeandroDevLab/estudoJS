function init(){
    const form = document.querySelector('#formulario');
    const resultado = document.querySelector('#resultado');

    function apresentaResultado(validade){
        resultado.innerHTML = '';
        const divResultado = resultado;
        const p = document.createElement('p');
        divResultado.appendChild(p);
        p.classList.add(validade);
    }

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

    function calcularImc(evento){
        evento.preventDefault();
        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');
        let pesoNumber = Number(peso.value);
        let alturaNumber = Number(altura.value);

        const imc = pesoNumber / alturaNumber**2;
        const classifIMC = getClassImc(imc);

        if (!pesoNumber) {
            apresentaResultado('valorInvalido');
            return document.querySelector('.valorInvalido').innerHTML = `Peso Inválido`;
        }

        if (!alturaNumber) {
            apresentaResultado('valorInvalido');
            return document.querySelector('.valorInvalido').innerHTML = `Altura Inválida`;
        }

        apresentaResultado('valorValido');
        return document.querySelector('.valorValido').innerHTML = `Seu IMC é de: ${imc.toFixed(1)} (${classifIMC})`;
    }

    form.addEventListener('submit', calcularImc);
}

init();
