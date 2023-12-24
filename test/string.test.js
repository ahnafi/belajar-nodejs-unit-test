test('string', () => {
    const name = "sulthon shelbey"

    expect(name).toBe("sulthon shelbey")
    expect(name).toMatch(/shel/)
});