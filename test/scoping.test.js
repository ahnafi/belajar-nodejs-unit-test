const num = 2 + 3;
//
beforeAll(() => {
  console.log("before outer all");
});

afterAll(() => {
  console.log("after outer all");
});

beforeEach(() => {
  console.log("before outer each");
});

afterEach(() => {
  console.log("after outer each");
});

test("test outer scope", () => {
  //   expect(num).toBe(5);
  console.log("test outer scope");
});

describe("inner scope", () => {
  test("test inner scope", () => {
    console.log("test inner scope");
    // expect(num).toBe(5);
  });
});

describe("inner inner scope", () => {
  beforeEach(() => {
    console.log("before inner inner each");
  });
  afterEach(() => {
    console.log("after inner inner each");
  });
  test("test inner inner scope", () => {
    console.log("test inner inner scope");
  });
});
