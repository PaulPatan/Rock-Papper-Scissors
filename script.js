function getComputerChoice() {
    let randChoice = Math.floor(Math.random()*3);
    if(randChoice == 0) return "Rock";
    else if(randChoice == 1) return "Paper";
    else return "Scissors";
}


function round(playerSelection, computerSelection) {
playerSelection = playerSelection.toLowerCase();
compChoice = getComputerChoice().toLowerCase();
if (!(playerSelection == "paper" || playerSelection == "rock" || playerSelection == "scissors" )) { console.log("Please input valid options"); return;} //user input validation

if(playerSelection === compChoice) return "Draw";
else if(playerSelection == "paper" && compChoice == "rock") return `You win, Paper beats Rock`;
else if(playerSelection == "scissors" && compChoice == "paper") return `You win, Scissors beats Paper`;
else if(playerSelection == "rock" && compChoice == "scissors") return `You win, Rock beats Scissors`;
else return `You lose, ${compChoice} beats ${playerSelection}`;
}


function game() {
    while(true) {
    let playerSelection = prompt("Input your choice: ");
    if(playerSelection === null) return;//handle the loop termination

    computerSelection = getComputerChoice();
    console.log(round(playerSelection, computerSelection));
    }

}


game();