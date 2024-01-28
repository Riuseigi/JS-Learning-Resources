// Rock Paper Scissor

//DOM Initialization
const choices = ["rock","paper","scissor"];

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScorerDisplay = document.getElementById("computerScorerDisplay");

// The Scores
let playerScore = 0;
let computerScore = 0;

// Onclick Function
function playGame(playerChoice){
  //Random Computer Choice Generator
  const computerChoice = choices[Math.floor(Math.random()*3)];
  

  //Display The Choices
  computerDisplay.textContent = `Computer: ${computerChoice}`;
  playerDisplay.textContent = `Player: ${playerChoice}`



  // Validation of choices
  if(playerChoice === computerChoice){
    resultDisplay.textContent = "Tie";
  }
  else{
    switch (playerChoice){
      case "rock":
        resultDisplay.textContent = (computerChoice === "scissor") ? "You Win" : "You lose";
        break;
      case "paper":
        resultDisplay.textContent = (computerChoice === "rock") ? "You Win" : "You lose";
        break;
      case "scissor":
        resultDisplay.textContent = (computerChoice === "paper") ? "You Win" : "You lose";
        break;
    }
  }

  //Display the Result
  if(resultDisplay.innerHTML === "You Win"){
    playerScore++;
    resultDisplay.style.color ="green";
  }else if(resultDisplay.innerHTML === "You lose"){
    computerScore++;
    resultDisplay.style.color ="red";
  }
  else{
    resultDisplay.style.color ="gray";
  }
  playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
  computerScorerDisplay.textContent = `Computer Score: ${computerScore}`;
}




