/* Fazer uma factory só pra treinar */
function criaCalculadora() {
    return {
        /* atributos */
        display: document.querySelector('.display'),

        /* métodos */
        inicia() {
            // this -> calculadora
            this.display.focus(); // iniciar com focu na área de text
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizaConta();

                }
            });
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1); // tamanho da string 0 (começando no inicio) -1 (vai até o penultimmo, excluindo o ultimo da apresentação), retirando o ultimo caractere.
        },

        realizaConta() {
            let conta = this.display.value;

            //😱Eval🤯😰 pode ser muito perigoso pois pode executar qualquer comando JS inserido
            // o Eval vai tentar executar a string como um comando.
            // após o alerta de segurança procurei no ChatGPT uma forma mais segura ele
            // sugeriu 3, duas ainda mais seguras que essa.

            try {
                // conta = eval(conta); ❌nada seguro, professor explificou a função eval(), não é recomendado o uso, só para teste!

                // Verifica se a conta contém apenas números e operadores permitidos
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
        },

        cliqueBotoes() {
            // this -> calculadora


            // document.addEventListener('click', function(e) { 
            // this -> #document
            // dentro do addEventListener o this é o #document (com o nome Function, no arrowFuction não)
            // mas se eu precisar que o this seja o documento eu uso o nome function, nesse caso não preciso


            document.addEventListener('click', (e) => { //com ArrowFunction o this nunca vai mudar dentro da função
                //this -> calculadora
                const el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.display.value = '';
                }

                if (el.classList.contains('btn-del')) {
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')) {
                    this.realizaConta();
                }


            }); //.bind(this)); //para corrigir e o this (com o nome Function, se fosse o caso) voltar a ser a calculadora
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }



    };
}

const calculadora = criaCalculadora();
calculadora.inicia();
