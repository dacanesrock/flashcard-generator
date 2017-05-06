# flashcard-generator
This NODE.js CLI allows the user to create, view and answer two types of flashcards: `basic` and `cloze`

## Getting Started
***
* 1 - install dependencies with `npm install`
* 2 - `node cli`
* 3 - use **inquirer** interface to select your options (listed below)
***
## Available Methods

### Show Basic Cards
>will cycle through cards in `basicCardQuestions`, presenting the user first with the front of the card, allowing the user input a 'guess' for the correct answer.
### Show Cloze Cards
>will cycle through cards in `clozeCardQuestions.json`, presenting the user first with the partial text, allowing the user to input a 'guess' for the correct cloze deletion.
### Make Card
>this brings up a series of prompts allowing the user to create new `basic` or `cloze` cards.
### Quit
>will `return`

## To-Do
***
* 1 - clean up all functions (very verbose)
***

## Built With

* [Javascript](https://www.javascript.com/)
* [Node.js](https://nodejs.org/en/)
* [Inquirer NPM](https://www.npmjs.com/package/inquirer)


## Author

* **Robbie Geyer** - [dacanesrock](https://github.com/dacanesrock)

## Acknowledgments

* Node, Google, Luis.