// Problem 1
console.log("1. Print all numbers between -10 and 19");

var startNumb = -10;
var endNumb = 19;

while (startNumb <= endNumb) {
  console.log(startNumb);
  startNumb++;
}


// Problem 2
console.log("2. Print all even numbers between 10 and 40");

startNumb = 10;
endNumb = 40;

while ( startNumb <= endNumb) {
  if (startNumb % 2 === 0) {
    console.log(startNumb);
  }
  startNumb++;
}


// Problem 3
console.log("3. Print all odd numbers between 300 and 333");

startNumb = 300;
endNumb = 333;

while ( startNumb <= endNumb) {
  if (startNumb % 2 === 1) {
    console.log(startNumb);
  }
  startNumb++;
}


// Problem 4
console.log("4. Print all numbers divisible by 5 AND 3 between 5 and 50");

startNumb = 5;
endNumb = 50;

while ( startNumb <= endNumb) {
  if (startNumb % 5 === 0 && startNumb % 3 === 0) {
    console.log(startNumb);
  }
  startNumb++;
}
