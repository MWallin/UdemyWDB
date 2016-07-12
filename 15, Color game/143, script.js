// #############################################################
// Global variable declaration

// Game state variables
var gameMode = "Hard";
var currentColors;
var goalColorRGB;

// Selectors 
var headerDisplay = document.querySelector("#header"); 
var goalColorDisplay = document.querySelector("#goalColorDisplay");

var newColorBtn = document.querySelector("#new-game");
var messageDisplay = document.querySelector("#message");
var diffBtns = document.querySelectorAll(".diff-btn");

var squares = document.querySelectorAll(".square");
// #############################################################


// To actually run the game
setUpGame();





// ------------------------------------------------------------------
// Main game functions
// ------------------------------------------------------------------

// Add event handlers
function setUpGame() {
  
  // Add listener to new game button
  addNewGame();

  // Add listeners to difficulty button
  initDiffBtns();

  // Add listeners to the squares
  initSquareEvents();
  
  // Run the game
  runGame();
}



// Run game
function runGame() {

  // Set new game in motion
  currentColors = setColors();
  goalColorRGB = setGoalColor(currentColors);

  // make sure that text is correct on startscreen
  messageDisplay.textContent = "";
  newColorBtn.textContent = "New colors";

  // Set the colors for the squares
  // Hides squares that won't get a color
  for (var i = 0; i < squares.length; i++) {

    if (currentColors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = currentColors[i]; 

    } else {
      squares[i].style.display = "none";

    }
  }
}





// ------------------------------------------------------------------
// Extra game functions
// ------------------------------------------------------------------

// Set, display and returns goalcolor
function setGoalColor(currentColors) {

   // Get current goal color in rgb  
  var goalColorRGB = currentColors[getRandomIntInclusive(0, currentColors.length - 1)];

  // Set the color display to the current goal color
  goalColorDisplay.textContent = goalColorRGB;

  // Make sure that H1 has no background
  headerDisplay.style.background = "steelblue";

  //Return current goal color
  return goalColorRGB;
}



// Set the array with colors
function setColors() {

  var gameColors = 0;

  // Difficulty swithcer
  if (gameMode === "Hard") {
    gameColors = 6;
  } else if (gameMode === "Easy") {
    gameColors = 3;
  } else if (gameMode === "Insane") {
    gameColors = 9;
  }

  var colors = [];

  for (var i = 0; i < gameColors; i++) {
    colors.push(makeColor());
  }

  return colors;
}



// Make a random rgb color
function makeColor() {

  var newColor = "rgb(";

  newColor += getRandomIntInclusive(0, 255) + ", ";
  newColor += getRandomIntInclusive(0, 255) + ", ";
  newColor += getRandomIntInclusive(0, 255) + ")";

  return newColor;
}


// Set game to won state
function setWinningColor(squares, winningColor) {

  // Set all squares to winning color
  squares.forEach(function (square) {
    square.style.background = winningColor;
  });

  // Make the header the same as the winning color
  headerDisplay.style.background = winningColor;

  // Alter new game button text
  newColorBtn.textContent = "Play again?";
}



//Remove a class from a list of elements
function removeClass(elements, classToRemove) {

  for (var index = 0; index < elements.length; index++) {    
    elements[index].classList.remove(classToRemove);
  }
}





// ------------------------------------------------------------------
// Event listeners
// ------------------------------------------------------------------

// Add event listener to new game button 
function addNewGame() {

  newColorBtn.addEventListener("click", function(){
    runGame();
  });

}



// Add event listeners to difficulty buttons
function initDiffBtns() {

  // Loop through all diff-btns
  for (var index = 0; index < diffBtns.length; index++) {
 
    // Add the event listener
    diffBtns[index].addEventListener("click", function () {

      // Alter the game mode
      gameMode = this.textContent;

      // Remove selected from all buttons
      removeClass(diffBtns, "selected");

      // Add selected to current button
      this.classList.add("selected");

      // Set new game in motion
      runGame();

    });
  }
}



// Add event listener to squares
function initSquareEvents() {

  for (var i = 0; i < squares.length; i++) {

    squares[i].addEventListener("click", function () {

     //console.log("Goal: " + goalColorRGB + " // Selected: " + this.style.background);

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





// ------------------------------------------------------------------
// External code
// ------------------------------------------------------------------

// Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!
function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
