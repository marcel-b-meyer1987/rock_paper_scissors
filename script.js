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
    return humanChoice.toLowerCase();
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
    console.log(`The computer has chosen ${compChoice}.`);

    let playerChoice = getHumanChoice();
    console.log(`You have chosen ${playerChoice}.`);

    // compare choices:
    switch(compChoice)
    {
    case "rock":
        
        switch(playerChoice) {
            case "rock":
                // draw
                break;

            case "paper":
                // player wins
                humanScore++;
                break;

            case "scissors":
                // computer wins
                computerScore++;
                break;
        }
        
    break;

    case "paper":

        switch(playerChoice) {
            case "rock":
                // computer wins
                computerScore++;
                break;

            case "paper":
                // draw
                break;

            case "scissors":
                // player wins
                humanScore++;
                break;
        }
    break;

    case "scissors":

        switch(playerChoice) {
            case "rock":
                // player wins
                humanScore++;
                break;

            case "paper":
                // computer wins
                computerScore++;
                break;

            case "scissors":
                //draw
                break;
        }

        break;

    return 0;
    }

}

function gameOver(computerScore, humanScore) {

    console.clear();
    console.log("--- GAME OVER ---");

    if computerScore > humanScore {
        console.log("You lose.");
    }
    else if computerScore < humanScore {
        console.log("You win!");
    }
    else {
        console.log("Draw.");
    }

}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;


    // 5. Game Loop = 5x playRound();
    for(let round = 1; round++; round <= 5) {

        playRound();
        displayScoreboard(round);
    }

    // display win or lose
    gameOver(computerScore, humanScore);

    return 0;
}


// GLOBAL SCOPE CODE BELOW THIS POINT:
// ===================================

document.querySelector("#start-button")
    .addEventListener("click", playGame());



    