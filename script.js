// This is a simple rock-paper-scissors game to be
// played in the browser console

//  util function to stringify random choices
function stringifyChoice(choice) {
    switch (choice) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors"
            break;
    }
}

// 1. getComputerChoice:
// randomly return rock, paper or scissors
function getComputerChoice() {
    let computerChoice = Math.ceil((Math.random() * 3));
    // console.log(computerChoice);
    return stringifyChoice(computerChoice);
}


// 2. getHumanChoice    
// prompt the user to enter a valid choice
function getHumanChoice() {
    let humanChoice = prompt("Please enter 'rock', 'paper' or 'scissors' below.","");
    //console.log(humanChoice);
    if (humanChoice === null) {
        return null;
    }
    else {
        return humanChoice.toLowerCase();
    }    
}

function displayScoreboard(round) {

    if (round !== undefined) {
        console.log(`--- Round ${round} ---`);
    }
    console.log("--- SCORE ---");
    console.log(`Computer: \t Player:`);
    console.log(`${computerScore} \t ${humanScore}`);
}

// 4. playRound
// function to play a round: 
// 4.1 compare getComputerChoice to getHumanChoice
// 4.2 evaluate winner
// 4.3 output winner + updated score board
function playRound() {

    // get input
    let compChoice = getComputerChoice();
    // console.log(`The computer has chosen ${compChoice}.`);

    let playerChoice = getHumanChoice();
    // exit game if player clicks abort
    if (playerChoice === null) {
        return 1;
    }
    // console.log(`You have chosen ${playerChoice}.`);

    // compare choices:
    switch(compChoice)
    {
    case "rock":
        
        switch(playerChoice) {
            case "rock":
                // draw
                console.log("Draw!");
                break;

            case "paper":
                // player wins
                humanScore++;
                console.log("You win! Paper beats rock.");
                break;

            case "scissors":
                // computer wins
                computerScore++;
                console.log("You lose! Rock beats scissors.");
                break;
        }
        
    break;

    case "paper":

        switch(playerChoice) {
            case "rock":
                // computer wins
                computerScore++;
                console.log("You lose! Paper beats rock.");
                break;

            case "paper":
                // draw
                console.log("Draw!");
                break;

            case "scissors":
                // player wins
                humanScore++;
                console.log("You win! Scissors beats paper.");
                break;
        }
    break;

    case "scissors":

        switch(playerChoice) {
            case "rock":
                // player wins
                humanScore++;
                console.log("You win! Rock beats scissors.");
                break;

            case "paper":
                // computer wins
                computerScore++;
                console.log("You lose! Scissors beats paper.");
                break;

            case "scissors":
                //draw
                console.log("Draw!");
                break;
        }
        break;
    }

    return 0;
}

function gameOver(computerScore, humanScore) {

    console.clear();
    displayScoreboard();
    console.log("--- GAME OVER ---");

    if (computerScore > humanScore) {
        console.log("You lose.");
    }
    else if (computerScore < humanScore) {
        console.log("You win!");
    }
    else {
        console.log("Draw.");
    }

}


function playGame() {

    // reset global variables + clear console
    humanScore = 0;
    computerScore = 0;
    console.clear();

    // set state for userHasQuit to 0
    let userHasQuit = 0;

    // 5. Game Loop = 5x playRound();
    for(let round = 1; round <= 5; round++) {

        userHasQuit = playRound();
        if (userHasQuit === 1) {
            break;
        }
        displayScoreboard(round);
    }

    // display win or lose
    gameOver(computerScore, humanScore);
    if (userHasQuit === 1) {
        console.log("Game quit by player.");
    }

    return userHasQuit;
}


// GLOBAL SCOPE CODE BELOW THIS POINT:
// ===================================


let humanScore = 0;
let computerScore = 0;

/*
document.querySelector("#start-button")
    .addEventListener("click", playGame());
*/

    