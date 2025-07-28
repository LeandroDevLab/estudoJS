// (condicao) ? 'Valor para verdadeiro' : 'Valor para falso';

const pontuacaoUsuario = 999;

/* já jogando o valor da condição dentro da variável nível do Usuário */
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'VIP' : 'normal';
console.log(nivelUsuario)

/* if (pontuacaoUsuario >= 1000) {
    console.log('Usuário VIP');
} else {
    console.log('Usuário normal');
} */

/* SETando um valor padrão */
const corUsuario = null;
const corPadrao = corUsuario || 'Preta'; //caso o usuário não escolha uma cor, será usado preto (fallback)

