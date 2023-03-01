let arr = [1, 2, 3, 4, 5, 6, 7];

export function inBetween(a: number, b: number) {
  return function(x: number) {
    return x >= a && x <= b
  }
}

export function inArray(arr: number[]) {
  return function(x: number) {
    return arr.includes(x);
  }
}
