exports.middlewareGlobal = (req, res, next) => {
  next();
};

exports.outroMiddlewareGlobal = (req, res, next) => {
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
