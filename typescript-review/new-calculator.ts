export function Calculator () {

  this.read = function (a: number, b: number) {
    this.number1 = a;
    this.number2 = b;
  }
  this.sum = function() {
    return this.number1 + this.number2;
  }

  this.mul = function() {
    return this.number1 * this.number2;
  }

}
