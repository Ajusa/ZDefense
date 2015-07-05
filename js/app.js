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
    container = document.createElement('div');
    requestAnimationFrame = window.requestAnimationFrame ||
                            window.mozRequestAnimationFrame ||
                            window.webkitRequestAnimationFrame ||
                            window.msRequestAnimationFrame;

var VERSION,
    WIDTH = 800,
    HEIGHT = 600,
    Arrows = [new Arrow(5,100,100,.2)],
    Zombies = [new Zombie(500,500,10,1)],

    screens = [true,false,false];

var zombie1;

function init(){
    //Event listeners
    window.addEventListener("keydown",onKeyDown);
    window.addEventListener("keyup",onKeyUp);

    document.body.appendChild(container);
    container.appendChild(canvas);
    canvas.style.cssText = "border: 1px solid black; width: "+WIDTH+"px; height: "+HEIGHT+"px;";
    container.style.cssText = "text-align: center;";

    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    requestAnimationFrame(gameLoop);
}

function gameLoop(){
    ctx.clearRect(0,0,WIDTH,HEIGHT);
    if(screens[0]){         //Title screen
        for(var i=0; i<Arrows.length; i++)
            Arrows[i].update(Zombies);
        for(var j=0; j<Zombies.length; j++)
            Zombies[j].update(Arrows);

    }
    else if(screens[1]){    //Main game

    }
    else if(screens[2]){    //Game over

    }
    else{
        screens[0] = true;  //If it breaks, send ya to the title screen
    }
    requestAnimationFrame(gameLoop);
}

function onKeyDown(key) {
    var keyCode = key.keyCode;
    console.log(keyCode);
    if (keyCode == 32)
        Arrows.push(new Arrow(5,100,100,1));
}

function onKeyUp(key) {
    var keyCode = key.keyCode;
}
