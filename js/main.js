console.log('JS Loadeeeeee!!!')


//function main () {

     //document.getElementsByClassName("playBox");
    //console.log(chosenSquare);

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
        adjCoords.forEach(element => {
          let stateMapping = element[0]+element[1]*8;
          if (state[stateMapping]) {
              numBombs = state[stateMapping].bomb ? numBombs+1 : numBombs; 
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

      function startTime() {
        init();
        interval = setInterval(function() {
            time++;
            setTime(time);
        }, 1000);
        for (var i = 0; i < cell.length; i++) {
            cell[i].removeEventListener('click', startTime);
    }
};

    /*
     *  EVENT LISTENERS
     */

    for (var i = 0; i < cell.length; i++) {
        let listenCell = [];
        cell[i].addEventListener('click', startTime);
        
    };
      /*
     *  INIT
     */

    function init() {
        state = [];
        generateBoxes(64);
        generateRandom(10, 64).forEach(element => {
            state[element].bomb = true;
        });
        //adjBombCount(state[0[0]], state[0[1]]);
        render(state);
    }

    /*
     * RENDER
     */ 

    function render(state) {
        state.forEach((element, index) => {
           if (element.bomb) {
               cell[index].innerText = "B";
           } else {
            cell[index].innerText = "";
           };
        });
    }
   
    
    
    
    
    
   
    
    //console.log(state);
    
   
    
    
    
    reSet.addEventListener('click', function() {
        let startTime = 0;
        time = startTime;    
    });

   


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