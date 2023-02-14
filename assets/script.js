// Game elements that appear on screen
display = {
  playerChoice: document.getElementById('player_choice'),
  computerChoice: document.getElementById('computer_choice'),
  result: document.getElementById('show_result'),
  playerScore: document.getElementById('player_score'),
  computerScore: document.getElementById('computer_score'),
  gameTitle: document.getElementById('title'),
  startButton: document.getElementById('start_button'),
  getWinner: document.getElementById('get_winner')
};

// An array of choices for the computer
const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

let gameOver = false;
let round = 1;
const maxRounds = 5;

// Player's buttons
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

// A function generates computer's choice each round
function computerPlay() {
  computerChoice = choices[Math.floor(Math.random() * choices.length)];
  computerChoice = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
  display.computerChoice.innerHTML = `Computer: ${computerChoice}`;
}

// A function for a player to interract with the game
for (const [key, button] of Object.entries(buttons)) {
  button.addEventListener('click', () => {
    playerChoice = key.charAt(0).toUpperCase() + key.slice(1);
    display.playerChoice.innerHTML = `Player: ${playerChoice}`;
    computerPlay();
    getResult();
  });
}

// Arrays of winning and losing combinations
const wins = [
  'ScissorsPaper',
  'ScissorsLizard',
  'RockScissors',
  'RockLizard',
  'PaperRock',
  'PaperSpock',
  'LizardSpock',
  'LizardPaper',
  'SpockScissors',
  'SpockRock'
];

const loses = [
  'PaperScissors',
  'PaperSpock',
  'ScissorsRock',
  'ScissorsLizard',
  'RockPaper',
  'LizardRock',
  'SpockLizard',
  'PaperLizard',
  'ScissorsSpock',
  'RockSpock'
];

// A function that determines a round's outcome
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
  checkRound()
  getWinner()
};

// Determines winner of a game after five rounds
const getWinner = () => {
  const winningScore = 3;
  if (playerScore === winningScore) {
    display.getWinner.innerHTML = 'You are the winner!';
    gameOver = true;
  } else if (computerScore === winningScore) {
    display.getWinner.innerHTML = 'The computer is the winner!';
    gameOver = true;
  } else if (playerScore === computerScore) {
    display.getWinner.innerHTML = 'The game is a Tie!';
  }
};

var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs >= 0 && hrs < 12) {
    greet = 'Good Morning';
} else if (hrs >= 12 && hrs <= 17) {
    greet = 'Good Afternoon';
} else if (hrs >= 17 && hrs <= 24) {
    greet = 'Good Evening';
} else {
    greet = 'Invalid time';
}

// Button starts the game
const startButton = document.getElementById("start_screen");
display.startButton.addEventListener('click', () => {
  display.startButton.style.display = 'none';
  document.getElementById("start_screen").style.display = "none";
});

// Function starts the game
function startGame() {
  display.playerChoice.innerHTML = "Player: ";
  display.computerChoice.innerHTML = "Computer: ";
  display.result.innerHTML = "Result: ";
  resetGameState();
  display.playerScore.innerHTML = `Player Score: ${playerScore}`;
  display.computerScore.innerHTML = `Computer Score: ${computerScore}`;
  checkRound();
}

// A welcome message with a time of the day
var gameTitle = 'Rock, Paper, Scissors, Lizard, Spock';
document.getElementById("lblGreetings")
  ? (document.getElementById("lblGreetings").innerHTML = `<b>${greet}</b> and welcome to ${gameTitle}!`)
  : console.error("Element with id 'lblGreetings' not found");

// Display game-over screen and play again button
  const gameOverScreen = document.getElementById("game_over_screen");
  const playAgainButton = document.getElementById("play_again_button");
  
  const showGameOverScreen = () => {
    gameOverScreen.style.display = "block";
    getWinner()
  };
  
  const hideGameOverScreen = () => {
    gameOverScreen.style.display = "none";
  };

// Play again button, restarts the game
  playAgainButton.addEventListener("click", () => {
    hideGameOverScreen();
    startGame();
  });


// Function checks the number of rounds
  const checkRound = () => {
    if (gameOver) {
      showGameOverScreen();
      return;
    }
  
    round++;
    if (round > maxRounds) {
      gameOver = true;
      checkRound();
    }
  };
 
// Function resets the game 
  function resetGameState() {
    playerScore = 0;
    computerScore = 0;
    round = 0;
    gameOver = false;
  }
