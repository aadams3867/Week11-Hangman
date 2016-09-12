// Contains app logic -- Run this in GitBash to start the game

// Create dependency for 'inquirer' npm package
var inquirer = require('inquirer');

// Required files to run this game
var game = require('./game.js');  			// Contains the method that randomly selects a word for the player to guess
var Word = require('./word.js');  			// Contains all of the methods that check the letters guessed vs the random word selected

// Initialize global variables
var wordToGuess = game.randomWord;  						// Random word selected
var letterGuess = "";										// Current letter the player guessed
//var numGuessed = 0;											// Counts the number of correct letter guesses
//var guessesLeft = 10;  										// 10 wrong letter guesses before the game ends
var displayObj = new Word(wordToGuess, letterGuess);		// Stores the player's current display of letters and "___"
var wordLength = displayObj.numLetters;  					// Holds the number of letters in the random word
var wordDisplay = displayObj.display;						// Holds the game display of the random word (letters and "___")
var wonOrLost = "";											// Player has not won or lost yet


console.log(wordToGuess);


// *** DISPLAY ***
console.log("Welcome to Hangman: The Game");
console.log("Your randomly selected word has been randomly selected:");
console.log(wordDisplay);


// *** PLAYING THE GAME *** //
function pickALetter() {
	inquirer.prompt([{
			name: "letterPick",
			message: "What letter do you pick?",
			filter: function(input) {
			    return input.toUpperCase();
			}			
	}]).then(function(answer) {
		letterGuess = answer.letterPick;
		console.log("wordDisplay", wordDisplay)
		wordDisplay = Word.prototype.checkWord(wordToGuess, letterGuess, numGuessed, guessesLeft);
//		console.log("thisWord in main", thisWord)
		console.log("guessesLeft", guessesLeft)
		console.log("wordLength", wordLength)
		console.log(wordDisplay);
		console.log("numGuessed", numGuessed)
		if (numGuessed == wordLength) {
			wonOrLost = "won";  // Player guessed the word and won!
			gameOver();
		} else if (guessesLeft == 0) {
			wonOrLost = "lost";  // Player ran out of guesses and lost!
			gameOver();
		}

		// Play on!
		pickALetter();
	});
};

// *** THE GAME IS FINALLY OVER *** //
function gameOver() {
	console.log("=======================");
	console.log("GAME OVER!");
	console.log("=======================");
	if (wonOrLost == "won") {
		console.log("Congratulations, you won and saved the day!");
	} else if (wonOrLost == "lost") {
		console.log("Oh noes, you were so bad at guessing that your man died!");
	}
	return;
};

// *** START THE GAME *** //
pickALetter();