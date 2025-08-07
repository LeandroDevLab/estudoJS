const express = require('express');
const route = express.Router(); //vou utilizar isso aqui como rota
const homeController = require('./src/controllers/homeController');

// Rotas da home
route.get('/', homeController.index);

module.exports = route;
