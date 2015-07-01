function isCollide(a, b) {
    return !(
        ((a.y + a.height) < (b.y)) ||
        (a.y > (b.y + b.height)) ||
        ((a.x + a.width) < b.x) ||
        (a.x > (b.x + b.width))
    );
}
function randomNumber(minNum,maxNum){      
    var numLow = minNum;
    var numHigh = maxNum;
    if ((!isNaN(numLow)) && (!isNaN(numHigh)) && (parseFloat(numLow) <= parseFloat(numHigh)) && (numLow != '') && (numHigh != '')) {
       var adjustedHigh = (parseFloat(numHigh) - parseFloat(numLow)) + 1;       
       var numRand = Math.floor(Math.random()*adjustedHigh) + parseFloat(numLow);
 		return numRand;
    }      
    return false;    
};