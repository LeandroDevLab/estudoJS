//padrão Full MVC

//express é um micro framework que ajuda a trabalhar com a web
const express = require('express');
const app = express();
const routes = require('./routes.js');

// http://facebook.com/profiles/1 -> esse 1 parametro da URL
//...les/1?campanha=googleads&nome_campanha=seila -> esse ? e & são query string

//TRATANDO O REQ.BODY, sem isso o que for enviado será undefined
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});
