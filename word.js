// CONSTRUCTOR FILE
// Contains all of the methods that check the letters guessed vs the random word selected

var Letter = require('./letter.js');    	// Contains the method that controls whether or not a letter appears as itself or as a "___" on-screen

var Word = function(word, letter){
	// Convert the random word into an array of characters
	var wordArray = word.split("");

	// Save the number of letters in the random word
	this.numLetters = wordArray.length;

	// Initialize variables
	this.numGuessed = 0;											// Counts the number of correct letter guesses
	this.guessesLeft = 10;  										// 10 wrong letter guesses before the game ends

	// Create a Letter object
	var letterOrBlank = new Letter(letter);

	for (var i=0; i<wordArray.length; i++) {
		wordArray[i] = letterOrBlank.blank;
	}

	// Convert the array of characters back into a string
	this.display = wordArray.join(" ");



//	this.checkWord = function(word, letter, numGuessed, guessesLeft){
	this.checkWord = function(word, letter){
		// Convert the random word into an array of characters
		var wordArray = word.split("");

		// Convert the random word into an array of characters
		var displayArray = word.split("");

		// Create a Letter object
		var letterOrBlank = new Letter(letter);

		// Checks whether the player's letter pick appears in the random word
		for (var i=0; i<wordArray.length; i++) {
	//		if (wordArray[i] === "___") {  // if that letter hasn't been guessed yet, compare
				if (wordArray[i] === letter) {
					console.log("It's in there!")
					wordArray[i] = letterOrBlank.letter;
					this.numGuessed++;
					console.log("numGuessed incremented!", this.numGuessed)
					this.guessesLeft++;  // +1 here to counteract automatic -1 below
				} else {
					wordArray[i] = letterOrBlank.blank;
					console.log("No go!")
				}
	//		}
		}

		// Convert the array of characters back into a string
		console.log("This", this)
	//	console.log("thisWord", thisWord)
		this.display = wordArray.join(" ");
		console.log("This.display", this.display)
		this.guessesLeft--;
		return this.display;
	};

};



module.exports = Word;