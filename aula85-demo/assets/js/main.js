class ValidaFormularioCadastro {
  constructor() {
    this.formulario = document.querySelector('.formulario');
    this.events();
  }

  events() {
    this.formulario.addEventListener('submit', e => {
      this.handleFormularioSubmit(e);
    });
  }

  handleFormularioSubmit(e) {
    e.preventDefault();
    const campos = this.checkFields();
    const senhas = this.senhaValid();

    if(senhas && campos) {
      alert('Enviando...');
      e.target.submit();
    }
  }

  checkFields() {
    let valid = true;

    for (let errorText of document.querySelectorAll('.error')) {
      errorText.remove();
    }

    for(let campo of this.formulario.querySelectorAll('.validar')) {
      let label = campo.previousElementSibling.innerHTML.replace(':', '');

      if (!campo.value) {
        this.createError(campo, `Campo "${label}" não pode estar vazio`);
        valid = false;
      }

      if(campo.classList.contains('cpf')) {
        if(!this.cpfValid(campo)) {
          this.createError(campo, 'Digite um CPF válido.');
          valid = false;
        }
      }

      if (campo.classList.contains('usuario')) {
        if(!this.usuarioValid(campo)) {
          this.createError(campo, 'Usuário inválido.');
          valid = false;
        }
      }
    }
    return valid;
  }

  senhaValid() {
    let valid = true;
    const senha = document.querySelector('.senha');
    const repetirSenha = document.querySelector('.repetir-senha');

    if (senha.value !== repetirSenha.value) {
      this.createError(senha, 'Campo senha e repetir senha devem ser iguais.');
      this.createError(repetirSenha, 'Campo senha e repetir senha devem ser iguais.');
      valid = false;
    }

    if(senha.value.length > 12 || senha.value.length < 6) {
      this.createError(senha, 'Senha entre 6 e 12 caracteres.');
      valid = false;
    }

    return valid;
  }

  usuarioValid(campo) {
    const usuario = campo.value;
    if (usuario.length > 12 || usuario.length < 3) return false;
    if(!usuario.match(/^[a-zA-Z0-9]+$/g)) return false;
    return true;
  }

  cpfValid(campo) {
    const cpf = new ValidaCPF(campo.value);
    return cpf.valida();
  }

  createError(where, msg) {
    const error = document.createElement('div');
    error.innerHTML = msg;
    error.classList.add('error');
    where.insertAdjacentElement('afterend', error);
  }
}

const valida = new ValidaFormularioCadastro();
