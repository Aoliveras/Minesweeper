//function main () {

    /*
     *  CONSTANTS AND CACHED DOM NODES
     */

    let state = [];
    const flag = "<img src='./images/flag.png'>";
    const possibleMarks = [flag, "?"];
    const reSet = document.querySelector('.reset');
    const startCLick = document.querySelector('.gameboard');
    const cell = document.querySelectorAll('.playBox');
    let time = 0;
    let interval;

    /*
     *  UTILITY
     */

    function revealCells(x,y) {

        let matrix = chunkArray(state);

        if (matrix[y][x].bomb || matrix[y][x].bombNeighbor > 0) return;

        let adjCoords = [
            [x-1, y],
            [x+1, y],
            [x, y-1],
            [x, y+1],
            [x-1, y+1],
            [x+1, y-1],
            [x-1, y-1],
            [x+1, y+1]
        ];


        if ((matrix[y][x].bombNeighbor !== 0) || matrix[y][x].visited) return;
        
        state[y*8 + x].visited = true;
        state[y*8 + x].hidden = false;
        let k=0;
        for (k=0; k<adjCoords.length; k++) {
            let i = adjCoords[k][0];
            let j = adjCoords[k][1];
            let iCond = (i >= 0) && (i < 8);
            let jCond = (j >= 0) && (j < 8);

            if (iCond && jCond) {
                revealCells(i,j);
            }
        }

    }

    function generateRandom(numBombs, range) {
        let bombIdx = [];
        while (bombIdx.length !== numBombs) {
            let randNum = Math.floor(Math.random()* range);
            if (!bombIdx.includes(randNum)) {
                bombIdx.push(randNum);
            }
        } 
        return bombIdx;
    }

    function chunkArray(state) {
        return state
            .map((item, idx) => (idx % 8) === 0 ? state.slice(idx,idx+8) : null)
            .filter(item => item)
    }

    function adjBombCount(x,y) {
        let numBombs = 0;
        let adjCoords = [
            [x-1, y],
            [x+1, y],
            [x, y-1],
            [x, y+1],
            [x-1, y+1],
            [x+1, y-1],
            [x-1, y-1],
            [x+1, y+1]
        ];

        let matrix = chunkArray(state);

        adjCoords.forEach(element => {
           [i,j] = element;
           let iCond = (i >= 0) && (i < 8);
           let jCond = (j >= 0) && (j < 8);
       
           if (iCond && jCond) {
               numBombs = matrix[j][i].bomb ? numBombs + 1 : numBombs;
           }
           
        });

        return numBombs;
    }

    class Cell {
        constructor(x, y) {
            this.bomb = false;
            this.bombNeighbor = 0;
            this.flagged = false;
            this.hidden = true;
            this.visited = false;
            this.x = x;
            this.y = y;
        }
    }

    function generateBoxes(num) {
        let yCoord = -1;
        for (let i = 0; i < num; i++) {
            let xCoord = i % 8;
            if (xCoord === 0) yCoord++;
            let box = new Cell(xCoord, yCoord);
            state.push(box);
        }
    };


    function convertToTime(time) {
        let minutes = "0" + Math.floor(time / 60);
        let seconds = "0" + time % 60;
        return minutes.substr(-2) + ":" + seconds.substr(-2);
    }
  
    function setTime(time) {
        let timeEl = document.querySelector('.timer');
        timeEl.innerHTML = convertToTime(time);
    };

    function startTime(evt) {
        state[evt.target.dataset.id].hidden = false;
        let fromClickId = evt.target.dataset.id;
        revealCells(fromClickId%8, Math.floor(fromClickId/8));
        render(state);
         if (state[evt.target.dataset.id].bomb) { 
             alert('You lost');
             startCLick.removeEventListener('click', startTime);
             //clearInterval(interval);
         };
         interval = setInterval(function() {
             time++;
             setTime(time);
         }, 1000);
         for (var i = 0; i < cell.length; i++) {
             let cellText = [];
             // cell[i].style.visibility = "hidden";
             // cellText.push(cell[i].innerText);
             //     for (var j = 0; j < cellText.length; j++) {
             //         if (cellText[i].innerText === "B") {
             //             cellText[i].style.visibility = "hidden";
             //         } else {};
             //     }
              }
    };

    /*
     *  EVENT LISTENERS
     */

 
    startCLick.addEventListener('click', startTime);
  

    reSet.addEventListener('click', function() {
        location.reload();
        // clearInterval(interval);
        // var time = 0; 
        // setTime(time);
        // renderBlank();
        // gameOn();
    });

      /*
     *  INIT
     */

    function init() {
        state = [];
        generateBoxes(64);
        generateRandom(10, 64).forEach(element => {
            state[element].bomb = true;
        });
        state.forEach(cl => {
            cl.bombNeighbor = adjBombCount(cl.x, cl.y);
        })
        
        render(state);
    }

    
    /*
     * RENDER
     */ 

    function render(state) {
        state.forEach((element, index) => {
            if (!element.hidden) {
                if (element.bomb) {
                    cell[index].innerHTML = "<span>B</span>";
                } else {
                    cell[index].innerHTML = element.bombNeighbor;
                };
            }
        });
    }

    init();
   
    
    
    
    
   
    
    
    
   

   


    // document.querySelector('.gameboard').addEventListener('contextmenu', e => {
       
    //     //e.target.innerText === "" ? e.target.innerHTML = possibleMarks[0] : e.target.innerHTML = "";
    //     if (e.target.innerText === "") {
    //         e.preventDefault(); 
    //         e.target.innerText = "B!";
    //         } else if (e.target.innerText === "B!") {
    //             e.preventDefault();
    //             e.target.innerText = "?";
    //             } else if (e.target.innerText === "?") {
    //                 e.preventDefault();
    //                 e.target.innerText = "";
    //             } else e.preventDefault();
    // });

    
    
    // startCLick.addEventListener('click', e => {
    //     e.disabled = true;
    //     startTime();
    //     console.log(e.target);
    //     e.target.innerText === "" ? e.target.innerText = "X" : e.preventDefault();
        
    // });



    









//}


//main();