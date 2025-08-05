//padrão Full MVC
//express é um micro framework que ajuda a trabalhar com a web
const express = require('express');
const app = express();
const routes = require('./routes.js');
const path = require('path');

//TRATANDO O REQ.BODY, sem isso o que for enviado será undefined
app.use(express.urlencoded({ extended: true }));

//Pasta de Conteúdo estático
app.use(express.static(path.resolve(__dirname, 'public'))); // caminho absoluto

//configuração do Views
app.set('views', path.resolve(__dirname, 'src', 'views')); //caminho absoluto
app.set('view engine', 'ejs'); //para renderizar os view (if/for dentro do HTML)

//usando as rotas do routes.js
app.use(routes);

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});
