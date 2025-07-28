const sections = document.querySelectorAll('section');
let isScrolling = false;

window.addEventListener('wheel', (e) => {
    if (isScrolling) return;

    isScrolling = true;

    const direction = e.deltaY > 0 ? 'next' : 'prev';
    const current = [...sections].find(
        sec => sec.getBoundingClientRect().top === 0
    );

    let target;
    if (direction === 'next') {
        target = current.nextElementSibling;
    } else {
        target = current.previousElementSibling;
    }

    if (target && target.tagName === 'SECTION') {
        target.scrollIntoView({ behavior: 'smooth' });
    }

    setTimeout(() => {
        isScrolling = false;
    }, 800); // Tempo de bloqueio para não passar várias seções
});


const parallaxItems = document.querySelectorAll('.parallax-item');

window.addEventListener('scroll', () => {
    let scroll = window.scrollY;

    parallaxItems.forEach(item => {
        const speed = 0.8;
        item.style.transform = `translate(-50%, calc(-50% + ${scroll * speed}px))`;
    });
});