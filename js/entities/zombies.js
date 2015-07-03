var DEFAULT_HEALTH,
    DEFAULT_SPEED;

function Zombie(xval, yval, health, speed) {
    //Note that all of those must be given some value on creation
    this.x = xval;
    this.y = yval;
    this.health = health;
    this.speed = speed;
    //ctx.drawImage(zombieImg, xval, yval); Add this when we have images

    this.update = function(arrow) {
        for (var i = arrow.length - 1; i >= 0; i--) {
            if (isCollide(this, arrow[i])) {

                //Doesn't using 'this' instead of self work just as well? You're still referencing the new Zombie object
                this.takeDamage(arrow[i].damage);
                console.log(this)
                //Checks if any arrows are hitting the zombie. If it is, then take damage.
                arrow.splice(i,1)
                //Goes ahead an removes that arrow
            }
        };
        if (this.health < 1) {
            //Do nothing, cause you dead brah. You no exist
            return false;
            this.x = WIDTH+1;
        } else {
            this.x -= self.speed;
            //ctx.drawImage(zombieImg, this.x, this.y); Add this when we have images
            return true;
        }
    }

    this.takeDamage = function(damage) {
        this.health -= damage;
    }
}

//  Overloaded the function to make coding it a bit looser, hope ya don't mind ;)
//function Zombie(xval, yval) {
 //   Zombie(xval,yval,DEFAULT_HEALTH,DEFAULT_SPEED);
//}