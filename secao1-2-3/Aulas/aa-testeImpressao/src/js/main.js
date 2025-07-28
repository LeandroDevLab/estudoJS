
/* Código para gerar PDF de uma DIV */
document.getElementById('gerarPDF').addEventListener('click', () => {
    const elemento = document.getElementById('conteudo');

    const opcoes = {
        margin:       10,
        filename:     'relatorio.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opcoes).from(elemento).save();
});
