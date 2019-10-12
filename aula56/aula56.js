function criaPessoa(nomeP, sobrenomeP, a, p) {
  const pessoa = {
    nome: nomeP,
    sobrenome: sobrenomeP,
    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
    },
    altura: a,
    peso: p,
    get imc() {
      const altura = this.altura;
      const peso = this.peso;
      const resultado = peso / (altura * altura);
      return resultado.toFixed(2);
    }
  };

  return pessoa;
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
const p2 = criaPessoa('João', 'Otávio', 1.6, 50);
const p3 = criaPessoa('Maria', 'Otávio', 1.52, 60);
const p4 = criaPessoa('Stevan', 'Otávio', 1.89, 80);
const p5 = criaPessoa('Felipe', 'Otávio', 1.92, 90);
const p6 = criaPessoa('Rosalva', 'Otávio', 1.77, 50);

console.log(p6.nomeCompleto);
