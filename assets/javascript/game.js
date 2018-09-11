var wins = 0;
var losses = 0;
var guessallowance = 100;
var userGuesses = 0;

     //on keypress, the following function will run
        document.onkeypress = function (userPressesKey){    
        var userGuesser = userPressesKey.key;
        console.log (userGuesser);

        var letterfarm = "abcdefghijklmnopqrstuvwxyz";
        var machineletter = letterfarm.charAt(Math.floor(Math.random() * letterfarm.length));
        console.log (machineletter);

            if (userGuesser === machineletter) { 
                wins++;
                userGuesses++;
                guessallowance--;
            }
            else {
                losses++;
                userGuesses++;
                guessallowance--;
            }
            if (guessallowance == 0) {
                document.write("Game has ended.")
                return;
            }

        document.getElementById("winners").innerHTML = wins;
        document.getElementById("lossers").innerHTML = losses;
        document.getElementById("guessleft").innerHTML = guessallowance;
        document.getElementById("yourguesses").innerHTML = userGuesses; 

        }


