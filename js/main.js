console.log('JS Loadeeeeee!!!')


//function main () {

     //document.getElementsByClassName("playBox");
    //console.log(chosenSquare);

    let flag = "<img src='./images/flag.png'>";
    let possibleMarks = [flag, "?"]

    //function clickedSquare() {
        //console.log();
    //};

    function changeHTML() {
        event.preventDefault();
        let chosenSquare = event.target;
        chosenSquare.innerHTML = possibleMarks[0];
        //chosenSquare.innerText = possibleMarks[m];
    }

    document.querySelector('.gameboard').addEventListener('contextmenu', e => {
        e.preventDefault();
        e.target.innerText = "X";
    });

    document.querySelector('.gameboard').addEventListener('click', e => {
        //e.target.innerText = "X";
        var whichButton = e.button;
        console.log(whichButton);
        e.target.button === 2 ? e.target.innerText = "X" : e.target.innerHTML = possibleMarks[0];
    });



    









//}


//main();