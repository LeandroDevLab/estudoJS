exports.paginaInicial = (req, res) => {
  res.render('index'); // não precisa da extensão .ejs
  return;
};

exports.trataPost = (req, res, next) => {
  console.log(req.body);
  res.send(req.body);
  return;
};
