function zombie(xval, yval, health, speed) {
    //Note that all of those must be given some value on creation
    this.x = xval;
    //Gives zombie its own x
    this.y = yval;
    //Gives zombie its own y
    this.health = health;
    //Gives zombie its own health
    this.speed = speed;
    //Gives it speed
    ctx.drawImage(zombieImg, xval, yval)
    //Draws it into the canvas
    this.update = function(self) {
        if (self.health < 1) {
            //Do nothing, cause you dead brah. You no exist
        } else {
            self.x -= self.speed;
            ctx.drawImage(zombieImg, self.x, self.y);
        }


    }
    this.takeDamage = function(self, damage) {
    	self.health -= damage;
    }
}
