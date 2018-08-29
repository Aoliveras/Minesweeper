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

let state = [];

function generateBoxes(num) {
    let yCoord = -1;
    for (let i = 0; i < num; i++) {
        let xCoord = i % 8;
        if (xCoord === 0) yCoord++;
        let box = new PlayBox(xCoord, yCoord);
        state.push(box);
    }
    debugger
};


generateBoxes(64);






// state.push(new PlayBox(1, 2));
// state.push(new PlayBox(2, 3));

// console.log(state);




//we could then run PlayBox 72 times with replacing the x and y values with hardcode but I would like to create a function to run through and assign x and y if posiible

//create another function that gives x a value of 0 - 7 and gives y a value from 0 - 8


//create a function that increments x from 0 - 7

// function increment(num) {
//     let xArray = [];
//     for (var i = 0; i < num; i++) {
//         xArray.push(i);
//     } return xArray;
// }

// console.log(increment(8));

//feed output from that variable into another function that outputs two variables that are an x and a y but only increases the value of y-- this function will be repeated until all vslues of x have moved through the function up until 7 therefore giving us x and y coordinate outputs until we have [0, 0]...[7, 8]

// function iterateXY (arr, yParam) {
//     let xAndY = [];
//     for (var i = 0; i < arr.length-1; i++) {
//         xAndY.push([i, (function(yParam) {
//             let yCord = 0;
//             ycord < yParam ? 
//             } 
//         } 
//     )])
//     return xAndY; }
// }

// console.log(iterateXY(increment(8), 9));

//the second function would feed out into the class constructor giving us all 72 needed cell objects for our gameboard

// function createXYValues() {
//     if (x === 8 && y === 9) {
//         return x, y;
//     }
    
// }