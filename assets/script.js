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
  computerChoice = choices[Math.floor(Math.random() * choices.length)];
  computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
  display.computerChoice.innerHTML = `Computer: ${computerChoice}`;
}

for (const [key, button] of Object.entries(buttons)) {
  button.addEventListener('click', () => {
    playerChoice = key.charAt(0).toUpperCase() + key.slice(1);
    display.playerChoice.innerHTML = `Player: ${playerChoice}`;
    computerPlay();
    getResult();
  });
}

const wins = [
  'ScissorsPaper',
  'ScissorsLizard',
  'RockScissors',
  'RockLizard',
  'PaperRock',
  'PaperSpock'
];

const loses = [
  'PaperScissors',
  'PaperSpock',
  'ScissorsRock',
  'ScissorsLizard',
  'RockPaper',
  'RockLizard'
];

const getResult = () => {
  const combinedChoices = `${playerChoice}${computerChoice}`;
  if (wins.includes(combinedChoices)) {
    display.result.innerHTML = 'Result: You Win!';
    playerScore++;
    display.playerScore.innerHTML = `Player Score: ${playerScore}`;
  } else if (loses.includes(combinedChoices)) {
    display.result.innerHTML = 'Result: You Lose!';
    computerScore++;
    display.computerScore.innerHTML = `Computer Score: ${computerScore}`;
  } else {
    display.result.innerHTML = "Result: It's a Tie!";
  }
};
