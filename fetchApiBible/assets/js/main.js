function buscarVersiculo() {
  const input = document.getElementById('versiculo').value;
  const url = `https://bible-api.com/${encodeURIComponent(input)}`;
  // encodeURIComponent() transforma espaços e caracteres especiais em
  // uma URL válida (ex.: "john 3:16" vira "john%203%3A16").

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const resultadoDiv = document.getElementById('resultado');

      if (data.error) {
        resultadoDiv.innerHTML = `<p style="color:red;">${data.error}</p>`;
      } else {
        const texto = data.verses
          .map(
            verso =>
              `<p><strong>${verso.book_name} ${verso.chapter}:${verso.verse}</strong> - ${verso.text}</p>`
          )
          .join('');

        resultadoDiv.innerHTML = texto;
      }
    })
    .catch(error => {
      console.error('Erro na requisição:', error);
      document.getElementById('resultado').innerHTML =
        'Erro ao buscar versículo.';
    });
}
