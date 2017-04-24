/* connects user click with the action that takes place */

document.getElementById('rock').onclick = playRock;
document.getElementById('paper').onclick = playPaper;
document.getElementById('scissors').onclick = playScissors;

/* defines what happens on each click */

function playRock() {
  play("rock");
}
function playPaper() {
  play("paper");
}
function playScissors() {
  play("scissors");
}

function play(humanPlay) {
  
  computerPlay = getComputerPlay();
  
  document.getElementById('status').innerHTML = "<p>You played " + humanPlay + ". Stephanie played " + computerPlay + ".</p>";
  
  if(humanPlay == 'rock') {
    if(computerPlay == 'rock') {
      document.getElementById('status').innerHTML += "<p>It's a tie!!</p>";
    } else if (computerPlay == 'paper') {
      document.getElementById('status').innerHTML += "<p>Boo! You lose.</p>";
    } else if (computerPlay == 'scissors') {
      document.getElementById('status').innerHTML += "<p>Congrats! You won this round.</p>";
    }
  } else if (humanPlay == 'paper') {
    if(computerPlay == 'rock') {
      document.getElementById('status').innerHTML += "<p>Nice work. You won this round.</p>";
    } else if (computerPlay == 'paper') {
      document.getElementById('status').innerHTML += "<p>It's a tie! Let's play again!</p>";
    } else if (computerPlay == 'scissors') {
      document.getElementById('status').innerHTML += "<p>You lose. :(</p>";
    }  
  } else if (humanPlay == 'scissors') {
    if(computerPlay == 'rock') {
      document.getElementById('status').innerHTML += "<p>Better luck next time, loser!</p>";
    } else if (computerPlay == 'paper') {
      document.getElementById('status').innerHTML += "<p>You beat me!</p>";
    } else if (computerPlay == 'scissors') {
      document.getElementById('status').innerHTML += "<p>It's a tie!!</p>";
    }  
  }  
}

function getComputerPlay() {
  var plays = ['rock', 'paper', 'scissors'];
  var play = plays[Math.floor(Math.random() * plays.length)];
  return play;
}