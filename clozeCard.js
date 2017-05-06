var fs = require("fs");

var clozeCard = function(text, cloze) {
	this.cloze = cloze;
	this.fulltext = text;
	this.partial = this.fulltext.replace(this.cloze, '[...]');
};

module.exports = clozeCard;