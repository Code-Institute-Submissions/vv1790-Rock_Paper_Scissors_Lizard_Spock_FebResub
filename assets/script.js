// const btn  = document.querySelector('button')
const rockBtn = document.querySelector('.rock')
const paperBtn = document.querySelector('.paper')
const scissorsBtn = document.querySelector('.scissors')
const lizardBtn = document.querySelector('.lizard')
const spockBtn = document.querySelector('.spock')

const displayPlayerChoice = document.getElementById('player_choice')
const displayComputerChoice = document.getElementById('computer_choice')

const computerChoices = ['rock', 'paper' , 'scissors', 'lizard', 'spock']
const playerChoices = [rockBtn, paperBtn, scissorsBtn, lizardBtn, spockBtn]


rockBtn.addEventListener("click", changeColor);
      function changeColor() {
        displayPlayerChoice.innerHTML = playerChoices
}

paperBtn.addEventListener("click", changeColor);
      function changeColor() {
        displayPlayerChoice.innerHTML = 'paper'
}
