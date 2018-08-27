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

    document.querySelector('.gameboard').addEventListener('click', e => {
        //e.target.innerText = "X";
        e.preventDefault();
        (e.button === 0 ? e.target.innerText = "X" : e.target.innerHTML = possibleMarks[0]);
    });













//}


//main();