function Zombie(xval, yval, width, height, health, speed, damage) {
    this.x = xval;
    this.y = yval;
    this.width = width;
    this.height = height;
    this.health = health;
    this.speed = speed;
    this.damage = damage;
    //ctx.drawImage(zombieImg, xval, yval); Add this when we have images
    this.update = function() {
        for (var i = Arrows.length - 1; i >= 0; i--) {

            if (isCollide(this, Arrows[i])) {
                this.takeDamage(Arrows[i].damage);
            }
        }

        if (this.health < 1) {
            this.kill(i);
            //Zombies.push(new Zombie(WIDTH,450,50,100,10,1,5))
        } 
        else {
            this.x -= this.speed;
            //ctx.drawImage(zombieImg, this.x, this.y); Add this when we have images
            ctx.fillStyle = "#FF0";
            ctx.fillRect(this.x,this.y,this.width,this.height);
        }
    }

    this.takeDamage = function(damage) {
        this.health -= damage;
    }
    this.kill = function(i){
        Zombies.splice(i,1);
    }
}