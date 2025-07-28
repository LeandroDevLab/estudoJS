/* Fábrica de funções 
Dá trabalho criar o objeto, mas para criar várias pessoas depois
fica muito mais fácil!!!
*/

//Factory Function - e com GETTER E SETTER uma função construtora
function criaPessoa (nome, sobrenome, peso, altura) {
    return {
        nome, 
        sobrenome,

        //GETTER
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        //SETTER
        set nomeCompleto(valor) {
            valor = valor.split(' '); //vai dividir a cada ' ' encontrado
            this.nome = valor.shift(); // this.nome vai armazenar o valor.shift (1º indice retirado)
            // this.sobrenome = valor.shift() + ' ' + valor.shift(); // deu certo, mas o join(' ') é a forma correta!
            this.sobrenome = valor.join(' ');
            console.log(valor);
        },

        /* forma 1 de criar um método/função */
        fala: function(assunto) {
            return `${this.nome} está ${assunto}.`; //o THIS se refere ao objeto que está chamando
        },

        altura,
        peso,

        /* forma 2 de criar um método/função */
        imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },

        /* GETTER -> uma função fingindo ser um atributo */
        get imc2() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        }
    };
}

const pessoa1 = criaPessoa('Luiz', 'Otávio', 153, 2.06);
console.log(pessoa1.fala('falando sobre JS'));
console.log(pessoa1.imc());
console.log(pessoa1.imc2);
console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
pessoa1.nomeCompleto = 'Leandro Sávio Oliota Ribeiro';
console.log(pessoa1.nomeCompleto);
