import {sayHelloAsync} from '../src/async'

test.concurrent('concurrent 1 ',async () => {
    await expect(sayHelloAsync("eko")).resolves.toBe("hello eko")
});
test.concurrent('concurrent 2 ',async () => {
    await expect(sayHelloAsync("eko")).resolves.toBe("hello eko")
});
test.concurrent('concurrent 3 ', async() => {
    await expect(sayHelloAsync("eko")).resolves.toBe("hello eko")
});