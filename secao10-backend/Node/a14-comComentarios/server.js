require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

//funcionaria, mas mostraria usuário e senha
//const connectionString = 'mongodb+srv://<user>:<password>@cluster0.xmb2nbn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose
  .connect(process.env.CONNECTIONSTRING)
  .then(() => {
    //console.log('Conectei a base de dados.');
    app.emit('pronto');
  })
  .catch(e => console.log(e));

const routes = require('./routes.js');
const path = require('path');
//só relembrando: via desestruturação
const {
  middlewareGlobal,
  outroMiddlewareGlobal,
} = require('./src/middlewares/middleware.js');

//TRATANDO O REQ.BODY, sem isso o que for enviado será undefined
app.use(express.urlencoded({ extended: true }));

//Pasta de Conteúdo estático
app.use(express.static(path.resolve(__dirname, 'public'))); // caminho absoluto

//configuração do Views
app.set('views', path.resolve(__dirname, 'src', 'views')); //caminho absoluto
app.set('view engine', 'ejs'); //para renderizar os view (if/for dentro do HTML)

//Nossos próprios Middlewares
app.use(middlewareGlobal); // todas as rotas vão passar nesse middleware
//app.use(outroMiddlewareGlobal); // todas as rotas vão passar nesse middleware

//usando as rotas do routes.js
app.use(routes);

app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
});
