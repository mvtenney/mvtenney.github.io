// define variables
var game;
var player;
var platforms;
var badges;
var items;
var cursors;
var jumpButton;
var text;
var winningMessage;
var won = false;
var currentScore = 0;
var winningScore = 100;

// add collectable items to the game
function addItems() {
  items = game.add.physicsGroup();
  createItem(50, 225, 'teal-button');
  createItem(275, 250, 'teal-button');
  createItem(675, 450, 'teal-button');
  createItem(165, 160, 'blue-button');
  createItem(450, 300, 'blue-button');
  createItem(415, 100, 'green-button');
  createItem(140, 320, 'green-button');
  createItem(100, 250, 'red-button');
  createItem(100, 250, 'red-button');
  createItem(100, 250, 'red-button');
}

// add platforms to the game
function addPlatforms() {
  platforms = game.add.physicsGroup();
  platforms.create(100, 200, 'platform2'); //cloud
  platforms.create(350, 150, 'platform2'); //cloud
  platforms.create(565, 275, 'platform2'); //cloud
  // platforms.create(300, 490, 'car' );
  platforms.create(25, 350, 'platform'); //grass
  platforms.create(400, 350, 'platform'); //grass
  platforms.create(275, 450, 'platform'); //grass
  platforms.setAll('body.immovable', true);
}

// create a single animated item and add to screen
function createItem(left, top, image) {
  var item = items.create(left, top, image);
  item.animations.add('spin');
  item.animations.play('spin', 10, true);
}

// create the winning badge and add to screen
function createBadge() {
  badges = game.add.physicsGroup();
  var badge = badges.create(350, 250, 'badge');
  badge.animations.add('spin');
  badge.animations.play('spin', 10, true);
}

// when the player collects an item on the screen
function itemHandler(player, item) {
  item.kill();
  if (item.key === 'blue-button' || 'red-button' || 'green-button' || 'teal-button') {
    currentScore = currentScore + 10;
  } 
  if (currentScore === winningScore) {
    createBadge();
  }
}

// when the player collects the badge at the end of the game
function badgeHandler(player, badge) {
  badge.kill();
  won = true;
}

// setup game when the web page loads
window.onload = function () {
  game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

  // before the game begins
  function preload() {

    //Load images
    this.game.load.image("title", "background.png");
    game.load.image('platform', 'platform_3.png');
    game.load.image('platform2', 'platform_1.png');
    //game.load.image('car', 'platform_4.png');

    //Load spritesheets
    game.load.spritesheet('player', 'pete-larger.png', 87.5, 113);
    game.load.spritesheet('blue-button', 'blue-button.png', 36, 44);
    game.load.spritesheet('red-button', 'red-button.png', 36, 44);
    game.load.spritesheet('green-button', 'green-button.png', 36, 44);
    game.load.spritesheet('teal-button', 'teal-button.png', 36, 44);
    game.load.spritesheet('poison', 'poison.png', 32, 32);
    game.load.spritesheet('star', 'star.png', 32, 32);
    game.load.spritesheet('badge', 'badge.png', 42, 42);
  }

  // initial game set up
  function create() {
    this.titleScreenImage = this.add.sprite(0, 0, "title");
    player = game.add.sprite(50, 600, 'player');
    player.animations.add('walk');
    player.anchor.setTo(0.5, 1);
    game.physics.arcade.enable(player);
    player.body.collideWorldBounds = true;
    player.body.gravity.y = 500;

    addItems();
    addPlatforms();

    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    text = game.add.text(16, 16, "SCORE: " + currentScore, { font: "bold 24px Arial", fill: "white" });
    winningMessage = game.add.text(game.world.centerX, 275, "", { font: "bold 48px Arial", fill: "white" });
    winningMessage.anchor.setTo(0.5, 1);
  }

  // while the game is running
  function update() {
    text.text = "SCORE: " + currentScore;
    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.overlap(player, items, itemHandler);
    game.physics.arcade.overlap(player, badges, badgeHandler);
    player.body.velocity.x = 0;

    // is the left cursor key presssed?
    if (cursors.left.isDown) {
      player.animations.play('walk', 10, true);
      player.body.velocity.x = -300;
      player.scale.x = - 1;
    }
    // is the right cursor key pressed?
    else if (cursors.right.isDown) {
      player.animations.play('walk', 10, true);
      player.body.velocity.x = 300;
      player.scale.x = 1;
    }
    // player doesn't move
    else {
      player.animations.stop();
    }

    if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down)) {
      player.body.velocity.y = -400;
    }
    // when the player winw the game
    if (won) {
      winningMessage.text = "Groovy!";
    }
  }

  function render() {

  }

};
