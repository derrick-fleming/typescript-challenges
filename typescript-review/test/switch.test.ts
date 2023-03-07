import { expect } from "chai";
import { switchNumbers } from "../switch-review";

describe('recursiveSumTo function', () => {
  beforeEach(function () {
    expect(switchNumbers).to.be.a('function');
  })
  it('returns the correct string of number 2', () => {
    const output = switchNumbers(2);
    expect(output).to.be.a('string');
    expect(output).to.equal('Two!');
  })
  it('returns the correct string of number 3', () => {
    const output = switchNumbers(3);
    expect(output).to.be.a('string');
    expect(output).to.equal('Three!');
  })
  it('returns the correct string of number 4', () => {
    const output = switchNumbers(4);
    expect(output).to.be.a('string');
    expect(output).to.equal('FOUR');
  })
  it('returns the correct string of number 6', () => {
    const output = switchNumbers(6);
    expect(output).to.be.a('string');
    expect(output).to.equal('Above 4 and below two');
  })
    it('returns the correct string of number 1', () => {
      const output = switchNumbers(1);
      expect(output).to.be.a('string');
      expect(output).to.equal('Above 4 and below two');
    })

});
