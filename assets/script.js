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

const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

let gameOver = false;
let round = 1;
const maxRounds = 5;

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

// function computerPlay() {
//   // Keep track of the player's choices
//   const playerChoices = [];

//   // Analyze the player's choices and choose the counter option
//   const analyzeChoices = () => {
//     const options = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
//     const optionCounts = options.reduce((counts, option) => {
//       counts[option] = playerChoices.filter(choice => choice === option).length;
//       return counts;
//     }, {});
  
//     const mostFrequentOption = Object.keys(optionCounts).reduce((a, b) => optionCounts[a] > optionCounts[b] ? a : b);
//     let counterOption;
  
//     switch (mostFrequentOption) {
//       case 'rock':
//         counterOption = optionCounts.paper > optionCounts.spock ? 'paper' : 'spock';
//         break;
//       case 'paper':
//         counterOption = optionCounts.scissors > optionCounts.lizard ? 'scissors' : 'lizard';
//         break;
//       case 'scissors':
//         counterOption = optionCounts.rock > optionCounts.spock ? 'rock' : 'spock';
//         break;
//       case 'lizard':
//         counterOption = optionCounts.scissors > optionCounts.rock ? 'scissors' : 'rock';
//         break;
//       case 'spock':
//         counterOption = optionCounts.paper > optionCounts.lizard ? 'paper' : 'lizard';
//         break;
//       default:
//         counterOption = options[Math.floor(Math.random() * options.length)];
//         break;
//     }
  
//     computerChoice = counterOption.charAt(0).toUpperCase() + counterOption.slice(1);
//     display.computerChoice.innerHTML = `Computer: ${computerChoice}`;
//   };
  
//   // Store the player's choice and analyze the choices
//   for (const [key, button] of Object.entries(buttons)) {
//     button.addEventListener('click', () => {
//       playerChoices.push(key);
//       playerChoice = key.charAt(0).toUpperCase() + key.slice(1);
//       display.playerChoice.innerHTML = `Player: ${playerChoice}`;
//       analyzeChoices();
//       //getResult();
//     });
//   }
// }

//computerPlay()

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
  'RockLizard',
  'SpockLizard',
  'PaperLizard',
  'ScissorsSpock',
  'RockSpock'
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
  checkRound()
  getWinner()
};

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

var gameTitle = 'Rock, Paper, Scissors, Lizard, Spock';

const startButton = document.getElementById("start_screen");
display.startButton.addEventListener('click', () => {
  display.startButton.style.display = 'none';
  document.getElementById("start_screen").style.display = "none";
});

function startGame() {
  display.playerChoice.innerHTML = "Player: ";
  display.computerChoice.innerHTML = "Computer: ";
  display.result.innerHTML = "Result: ";
  resetGameState();
  display.playerScore.innerHTML = `Player Score: ${playerScore}`;
  display.computerScore.innerHTML = `Computer Score: ${computerScore}`;
  checkRound();
}

document.getElementById("lblGreetings")
  ? (document.getElementById("lblGreetings").innerHTML = `<b>${greet}</b> and welcome to ${gameTitle}!`)
  : console.error("Element with id 'lblGreetings' not found");

  const gameOverScreen = document.getElementById("game_over_screen");
  const playAgainButton = document.getElementById("play_again_button");
  
  const showGameOverScreen = () => {
    gameOverScreen.style.display = "block";
    getWinner()
  };
  
  const hideGameOverScreen = () => {
    gameOverScreen.style.display = "none";
  };
  
  playAgainButton.addEventListener("click", () => {
    hideGameOverScreen();
    startGame();
  });
  
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
  
  function resetGameState() {
    playerScore = 0;
    computerScore = 0;
    round = 0;
    gameOver = false;
  }
