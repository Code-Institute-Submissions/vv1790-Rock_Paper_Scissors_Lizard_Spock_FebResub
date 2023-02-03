const displayPlayerChoice = document.getElementById('player_choice')
const displayComputerChoice = document.getElementById('computer_choice')
const displayPlayerScore = document.getElementById('player_score')
const displayComputerScore = document.getElementById('computer_choice')

const choices = ["rock", "paper", "scissors", "lizard", "spock"]

let playerChoice 
let computerChoice 
let playerScore 
let computerScore 

function computerPlay() {
    const generateChoice = Math.floor(Math.random() * 5) + 1

    if (generateChoice === 1) {
        computerChoice = 'Computer: Rock'
      }
      if (generateChoice === 2) {
        computerChoice = 'Computer: Scissors'
      }
      if (generateChoice === 3) {
        computerChoice = 'Computer: Paper'
      }
      if (generateChoice === 4) {
        computerChoice = 'Computer: Lizard'
      }
      if (generateChoice === 5) {
        computerChoice = 'Computer: Spock'
      }
      displayComputerChoice.innerHTML = computerChoice

}

function rockFunction() {
    document.getElementById('player_choice').innerHTML = "Player: Rock"
    computerPlay()
}

function paperFunction() {
    document.getElementById('player_choice').innerHTML = "Player: Paper"
    computerPlay()
}

function scissorsFunction() {
    document.getElementById('player_choice').innerHTML = "Player: Scissors"
    computerPlay()
}

function lizardFunction() {
    document.getElementById('player_choice').innerHTML = "Player: Lizard"
    computerPlay()
}

function spockFunction() {
    document.getElementById('player_choice').innerHTML = "Player: Spock"
    computerPlay()
}

