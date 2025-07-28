import geraSenha from './geradores';

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinuscula = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');
const botao = document.querySelector('.gerar-senha');


export default () => {
    botao.addEventListener('click', () => {
        senhaGerada.innerHTML = gera();
    })
};

function gera() {
    const senha = geraSenha(
        qtdCaracteres.value,
        chkMaiusculas.checked,
        chkMinuscula.checked,
        chkNumeros.checked,
        chkSimbolos.checked
    );

    //operador lógico para avaliação de curto circuito!
    return senha || 'Nada selecionado.';
}