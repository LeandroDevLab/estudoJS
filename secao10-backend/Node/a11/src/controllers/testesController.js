exports.teste = (req, res) => {
  //testes/3 <-req.parms
  //testes/?chave1=valor1&chave2=valor2 <-req.query
  console.log(req.params);
  console.log(req.query);
  //res.send(req.params); // só pode ter um send
  res.send(
    `${req.params}, ${req.query.nome}, ${req.params.idUsuarios}, ${req.params.parametro}`
  );
};
