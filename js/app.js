var stage, zombie1;
var inheritsFrom = function (child, parent) {
    child.prototype = Object.create(parent.prototype);
};
function zombieStuff() {
    this.x = 100;
    this.y = 100;
    stage.addChild(this);
    this.update = function(self) {
        self.x = self.x + 5;
        stage.addChild(self);
        stage.update();
    }
}

function init() {
    stage = new createjs.Stage("demoCanvas");
    //onResize();
    var zombie = createjs.extend(zombieStuff, createjs.Bitmap);
    zombie1 = new zombie("assets/zombie.png");
    createjs.Ticker.on("tick", tick);
    createjs.Ticker.setFPS(30);
}

function tick(event) {
   zombie1.update(zombie1);
}

function onResize() {
    // browser viewport size
    var w = window.innerWidth;
    var h = window.innerHeight;

    // stage dimensions
    var ow = 1920; // your stage width
    var oh = 1080; // your stage height
    var keepAspectRatio = true;
    if (keepAspectRatio) {
        // keep aspect ratio
        var scale = Math.min(w / ow, h / oh);
        stage.scaleX = scale;
        stage.scaleY = scale;

        // adjust canvas size
        stage.canvas.width = ow * scale;
        stage.canvas.height = oh * scale;
    } else {
        // scale to exact fit
        stage.scaleX = w / ow;
        stage.scaleY = h / oh;

        // adjust canvas size
        stage.canvas.width = ow * stage.scaleX;
        stage.canvas.height = oh * stage.scaleY;
    }

    // update the stage
    stage.update()
}
