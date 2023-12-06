// Basic Variables for the Game

const scorePlayer = document.querySelector(".scorePlayer");
const scoreComputer = document.querySelector(".scoreComputer");
const arrResult = ["You Win!", "You Loose!", "It's a tie! Try again!"]
const arrChoices = ["rock", "paper", "scissors"]
const result = document.querySelector("#result");
const buttons = Array.from(document.querySelectorAll(".gamebutton"));
const btnRestart = document.querySelector("#restart");
let playerScore = 0;
let computerScore = 0;

// Register Events

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        game(button.value);
    });
});
btnRestart.addEventListener("click", (e) => {
    newGame();
});
window.addEventListener("load", (e) => {
    initGame();
})

// Game mechanics

function getComputerChoice() {
    // returns randomly "Rock", "Paper" or "Scissors"
    let choice = Math.round(Math.random()) + Math.round(Math.random()) // sufficiently random
    return arrChoices[choice]
}

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


function game(buttonvalue) {

    let res = playRound(buttonvalue, getComputerChoice())

    switch (res) {
        case arrResult[0]:
            playerScore++;
            break;
        case arrResult[1]:
            computerScore++;
            break;
        default:
            break;
    }

    result.textContent = res;
    scorePlayer.textContent = playerScore;
    scoreComputer.textContent = computerScore;

    if (playerScore == 3) {
        result.textContent = `Congratulations! You won! Final Score: ${playerScore} : ${computerScore}`;
        initGame();
    }
    if (computerScore == 3) {
        result.textContent = `Oh no! Computer wins! Final Score: ${playerScore} : ${computerScore}`;
        initGame();
    }
}

function initGame() {

    // Initialize Game
    scorePlayer.textContent = 0;
    scoreComputer.textContent = 0;

    buttons.forEach(button => {
        button.disabled = true;
    })
    btnRestart.disabled = false;
}

function newGame() {
    playerScore = 0;
    computerScore = 0;
    scorePlayer.textContent = playerScore;
    scoreComputer.textContent = computerScore;
    result.textContent = "Choose!";
    buttons.forEach(button => {
        button.disabled = false;
    })
    btnRestart.disabled = true;
}