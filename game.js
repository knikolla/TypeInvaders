// Global Variables
var stage;
var player;
var enemies = [];
var playerBullets = [];
var playerCooldownTimer = 0;
var keys = {};
var enemySpeedMultiplier = 2;
var enemyDirection = 1;
var enemiesHit = 0;

// Resources
var imageSpaceship = new Image();
var spritesSpaceship;

// Constants
var SCREEN_X = 640;
var SCREEN_Y = 640;

var PLAYER_SIZE = 32;
var PLAYER_HALFSIZE = PLAYER_SIZE / 2;
var PLAYER_COOLDOWN = 1;

var BULLET_SIZE = 4;
var BULLET_HALFSIZE = BULLET_SIZE / 2;
var BULLET_SPEED = 8;


var ENEMY_ROWS = 4;
var ENEMY_COLUMNS = 8;
var ENEMY_SPACING = 64;
var ENEMY_SPEED = 2;
var ENEMY_SIZE = 32;
var ENEMY_HALFSIZE = ENEMY_SIZE / 2;

var KEY_LEFT = 37;
var KEY_RIGHT = 39;
var KEY_UP = 38;
var KEY_DOWN = 40;

function init() {
	initStage();
	initResources();
	initPlayer();
	initEnemies();
}

function initStage() {
	stage = new createjs.Stage("gameCanvas")
	createjs.Ticker.addEventListener("tick", tick);
	this.document.onkeydown = keyDown;
	this.document.onkeyup = keyUp;
}

function initPlayer() {
	//player = new createjs.Shape();
	//player.graphics.beginFill("green").drawCircle(0, 0, PLAYER_HALFSIZE);
	
	player = new createjs.BitmapAnimation(spritesSpaceship);
	player.gotoAndPlay("idle");
	player.x = SCREEN_X / 2 - PLAYER_SIZE;
	player.y = SCREEN_Y - PLAYER_SIZE - 32;
	player.currentFrame = 0;
	stage.addChild(player);
}

function initEnemies() {
	var i, x;
	for (i = 0; i < ENEMY_ROWS; i++) {
		for (x = 0; x < ENEMY_COLUMNS; x++) {
			var enemy = new createjs.Shape();
			enemy.graphics.beginFill("blue").drawCircle(0, 0, 16);
			enemy.x = ENEMY_SPACING * (x + 1);
			enemy.y = ENEMY_SPACING * (i + 1);
			stage.addChild(enemy);
			enemies.push(enemy);
		}
	}
}

function initResources() {
	imageSpaceship.src = "images/spaceship.png";

	spritesSpaceship = new createjs.SpriteSheet({
		images: [imageSpaceship],
		frames: { 
			width: 32, height: 32, regX: 16, regY: 16
		},
		animations: {
			walk: [0, 2, "idle"]
		}
	});
}

function tick(updateEvent) {
	// convert from milliseconds to seconds
	var delta = updateEvent.delta / 1000;

	handleInput(delta);
	updateCooldown(delta);
	playerBulletUpdate(delta);
	enemyUpdate(delta);
	handleCollisions(delta);

	stage.update();
}

function handleInput(delta) {
	if (keys[KEY_LEFT]) 	player.x -= 10;
	if (keys[KEY_RIGHT]) 	player.x += 10;
	if (keys[KEY_UP]) playerFire(player.x, player.y);
}

function playerFire(x, y) {
	if (playerCooldownTimer <= 0) {
		var bullet = new createjs.Shape();
		bullet.graphics.beginFill("red").drawCircle(0, 0, BULLET_SIZE);
		bullet.x = x;
		bullet.y = y - (PLAYER_HALFSIZE + BULLET_SIZE / 2);
		stage.addChild(bullet);
		playerBullets.push(bullet);
		playerCooldownTimer = PLAYER_COOLDOWN;
	}
}

function updateCooldown(delta) {
	if (playerCooldownTimer > 0) {
		playerCooldownTimer -= delta;
	}
}

function handleCollisions(delta) {
	playerCheckScreenBoundaries();
	enemyCollisions();
	enemyCheckScreenBoundaries();
}

function enemyCollisions() {
	for (var i = enemies.length - 1; i >= 0; i--) {
		var a_left = enemies[i].x - ENEMY_HALFSIZE;
		var a_right = enemies[i].x + ENEMY_HALFSIZE;
		var a_top = enemies[i].y + ENEMY_HALFSIZE;
		var a_bottom = enemies[i].y - ENEMY_HALFSIZE;

		for (var j = playerBullets.length - 1; j >= 0; j--) {
			var b_left = playerBullets[j].x - BULLET_HALFSIZE;
			var b_right = playerBullets[j].x + BULLET_HALFSIZE;
			var b_top = playerBullets[j].y + BULLET_HALFSIZE;
			var b_bottom = playerBullets[j].y - BULLET_HALFSIZE;

			if (rectangleIntersection(a_left, a_right, a_top, a_bottom,
				b_left, b_right, b_top, b_bottom) == true) {
				stage.removeChild(enemies[i]);
				stage.removeChild(playerBullets[j]);
				enemies.splice(i, 1);
				playerBullets.splice(j, 1);

				checkEndGame();
			}
		}
	}
}

function enemyUpdate(delta) {
	for (var i = 0; i < enemies.length; i++) {
		enemies[i].x += ENEMY_SPEED * enemyDirection * enemySpeedMultiplier;
	}
}

function playerBulletUpdate(delta) {
	for (var i = 0; i < playerBullets.length; i++) {
		playerBullets[i].y -= BULLET_SPEED;
	}
}

function playerCheckScreenBoundaries() {
	if (player.x > SCREEN_X - PLAYER_HALFSIZE) {
		player.x = SCREEN_X - PLAYER_HALFSIZE;
	} else if (player.x < PLAYER_HALFSIZE) {
		player.x = PLAYER_HALFSIZE;
	}
}

function enemyCheckScreenBoundaries() {
	for (var i = 0; i < enemies.length; i++) {
		if (enemies[i].x > SCREEN_X - ENEMY_SIZE || enemies[i].x < ENEMY_SIZE) {
			enemyDirection *= -1;
			break;
		}
	}
}

function checkEndGame() {
	if (enemies.length == 0) {
		alert("Congratulations!");
	}
}

function rectangleIntersection(a_left, a_right, a_top, a_bottom,
	b_left, b_right, b_top, b_bottom) {
	if (a_right < b_left) return false; // a is left of b
	if (a_left > b_right) return false; // a is right of b
	if (a_top < b_bottom) return false; // a is above b
	if (a_bottom > b_top) return false; // a is below b
	return true; // boxes overlap
}

function keyDown(event) {
    keys[event.keyCode] = true;
}

function keyUp(event) {
    delete keys[event.keyCode];
}
