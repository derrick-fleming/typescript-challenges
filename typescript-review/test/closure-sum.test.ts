import { expect } from 'chai';
import sumClosure from '../closure-sum';

describe('sumClosure function', () => {
  beforeEach(function () {
    expect(sumClosure).to.be.a('function');
  })
  it ('retuns the sum of 1 & 2 as 3', () => {
    const output = sumClosure(1)(2);
    expect(output).to.equal(3);
  })
  it('retuns the sum of -9 and 4 as -5', () => {
    const output = sumClosure(-9)(4);
    expect(output).to.equal(-5);
  })
  it('retuns the sum of -12 and 45 as 33', () => {
    const output = sumClosure(-12)(45);
    expect(output).to.equal(33);
  })
})
