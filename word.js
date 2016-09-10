// CONSTRUCTOR FILE
// Contains all of the methods that check the letters guessed vs the random word selected

var Word = function(word, letter){
	// Convert the random word into an array of characters
	var wordArray = word.split("");

	// Checks whether the player's letter pick appears in the random word
	for (var i=0; i<wordArray.length; i++) {
		if (wordArray[i] === letter) {
			wordArray[i] =  " " + letter + " ";
		} else {
			wordArray[i] = "___";
		}
	}

	// Convert the array of characters back into a string
	this.display = wordArray.join(" ");
};

module.exports = Word;