//Use key events to see what players will type.
    //display the page of whats happening
    //Press any key to get started
    //Wins: # of times user guessed the word correctly.
    //Basically a game of Hangman W/O hanging a man lol.
    //Numer of guesses remaining: # og guesses remaining for user.
    //Letters already guess: Letters guess, displayed like (L Z Y H).
    //After win/lose the game should choose another word and make the user play it.
    // let display = document.querySelector('.display');
    // let guessQuerySelector = document.querySelector('#character');
    // let textForm = document.querySelector('.textForm');
    
        var computerChoices = ["aerosmith", "blondie", "metallica", "queen", "journey", "scorpions", "poison", "whitesnake", "fleetwoodmac", "kiss", "rush"];

        var numWins = 0;
        var numLosses = 0;
        var maxGuess = 10;
        var guessLeft = 0;
        //guessedLetters
        var guessedLetters = [];

        var correctCharacters = [];
        var isFinished = false;
        //random word is picked by computer
        var realWord = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        console.log("Chosen Word:" + realWord);
         
        
        //event key user presses
        document.onkeyup = function(event) {
            var userGuess = /[a-zA-Z]/;

            if (userGuess.test(event.key)) {
                document.getElementById("guessLeft").innerHTML = (event.key); 
                
                console.log(userGuess);
            }
        };
    
        //Reset game after win or lose.
        function gameReset() {
            guessLeft = maxGuess;
            maxGuessText.textContent = maxGuess;
            isFinished = false;

            

            answerArray = []
            typedCharacters = []
        

            for (var i = 0, j = realWord.length; i < j; i++) {
                if (realWord[i] === " "); {
                    answerArray.push(" ");
                } //else {
                    //answerArray.push("_");
                //}
            }

            
            

            
        }

        function updateDisplay() {
            document.getElementById("numWins").innerHTML = "wins!:" + numWins;
            document.getElementById("numLosses").innerHTML = "Losses:" + numLosses;
            document.getElementById("guessLeft").innerHTML = "Guesses Left:" + guessLeft;
            document.getElementById("answerWord").innerHTML = answerArray.join("");
            document.getElementById("typedCharacters").innerHTML = typedCharacters;

        };

        function checkGuess(letter) {
            if (typedCharacters.indexOf(letter) === -1) {
                typedCharacters.push(letter);
                
                if (realWord.indexOf(letter) === -1) {
                    guessLeft--;

                
                }

            } else {
                for (var j = 0; j < realWord.length; j++) {
                    if (letter === realWord[j]) {
                        answerArray[i] = letter;
                    }
                }
            }
        };

        function checkWinner() {

            if (answerArray.indexOf("_") === -1) {
                wins++;
                isFinished = true;
            }
        }

        function checkLoser() {
            if(typedCharacters <= 0) {
                losses++
                ifFinished = true;
            }
        }


        // document.onkeyup = function(event) {
        //     var answerArray = event.key;

        //     if (isFinished) {
        //         setup();
        //         isFinished = false;
        //     }
        // };

        
        

           
            // var answerArray = event.key;

        

            // var chosenWord = computerGuess(computerChoices);
            // console.log(chosenWord)

            // var guessWord = userGuess;
            // var shortWordLength = computerGuess.length > guessWord.length ? guessWord.length : computerGuess.length;
            //looping answers with _ _ _ on display.
            

            // for (var i = 0; i < computerChoices.length; i++) {
            //     // answerArray[i] = "_";
            //     console.log(computerChoices);

            //         if (userGuess[i] === computerChoices[i]) {
            //             correctCharacters.push("_")
            //             console.log("correct:" + correctCharacters)
            //             wins++;
            //         }
            //         else {
            //             typedCharacters.push("_")
            //             console.log("incorrect:" + typedCharacters)
            //             remains++;
            //         }
                    
            // }
            
            // for (var j = 0; j < computerChoices.length; j++) {
            //     mysteryWord.push(computerChoices.charAt[j]);
            //     mysteryWord.toString[j]
            //     console.log("mysteryWord")
            // }
            // var remainingLets = chosenWord.length;

            // while (remainingLetters > 0) {
            //     console.log(anserArray.join(" "));
            // }

            // if ("userGuess" === null) {

            // } else if (userGuess.length)



            //Displays
            // computerChoiceText.textContent = ""
            // winsText.textContent = "Wins:" + wins;
            // lossesText.textContent = "losses:" + losses; 
            // remainingLetters.textContent = "Guesses Remaining:" + remains; 
            // userChoiceText.textContent = "Your letters:" + userGuess;
                 
        //};      

    
    