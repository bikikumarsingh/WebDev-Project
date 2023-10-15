let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};
/* adding event listner */
document.querySelector('.js-rock-btn').addEventListener('click',()=>{
  playGame('rock');
})
document.querySelector('.js-paper-btn').addEventListener('click',()=>{
  playGame('paper');
})
document.querySelector('.js-scissors-btn').addEventListener('click',()=>{
  playGame('scissors');
})


updateScoreElement();
 
function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }

  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
    
  } else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  }
  
  //scoreBoard
  if (result === 'You win.') {
    score.wins += 1;
  } else if (result === 'You lose.') {
    score.losses += 1;
  } else if (result === 'Tie.') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;
  //move display
  document.querySelector('.js-moves').innerHTML = `You
  <img src="img/${playerMove}-emoji.png" class="moves-img">-
  <img src="img/${computerMove}-emoji.png" class="moves-img">
  Computer`;

   
}

 
function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}
function resetGame() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScoreElement();  
}
let isAutoPlaying =false;
let intervalId ;
function autoPlay(){
  if (!isAutoPlaying) {
    intervalId = setInterval(()=> {
    const playerMove=pickComputerMove();
    playGame(playerMove);
   },1000)
   isAutoPlaying=true;
   document.querySelector('.js-auto-play').innerHTML="stop play"
   document.querySelector('.js-auto-play').classList.add('stop-play-button');
  }else {
    clearInterval(intervalId);
    isAutoPlaying=false;
    document.querySelector('.js-auto-play').innerHTML="auto play";
    document.querySelector('.js-auto-play').classList.remove('stop-play-button');
  }
  
}

document.body.addEventListener('keydown', (event) => {
  console.log(event.key);
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  }
  else if(event.key==='Delete'){
    resetGame();  
  } else if (event.key=='a') {
    autoPlay();
  }
});



