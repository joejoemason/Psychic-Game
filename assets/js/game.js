
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var chancesLeft = 8;
// var numOfChances = chancesLeft;

var userSaid = [];
var losses = 0;
var Wcounts = 0;

document.onkeyup = function (event) {
    
var userUser = String.fromCharCode(event.keyCode).toLowerCase();
var compGuess = letters[Math.floor(Math.random() * letters.length)];
    userSaid.push(userUser);

    if (userUser == compGuess) {
        console.log("correct", userSaid)
        // document.getElementById("Wcounts").innerHTML = (Wcounts.length);
        Wcounts++;
        userSaid.push(userUser);
        chancesLeft = 8;
        userSaid.length = 0;
        // (Wcounts += 1);

    } else if (chancesLeft == 0){
        console.log("no", chancesLeft, userSaid);
        losses++;
        chancesLeft = 8;
        userSaid.length = 0;
        // document.getElementById("userSaid").innerHTML = (userSaid);
        // (losses+=1);
    }
    else if (userUser !== compGuess) {
        chancesLeft--;  
    }
    var html = "<h1>Psychic Game</h1>" + "<p>What letter is on my mind?</p>" + "<p>Wins: " + Wcounts + "</p>" +
    "<p>Losses: " + 
    losses + 
    "</p>" +
    "<p>Guesses Left: " + 
    chancesLeft + 
    "</p>" +
    "<p>Your Guesses so far: " +
    userSaid +
    "</p>"
    ;
    document.querySelector('#wrap').innerHTML = html;
    }









    
