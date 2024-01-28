let PlayerScore1El = document.getElementById("ScorePlayer1");
let PlayerScore2El = document.getElementById("ScorePlayer2");
let player1 = {
  Score: 0,
};

let player2 = {
  Score: 0,
};

function p1plusOne() {
  player1.Score += 1;
  PlayerScore1El.innerText = player1.Score;
  console.log(player1.Score);
}

function p1plusTwo() {
  player1.Score += 2;
  PlayerScore1El.innerText = player1.Score;
}

function p1plusThree() {
  player1.Score += 3;
  PlayerScore1El.innerText = player1.Score;
}

function p1minusTwo() {
  player1.Score -= 2;
  PlayerScore1El.innerText = player1.Score;
}

function p2plusOne() {
  player2.Score += 1;
  PlayerScore2El.innerText = player2.Score;
}

function p2plusTwo() {
  player2.Score += 2;
  PlayerScore2El.innerText = player2.Score;
}

function p2plusThree() {
  player2.Score += 3;
  PlayerScore2El.innerText = player2.Score;
}

function p2minusTwo() {
  player2.Score -= 2;
  PlayerScore2El.innerText = player2.Score;
}

function newGame() {
  PlayerScore1El.innerText = 0;
  PlayerScore2El.innerText = 0;
  player1.Score = 0;
  player2.Score = 0;
}