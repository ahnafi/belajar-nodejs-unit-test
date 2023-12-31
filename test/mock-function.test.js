import {calculate, calculateAndReturn} from "../src/sum"

test('mock function', () => {
    const callback = jest.fn()

    calculate([10,10,10],callback)
    calculate([10,10,10,10,10],callback)

    console.log(callback.mock.calls)

    expect(callback.mock.calls.length).toBe(2)
    expect(callback.mock.calls[0][0]).toBe(30)
    expect(callback.mock.calls[1][0]).toBe(50)
});

test('calculate return value', () => {
    let callback = jest.fn()

    callback.mockReturnValueOnce(40)
    callback.mockReturnValueOnce(80)

    expect(calculateAndReturn([1,1,1],callback)).toBe(40)
    expect(calculateAndReturn([1,1,1,1,1],callback)).toBe(80)

    expect(callback.mock.results[0].value).toBe(40)
    expect(callback.mock.results[1].value).toBe(80)
});

test('mock implementation', () => {
    const callback = jest.fn()
    
    callback.mockImplementation((total)=>{
        return total * 2;
    })
    expect(calculateAndReturn([1,1,1],callback)).toBe(6)
    expect(calculateAndReturn([1,1,1,1,1],callback)).toBe(10)
    
    expect(callback.mock.results[0].value).toBe(6)
    expect(callback.mock.results[1].value).toBe(10)


});