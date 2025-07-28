class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

exports.Pessoa = Pessoa; 

// const nome = 'Luiz';
// const sobrenome = 'Miranda';

// const falaNome = () => {
//     return nome + ' ' + sobrenome;
// };

// /* uma forma de exportar
// module.exports.nome = nome;
// module.exports.sobrenome = sobrenome;
// module.exports.falaNome = falaNome; */

// //outra forma
// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = 'o que quiser exportar como this';


// //console.log(module); //esse module é um objeto no que é possível ver somente no node
