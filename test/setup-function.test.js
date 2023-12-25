beforeAll(() => {
  console.log("before ALl");
});
beforeEach(() => {
  console.log("before each");
});

afterEach(() => {
  console.log("after each");
});
afterAll(() => {
  console.log("after all");
});
//
test("setup function 1", () => {
  const num = 3;
  expect(num).toBe(3);
});

test("setup function 2", () => {
  const num = 4;
  expect(num).toBe(4);
});
