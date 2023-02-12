const display = {
  playerChoice: document.getElementById('player_choice'),
  computerChoice: document.getElementById('computer_choice'),
  result: document.getElementById('show_result'),
  playerScore: document.getElementById('player_score'),
  computerScore: document.getElementById('computer_score')
};

const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

const buttons = {
  rock: document.querySelector('.rock'),
  paper: document.querySelector('.paper'),
  scissors: document.querySelector('.scissors'),
  lizard: document.querySelector('.lizard'),
  spock: document.querySelector('.spock')
};

let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  computerChoice = choices[Math.floor(Math.random() * 5)];
  computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
  display.computerChoice.innerHTML = computerChoice;
}

for (const [key, button] of Object.entries(buttons)) {
  button.addEventListener('click', () => {
    playerChoice = key;
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
    display.playerChoice.innerHTML = playerChoice;
    computerPlay();
    getResult();
  });
}

const wins = [
  'scissorspaper',
  'scissorslizard',
  'rockscissors',
  'rocklizard',
  'paperrock',
  'paperspock'
];

const loses = [
  'paperscissors',
  'paperspock',
  'scissorsrock',
  'scissorslizard',
  'rockpaper',
  'rocklizard'
];

const getResult = () => {
  const combinedChoices = playerChoice + computerChoice;
  if (wins.includes(combinedChoices)) {
    display.playerChoice.innerHTML = 'Player: ' + playerChoice;
    display.computerChoice.innerHTML = 'Computer: ' + computerChoice
    display.result.innerHTML = 'YOU WIN!';
    playerScore++;
    display.playerScore.innerHTML = `Player Score: ${playerScore}`;
  } else if (loses.includes(combinedChoices)) {
    display.playerChoice.innerHTML = 'Player: ' + playerChoice;
    display.computerChoice.innerHTML = 'Computer: ' + computerChoice;
    display.result.innerHTML = 'YOU LOSE!';
    computerScore++;
    display.computerScore.innerHTML = `Computer Score: ${computerScore}`;
  } else {
    display.playerChoice.innerHTML = 'Player: ' + playerChoice;
    display.computerChoice.innerHTML = 'Computer: ' + computerChoice;
    display.result.innerHTML = "IT'S A DRAW!";
  }
};
