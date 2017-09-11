import * as O from '../src/index.js';

describe("objects", () => {
  it("update(f, k, o)", () => {
    const obj = { a: "a", c: 1 };
    O.update(v => v + "b", "a", obj).should.be.eql({
      a: "ab",
      c: 1
    });
  });
});
