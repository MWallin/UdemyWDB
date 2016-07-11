// #########################################################
// Building my own forEach
// Status: 


function myForEach(arr, func) {
  
  for (var index = 0; index < arr.length; index++) {
    func(arr[index], index, arr);
    
  }
}

var myArray = [1,2,3,4];

function myFunction(currValue, currIndex) {
  console.log(currIndex + ": " + currValue);
}


console.log(myForEach(myArray, myFunction));

console.log(myForEach(myArray, function (currValue) {
  console.log("Curent value: " + currValue);
}));

