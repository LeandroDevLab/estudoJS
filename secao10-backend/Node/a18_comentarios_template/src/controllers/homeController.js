exports.paginaInicial = (req, res) => {
  res.render('index', {
    titulo: 'Este será o título da página',
    numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  }); //injetando dados, só no template do index

  return;
};

exports.trataPost = (req, res, next) => {
  console.log(req.body);
  res.send(req.body);
  return;
};
