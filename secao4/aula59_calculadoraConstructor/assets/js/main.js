/* Fazer uma Função Construtora só pra treinar */
function Calculadora() {
    /* atributos */
    this.display = document.querySelector('.display');

    /* Métodos */
    this.inicia = () => {
        // this -> calculadora
        this.display.focus(); // iniciar com focu na área de text
        this.cliqueBotoes();
        this.pressionaEnter();
    };

    this.cliqueBotoes = () => {
        document.addEventListener('click', (event) => {
            const elemento = event.target;
            if (elemento.classList.contains('btn-num')) {
                this.btnParaDisplay(elemento.innerText);
                this.display.focus();
            };
            if (elemento.classList.contains('btn-clear')) this.clear();
            if (elemento.classList.contains('btn-del')) this.del();
            if (elemento.classList.contains('btn-eq')) this.realizaConta();
        });
    };

    this.btnParaDisplay = valor => this.display.value += valor;
    
    this.clear = () => this.display.value = '';
    
    this.del = () => this.display.value = this.display.value.slice(0, -1);



    this.pressionaEnter = () => {
        this.display.addEventListener('keyup', e =>  (e.keyCode === 13) ? this.realizaConta(): focus());
    };

    this.realizaConta = () => {
        let conta = this.display.value;

        try {
            if (/^[0-9+\-*/().\s]+$/.test(conta)) {
                conta = new Function(`return ${conta}`)();

                if (conta === undefined || isNaN(conta)) {
                    alert('Conta inválida');
                    return;
                }

                this.display.value = String(conta);
            } else {
                alert('Expressão inválida');
            }
        } catch (erro) {
            alert('Conta inválida');
        }
    };

};


const calculadora = new Calculadora();
calculadora.inicia();
