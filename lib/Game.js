const inquirer = require('inquirer');
const Enemy = require('./Enemy');
const Player = require('./Player');

function Game() {
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.currentEnemy;
    this.player;

    // Begins the game for the user
    Game.prototype.initializeGame = function() {
        // First, generate a list of enemies
        this.enemies.push(new Enemy('goblin', 'sword'));
        this.enemies.push(new Enemy('orc', 'baseball bat'));
        this.enemies.push(new Enemy('skeleton', 'axe'));
        // Then, determine which of those enemies is the first to fight
        this.currentEnemy = this.enemies[0];
        // Then, ask the user to name their character
        inquirer
            .prompt({
                type: 'text',
                name: 'name',
                message: 'What is your name?'
            })
            // destructure name from the prompt object
            .then(({ name }) => {
                this.player = new Player(name);

                // test the object creation
                console.log(this.currentEnemy, this.player);
            });
    };
};

module.exports = Game;