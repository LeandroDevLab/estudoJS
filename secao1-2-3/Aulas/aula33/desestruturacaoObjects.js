const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 39,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
};

const nomeNormal = pessoa.nome; // atribuição normal

/* Atribuição via desestruturtação, muito usado desse jeito 👀 */
const { nome = '', sobrenome } = pessoa; //como a variável criada possui o mesmo nome do item no objeto basta colocar o nome do objeto
/* posso passar um valor padrão caso não exista dentro do objeto */

/* chamando o item dentro do objeto e dando um nome de outra variável */
const { idade: velhice} = pessoa;

/* desestruturação , definindo um valor padrão caso não exista*/
const { endereco: { rua = 'S/N', numero}, endereco} = pessoa;

console.log(nome, sobrenome, velhice);
console.log(rua, numero);
console.log(endereco); //objeto

