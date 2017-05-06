var fs = require("fs");
var basicCard = require("./basicCard.js");
var clozeCard = require("./clozeCard.js");
var makeCard = require("./makeCard.js");
var showCards = require("./showCards.js");

var MainApp = function(gameType) {
    this.basicCard = function(gameType) {
    	var i = 0;
        showCards(gameType, i);
    };
    this.clozeCard = function(gameType) {
    	var i = 0;
        showCards(gameType, i);
    };
    this.create = function() {
        makeCard();
    }
};

module.exports = MainApp;
