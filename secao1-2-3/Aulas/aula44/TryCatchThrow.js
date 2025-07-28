/* Tratando e lançando erro Try, Catch e Throw */

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new ReferenceError('x e y precisam ser números');
    }

    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma(1, '2'));
} catch (erro) {
    //console.log(erro); //NUNCA
    console.log('Alguma coisa mais entendível para o usuário!');
}





try {
    console.log(naoExisto);
} catch (erro) {
    console.log('naoExisto não existe.'); //só um teste nunca exiba o erro para
    // o usuario final, armazene em algum lugar se for o caso
    // mas nunca exiba para o usuário, pode ser até comprometer a segurança
    // da aplicação.
    // console.log(erro);  // <- isso NUNCA👀!
}
