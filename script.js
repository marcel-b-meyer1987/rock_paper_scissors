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
    console.log(computerChoice);
    return stringifyChoice(computerChoice);
}


// 2. getHumanChoice
// prompt the user to enter a valid choice
function getHumanChoice() {
    let humanChoice = prompt("Please enter 'rock', 'paper' or 'scissors' below.","");
    console.log(humanChoice);
    return humanChoice;
}

// 3. declare + initialize score variables
// for humanScore and computerScore

// 4. playRound
// function to play a round: 
// 4.1 compare getComputerChoice to getHumanChoice
// 4.2 evaluate winner
// 4.3 output winner + updated score board

// 5. Game Loop = 5x playRound