

let arrChoices = ["rock", "paper", "scissors"]

function getComputerChoice() {
    // returns randomly "Rock", "Paper" or "Scissors"

    let choice = Math.round(Math.random())+Math.round(Math.random()) // sufficiently random
    return arrChoices[choice]


}


function playRound(playerSelection, computerSelection) {
    // plays a single round of Rock,Paper,Scissors
    
    // allow for case-insensitive user-Input:
    playerSelection = playerSelection.toLowerCase()


    if (playerSelection == computerSelection) {
        return "It's a tie!"
    }

    if (playerSelection == "rock") {
        switch(computerSelection) {
            case "scissors":
                return "You Win!";
            case "paper":
                return "you Loose!";
        }
    }

    if (playerSelection == "paper") {
        switch(computerSelection) {
            case "rock":
                return "You Win!";
            case "scissors":
                return "you Loose!";
        }
    }

    if (playerSelection == "scissors") {
        switch(computerSelection) {
            case "paper":
                return "You Win!";
            case "rock":
                return "you Loose!";
        }
    }    

}

const playerSelection="Rock";
const computerSelection =getComputerChoice();
console.log(playRound(playerSelection,computerSelection));
