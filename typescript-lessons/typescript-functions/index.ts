/**
 * Logs a phrase 'I'm....' to the console.
 * @param status is a string
 * @param repeat is a number
 * @returns nothing
 */

function proclaim(status = 'not ready...', repeat = 1) {
  for (let i = 0; i < repeat; i += 1) {
    console.log(`I'm ${status}`);
  }
}
proclaim();
proclaim('ready?');
proclaim('ready!', 3);

/**
 * Generates a random number for the user.
 * @returns a random number
 */

function getRandomNumber() {
  return Math.random();
}

const myVar = getRandomNumber() * 100;
console.log({myVar});

/**
 * Returns a fruit depending on value of input #
 *
 * @param value - the first input is a number
 * @returns - a fruit
 */

function returnFruit(value: number): string {
  if (value > 80) return 'apple';
  if (value > 60) return 'pear';
  if (value > 40) return 'orange';
  if (value > 20) return 'banana';
  return 'grapes';
}

console.log(returnFruit(myVar))
console.log(returnFruit(getRandomNumber() * 100))
console.log(returnFruit(getRandomNumber() * 100))


/**
 * Function concatenates two inputs together into a 'salad'. Logs it to the console.
 *
 * @param fruit1 - first input is a string
 * @param fruit2 - second input is a string
 * @returns nothing
 */

function makeFruitSalad(fruit1: string, fruit2: string): void {
  let salad = fruit1 + fruit2 + fruit2 + fruit1 + fruit2 + fruit1 + fruit1;
  console.log(salad);
}

makeFruitSalad('banana', 'pineapple');
