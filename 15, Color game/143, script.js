// To actually run the game
runGame(6);


function runGame(gameColors) {

  var currentColors = setColors(gameColors);
  var goalColorNumber = getRandomIntInclusive(0, gameColors - 1);


  initGame(currentColors, goalColorNumber);

}



// ------------------------------------------------------------------
// ------------------------------------------------------------------



// Set the array with colors
function setColors(gameColors) {

  var colors = [];

  for (var i = 0; i < gameColors; i++) {

    colors.push(makeColor());
  }

  return colors;
}


function makeColor() {
  var newColor = "rgb(";

  newColor += getRandomIntInclusive(0, 255) + ", ";
  newColor += getRandomIntInclusive(0, 255) + ", ";
  newColor += getRandomIntInclusive(0, 255) + ")";

  return newColor;
}



// Initialize the game
function initGame(currentColors, goalColorNumber) {

  // Select the squares
  var squares = document.querySelectorAll(".square");

  // Set the colors for the squares
  for (var i = 0; i < squares.length; i++) {

    squares[i].style.background = currentColors[i];
  }

  var goalColorRGB = setGoalColor(currentColors, goalColorNumber);

  initSquareEvents(squares, goalColorRGB);

}



// Set, display and returns goalcolor
function setGoalColor(currentColors, goalColorNumber) {
  var goalColorDisplay = document.querySelector("#goalColorDisplay");

  goalColorDisplay.textContent = currentColors[goalColorNumber];

  return currentColors[goalColorNumber];
}



// Add event listener to squares
function initSquareEvents(squares, goalColorRGB) {

  var messageDisplay = document.querySelector("#message");

  for (var i = 0; i < squares.length; i++) {

    squares[i].addEventListener("click", function () {

      if (goalColorRGB === this.style.background) {
        messageDisplay.textContent = "Correct!!!";

        setWinningColor(squares, goalColorRGB);

      } else {
        this.style.background = "#232323";

        messageDisplay.textContent = "Try again";
      }

    });
  }
}


// Set all squares to winning color
function setWinningColor(squares, winningColor) {

  squares.forEach(function (square) {
    square.style.background = winningColor;
  });

  document.querySelector("h1").style.background = winningColor;

}



// ------------------------------------------------------------------
// ------------------------------------------------------------------

// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
