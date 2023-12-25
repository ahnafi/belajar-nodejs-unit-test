import { sayHelloAsync } from "../src/async";

test("async test", async () => {
  const hasil = await sayHelloAsync("sulthon");
  expect(hasil).toBe("hello sulthon");

    // test ascyn mathcer
  await expect(sayHelloAsync("eko")).resolves.toBe("hello eko")
  await expect(sayHelloAsync()).rejects.toBe("name is empty")
});


