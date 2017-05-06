var basicCard = require("./basicCard.js");
var clozeCard = require("./clozeCard.js");
var inquirer = require("inquirer");
var fs = require("fs");

var makeCard = function() {
    var basicArr = JSON.parse(fs.readFileSync("basicCardQuestions.json", "utf8"));
    var clozeArr = JSON.parse(fs.readFileSync("clozeCardQuestions.json", "utf8"));

    inquirer.prompt([{
        name: "gameType",
        message: "What type of card would you like to make?",
        type: "list",
        choices: ["basic", "cloze"]
    }]).then(function(answer) {
        if (answer.gameType === "basic") {
            inquirer.prompt([{
                name: "front",
                message: "What do you need to remember?"
            }, {
                name: "back",
                message: "What is the answer?"
            }]).then(function(response) {
                var flashcard = new basicCard(response.front, response.back);
                basicArr.push(flashcard);
                fs.writeFileSync("basicCardQuestions.json", JSON.stringify(basicArr, null, 2), "utf8");
            })
        } else {
            inquirer.prompt([{
                name: "text",
                message: "Write a sentence that includes a cloze deletion"
            }, {
                name: "cloze",
                message: "Cloze portion (this is hidden)"
            }]).then(function(response) {
                var flashcard = new clozeCard(response.text, response.cloze);
                clozeArr.push(flashcard);
                fs.writeFileSync("clozeCardQuestions.json", JSON.stringify(clozeArr, null, 2), "utf8");
            })
        }
    });
};

module.exports = makeCard;
