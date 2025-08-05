const express = require('express');
const route = express.Router(); //vou utilizar isso aqui como rota
const homeController = require('./controllers/homeController');
const testesController = require('./controllers/testesController');
const contatoController = require('./controllers/contatoController');

//(não vai mais escrever as funções aqui)
// Fazer o roteamento (tratar das rotas) e chamar um controlador
route.get('/', homeController.paginaInicial); //Rotas da home
route.post('/', homeController.trataPost);

//Rotas de testes
route.get('/testes/:idUsuarios?/:parametro?', testesController.teste);

//Rotas de contato
route.get('/contato/', contatoController.contato);

module.exports = route;
