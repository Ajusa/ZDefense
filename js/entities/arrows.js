function Arrow(damage, xval, yval, speed) {
    this.damage = damage;
    this.x = xval;
    this.y = yval;
    this.speed = speed;
    ctx.drawImage(arrowImg, xval, yval);
    this.update = function(zombie, self) {
        for (var i = zombie.length - 1; i >= 0; i--) {
            if (isCollide(self, zombie[i])) {
                //Do nothing, stops drawing the arrow
                zombie.splice[i, 1];
                self.x = WIDTH+1;
            } else {
                self.x += speed;
                ctx.drawImage(arrowImg, self.x, self.y);
            }
        }
    }
}
