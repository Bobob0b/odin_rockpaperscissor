
const arrResult = ["You Win!", "You Loose!", "It's a tie! Try again!"]
const arrChoices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    // returns randomly "Rock", "Paper" or "Scissors"

    let choice = Math.round(Math.random()) + Math.round(Math.random()) // sufficiently random
    return arrChoices[choice]


}

const buttons = Array.from(document.querySelectorAll("button"));
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        console.log(playRound(button.id, getComputerChoice()));
    });
});

function playRound(playerSelection, computerSelection) {
    // plays a single round of Rock,Paper,Scissors

    // allow for case-insensitive user-Input:
    playerSelection = playerSelection.toLowerCase()


    if (playerSelection == computerSelection) {
        return arrResult[2]
    }

    if (playerSelection == "rock") {
        switch (computerSelection) {
            case "scissors":
                return arrResult[0];
            case "paper":
                return arrResult[1];
        }
    }

    if (playerSelection == "paper") {
        switch (computerSelection) {
            case "rock":
                return arrResult[0];
            case "scissors":
                return arrResult[1];
        }
    }

    if (playerSelection == "scissors") {
        switch (computerSelection) {
            case "paper":
                return arrResult[0];
            case "rock":
                return arrResult[1];
        }
    }

}

//const playerSelection="Rock";
//const computerSelection =getComputerChoice();
//console.log(playRound(playerSelection,computerSelection));

function game() {

    let playerScore = 0;
    let computerScore = 0;
    let keepGoing = true;
    let winner = "";

    while (keepGoing) {

        const playerSelection = prompt("Choose Rock, Paper, or Scissor")

        let result = playRound(playerSelection, getComputerChoice())

        switch (result) {
            case arrResult[0]:
                playerScore++;
                break;
            case arrResult[1]:
                computerScore++;
                break;
            default:
                break;
        }
        console.log(result)

        if (playerScore == 3) {
            winner = "You!";
        }
        if (computerScore == 3) {
            winner = "Computer!"
        }
        if (winner != "") {
            keepGoing = false;
        }

    }

    return winner;

}

//console.log("Game finished. The winner is " + game())