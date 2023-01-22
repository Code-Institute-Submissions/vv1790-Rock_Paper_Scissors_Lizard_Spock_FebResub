let round = 1
let playerScore = 0
let computerScore = 0
let computerChoice

const choices = ["rock", "paper", "scissors", "lizard", "spock"]

function computerPlay() {
    return choices[Math.floor(Math.random() * 5) + 1]
}

function playerTurn(){
    if (!player) return null
}

function rockFunction() {
    console.log("rock")
}

function paperFunction() {
    console.log('paper')
}

function scissorsFunction() {
    console.log('scissors')
}

function lizardFunction() {
    console.log('lizard')
}

function spockFunction() {
    console.log('spock')
}

function gameState() {
    playerScore = 0
    computerScore = 0
    round = 1 
}

function