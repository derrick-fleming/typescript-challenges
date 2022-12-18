/* eslint-disable no-void */
/* eslint-disable no-console */
// Default Parameters
// parameters are set to be a string & a number;
function proclaim(status, repeat) {
  if (status === void 0) { status = 'not ready...'; }
  if (repeat === void 0) { repeat = 1; }
  for (var i = 0; i < repeat; i += 1) {
    console.log("I'm ".concat(status));
  }
}
proclaim();
proclaim('ready?');
proclaim('ready!', 3);
// Inferring Return Types:
// function infers number.
function getRandomNumber() {
  return Math.random();
}
var myVar = getRandomNumber() * 100;
console.log({ myVar });
// Explicit Return Types:
function returnFruit(value) {
  if (value > 80) { return 'apple'; }
  if (value > 60) { return 'pear'; }
  if (value > 40) { return 'orange'; }
  if (value > 20) { return 'banana'; }
  return 'grapes';
}
console.log(returnFruit(myVar));
console.log(returnFruit(getRandomNumber() * 100));
console.log(returnFruit(getRandomNumber() * 100));
// Void Return Types:
function makeFruitSalad(fruit1, fruit2) {
  var salad = fruit1 + fruit2 + fruit2 + fruit1 + fruit2 + fruit1 + fruit1;
  console.log(salad);
}
makeFruitSalad('banana', 'pineapple');
