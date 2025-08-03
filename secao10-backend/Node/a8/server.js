//express é um micro framework que ajuda a trabalhar com a web
const express = require('express');
const app = express();

// http://facebook.com/profiles/1 -> esse 1 parametro da URL
//...les/1?campanha=googleads&nome_campanha=seila -> esse ? e & são query string

//TRATANDO O REQ.BODY, sem isso o que for enviado será undefined
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome"><br>
    Outro campo: <input type="text" name="outrocampo">
    <button>Enviar formulário</button>
    </form>
    `);
});

// com o :qualquerCoisa, vai aceitar um parametro após
// com o ? após vai aceitar o /testes/ somente e os parametros
// com ? só funcionando no express 4.21 (mais recomendada até o momento 2025)
app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
  //testes/3 <-req.parms
  //testes/?chave1=valor1&chave2=valor2 <-req.query
  console.log(req.params);
  console.log(req.query);
  //res.send(req.params); // só pode ter um send
  res.send(`${req.params}, ${req.query.nome}`);
});

app.post('/', (req, res) => {
  console.log(req.body); // não vem se não tratar
  res.send(
    `O que eu recebi foi: nome = ${req.body.nome} , outro campo = ${req.body.outrocampo} `
  );
});

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});
