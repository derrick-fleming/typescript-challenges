let arr = [1, 2, 3, 4, 5, 6, 7];

export function inBetween(a: number, b: number) {
  return function(x: number) {
    return x >= a && x <= b
  }
}
