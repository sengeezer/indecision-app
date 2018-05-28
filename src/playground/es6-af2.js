// args object

function add(a, b) {
  console.log(arguments);
  return a + b;
}

// first console log will print 1001
console.log(add(55, 1, 1001));

const adder = (...args) => {
  console.log(args);
  return args[0] + args[1];
};

console.log(adder(33, 22, 11));

// this

const user = {
  name: 'Dave',
  cities: ['Amsterdam', 'Jersey City', 'Long Beach'],
  printPlacesLived() {
    // transforms array
    this.cities.forEach((city) => {
      // this / that workaround no longer needed
      console.log(`${this.name} has lived in ${city}`);
    });
    // copies array, then alters it
    return this.cities.map(city => `${this.name} has lived in ${city}`);
  },
};

console.log(user.printPlacesLived());

// Challenge

const multiplier = {
  numbers: [1, 4, 6, 8, 5],
  multiplyBy: 7,
  multiply() {
    return this.numbers.map(num => num * this.multiplyBy);
  },
};

console.log(multiplier.multiply());
