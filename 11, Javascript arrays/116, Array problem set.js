// #########################################################
// Print an array in reverse
// Status: DONE
//
// [1, 2, 3, 4] = 4, 3, 2, 1
// ["a", "b", "c"] = "c", "b", "a""

function printReverse(arrayToReverse){

  //Looping through the array backwards and printing each value
  for (var index = arrayToReverse.length-1; index >= 0; index--) {
    
    console.log("Value: " + arrayToReverse[index]);
  }
}

console.log("### printReverse ###");
console.log(printReverse([4,3,2,1]));
console.log(printReverse(["a","b","c","d"]));
console.log("####################");
console.log("");
console.log("");



// #########################################################
// Return if an array is uniform
// Status: DONE
//
// [1,1,1,1] = true
// [1,1,1,2] = false


function isUniform(arrayToProcess){

  var firstValue = arrayToProcess[0];
  //console.log("firstValue: " + arrayToProcess[0]);

  for (var index = 1; index < arrayToProcess.length; index++) {
  

    //console.log("currentValue: " + arrayToProcess[index]);

    if (arrayToProcess[index] !== firstValue) {
      return false;
    }

  }   

  return true;

}

console.log("### isUniform ###");
console.log(isUniform([1,1,1,1]));
console.log(isUniform([1,1,2,1]));
console.log("####################");
console.log("");
console.log("");


// #########################################################
// Returns sum all values in an array
// Status: DONE
//
// [1, 2, 3] = 6
// [10, 3, 10, 4] = 27


function sumArray(arrayToProcess){
  
  var sum = 0;

  arrayToProcess.forEach(function(value) {
    sum += value;
  });

  return sum;

}

console.log("### sumArray ###");
console.log(sumArray([1, 2, 3]));
console.log(sumArray([10, 3, 10, 4]));
console.log("####################");
console.log("");
console.log("");


// #########################################################
// Returns max value in array
// Status: DONE
//
// [1, 2, 3] = 3
// [10, 3, 10, 4] = 10


function maxValue(arrayToProcess){
  
  var max = arrayToProcess[0];

  arrayToProcess.forEach(function(element) {
   
    if (element > max) {
   
      max = element;
    }
  });  
  
  return max;
}


console.log("### maxValue ###");
console.log(maxValue([1, 2, 3]));
console.log(maxValue([10, 3, 10, 4]));
console.log(maxValue([10, -3, 99, 4]));
console.log("####################");