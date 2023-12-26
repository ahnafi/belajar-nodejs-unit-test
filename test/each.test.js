import { sum, sumAll } from "../src/sum";
// test dengan menggunakan each sangat berguna jika kita membuat test yang sama
// namun hanya parameternya saja yang berbeda

// misal test yang sama

test("sumall([1,1,1]) expect 3", () => {
  expect(sumAll([1, 1, 1])).toBe(3);
});
test("sumall([1,1,1,1,1]) expect 5", () => {
  expect(sumAll([1, 1, 1, 1, 1])).toBe(5);
});

// test seperti di atas sangan kurang practice karena hanya berbeda parameternya saja
// test each yang best practice

const table = [
  [[1, 1, 1], 3],
  [[2, 2, 2, 2, 2], 10],
  [[1, 1, 1, 1, 1], 5],
];

test.each(table)("test each %s hasilnya %d", (arr, hasilnya) => {
  expect(sumAll(arr)).toBe(hasilnya);
});

// each object
const table2 = [
  [2, 3, 5],
  [1, 1, 2],
];

test.each(table2)("test each sum %d + %d hasilnya %d", (x, y, res) => {
  expect(sum(x, y)).toBe(res);
});
