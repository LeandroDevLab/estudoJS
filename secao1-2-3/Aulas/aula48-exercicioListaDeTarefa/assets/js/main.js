const caixa = document.querySelector('.conteudo');
const adicionar = document.querySelector('.adicionar');
const lista = document.querySelector('.lista');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

caixa.addEventListener('keypress', function(e) {
    //console.log(e);
    if (e.keyCode === 13) { // é o codigo da tecla ENTER, dá pra ver no console.log(e)
        if(!caixa.value) return; // se a caixa tiver vazia não acontece o resto(por causa do return)
        criaTarefa(caixa.value);
    }
});

function limpaInput() {
    caixa.value = '';
    caixa.focus(); //evento de selecionar um input, neste caso o caixa
}

function criaBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    //botaoApagar.classList.add('apagar');
    botaoApagar.setAttribute('class', 'apagar');
    botaoApagar.setAttribute('title', 'Apagar esta tarefa');
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerText = textoInput;
    lista.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefas();
}

document.addEventListener('click', function(evento) {
    
    const elemento = evento.target;
    
    if (elemento.classList.contains('adicionar')) {
        if(!caixa.value) return; // se a caixa tiver vazia não acontece o resto(por causa do return)
        criaTarefa(caixa.value);
    }

    if (elemento.classList.contains('apagar')) {
        // console.log('apagar clicado'); //verificar click
        // console.log(elemento.parentElement); // verificar elemento pai direto
        elemento.parentElement.remove();
        salvarTarefas();
    }
});

/* Funçao que salva num JSON.stringify (STRING) e seta
os item no localStore */
function salvarTarefas () {
    const liTarefas = lista.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); //onde tinha Apagar, agora tem nada
        // .trim() remove o espaço
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('nomeDeRecuperacao', tarefasJSON);
    console.log(listaDeTarefas);
}

/* Função que recupera essas informações da JSON string salva e
transforma em array novamente com o JSON.parse */
function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('nomeDeRecuperacao');
    const listaDeTarefas = JSON.parse(tarefas);
    
    /* aqui eu recrio novamente as listas ao carregar a página
    com o For do array recuperado da LocalStorage */
    for(let valor of listaDeTarefas) {
        criaTarefa(valor);
    }
}
adicionaTarefasSalvas();

