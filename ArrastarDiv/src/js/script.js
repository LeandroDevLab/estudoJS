/* Neste exemplo:
Os elementos .item são marcados como arrastáveis (draggable="true").

O evento dragstart inicia o arrasto e dragend finaliza.

Os eventos dragover e drop são usados para permitir que os itens sejam 
soltos na nova posição.
*/

// script.js
const items = document.querySelectorAll('.item');
let draggedItem = null;

// Event listeners para iniciar o arrasto
items.forEach(item => {
  // Início do arrasto
  item.addEventListener('dragstart', function () {
    draggedItem = this;
    setTimeout(() => {
      this.style.display = 'none';
    }, 0);
  });

  // Fim do arrasto
  item.addEventListener('dragend', function () {
    setTimeout(() => {
      draggedItem.style.display = 'block';
      draggedItem = null;
    }, 0);
  });

  // Quando o item arrastado passa por cima
  item.addEventListener('dragenter', function (e) {
    if (this !== draggedItem) {
      this.classList.add('over');
    }
  });

  // Quando o item arrastado sai de cima
  item.addEventListener('dragleave', function (e) {
    this.classList.remove('over');
  });

  // Enquanto estiver sobre o item
  item.addEventListener('dragover', function (e) {
    e.preventDefault(); // necessário para permitir o drop
  });

  // Quando solta o item
  item.addEventListener('drop', function (e) {
    e.preventDefault();
    this.classList.remove('over');

    if (this !== draggedItem) {
      this.parentNode.insertBefore(draggedItem, this.nextSibling); // simulando insertAfter
    }
  });
});
