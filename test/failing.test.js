import { sayhello } from "../src/sayhello";

test("say hello success", () => {
  expect(sayhello("eko")).toBe("hello eko");
});

test.failing("sayhello error", () => {
  expect(5).toBe(10)
});

// test("sayhello error thwor eror", () => {
//   expect(() => sayhello(null)).toThrow("need name param");
// });
