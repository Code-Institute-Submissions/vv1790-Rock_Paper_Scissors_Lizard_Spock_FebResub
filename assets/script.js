const displayPlayerChoice = document.getElementById('player_choice')
const displayComputerChoice = document.getElementById('computer_choice')
const displayPlayerScore = document.getElementById('player_score')
const displayComputerScore = document.getElementById('computer_score')
const choiceRange = document.querySelectorAll('button')

let playerChoice
let computerChoice
let playerScore = 0
let computerScore = 0


const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock']

choiceRange.forEach(choiceRange => choiceRange.addEventListener('click', (e) => {
    playerChoice = e.target.id
    displayPlayerChoice.innerHTML = playerChoice
    displayComputerChoice.innerHTML = computerPlay()
    displayPlayerScore.innerHTML = playerScore
    displayComputerScore.innerHTML = computerScore
    getResult()
    gameState()
}))

function computerPlay() {
    return choices[Math.floor(Math.random() * 5) + 1]
}

function gameState() {
    playerScore = 0
    computerScore = 0
}

function getResult() {
    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "rock" && computerChoice === "lizard") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "paper" && computerChoice === "spock") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "scissors" && computerChoice === "lizard") ||
        (playerChoice === "lizard" && computerChoice === "paper") ||
        (playerChoice === "lizard" && computerChoice === "spock") ||
        (playerChoice === "spock" && computerChoice === "scissors") ||
        (playerChoice === "spock" && computerChoice === "rock")

    ) {
        playerScore = playerScore + 1
    } else if (
        (playerChoice === "scissors" && computerChoice === "rock") ||
        (playerChoice === "lizard" && computerChoice === "rock") ||
        (playerChoice === "rock" && computerChoice === "paper") ||
        (playerChoice === "spock" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "scissors") ||
        (playerChoice === "lizard" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "lizard") ||
        (playerChoice === "rock" && computerChoice === "lizard") ||
        (playerChoice === "paper" && computerChoice === "spock") ||
        (playerChoice === "lizard" && computerChoice === "spock")
    ) {
        computerScore = computerScore + 1
    } else {
        
    }

}


