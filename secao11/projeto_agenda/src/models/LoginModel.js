const mongoose = require('mongoose');
const validator = require('validator'); //Instalar pacote de validação (npm i validator) e importar
const bcryptjs = require('bcryptjs'); // pacote para criptografar informação

//O MongoDB não trata os dados, cabe vc tratar
//por isso usar o mongoose, para garantir que os dados estejam como queremos
const LoginSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const LoginModel = mongoose.model('Login', LoginSchema); //vai retornar uma promisse

class Login {
  constructor(body) {
    this.body = body;
    this.errors = [];
    this.user = null;
  }

  //precisa ser um método async
  async register() {
    this.valida();
    if (this.errors.length > 0) return; //checar após valida()

    try {
      await this.userExists();
    } catch (e) {
      console.log(e);
    }

    if (this.errors.length > 0) return; //chega após userExists()

    //Criando passo para Criptografar
    const salt = bcryptjs.genSaltSync();
    this.body.password = bcryptjs.hashSync(this.body.password, salt);

    try {
      this.user = await LoginModel.create(this.body); //await pq é async e só cria depois de todas as validações (validar e cleanUp)
    } catch (e) {
      console.log(e); // pode fazer outra coisa no catch,
      // mas o await precisa está dentro de um Try/Catch
    }
  }

  async userExists() {
    const user = await LoginModel.findOne({ email: this.body.email });
    if (user) this.errors.push('Usuário já cadastrado!');
  }

  valida() {
    this.cleanUp();
    //validação
    //O e-mail precisa ser válido
    if (!validator.isEmail(this.body.email)) {
      this.errors.push('E-mail inválido!');
    }
    //Senha entre 3 e 50 caracteres
    if (this.body.password.length < 3 || this.body.password.length > 50) {
      this.errors.push('A senha precisa ter entre 3 e 50 caracteres.');
    }
  }

  cleanUp() {
    for (let key in this.body) {
      if (typeof this.body[key] !== 'string') {
        this.body[key] = '';
      }
    }

    //garantindo que o objeto vai ter só os campos que quero
    this.body = {
      email: this.body.email,
      password: this.body.password,
    };
  }
}

module.exports = Login;
