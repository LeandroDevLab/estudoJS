//usar os modulos para importar e exportar
exports.paginaInicial = (req, res) => {
  res.render('index'); // não precisa da extensão .ejs
  return;
};

exports.trataPost = (req, res, next) => {
  console.log(req.body);
  res.send(req.body);
  return;
};

/* 
//COMPLETANDO O EXEMPLO INICIAL DO MIDDLEWARE
exports.paginaInicial = (req, res, next) => {
  console.log('Respondendo ao cliente.');
  res.render('index'); // não precisa da extensão .ejs
  console.log(
    `'Pagina inicial' -> Olha o que tem na req.session.nome ${req.session.nome}`
  );
  next();
}; 
*/
