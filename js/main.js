console.log('JS Loadeeeeee!!!')


//function main () {

     //document.getElementsByClassName("playBox");
    //console.log(chosenSquare);

    let flag = "<img src='./images/flag.png'>";
    let possibleMarks = [flag, "?"]

    //function clickedSquare() {
        //console.log();
    //};

    /*function changeHTML() {
        event.preventDefault();
        let chosenSquare = event.target;
        chosenSquare.innerHTML = possibleMarks[0];
        //chosenSquare.innerText = possibleMarks[m];
    }*/

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
                } else if (e.target.innerText === "X") {
                    e.preventDefault();
                } else e.preventDefault();
    });

    document.querySelector('.gameboard').addEventListener('click', e => {
        //e.target.innerText = "X";
        var whichButton = e.button;
        console.log(whichButton);
        e.target.innerText === "" ? e.target.innerText = "X": e.preventDefault();
    });



    









//}


//main();