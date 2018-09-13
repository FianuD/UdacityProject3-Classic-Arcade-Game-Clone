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
        this.speed = 100 + Math.floor(Math.random() * 200);
    }
    // Check for collision between player and enemy
    if ((player.x < this.x + 80 && player.x + 80 > this.x) &&
        (player.y < this.y + 60 && player.y + 60 > this.y)){
            // Sends player back to starting position
            player.x = 202;
            player.y = 405;
        }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Player class
var Player = function (x, y){
    // Variables for the player to move along the x and y axis of the board
    this.x = x;
    this.y = y;
    // The image, sprite for our player
    this.player = 'images/char-boy.png';
};

Player.prototype.update = function(dt){
};

// Draw the player character on the screen
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.player), this.x, this.y);
};

// Control Player with arrow keys
Player.prototype.handleInput = function(keyPress) {
     // Up arrow key moves player up on y-axis by 83, keeps player within bounds
    if (keyPress === 'up' && this.y > 0) {
        this.y -= 83;
    }
    // Down arrow key moves down player on x-axis by 83, keeps player within bounds
    if (keyPress === 'down' && this.y < 405) {
        this.x += 83;
    }
    // Left arrow key moves player on x-axis to the left by 102, keeps player within bounds
    if (keyPress === 'left' && this.x > 0) {
        this.x -= 102;
    }
    // Right arrow key moves player on x-axis to the right by 102, keeps player within bounds
    if (keyPress === 'right' && this.x < 405) {
        this.x += 102;
    }
    // Reset player position upon reaching top of board/water
    if (this.y < 0) {
        setTimeout(() =>{
            this.x = 202;
            this.y = 405;
        }, 500);
    }
};

// Place all enemy objects in an array called allEnemies
var allEnemies = [];
// Location of the enemies on the y-axis
var enemyLocation = [63, 147, 230];
// Initial enemy movement
enemyLocation.forEach(function(locationY){
    enemy = new Enemy(0, locationY, (Math.floor(Math.random() * 200)));
    allEnemies.push(enemy);
});

// Place the player object in a variable called player
// Have given player starting position in middle of board.
var player = new Player(202, 405);

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
