test("numbers", () => {
  let numbers = 2 + 2;

  expect(numbers).toBeGreaterThan(3);
  expect(numbers).toBeGreaterThanOrEqual(3);
  expect(numbers).toBeLessThan(5);
  expect(numbers).toBeLessThanOrEqual(4);

  expect(numbers).toBe(4);
});

test("adding positive numbers is not zero", () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});
