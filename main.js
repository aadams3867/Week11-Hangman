// Contains app logic -- Run this in GitBash to start the game

// Create dependency for 'inquirer' npm package
var inquirer = require('inquirer');

// Required files to run this game
var game = require('./game.js');  			// Contains the method that randomly selects a word for the player to guess
var Word = require('./word.js');  			// Contains all of the methods that check the letters guessed vs the random word selected

// Initialize global variables
var wordToGuess = game.randomWord;  						// Random word selected
var letterGuess = "";										// Current letter the player guessed

var displayObj = new Word(wordToGuess, letterGuess);		// Creates a new Word obj 
var wordLength = displayObj.numLetters;  					// Holds the number of letters in the random word
var wordDisplay = displayObj.display;						// Holds the player's current display of letters and "___"
var numGuessed = displayObj.numGuessed;						// Counts the number of correct letter guesses
var guessesLeft =  displayObj.guessesLeft;					// 10 wrong letter guesses before the game ends

var wonOrLost = "";											// Player has not won or lost yet


//console.log(wordToGuess)


// *** DISPLAY ***
console.log("Welcome to Hangman: The Game");
console.log("You have 10 tries to guess the FRUIT, or your man dies!");
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

		wordDisplay = displayObj.checkWord(wordToGuess, letterGuess, wordDisplay);
		console.log(wordDisplay);
		//console.log("guessesLeft", displayObj.guessesLeft);
		//console.log("numGuessed", displayObj.numGuessed);

		if (displayObj.numGuessed == wordLength) {
			wonOrLost = "won";  // Player guessed the word and won!
			gameOver();
			return;
		} else if (displayObj.guessesLeft == 0) {
			wonOrLost = "lost";  // Player ran out of guesses and lost!
			gameOver();
			return;
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