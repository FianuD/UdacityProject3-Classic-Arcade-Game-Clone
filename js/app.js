// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // Used to determine the x and y axis and speed of enemy
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // Speed muliplied on x axis
    this.x += this.speed * dt;

    // Once enemies are off canvas, make them reappear with different speeds
    if (this.x > 510){
        this.x = 50;
        this.speed = 100 + math.floor(math.random() * 222);
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Player class
var Player = function (x, y,){
    // Variables for the player to move along the x and y axis of the board
    this.x = x;
    this.y = y;
    // The image, sprite for our player
    this.player = 'images/char-boy.png';
};

// Draw the player character on the screen
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.player), this.x, this.y);
};

// Control Player with arrow keys
Player.prototype.handleInput = function(keyPress) {
    // Left arrow key moves player on x-axis to the left by 102, keeps player within board
    if (keyPress === 'left' && this.x > 0) {
        this.x -= 102;
    }
    // Right arrow key moves player on x-axis to the right by 102, keeps player within board
    if (keyPress === 'left' && this.x > 405) {
        this.x += 102;
    }
    // Up arrow key moves player up on y-axis by 83, keeps player within board
    if (keyPress === 'left' && this.x > 0) {
        this.y -= 83;
    }
    // Down arrow key moves down player on x-axis by 83, keeps player within board
    if (keyPress === 'left' && this.x > 0) {
        this.x += 83;
    }
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
