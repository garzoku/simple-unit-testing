const checkFive = require("../src/1.js")

test("compare input to 5 and display message of result", () => {
    const check5 = checkFive(5)
    expect(check5).toBe("5 is equal to 5.")
})