var userLetter, computerLetter, wins, loses, chancesLeft, guessesMade;
var letters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];


let indexNumber = Math.floor(Math.random() * letters.length);

console.log(indexNumber);
computerLetter = letters[indexNumber]
console.log(computerLetter)

chancesLeft = 9
wins = 0
loses = 0
guessesMade = []

document.onkeyup = function (evt) {
    console.log(evt);

    if (evt.code.startsWith("Key")) {
        if (evt.key === computerLetter) {
            var winDisplay = document.getElementById("numWins")
            wins++;
            winDisplay.textContent = wins
            chancesLeft = 9
            guessesMade = []
            indexNumber = Math.floor(Math.random() * letters.length);
            computerLetter = letters[indexNumber]
            console.log(wins + " " + computerLetter);




        } else {//chancesleft decreases
            //guessesMade (lookup how to insert string into array
            //string is the evt.key)

        }
    }


}