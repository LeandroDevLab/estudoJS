//usar os modulos para importar e exportar
exports.paginaInicial = (req, res) => {
  res.render('index'); // não precisa da extensão .ejs
};

exports.trataPost = (req, res) => {
  console.log(req.body);
  res.send(
    'Ei, sou sua nova rota de POST.' +
      `O que eu recebi foi: nome = ${req.body.nome} , outro campo = ${req.body.outrocampo} `
  );
};
