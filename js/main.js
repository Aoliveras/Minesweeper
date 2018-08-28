console.log('JS Loadeeeeee!!!')


//function main () {

     //document.getElementsByClassName("playBox");
    //console.log(chosenSquare);
   
    
    let flag = "<img src='./images/flag.png'>";
    let possibleMarks = [flag, "?"]
    let reSet = document.querySelector('.reset');
    let time = 0;
    let interval;
    
    /*reSet.addEventListener('click', function() {
        let startTime = 0;
        time = startTime;    
    });*/

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
        interval = setInterval(function() {
            time++;
            setTime(time);
        }, 1000);
    };


    document.querySelector('.gameboard').addEventListener('contextmenu', e => {
        
        //e.target.innerText === "" ? e.target.innerHTML = possibleMarks[0] : e.target.innerHTML = "";
        if (e.target.innerText === "") {
            e.preventDefault(); 
            e.target.innerText = "B!";
            } else if (e.target.innerText === "B!") {
                e.preventDefault();
                e.target.innerText = "?";
                } else if (e.target.innerText === "?") {
                    e.preventDefault();
                    e.target.innerText = "";
                } else e.preventDefault();
    });

    document.querySelector('.gameboard').addEventListener('click', e => {
        e.target.disabled = true;
        startTime();
        e.target.innerText === "" ? e.target.innerText = "X": e.preventDefault();
    });



    









//}


//main();