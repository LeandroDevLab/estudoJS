//express é um micro framework que ajuda a trabalhar com a web
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button>Enviar formulário</button>
    </form>
    `);
});

app.post('/', (req, res) => {
  res.send('Recebi o formulário!');
});

//criando outra rota (uma página para cada rota)
app.get('/contato', (req, res) => {
  res.send('Obrigado por entrar em contato com a gente!');
});

//a função é opcional, mas cria o link clicável e ainda uma mensagem
// que o servidor está rodando
app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});
