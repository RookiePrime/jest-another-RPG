const Game = require('../lib/Game');

test('Checks if the game object exists', () => {
    const game = new Game();
    
    expect(game).toBeTruthy();
});