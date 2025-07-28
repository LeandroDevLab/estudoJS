
try {
    // É executada quando não há erros
} catch (e) {
    // é executada quando há erros
} finally {
    // Sempre
}

try {
    //console.log(a);
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o arquivo'); // se ficar aqui e der erro não 
    // fechará o arquivo, pois pulará para o CATCH!!!

    /* pode ter try dentro de try */
    try {
        console.log(b);
    } catch (e) {
        console.log('deu erro');
    } finally {
        console.log('também sou finally!');
    }

} catch (e) {
    console.log('Tratando o erro');
} finally {
    // Sempre executará
    console.log('FINALLY: eu sempre sou executado');
}