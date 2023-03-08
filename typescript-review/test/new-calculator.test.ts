import { expect } from 'chai';
import { Calculator, Accumulator } from '../new-calculator';

describe('Calculator function', () => {
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

describe('Accumulator function', () => {
  beforeEach(function () {
    expect(Accumulator).to.be.a('function');
  })
  it('returns the correct values of accumlator: 1 + 6', () => {
    const accumlator = new Accumulator(1);
    accumlator.add(6);
    expect(accumlator.value).to.be.equal(7);
  })
  it('returns the correct values of accumlator: 1 + 6 + 3', () => {
    const accumlator = new Accumulator(1);
    accumlator.add(6);
    accumlator.add(3);
    expect(accumlator.value).to.be.equal(10);
  })
});
