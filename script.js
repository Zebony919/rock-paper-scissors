let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choice = Math.random() * 100;

    if (choice <= 32) {
        return "rock"
    } else if (choice <= 65) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    let choice = prompt("Please enter your move (Rock, Paper, Scissors): ");
    return choice
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if ((humanChoice == "rock" && computerChoice == "scissors") || 
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissors" && computerChoice == "paper")) {
            humanScore++;
            resultDisplay.textContent = `You Win! ${humanChoice} beats ${computerChoice}`;
        } else if ((humanChoice == "rock" && computerChoice == "paper") || 
        (humanChoice == "paper" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "rock")) {
            computerScore++;
            resultDisplay.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
        } else {
            resultDisplay.textContent = `Tie!`;
        }

    scoreDiv.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5) {
        endgame();
    }
}

function endgame() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;

    if (humanScore > computerScore) {
        resultDisplay.textContent = "Player Wins! :)"
    } else {
        resultDisplay.textContent = "Computer Wins! :("
    }

    setTimeout(() => {
        const playAgain = confirm("Game Over! Would you like to play again?")

        if (playAgain) {
            restartGame();
        }
    }, 1000);
}

function restartGame() {
    humanScore = 0;
    computerScore = 0;

    scoreDiv.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
    resultDisplay.textContent = "Choose your move!"

    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
}

// rock
const rockButton = document.createElement("button");

rockButton.addEventListener("click", () => {
    const computer = getComputerChoice()
    playRound("rock", computer)
})

const rockImg = document.createElement("img");
rockImg.src = "./images/rock.png";
rockImg.alt = "Rock";
rockImg.classList.add("choice-images");

rockButton.appendChild(rockImg);

// paper
const paperButton = document.createElement("button");

paperButton.addEventListener("click", () => {
    const computer = getComputerChoice()
    playRound("paper", computer)
})

const paperImg = document.createElement("img");
paperImg.src = "./images/paper.jpg"
paperImg.alt = "Paper"
paperImg.classList.add("choice-images");

paperButton.appendChild(paperImg);

// scissors
const scissorsButton = document.createElement("button");

scissorsButton.addEventListener("click", () => {
    const computer = getComputerChoice()
    playRound("scissors", computer)
})

const scissorsImg = document.createElement("img");
scissorsImg.src = "./images/scissors.jpg";
scissorsImg.alt = "Scissors"
scissorsImg.classList.add("choice-images");

scissorsButton.appendChild(scissorsImg);

// Score Display
const scoreContainer = document.querySelector("#score-container");
const scoreDiv = document.createElement("div");
scoreContainer.appendChild(scoreDiv);

scoreDiv.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;


// Button-Container
const buttonContainer = document.querySelector("#button-container");
buttonContainer.appendChild(rockButton);
buttonContainer.appendChild(paperButton);
buttonContainer.appendChild(scissorsButton);

// round-result display
const resultDisplay = document.createElement("h2");
resultDisplay.textContent = "Choose your move!";
resultDisplay.classList.add("text");
resultDisplay.classList.add("result")
resultDisplay.classList.add("result-text")

const topHalf = document.querySelector(".top-half");
topHalf.appendChild(resultDisplay);

