var DEFAULT_HEALTH,
    DEFAULT_SPEED;

function Zombie(xval, yval, health, speed) {
    //Note that all of those must be given some value on creation
    this.x = xval;
    this.y = yval;
    this.health = health;
    this.speed = speed;
    ctx.drawImage(zombieImg, xval, yval);

    this.update = function(self, arrow) {
        for (var i = arrow.length - 1; i >= 0; i--) {
            if (isCollide(self, arrow[i])) {

                //Doesn't using 'this' instead of self work just as well? You're still referencing the new Zombie object
                self.takeDamage(arrow.damage);
                //Checks if any arrows are hitting the zombie. If it is, then take damage.
                arrow.splice(i,1)
                //Goes ahead an removes that arrow
            }
        };
        if (self.health < 1) {
            //Do nothing, cause you dead brah. You no exist
            self.x = WIDTH+1;
        } else {
            self.x -= self.speed;
            ctx.drawImage(zombieImg, self.x, self.y);
        }
    }

    this.takeDamage = function(self, damage) {
        self.health -= damage;
    }
}

//  Overloaded the function to make coding it a bit looser, hope ya don't mind ;)
function Zombie(xval, yval) {
    zombie(xval,yval,DEFAULT_HEALTH,DEFAULT_SPEED);
}
