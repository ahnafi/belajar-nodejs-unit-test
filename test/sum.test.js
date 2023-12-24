import { sum } from "../src/sum.js";

test("test ajah harusnya keluar", () => {
  const harusnya = sum(2, 3);

  expect(harusnya).toBe(5);
});
