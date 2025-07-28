/* Escopo Global */
//CLOSURES é a habilidade de acessar o seu 
// escopo lexico.
function retornaFuncao (){
    const nome = 'Luiz';
    return function(){
        return nome;
    }
}

const funcao = retornaFuncao();
const funcao2 = retornaFuncao();
console.log(funcao);
console.log(funcao());

