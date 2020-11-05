import { Person } from './test-modules/person';

const person1 = new Person('Luiz', 'Otávio');

// Teste de promise (2 segundos)
person1.fetchData().then(person => console.log(person1))

// Teste async/await
async function run() {
  // 2 segundos
  const pessoa = await new Person('João', 'Miranda').fetchData();
  console.log(pessoa.firstName, pessoa.lastName);
}
run();