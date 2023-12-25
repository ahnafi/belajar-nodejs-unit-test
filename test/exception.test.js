import { MyException,callMe } from "../src/exception";

test("exception", () => {
    callMe("a")
  expect(() => callMe("eko")).toThrow();
  expect(() => callMe("eko")).toThrow(MyException);
  expect(() => callMe("eko")).toThrow("ups ada yang salah!");
});
