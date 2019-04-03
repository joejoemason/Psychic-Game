//Letters
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Setting defaults
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];

//Computer's random choice
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//9 guesses
var updateGuessesLeft = function () {
    // Here we are grabbing the HTML element and setting it equal to the guessesLeft. (i.e. guessesLeft will get displayed in HTML)
    document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updateLetterToGuess = function () {
    this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};
var updateGuessesSoFar = function () {
    //Display missed guesses 
    document.querySelector('#guessed').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};
// Callback function to reset everything
var reset = function () {
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];

    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();


//User pressing a key decreases guesses left, converts to lower case, pushes last guess to front of string
document.onkeyup = function (event) {
    guessesLeft--;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    guessedLetters.push(userGuess);
    updateGuessesLeft();
    updateGuessesSoFar();

    if (guessesLeft > 0) {
        if (userGuess == letterToGuess) {
            wins++;
            document.querySelector('#wins').innerHTML = "Wins: " + wins;
            alert("You're a psychic!");
            reset();
        }
    } else if (guessesLeft == 0) {
        // If lose add 1 to losses
        losses++;
        document.querySelector('#losses').innerHTML = "Losses: " + losses;
        alert("Sorry, you're not psychic. Play again please.");
        // Resets game
        reset();
    }
};