import {sum} from "../src/sum"

let nama = "sulthon shelbew"

test('not ', () => {
    expect(sum(3,2)).not.toBe(6);
    // expect(sum(3,3)).not.toBe(6)
});

test('string not', () => {
    expect(nama).not.toBe("joko")
});