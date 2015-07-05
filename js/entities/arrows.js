function Arrow(damage, xval, yval, speed) {
    this.damage = damage;
    this.x = xval;
    this.y = yval;
    this.speed = speed;
    this.width = 100;
    this.height = 100;
    //ctx.drawImage(arrowImg, xval, yval);
    this.update = function(zombie) {
        for (var i = zombie.length - 1; i >= 0; i--) {

            if (isCollide(this, zombie[i])) {
                //Do nothing, stops drawing the arrow
                console.log("Arrow has collided with "+zombie[i]+" (from arrows.js)");
                zombie.splice[i, 1]; //Insta kills the zombie. Not what we want....
                this.x = WIDTH+1;
            } else {
                //ctx.drawImage(arrowImg, this.x, this.y);
                this.x += this.speed;
                ctx.fillRect(this.x,this.y,100,20);
            }
        }
    }
}
