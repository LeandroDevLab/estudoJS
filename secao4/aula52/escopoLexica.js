/* Escopo Lexico da função */
const nome = 'Luiz';

function falaNome() {
    const nome = 'Leandro';
    console.log(nome);
}

function usaFalaNome() {
    const nome = 'Otávio';
    falaNome();
}
usaFalaNome();
