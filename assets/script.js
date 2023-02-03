const displayPlayerChoice = document.getElementById('player_choice')
const displayComputerChoice = document.getElementById('computer_choice')
const displayPlayerScore = document.getElementById('player_score')
const displayComputerScore = document.getElementById('computer_choice')

let playerChoice 
let computerChoice 
let playerScore 
let computerScore 

function rockFunction() {
    document.getElementById('player_choice').innerHTML = "Rock"
}

function paperFunction() {
    document.getElementById('player_choice').innerHTML = "Paper"
}

function scissorsFunction() {
    document.getElementById('player_choice').innerHTML = "Scissors"
}

function lizardFunction() {
    document.getElementById('player_choice').innerHTML = "Lizard"
}

function spockFunction() {
    document.getElementById('player_choice').innerHTML = "Spock"
}