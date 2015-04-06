var stage;
var circle;
var keys = {};

var KEYCODE_LEFT = 37, 
	KEYCODE_RIGHT = 39,
	KEYCODE_UP = 38, 
	KEYCODE_DOWN = 40;

function Init() {
	stage = new createjs.Stage("gameCanvas")
	circle = new createjs.Shape();

	circle.graphics.beginFill("red").drawCircle(0, 0, 50);
	circle.x = 100;
	circle.y = 100;
	stage.addChild(circle);

	createjs.Ticker.addEventListener("tick", tick);
	
	this.document.onkeydown = keyDown;
    this.document.onkeyup = keyUp;
}

function tick(updateEvent) {
	var delta = updateEvent.delta / 1000;

	handleInput(updateEvent)
	//circle.x = circle.x + (updateEvent.delta * 1);
	stage.update();
}

function handleInput(updateEvent) {
	if (keys[KEYCODE_LEFT]) 	circle.x -= 10;
    if (keys[KEYCODE_RIGHT]) 	circle.x += 10;	
}

function keyDown(event) {
    keys[event.keyCode] = true;
}

function keyUp(event) {
    delete keys[event.keyCode];
}