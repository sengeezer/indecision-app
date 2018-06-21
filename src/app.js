import subtract, { square, add } from './utils';
import isSenior, { isAdult, canDrink } from './person';

console.log('App is running');

console.log(square(3), add(5, 6));

console.log(isAdult(17), canDrink(21), isSenior(66));

console.log(subtract(88, 24));
