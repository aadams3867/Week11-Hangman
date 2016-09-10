// CONSTRUCTOR FILE
// Contains all of the methods that check the letters guessed vs the random word selected

var Letter = require('./letter.js');    	// Contains the method that controls whether or not a letter appears as itself or as a "___" on-screen

var Word = function(word, letter){
	// Convert the random word into an array of characters
	var wordArray = word.split("");

	// Save the number of letters in the random word
	this.numLetters = wordArray.length;

	// Create a Letter object
	var letterOrBlank = new Letter(letter);

	for (var i=0; i<wordArray.length; i++) {
		wordArray[i] = letterOrBlank.blank;
	}

	// Convert the array of characters back into a string
	this.display = wordArray.join(" ");
};


Word.prototype.checkWord = function(word, letter, numGuessed, guessesLeft){
	// Convert the random word into an array of characters
	var wordArray = word.split("");

	// Create a Letter object
	var letterOrBlank = new Letter(letter);

	// Checks whether the player's letter pick appears in the random word
	for (var i=0; i<wordArray.length; i++) {
		if (wordArray[i] === letter) {
			wordArray[i] = letterOrBlank.letter;
			numGuessed++;
			guessesLeft++;  // +1 here to counteract automatic -1 below
		} else {
			wordArray[i] = letterOrBlank.blank;

		}
	}

	// Convert the array of characters back into a string
	this.display = wordArray.join(" ");

	guessesLeft--;
};

module.exports = Word;