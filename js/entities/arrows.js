function Arrow(xval, yval, damage, speed) {
    this.x = xval;
    this.y = yval;
    this.damage = damage;
    this.speed = speed;
    this.width = 70;
    this.height = 20;
    //ctx.drawImage(arrowImg,  xval, yval);
    this.update = function() {
        for (var i = Zombies.length - 1; i >= 0; i--) {

            if (isCollide(this, Zombies[i])) {
                this.kill(i);
            } else {
                //ctx.drawImage(arrowImg, this.x, this.y);
                this.x += this.speed;
                ctx.fillStyle = "#000"
                ctx.fillRect(this.x, this.y, this.width, this.height);
            }
        }
    }
    this.kill = function(i) {
        Arrows.splice(i, 1);
    }
}
