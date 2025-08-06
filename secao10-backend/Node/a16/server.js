require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
//Configuração das Sessions com o mongoDB e chamando os flashMessage
const MongoStore = require('connect-mongo');
const flashMessage = require('connect-flash');

//funcionaria, mas mostraria usuário e senha
//const connectionString = 'mongodb+srv://<user>:<password>@cluster0.xmb2nbn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

// Conexão com o banco de dados
mongoose
  .connect(process.env.CONNECTIONSTRING)
  .then(() => {
    //console.log('Conectei a base de dados.');
    app.emit('pronto'); // Emite um evento quando a conexão estiver pronta
  })
  .catch(e => console.log(e));

//TRATANDO O REQ.BODY, sem isso o que for enviado será undefined
app.use(express.urlencoded({ extended: true }));
//Pasta de Conteúdo estático
app.use(express.static(path.resolve(__dirname, 'public'))); // caminho absoluto

//importando o express-session
const session = require('express-session'); //vai salvar a sessão na memória
// Configuração das opções de sessão
const sessionOptions = session({
  secret: 'asdfasdfasdfasdf',
  // Usando MongoStore.create() para instanciar o store
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }), // Conecta ao MongoDB
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, // duração de 7 dias (ms*s*h*dia*dias)
    httpOnly: true,
  },
});
// Aplica as configurações de sessão e flash messages
app.use(sessionOptions);
app.use(flashMessage());

// Tratamento de dados do corpo da requisição (POST)
app.use(express.urlencoded({ extended: true }));
// Permite o uso de JSON no corpo da requisição
app.use(express.json());

//configuração do Views
app.set('views', path.resolve(__dirname, 'src', 'views')); //caminho absoluto
app.set('view engine', 'ejs'); //para renderizar os view (if/for dentro do HTML)

//Nossos próprios Middlewares -> Importa e aplica os middlewares globais
const {
  middlewareGlobal,
  outroMiddlewareGlobal,
} = require('./src/middlewares/middleware.js'); //só relembrando: via desestruturação
app.use(middlewareGlobal); // todas as rotas vão passar nesse middleware
//app.use(outroMiddlewareGlobal); // todas as rotas vão passar nesse middleware
//Se eu mandasse uma rota antes, só estaria na rota
//app.use('/contato', outroMiddlewareGlobal);

//usando as rotas do routes.js
const routes = require('./routes.js');
app.use(routes);

// Inicia o servidor apenas após a conexão com o banco de dados ser estabelecida
app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
});
