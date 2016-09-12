// CONSTRUCTOR FILE
// Contains all of the methods that check the letters guessed vs the random word selected

var Letter = require('./letter.js');    	// Contains the method that controls whether or not a letter appears as itself or as a "___" on-screen

var Word = function(word, letter){
	// Convert the random word into an array of characters
	var wordArray = word.split("");

	// Save the number of letters in the random word
	this.numLetters = wordArray.length;

	// Initialize variables
	this.numGuessed = 0;					// Counts the number of correct letter guesses
	this.guessesLeft = 10;  				// 10 wrong letter guesses before the game ends

	// Create a Letter object
	var letterOrBlank = new Letter(letter);

	for (var i=0; i<wordArray.length; i++) {
		wordArray[i] = letterOrBlank.blank;
	}

	// Convert the array of characters back into a string
	this.display = wordArray.join("");


	this.checkWord = function(word, letter, wordDisplay){
		// Convert the random word into an array of characters
		wordArray = word.split("");

		// Create a Letter object
		var letterOrBlank = new Letter(letter);

		// Convert the random word into an array of characters
		this.displayArray = wordDisplay.split("");

		// Initialize a local flag variable
		var correctGuess = false;

		// Checks whether the player's letter pick appears in the random word
		for (var i=0; i<wordArray.length; i++) {

			if (this.displayArray[i] === "_") {  // if that letter hasn't been guessed yet, compare
				if (wordArray[i] === letter) {
					this.displayArray[i] = letterOrBlank.letter;
					this.numGuessed++;
					correctGuess = true;
				} else {
					this.displayArray[i] = letterOrBlank.blank;
				}
			}

		}

		// Convert the array of characters back into a string
		this.display = this.displayArray.join("");

		if (correctGuess == false) {  // Player picked a letter that was NOT in the word
			this.guessesLeft--;
		}
		
		return this.display;
	};

};


module.exports = Word;