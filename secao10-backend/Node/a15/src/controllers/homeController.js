exports.paginaInicial = (req, res) => {
  //req.session.usuario = { nome: 'Luiz', logado: true }; //a configuração da session
  // habilitou essa possibilidade de requisição (req). Mesmo que apague ainda ficará
  //disponível pelos tempo determinado no maxAge (nesse caso 7 dias)
  //req.flash('info', 'Olá mundo!');
  //req.flash('error', 'Deu erro!');
  //req.flash('success', 'Deu certo!');
  console.log(req.flash('error'), req.flash('info'), req.flash('success'));
  res.render('index'); // não precisa da extensão .ejs
  return;
};

exports.trataPost = (req, res, next) => {
  console.log(req.body);
  res.send(req.body);
  return;
};
