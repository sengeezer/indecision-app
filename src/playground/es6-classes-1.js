class Person {
  constructor(name = 'Anon Ymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  get greeting() {
    return `Hi ${this.name}`;
  }
  get description() {
    return `${this.name} is ${this.age} year(s) old`;
  }
}

const me = new Person('Michael Dover', 42);

console.log(me.description);

class Student extends Person {
  constructor(name, age, major = 'CS') {
    super(name, age);
    this.major = major;
  }
  getMajor() {
    return !!this.major;
  }
  get description() {
    return `${super.description}${this.getMajor ? ` with major ${this.major}` : ''}.`;
  }
}

const her = new Student('hey', 22, 'comms');

console.log(her.description);

class Tourist extends Person {
  constructor(name, age, hometown = 'NYC') {
    super(name, age);
    this.hometown = hometown;
  }
  getHometown() {
    return !!this.hometown;
  }
  get greeting() {
    return `${super.greeting}${this.getHometown ? ` from ${this.hometown}` : ''}.`;
  }
}

const them = new Tourist('wonderboy', 34, 'CHI');

console.log(them.greeting);
