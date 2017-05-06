var prompts = function() {
	var inquirer = require("inquirer");
	var MainApp = require("./MainApp.js");
	var mainApp = new MainApp();
	inquirer.prompt([
	{
		type: "list",
		name: "option",
		message: "What would you like to do? (3 test cards supplied)",
		choices: ["Show Basic Cards", "Show Cloze Cards", "Make Card", "Quit"]
	}]).then(function(choice) {
		if (choice.option === "Show Basic Cards") {
			var gameType = "basic";
			mainApp.basicCard(gameType);
		}
		else if (choice.option === "Show Cloze Cards") {
			var gameType = "cloze";
			mainApp.clozeCard(gameType);
		}
		else if (choice.option === "Make Card") {
			mainApp.create();
		}
		else {
			return;
		}
	});
};

module.exports = prompts;