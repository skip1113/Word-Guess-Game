var userOption = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerChoices = ["aerosmith", "blondie", "metallica", "queen", "journey", "scorpions", "poison", "whitesnake", "fleetwoodmac", "kiss", "rush"];
var realWord = "";
var numBlanks = 0;
var blanks = [];
var wins = 0;
var numLosses = 0;
var maxGuess = 10;
//guessedLetters
var guessedLetters = [];
var answerArray = [];
var computerArray = [];
var guesses = [];
var isFinished = false;
//random word is picked by computer
var realWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
// console.log("Chosen Word:" + realWord);
for (var i = 0; i < numBlanks; i++) {
    blanks.push("-");
}

document.onkeyup = function (event) {
    var userGuess = /[a-zA-Z]/;

    if (userGuess.test(event.key)) {
        document.getElementById("guessLeft").innerHTML = (event.key);

        console.log(userGuess);
    }
};

//Reset game after win or lose.
function gameReset() {
    maxGuess = 10;
    maxGuessText.textContent = maxGuess;
    //trying to add wins with button
    var winsText = document.getElementById("wins");
    if (gameReset == true) {
        Wins += 1;
        wordDisplay.textContent = wins;
    }
    blanks = [];
    guesses = [];
    guessesText.textContent = guesses;
    //picking new word after reset
    realWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log("reset word:" + realWord);
    //
    answerArray = []
    computerArray = []
    for (var i = 0; i < realWord.length; i++) {
        answerArray.push("-");
    }
    console.log(answerArray);
    wordDisplay.textContent = answerArray.join("");
    for (var i = 0; i < realWord.length; i++) {
        computerArray.push(realWord[i]);
    }
    return maxGuess, guesses, realWord, answerArray, computerArray;
}
//Checking both computer and the answerArray are identical
function checkArrays(answerArray, computerArray) {
    if (answerArray.length !== computerArray.length) {
        return false;
    }
    for (var i = 0; i < answerArray.length; i++) {
        if (answerArray[i] !== computerArray[i]); {
            return false;
        }
    }
    return true;
}

var winsText = document.getElementById("wins");
var lossesText = document.getElementById("numLosses");
var wordDisplay = document.getElementById("word-display");
var guessesText = document.getElementById("guessLeft");
var maxGuessText = document.getElementById("maxguesses");
//this is what we should start with on the page
for (var i = 0; i < realWord.length; i++) {
    answerArray[i] = "-";
}
wordDisplay.textContent = answerArray.join("");
for (var i = 0; i < realWord.length; i++) {
    computerArray[i] = realWord[i];
}
document.onkeyup = function (event) {
    var letter = String.fromCharCode(event.keyCode).toLowerCase();
    console.log("anything");

    if ((userOption.indexOf(letter) > -1) && (guesses.indexOf(letter) < 0)) {
        if (computerArray.indexOf(letter) > -1) {
            //replace - with the correct letter.
            for (var i = 0; i < computerArray.length; i++) {
                if (letter == computerArray[i]) {
                    answerArray[i] = letter;
                    console.log(answerArray[i], computerArray[i]);
                    wordDisplay.textContent = answerArray.join("");
                }
            }
            //updating Guessed letters
            guesses += letter;
            guessesText.textContent = guesses;
        } else {
            maxGuess -= 1;
            maxGuessText.textContent = maxGuess;

            guesses += letter;
            guessesText.textContent = guesses;
        }
        //Checking for a win and resetting
        if (answerArray.toString() == computerArray.toString()) {
            // console.log("checking this win");
            wins += 1;
            winsText.textContent = wins;
            gameReset();
        }
        //Checking for losses and resetting
        if (maxGuess === 0) {
            numLosses += 1;
            lossesText.textContent = numLosses;
            gameReset();
        }
    }
    //2/19/20 check for console.log on if(wins) to see if console.log hits on the page. lines 143-149
};
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, options);
});
// Or with jQuery
$(document).ready(function () {
    $('.parallax').parallax();
});