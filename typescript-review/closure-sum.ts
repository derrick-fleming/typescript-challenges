export default function sumClosure(n: number) {
  return function innerSum(x: number): number {
    return n + x;
  }
}
