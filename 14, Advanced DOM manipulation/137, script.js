var pOneDisplay = document.querySelector("#pOneDisplay");
var pOneButton = document.querySelector("#pOneButton");
var pOneScore = 0;

var pTwoDisplay = document.querySelector("#pTwoDisplay");
var pTwoButton = document.querySelector("#pTwoButton");
var pTwoScore = 0;

var resetButton = document.querySelector("#resetButton");

var rtpDisplay = document.querySelector("p");
var rtpInput = document.querySelector("input");
var roundsToPlay = 5;
var gameOver = false;


pOneButton.addEventListener("click", function(){
  if (!gameOver) {
    pOneScore++;
    pOneDisplay.textContent = pOneScore;

    if (pOneScore === roundsToPlay) {
      gameOver = true;
      pOneDisplay.classList.add("winningScore");
    }   
  }
});


pTwoButton.addEventListener("click", function(){
  if (!gameOver) {
    pTwoScore++;
    pTwoDisplay.textContent = pTwoScore;

    if (pTwoScore === roundsToPlay) {
      gameOver = true;
      pTwoDisplay.classList.add("winningScore");      
    }    
  }
});


function resetGame() {
  pOneScore = 0;
  pOneDisplay.textContent = pOneScore;
  pOneDisplay.classList.remove("winningScore");

  pTwoScore = 0;
  pTwoDisplay.textContent = pTwoScore;
  pTwoDisplay.classList.remove("winningScore");

  gameOver = false;  
}

resetButton.addEventListener("click", resetGame);


rtpInput.addEventListener("change", function () {
  roundsToPlay = Number(this.value);
  rtpDisplay.textContent = "Rounds to play: " + this.value;

  resetGame();
});

