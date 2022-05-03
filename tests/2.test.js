const whoWon = require("../src/2")

test('Check if player1 rock is a tie with player2 rock', () => {
    const result = whoWon("rock", "rock")
    expect(result).toBe('TIE!')
})