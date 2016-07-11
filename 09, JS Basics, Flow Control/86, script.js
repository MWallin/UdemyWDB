/*
var age = prompt("How old are you?")

if(age < 18) {
  alert("Sorry, you are not old enough!");
}

else if (age < 21) {
  alert("You may enter, but you may not drink.")
}

else {
  alert("Welcome, have a nice evening!")
}
*/

var age = prompt("How old are you?")

if (age < 1) {
  console.log("Invalid age") 
}

else if (age === 21) {
  alert("Happy 21 birhday!!")
}

else if (age%2 === 1) {
  alert("Your age is odd!")
}

//console.log(Math.sqrt(age))
//console.log(Math.pow(Math.sqrt(age),2))

if ( (Math.pow(Math.sqrt(age),2)) === age) {
  alert("Your age is a perfect square!! =)")
}

