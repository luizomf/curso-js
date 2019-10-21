import ValidaCPF from './ValidaCPF';

export default class GeraCPF extends ValidaCPF {
  constructor() {
    super('');
  }

  rand(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min));
  }

  formata(cpf) {
    return (
      cpf.slice(0, 3) + '.' +
      cpf.slice(3, 6) + '.' +
      cpf.slice(6, 9) + '-' +
      cpf.slice(9, 11)
    );
  }

  geraNovoCpf() {
    const cpfSemDigitos = this.rand();
    const digito1 = GeraCPF.geraDigito(cpfSemDigitos);
    const digito2 = GeraCPF.geraDigito(cpfSemDigitos + digito1);
    const novoCPF = cpfSemDigitos + digito1 + digito2;
    return this.formata(novoCPF);
  }
}
