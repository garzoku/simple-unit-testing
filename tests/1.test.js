const checkFive = require("../src/1.js")

test("check if 5 is equal to 5 and display message with result", () => {
    const check5 = checkFive(5)
    expect(check5).toBe("5 is equal to 5.")
})

test("check if 6 is more than 5 and display message with result", () => {
    const check5 = checkFive(6)
    expect(check5).toBe("6 is greater than 5.")
})

test("check if 4 is less than 5 and display message with result", () => {
    const check5 = checkFive(4)
    expect(check5).toBe("4 is less than 5.")
})