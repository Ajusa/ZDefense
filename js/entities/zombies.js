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
    this.update = function(self, arrow) {
    	if(isCollide(self, arrow)){
    		self.takeDamage(arrow.damage);
    		//Checks if an arrow is hitting the zombie. If it is, then take damage.
    	}
        if (self.health < 1) {
            //Do nothing, cause you dead brah. You no exist
            self.x = 6000; //GO AWAY!
        } else {
            self.x -= self.speed;
            ctx.drawImage(zombieImg, self.x, self.y);
        }



    }
    this.takeDamage = function(self, damage) {
    	self.health -= damage;
    }
}
