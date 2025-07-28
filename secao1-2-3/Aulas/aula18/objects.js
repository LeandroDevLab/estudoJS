/* Objetos */

const pessoal = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi... minha idade é: ${this.idade}`);
    },

    incrementaIdade() {
        this.idade++;
    }
}; //[] array e {} é objeto

pessoal.fala();
pessoal.incrementaIdade();
pessoal.fala();
pessoal.incrementaIdade();
pessoal.fala();
pessoal.incrementaIdade();

/* 
function criaPessoa(nome, sobrenome, idade) { //esses são parametros
    return {nome, sobrenome, idade};
}

const pessoas = criaPessoa('Leandro', 'Sávio', 39); //isso é argumento
 */
/* function criaPessoa(nome, sobrenome, idade) { //esses são parametros
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
} */
