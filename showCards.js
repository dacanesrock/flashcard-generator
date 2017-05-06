var showCards = function(gameType, i) {
    var fs = require("fs");
    var inquirer = require("inquirer");
    var prompts = require("./prompts.js");
    var index = i;
    if (gameType === "basic") {
        var basicArr = JSON.parse(fs.readFileSync("basicCardQuestions.json", "utf8"));
        if (index < basicArr.length) {
            inquirer.prompt([{
                name: "answer",
                message: basicArr[index].front
            }]).then(function(response) {
                if (response.answer === basicArr[index].back) {
                    console.log("Correct!");
                    index += 1;
                    showCards(gameType, index);
                } else {
                    console.log("Wrong!");
                    index += 1;
                    showCards(gameType, index);
                };
            });
        } else {
            console.log("Good work!" + "\n");
            prompts();
            // return
        };
    } else {
        var clozeArr = JSON.parse(fs.readFileSync("clozeCardQuestions.json", "utf8"));
        if (index < clozeArr.length) {
            inquirer.prompt([{
                name: "answer",
                message: clozeArr[index].partial
            }]).then(function(response) {
                if (response.answer === clozeArr[index].cloze) {
                    console.log("Correct!");
                    index += 1;
                    showCards(gameType, index);
                } else {
                	console.log("Wrong!");
                	index += 1;
                	showCards(gameType, index);
                };
            });
        } else {
        	console.log("Good work!" + "\n");
        	prompts();
        }
    };
};

module.exports = showCards;
