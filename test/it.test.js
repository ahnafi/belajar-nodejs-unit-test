import { sumAll } from "../src/sum";

describe("mengetest sumall dengan parameter 10,10,10", () => {
  it("maka hasilnya adalah 30", () => {
    expect(sumAll([10, 10, 10])).toBe(30);
  });
});
