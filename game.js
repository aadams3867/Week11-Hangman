// Contains the method that randomly selects a word for the player to guess

// Array holds all the words that can be guessed in the game
var fruitArray = [
	"APPLE",
	"BANANA",
	"CHERRY",
	"DATE",
	"ELDERBERRY",
	"FIG",
	"GRAPE"
];

// Computer picks a random word from the fruit array
 var randomWord = fruitArray[Math.floor(Math.random()*fruitArray.length)];

// Exports to main.js
exports.randomWord = randomWord;