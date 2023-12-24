test("test tobe", () => {
  let name = "eko";
  let hellow = `hello ${name}`;

  expect(hellow).toBe("hello eko");
});
// bertipe object
test("test equal mathcer", () => {
  let fullname = { name: "eko" };
  Object.assign(fullname, { last: "kurniawan" });

  expect(fullname).toEqual({ name: "eko", last: "kurniawan" });
});
