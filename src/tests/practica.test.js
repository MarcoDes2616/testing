const multiply = (a, b) => {
    return a * b
}

const average = (a, b, c) => {
    return (a+b+c)/3
}

test("multiplicacion", () => {
    expect(multiply(2,2)).toBe(4)
    expect(average(2,2,2)).toBe(2)
})

test("multiplicacion", () => {
    expect(average(2,2,2)).toBe(2)
})