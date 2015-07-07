var STARTING_MONEY;

function Player(xval, yval, width, height) {
    //Note that all of those must be given some value on creation
    this.x = xval;
    this.y = yval;
    this.dx = 0;
    this.dy = 0;
    this.width = width;
    this.height = height;
    this.money = STARTING_MONEY;
    this.inShot = false;

    this.update = function() {
        for (var i = Zombies.length - 1; i >= 0; i--) {
            if(isCollide(this,Zombies[i])){
                this.takeDamage(Zombies[i].damage);
                Zombies[i].kill(i);
            }
        }

        if (this.health < 1) {
            this.die();
        }
        else {
            ctx.fillStyle = "#F00";
            ctx.fillRect(this.x,this.y,this.width,this.height);
            this.x += this.dx;
            this.y += this.dy;
        }
    }

    this.shoot = function() {
        if(Math.random() >= .5)
            Arrows.push(new Arrow(this.x+this.width, this.y+this.height/2 + 10*Math.random(), Damage, Speed));
        else
            Arrows.push(new Arrow(this.x+this.width, this.y+this.height/2 - 10*Math.random(), Damage, Speed));
    }

    this.takeDamage = function(damage) {
        this.health -= damage;
    }

    this.die = function() {
        //Setting to gameover screen
        screens[1] = false;
        screens[2] = true;
    }
}