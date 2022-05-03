const getString = require("../src/4.js")

test('testing', () => {
    const result = getString(28000, "1150L", 1000, 580, false)
    expect(result).toBe("Your gross income is £28000 and your net income is £22699.75.")
})