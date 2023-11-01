function getComputerChoice() {
    let randChoice = Math.floor(Math.random()*3);
    if(randChoice == 0) return "Rock";
    else if(randChoice == 1) return "Paper";
    else return "Scissors";
}


function round(playerSelection) {
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
    const rockBtn = document.createElement('button');
    rockBtn.setAttribute('style', 'color: white; background: gray;');
    rockBtn.textContent = 'Rock';

    const paperBtn = document.createElement('button');
    paperBtn.setAttribute('style', 'color: black; background: white;');
    paperBtn.textContent = 'Paper';

    const scissorsBtn = document.createElement('button');
    scissorsBtn.setAttribute('style', 'color: white; background: green;');
    scissorsBtn.textContent = 'Scissors';
    const div = document.createElement('div');
    const scoreDiv = document.createElement('div');
    const lineBreak = document.createElement('br');

    let playerScore = 0;
    let computerScore = 0;
    let gameOver = false;
    
    rockBtn.addEventListener('click', () => {
        if (gameOver) return;
        const computerSelection = getComputerChoice();
        result = round('rock', computerSelection);
        div.textContent = result;
        if (result.includes('win')) {
            playerScore++;
          } else if (result.includes('lose')) {
            computerScore++;
          }
        updateScore();
    });

    paperBtn.addEventListener('click', () =>{
        if (gameOver) return;
        const computerSelection = getComputerChoice();
        result = round('paper', computerSelection);
        div.textContent = result;
        if (result.includes('win')) {
            playerScore++;
          } else if (result.includes('lose')) {
            computerScore++;
          }
        updateScore();
    });
    scissorsBtn.addEventListener('click', () => {
        if (gameOver) return;
        const computerSelection = getComputerChoice();
        result = round('scissors', computerSelection);
        div.textContent = result;
        if (result.includes('win')) {
            playerScore++;
          } else if (result.includes('lose')) {
            computerScore++;
          }
        updateScore();
    });
    function updateScore() {
        scoreDiv.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
        if (playerScore === 5) {
          div.textContent += ' - Player wins the game!';
          gameOver = true;
        } else if (computerScore === 5) {
          div.textContent += ' - Computer wins the game!';
          gameOver = true;

        }
      }
    document.body.appendChild(div);
    document.body.appendChild(lineBreak);
    document.body.appendChild(rockBtn);
    document.body.appendChild(paperBtn);
    document.body.appendChild(scissorsBtn);
    document.body.appendChild(scoreDiv);
}

game();