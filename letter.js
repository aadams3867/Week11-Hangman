// CONSTRUCTOR FILE
// Contains the method that controls whether or not a letter appears as itself or as a "___" on-screen

var Letter = function(abc){
	this.letter = abc;
	this.blank = "_";
};

module.exports = Letter;