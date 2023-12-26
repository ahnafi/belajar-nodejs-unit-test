import { sum, sumAll } from "../src/sum.js";

test("test sum 1 , sum(2,3) expect 5", () => {
  const harusnya = sum(2, 3);
  expect(harusnya).toBe(5);
});

test("test sum 2 , sum(1,3) expect 4", () => {
  const harusnya = sum(1, 3);
  expect(harusnya).toBe(4);
});

test("test sum 3 , sum(6,3) expect 9", () => {
  const harusnya = sum(6, 3);
  expect(harusnya).toBe(9);
});

test('sumall', () => {
  const angka = [1,1,1,1,1]
  expect(sumAll(angka)).toBe(5)
});