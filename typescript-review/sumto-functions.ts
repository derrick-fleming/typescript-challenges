export function recursiveSumTo(n: number): number {
  return (n == 1) ? n : n + recursiveSumTo(n -1);
}

export function loopSumTo(n: number): number {
  let sum = 0;
  for (let i = n; i > 0; i--) {
    sum = sum + i;
  }
  return sum;
}
