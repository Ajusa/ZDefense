/*
    TODO
        Actually code the game
        Add Canvas
        Make Zombies a Class
        Make a "Sound System" - An easy and PERFORMANT way to load in music an play it
        Make sure the total file size (not including music) is under 1mb
        Learn from each other
*/


//  Jackson - Looking at the console during runs, it seems 
//  that variables in this file cannot reference variables
//  from index.html. I changed it to "document.createElement"
//  to make it a bit easier.

//  UPDATE: I have no idea how to reference outside HTML objects from Javascript

var canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d'),
    container = document.createElement('div');

var VERSION,
    HEIGHT = 800,
    WIDTH = 600,
    Arrows = [],
    Zombies = [],
    screens = [true,false,false];

function init(){
    //Event listeners
    window.addEventListener("keydown",onKeyDown);
    window.addEventListener("keyup",onKeyUp);

    container.appendChild(canvas);
    canvas.style.cssText = "border: 1px solid black; width: "+WIDTH+"px; height: "+HEIGHT+"px;";
    container.style.cssText = "text-align: center;";
    
    loop();
}

function loop(){
    setInterval(function(){
        if(screens[0]){         //Title screen
            ctx.clearRect(0,0,WIDTH,HEIGHT);
            ctx.fillStyle = "#000";
        }
        else if(screens[1]){    //Main game

        }
        else if(screens[2]){    //Game over

        }
        else{
            screens[0] = true;  //If it breaks, send ya to the title screen
        }
    },30);
}

function onKeyDown(key) {
    var keyCode = key.keyCode;
    console.log(keyCode);
    if(keyCode == 32) //Spacebar, FYI
        console.log("Ajusa sucks >:D");
}

function onKeyUp(key) {
    var keyCode = key.keyCode;
}