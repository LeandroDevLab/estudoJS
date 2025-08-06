exports.middlewareGlobal = (req, res, next) => {
  //injetando dados para todas as rotas com middlewareGlobal
  res.locals.umaVariavelLocal = 'Este é o valor da variável local.'; // posso criar um
  // res.locals para um controller específico tbm
  next();
};

exports.outroMiddlewareGlobal = (req, res, next) => {
  next();
};

exports.checkCsrfError = (err, req, res, next) => {
  if (err && err.code === 'EBADCSRFTOKEN') {
    return res.render('404');
  }
};

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
};

/* module.exports = (req, res, next) => {
  if (req.body.cliente) {
    req.body.cliente = req.body.cliente.replace(
      'Leandro',
      'Só o ADMIN pode usar Leandro'
    );
    console.log();
    console.log(`Vi que vc postou ${req.body.cliente}`);
    console.log();
  }

  next();
}; */
