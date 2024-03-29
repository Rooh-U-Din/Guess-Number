#! /usr/bin/env node

import inquirer from "inquirer"

const guessNumber=Math.floor(Math.random() * 10 + 1)



const answer = await inquirer.prompt([
    {name : "Guess_Number_Game",
    type:"number",
    message:"Please Guess Number Between 1-10: "
}
])
if (answer.Guess_Number_Game=== guessNumber) {
    console.log("Congratulation You Guessed Right Number.");
    
} else {
    console.log("You Guess Wrong");
    
}