let guessCounter = 0;
let correctDisplay = document.getElementById("correct");
let wrongDisplay = document.getElementById("wrong");

console.log(Math.floor((Math.random() * 3) + 1));

document.forms[0].addEventListener("submit", function (e) {
    e.preventDefault();
    var guessValue = parseInt(document.getElementById("guessValue").value);

    guessNumber(guessValue);

})


function guessNumber(guessValue) {
    let answer = Math.floor((Math.random() * 3) + 1);
    console.log(answer);
    let guessCountMsg = document.getElementById("guessCountMsg");
    if (guessValue === answer) {
        correctDisplay.style.display = "block";
        wrongDisplay.style.display = "none";
        guessCountMsg.textContent = "You have guessed " + guessCounter + " times.";
        guessCounter = 0;
        
    } else if (guessValue < answer) {
        correctDisplay.style.display = "none";
        wrongDisplay.style.display = "block";
        document.getElementById("msgWrong").textContent = "Your guess was too low";
        guessCounter++;
        guessCountMsg.textContent = "You have guessed " + guessCounter + " times.";
        
    } else if (guessValue > answer) {
        correctDisplay.style.display = "none";
        wrongDisplay.style.display = "block";
        document.getElementById("msgWrong").textContent = "Your guess was too high";
        guessCounter++;
        guessCountMsg.textContent = "You have guessed " + guessCounter + " times.";
    }
    
}

