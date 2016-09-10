// Contains app logic -- Run this in GitBash to start the game

// Create dependency for 'inquirer' npm package
var inquirer = require('inquirer');

// Required files to run this game
var game = require('./game.js');  			// Contains the method that randomly selects a word for the player to guess
var Letter = require('./letter.js');    	// Contains the method that controls whether or not a letter appears as a "___" or as itself on-screen
var Word = require('./word.js');  			// Contains all of the methods that check the letters guessed vs the random word selected

// Initialize global variables
var wordToGuess = game.randomWord;  						// Random word selected
var letterGuess = "R";										// Current letter the player guessed
var displayArray = new Word(wordToGuess, letterGuess);	// Stores the player's current display of letters and "___"
//var lettersGuessed = 0;										// Counts the number of correct letter guesses
var letterArray = [];  										// Stores all the letters guessed by the player so far
var guessesLeft = 7;  										// 7 wrong letter guesses before the game ends
var wonOrLost = false;										// Game is not over yet
//var numWins = 0;											// Counts the number of games won so far


console.log(wordToGuess);









// *** DISPLAY ***
console.log("Welcome to Hangman: The Game");
console.log("Your randomly selected word has been randomly selected:");
console.log(displayArray.display);