#! /usr/bin/env node
import inquirer from "inquirer";
//1) computer will generate a random number
//2) user input for guessing number
//3) computer user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        messeage: "Please guess a number between 1-6",
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! you Guess Right number");
}
else {
    console.log("You guessed wrong number");
}
