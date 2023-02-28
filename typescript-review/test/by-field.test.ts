import { expect } from 'chai';
import byField from '../byfield-name';


describe('function with users.sort((function...))', () => {
  it('returns the correct sort of the array object', () => {
    let users = [
      { name: "John", age: 20, surname: "Johnson" },
      { name: "Pete", age: 18, surname: "Peterson" },
      { name: "Ann", age: 19, surname: "Hathaway" }
    ];
    const output = users.sort((a, b) => a.name > b.name ? 1 : -1);
    expect(typeof output).to.be.equal('object')
    expect(output.length).to.equal(3);
    expect(output[0].name).to.equal('Ann');
    expect(output[1].name).to.equal('John');
    expect(output[2].name).to.equal('Pete');
  })
  it('returns the correct sort of the array object', () => {
    let users = [
      { name: "Anne", age: 20, surname: "Johnson" },
      { name: "Ash", age: 18, surname: "Ketchum" },
      { name: "Andy", age: 19, surname: "Hathaway" }
    ];
    const output = users.sort((a, b) => a.name > b.name ? 1 : -1);
    expect(typeof output).to.be.equal('object')
    expect(output.length).to.equal(3);
    expect(output[0].name).to.equal('Andy');
    expect(output[1].name).to.equal('Anne');
    expect(output[2].name).to.equal('Ash');
  })
})

describe('byField function with users.sort(byField....)', () => {
  it('returns the correct sort of the array object for name', () => {
    let users = [
      { name: "John", age: 20, surname: "Johnson" },
      { name: "Pete", age: 18, surname: "Peterson" },
      { name: "Ann", age: 19, surname: "Hathaway" }
    ];
    const output = users.sort(byField('name'));
    expect(typeof output).to.be.equal('object')
    expect(output.length).to.equal(3);
    expect(output[0].name).to.equal('Ann');
    expect(output[1].name).to.equal('John');
    expect(output[2].name).to.equal('Pete');
  })
  it('returns the correct sort of the array object for age', () => {
    let users = [
      { name: "Anne", age: 20, surname: "Johnson" },
      { name: "Ash", age: 18, surname: "Ketchum" },
      { name: "Andy", age: 19, surname: "Hathaway" }
    ];
    const output = users.sort(byField('age'));
    expect(typeof output).to.be.equal('object')
    expect(output.length).to.equal(3);
    expect(output[0].name).to.equal('Ash');
    expect(output[1].name).to.equal('Andy');
    expect(output[2].name).to.equal('Anne');
  })
})
