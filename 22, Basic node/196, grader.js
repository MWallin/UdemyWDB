
// Sum all elements of an array and return the average
function average(numbers) {
  
  var sumOfNumbers = 0;


  numbers.forEach(function(number) {

    sumOfNumbers += number;

  });


  return Math.round(sumOfNumbers / numbers.length);

}



var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores)); //should return 94

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2)); //should return 68