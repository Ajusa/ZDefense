function isCollide(a, b) {
    return !(
        ((a.y + a.height) < (b.y)) ||
        (a.y > (b.y + b.height)) ||
        ((a.x + a.width) < b.x) ||
        (a.x > (b.x + b.width))
    );	//I copied this collide code for my game, hope ya don't mind -Jackson
}
function randomNumber (low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
}
function createZombies(zombie, gap){
	var diff = gap;
	var gap = 0;
	for (var i = 0; i < zombie.number; i++) {
		Zombies.push(new Zombie(zombie, gap));
		gap = gap + diff;
	};
}