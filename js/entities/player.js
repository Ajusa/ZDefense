var STARTING_MONEY;

function Player(xval, yval) {
    //Note that all of those must be given some value on creation
    this.x = xval;
    this.y = yval;
    this.money = STARTING_MONEY;

    this.update = function(self, arrow) {
        for (var i = arrow.length - 1; i >= 0; i--) {
            if (isCollide(self, arrow[i])) {
                self.takeDamage(arrow.damage);
                //Checks if any arrows are hitting the zombie. If it is, then take damage.
                arrow.splice(i,1)
                //Goes ahead an removes that arrow
            }
        };
        if (self.health < 1) {
            //Do nothing, cause you dead brah. You no exist
            self.die();
        }
    }

    this.die = function() {
        //Setting to gameover screen
        screens[1] = false;
        screens[2] = true;
    }
}