import { expect } from 'chai';
import { inBetween } from '../filter-function';


describe('filter function', () => {
  it('returns the correct filtered values for array: [1, 2, 3, 4, 5, 6, 7]', () => {
    let arr = [1, 2, 3, 4, 5, 6, 7];
    const output = arr.filter(inBetween(3, 6));
    expect(typeof output).to.be.equal('object')
    expect(output.length).to.equal(4);
    expect(output).to.eql([3, 4, 5, 6])
  })
  it('returns the correct filtered values for array: [1, 2, 3, 4, 5, 6, 7]', () => {
    let arr = [1, 2, 3, 4, 5, 6, 7];
    const output = arr.filter(inBetween(2, 6));
    expect(typeof output).to.be.equal('object')
    expect(output.length).to.equal(5);
    expect(output).to.eql([2, 3, 4, 5, 6])
  })
})
