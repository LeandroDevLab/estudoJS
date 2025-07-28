// IIFE -> Immediately invoked function expression
// Para fugir do escopo Global

const sobrenome = 'teste';

/* esse é o normal */
function qualquerCoisa() {
    //Uma função normal pode acessar e modificar o escopo global
    console.log('Todo engine.js');
    console.log(sobrenome);
}
qualquerCoisa(); 

/* esse é o IIFE */
(function() {
    //não polui o escopo global
    const nome = 'Essa é uma IIFE, não tocando o escopo global';
    console.log(nome);
    console.log(sobrenome);
    qualquerCoisa();

})(); //chamando ela imediatamente após!


