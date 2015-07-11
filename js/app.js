/*
    TODO
        Actually code the game
        Add Canvas
        Make Zombies a Class
        Make a "Sound System" - An easy and PERFORMANT way to load in music an play it
        Make sure the total file size (not including music) is under 1mb
        Learn from each other
*/

var canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d'),
    container = document.createElement('div'),
    requestAnimationFrame = window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;

var delay = 1000;
var VERSION = "Alpha 0.1",
    WIDTH = 800,
    HEIGHT = 600,
    GROUND = {
        x: 0,
        y: HEIGHT - 50,
        width: WIDTH,
        height: 50
    };
var level = [{
    id: 0,
    name: "The Easy One",
    zombie: {
        number: 10,
        x: WIDTH,
        y: 450,
        width: 50,
        height: 100,
        health: 10,
        speed: 1,
        damage: 5,
    }
}]
var Arrows = [],
    Zombies = [],
    player = new Player(WIDTH / 2 - 25, 450, 50, 100),
    screens = [true, false, false],
    Damage = 1,
    Speed = 4;
var time;
function init() {
    //Event listeners
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    loadRandomMusic();
    document.body.appendChild(container);
    container.appendChild(canvas);
    canvas.style.cssText = "border: 1px solid black; width: " + WIDTH + "px; height: " + HEIGHT + "px;";
    container.style.cssText = "text-align: center;";

    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    time = Date.now(); //Current time for the delay
    requestAnimationFrame(gameLoop);
}

function gameLoop() {
    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    if (screens[0]) {
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, WIDTH, HEIGHT);

        ctx.font = "70px LCD";
        ctx.fillStyle = "#FFF";
        ctx.fillText("ZDefense", 150, 200);

        ctx.fillStyle = "#F00";
        ctx.fillText("2", 575, 200);

        ctx.font = "30px LCD";
        ctx.fillStyle = "#FFF";
        ctx.fillText("[Enter to start]", 260, 400);

        ctx.font = "15px LCD";
        ctx.fillText(VERSION, 10, 20);
    } else if (screens[1]) {
        ctx.fillStyle = "#777";
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        if (Zombies.length == 0) {
            createZombies(level[0].zombie, 70);
        };
        for (var i = 0; i < Arrows.length; i++)
            Arrows[i].update();
        for (var j = 0; j < Zombies.length; j++)
            Zombies[j].update();

        player.update();

        ctx.fillStyle = "#0FF";
        ctx.fillRect(GROUND.x, GROUND.y, GROUND.width, GROUND.height);
    } else if (screens[2]) {

    }

    requestAnimationFrame(gameLoop);
}

function onKeyDown(key) {
    var keyCode = key.keyCode;

    if (screens[0]) {
        if (keyCode == 13) {
            screens[0] = false;
            screens[1] = true;
        }
    }

    if (screens[1]) {
        if (keyCode == 32 && !player.inShot && (Date.now()-time) > delay) { //This adds a delay
            player.shoot();
            player.inShot = true;
            time = Date.now(); //This resets the delay after the shot
        }
        if (keyCode == 37 || keyCode == 65) {
            player.dx = -5;
        }
        if (keyCode == 39 || keyCode == 68) {
            player.dx = 5;
        }
    }
}

function onKeyUp(key) {
    var keyCode = key.keyCode;
    if (screens[1]) {
        if (keyCode == 32 && player.inShot) {
            player.inShot = false;

        }

        if (keyCode == 37 || keyCode == 39 || keyCode == 65 || keyCode == 68) {
            player.dx = 0;
        }
    }
}
