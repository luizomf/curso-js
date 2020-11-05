export class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fetchData() {
    return new Promise(resolve => {
      return setTimeout(() => {
        return resolve(this)
      }, 2000);
    })
  }
}