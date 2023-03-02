import { expect } from 'chai';
import factorial from '../factorial-practice';

describe('recursiveSumTo function', () => {
  beforeEach(function () {
    expect(factorial).to.be.a('function');
  })
  it('returns the correct factorial of 4', () => {
    const output = factorial(4);
    expect(output).to.be.a('number');
    expect(output).to.equal(24);
  })
  it('returns the correct factorial of 5', () => {
    const output = factorial(5);
    expect(output).to.be.a('number');
    expect(output).to.equal(120);
  })
  it('returns the correct factorial of 7', () => {
    const output = factorial(7);
    expect(output).to.be.a('number');
    expect(output).to.equal(5040);
  })
  it('returns the correct factorial of 0', () => {
    const output = factorial(0);
    expect(output).to.be.a('number');
    expect(output).to.equal(1);
  })
})
