

var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var wins = 0;
var losses = 0;
var numGuesses = 10;
var userLetterArray = [];

document.onkeyup = function(event) {

    var letter = event.key;

    var computerGuess = letterArray[Math.floor(Math.random() * letterArray.length)];

    function myFunction() {
        location.reload();
    }
   if (letterArray.indexOf(letter) > -1) {

       if (letter === computerGuess) {
           wins++;
           numGuesses = 10;
           userLetterArray = [];
          
       }

       if (letter != computerGuess) {
           numGuesses --;
           userLetterArray.push(letter);
       }

       if (numGuesses === 0) {

       numGuesses = 10;
       losses ++;
       userLetterArray = [];
       
   }

   var html = 
   "<h3> Press any letter to start !</h3>" +
   "<h3>Guess what letter I'm thinking of!</h3>" +
   "<p>Wins: " + wins + "</p>" +
   "<p>Losses: " + losses + "</p>" +
   "<p>Guesses Left: " + numGuesses + "</p>" +
   "<p>Your Guesses so far: " + userLetterArray.join(" ") + "</p>";

   document.querySelector("#game").innerHTML = html;

   
   }
   
};
function myFunction() {
    location.reload();
}
