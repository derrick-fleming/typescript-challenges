import { expect } from 'chai';
import { Calculator } from '../new-calculator';

describe('recursiveSumTo function', () => {
  beforeEach(function () {
    expect(Calculator).to.be.a('function');
  })
  it('returns the correct values of sums of 2 and 3', () => {
    const calculator = new Calculator();
    calculator.read(2, 3);
    expect(calculator.sum()).to.be.equal(5)
  })
  it('returns the correct values of multiplying of 2 and 3', () => {
    const calculator = new Calculator();
    calculator.read(2, 3);
    expect(calculator.mul()).to.be.equal(6)
  })
});
