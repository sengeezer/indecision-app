// Traditional var
// can redefine and reassign
var nameVar = 'Dave';
nameVar = 'Rodney';
// valid
var nameVar = 'Derek';

console.log('nameVar', nameVar);

// let
// redefinition not valid anymore
let nameLet = 'Rachel';
nameLet = 'Cassandra';
// invalid:
// let nameLet = 'Cassie';
console.log('nameLet', nameLet);

// const
// reassignment or redefinition invalid
const nameConst = 'Alan';
// invalid:
// nameConst = 'Boyce';
// const nameConst = 'Sid';
console.log('nameConst', nameConst);

// var is function scoped
var petName = 'Sensemilla';

function getPetName() {
  var petName = 'Hibiscus';
  return petName;
}

console.log(petName);

// Block scoping

var fullName = 'Ludwig Sensemilla';
let someName;

if (fullName) {
  var firstName = fullName.split(' ')[0];
  someName = 'Vanderhuisen';
  console.log(firstName);
}

// WOuld not worked if firstName were let or const
console.log(firstName);
console.log(someName);
