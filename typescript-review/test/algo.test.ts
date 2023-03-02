import { recursiveSumTo, loopSumTo } from '../sumto-functions';
import { expect } from 'chai';


describe('recursiveSumTo function', () => {
  beforeEach(function () {
    expect(recursiveSumTo).to.be.a('function');
  })
  it ('returns the proper sum of 5', () => {
    const output = recursiveSumTo(5);
    expect(output).to.be.a('number');
    expect(output).to.equal(15);
  })
  it('returns the proper sum of 3', () => {
    const output = recursiveSumTo(3);
    expect(output).to.be.a('number');
    expect(output).to.equal(6);
  })
  it('returns the proper sum of 100', () => {
    const output = recursiveSumTo(100);
    expect(output).to.be.a('number');
    expect(output).to.equal(5050);
  })
})

describe('loopSumTo function', () => {
  beforeEach(function () {
    expect(loopSumTo).to.be.a('function');
  })
  it('returns the proper sum of 5', () => {
    const output = loopSumTo(5);
    expect(output).to.be.a('number');
    expect(output).to.equal(15);
  })
  it('returns the proper sum of 3', () => {
    const output = loopSumTo(3);
    expect(output).to.be.a('number');
    expect(output).to.equal(6);
  })
  it('returns the proper sum of 100', () => {
    const output = loopSumTo(100);
    expect(output).to.be.a('number');
    expect(output).to.equal(5050);
  })
})
