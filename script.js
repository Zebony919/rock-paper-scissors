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
    let choice = prompt("Please enter you move (Rock, Paper, Scissors): ");
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
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()
        playRound(humanChoice, computerChoice)
    }

    if (humanScore > computerScore) {
        console.log("Player Wins!")
    } else if (computerScore > humanScore) {
        console.log("Computer Wins!")
    } else {
        console.log("Tie!")
    }
}

playGame()

