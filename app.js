let clicks = o;
const maxClicks = 3;
const guess = (Math.floor((Math.random() * 10) + 1));
console.log(guess);

function guessing() {
    const displayNum = document.getElementById("displayNum").value;
    const guessBtn = document.getElementById("guessBtn");
    const constOutput = document.getElementById("constOutput");
    const chances = document.getElementById("chances");


    if (displayNum == guess) {
        constOutput.innerHTML = "Game Over....👏👏👏👏 You win!!!!"  ;
        guessBtn.disabled = true;
    } else if (displayNum > guess) {
        constOutput.innerHTML = "your Number is too high...";
    } else{
        constOutput.innerHTML = "your Number is too Low...";
    }
}



