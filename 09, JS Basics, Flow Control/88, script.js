var answer = 7;
var guess = prompt("What number do you want to guess?");

var numGuess = Number(guess);

if (numGuess === answer) {
  alert("You guessed right!");
}

else if (numGuess < answer) {
  alert("Your guess is too low!");
}

else if (numGuess > answer) {
  alert("Your guess is too high!");
}

else {
  alert("Your guess is not a number!?");
}
