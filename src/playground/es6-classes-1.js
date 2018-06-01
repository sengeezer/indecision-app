class Person {
  constructor(name = 'Anon Ymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  get greeting() {
    return `Hi ${this.name}`;
  }
  get description() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

const me = new Person('Michael Dover', 42);

console.log(me.description);
