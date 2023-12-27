import {calculate} from "../src/sum"

test('mock test berapa kali dipanggil', () => {
    const callback = jest.fn()

    calculate([1,1,1],callback)
    calculate([1,1,1,1,1],callback)

    expect(callback).toHaveBeenCalledTimes(2)
    expect(callback).toHaveBeenCalledWith(3)
    expect(callback).toHaveBeenCalledWith(5)
});