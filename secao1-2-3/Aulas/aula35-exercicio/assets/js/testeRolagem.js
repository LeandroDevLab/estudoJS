/* imagem que aumenta com rolagem do scroll */
const scrollArea = document.getElementById('scroll-area');
const img = document.getElementById('zoom-img');

window.addEventListener('scroll', () => {
  const rect = scrollArea.getBoundingClientRect();
  
  // Verifica se a section está na viewport
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    const scrollPercent = 1 - (rect.top / window.innerHeight);

    // Limita o scale entre 1 e 2
    const scale = Math.min(2, Math.max(1, 1 + scrollPercent));

    img.style.transform = `scale(${scale})`;
  }
});

/* Bolinha que mexe com cursor 
fui ajustando e mexendo e vou dando certo!*/
const area = document.getElementById('area');
const cursor = document.getElementById('cursor');

area.addEventListener('mousemove', (e) => {
  const rect = area.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

cursor.style.transform = `translate(${x}px, ${y}px) translate(-100%, -50%)`;
});
