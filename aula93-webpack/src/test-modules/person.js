/* 
Este arquivo é apenas um exemplo que adicionei após
as aulas para garantir que não teremos erros com
classes, funções assíncronas e outras coisas relacionadas.
*/
export class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fetchData() {
    return new Promise((resolve) => {
      return setTimeout(() => {
        return resolve(this);
      }, 2000);
    });
  }
}
