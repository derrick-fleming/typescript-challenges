import fibonacci from "../fibonacci";
import { expect } from "chai";

describe('fibonacci function', () => {
  beforeEach(function () {
    expect(fibonacci).to.be.a('function');
  })
  it('returns the fibnoacci sequence of 3', () => {
    const output = fibonacci(3);
    expect(output).to.equal(2);
  })
  it('returns the fibnoacci sequence of 7', () => {
    const output = fibonacci(7);
    expect(output).to.equal(13);
  })
  it('returns the fibnoacci sequence of 77', () => {
    const output = fibonacci(77);
    expect(output).to.equal(5527939700884757);
  })
})
