// Global Variables
var stage;
var player;
var enemies = [];
var keys = {};
var enemySpeedMultiplier = 2;
var enemyDirection = 1;

// Constants
var SCREEN_X = 480;
var SCREEN_Y = 600;
var PLAYER_SIZE = 32;
var PLAYER_HALFSIZE = PLAYER_SIZE / 2;

var ENEMY_ROWS = 2;
var ENEMY_COLUMNS = 5;
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
	player = new createjs.Shape();
	player.graphics.beginFill("green").drawCircle(0, 0, PLAYER_HALFSIZE);
	player.x = SCREEN_X / 2 - PLAYER_SIZE;
	player.y = SCREEN_Y - PLAYER_SIZE - 32;
	stage.addChild(player);
}

function initEnemies() {
	var i, x;
	for (i = 0; i <= ENEMY_ROWS; i++) {
		for (x = 0; x <= ENEMY_COLUMNS; x++) {
			var enemy = new createjs.Shape();
			enemy.graphics.beginFill("blue").drawCircle(0, 0, 16);
			enemy.x = ENEMY_SPACING * (x + 1);
			enemy.y = ENEMY_SPACING * (i + 1);
			stage.addChild(enemy);
			enemies.push(enemy);
		}
	}
}

function tick(updateEvent) {
	// convert from milliseconds to seconds
	var delta = updateEvent.delta / 1000;

	handleInput(delta);
	enemyUpdate(delta);
	handleCollisions(delta);

	stage.update();
}

function handleInput(delta) {
	if (keys[KEY_LEFT]) 	player.x -= 10;
	if (keys[KEY_RIGHT]) 	player.x += 10;
}

function handleCollisions(delta) {
	playerCheckScreenBoundaries();
	enemyCheckScreenBoundaries();
}

function enemyUpdate(delta) {
	for (var i = 0; i < enemies.length; i++) {
		enemies[i].x += ENEMY_SPEED * enemyDirection * enemySpeedMultiplier;
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
		}
	}
}

function keyDown(event) {
    keys[event.keyCode] = true;
}

function keyUp(event) {
    delete keys[event.keyCode];
}
