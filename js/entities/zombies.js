function Zombie(info, gap) {
    this.x = info.x + gap;
    this.y = info.y;
    this.width = info.width;
    this.height = info.height;
    this.health = info.health;
    this.speed = info.speed;
    this.damage = info.damage;
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