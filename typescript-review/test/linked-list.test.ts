import { expect } from "chai";
import printList from "../linked-list";

describe('printList function', () => {
  beforeEach(function () {
    expect(printList).to.be.a('function');
  })
  it('returns the correct length of 4 for printList', () => {
    const list = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: null
          }
        }
      }
    };
    const output = printList(list);
    expect(output.length).to.equal(4);
    expect(output).to.contain(2);
  })
  it('returns the correct length of 8 for pintList', () => {
    const list = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: {
              value: 5,
              next: {
                value: 6,
                next: {
                  value: 7,
                  next: {
                    value: 8,
                    next: null
                  }
                }
              }
            }
          }
        }
      }
    };
    const output = printList(list);
    expect(output).to.contain(8);
    expect(output.length).to.equal(8);
  })
})
