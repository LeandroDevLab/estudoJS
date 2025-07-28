// Função construtora retorna objetos
// Função fábrica retorna objetos (criaPessoa)
// na construtora precisa mundar a convernsão -> (new Pessoa)

function Pessoa (nome, sobrenome) {
    //Atributos ou métodos privadas
    const ID = 12345;
    const metodoInterno = () => {};

    //Atributos ou métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function () {
        console.log(this.nome + ': sou um método');
    }
}

const p1 = new Pessoa ('Luiz', 'Otávio');
const p2 = new Pessoa('Maria', 'Oliveira');

console.log(p1, p2);

p2.metodo();