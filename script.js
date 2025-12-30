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
            console.log("You win! " + humanChoice + " beats " + computerChoice);
        } else if ((humanChoice == "rock" && computerChoice == "paper") || 
        (humanChoice == "paper" && computerChoice == "scissors") ||
        (humanChoice == "scissors" && computerChoice == "rock")) {
            computerScore++;
            console.log("You lose! " + computerChoice + " beats " + humanChoice);
        } else {
            console.log("Tie");
        }

    scoreDiv.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
}

// rock, paper, scissors buttons 
const rockButton = document.createElement("button")
rockButton.textContent = "Rock"

rockButton.addEventListener("click", () => {
    const computer = getComputerChoice()
    playRound("rock", computer)
})


const paperButton = document.createElement("button")
paperButton.textContent = "Paper"

paperButton.addEventListener("click", () => {
    const computer = getComputerChoice()
    playRound("paper", computer)
})


const scissorsButton = document.createElement("button")
scissorsButton.textContent = "Scissors"

scissorsButton.addEventListener("click", () => {
    const computer = getComputerChoice()
    playRound("scissors", computer)
})

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
