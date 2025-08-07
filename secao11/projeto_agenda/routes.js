const express = require('express');
const route = express.Router(); //vou utilizar isso aqui como rota
const homeController = require('./src/controllers/homeController');
const testesController = require('./src/controllers/testesController');
const contatoController = require('./src/controllers/contatoController');

// passou dentro da rota, passou no meuMiddleware e depois no homeController
route.get('/', homeController.paginaInicial);

//Rotas da home
route.post('/', homeController.trataPost);

//Rotas de testes
route.get('/testes/:idUsuarios?/:parametro?', testesController.teste);

//Rotas de contato
route.get('/contato/', contatoController.contato);

module.exports = route;

/* 
//EXEMPLO DE MIDDLEWARE

//Função de meio de caminho (interceptar coisas)
function meuMiddleware(req, res, next) {
  req.session = { nome: 'Luiz', sobrenome: 'Miranda' };
  console.log();
  console.log('Passei no seu Middleware');
  console.log();
  next(); // sem o next() não vai continuar carregando o restante
}

route.get(
  '/',
  meuMiddleware,
  homeController.paginaInicial,
  function (req, res, next) {
    console.log();
    console.log('Ainda estou aqui...');
    console.log(
      `'Última função/middleware' -> Olha o que tem na req.session.nome ${req.session.nome}`
    );
  }
);  
*/
