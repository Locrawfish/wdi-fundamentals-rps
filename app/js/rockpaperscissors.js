////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
} 


function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()` .
     return move || randomPlay(); 
}

 
function getWinner(playerMove, computerMove) {
    
    if (playerMove == computerMove);{
     return  "tie";}
        else if (playerMove=="rock" && computerMove=="scissors") {
        return "player";
        }

        else if (playerMove=="scissors" && computerMove=="paper"){
            return "player";
        }

        else if (playerMove=="paper" && computerMove=="rock"){
            return "player";
        }

         else if (playerMove=="scissors" && computerMove=="rock") {
        return "computer";
        }

        else if (playerMove=="paper" && computerMove=="scissors"){
            return "computer";
        }

        else if (playerMove=="rock" && computerMove=="paper"){
            return "computer";
        }
};

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;

    while (playerWins<5 || computerWins<5){
        console.log("You chose "+playerMove + "and the computer chose " + computerMove+"." + getWinner+ " is the winner!");
        console.log("The score is currently "+playerWins + ' to ' + computerWins + '\n');
    }
    return [playerWins, computerWins];
}

