//usar os modulos para importar e exportar
exports.paginaInicial = (req, res) => {
  res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome"><br>
    Outro campo: <input type="text" name="outrocampo">
    <button>Enviar formulário</button>
    </form>
    `);
};

exports.trataPost = (req, res) => {
  console.log(req.body);
  res.send(
    'Ei, sou sua nova rota de POST.' +
      `O que eu recebi foi: nome = ${req.body.nome} , outro campo = ${req.body.outrocampo} `
  );
};
