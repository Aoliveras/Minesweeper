class PlayBox {
    constructor(x, y) {
        this.bomb = false;
        this.bombNeighbor = false;
        this.flagged = false;
        this.hidden = true;
        this.x = x;
        this.y = y;
    }
}

//create another function that gives x a value of 0 to 7 and gives y a value from 0 - 7