import { sumAll } from "../src/sum";

const table = [
  {
    numbers: [1, 1, 1],
    hasil: 3,
  },
  {
    numbers: [5, 5, 5, 5, 5],
    hasil: 25,
  },
];

test.each(table)("test sum each $numbers hasilnya $hasil", ({numbers,hasil}) => {
  expect(sumAll(numbers)).toBe(hasil);
});
