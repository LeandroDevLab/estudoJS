// string literal '' "" ``
//object literal {}, array literal [];
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

/* anotação de . */
console.log(pessoa.nome);
/* anotação de [] */
const chave = 'nome'; // nesse caso só funcionaria com pessoa[chave]
console.log(pessoa['nome']);
console.log(pessoa[chave]);

/* construtor */
const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';
pessoa1.idade = 30;
pessoa1.falarNome = function () {
    return (`${this.nome} está falando seu nome!`);
}; //método falarNome dentro do Objeto
pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}; //métodos que manipulam coisas do próprio objeto

console.log(pessoa1.falarNome());
console.log(pessoa1.getDataNascimento());
console.log(pessoa, pessoa1);

for (let chave in pessoa1) {
    console.log(chave);
}

/* quando Function estão dentro não funciona o FOR OF */
for (let valor in pessoa1) {
    console.log(pessoa1[valor]);
}

/* FACTORY FUNCTIONS - CONSTRUCTOR FUNCTIONS */

// FACTORY FUNCTIONS
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto () {
            return `${this.nome} ${this.nome}`;
        }
    };
}

const p1 = criaPessoa('Luiz', 'Otávio');
p1.nome = 'Leandro'; // não estou alterando a constante e sim um valor dentro do valor
console.log(p1.nomeCompleto);

//CONSTRUCTOR FUNCTIONS
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.falaNome = function() {
        return `${this.nome} ${this.sobrenome}`
    }

    Object.freeze(this); // congelando todos os valores desse objeto -> 
    //pode ser perigoso, pois trava tudo para não alterar nada que for criado
    // não posso dar um delete this.nome depois do objeto criado... 
}

//a palavra new vai criar um obj vazio {} <- this de cada pessoa
const p2 = new Pessoa('Luiz', 'Otávio');
Object.freeze(p2); // eu travo o objeto, mesmo tentando atribuir não vai, mesmo sem erro
p2.nome = 'Leandro'; // tentei, mas não vai, pois foi congelado
//p2 = 'outra coisa'; // vai dar erro!
console.log(p1);
console.log(p2);
