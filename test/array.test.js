const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "milk",
];

const nama = [{ name: "sulthon" }, { lastname: "shelbew" }];

test("array test", () => {
  expect(shoppingList).toEqual([
    "diapers",
    "kleenex",
    "trash bags",
    "paper towels",
    "milk",
  ]);

  expect(shoppingList).toContain("milk");
  expect(nama).toContainEqual({ name: "sulthon" });
});
