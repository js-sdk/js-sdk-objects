import * as O from '../src/index.js';

describe("objects", () => {
  it("update(f, k, o)", () => {
    const obj = { a: "a", c: 1 };
    O.update(v => v + "b", "a", obj).should.be.eql({
      a: "ab",
      c: 1
    });
  });

  it("updateWithKey(f, k, o)", () => {
    const obj = { a: "b", c: 1 };
    O.updateWithKey((k, v) => k + v, "a", obj).should.be.eql({
      a: "ab",
      c: 1
    });
  });

  it("merge(f, a, b)", () => {
    const a = { a: 1, b: 2 };
    const b = { a: 3, c: 4 };
    const f = (k, a, b) => b /* always choose b */;
    O.merge(f, a, b).should.be.eql({
      a: 3, b: 2, c: 4
    });
  });
});
