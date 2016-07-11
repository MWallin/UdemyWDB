var answer = prompt("Are we there yet?");

/*
while (answer !== "yes" && answer !== "yeah") {
  console.log(answer);
  var answer = prompt("Are we there yet?");
};
*/

while (answer.indexOf("yes") === -1) {
  console.log(answer);
  var answer = prompt("Are we there yet?");
};


alert("Yes, finally!!");