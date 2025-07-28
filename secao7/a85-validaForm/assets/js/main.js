/* OBSERVAÇÃO
Em funções tradicionais, o valor de this depende de como a função é chamada.

Já nas Arrow Functions, o this não muda — ele é herdado do contexto onde 
foi definido, geralmente o escopo léxico em que a função foi criada.
*/

class ValidaFormulario {
  constructor() {
    this.formmulario = document.querySelector('.formulario');
    this.eventos();
  }

  eventos() {
    this.formmulario.addEventListener('submit', e => {
      //no Arrow Function, não permite alteração do THIS, o this é a propria instância
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault(); //prevenindo o carrecamento da página
    const camposValidos = this.camposSaoValidos();
    const senhasValidas = this.senhasSaoValidas();

    if (camposValidos && senhasValidas) {
      alert('Formulário enviado');
      this.formmulario.submit(); //executa o submit prevenido anteriormente
    }
  }

  senhasSaoValidas() {
    let valid = true;

    const senha = this.formmulario.querySelector('.senha');
    const repetirSenha = this.formmulario.querySelector('.repetir-senha');

    if (senha.value !== repetirSenha.value) {
      valid = false;

    this.criaErro(
        senha,
        'Os campos senha e repetir senha precisam ser iguais'
      );

      this.criaErro(
        repetirSenha,
        'Os campos senha e repetir senha precisam ser iguais'
      );
    }

    if (senha.value.length < 6 || senha.value.length > 12) {
      valid = false;
      this.criaErro(senha, 'Senha precisa ter entre 6 e 12 caracteres');
    }

    return valid;
  }

  camposSaoValidos() {
    let valid = true;

    //com FOR OF, poderia ser FOR clássico
    for (let errorText of this.formmulario.querySelectorAll('.error-text')) {
      //console.log(errorText);
      errorText.remove();
    }

    // refatorei com forEach para revisar
    this.formmulario.querySelectorAll('.validar').forEach(campo => {
      const label = campo.previousElementSibling.innerText; // pegando o elemento irmão anterior
      if (!campo.value) {
        this.criaErro(campo, `Campo "${label}" não pode estar em branco.`);
        valid = false;
      }

      if (campo.classList.contains('cpf')) {
        if (!this.validaCPF(campo)) valid = false;
      }

      if (campo.classList.contains('usuario')) {
        if (!this.validaUsuario(campo)) valid = false;
      }
    });

    // for (let campo of this.formmulario.querySelectorAll('.validar')) {
    //   const label = campo.previousElementSibling.innerText; // pegando o elemento irmão anterior
    //   if (!campo.value) {
    //     this.criaErro(campo, `Campo "${label}" não pode estar em branco.`);
    //     valid = false;
    //   }

    //   if (campo.classList.contains('cpf')) {
    //     if (!this.validaCPF(campo)) valid = false;
    //   }

    //   if (campo.classList.contains('usuario')) {
    //     if (!this.validaUsuario(campo)) valid = false;
    //   }
    // }

    return valid;
  }

  validaUsuario(campo) {
    const usuario = campo.value;
    let tamanho = campo.value.length;
    let valid = true;
    if (tamanho < 3 || tamanho > 12) {
      console.log(tamanho);
      this.criaErro(campo, `Usuário precisa ter de 3 a 12 caracteres`);
      valid = false;
    }

    if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
      this.criaErro(campo, `Usuário com letras e/ou números`);
      valid = false;
    }
    return valid;
  }

  validaCPF(campo) {
    const cpf = new ValidaCPF(campo.value);

    if (!cpf.valida()) {
      this.criaErro(campo, 'CPF inválido');
      return false;
    }
    return true;
  }

  criaErro(campo, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    campo.insertAdjacentElement('afterend', div);
  }
}

const valida = new ValidaFormulario();
